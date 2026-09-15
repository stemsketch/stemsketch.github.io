# stemsketch.github.io

Static public website for STEMSketch, deployed with GitHub Pages.

This site hosts project documentation, architecture overview, IR docs, examples, a pack gallery, tutorials, generated package/IR references, and release notes. It must not require the authoring backend merely to display static documentation. Authenticated authoring stays in Author Studio.

See [ADR-0001](https://github.com/stemsketch/stemsketch/blob/main/docs/adr/0001-stemsketch-greenfield-architecture.md).

## Status

Phase 19: static docs, gallery snapshot, generated `reference.json`, link and accessibility checks, and a GitHub Pages deploy workflow.

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

`pnpm build` emits TypeScript to `lib/` and writes the GitHub Pages tree to `dist/`.
