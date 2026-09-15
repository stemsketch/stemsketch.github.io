import { describe, expect, it } from "vitest";

import { foundationReady, generateSite, repositoryId } from "../src/index.js";

describe("phase 0 foundation", () => {
  it("identifies the repository", () => {
    expect(repositoryId).toBe("stemsketch-github-io");
  });

  it("reports foundation ready", () => {
    expect(foundationReady()).toBe(true);
  });

  it("ships a static homepage that does not require author-services", () => {
    const html = generateSite().get("index.html") ?? "";
    expect(html).toContain("STEMSketch");
    expect(html).not.toMatch(/author-services\/api/i);
  });
});
