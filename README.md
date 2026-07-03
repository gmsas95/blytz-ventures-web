# Blytz Ventures

Official company landing page for **Blytz Ventures** — a startup studio and technology consultancy building ventures and shipping products across Southeast Asia.

Live site: [https://blytz-ventures-web.blytzventures.workers.dev](https://blytz-ventures-web.blytzventures.workers.dev)

## Tech Stack

- **[Astro](https://astro.build/)** — Static site generation
- **[React 19](https://react.dev/)** — Interactive UI islands
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first styling
- **[Cloudflare Workers](https://workers.cloudflare.com/)** — Edge hosting & contact form API
- **[Cloudflare D1](https://developers.cloudflare.com/d1/)** — Contact form submissions database
- **[Untitled UI Icons](https://untitledui.com/)** — Iconography

## Getting Started

Requires [pnpm](https://pnpm.io/).

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Deploy to Cloudflare Workers
pnpm deploy
```

## Project Structure

```
src/
├── components/
│   ├── react/        # React 19 interactive islands (Header, Hero, Services, Ventures, CTA, Footer)
│   ├── base/         # Untitled UI base components
│   ├── foundations/  # Icons, logos, featured icons
│   ├── marketing/    # Marketing section templates
│   └── *.astro       # Legacy Astro components
├── layouts/          # Page layout wrappers
├── pages/            # Route-based pages (Astro)
├── lib/              # Shared utilities
├── styles/           # Global CSS
└── _worker.js        # Cloudflare Worker entry point (contact API + static assets)
```

## Ventures

- **[blytz cloud](https://blytz.cloud)** — AI assistant platform *(coming soon)*
- **[blytz marketplace](https://marketplace.blytz.cloud/)** — E-commerce & live auctions
- **[blytz work](https://work.blytz.cloud/)** — Fastest job matching
- **blytz site** — Website builder platform *(coming soon)*

## Contact Form

The contact form on `/contact` posts to `/api/contact`, handled by `src/_worker.js`. Submissions are stored in the `blytz_ventures_contact` D1 database (`contact_submissions` table).

## Deployment

The site is deployed to Cloudflare Workers with static assets. The build pipeline runs:

```bash
pnpm run build      # Generate static site into dist/
npx wrangler deploy # Deploy Worker + assets
```

Configuration is in [`wrangler.jsonc`](./wrangler.jsonc).

---

© Blytz Ventures. All rights reserved.
