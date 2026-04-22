# 03 — Guest Packs

Pre-recording prep documents sent to each guest. Covers: episode logistics, why we invited them, the themes we want to explore, suggested prompts, and the pull-quote moment we're listening for.

## Files

```
03-guest-packs/
├── Kamaal Watkins - Guest Pack.html       ← edits folder structure
├── Kevin Oti - Guest Pack.html            ← edits folder structure
└── standalone/                            ← send these to guests
    ├── Kamaal Watkins - Guest Pack (standalone).html
    └── Kevin Oti - Guest Pack (standalone).html
```

## ⚠ Which one to send?

**Always send the `standalone/` versions.** They're single-file HTMLs with everything inlined — the guest just opens it in any browser. No broken images, no missing fonts.

The non-standalone versions are for internal editing/review only — they load fonts and logos from `../01-brand-system/`.

## Converting to PDF

Open the standalone HTML in a browser → Cmd+P (Mac) / Ctrl+P (Windows) → Save as PDF. The layout is print-optimised.

## Episode details (at a glance)

| Guest | Episode | Recording | Release |
|---|---|---|---|
| Kamaal Watkins | 007 | Sat 2 May 2026, 14:00 · Regus, Hanover Sq | Week of 19 May 2026 |
| Kevin Oti | — | See pack for details | — |

Full details in each pack.

## Editing guest content

Guest data is centralised — don't edit the HTMLs by hand. Instead:

1. Open `../05-source-code/data/guests.js`
2. Edit the relevant guest object (name, themes, quote, career, etc.)
3. Re-open the HTML — it reads from that data file.

To regenerate the standalone versions after editing, you'll need someone with dev access to re-export — ping Trisden.
