# CURRENT_STATE.md — PatternForms Website Audit

**Date:** 2026-05-25  
**Branch:** `astro-migration`  
**Purpose:** Pre-migration audit. Read-only. No source files modified.

---

## 1. Brand Document Summary

### CLAUDE.md
Coding guidelines that bias toward caution and simplicity: state assumptions before implementing, write minimum code, touch only what the task requires. References the two brand docs below as required reading for all visual/voice decisions. The key instruction for migration work: no speculative abstractions, no "improving" adjacent code.

### 260518_PF-BR-02_Voice_v0.2.md (Voice)
PatternForms sounds like "an atelier with an engineer's discipline — research-led, technically literate, ambitious about the work, plain-spoken about the stage we're at." Five governing principles: show the system (not the slogan), precise and ambitious, invent in public, tech-fluent and architecturally credible, style matters. Hard rules include: lead with the noun, short sentences (8–20 words), active voice, no marketing-speak. Vocabulary includes specific avoided words (unlock, holistic, ecosystem, dream home) and required terms (DfMA, KoP, BOM, chassis, dwelling).

### 260518_PF-BR-03_VisualIdentity_v0.4.md (Visual Identity)
Six tile primitives (solid, empty, quarter-pie, half-disc, three-quarter fill, diagonal split) are the atomic brand unit — they build the mark, icons, patterns, and hero compositions. Four colours: ink `#0A0A0A`, paper `#F6F4EF`, white (transparent default for PatternForms), and terracotta `#B8553A` as functional accent only. Typography: Unbounded display (always UPPERCASE, non-negotiable), IBM Plex Mono body, Space Grotesk aux (rare). 8px grid system; zero border radius everywhere; terracotta hard-offset shadows (`4px 4px 0`) as the only shadow vocabulary; no gradients, ever.

---

## 2. Routing

**Router mechanism:** Custom hash-based router. No react-router or any router library is installed. The app listens to `window.location.hash` and the `hashchange` event. All URLs take the form `/#/route` rather than real paths.

| # | Hash Route | Component | Source File |
|---|---|---|---|
| 1 | `/#/` | `HomePage` | `src/pages/Home.jsx` |
| 2 | `/#/about` | `AboutPage` | `src/pages/About.jsx` |
| 3 | `/#/studio` | `StudioPage` | `src/pages/Studio.jsx` |
| 4 | `/#/supply` | `SupplyPage` | `src/pages/Studio.jsx` |
| 5 | `/#/system` | `SystemPage` | `src/pages/System.jsx` |
| 6 | `/#/blog` | `WorkingsIndexPage` | `src/pages/Workings.jsx` |
| 7 | `/#/blog/[slug]` | `PostPage` | `src/pages/Workings.jsx` |
| 8 | `/#/patternhouse` | `ReservedPage` | `src/App.jsx` (inline) |
| — | *(any other)* | `NotFoundPage` | `src/App.jsx` (inline) |

**Total: 8 named routes** (plus the implicit 404).

Page titles are set via `document.title` in `App.jsx` on each route change — there is no `<title>` management in individual page components.

---

## 3. Page-by-Page Content & Interactivity

### `/#/` — Home
**Content:** Hero section with animated tile-shuffle mark (PATTERN → LOGO → PATTERN, ~7.2s loop). Hero metadata strip ("STUDIO.SUPPLY.SYSTEMS / BUILDING ATELIER"). Brief intro paragraph mentioning PatternHouse in terracotta. Three-column "What We Do" grid: STUDIO, SUPPLY, SYSTEMS — each with a heading, pillar subhead, body sentence, and arrow link to the respective route.

**Interactive:** `running` boolean state that pauses the animation when the tab is hidden (`visibilitychange` event). The `TileShuffleHero` component drives a `requestAnimationFrame` loop while `running` is true.

**External data / APIs:** None. Google Fonts (loaded at HTML level).

---

### `/#/about` — About
**Content:** Eyebrow ("02 · ABOUT"). Sticky metadata rail: STATUS (v0 · MAY 2026), BASED (Melbourne, AU), STRUCTURE (2 ARMS · R&D ACROSS), FIRST LINE (PATTERNHOUSE — IN DEV.). Four body paragraphs about the company. Founders grid: MIYAN DAGAN (Co-founder · Studio lead) and ROB NESTIC (Co-founder · Supply lead), each with name, role, bio, and LinkedIn link.

**Interactive:** None (purely presentational).

**External data / APIs:** None. LinkedIn links open externally.

---

### `/#/studio` — Studio *(placeholder)*
**Content:** Eyebrow ("03 · STUDIO"). Single line in terracotta: "Sorry, busy designing in the studio."

**Interactive:** None.

**Note:** A fully authored `ArmPage` component exists in the same file (`src/pages/Studio.jsx`) with a rich Studio layout (lede, metadata rail, pillar subhead, two prose paragraphs, cross-link, and a five-item deliverables list). It is defined but **never rendered** — `StudioPage` is a one-liner placeholder that does not call `ArmPage`.

---

### `/#/supply` — Supply *(placeholder)*
**Content:** Eyebrow ("04 · SUPPLY"). Single line in terracotta: "Sorry, busy designing in the workshop."

**Interactive:** None.

**Note:** Same situation as Studio — the `ArmPage` component handles both arms via a `kind` prop, with the Supply variant fully authored (laminated timber chassis, modular sub-assemblies, sourced parts list). Never rendered.

---

### `/#/system` — System *(placeholder)*
**Content:** Eyebrow ("05 · SYSTEM"). Single terracotta sentence: "The hardest form of complexity is simplicity."

**Interactive:** None.

---

### `/#/blog` — Output (Workings index)
**Content:** Eyebrow ("06 · OUTPUT"). Lede sentence. Three-column responsive card grid listing 6 hardcoded blog posts sorted newest-first. Each `BlogCard` shows: tag, title, excerpt, date, "READ →" link.

**Interactive:** Card hover state (title and "READ →" change to terracotta via CSS transition). No React state.

**External data / APIs:** None. All 6 posts are hardcoded in `BLOG_POSTS` array in `src/pages/Workings.jsx`.

---

### `/#/blog/[slug]` — Post detail
**Content:** Back link ("← 06 · OUTPUT"). Post meta bar (date + tag). Post title (large Unbounded display). Excerpt paragraph. Tile composition cover image (generated deterministically from the post's `seed` string via `pickBlogComp`). Body paragraphs.

**Interactive:** None in the page itself. The `TileComposition` component accepts an `interactive` prop (hover changes a tile to terracotta), but it is called with `ariaHidden` only — `interactive` defaults to false.

**External data / APIs:** None. Post content is in the `BLOG_POSTS` array.

**Bug:** `TileComposition` and `pickBlogComp` are used in this component but **not imported**. Any attempt to view a blog post detail page will throw a `ReferenceError` at runtime.

---

### `/#/patternhouse` — PatternHouse (reserved)
**Content:** Eyebrow ("06 · PATTERNHOUSE"). Large heading "PATTERNHOUSE / IN.DEVELOPMENT" with PATTERNHOUSE in terracotta. Lede paragraph. Metadata rail (STATUS, ROUTE, PARENT). Two prose paragraphs. Two buttons: "Back to PatternForms" (ghost) and "Workings" (primary).

**Interactive:** None.

---

## 4. Component Inventory

### `src/lib/chrome.jsx` — Layout & chrome

| Component | Category | Notes |
|---|---|---|
| `Wordmark` | PRESENTATIONAL | Mark SVG + "PATTERNFORMS" wordmark text. Props: `size`, `color`, `wordFontSize`. |
| `Subhead` | PRESENTATIONAL | Thin wrapper div with `.pf-subhead` styling. |
| `Header` | INTERACTIVE | `useState` for `scrolled` + `menuOpen`. `useEffect` for scroll listener, route-change close, body overflow lock. |
| `Footer` | PRESENTATIONAL | Static ink-surface footer with nav links and colophon. No state. |
| `ColumnGrid` | PRESENTATIONAL | Renders 13 vertical hairlines as a hero grid overlay. No state. |
| `FooterTileBand` *(unexported)* | PRESENTATIONAL | SVG tile strip using `tileShapeDraw`. No state. |

---

### `src/lib/animations.jsx` — Animated compositions

| Component | Category | Notes |
|---|---|---|
| `TileShuffleHero` | INTERACTIVE | `requestAnimationFrame` loop via `useState(tick)` + `useRef(startRef)`. Drives the PATTERN → LOGO animation in the hero. |
| `WordmarkAssembly` | INTERACTIVE | `requestAnimationFrame` loop. Tile band + animated wordmark letter-by-letter reveal. **Defined but never used in any active route.** |

---

### `src/lib/tiles.jsx` — SVG tile primitives

| Component | Category | Notes |
|---|---|---|
| `TSolid`, `TDot`, `TDisc`, `THalf`, `TQPie`, `TQFill`, `TRing`, `TEmpty` | PRESENTATIONAL | Pure SVG shape components. No state. |
| `Tile` | PRESENTATIONAL | Selector dispatching to the above primitives by `code` string. |
| `TileGrid` | PRESENTATIONAL | Renders grid lines as SVG. No state. |
| `TileGridLayout` | PRESENTATIONAL | Renders a 2D array of `Tile` components on a grid. |

---

### `src/lib/marks.jsx` — PF mark variants

| Component | Category | Notes |
|---|---|---|
| `MarkBlock` | PRESENTATIONAL | Original tile-block "pf" mark. |
| `MarkPie` | PRESENTATIONAL | Alternative — pie-arc construction. |
| `MarkBauhaus` | PRESENTATIONAL | Alternative — Bauhaus arc construction. |
| `MarkMosaic` | PRESENTATIONAL | Alternative — mosaic tile construction. |
| `MarkPixel` | PRESENTATIONAL | **Active mark.** Used in Header and Footer. 4×3 cell grid on path data. |
| `PFMark` | PRESENTATIONAL | Variant selector wrapping all of the above. |

---

### `src/lib/compositions.jsx` — Tile compositions

| Export | Category | Notes |
|---|---|---|
| `TileComposition` | INTERACTIVE | `useState(hovered)` for optional hover interaction. `interactive` prop defaults to `false`; hovered state is only meaningful when `true`. |
| `pickBlogComp` | Utility (fn) | Hashes a seed string to pick from `COMP_BLOG_LIBRARY`. |
| `COMP_COMPANION`, `COMP_HERO`, `COMP_ABOUT`, `COMP_STUDIO`, `COMP_SUPPLY` | Data | Named tile compositions (not components). |
| `COMP_BLOG_LIBRARY` | Data | Array of 8 tile compositions used as blog post cover art. |

---

### `src/lib/tile-shape.jsx` — Tile shape renderer

| Export | Category | Notes |
|---|---|---|
| `TileShape` | PRESENTATIONAL | Thin JSX wrapper around `tileShapeDraw`. |
| `tileShapeDraw` | Utility (fn) | Renders a tile by `code` string into SVG elements. |
| `TILE_SET_FULL`, `TILE_SET_LETTER`, `TILE_SET_CURVY` | Data | Tile code sets for random selection during animation. |
| `PF_BLOCK_GRID` | Data | Grid layout data for the block mark. |

---

### Pages (components, not lib)

| Component | File | Category |
|---|---|---|
| `HomePage` | `src/pages/Home.jsx` | INTERACTIVE (pauses animation on tab visibility) |
| `AboutPage` | `src/pages/About.jsx` | PRESENTATIONAL |
| `ArmPage` *(unexported, unused)* | `src/pages/Studio.jsx` | PRESENTATIONAL |
| `StudioPage` | `src/pages/Studio.jsx` | PRESENTATIONAL (placeholder) |
| `SupplyPage` | `src/pages/Studio.jsx` | PRESENTATIONAL (placeholder) |
| `SystemPage` | `src/pages/System.jsx` | PRESENTATIONAL (placeholder) |
| `WorkingsIndexPage` | `src/pages/Workings.jsx` | PRESENTATIONAL |
| `BlogCard` | `src/pages/Workings.jsx` | PRESENTATIONAL |
| `PostPage` | `src/pages/Workings.jsx` | PRESENTATIONAL (broken — see §6) |
| `ReservedPage` | `src/App.jsx` | PRESENTATIONAL (inline, no own file) |
| `NotFoundPage` | `src/App.jsx` | PRESENTATIONAL (inline, no own file) |

---

**Summary counts (lib components only):**
- LAYOUT: 2 (`Header`, `Footer`)
- PRESENTATIONAL: 21 (`Wordmark`, `Subhead`, `ColumnGrid`, `FooterTileBand`, `TSolid`, `TDot`, `TDisc`, `THalf`, `TQPie`, `TQFill`, `TRing`, `TEmpty`, `Tile`, `TileGrid`, `TileGridLayout`, `MarkBlock`, `MarkPie`, `MarkBauhaus`, `MarkMosaic`, `MarkPixel`, `PFMark`, `TileShape`)
- INTERACTIVE: 3 (`TileShuffleHero`, `WordmarkAssembly`, `TileComposition`)

---

## 5. Styling

**Approach:** Plain CSS. No CSS modules, no Tailwind, no styled-components, no PostCSS config.

Two global CSS files, both imported in `src/main.jsx`:

| File | Role |
|---|---|
| `src/lib/pf-tokens.css` | Design token definitions only. All CSS custom properties (colours, type scale, spacing, tile sizes, motion tokens, shadow tokens). Surface switching via `[data-surface="paper|white|ink"]` attribute selectors. |
| `src/lib/site.css` | Site-level component styles (header, footer, nav, buttons, inputs, container, page padding, section rhythm, utility classes). |

**Inline `<style>` blocks:** Several pages define local CSS as `<style>` JSX template literals inside the component function body. Affected files:
- `src/pages/Home.jsx` (hero, wwd-grid styles)
- `src/pages/About.jsx` (founders-grid styles)
- `src/pages/Studio.jsx` (arm-body, deliv-list styles)
- `src/pages/Workings.jsx` (workings-grid, blog-card, post-inner styles)

**Design tokens:** Fully implemented in `pf-tokens.css` as CSS custom properties. Cover: raw palette, semantic surface tokens (surface-aware via `data-surface`), font families, type scale (10px–96px), letter-spacing scale, 8px spacing grid (1u–16u), tile sizes (sm/md/lg), borders, elevation (shadow tokens), and motion (ease curves + duration tokens).

**Surface system:** `data-surface="white"` set on `<body>` in `index.html`. CSS attribute selectors switch the semantic surface tokens for `paper` and `ink` contexts.

**Fonts:** Loaded via Google Fonts `<link>` in `index.html`.

| Family | Weights | Role |
|---|---|---|
| Unbounded | 400, 500, 600, 700, 800, 900 | Display (always uppercase) |
| IBM Plex Mono | 400, 500, 600, 700 | Body / mono |

**Note:** Space Grotesk (aux font, referenced in `pf-tokens.css` as `--pf-font-aux`) is **not loaded** in `index.html`. It would fall through to `system-ui`.

---

## 6. Assets

**Images:** None. Zero image files exist outside `node_modules`. There is no `public/` directory and no `src/assets/` directory.

**All visual output is SVG generated at runtime:**
- The PF mark is rendered by `MarkPixel` (JSX paths).
- The favicon is an inline `data:image/svg+xml` URI in `index.html`.
- Blog post cover art is `TileComposition` (JSX → SVG).
- Hero animation is `TileShuffleHero` (SVG via requestAnimationFrame).
- Footer tile band is `FooterTileBand` (SVG via `tileShapeDraw`).

---

## 7. Red Flags

### 🔴 CRITICAL — `node_modules` committed to git

`.gitignore` contains only `.DS_Store`. `node_modules` is tracked by git and is in the repo index. This adds ~hundreds of MB of churn to every branch, makes `git status` noisy, and will bloat the migration branch. Fix before migrating: add `node_modules/` to `.gitignore` and run `git rm -r --cached node_modules`.

### 🔴 CRITICAL — Missing imports in `PostPage` (blog post detail)

`src/pages/Workings.jsx` uses `TileComposition` and `pickBlogComp` in the `PostPage` component but has no import for either. The only import in the file is `import React from 'react'`. Any navigation to `/#/blog/[slug]` will throw a `ReferenceError` at runtime — the blog post detail page is currently broken. Both are exported from `src/lib/compositions.jsx`.

### 🟡 WARNING — `ArmPage` defined but never rendered

`src/pages/Studio.jsx` exports `StudioPage` and `SupplyPage`, which are placeholder one-liners. The same file contains a fully authored `ArmPage` component (metadata rail, pillar subhead, prose paragraphs, cross-links, five-item deliverables table) that is never called. The content for both Studio and Supply pages is authored and ready — it's just not wired up.

### 🟡 WARNING — `WordmarkAssembly` defined but never used

`src/lib/animations.jsx` exports `WordmarkAssembly` (an animated tile-band + wordmark reveal component). It is not imported or rendered anywhere in the active codebase.

### 🟡 WARNING — Hash-based routing is the core SEO problem

Every URL is `/#/route`. Hash fragments are not sent to the server and are invisible to crawlers. Astro's filesystem routing uses real paths (`/about`, not `/#/about`). Every internal link in the codebase (`href="#/"`, `href="#/about"`, etc.) will need updating during migration. There are approximately 30–40 such references across `App.jsx`, `chrome.jsx`, and all page files.

### 🟡 WARNING — Space Grotesk not loaded

`--pf-font-aux: 'Space Grotesk', system-ui, sans-serif` is defined in `pf-tokens.css` but Space Grotesk is absent from the `<link>` tag in `index.html`. Any element that resolves to `--pf-font-aux` will silently fall back to system-ui.

### 🟢 CLEAN — No `.env` files, no hardcoded API keys

No `.env` or `.env.*` files found. No API keys, tokens, or credentials hardcoded in any source file.

### 🟢 CLEAN — No external API dependencies

The site makes no API calls at runtime (outside of loading Google Fonts). All content — including all 6 blog posts — is hardcoded in source files. No CMS, no fetch calls, no authentication.

---

## 8. Tech Stack Summary

| Layer | Technology |
|---|---|
| Framework | React 18.3.1 |
| Build tool | Vite 6.0.0 |
| Router | Custom hash router (no library) |
| Styling | Plain CSS (global files + inline `<style>` blocks) |
| Fonts | Google Fonts (Unbounded, IBM Plex Mono) |
| Images | None — all visuals are runtime-generated SVG |
| Data | Hardcoded in JS (blog posts in `BLOG_POSTS` array) |
| APIs | None |
| Testing | None |
| Linting | None |
| TypeScript | No — plain JSX throughout |

---

## 9. Migration Implications (Astro)

Key structural facts for the migration plan:

1. **All routes are independently renderable as static HTML.** No route fetches external data at build time. All blog posts are in a JS array — they will need to be moved to Markdown/MDX files or a content collection for Astro to generate static pages.

2. **The animated hero (`TileShuffleHero`) requires a client-side component.** It uses `requestAnimationFrame` and `useState`. In Astro it must be a client island (`client:load` or `client:visible`). The Header (mobile menu) is also interactive and needs the same treatment.

3. **The hash router will be replaced entirely.** Astro uses filesystem-based routing. Every `href="#/..."` becomes `href="/..."`. The `parseHash()` and route-switching logic in `App.jsx` is deleted; Astro's file structure handles it.

4. **Inline `<style>` blocks become Astro scoped styles** or move to the global stylesheet — no behavioural change, but the pattern is different.

5. **Fix the two critical bugs during migration:** (a) add missing imports to `PostPage`; (b) decide whether to activate `ArmPage` for Studio/Supply routes or keep them as placeholders.
