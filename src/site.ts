import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  generateReferenceDocument,
  loadApiSnapshot,
  loadGallery,
  loadIrCatalog,
  loadPackages,
  loadReleases,
} from "./content.js";

export interface SitePage {
  path: string;
  title: string;
  heading: string;
  body: string;
}

const REPOS: Record<string, string> = {
  stemsketch: "https://github.com/stemsketch/stemsketch",
  "stemsketch-ir": "https://github.com/stemsketch/stemsketch-ir",
  "stemsketch-compiler": "https://github.com/stemsketch/stemsketch-compiler",
  "stemsketch-artifacts": "https://github.com/stemsketch/stemsketch-artifacts",
  "author-services": "https://github.com/stemsketch/author-services",
  "author-studio": "https://github.com/stemsketch/author-studio",
  "stemsketch.github.io": "https://github.com/stemsketch/stemsketch.github.io",
};

function linkTo(fromFile: string, targetFile: string): string {
  const fromDir = fromFile.includes("/") ? fromFile.slice(0, fromFile.lastIndexOf("/") + 1) : "";
  const fromDepth = fromDir ? fromDir.split("/").filter(Boolean).length : 0;
  const prefix = fromDepth === 0 ? "./" : "../".repeat(fromDepth);
  return `${prefix}${targetFile}`.replaceAll("\\", "/");
}

function navItems(fromFile: string): Array<{ href: string; label: string }> {
  return [
    { href: linkTo(fromFile, "index.html"), label: "Home" },
    { href: linkTo(fromFile, "docs/index.html"), label: "Docs" },
    { href: linkTo(fromFile, "architecture/index.html"), label: "Architecture" },
    { href: linkTo(fromFile, "ir/index.html"), label: "IR" },
    { href: linkTo(fromFile, "examples/index.html"), label: "Examples" },
    { href: linkTo(fromFile, "gallery/index.html"), label: "Gallery" },
    { href: linkTo(fromFile, "tutorials/index.html"), label: "Tutorials" },
    { href: linkTo(fromFile, "reference/index.html"), label: "Reference" },
    { href: linkTo(fromFile, "releases/index.html"), label: "Releases" },
  ];
}

function layout(page: SitePage): string {
  const stylesheet = linkTo(page.path, "assets/site.css");
  const nav = navItems(page.path)
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${page.title}</title>
    <link rel="stylesheet" href="${stylesheet}" />
  </head>
  <body>
    <a class="skip" href="#main">Skip to main content</a>
    <header>
      <p>STEMSketch</p>
      <nav aria-label="Primary">
        <ul>
          ${nav}
        </ul>
      </nav>
    </header>
    <main id="main">
      <h1>${page.heading}</h1>
      ${page.body}
    </main>
    <footer>
      <p>
        Static GitHub Pages site. Authoring APIs are documented as a snapshot and are not required
        to read these pages.
      </p>
    </footer>
  </body>
</html>
`;
}

function rows(cells: string[][]): string {
  return cells.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("");
}

export function sitePages(): SitePage[] {
  const ir = loadIrCatalog();
  const packs = loadGallery();
  const releases = loadReleases();
  const packages = loadPackages();
  const api = loadApiSnapshot();
  const kindRows = ir.kinds.map((kind) => [kind.id, kind.role, kind.summary]);
  const packageRows = packages.map(
    (item) =>
      [
        item.name,
        `<a href="${REPOS[item.repo] ?? REPOS.stemsketch}">${item.repo}</a>`,
        item.summary,
      ] as string[],
  );
  const apiRows = api.operations.map((item) => [item.method, item.path]);

  return [
    {
      path: "index.html",
      title: "STEMSketch",
      heading: "STEMSketch",
      body: `<p>IR-first tools for authoring, compiling, and presenting STEM knowledge. This static site does not require Author Services to render.</p>
<p>Start with <a href="${linkTo("index.html", "docs/index.html")}">public docs</a>, the <a href="${linkTo("index.html", "gallery/index.html")}">artifact gallery</a>, or <a href="${linkTo("index.html", "tutorials/index.html")}">tutorials</a>.</p>
<p>Canonical architecture: <a href="${REPOS.stemsketch}/blob/main/docs/adr/0001-stemsketch-greenfield-architecture.md">ADR-0001</a>.</p>`,
    },
    {
      path: "docs/index.html",
      title: "STEMSketch docs",
      heading: "Public documentation",
      body: `<p>These pages are a static snapshot for GitHub Pages. Authenticated authoring stays in Author Studio.</p>
<ul>
  <li><a href="${linkTo("docs/index.html", "architecture/index.html")}">Architecture</a></li>
  <li><a href="${linkTo("docs/index.html", "ir/index.html")}">IR stack</a></li>
  <li><a href="${linkTo("docs/index.html", "examples/index.html")}">Examples</a></li>
  <li><a href="${linkTo("docs/index.html", "reference/index.html")}">Generated references</a></li>
  <li><a href="${linkTo("docs/index.html", "releases/index.html")}">Release information</a></li>
</ul>
<p>Open the VS Code client from the <a href="${REPOS["author-studio"]}">author-studio</a> repository.</p>`,
    },
    {
      path: "architecture/index.html",
      title: "STEMSketch architecture",
      heading: "Architecture",
      body: `<p>Canonical authored intent lives in typed IRs. SVG, HTML, Canvas, Krita, and Blender are compiler targets, not sources of truth.</p>
<p>Seven repositories keep that split: <code>stemsketch-ir</code> owns schemas, <code>stemsketch-compiler</code> owns passes, <code>stemsketch</code> owns runtime and workspace storage, <code>stemsketch-artifacts</code> owns packs, <code>author-services</code> owns <code>/api/v1</code>, <code>author-studio</code> is the VS Code client, and this site publishes static docs.</p>
<p><code>stemsketch-ir</code> must never depend on <code>stemsketch-compiler</code>. This website must not call Author Services merely to display documentation.</p>`,
    },
    {
      path: "ir/index.html",
      title: "STEMSketch IR",
      heading: "Intermediate representations",
      body: `<p>Schema version <code>${ir.schemaVersion}</code>. Canonical kinds describe meaning. Target kinds are compiler outputs.</p>
<table>
  <thead><tr><th>Kind</th><th>Role</th><th>Summary</th></tr></thead>
  <tbody>${rows(kindRows)}</tbody>
</table>`,
    },
    {
      path: "examples/index.html",
      title: "STEMSketch examples",
      heading: "Examples",
      body: `<p>The first full lesson is <strong>${packs.lesson.title}</strong> (<code>${packs.lesson.id}</code>). ${packs.lesson.summary}</p>
<p>Pack JSON lives in <a href="${REPOS["stemsketch-artifacts"]}">stemsketch-artifacts</a>. A browser viewer in the product repo plays a static <code>deck.json</code> without Author Services.</p>
<p>See the <a href="${linkTo("examples/index.html", "gallery/index.html")}">gallery</a> for each pack snapshot on this site.</p>`,
    },
    {
      path: "gallery/index.html",
      title: "STEMSketch gallery",
      heading: "Artifact gallery",
      body: `<p>Static catalog snapshot. Digests and publication stay in Author Services; this page only lists corpus packs.</p>
<div class="cards">${packs.packs
        .map(
          (pack) =>
            `<article class="card"><h2>${pack.title}</h2><p><code>${pack.id}</code></p></article>`,
        )
        .join("")}</div>`,
    },
    {
      path: "tutorials/index.html",
      title: "STEMSketch tutorials",
      heading: "Tutorials",
      body: `<ol>
  <li>Author Knowledge and Artifact IR as JSON in a STEMSketch workspace.</li>
  <li>Validate locally. Trusted compile accepts only valid IR.</li>
  <li>Compile and preview through Author Studio, which calls Author Services remotely. This website does not perform that step.</li>
  <li>Publish packs from the server. Consume pinned releases into a local workspace.</li>
  <li>Read architecture, IR, and gallery pages here after they are generated into GitHub Pages.</li>
</ol>
<p>Studio source: <a href="${REPOS["author-studio"]}">author-studio</a>.</p>`,
    },
    {
      path: "reference/index.html",
      title: "STEMSketch reference",
      heading: "Generated references",
      body: `<p>Built from committed content JSON at site build time. <a href="${linkTo("reference/index.html", "reference.json")}">reference.json</a></p>
<h2>Packages</h2>
<table>
  <thead><tr><th>Package</th><th>Repository</th><th>Summary</th></tr></thead>
  <tbody>${rows(packageRows)}</tbody>
</table>
<h2>Author Services snapshot</h2>
<p>${api.note}</p>
<table>
  <thead><tr><th>Method</th><th>Path</th></tr></thead>
  <tbody>${rows(apiRows)}</tbody>
</table>`,
    },
    {
      path: "releases/index.html",
      title: "STEMSketch releases",
      heading: "Release information",
      body: `<p>Development channel <code>${releases.channel}</code>. Package versions remain <code>0.0.0</code> until public npm publishing starts.</p>
<ul>${releases.notes.map((note) => `<li><strong>${note.title}</strong> — ${note.summary}</li>`).join("")}</ul>`,
    },
    {
      path: "404.html",
      title: "Page not found — STEMSketch",
      heading: "Page not found",
      body: `<p>That URL is not part of the static site. Return to the <a href="${linkTo("404.html", "index.html")}">home page</a>.</p>`,
    },
  ];
}

export function generateSite(): Map<string, string> {
  const files = new Map<string, string>();
  for (const page of sitePages()) {
    files.set(page.path, layout(page));
  }
  files.set("assets/site.css", readStyles());
  files.set("reference.json", `${JSON.stringify(generateReferenceDocument(), null, 2)}\n`);
  files.set(".nojekyll", "");
  return files;
}

function readStyles(): string {
  return readFileSync(join(dirname(fileURLToPath(import.meta.url)), "../assets/site.css"), "utf8");
}

export function writeSite(outputDir: string): void {
  const files = generateSite();
  for (const [relative, contents] of files) {
    const target = join(outputDir, relative);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, contents);
  }
}
