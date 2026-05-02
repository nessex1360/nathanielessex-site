# Paragon Design System

> **Brand:** Paragon — the umbrella identity for **Nathaniel Essex** (nathanielessex.com).
> **Tagline:** *Legacy through transformation.*
> **Governing thesis:** *The science must feel like magic, and the magic must remain operationally clear.*

Paragon is not a single product. It is a holding-brand for three audience-facing expressions that share one philosophical core (the **Outlaw** archetype: see corruption clearly, break old constraints, build something stronger and more enduring).

| Expression | Surface | Archetypal mix | Tonal target |
|---|---|---|---|
| **Professional** | `/portfolio` (case studies, resume, dashboards) | Outlaw-Creator | Strategic confidence, calm authority. Most restrained. |
| **Consulting / Voodad / Household Mojo** | `/tinkerers` (newsletter, podcast, services) | Outlaw-Hero | Trust, warmth, transformation. Bridge expression. |
| **Publishing — Sufficiently Advanced Publishing** | `/publishing` (Afrofuturism + fantasy novels) | Outlaw-Sage / Outlaw-Lover | Wonder, mythic depth. Most immersive. |

The visitor experience traverses **awe → orientation → trust → invitation**. The site should feel like a *cartographer's hall of human excellence* — part observatory, part guild chamber, part grimoire.

---

## Sources used to build this system

All material was copied from a local mounted folder (read-only at build time):

- `nathanielessex.com/_context/Paragon Brand Guide.md` — primary spec
- `nathanielessex.com/paragon-brand-context.md` — Cursor reference (palette, typography, motion, expression rules)
- `nathanielessex.com/tokens/paragon-tokens.css` — CSS-tokenized output of the brand guide
- `nathanielessex.com/framer/head-snippet.html` — Framer Head injection
- `nathanielessex.com/_context/paragon_brand_notes.txt` — origin voice memo (Outlaw archetype, voodoo motif, Civ VI / Mass Effect / Dragon Age references)
- `nathanielessex.com/_context/about-page-copy-v5.md` — canonical About copy
- `nathanielessex.com/_context/project-portfolio.md` — PRJ-001 → PRJ-005 case studies
- `nathanielessex.com/assets/images/portfolio/*` — Gemini-generated case study covers
- `nathanielessex.com/assets/images/jack-carr reference/*` — author-site reference (Jack Carr)
- `nathanielessex.com/assets/images/scott-mann reference/*` — speaker-site reference (Scott Mann)

Raw reference imagery is preserved in `_research/` for review; production-cleaned assets are in `assets/`.

---

## Index — what's in this folder

```
Paragon Design System/
├── README.md                  ← you are here
├── SKILL.md                   ← agent-skill front matter for Claude Code
├── colors_and_type.css        ← single import file: tokens + utility classes
├── assets/
│   ├── backgrounds/           ← cartography, observatory, transformation diagrams
│   ├── portfolio/             ← PRJ-001..PRJ-005 case study covers
│   ├── publishing/            ← book covers (Sufficiently Advanced Publishing)
│   └── portrait/              ← editorial headshot
├── preview/                   ← Design System tab cards (≈700×?? each)
├── ui_kits/
│   ├── portfolio/             ← Professional expression — Jack-Carr-meets-Civ-VI
│   ├── voodad/                ← Consulting expression — Tinkerers + Household Mojo
│   └── publishing/            ← Sufficiently Advanced Publishing storefront
└── _research/                 ← unmodified reference imagery
```

---

## CONTENT FUNDAMENTALS

The voice carries the brand more than the visuals do. Paragon copy is **stately, direct, intelligent, myth-aware, service-oriented** — *power through clarity, not inflated claims*.

### Voice attributes

| Attribute | What it means in practice |
|---|---|
| **Stately** | Serious, composed, architecturally confident. Never casual or self-deprecating. |
| **Direct** | Clear about what is offered and what the visitor should do next. No hedging. |
| **Intelligent** | Strategic, synthesized, deeply reasoned. *Show* thinking, do not list credentials. |
| **Myth-aware** | Comfortable with initiatory and symbolic language *when context allows*. Never overwrought. |
| **Service-oriented** | Mission, outcomes, stewardship. The mission precedes the individual. |

### Casing & rhythm

- **Headlines:** ALL CAPS, Cinzel, often letter-spaced (`P A R A G O N`, `LEGACY THROUGH TRANSFORMATION`). Keep them short — 2–6 words.
- **Subheads:** Cormorant Garamond, sentence case or proper case. Italic permitted for literary contexts.
- **Body:** Cormorant Garamond, full sentences, em-dashes welcome, semicolons welcome. Editorial, not blog-y.
- **Utility (labels, nav, tags):** DM Sans, ALL CAPS, tracked `0.12em`. Functional, not decorative.
- **Metrics:** Numerals foregrounded in `--aged-gold`. *"$10M revenue recovered."*

### Voice (I vs you)

- **First person** is preferred for primary copy. *"I build data systems that recover millions…"* — never *"We"* (Nathaniel is one person).
- **Second person** for invitations and CTAs. *"Begin a conversation."* *"Enter this world →"*
- **Third person** is reserved for resume-mode descriptions inside case studies.

### Emoji & ornament

- **No emoji.** Ever. The brand uses Cinzel diamonds (`◈`), em-dashes (`—`), arrows (`→ ←`), and seal-like glyphs as ornament.
- **Unicode marks used as ornament:** `◈ ◆ ◇ → ← ↗ ┃ § ¶`. Used sparingly to anchor lane labels and CTAs.
- **Drop caps** (`.paragon-drop-cap`) appear ONLY in `/publishing` editorial blocks.

### What to avoid

- Superlatives without proof: *"world-class," "revolutionary," "best-in-class"*
- Filler: *"Hey there," "Let's dive in," "Honestly…"*
- Passive mission framing: *"I've worked on…"* → prefer *"I built…"*
- Decorative claims with no operational grounding
- Anything that reads like LinkedIn

### Specific copy patterns

```
Hero:
  "I build data systems that recover millions, AI agents that multiply
   founder output, and books that open doors into worlds worth entering."

CTA:
  "Enter →"   "Begin a conversation →"   "Explore the case study →"

Lane labels (homepage):
  "◈ PORTFOLIO"      Strategy. Systems. Impact.
  "◈ CONSULTING"     Transformation. Systems. Guidance.
  "◈ PUBLISHING"     Wonder. Myth. Story.

Metric callout (gold):
  "$10M revenue recovered through pricing restructure and credit controls."

Section header:
  "FEATURED WORK"   "FOUR ACTS"   "ENTER THE CATALOG"
```

---

## VISUAL FOUNDATIONS

### Colors

**Master palette:** Dark, ceremonial, metallic, luminous. Black-blue world; gold as principal legacy signal; selective expression accents.

| Token | Hex | Use |
|---|---|---|
| `--void-black` | `#0A0A0D` | Primary page background |
| `--obsidian-blue` | `#10263D` | Card / panel backgrounds |
| `--atlas-blue` | `#1B4F7A` | Structural panels, links, professional surfaces |
| `--aged-gold` | `#B88A2A` | Legacy accent — headers, dividers, seals, CTAs |
| `--parchment-stone` | `#D8CFBF` | Soft neutral, editorial breathing |
| `--ash-silver` | `#A6A9B0` | Secondary text, labels, metadata |
| `--signal-ivory` | `#F3EEDF` | Primary text on dark |
| `--con-accent-2` ember red | `#A83228` | Consulting transformation moments |
| `--con-accent-3` terracotta | `#C4764E` | Consulting human warmth |
| `--pub-accent-2` violet | `#6B3FA0` | Publishing magic, mythic depth |
| `--pub-accent-4` cosmic blue | `#1A3A6A` | Publishing atmospheric backgrounds |

**The Gold Rule.** `--aged-gold` signals *value and initiation*. Never use as a dominant background fill. Only as accent, header treatment, divider, CTA border, key metric. Gold's power depends on restraint.

### Typography

| Role | Family | Use |
|---|---|---|
| Display / Hero | **Cinzel** 700–800 | Roman monumental, Civ-like gravitas. ALL CAPS only. |
| Section Headings | **Cinzel** 600 | All caps, `letter-spacing: 0.08em` |
| Body / Subheads | **Cormorant Garamond** 400/600 | Editorial serif, italics allowed in publishing |
| Utility (labels, nav, tags) | **DM Sans** 400/500 | All caps for utility, tracked `0.12em` |

Loaded via Google Fonts CDN inside `colors_and_type.css`. **No local font files needed**; if production deployment requires self-hosting, Cinzel + Cormorant Garamond + DM Sans are all SIL Open Font Licensed and available from Google Fonts and Fontsource.

### Spacing

4-point base scale (`--space-1` = 4px through `--space-12` = 256px). Section padding: `clamp(64px, 8vw, 128px)` vertical. **Negative space implies architecture, reverence, confidence.**

### Backgrounds

- **Default:** Solid `--void-black`. No gradient unless inside an expression that permits it.
- **Professional:** No gradient. Maximum restraint. Cartography or systems-diagram imagery permitted, but quiet.
- **Consulting:** Subtle gradient `--void-black → --obsidian-blue` (160deg). Transformation diagrams.
- **Publishing:** `--void-black → --pub-accent-4` (160deg). Atmospheric overlays permitted. Observatory / arcane library imagery.
- Generic full-bleed image: cartographic line-work map (see `assets/backgrounds/homepage_cartography.png`).

### Animation

- **Default ease:** `--ease-stately` `cubic-bezier(0.25, 0.1, 0.25, 1)` — guided initiation, not spectacle.
- **Standard duration:** `300ms`. Page transitions `600ms`.
- **Fades** preferred over slides. **No bounces.** **No spring physics.** **No frantic motion.**
- Motion should feel like **doors opening** in a great hall.

### Hover states

- **Cards:** border `--border-engraved` → `--aged-gold`; outer `--shadow-glow-gold`; `translateY(-4px)`; 300ms.
- **Links:** color `--atlas-blue` → `--aged-gold`; underline emerges.
- **CTAs:** outer gold glow `box-shadow: 0 0 16px --glow-gold`; text → `--signal-ivory`.
- **Publishing book cards:** swap glow-gold for `--shadow-glow-violet`.
- **Consulting transform cards:** swap glow-gold for ember-red glow.

### Press / active states

- **Buttons:** `transform: translateY(0)` (cancels hover lift), brightness 0.9, no shrink.
- **Selected nav:** color → `--signal-ivory`, gold underline 2px.

### Borders

- **Default:** `1px solid rgba(166,169,176,0.15)` — engraved metallic, almost invisible.
- **Active / hover:** `1px solid rgba(184,138,42,0.6)` — gold seal.
- **Atlas frame** (Tableau / dashboards): `1px solid #1B4F7A` — structural blue.
- Corners: small L-shaped gold corner brackets on featured frames (see `.paragon-frame`).

### Shadow / glow system

- **Outer:** `0 2px 12px rgba(10,10,13,.5)` default; `0 8px 32px rgba(10,10,13,.7)` hover.
- **Glow:** `0 0 20px rgba(184,138,42,.25)` (gold), `0 0 20px rgba(107,63,160,.25)` (violet), `0 0 20px rgba(168,50,40,.25)` (ember).
- **Hero text bevel:** subtle 1px white-up + 1px black-down + outer gold halo (see `--shadow-text-bevel`).
- **No purple-haze drop shadows.** **No 24px blurry "glassmorphism."**

### Capsules vs protection gradients

- Paragon prefers **protection gradients** (full-bleed image + `linear-gradient(rgba(10,10,13,.55))` overlay) for hero photography over capsule chips.
- **Pill capsules** are reserved for utility tags (`paragon-tag`) at `--radius-sm` (4px), never `--radius-pill`.

### Layout rules

- Centered max-width: `1280px`. Prose: `720px`. Cards: `420px`.
- **Map-room framing:** featured modules wrapped in `.paragon-frame` with L-shaped corners.
- **Center key moments:** hero metrics, diagrams, statements sit on a ritual focal point.
- Fixed nav at `--void-black` with bottom 1px engraved divider.
- Section transitions use `<hr class="paragon-divider">` — 1px gold at 40% opacity.

### Transparency & blur

- Use sparingly. Permitted for **hero scrim overlays** on full-bleed imagery (`--overlay-dark` rgba(10,10,13,.55)).
- **No backdrop-filter blur.** **No frosted glass nav.** Paragon is solid, ceremonial, weighted.

### Imagery vibe

- **Warm cool dark.** Deep blue base, gold candle-glow accents, velvety blacks. *Not* desaturated, not bleached.
- **Cartography:** line-work continents, compass roses, gear-corner brackets.
- **Observatory:** arcane libraries, formula overlays, cosmic apertures.
- **Diagrams:** alchemical / sigil-style — circles, seals, branching paths, triangulated nodes. *Every diagram represents a real concept.*
- Photography of Nathaniel: editorial, calm, **mission-first** — never celebrity-founder framing.

### Corner radii

- **Default:** `0px` (`--radius-none`). Sharp Paragon geometry.
- Tags: `4px`. Inputs: `0px`. Cards: `0px`. Pills: only for skill chips at `999px` if absolutely needed.

### Cards

| Property | Value |
|---|---|
| Background | `--obsidian-blue` |
| Border | `1px solid --border-engraved` |
| Radius | `0px` |
| Shadow | `0 2px 12px rgba(10,10,13,.5)` |
| Padding | `--space-6` (32px) |
| Hover | gold border + outer gold glow + `-4px` lift |

---

## ICONOGRAPHY

**Direction:** Icons should feel like a *spellbook authored by a systems architect*. Functional, instantly readable. Symbolic on second look. Badge-like framing — Mass-Effect / Civ-VI tech-tree silhouettes.

### What's used in production

The Paragon site does **not** ship a custom icon font. The original Framer build uses a small set of Unicode marks plus inline SVG illustrations (cartography, transformation diagrams) generated as images in Gemini. The icon stand-ins fall into three buckets:

1. **Unicode glyphs** for inline ornament: `◈ ◆ ◇ → ← ↗ §`. Lane cards on the homepage are prefixed with `◈`.
2. **Lucide Icons** as the substitution layer for utility UI (nav, social, dashboard chrome). Loaded via CDN.
3. **Hand-rendered illustrations** (Gemini-generated PNG) for full diagrams — the systems-architecture "spell" diagrams, the transformation alchemy diagram, and the homepage cartography. These are **content**, not icons; they live in `assets/backgrounds/`.

### Icon font / library used

**Lucide** (https://lucide.dev) — `1.5px` stroke, `24px` default, square line caps. Closest CDN match for the Mass-Effect / Civ-VI badge silhouette family.

```html
<!-- CDN -->
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="compass" stroke="#B88A2A" stroke-width="1.5"></i>
```

Color icons in `--aged-gold` for accents and `--ash-silver` for utility. Never `currentColor` against ivory text — the brand needs the icon to read as a *seal*, distinct from the surrounding type.

> **Substitution flag.** Lucide is a substitute for the Mass-Effect-flavored badge family the brand aspires to. If the user wants higher-fidelity sigils, commission a custom icon set; in the meantime Lucide's compass / brain / network / scroll glyphs are the closest open-source proxy.

### Emoji

**Never.** The brand explicitly excludes emoji. The void-black + Cinzel ceremony is broken instantly by a 🔥. If you want fire, use `◈` in `--con-accent-2`.

### SVG vs PNG

- **SVG** for icons, dividers, ornament. Inline so they inherit color.
- **PNG / WebP** for full diagrams (Gemini-generated illustrations) and photography.

### Logos

The brand has **no separate Paragon logo mark** beyond the wordmark "PARAGON" in Cinzel + letter-spacing `0.15em`. The wordmark itself functions as the seal. A `◈` diamond may flank it on lane cards.

---

## How to use this design system

1. Link `colors_and_type.css` near the top of every HTML document.
2. Wrap the document body in `<div class="paragon-page" data-expression="professional|consulting|publishing">`.
3. Use the Cinzel `.paragon-hero` / `.paragon-heading` for titles, Cormorant `.paragon-body` for prose, DM Sans `.paragon-label` for utility.
4. Reach for `.paragon-card`, `.paragon-cta`, `.paragon-tag`, `.paragon-frame` before inventing new components.
5. Prefer real assets from `assets/`. If you need a diagram you can't find, ask Nathaniel for a Gemini regen rather than drawing your own SVG.

See `ui_kits/` for fully-assembled examples per expression.
