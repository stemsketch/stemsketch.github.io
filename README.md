# STEMSketch marketing site

End-user marketing site for [STEMSketch](https://anime.os20.org), deployed to **https://stemsketch.github.io**.

Built with Astro. The `/authors/` route is kept for internal reference but is **not linked** from the public site and is excluded from search indexing.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Deploy

Pushes to `main` run [.github/workflows/deploy.yml](.github/workflows/deploy.yml) (Node 22.12+).

## Pages

| Route | Audience |
|-------|----------|
| `/` | Home — educators |
| `/product` | Feature overview |
| `/pricing` | Plans (placeholder prices) |
| `/docs` | Help center & FAQ |
| `/legal` | Links to app terms/privacy |
| `/authors` | Internal only (no nav links, noindex) |
