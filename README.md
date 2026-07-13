# Yugen — izakaya · small plates & sake bar

A design-showcase website template by **Parable**: a fourteen-seat izakaya at the end of a
fictional alley. Charcoal kushiyaki, cold sake, a bowl you build yourself — and a noren curtain
you scroll through to get in.

**Live:** https://bswxyz.github.io/yugen/ · **Build notes:** [/guide/](https://bswxyz.github.io/yugen/guide/)

## The concept

Yūgen (幽玄) is the beauty of what's partly hidden. The site takes that literally:

- **Noren curtain parallax** — the hero hangs four indigo fabric panels (stretched inline SVG:
  gradient, weave pattern, wavy hem, stitch line) off a rod. Scrolling parts them sideways, lifts
  each at its own depth, and swings them a couple of degrees — you walk *into* the page. The house
  crest is split across the two centre panels, so scrolling opens the mon. An idle CSS sway
  (desynchronised 7–8s loops on an inner wrapper) keeps the fabric breathing in a doorway draft.
- **The shime bowl-builder** — every ingredient is a named SVG layer. Native radios and
  checkboxes (styled as cards) toggle layers with a small overshoot ease; price and kcal total in
  an `aria-live` region. The default bowl ships pre-assembled, so it reads complete without JS.
- **An "open now?" clock** — a weekly hours table drives a status pill and highlights today's row.
  Closed Mondays; the grill rests.
- **All art is inline SVG** — the bowl, the alley, the counter, the lantern row, the sake shelf,
  the cat. Zero image requests; linework rides `currentColor` so it re-inks when the theme flips.

## Design system

| Token | Dark (default) — the room at night | Light — the washi menu |
| --- | --- | --- |
| `--bg` | sumi-night `#14100e` | washi `#f2ede2` |
| `--ink` | washi `#f2ede2` | sumi `#1a1512` |
| `--accent` | lantern-lit indigo `#7fa1d0` | indigo `#33507a` |
| `--persimmon` | `#e0592e` | `#b04217` |

- **Type:** Shippori Mincho (display) · Karla (body) · Space Mono (prices, hours, captions).
- **Signature ease:** `--ease-noren: cubic-bezier(.30,.06,.16,1)` — fabric falling back to rest.
  `--ease-pop: cubic-bezier(.34,1.40,.44,1)` — ingredients landing in the bowl.
- Theme toggles in the nav and persists to `localStorage("yugen-theme")`, bootstrapped inline in
  `<head>` before first paint.

## Stack

- [Astro 5](https://astro.build), zero client framework — menu, ingredients and hours are typed
  arrays in frontmatter, rendered to static HTML.
- One inline vanilla script: theme, curtain parallax, scroll reveals, counters, bowl builder,
  clock, demo form. Everything is gated behind a `.js` class and honest under
  `prefers-reduced-motion` (curtain still and parted, steam at one frame, instant reveals).
- No external images, no CDN scripts, no analytics.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321/yugen/
npm run build      # emits ./docs for GitHub Pages
npm run preview
```

## Structure

```
src/
├── pages/
│   ├── index.astro        # the site — data in frontmatter, one inline script
│   └── guide.astro        # "How Yugen was built" → /guide/
├── components/
│   ├── Bowl.astro         # the shime bowl — every ingredient a named SVG layer
│   └── RoomScene.astro    # alley / counter / lanterns / shelf ink scenes
└── styles/
    └── global.css         # both themes' tokens at the top, everything else after
public/.nojekyll           # keep GitHub Pages away from underscored files
astro.config.mjs           # base '/yugen', outDir './docs'
```

## Demo vs. real

This is a **showcase template**. The restaurant, the alley, the sake list and Kenji are fiction.
The reservation form **validates and confirms in place but sends nothing** — wire it to your own
endpoint (Formspree, a serverless function, an actual phone) before taking real bookings. The
bowl-builder's prices and kcal are invented but plausible; swap in your own data in
`index.astro`'s frontmatter.

## License

[MIT](./LICENSE) © 2026 Parable
