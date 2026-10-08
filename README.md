# Blytz Ventures — company site

Company home for **Blytz Ventures**, the AI product studio behind [blytz.app](https://blytz.app) and [blytz.work](https://blytz.work). A static Astro site drawn in the blytz.app "System Terminal" visual family, deployed as a Cloudflare Worker with a D1-backed contact API.

Live: [https://blytzventures.com](https://blytzventures.com)

## Stack

- **Astro 7** — static output, no client framework
- **Self-hosted fonts** — Schibsted Grotesk Variable + JetBrains Mono via Fontsource
- **Cloudflare Workers + Static Assets** (`wrangler`), **D1** for contact submissions
- **Site-owned tokens** — `src/styles/tokens.css` mirrors the canonical blytz.app public-site roles (`--xt-*`); no Tailwind, no React, no Astryx imports

## Structure

```
src/
├── components/site/    # Header, Footer, IconArrow, AppStage, WorkStage
├── layouts/Layout.astro
├── pages/              # index, contact, blog
├── styles/             # tokens.css, global.css
└── _worker.js          # /api/contact + static asset serving
public/favicon.svg
wrangler.jsonc          # worker config (assets: dist/, D1 binding)
```

## Commands

Requires [pnpm](https://pnpm.io/) (or `npx pnpm@9`).

```bash
pnpm install     # install dependencies
pnpm dev         # dev server at localhost:4321
pnpm build       # static build to dist/
pnpm preview     # preview the build
pnpm check       # astro type/diagnostic check
pnpm deploy      # build + wrangler deploy
```

## Deploy

Deploys via Cloudflare Workers (`wrangler deploy`, worker `blytz-ventures-web`, assets from `dist/`). Push to `main` is the production path through Workers Builds. Contact submissions land in the `blytz-ventures-contact` D1 database via `POST /api/contact`.

## Design & product docs

- [`DESIGN.md`](DESIGN.md) — the visual system record (tokens, type, components, rules)
- [`PRODUCT.md`](PRODUCT.md) — product truth (audience, positioning, constraints)
- Public-site rule: static semantic Astro, site-owned tokens, no client-side JS by default; every interface vignette ships labeled "illustrative".
