# Blytz Ventures

Official company landing page for Blytz Ventures — building the future, one venture at a time.

Built with [Astro](https://astro.build) for blazing-fast performance.

## Tech Stack

- **Astro** — Server-rendered site on Cloudflare Workers
- **Tailwind CSS** — Utility-first styling
- **CSS Animations** — Lightweight, no-JS animations
- **Cloudflare D1** — Persisted contact form submissions

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Apply the contact form schema locally
npm run d1:migrate:local
```

## Contact Form Persistence

The `/contact` page posts to `POST /api/contact` and stores submissions in Cloudflare D1.

Before local development or deployment, create the D1 database, replace the placeholder `database_id` in `wrangler.jsonc`, and apply the migration:

```bash
# Create the database once and copy the returned database_id into wrangler.jsonc
npx wrangler d1 create blytz-ventures-db

# Apply the schema locally
npm run d1:migrate:local

# Apply the schema remotely
npm run d1:migrate:remote
```

If you prefer automatic provisioning on deploy, keep the D1 binding in `wrangler.jsonc` and let Wrangler write back the generated database ID when deploying from the CLI.

## Structure

```
src/
├── components/     # Reusable UI components
├── layouts/        # Page layout wrapper
├── pages/          # Route-based pages
└── styles/         # Global CSS
```

## Ventures

- **Blytz Live** — Live auction platform
- **Blytz Digital** — Digital services & web development
- **Blytz Media** — Content creation & entertainment
- **Blytz Labs** — R&D and emerging tech

---

Configured for Cloudflare deployment.
