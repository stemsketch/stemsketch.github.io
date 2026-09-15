import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

import {
  checkAccessibility,
  checkInternalLinks,
  checkStaticIsolation,
  generateReferenceDocument,
  generateSite,
} from "../src/index.js";
import { loadIrCatalog, loadPackages } from "../src/content.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

describe("static website", () => {
  const files = generateSite();

  it("builds every public docs surface", () => {
    for (const path of [
      "index.html",
      "docs/index.html",
      "architecture/index.html",
      "ir/index.html",
      "examples/index.html",
      "gallery/index.html",
      "tutorials/index.html",
      "reference/index.html",
      "releases/index.html",
      "404.html",
      "assets/site.css",
      "reference.json",
      ".nojekyll",
    ]) {
      expect(files.has(path)).toBe(true);
    }
  });

  it("has no broken internal links", () => {
    expect(checkInternalLinks(files)).toEqual([]);
  });

  it("passes structural accessibility checks", () => {
    const html = new Map([...files].filter(([path]) => path.endsWith(".html")));
    expect(checkAccessibility(html)).toEqual([]);
  });

  it("does not require Author Services to display documentation", () => {
    expect(checkStaticIsolation(files)).toEqual([]);
  });

  it("generates references from the committed IR and package catalogs", () => {
    const generated = generateReferenceDocument();
    const parsed = JSON.parse(files.get("reference.json") ?? "{}") as {
      kinds: Array<{ id: string }>;
      packages: Array<{ name: string }>;
    };
    expect(generated.generated).toBe(true);
    expect(parsed.kinds.map((kind) => kind.id)).toEqual(
      loadIrCatalog().kinds.map((kind) => kind.id),
    );
    expect(parsed.packages.map((item) => item.name)).toEqual(
      loadPackages().map((item) => item.name),
    );
    expect(files.get("reference/index.html")).toContain("@stemsketch/graph");
    expect(files.get("ir/index.html")).toContain("stemsketch.knowledge");
  });

  it("automates GitHub Pages from the static dist folder", () => {
    const workflow = readFileSync(join(root, ".github/workflows/pages.yml"), "utf8");
    expect(workflow).toContain("permissions:");
    expect(workflow).toContain("pages: write");
    expect(workflow).toContain("actions/upload-pages-artifact");
    expect(workflow).toContain("path: dist");
    expect(workflow).toContain("actions/deploy-pages");
    expect(workflow).not.toMatch(/author-services\/api/i);
  });
});
