# 05 — Source Code

The React/JSX components and data that build the HTMLs in `02-design-review-decks/` and `03-guest-packs/`. **You only need this folder if you're editing the designs.**

## Structure

```
05-source-code/
├── components/
│   ├── SignalBrand.jsx         ← Brand system visualisations (colour/type cards)
│   ├── GuestPack.jsx           ← Main guest-pack layout
│   ├── GuestPackCover.jsx      ← Guest-pack cover page
│   ├── SocialCards.jsx         ← Pull-quote / promo cards
│   └── ThreeThemesSpread.jsx   ← The "three themes" layout used in guest packs
├── data/
│   └── guests.js               ← Guest content (Kamaal, Kevin, future guests)
└── design-canvas.jsx           ← The canvas that arranges components side-by-side
```

## How it fits together

The HTMLs in `02-design-review-decks/` are Babel-compiled-in-browser React. They load:

1. `../01-brand-system/colors_and_type.css` — styles
2. These JSX component files via `<script type="text/babel">`
3. `data/guests.js` — puts `window.GUESTS` into scope

No build step. Open the HTML → browser transpiles JSX on the fly.

## Editing guest content (common task)

Open `data/guests.js` and edit the relevant guest object. Fields:

- `name`, `role`, `agency`, `photo`, `episode`, `recordingDate`, `location`, `address`, `releaseWindow`
- `quote` — the pull-quote we'll highlight on social
- `whyInvited` — array of 3 reasons
- `career` — array of `{ years, role, company }`
- `themes` — array of `{ title, framing, prompts, moment }`

Save → refresh the HTML. Done.

## Editing layouts

Each component is a single `.jsx` file with styled-component-style inline CSS. Components are registered to `window` so they're shared across `<script>` tags.

## Rebuilding the standalone HTMLs

The `(standalone)` versions in `02-` and `03-` are manually exported with everything inlined. If you edit the source and need new standalones, someone with dev access needs to re-export them.
