---
document: PatternForms — Visual Identity
document_id: PF-BR-03
version: 0.4
status: DRAFT
date: 2026-05-18
author: PatternForms
companion_documents:
  - PF-BR-00_Manifest.md
  - PF-BR-01_Positioning.md
  - PF-BR-02_Voice.md
  - PF-BR-04_Story.md
  - 260518_PATTERNFORMSBRANDBOOK.md (system-prompt brand book; this document is the strategic counterpart)
purpose: Defines the PatternForms visual system — the tile vocabulary, the logo, typography, colour, the surface system, components, motion, and layout. Strategic reference for designers and developers. Paired with the implementation brand book (`260518_PATTERNFORMSBRANDBOOK.md`) which holds the locked tokens, CSS, and component code.
---

# PatternForms — Visual Identity

## 1. Visual direction

PatternForms is a **building-systems atelier**. The visual identity mirrors the product: a single vocabulary of parts (tile primitives) that compose into any form. The aesthetic is **precision editorial** — flat, printed, mechanical, grid-honest. Think blueprint, not brochure.

**Five words that define the look:** Architectural · Restrained · Grid-anchored · Monochrome · Deliberate.

The brand becomes warmer and more tactile only when it expresses itself through product brands — PatternHouse adds the warm `paper` surface, lifestyle photography, and a fuller palette around terracotta. PatternForms itself stays in raw form: the white/transparent default surface, ink type, and the grid as the brand's spine.

---

## 2. Design principles

Six rules that govern every PatternForms surface. These are non-negotiable.

1. **The grid is the brand.** Every element snaps to 8px (1u). The construction grid is the primary decorative motif — not wallpaper, but spine.
2. **Restraint is a feature.** Four colours. Two fonts (display + body) plus a rarely-used auxiliary. Zero gradients. Zero rounded corners. Every constraint is intentional.
3. **Ink on paper or paper on ink.** Every surface is one of three: `white/transparent`, `paper`, or `ink`. No tinted surfaces. No brand colour fills behind headings.
4. **Terracotta is an accent, not a brand colour.** It appears in functional roles — hover shadow stamps, active/CTA nav items, error borders, annotation markers, link underline on hover. It never fills the mark, headings, or button backgrounds.
5. **Tiles build everything.** The brand's "icon" system is the tile vocabulary. Quarter-pies, half-discs, and filled solids do the work that icon libraries do elsewhere.
6. **Motion is grid-honest.** Cells flip; they never tween. Tiles snap to new positions; they don't slide.

---

## 3. Reference materials

The visual direction is anchored to a specific set of references. Designers commissioned to work on PatternForms should be briefed against these.

**Primary references** (Bauhaus monochrome tiles, the heart of the system):

- **Bauhaus poster series** — geometric monochrome compositions of solid shapes, quarter circles, semicircles, and dots arranged on an implicit grid. Words set in clean uppercase geometric type.
- **Modern Tile Typeface** (Leopoldo Leal, Behance) — letterforms built from a fixed tile vocabulary.
- **Otto Tiles & Design** (encaustic tile work) — physical tiles using the diagonal-split + curve vocabulary.

**Secondary references** (supporting motifs, mood, lineage):

- **Little House Logo** (Behance) — pixel/block construction.
- **Armada Apparel** — pattern-as-identity.
- **Facit Homes** — typography discipline and brand restraint.
- **Gropyus** — logo construction and digital DfMA posture.

**Anti-references** (do not look like these):

- Lifestyle architecture photography. (PatternHouse territory.)
- Soft / rounded / "friendly" Bauhaus interpretations with pastel palettes.
- Decorative pattern-as-wallpaper that doesn't carry meaning.
- Any earlier PatternForms pixel "pf" mark that pre-dates the current `mark-pixel.svg` asset.

---

## 4. The surface system

Every PatternForms surface is one of three. The active surface is set via the `data-surface` attribute on `<body>` or any ancestor wrapper.

| Surface | When to use |
|---|---|
| **`white`** | **PatternForms default.** Transparent — sits cleanly on any background. Use for all PatternForms work unless explicitly building a Pattern House surface. |
| **`paper`** | **PatternHouse only** (daughter brand). Or: a single document/print artefact that explicitly calls for editorial warmth. Do not default to `paper` on PatternForms. |
| **`ink`** | Hero sections, dark bands, social/video bumper cards, full-bleed reversed blocks. Mixed within a page — e.g. an ink hero on a white page. |

> [!NOTE]
> The surface system is the most consequential update in v0.4. In earlier drafts, `pf-paper` was the default PatternForms background. It is now reserved for PatternHouse. PatternForms defaults to `white` (transparent). **Decision VI-20 — confirm.**

---

## 5. Colour

Four colours plus a greyscale ramp and a single functional accent. Locked.

### 5.1 Core palette

| Token | Hex | Role |
|---|---|---|
| `--pf-ink` | `#0A0A0A` | Primary mark, all headings, body text on paper. Not pure black. |
| `--pf-paper` | `#F6F4EF` | Warm off-white. Editorial surface (PatternHouse default). |
| `--pf-white` | `#FFFFFF` | Clean white / transparent fallback. |
| `--pf-grey-90` | `#1F1F1F` | Card surface on dark (ink) backgrounds. Near-ink. |
| `--pf-grey-60` | `#6B6B6B` | Secondary text, meta labels, eyebrows, muted foreground. |
| `--pf-grey-30` | `#C9C7C2` | Dividers, construction grid lines, borders on paper. |
| `--pf-grey-10` | `#EBE9E4` | Hairline rules, soft fills, code backgrounds. |
| `--pf-terra` | `#B8553A` | Functional accent only — see §5.3. |

### 5.2 Semantic surface tokens

```css
/* white — PatternForms canonical default */
--pf-bg:          transparent;
--pf-bg-card:     #FFFFFF;
--pf-bg-elev:     #FFFFFF;
--pf-fg:          #0A0A0A;
--pf-fg-muted:    #6B6B6B;
--pf-fg-subtle:   #C9C7C2;
--pf-border:      #C9C7C2;
--pf-accent:      #B8553A;

/* paper — Pattern House daughter brand */
--pf-bg:          #F6F4EF;
--pf-bg-card:     #F6F4EF;
--pf-bg-elev:     #FFFFFF;
--pf-fg:          #0A0A0A;
--pf-border:      #C9C7C2;

/* ink — dark / reversed */
--pf-bg:          #0A0A0A;
--pf-bg-card:     #1F1F1F;
--pf-bg-elev:     #0A0A0A;
--pf-fg:          #F6F4EF;
--pf-fg-muted:    #C9C7C2;
--pf-border:      #1F1F1F;
```

### 5.3 Colour rules (non-negotiable)

- **NEVER** use `#000000`. Use `#0A0A0A`.
- **NEVER** fill the PF mark with terracotta or any non-foreground colour.
- **NEVER** use terracotta in headings or as a button fill/background.
- **NO** tints, shades, or tinted surfaces. The palette has no pastels, no HSL shifts.
- **NO** gradients anywhere. Not even subtle ones.
- Terracotta is a **functional** accent: hover shadows, active nav, error borders, annotation markers, focus highlights. Never decorative fill.
- Do not default to `paper` surface on PatternForms work. Paper belongs to Pattern House.

---

## 6. Typography

A locked three-typeface system. The display sits in caps; the body in monospace; the auxiliary appears rarely.

### 6.1 The three typefaces

| Role | Family | Weights | Fallback |
|---|---|---|---|
| **Display** | **Unbounded** | 400, 500, 700, 800, 900 | Krona One, system-ui, sans-serif |
| **Body / Mono** | **IBM Plex Mono** | 400, 500, 600, 700 | ui-monospace, SF Mono, Menlo, monospace |
| **Aux (rare)** | Space Grotesk | 400, 500, 600, 700 | system-ui, sans-serif |

Google Fonts import:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 6.2 The absolute rule on Unbounded

> **Unbounded NEVER renders in mixed case. Ever. Under any circumstance.**

Every use of Unbounded — wordmark, headings H1–H3, card titles, subheads, nav items — must be `text-transform: uppercase`. The CSS enforces this; source strings may be written in any case, but the rendered output is always ALL CAPS.

### 6.3 Type scale (px-locked)

| Token | px | Usage |
|---|---|---|
| `--pf-text-10` | 10px | Micro, captions, dark-surface meta |
| `--pf-text-11` | 11px | Eyebrow, nav, all-caps tracked |
| `--pf-text-12` | 12px | Fine print, button labels |
| `--pf-text-14` | 14px | **Body default** |
| `--pf-text-16` | 16px | Large body, lede paragraph |
| `--pf-text-18` | 18px | Card title |
| `--pf-text-24` | 24px | H3 |
| `--pf-text-36` | 36px | H2 / section title |
| `--pf-text-48` | 48px | H1 |
| `--pf-text-64` | 64px | Display |
| `--pf-text-96` | 96px | Hero / wordmark specimen |

### 6.4 Letter-spacing scale

| Token | Value | Usage |
|---|---|---|
| `--pf-track-tight` | −0.04em | Wordmark, large display |
| `--pf-track-snug` | −0.03em | H2 / section title |
| `--pf-track-normal` | 0em | Body (mono) |
| `--pf-track-loose` | 0.16em | Nav items, button labels |
| `--pf-track-eyebrow` | 0.10em | Eyebrow micro-caps |
| `--pf-track-subhead` | 0.24em | `STUDIO.SUPPLY.SYSTEMS` subhead |

### 6.5 Semantic type classes

| Class | Spec |
|---|---|
| `.pf-display` | Unbounded 900, 96px, lh 0.95, track −0.04em, UPPERCASE |
| `.pf-h1` | Unbounded 900, 64px, lh 1.0, track −0.04em, UPPERCASE |
| `.pf-h2` | Unbounded 800, 36px, lh 1.05, track −0.03em, UPPERCASE |
| `.pf-h3` | Unbounded 700, 24px, lh 1.15, track −0.02em, UPPERCASE |
| `.pf-card-title` | Unbounded 700, 18px, lh 1.2, track −0.02em, UPPERCASE |
| `.pf-subhead` | Unbounded 400, 12px, lh 1.4, track 0.24em, UPPERCASE — *the* `STUDIO.SUPPLY.SYSTEMS` specimen |
| `.pf-eyebrow` | IBM Plex Mono, 11px, track 0.10em, UPPERCASE, muted |
| `.pf-body` | IBM Plex Mono 400, 14px, lh 1.55 |
| `.pf-lede` | IBM Plex Mono 400, 16px, lh 1.6, muted, max-width 72ch |
| `.pf-meta` | IBM Plex Mono, 11px, lh 1.55, muted |
| `.pf-nav` | Unbounded 400, 11px, track 0.16em, UPPERCASE |

### 6.6 Typography rules (non-negotiable)

- Body line-height: **1.55**. Heading line-height: **1.0–1.15**. Never deviate.
- **No italics.** No underlines. Links get a `1px solid` bottom border instead.
- **No serifs.** No decorative typefaces outside the two primary families.
- IBM Plex Mono body copy is the **only** context where sentence case is acceptable.
- Space Grotesk is `aux` only — never use it for headings or brand-prominent text.

---

## 7. The tile vocabulary

The tile is the atomic unit of the visual brand. Everything visible — the mark, headlines, patterns, hero panels, icons — assembles from it.

### 7.1 The base cell

A **square cell** of fixed size. Three working scales:

| Token | px | Use |
|---|---|---|
| `--pf-tile-sm` | 16px | Dense grid, small tile patterns |
| `--pf-tile-md` | 24px | Standard construction grid |
| `--pf-tile-lg` | 32px | Large tile, hero backgrounds |

### 7.2 The tile primitives

The vocabulary is intentionally small. Designers should not invent additional primitives without amending this document.

| Tile | Description |
|---|---|
| **Solid** | A fully filled cell. |
| **Empty** | An unfilled cell — negative space is present, not absent. |
| **Quarter-pie** | A pie-slice quarter circle occupying one corner of the cell. |
| **Half-disc** | A semicircle on one edge of the cell. |
| **Three-quarter fill** | A solid cell with one quarter removed (the inverse of a quarter-pie). |
| **Diagonal split** | The cell divided diagonally into two triangles, each independently filled. |

Each primitive can be **rotated in 90° increments** (0°, 90°, 180°, 270°). Quarter-pies, half-discs, and three-quarter fills therefore each have four orientations. Diagonal splits have four orientations.

> [!NOTE]
> Straight splits (horizontal/vertical halves) were in the v0.3 vocabulary but are now omitted to keep the system tight. Add back if a real compositional need surfaces. **Decision VI-12.**

### 7.3 Tile composition rules

- **All tiles align to the grid.** No free placement.
- **Negative space is a tile.** An empty cell is intentional, not missing.
- **Asymmetric beats centred.** Bauhaus-style compositions where the eye traces a path of tiles.
- **One accent per composition.** A single terracotta tile (or small cluster) anchors most compositions. Two competes.
- **No partial cells.** Every visible mark fills exactly one cell or a multiple of cells.
- **Three to five primitives per composition.** All six crowds; one or two looks accidental.

### 7.4 What the tile builds

- **The mark** (`mark-pixel.svg`) — see §8.
- **Display compositions** — tile-built specimens at hero scale.
- **Patterns and hero panels** — repeating or asymmetric arrangements covering a surface.
- **Icons** — the tile vocabulary IS the icon system.
- **Diagrams** — system maps where each node is itself a tile composition.

The system is recursive. Tiles build the mark; the mark sits on a grid of tiles; tiles fill the hero behind the mark.

---

## 8. Logo

### 8.1 The mark — `mark-pixel.svg`

The PatternForms mark is a small tile composition that reads as "pf" when scanned and as a fragment of a larger pattern when not.

- Asset: `mark-pixel.svg` (ink on transparent) for white and paper surfaces; `mark-pixel-reversed.svg` (paper on transparent) for ink surfaces.
- Built from the §7.2 tile primitives, on a fixed cell grid.
- Reads at minimum size (24 × 18 px) and scales cleanly to billboard.
- Optional terracotta variant: a single tile in the mark substituted to `--pf-terra`. Used sparingly — special contexts only.

### 8.2 The wordmark — PATTERNFORMS

The wordmark is **the word PATTERNFORMS set in Unbounded Black 900, −0.04em tracking, uppercase.** It is the font, not an outlined SVG, unless an outlined path is needed for print.

This is a deliberate simplification from earlier drafts: the mark carries the tile-built character of the brand; the wordmark is the font, set with discipline.

### 8.3 Lockup

Horizontal lockup, mark on left:

```
[mark]  PATTERNFORMS
        STUDIO.SUPPLY.SYSTEMS
```

- Gap between mark and wordmark: **1u = 8px** (or 12px for display-size lockups).
- Subhead `STUDIO.SUPPLY.SYSTEMS` uses `.pf-subhead` — Unbounded Regular 400, 12px, 0.24em tracking, uppercase.
- The subhead is the canonical brand specimen line.

### 8.4 Logo variants (assets to produce)

| Variant | Use |
|---|---|
| Primary lockup | Mark + wordmark + subhead, horizontal. Default. |
| Stacked lockup | Mark above wordmark, centred. Square / vertical contexts. |
| Mark only | Favicons, social avatars, small contexts. |
| Wordmark only | Running headers; flat single-line contexts. |
| Reversed mark | `mark-pixel-reversed.svg` on ink surfaces. |
| Accent variant | Standard mark with one terracotta tile substituted. Use sparingly. |

### 8.5 Clear space and minimum size

- **Clear space:** at least 1u (8px) on every side. No element enters this zone.
- **Minimum size:** mark — 24 × 18 px. Wordmark — Unbounded at 13px is the smallest legible specimen.

### 8.6 Logo misuse

- Never distort the mark's proportions. Scale uniformly only.
- Never fill the mark with terracotta, any tint, or any colour other than `--pf-fg`.
- Never add drop shadows, glows, or effects to the mark.
- Never substitute typefaces for the wordmark.
- Never place the mark over photography that reduces contrast below WCAG AA.
- Never crop the mark in ways that hide the tile-grid logic.

---

## 9. Spacing & layout

### 9.1 The 8px base unit

**Base unit: 1u = 8px.** All spacing must be a multiple of 8.

| Token | px | Use |
|---|---|---|
| `--pf-space-1` | 8px | Tight gap, icon-to-label, inline spacing |
| `--pf-space-2` | 16px | Card internal gap, input padding |
| `--pf-space-3` | 24px | Card horizontal padding |
| `--pf-space-4` | 32px | Card vertical padding, mobile page margin |
| `--pf-space-6` | 48px | Section sub-gap |
| `--pf-space-8` | 64px | Desktop page padding |
| `--pf-space-12` | 96px | Major section padding top/bottom |
| `--pf-space-16` | 128px | Hero vertical padding |

### 9.2 Construction grid as background

Use the grid as a structural backing, not as wallpaper. Apply to hero sections, behind tile graphics, and full-width divider strips.

```css
.pf-grid    { background-size: 24px 24px; }  /* standard */
.pf-grid-sm { background-size: 16px 16px; }  /* dense    */
.pf-grid-lg { background-size: 32px 32px; }  /* large    */

/* on light surface */
background-image:
  linear-gradient(to right, #C9C7C2 1px, transparent 1px),
  linear-gradient(to bottom, #C9C7C2 1px, transparent 1px);

/* on ink surface */
background-image:
  linear-gradient(to right, #1F1F1F 1px, transparent 1px),
  linear-gradient(to bottom, #1F1F1F 1px, transparent 1px);
```

### 9.3 Layout rules

- **Max content width:** 1280px, centred.
- **Page horizontal padding:** 64px desktop, 32px mobile.
- **Section vertical padding:** 96px top and bottom for major sections.
- **Card padding:** 32px vertical × 24px horizontal.
- **Two-column grid:** 200px metadata rail left, content right. Gap: 64px.
- **Section header structure always:** eyebrow → title → lede (in that order).

### 9.4 Border radii

- **`--pf-radius-0` = 0px** is the universal default. All cards, buttons, inputs, containers.
- `--pf-radius-pill` (9999px) is reserved for rare tag/chip use. Avoid.

The brand is hard-edged. No rounded corners on anything interactive, structural, or brand-prominent. The only curves in the system come from the tile primitives (quarter-pies, half-discs) — not UI chrome.

### 9.5 Elevation & shadows

**No soft box-shadows anywhere. Ever.**

| Token | Value | Use |
|---|---|---|
| `--pf-shadow-0` | `none` | Rest state |
| `--pf-shadow-1` | `4px 4px 0 #B8553A` | Button hover (terracotta stamp) |
| `--pf-shadow-2` | `8px 8px 0 #B8553A` | Hero CTA (terracotta stamp) |

The shadow IS the brand's single splash of colour on the page. It only appears on hover. On the ink surface, this is the one permitted use of terracotta.

---

## 10. Component rules

The implementation brand book (`260518_PATTERNFORMSBRANDBOOK.md`) carries full CSS for each. Strategic summary here.

### 10.1 Buttons

- **Primary:** 40px height, `--pf-ink` fill, `--pf-paper` text, Unbounded 500 12px UPPERCASE with 0.16em tracking. `border-radius: 0`.
- **Hover:** `translate(-2px, -2px)` + `4px 4px 0 --pf-terra` shadow. This is the brand's signature hover.
- **Ghost:** transparent fill, `--pf-border` border, inverts on hover (fills with ink).
- **No icon-only buttons.** Always pair with a label or use a tile primitive.

### 10.2 Cards

- Match the page surface — paper card on paper, ink card on ink, white card on white. The **border** does separation, not colour contrast.
- Padding: 32px × 24px. Border: 1px solid `--pf-border`. Radius: 0.
- Anatomy: `eyebrow` → `card-title` → `body/note`.
- No drop shadows. No elevation at rest.

### 10.3 Form inputs

- 40px height, transparent fill, 1px `--pf-border`. Focus state thickens the border to `--pf-fg`. Error state replaces border with `--pf-terra`.
- Labels: IBM Plex Mono 11px UPPERCASE with 0.10em tracking, muted.
- No floating labels. No custom select arrows.

### 10.4 Navigation

- Nav bar: 64px height, 64px horizontal padding, 1px bottom border in `--pf-border`.
- Items: Unbounded 400, 11px, 0.16em tracking, UPPERCASE. Hover: 1px bottom border in `currentColor`.
- **Only one nav item may be terracotta** — the CTA item.
- No hamburger animation; menu icon is a static SVG.

### 10.5 Section headers

Always in this order:

```
01 · CONSTRUCTION                          ← eyebrow
STUDIO.SUPPLY.SYSTEMS                       ← subhead (or pf-h2 for large sections)
Cap-height = 3u. Each letter sits on a sub-grid.   ← lede
```

The subhead uses `.pf-subhead` (Unbounded Regular 400, 0.24em tracking, uppercase) — never bold black lowercase. Non-negotiable.

---

## 11. Motion

| Token | Value | Use |
|---|---|---|
| `--pf-ease-snap` | `cubic-bezier(.2,.85,.3,1)` | Default UI transitions |
| `--pf-ease-linear` | `linear` | Tile flicker animation |
| `--pf-dur-fast` | `140ms` | One tile flip cadence |
| `--pf-dur-mid` | `320ms` | Hover transitions |
| `--pf-dur-slow` | `1200ms` | Hero pattern shuffle |

**Hero animation cycle:** pattern (1200ms) → crystallise to logo (2200ms) → hold (1800ms) → dissolve back (2200ms). Total: ~7.2s.

### Motion rules

- Tiles NEVER tween between positions. They flip in place (binary: on or off).
- No bounces. No springs. No spinning.
- Only transition `transform` and `box-shadow`. Never `transition: all`.
- Grid-honest motion only: snap or hold.

---

## 12. Imagery

PatternForms uses imagery sparingly. The grid IS the background.

### 12.1 Allowed

- **Tile compositions themselves.** The patterns are the imagery.
- **Technical drawings.** Plans, sections, axos, dimensioned details. 1px stroke on transparent.
- **Schematic diagrams.** System maps, BOM structures, process flows.
- **Process photography.** Parts on a workbench. CNC cutting. A chassis being assembled. Monochrome or duotone. Documentary register.

### 12.2 Avoided

- Lifestyle / inhabited photography. (PatternHouse territory.)
- Stock photography of any kind.
- Architectural hero shots in colour. (PatternHouse territory.)
- People as subjects, except in clearly-labelled team/founder contexts.
- Photography or illustration as background decoration. The grid IS the background.

### 12.3 Treatment

- Photography: monochrome or duotone. High contrast. Clean backgrounds.
- Drawings: line-only by default. Filled areas in `--pf-grey-30` or `--pf-grey-10`.
- No glossy retouching. No vignettes. No filters.

---

## 13. Iconography

1. **The tile vocabulary is the icon system.** Quarter-pies, half-discs, filled solids, three-quarter fills compose every "icon" the brand needs.
2. When a complex glyph is unavoidable, use **simple 1px-stroke SVGs** on the construction grid. `stroke="currentColor"`, `stroke-width="1"`. Sharp corners only — 90° and 45°.
3. Available utility icons: `close`, `menu`, `arrow-east`, `arrow-down`, `plus`, `minus`, `check`.
4. **No filled icon libraries** (no Heroicons fill, no Material icons).
5. **No multi-colour icons.** All icons are `currentColor`.
6. **No emoji as icons.**
7. **No Unicode glyphs as icons** (except the three permitted typographic characters: `·`, `—`, `×`).

---

## 14. Application notes

### 14.1 Website front page

The hero is the brand's single strongest visual demonstration. Three working directions:

- **Direction A — Wordmark hero.** `PATTERNFORMS` set in Unbounded Black 900 at hero scale, on white surface or ink surface, with a tile composition behind or beside.
- **Direction B — Tile composition with claim.** A large asymmetric Bauhaus tile composition fills the hero region; the wordmark and a single short claim sit inset in negative space.
- **Direction C — Animated tile shuffle.** Tiles flip and re-flip on the hero region, crystallising periodically into the wordmark. Driven by the motion tokens (`--pf-dur-slow`).

All three express the same idea: the brand shows its construction.

### 14.2 Website — beyond hero

- Section dividers: thin lines in `--pf-grey-30`, or a tile strip.
- Navigation per §10.4. Footer dense, monospace-led, with token-styled colophon listing key conventions.

### 14.3 Presentations

- `.pf-h1` or `.pf-display` for slide titles. `.pf-body` for slide content. `.pf-meta` for credits.
- Each slide is a single claim plus its evidence.
- Diagrams, technical drawings, and tile compositions get the whole slide.

### 14.4 Reports / whitepapers

- Title page: tile composition + document ID in `.pf-meta` style. No body content.
- Body: A4, single-column primary content, marginalia in `--pf-grey-60` for callouts.
- Tables and BOM-style data: tabular numbers, alternating row backgrounds in `--pf-grey-10`, header row in `--pf-ink` reversed.

### 14.5 Social

- Square format with the same grid logic.
- Use the `ink` surface for social/bumper cards — they cut through feeds.
- The mark appears in the corner; the wordmark appears where context needs it.

---

## 15. Content / copy rules

When generating copy for PatternForms surfaces:

- Short, declarative sentences. State facts. State rules. Move on.
- **No exclamation marks.** No question marks in headlines.
- **No first-person singular.** "We" is acceptable sparingly. "I" never appears.
- **"You" appears only in instructional contexts:** "Reserve 1u of clear space."
- Numerals always: `1u`, `3 × 4 grid`, never "three by four".
- Multiplication sign `×` (U+00D7), not the letter `x`.
- Mid-dot separator `·` (U+00B7) with spaces on both sides.
- Periods in the subhead: `STUDIO.SUPPLY.SYSTEMS` — no spaces around them.
- Eyebrow format: `01 · CONSTRUCTION` — two-digit number, mid-dot, all-caps label.
- **No emoji.** The brand does not use them.
- Present tense, honest scope. If something is in development, say so. No aspirational present tense.

These rules sit *underneath* the broader voice in PF-BR-02 — they are the surface-level copy conventions for UI text and brand artefacts.

---

## 16. Inheritance to product brands

How the PatternForms visual identity carries into product brands. Detail for each product lives in that product's own brand kit.

### 16.1 What carries to all product brands

- **The tile vocabulary** (§7.2). Same six primitives.
- **The three-typeface system** — Unbounded display, IBM Plex Mono body, Space Grotesk aux.
- **The 8px spacing grid and type scale.**
- **The `border-radius: 0` rule.**
- **Hard-offset terracotta shadows** as the only shadow vocabulary.
- **The PF mark vocabulary** at the visual-language level (each product brand may have its own mark, but built from the same tile primitives).

### 16.2 What product brands add (varies per brand)

PatternHouse, specifically:

- **`paper` is the canonical default surface** (not white).
- A warm, editorial, document-like feel as the primary register.
- Print applications first-class (the brand is authored on paper).
- A fuller colour palette beyond monochrome — earthy family built outward from terracotta.
- Lifestyle photography, environment, and inhabitants.

### 16.3 The relationship rule

A viewer looking at PatternForms and any product brand side by side should be able to tell:

1. They share the same tile vocabulary, type system, and spacing grid.
2. PatternForms is the disciplined, monochrome, demonstrative parent on the white surface.
3. The product brand (PatternHouse) is the family member built to meet a specific market — warmer, more editorial, on paper.

---

## 17. Pending decisions

| ID | Item | Status | Notes |
|---|---|---|---|
| VI-01 | Commission the tile-built mark (`mark-pixel.svg` and reversed variant) | OPEN | Highest priority. Brief from §7 and §8. |
| VI-02 | Lock body monospace | DONE | IBM Plex Mono confirmed. |
| VI-03 | Lock palette hex values (incl. terracotta) | DONE | Locked per §5.1. |
| VI-04 | Refine tile primitive geometries to production-ready vector files | OPEN | Six SVG primitives with locked proportions, ready for assembly. |
| VI-11 | Lock display typeface | DONE | Unbounded confirmed. Replaces earlier Inter / Söhne working defaults. |
| VI-12 | Include straight splits as a primitive? | OPEN | Recommend keep vocabulary tight at the six listed in §7.2. |
| VI-13 | Pattern library — produce a starter set of 6–10 named tile compositions | OPEN | Hero, section divider, social, report cover, repeating wallpaper. |
| VI-14 | Web framework / design tokens | DONE | Implementation brand book (`260518_PATTERNFORMSBRANDBOOK.md`) ships the full CSS token set. |
| VI-15 | Photography commission | OPEN | Once first PatternHouse prototype is in production, commission documentary photography of parts, fabrication, and assembly. |
| VI-16 | Icon set | DONE | Tile vocabulary IS the icon system per §13. Utility icons (close, menu, arrows) as 1px-stroke SVGs. |
| VI-17 | Treatment of legacy "Aether" branded assets | OPEN | Retire from external surfaces; archive internally. |
| VI-20 | Default surface is `white`, not `paper`, for PatternForms | OPEN | Confirm — this is a meaningful shift from v0.3 where `pf-paper` was the default background. |
| VI-21 | "Pattern House" two-word vs "PatternHouse" one-word | OPEN | Brand book uses "Pattern House" (two words); PF-BR-01 §8 locks "PatternHouse" (one word). Pick one and align both documents. |

---

## 18. Companion: implementation brand book

The strategic decisions in this document are paired with `260518_PATTERNFORMSBRANDBOOK.md` — a system-prompt-format brand book that contains:

- Locked CSS custom properties (tokens for colour, type, spacing, motion).
- Per-component CSS (buttons, cards, inputs, nav, section headers, code blocks).
- Do's and don'ts for UI code generation.
- Logo / mark usage rules at the implementation level.
- Surface switching reference (`data-surface` attribute behaviour).

**Use this document (PF-BR-03) when:** thinking about visual direction, briefing a designer, writing strategic-level documentation.

**Use the brand book when:** generating actual UI code, building components, briefing a developer or AI tool, locking implementation details.

The two documents stay in sync. If implementation drifts from strategy or vice versa, reconcile here first.

---

## Version history

| Version | Date | Changes |
|---|---|---|
| v0.1 | 2026-05-12 | Initial draft. |
| v0.2 | 2026-05-14 | Added terracotta accent; three-typeface system; technical text as pattern. |
| v0.3 | 2026-05-14 | Reorganised entirely around the tile system as the foundational motif. Six tile primitives. Tile-built mark and wordmark. Display typography shifted to clean geometric grotesque. |
| v0.4 | 2026-05-18 | Major rewrite incorporating implementation brand book (`260518_PATTERNFORMSBRANDBOOK.md`). Locked typography: Unbounded (display, ALL CAPS always) + IBM Plex Mono (body) + Space Grotesk (aux). Added surface system (white default for PatternForms, paper for PatternHouse, ink for reversed). Wordmark now Unbounded set in caps (not tile-built) — mark stays tile-built. Locked 8px base unit, 0px border radius, hard-offset terracotta shadows as only shadow vocabulary. Added component rules, motion tokens, iconography rules, content/copy conventions. Added §18 referencing the implementation brand book as companion document. |
