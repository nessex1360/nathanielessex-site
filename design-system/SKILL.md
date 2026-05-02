---
name: paragon-design-system
description: Use this skill when designing or coding ANY surface for Paragon (the umbrella brand of Nathaniel Essex / nathanielessex.com), or any of its three audience-facing expressions — Portfolio (Professional), Voodad / Tinkerers (Consulting), and Sufficiently Advanced Publishing. Triggers include — but are not limited to — "Paragon," "nathanielessex.com," "Voodad," "Tinkerers," "Household Mojo," "Sufficiently Advanced," "Nathaniel Essex," and any request mentioning the brand's stack of mission lanes (portfolio + consulting + publishing).
license: Proprietary — Nathaniel Essex, all rights reserved.
---

# Paragon Design System — Agent Skill

## When to invoke

Invoke this skill whenever the user asks for:

- a new page, section, component, slide, or marketing artifact for **Paragon** or **nathanielessex.com**;
- a Voodad / Tinkerers / Household Mojo surface (consulting expression);
- a Sufficiently Advanced Publishing surface (book pages, catalog, reader signup);
- copy or visual treatment that should sound or look like Nathaniel's voice and house style.

If the user mentions any of the trigger names without naming the brand explicitly, **assume Paragon and ask one clarifying question only if the expression (Professional / Consulting / Publishing) is genuinely ambiguous.**

## What to read first

Before designing or writing copy, read these files in this order:

1. `README.md` — full brand context, voice, color, type, motion, iconography
2. `colors_and_type.css` — canonical token + utility-class sheet
3. The relevant kit in `ui_kits/<expression>/index.html` — a working hi-fi reference for the expression you're operating in

If the user did not specify the expression, ask which lane they want; otherwise default to **Professional** (the most restrained baseline).

## Quick start — every new HTML artifact must

1. Link the token sheet:
   ```html
   <link rel="stylesheet" href="<path>/colors_and_type.css">
   ```
2. Wrap the body:
   ```html
   <body data-expression="professional|consulting|publishing">
   ```
3. Use brand fonts via the classes from `colors_and_type.css` — never re-import fonts, never hard-code hex values that already exist as tokens.
4. Default radius is `0px`. Default surface is `--void-black`. Default accent is `--aged-gold`.
5. Avoid emoji. Use `◈ ◆ ◇ → ←` for ornament.

## Voice — what good Paragon copy sounds like

- **First person.** *"I build…"* never *"We build…"*
- **Stately and direct.** Strategic confidence. No hedging. No LinkedIn superlatives.
- **Mission before mechanism.** Lead with the outcome, then the system.
- **Foreground numerals in `--aged-gold`** for metrics: *"$10M revenue recovered."*
- **Italic Cormorant** for editorial pull-quotes; ALL CAPS Cinzel for titles.

Forbidden: emoji, "world-class," "revolutionary," "Hey there," "Let's dive in," anything that pads a section to fill space.

## Decision tree — picking the expression

| User intent / surface | Expression | Default accent |
|---|---|---|
| Resume, case studies, dashboards, professional bio | **Professional** | Atlas blue + gold |
| Newsletter, services, transformation diagrams, AI-skill libraries | **Consulting** | Gold + ember + terracotta |
| Books, catalog, author pages, reader signup | **Publishing** | Gold + violet + cosmic blue |

Cross-expression footers, navs, and homepage triptych components live in **Professional** by default.

## Component vocabulary

Reach for these utilities from `colors_and_type.css` before inventing new ones:

- `.paragon-page`, `.paragon-hero`, `.paragon-display`, `.paragon-heading`, `.paragon-subhead`
- `.paragon-body`, `.paragon-label`, `.paragon-gold`, `.paragon-muted`, `.paragon-ivory`
- `.paragon-card`, `.paragon-book-card`, `.paragon-transform-card`
- `.paragon-cta`, `.paragon-cta--solid`
- `.paragon-tag`, `.paragon-divider`, `.paragon-divider-tick`
- `.paragon-frame` (map-room corner brackets)
- `.paragon-drop-cap` (publishing only)

If a needed component is genuinely missing, study the patterns inside `ui_kits/portfolio/index.html` first — most components have already been hand-crafted there.

## Iconography

- Use **Lucide** at `1.5px` stroke, sized `22–28px`, in `--aged-gold` for accents and `--ash-silver` for utility.
- Inline SVG so colors inherit.
- For sigil-like ornament, use Unicode `◈ ◆ ◇ §` in Cinzel.
- Never use emoji. Ever.

## Motion

- Default ease: `--ease-stately` `cubic-bezier(0.25, 0.1, 0.25, 1)`.
- Default duration: 300ms; page transitions 600ms.
- Hover lifts: `translateY(-4px)` plus the expression's glow shadow.
- No bounces, no springs, no frantic motion. Doors opening in a great hall.

## When in doubt

- Default to restraint. Paragon's power is in negative space.
- Gold is an accent, not a fill. Never use `--aged-gold` as a dominant background.
- Test against the three kits in `ui_kits/`. If your output doesn't feel adjacent to them, it isn't on-brand yet.

## File map

```
Paragon Design System/
├── README.md
├── SKILL.md                   ← you are reading this
├── colors_and_type.css        ← link this; everything flows from it
├── assets/                    ← real production imagery
├── preview/                   ← 16 design-system specimen cards
└── ui_kits/
    ├── portfolio/index.html   ← Professional reference build
    ├── voodad/index.html      ← Consulting reference build
    └── publishing/index.html  ← Publishing reference build
```

— Nathaniel Essex / Paragon
