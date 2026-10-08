# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Visitors evaluating Blytz Ventures, in priority order:

1. **Prospective product users** — people who should discover and try the company's products (blytz.app, blytz.work). Primary path: go to a product.
2. **Partners and clients** — teams and businesses who want to work with Blytz Ventures. Secondary path: get in touch.

## Product Purpose

The company site for Blytz Ventures, a parent company / AI product studio. It explains who the company is, presents its current products, routes visitors to them, and gives partners a direct way to make contact. Success means a first-time visitor understands the company and leaves for a product, or contacts the company as a partner.

## Positioning

Blytz Ventures is the studio behind governed AI products for marketing operations: blytz.app (scoped AI-agent access to ad platforms, human-in-the-loop) and blytz.work (a hosted AI marketing department with an approval inbox). The through-line: AI agents do the work, the human keeps authority.

## Operating Context

- Based in Malaysia (+60), Southeast Asia-first framing carried from the incumbent site.
- Products are live web applications: blytz.app and blytz.work.
- Deployed as a static/edge site on Cloudflare Workers (wranger + `pnpm deploy`).
- Consultancy/startup-studio work is reduced to one short line, not a services catalog.

## Capabilities and Constraints

- Static Astro site; visually part of the blytz.app family.
- Per `adsintel/AGENTS.md` public-site rule: static, semantic Astro markup and site-owned tokens; do not import Astryx components or console theme files; add no client-side JavaScript by default (hydrate only for a documented interaction).
- Ventures section shows exactly two products: blytz.app and blytz.work.
- Claim-free: no stats, testimonials, customer logos, or case studies. Do not fabricate.
- Contact details are the only conversion data: hello@blytzventures.com, +60 19-888 1005.

## Brand Commitments

- Company name: Blytz Ventures. Product wordmarks: blytz.app, blytz.work (lowercase "blytz").
- Visual family: blytz.app's "System Terminal" — near-black grounds (#030303 / #050505), signal lime (#e5ec5b), JetBrains Mono (display/body/mono) + Schibsted Grotesk (marketing display), sharp 1–2px radii, subtle lime grid motif, terminal-style labels ("BLYTZ://...").
- Copy is English.
- Canonical token source: blytz.app public site (`adsintel/site/src/styles/tokens.css`, roles named `--xt-*`).

## Evidence on Hand

- Live product sites with real product copy: blytz.app (governed MCP gateway for Meta Ads; human-in-the-loop) and blytz.work (hosted AI marketing department; approval inbox).
- Canonical design tokens: blytz.app public CSS / `adsintel` site tokens.
- Confirmed contact channels: hello@blytzventures.com, +60 19-888 1005, LinkedIn, Threads, Instagram.
- **Absences:** no customer statistics, testimonials, press, or case studies — future work must not invent them.

## Product Principles

1. **Products first** — every section either leads toward blytz.app / blytz.work or gets out of the way.
2. **Honest by default** — no invented proof, no stale venture claims; if it is not live and true, it does not ship.
3. **One family, one system** — the site reads as a sibling of blytz.app, using the same palette, type, and terminal vocabulary.
4. **Partner-friendly** — a quiet, clear secondary path for partnerships and contact.
5. **Lean surface** — static, fast, semantic; no client JS unless an interaction requires it.

## Accessibility & Inclusion

Shared requirements across the blytz surfaces: semantic structure, keyboard access, visible focus, reduced-motion support, and non-color status cues.
