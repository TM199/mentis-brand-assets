# Mentis Digital — DESIGN.md

> Stitch-format design system for AI agents (Claude Design, Google Stitch, v0, Lovable, Framer AI, Cursor).
> Drop this file into any project root and tell the agent "use this DESIGN.md". Everything an agent needs to render on-brand is in or linked from this file.
> For the long-form master reference (voice, copy register, imagery rules, asset inventory), see [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md) in the same repo.

---

## 1. Visual Theme & Atmosphere

Editorial, restrained, quietly confident — the register of a senior UK operator, not a marketing agency.

Think **FT × Pilot.com × Monocle × Heidrick & Struggles**: generous whitespace, structural type, warm human photography, one accent colour (Harvest Gold) used sparingly, cool editorial blues doing the structural work. Light-theme default with deliberate Deep Space Blue dark bands for rhythm — never gradient-heavy, never neon, never playful-startup.

**Feel:** cool editorial calm, warm human moments, rigour. Never performative. Never dashboardy. Never SaaS-y.

**Density:** consultancy-density, not app-grid density. Breathe.

---

## 2. Colour Palette & Roles

| Token | Hex | RGB | Role |
|---|---|---|---|
| `deep-space-blue` | `#1A3A5C` | 26 / 58 / 92 | Primary dark. Nav, headings on light, hero backgrounds, dark section bleeds. |
| `crayola-blue` | `#2878E8` | 40 / 120 / 232 | Primary bright. CTAs, links, interactive states, accent highlights. |
| `harvest-gold` | `#D4980F` | 212 / 152 / 15 | Accent warm. **Max 5% of any surface.** Earned emphasis only. |
| `alice-blue` | `#F2F6FB` | 242 / 246 / 251 | Default light background. **Never pure white.** |
| `sky-reflection` | `#8AABC8` | 138 / 171 / 200 | Dividers, borders, secondary text, disabled states, desaturated logos. |
| `ink` | `#0F2237` | 15 / 34 / 55 | Body text, headings on light. **Never pure black.** |

**Hard rules:**
- `#000000` forbidden. Use `ink`.
- `#FFFFFF` backgrounds forbidden. Use `alice-blue`. `#FFFFFF` is acceptable only as *text* on dark surfaces.
- `harvest-gold` is max 5% of any surface.
- Body text runs at 85% opacity on Alice Blue, 100% on Deep Space Blue.

---

## 3. Typography Rules

Two families — both free on Google Fonts, **never substitute**.

- **Fraunces** — editorial serif. Use for all headlines, display numbers, pull-quotes. Weights: 500, 600, 700. Italic permitted.
- **Inter** — humanist sans. Use for all body, labels, CTAs, captions. Weights: 400, 500, 600. Roman only — no italic body.

| Element | Family | Weight | Size (desktop) | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Display H1 | Fraunces | 700 | 52–64 px | 1.05 | -0.02 em |
| H2 | Fraunces | 600–700 | 38 px | 1.15 | -0.015 em |
| H3 | Fraunces | 600 | 26 px | 1.2 | -0.01 em |
| Subtitle (italic) | Fraunces italic | 500 | 24 px | 1.3 | 0 |
| Body | Inter | 400 | 17 px | 1.6 | 0 |
| Body small | Inter | 400 | 14 px | 1.5 | 0.01 em |
| Overline / label | Inter | 500 | 12.5 px | 1.4 | 0.08 em uppercase |
| Pull-quote | Fraunces italic | 500 | 20 px | 1.4 | 0 |
| CTA button | Inter | 500 | 15–16 px | 1 | 0.02 em |

**Rules:** left-align everything by default, centre only single-line headings, never centre body copy.

---

## 4. Component Stylings

### Buttons
- **Primary:** Crayola Blue `#2878E8` fill, Alice Blue label, Inter 500 15 px, 12 px radius, 14 × 24 padding. Hover: 8% darker, subtle lift (`translateY(-1px)`). Focus: 2 px ring Crayola Blue at 40%.
- **Secondary / ghost:** Transparent fill, 1 px Crayola Blue border, Crayola Blue label. Hover: 6% Crayola Blue fill.
- **Tertiary / link:** Inline Inter 500 Crayola Blue with underline on hover.
- **Never:** multi-colour gradients, drop shadows, outline effects, full-pill radii.

### Cards
- Alice Blue fill on Alice Blue canvas, 1 px Sky Reflection border, 12–16 px radius, 32–48 px padding. Shadow: `0 1px 2px rgba(15,34,55,.04), 0 12px 32px -8px rgba(15,34,55,.08)`.
- Card headings Fraunces 600. Card body Inter 400 at 85% opacity.
- On Deep Space Blue surfaces: card becomes Alice Blue at 8% (glass), border Alice Blue at 14%.

### Inputs
- 1 px Sky Reflection border, 10 px radius, 12 × 16 padding, Inter 16 px body. Focus: border Crayola Blue, ring 2 px at 30%. Placeholder Ink at 55%.

### Navigation
- Sticky top, Alice Blue at 90% opacity with 12 px backdrop-blur. Logo left (horizontal lockup or mark), Inter 500 links right. Active link: 2 px Crayola Blue underline, 4 px offset below text.

### Chips / pills
- Crayola Blue at 12% fill, Crayola Blue label, Inter 600 12 px, 4 × 10 padding, 999 px radius. Warn variant: Harvest Gold at 15% fill, Harvest Gold deeper label.

---

## 5. Layout Principles

- **Max content width:** 1200 px.
- **Grid:** 12 columns, 24 px gutters.
- **Section padding:** 80–120 px vertical.
- **Card padding:** 32–48 px.
- **Spacing scale (px):** 4, 8, 12, 16, 24, 32, 48, 64, 80, 120.
- **Radii:** 0 (none), 6 (pills), 10 (inputs), 12 (cards), 16 (large cards), 999 (chips).

### Rhythm
Alternate surface colour across sections for editorial cadence. Default sequence: Alice Blue → Alice Blue → Deep Space Blue bleed → Alice Blue → Alice Blue → Deep Space Blue bleed. Never two dark bands back-to-back. Every 3–4 sections get a dark palate-cleanser.

### Composition patterns (use these by default)
- **Hero:** split asymmetric (text left 55%, visual right 45%) OR centred column on Alice Blue. Not full-bleed photo hero.
- **Logo strip:** single row, 64 px gutters, 28–32 px logo height, all at Sky Reflection 70% opacity unless explicitly "current clients".
- **Feature-card grid:** 3 equal columns, 24 px gutters, 32–48 px card padding.
- **Process flow:** 3-step horizontal with Crayola Blue numbered circle badges + 1 px Sky Reflection connector. Optional Deep Space Blue bleed backdrop.
- **Stat band:** 4–5 equal columns, Fraunces 700 60–80 pt numerals + Inter 14 pt labels + 11 pt attribution.
- **Testimonial rail:** 3 equal cards OR 1 hero + 2 stacked (asymmetric). Oversized Harvest Gold quote glyph as accent.
- **Team row:** 3–4 equal cards, 1:1 square headshot, 12 px radius, Fraunces 600 name.
- **Credibility strip:** quiet monochrome row of 5–8 desaturated logos at 28–32 px height.
- **CTA band:** full-bleed image with Deep Space Blue 60% scrim, centred content, dual buttons.

---

## 6. Depth & Elevation

Four surface levels, never more.

| Level | Use | Shadow |
|---|---|---|
| 0 | Canvas, flat sections | none |
| 1 | Standard card | `0 1px 2px rgba(15,34,55,.04), 0 12px 32px -8px rgba(15,34,55,.08)` |
| 2 | Featured card (testimonials, hero cards) | `0 4px 12px rgba(15,34,55,.06), 0 24px 56px -12px rgba(15,34,55,.14)` |
| 3 | Modal / popover | `0 24px 64px -16px rgba(15,34,55,.28)` |

**No inset shadows. No glow. No gradient borders. No neon.**

---

## 7. Do's & Don'ts

### Do
- Use Alice Blue as the default canvas.
- Break page rhythm with Deep Space Blue full-bleed bands every 3–4 sections.
- Use Harvest Gold sparingly for emphasis — single numbers in stat bands, opening quote glyphs, accent rules.
- Pair every photograph with generous whitespace; let rooms breathe.
- Desaturate credibility / tool logos to Sky Reflection 70% opacity.
- Match photography aspect ratios to existing container dimensions so layouts don't shift.
- Keep UI restrained; let the type carry weight.

### Don't
- Don't use pure black or pure white.
- Don't exceed 5% Harvest Gold on any surface.
- Don't add gradient backgrounds, neon glows, playful illustrations, rounded-everything aesthetics.
- Don't build dashboards or signal-feed UIs for clients — internal mechanism stays internal.
- Don't centre body copy.
- Don't use exclamation marks, emojis, or hype vocabulary (unlock, game-changer, revolutionary, disrupt, leverage-as-verb).
- Don't render logos as clients when they're only credibility / prior-experience (KPMG, PwC, Cambridge, etc.).
- Don't stack two dark bands back-to-back.

---

## 8. Responsive Behaviour

### Breakpoints
- **Mobile:** ≤ 640 px
- **Tablet:** 641–1023 px
- **Desktop:** ≥ 1024 px
- **Wide:** ≥ 1440 px (content still capped at 1200)

### Collapsing strategy
- 3-column feature grids → 1 column stacked on mobile, gutter shrinks 24 → 16.
- 2×2 scenario grids → 1 column on mobile.
- Split hero → stacks with visual above or below text, not beside.
- Stat bands → 2 × 2 on mobile (never 4 stacked).
- Logo strip → scrolls horizontally or wraps with equal spacing.
- Team row → 1 column on mobile, headshots stay ≤ 280 px wide.

### Touch targets
Minimum 44 × 44 px. Buttons 48 px tall on mobile. 16 px minimum tap gutter between stacked CTAs.

### Type scale on mobile
H1 52 → 36 px. H2 38 → 28 px. Body stays 17 → 16 px. Stat numerals 72 → 48 px.

---

## 9. Agent Prompt Guide

### Quick colour reference
```
Deep Space Blue  #1A3A5C  (primary dark)
Crayola Blue     #2878E8  (primary bright / CTA)
Harvest Gold     #D4980F  (accent, ≤5%)
Alice Blue       #F2F6FB  (default background)
Sky Reflection   #8AABC8  (borders, dividers)
Ink              #0F2237  (text, never black)
```

### Asset entry points (all in this repo)
- Logos: `/logo/primary-vector.svg` (stacked), `/logo/mark-vector.svg` (mark only), `/logo/horizontal-2048.png` (wide lockup), `/logo/wordmark.png`
- Real team: `/team/` — trisden, malik, josh (+ canonical bios in `/team/README.md`)
- Real case studies: `/case-studies/` — steve-jcs, michael-titan, jamie-flink (+ canonical metrics & quotes in `/case-studies/README.md`)
- Real client logos: `/client-logos/` — james-chase, titan, flink
- Credibility logos: `/credibility-logos/` — Cambridge, KPMG, PwC, Reed, TEKsystems, David Lloyd *(NEVER as clients)*
- Growth scenarios: `/growth-scenarios/` — outgrown, feast-famine, bd-hire, burned
- Editorial photography: `/photography/` (8 images)
- Stationery flat-lays: `/flat-lays/` (4)
- 3D premium hero renders: `/signature/` (4)
- Illustrations: `/illustrations/` (10)
- Icons: `/icons/` (24, Lucide-derived, Deep Space Blue)
- Backgrounds: `/backgrounds/` (12)

### Ready-to-use prompts

**Build a marketing page that feels on-brand:**
> Using DESIGN.md, build a marketing page for Mentis Digital. Start with a centred Alice Blue hero (headline in Fraunces 700 64pt, sub-line Inter 18pt, single Crayola Blue CTA). Follow with a quiet client-logo strip, three-column service cards, a Deep Space Blue process-flow band, an Alice Blue stat band with real numbers, a 3-card case-study rail, a team row, a desaturated credibility strip, and a full-bleed CTA band with cta.jpg and a Deep Space Blue 60% scrim. Use assets from /team, /case-studies, /client-logos, /credibility-logos. Respect all rhythm and depth rules. British English, no emojis, no exclamation marks.

**Build a pitch slide:**
> Using DESIGN.md, build a single 16:9 pitch slide. Alice Blue background. Small Mentis mark top-left. Massive Fraunces 700 H1 left-aligned, max 5 words. 2 px Harvest Gold horizontal rule 80 px wide under the headline. Short Inter body sub-line at 85% opacity. Tiny Inter uppercase section label top-right.

**Build a proposal cover:**
> Using DESIGN.md, build an A4 portrait proposal cover. Deep Space Blue full-bleed background. Massive Fraunces 700 display headline, Alice Blue. Fraunces italic accent sub-line in Harvest Gold. Bottom-left: Mentis horizontal logo in Alice Blue + client name + date in Inter caps.

---

## File index — what to feed an agent

Minimum set for on-brand output:
1. [`DESIGN.md`](./DESIGN.md) — this file (drop into project root)
2. [`tokens.json`](./tokens.json) — machine-readable tokens
3. [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md) — long-form master reference (voice, imagery rules, full asset inventory)
4. `/team/README.md`, `/case-studies/README.md`, `/growth-scenarios/README.md`, `/credibility-logos/README.md`, `/client-logos/README.md` — canonical content for each real-world asset bucket

That's it. Any AI design agent with these inputs produces Mentis-grade output first-try.
