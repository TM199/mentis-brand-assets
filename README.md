# The Signal — Design Handoff

Everything you need to work on **The Signal** (Mentis Digital's podcast) lives in this folder. It's organised so you can find any file in under 30 seconds.

> **The Signal** is Mentis Digital's podcast about the recruitment industry — the conversations that don't usually happen openly. Host: Trisden. Format: long-form, guest-led, themed around career turning-points.

---

## 📂 Folder map — start here

| Folder | What's inside | When you need it |
|---|---|---|
| [`01-brand-system/`](./01-brand-system) | Colours, type, fonts, logos, CSS tokens | Any time you're designing something new for The Signal |
| [`02-design-review-decks/`](./02-design-review-decks) | Design exploration HTMLs, in iteration order | Reviewing design direction or showing the journey |
| [`03-guest-packs/`](./03-guest-packs) | Guest prep packs (Kamaal, Kevin) | Sending to guests ahead of recording |
| [`04-source-assets/`](./04-source-assets) | Photos (guests + team) | Drop-in image assets for promo, decks, packs |
| [`05-source-code/`](./05-source-code) | React/JSX components + guest data | If you need to edit or rebuild any of the HTMLs |

Each folder has its own README with more detail.

---

## 🎯 Common tasks — quick index

**"I need to send a guest pack to someone."**
→ `03-guest-packs/standalone/` — standalone HTMLs (no external dependencies, work offline). Open in a browser, or export to PDF via Cmd/Ctrl+P.

**"I want to see the latest agreed design direction."**
→ `02-design-review-decks/03 - The Signal - Review v2.html` — this is the current approved direction.

**"I'm building something new and need the brand colours/fonts."**
→ `01-brand-system/colors_and_type.css` — drop this into your project. Everything is CSS variables.

**"I need the logo."**
→ `01-brand-system/logo/` — SVGs are preferred. `primary.svg` for light backgrounds, `mono-navy.svg` for single-colour, `mark.svg` is the standalone icon, `horizontal.png` if a raster is unavoidable.

**"I need guest photos."**
→ `04-source-assets/guest-photos/`

**"I want to edit a guest pack."**
→ Edit data in `05-source-code/data/guests.js`, then re-open the HTML in `03-guest-packs/`.

---

## 📐 Design rules (non-negotiable)

From the brand system — these are baked into `colors_and_type.css`:

- **Never** use `#000000` — use `var(--mentis-ink)` (`#0F2237`).
- **Never** use `#FFFFFF` as a page background — use `var(--mentis-alice)` (`#F2F6FB`).
- Harvest Gold (`#D4980F`) ≤ **5%** of any surface.
- Body text: 85% opacity on Alice Blue, 100% on Deep Space Blue.
- **Left-align by default**. Never centre body copy.
- Type: **Fraunces** (display) + **Inter** (body). Both are in `01-brand-system/fonts/`.

Full tokens + semantic classes are in `01-brand-system/colors_and_type.css`.

---

## 🗂 File naming conventions

- **Design review decks** are numbered by iteration (`01`, `02`, `03`). Higher = newer.
- **"(standalone)"** in a filename = the file has all assets inlined and works offline. Use these for sending out.
- **Without "(standalone)"** = references files in `01-brand-system/`. Keep the folder structure intact to view these locally.

---

## 🚀 Opening the HTML files

All HTMLs are designed to open directly in a browser — just double-click. For the non-standalone decks to render fonts and logos correctly, keep the folder structure intact (they load relative paths from `01-brand-system/`).

If fonts look wrong: check the `01-brand-system/fonts/` folder is in place relative to `01-brand-system/colors_and_type.css`.

---

## ❓ Questions

Anything unclear, ping Trisden. For design-system questions, the rules in `01-brand-system/colors_and_type.css` (comments at the top) are the source of truth.

---

_Last updated: April 2026_
