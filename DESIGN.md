---
name: Blytz Ventures Website
description: Company site for Blytz Ventures, drawn in the blytz.app "System Terminal" visual family.
colors:
  signal: "#e5ec5b"
  signal-hover: "#f1f58a"
  signal-soft: "#292b13"
  on-signal: "#050505"
  background: "#030303"
  background-raised: "#050505"
  surface: "#18181b"
  surface-raised: "#202024"
  text: "#ffffff"
  text-muted: "#a1a1aa"
  line: "#27272a"
  line-strong: "#3f3f46"
  danger: "#ff6b7a"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, sans-serif"
    fontSize: "clamp(2.5rem, 6.5vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  product:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "clamp(2rem, 3.4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.08em"
rounded:
  control: "1px"
  panel: "2px"
  round: "9999px"
spacing:
  step-1: "4px"
  step-2: "8px"
  step-3: "12px"
  step-4: "16px"
  step-6: "24px"
  step-8: "32px"
  step-12: "48px"
  step-16: "64px"
  step-20: "80px"
  step-24: "96px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-signal}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.signal-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.control}"
    padding: "4px 8px"
  field:
    backgroundColor: "{colors.background-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    padding: "0"
---

# Design System: Blytz Ventures Website

## Overview

**Creative North Star: "Extracta // System Terminal"**

This site is a sibling of blytz.app, not a lookalike: it consumes the same canonical token roles (the `--xt-*` family defined in `adsintel/site/src/styles/tokens.css`) so the company and its products read as one system. The mode is Persuade, but the material is operational — a marketing surface that behaves like a console. Near-black grounds, one acid signal color, mono type as the house voice, ruled regions instead of floating cards.

The page tells its story through product stages: a full-viewport hero with the company line and a real blytz.app workflow capture, then each product walks the full width with its own live-status, its own verdict, and its own door — shown through real captures of the live products.

**Key Characteristics:**
- One accent, earned: signal lime marks only actions, live states, and the human-approval moment.
- Ruled, not rounded: structure comes from 1px rules and regions, radii stay at 1–2px.
- Mono voice: JetBrains Mono carries labels, body, data; Schibsted Grotesk appears only as display.
- Honest surfaces: media are real captures of the live products with provenance captions; no proof claims ship.

## Colors

A committed single-accent palette: near-black neutrals plus acid lime. Dark is the product's own world (blytz.app is dark-only), not a category default.

### Primary
- **Signal Lime** (#e5ec5b): primary actions, live status, the approval moment, focus rings, link color. Rare by design — it marks interactivity and system state, never decoration.
- **Signal Lime Hover** (#f1f58a): hover state for signal-colored actions and links.
- **Signal Soft** (#292b13): selection background and quiet signal-tinted fields.

### Neutral
- **Terminal Black** (#030303): page ground.
- **Raised Black** (#050505): alternating stage ground, footer ground, input fields.
- **Zinc Surface** (#18181b): console chrome strips, inset console regions.
- **Zinc Surface Raised** (#202024): secondary raised chrome.
- **Terminal White** (#ffffff): primary text.
- **Muted Zinc** (#a1a1aa): secondary text, labels, placeholder text.
- **Hairline** (#27272a): default rules and region borders.
- **Strong Hairline** (#3f3f46): interactive borders, console panel borders.

### Named Rules
**The One Signal Rule.** #e5ec5b appears only on actions, statuses, and the human-decision moment. If the page looks yellow-green at a glance, it is wrong.

**The Contrast Floor Rule.** Muted text (#a1a1aa) never sits on a lighter surface than #050505, where it measures ≈6.9:1. Placeholders keep full token color; never add opacity.

## Typography

**Display Font:** Schibsted Grotesk Variable (fallback: sans-serif)
**Body Font:** JetBrains Mono (fallback: monospace)
**Label Font:** JetBrains Mono, uppercase with 0.08em tracking

**Character:** A two-voice system. Schibsted Grotesk is the poster voice — big, tight, only at page and product scale. JetBrains Mono is the working voice — everything else, including running body text, which is what makes the surface read as infrastructure rather than brochure.

### Hierarchy
- **Display** (700, clamp(2.5rem–5rem), 1.04, -0.035em): the hero thesis only. Max 18ch.
- **Product** (700, clamp(2rem–2.75rem), 1.08, -0.02em): product wordmarks; the `.app`/`.work` suffix takes signal color.
- **Body** (400, 1rem, 1.6): running copy at a 50ch measure for stage copy, 65ch available for longer prose.
- **Label** (400, 0.6875rem, 0.08em, uppercase): chips, console chrome, statuses, field labels, footer column heads.

### Named Rules
**The Display-Only Rule.** Schibsted Grotesk never sets body copy, labels, or UI. If it is not a page or product headline, it is mono.

## Layout

A rail model: `.rail` (max 76rem) for interior pages, `.rail-wide` (max 84rem) for the home surface and header/footer, with a fluid gutter `clamp(1.25rem, 4vw, 3rem)`. The hero fills the viewport (`100svh` minus the header) as a two-column grid — 6fr copy / 5fr media — collapsing to one column below 1080px. Product stages are two-column grids (5fr copy / 7fr media) that mirror—copy left for blytz.app, media left for blytz.work—and collapse to a single column below 960px. Vertical rhythm runs on a 4px-step scale with 128px stage padding desktop and 64px mobile. Space above a heading exceeds space below it (24px above tagline scale vs 12px below).

## Elevation & Depth

Depth is tonal, not shadowed. Grounds step #030303 → #050505 → #18181b to separate regions, and 1px rules do the rest. Exactly one shadow exists — `shadow-panel` (0 1.5rem 4rem -2rem rgb(0 0 0 / 80%)) — reserved for console vignettes and the sticky header to lift them off the page. No glows, no gradient text, no glass.

## Shapes

A sharp, industrial geometry: controls 1px radius, panels 2px, the sole round element is the status dot (and the `--radius-round` token kept for completeness). Structure comes from ruled bands and inset regions; there is no card-within-card nesting — the prepared-change block inside the console is an inset region of the same panel, separated by rules and surface tone, not another card.

## Components

### Buttons
- **Shape:** near-square (1px radius), mono 12px, 12px × 20px padding.
- **Primary:** signal background, #050505 text; used once per stage as the product door.
- **Hover / Focus:** hover shifts to signal-hover; focus-visible is a 2px signal outline, offset 2px; disabled drops to 0.65 opacity with `not-allowed` and pinned base color.
- **Ghost:** transparent with strong-hairline border; hover shifts border and text to signal.

### Chips
- **Style:** 1px border, 11px uppercase mono, 4px × 8px padding, transparent ground. `chip-signal` uses signal text with a 38% signal border; `chip-quiet` uses muted text on hairline.
- **State:** a 6px dot leads live statuses; the Meta Ads live chip's dot pulses (1.8s alternate) — the page's one authored motion. Text always states the status, so color is never the only cue.

### Cards / Containers
There are no cards. Regions are: **console vignettes** (1px strong-hairline panels with a #18181b chrome strip, shadow-panel, radii 2px), and **stage bands** separated by hairline rules. Vignettes always close with a figcaption labeling them illustrative.

### Inputs / Fields
- **Style:** #050505 ground, 1px strong-hairline border, 1px radius, mono 12px, 12px × 16px padding.
- **Focus:** border shifts to signal plus the standard 2px focus outline.
- **Error / status:** form-level only — a ruled status line that turns signal on success, `--xt-danger` on failure.

### Navigation
Sticky header, #030303 at 94% with an 8px backdrop blur, 1px bottom hairline. Wordmark is mono 700 with the `://` in signal. Nav links are muted mono; the two product links carry the arrow icon; Contact is a bordered box that turns signal on hover. Below 560px the header wraps to two rows; no hamburger, no JS.

**The Console Vignette (signature)**

The system's defining component: a captured interface panel. Real screenshots of the live products (stored in `public/media/`, WebP at 2x) sit inside the console frame — a `#18181b` chrome strip carrying `blytz://capture — <product>` and a status chip, then the image, then a caption with provenance ("Captured from blytz.app · October 2026") and any illustrative status. Chrome wraps below 560px. This is how the products are shown — at working scale, honestly labeled, never as marketing renders.

## Do's and Don'ts

### Do:
- **Do** consume `--xt-*`/`--site-*` tokens only; every new page starts from `src/styles/tokens.css`.
- **Do** keep the page static: no client JS except the contact form's submission script.
- **Do** label every captured interface with its provenance and illustrative status in the figcaption.
- **Do** use the arrow SVG (`IconArrow.astro`) for every outbound/action arrow; one stroke weight, one size family.
- **Do** theme browser surfaces: selection, caret, scrollbar, focus ring are all signal-derived.

### Don't:
- **Don't** import Astryx or console theme files (public-site rule in `adsintel/AGENTS.md`).
- **Don't** add a second accent color or any gradient.
- **Don't** create card-within-card nesting; inset with rules and surface tone instead.
- **Don't** put a kicker/eyebrow above any heading.
- **Don't** ship proof claims, stats, or testimonials; the products are the evidence.
