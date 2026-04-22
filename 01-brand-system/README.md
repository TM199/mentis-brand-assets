# 01 — Brand System

The foundation layer. Everything visual for The Signal (and Mentis Digital more broadly) starts here.

## What's in here

```
01-brand-system/
├── colors_and_type.css    ← The source of truth. CSS variables + semantic classes.
├── fonts/                 ← Variable font files (self-hosted)
│   ├── Fraunces-Variable.ttf
│   ├── Fraunces-Italic-Variable.ttf
│   ├── Inter-Variable.ttf
│   └── Inter-Italic-Variable.ttf
└── logo/                  ← Logo variants
    ├── primary.svg        ← Default. Use on light (Alice Blue) backgrounds.
    ├── mono-navy.svg      ← Single-colour navy. Use when colour isn't available.
    ├── mark.svg           ← Icon only (no wordmark).
    ├── horizontal.png     ← Raster fallback. Only if SVG isn't possible.
    └── reversed.svg       ← [missing — recreate from mono-navy with --mentis-alice fill]
```

## How to use `colors_and_type.css`

Drop it into any HTML project:

```html
<link rel="stylesheet" href="path/to/colors_and_type.css" />
```

Then use the CSS variables or semantic classes directly. **Never hard-code hex values** — all palette colours are defined as `--mentis-*` variables.

### Core palette (locked — do not add)

| Variable | Hex | Role |
|---|---|---|
| `--mentis-deep` | `#1A3A5C` | Deep Space Blue — primary dark |
| `--mentis-bright` | `#2878E8` | Crayola Blue — CTAs, links |
| `--mentis-gold` | `#D4980F` | Harvest Gold — accent, ≤5% |
| `--mentis-alice` | `#F2F6FB` | Alice Blue — default background |
| `--mentis-sky` | `#8AABC8` | Sky Reflection — borders, secondary |
| `--mentis-ink` | `#0F2237` | Ink — body text (never `#000`) |

### Type

- Display: **Fraunces** (variable, 100–900, italic + roman)
- Body: **Inter** (variable, 100–900, italic + roman)
- Both self-hosted in `fonts/` — `@font-face` is already declared at the top of the CSS.

### Semantic classes

`.t-h1 · .t-h2 · .t-h3 · .t-h4 · .t-body · .t-lead · .t-small · .t-overline · .t-quote · .t-section-marker`

Plus layout helpers: `.container · .section · .section--shift · .section--deep · .on-deep · .hairline`

## Extending the system

Derived tints/darks (`--mentis-alice-deep`, `--mentis-deep-hover`, hairlines) are already defined. **Don't introduce new hues.** If you need a new tint, derive it from an existing palette colour with opacity.
