# Mentis Digital — Design System

**Single source of truth for anyone (human or AI) generating design work for Mentis Digital.**
This file is intentionally Claude-readable: dense, unambiguous, no marketing fluff.

---

## 1. Brand in one paragraph

Mentis Digital is a managed business-development service for UK recruitment agencies (10–80 heads). We run a three-layer system — proprietary signal detection, human judgement, and direct senior outreach — so recruitment agencies stop riding the feast-and-famine cycle. **We are a service brand, not a SaaS product.** The team is the promise. Every touchpoint should feel like it came from a senior, quietly confident partner — not a growth-marketing tool.

**Reference register:** FT + Pilot.com + Monocle + Heidrick & Struggles. Editorial, restrained, warm, rigorous.

**Target reader:** UK agency director, time-poor, sceptical, has been burned by outbound tools. Needs to trust before they move.

---

## 2. Palette (locked — do not substitute)

| Name | Hex | RGB | Role |
|---|---|---|---|
| Deep Space Blue | `#1A3A5C` | `26 / 58 / 92` | Primary dark. Nav, headings on light, hero backgrounds. The anchor. |
| Crayola Blue | `#2878E8` | `40 / 120 / 232` | Primary bright. CTAs, links, interactive, accent highlights. Energy without frivolity. |
| Harvest Gold | `#D4980F` | `212 / 152 / 15` | Accent warm. Max 5% of any surface. Earned emphasis only. |
| Alice Blue | `#F2F6FB` | `242 / 246 / 251` | Default background — **never pure white**. |
| Sky Reflection | `#8AABC8` | `138 / 171 / 200` | Borders, dividers, secondary text, disabled states. |
| Ink | `#0F2237` | `15 / 34 / 55` | Body text, headings on light — **never pure black**. |

### Hard rules

- **Never** `#000000`. Use Ink `#0F2237`.
- **Never** `#FFFFFF` backgrounds. Use Alice Blue `#F2F6FB`.
- `#FFFFFF` is acceptable only for text on dark backgrounds.
- Harvest Gold `#D4980F` is **≤ 5% of any surface**.
- Body text runs at **85% opacity** against Alice Blue; 100% on Deep Space Blue.
- Default to cool editorial calm. Warmth comes from the photography and the gold accent, not from background washes.

---

## 3. Typography (locked)

**Headline:** Fraunces — Google Fonts — weights 400 / 500 / 600 / 700, italic permitted.
**Body:** Inter — Google Fonts — weights 400 / 500 / 600 / 700, roman only.

Never swap fonts. Both free on Google Fonts.

### Scale

| Element | Family | Weight | Size | Line height | Letter spacing |
|---|---|---|---|---|---|
| H1 / Title | Fraunces | 700 | 52px (3.25rem) | 1.1 | -0.02em |
| H2 / Heading | Fraunces | 600–700 | 38px (2.375rem) | 1.15 | -0.015em |
| H3 / Subheading | Fraunces | 600 | 26px (1.625rem) | 1.2 | -0.01em |
| Body | Inter | 400 | 17px (1.0625rem) | 1.6 | 0 |
| Small / caption | Inter | 400 | 14px | 1.5 | 0.01em |
| Overline / label | Inter | 500 | 12.5px | 1.4 | 0.08em, uppercase |
| Quote | Fraunces italic | 500 | 20px | 1.4 | 0 |

### Rules

- Headlines: tight letter-spacing, heavier weight, left-aligned. They carry editorial weight.
- Body: generous line-height (1.55–1.65), left-aligned by default. Consultancy register, not app-grid density.
- Overlines are always uppercase with 0.08em tracking — used for section markers like `SIGNALS` / `PLAYBOOK` / `CASE STUDY`.
- Never centre body copy. Centre only single-line section headings.

---

## 4. Logo

Four SVG lockups in `logo/`:

- `primary.svg` — mark + wordmark, for most surfaces.
- `horizontal.svg` — tight-height version for narrow headers and LinkedIn banner.
- `mark.svg` — mark alone; favicon, avatar, watermark.
- `reversed.svg` — for Deep Space Blue or photo backgrounds.

**Clear space:** `0.5×` the mark's height on all sides.
**Minimum sizes:** print 25mm wide; digital 80px wide; mark-only 16×16 or 32×32.
**Never:** recolour, rotate, stretch, condense, apply effects, place on busy photography without a scrim.

---

## 5. Voice

Mentis sounds like a senior operator who has sat in the agency director's chair. Direct. Unhurried. Never performative.

### Write in

- **British English** (organise, behaviour, recognise, programme, centre).
- Short declarative sentences.
- Specific proof: numbers, named clients, dated moments.

### Never use

- American spellings or idioms.
- Exclamation marks.
- Emojis.
- Hype vocabulary: *unlock, game-changer, synergies, supercharge, seamless, revolutionary, disrupt, leverage (verb), elevate, empower.*
- Rhetorical questions as filler ("Ever wondered how…?").
- Dashboard / SaaS metaphors ("your command centre", "one source of truth for pipeline").

### Three voice pillars

1. **Direct.** Say the sharp thing clearly. *"Your outbound doesn't work because junior BDRs are doing senior work. We fix that."*
2. **Rigorous.** Every claim earned with a number or named client. *"3.4× more qualified meetings in the first 60 days. Average across 12 UK agencies, 2025."*
3. **Quietly confident.** No chest-beating. *"We've run this play for eleven agencies. We know what the second month looks like."*

---

## 6. Imagery rules

### Photography (`photography/`)
- Warm, diverse by default (race, age, gender), UK-native cast.
- Real workplace moments: meetings, hallway conversations, focused solo work, coffees, whiteboard moments, genuine laughter.
- Lighting: natural daylight, warm side-light, soft shadow.
- **Never** FT-editorial-serious, stock-corporate, "skyscraper at dusk", macro, drone, heavy HDR.

### Illustration (`illustrations/`)
- Flat, geometric, editorial — all from a single locked Recraft style.
- Palette-pure (only our 6 brand hues).
- Show both **the system and the human acting on it** — a person at a screen with a signal panel; a meeting with data on the wall; three stacked layers representing data / judgement / execution.
- Max 3 of the 6 hues per illustration. Consistent 2px stroke at native size.

### Icons (`icons/`)
- Lucide-derived, MIT-licensed, recoloured to Deep Space Blue on light, Alice Blue on dark.
- Single stroke weight (2px at 24×24). No fills, no gradients, no shadows. Rounded endpoints.
- Minimum size 16×16. Never mix stroke weights on the same surface.

### 3D signature (`signature/`)
- Four hero renders for premium use (pitch covers, website heroes, proposal front pages).
- `3d-mark-crystal.png` — frosted glass mark. `3d-mark-embossed.png` — gold foil on deep blue. `3d-spatial-cards.png` — glass-morphism composition. `3d-spatial-blocks.png` — matte 3D shapes.

### Backgrounds (`backgrounds/`)
- 12 hand-coded SVGs. Palette-pure. Use at low opacity (≤ 15%) as texture, never at full intensity.

---

## 7. Layout principles

- Max content width: 1200px.
- Section vertical padding: 80–120px.
- Card padding: 32–48px.
- 12-column grid, 24px gutters.
- Alternate Alice Blue and white-adjacent sections (never pure white), with occasional Deep Space Blue sections for emphasis.
- Generous whitespace — whitespace carries the weight, not decoration.
- Left-aligned text by default.

---

## 8. What this brand must never look like

- A SaaS landing page with product screenshots and "Try free" CTAs.
- A cold-outreach vendor (Apollo / Instantly / Lemlist register).
- A traditional staffing firm (suited-stock-photo energy).
- Anything that centres a tool over the people running it.
- A "playful" startup brand with rounded illustrations and pastel backgrounds.

When in doubt: **editorial, restrained, warm, senior.**

---

## 9. Asset inventory (this repo)

| Folder | Count | Notes |
|---|---|---|
| `logo/` | 4 SVGs + sources | Primary, horizontal, mark, reversed. |
| `icons/` | 24 SVGs | Lucide-derived, recoloured to `#1A3A5C`. Concepts: pipeline, signal, meeting, contact, research, campaign, report, dashboard, message, call, email, calendar, search, filter, chart-up, chart-down, target, handshake, briefcase, document, checkmark, warning, insight, team. |
| `illustrations/` | 10 SVGs | Hero, process, three-layer-system, signal-detection, team-at-work, outcome, consultation, proposal, weekly-report, partnership. Palette-corrected. |
| `backgrounds/` | 12 SVGs | Abstracts, gradient meshes, grid dots/lines, isometric, dataviz. |
| `photography/` | 8 JPGs (4K) | Warm, diverse cast. Director confident, meeting warmth, team celebration, walking London, handshake cafe, coffee clink, founder warmth, whiteboard moment. |
| `flat-lays/` | 4 JPGs (4K) | Business card, folder, letterhead, pitch book — shot 45° above, shallow depth. |
| `signature/` | 4 PNGs | 3D hero renders (crystal, embossed, spatial cards, spatial blocks). |

**Total: 66 brand assets.**

---

## 10. Design tokens

Machine-readable token file: [`tokens.json`](./tokens.json).

Follows the W3C Design Tokens draft format. Includes palette, type families, type scale, spacing hints, and hard rules. Anyone generating code-shaped design (React components, marketing pages, email) should read this first.

---

## 11. Reference inspiration

If you need a quick visual reference for what "right" looks like:
- **FT.com** — headline typography confidence + editorial restraint.
- **Pilot.com** — managed-service voice + problem/solution structure + warm photography.
- **Heidrick & Struggles** — executive firm-not-product register + massive typographic hierarchy.
- **Stripe** (pre-2023) — density of ideas per screen without noise.

**Never** use as reference: generic SaaS landing templates, agency "we're disruptors" sites, anything on ThemeForest.
