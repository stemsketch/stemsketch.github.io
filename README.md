# stemsketch.github.io

Static public website for STEMSketch, deployed with GitHub Pages.

This site hosts project documentation, architecture overview, examples, galleries, and generated references. It must not require the authoring backend merely to display static documentation.

See [ADR-0001](https://github.com/stemsketch/stemsketch/blob/main/docs/adr/0001-stemsketch-greenfield-architecture.md).

## Status

Phase 0 foundation: a static stub plus CI. Full docs/gallery publishing is Phase 19.

## Local development

Requires Node.js 24.21+ and [pnpm](https://pnpm.io/) 11.

```bash
pnpm install
pnpm format-check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

`pnpm build` typechecks the smoke package and copies `index.html` to `dist/`.
