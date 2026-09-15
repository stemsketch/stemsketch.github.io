import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export interface IrKind {
  id: string;
  role: "canonical" | "target";
  summary: string;
}

export interface IrCatalog {
  schemaVersion: string;
  kinds: IrKind[];
}

export interface PackageRecord {
  name: string;
  repo: string;
  summary: string;
}

export interface GalleryPack {
  id: string;
  title: string;
}

export interface GalleryCatalog {
  lesson: { id: string; title: string; summary: string };
  packs: GalleryPack[];
}

export interface ReleaseNote {
  id: string;
  title: string;
  summary: string;
}

export interface ReleaseCatalog {
  channel: string;
  notes: ReleaseNote[];
}

export interface ApiSnapshot {
  note: string;
  basePath: string;
  operations: Array<{ method: string; path: string }>;
}

const contentRoot = join(dirname(fileURLToPath(import.meta.url)), "../content");

function readJson<T>(name: string): T {
  return JSON.parse(readFileSync(join(contentRoot, name), "utf8")) as T;
}

export function loadIrCatalog(): IrCatalog {
  return readJson("ir.json");
}

export function loadPackages(): PackageRecord[] {
  return readJson<{ packages: PackageRecord[] }>("packages.json").packages;
}

export function loadGallery(): GalleryCatalog {
  return readJson("gallery.json");
}

export function loadReleases(): ReleaseCatalog {
  return readJson("releases.json");
}

export function loadApiSnapshot(): ApiSnapshot {
  return readJson("api-snapshot.json");
}

export function generateReferenceDocument(): {
  schemaVersion: string;
  generated: true;
  kinds: IrKind[];
  packages: PackageRecord[];
  api: ApiSnapshot;
} {
  const ir = loadIrCatalog();
  return {
    schemaVersion: ir.schemaVersion,
    generated: true,
    kinds: ir.kinds,
    packages: loadPackages(),
    api: loadApiSnapshot(),
  };
}
