import { posix } from "node:path";

const HREF = /(?:href|src)="([^"]+)"/g;

export function collectRefs(html: string): string[] {
  return [...html.matchAll(HREF)]
    .map((match) => match[1])
    .filter((value): value is string => Boolean(value));
}

export function resolveSitePath(fromFile: string, href: string): string | undefined {
  if (href.startsWith("#")) {
    return fromFile;
  }
  if (/^[a-z]+:/i.test(href)) {
    return undefined;
  }
  const directory = fromFile.includes("/") ? fromFile.slice(0, fromFile.lastIndexOf("/")) : "";
  let resolved = posix.normalize(posix.join(directory, href));
  if (resolved.startsWith("../") || resolved === "..") {
    throw new Error(`link escapes site root: ${href} from ${fromFile}`);
  }
  if (resolved.endsWith("/")) {
    resolved = `${resolved}index.html`;
  } else if (!resolved.includes(".") && resolved !== "index.html") {
    resolved = `${resolved}/index.html`;
  }
  return resolved.replace(/^\.\//, "");
}

export function checkInternalLinks(files: Map<string, string>): string[] {
  const errors: string[] = [];
  for (const [path, html] of files) {
    for (const href of collectRefs(html)) {
      let resolved: string | undefined;
      try {
        resolved = resolveSitePath(path, href);
      } catch (error) {
        errors.push(error instanceof Error ? error.message : String(error));
        continue;
      }
      if (!resolved) {
        continue;
      }
      if (!files.has(resolved)) {
        errors.push(`broken link ${href} on ${path} -> ${resolved}`);
      }
    }
  }
  return errors;
}

export function checkAccessibility(files: Map<string, string>): string[] {
  const errors: string[] = [];
  for (const [path, html] of files) {
    if (!html.includes('lang="en"')) {
      errors.push(`${path} missing lang`);
    }
    if (!/<title>[^<]+<\/title>/.test(html)) {
      errors.push(`${path} missing title`);
    }
    if (!html.includes('href="#main"')) {
      errors.push(`${path} missing skip link`);
    }
    if (!html.includes('id="main"') || !html.includes("<main")) {
      errors.push(`${path} missing main landmark`);
    }
    if (!/<h1>[^<]+<\/h1>/.test(html)) {
      errors.push(`${path} missing h1`);
    }
    if (!html.includes('aria-label="Primary"')) {
      errors.push(`${path} missing labeled navigation`);
    }
    const images = [...html.matchAll(/<img\b([^>]*)>/g)];
    for (const image of images) {
      if (!image[1]?.includes("alt=")) {
        errors.push(`${path} image missing alt`);
      }
    }
  }
  return errors;
}

export function checkStaticIsolation(files: Map<string, string>): string[] {
  const errors: string[] = [];
  for (const [path, html] of files) {
    if (
      /fetch\s*\(/.test(html) ||
      /author-services\/api/i.test(html) ||
      /localhost:\d+/.test(html)
    ) {
      errors.push(`${path} must not call Author Services to render`);
    }
  }
  return errors;
}
