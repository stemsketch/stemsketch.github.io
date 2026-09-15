import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

import { foundationReady, repositoryId } from "../src/index.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

describe("phase 0 foundation", () => {
  it("identifies the repository", () => {
    expect(repositoryId).toBe("stemsketch-github-io");
  });

  it("reports foundation ready", () => {
    expect(foundationReady()).toBe(true);
  });

  it("ships a static homepage that does not require author-services", () => {
    const html = readFileSync(join(root, "index.html"), "utf8");
    expect(html).toContain("STEMSketch");
    expect(html).not.toMatch(/author-services\/api/i);
  });
});
