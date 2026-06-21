# STEMSketch marketing site

Static marketing site for [STEMSketch](https://github.com/stemsketch/app), deployed to GitHub Pages at **https://stemsketch.github.io**.

Built with [Astro](https://astro.build). The live editor runs at **https://anime.os20.org**.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushes to `main` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

**First-time setup:** In the GitHub repo → Settings → Pages → Build and deployment → Source: **GitHub Actions**.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/product` | End-user editor features |
| `/authors` | Architecture F authoring toolchain |
| `/pricing` | Plans (placeholder prices; limits from platform quotas) |
| `/docs` | Links to GitHub documentation |
| `/legal` | Links to app terms and privacy |

## Configuration

External URLs are centralized in [`src/config/site.ts`](src/config/site.ts). Plan feature matrix mirrors `PLAN_QUOTAS` in the platform monorepo.
