---
name: "Langigs Global"
theme: "light"

colors:
  neutral:
    shade-0: "#FFFFFF"
    shade-1: "#F2F2F2"
    shade-2: "#D9D9D9"
    shade-3: "#B4B4B4"
    shade-4: "#838383"
    shade-5: "#515252"
    shade-6: "#1F2020"
    shade-7: "#070808"
    white: "#FFFFFF"
  downriver:
    shade-1: "#E6E9ED"
    shade-2: "#CED4DB"
    shade-3: "#536A83"
    shade-4: "#0A2B4E"
    shade-5: "#08223E"
    shade-6: "#04111F"
    shade-7: "#030C17"
  tall-poppy:
    shade-1: "#F8EBE9"
    shade-2: "#F2D7D4"
    shade-3: "#D2746A"
    shade-4: "#C0392B"
    shade-5: "#992D22"
    shade-6: "#4C1611"
    shade-7: "#39110C"
  jungle-green:
    shade-1: "#E9F6EF"
    shade-2: "#D3EEDF"
    shade-3: "#67C68F"
    shade-4: "#27AE60"
    shade-5: "#1F8B4C"
    shade-6: "#0F4526"
    shade-7: "#0B341C"
  cascade:
    shade-1: "#F4F6F6"
    shade-2: "#E9EDED"
    shade-3: "#B4C0C0"
    shade-4: "#95A5A6"
    shade-5: "#778484"
    shade-6: "#3B4242"
    shade-7: "#2C3131"

typography:
  heading:
    fontFamily: "Quicksand"
    fontWeight: 400
  body:
    fontFamily: "Quicksand"
    fontWeight: 400
  sizes:
    desktop:
      h1: 72px
      h2: 52px
      h3: 44px
      h4: 36px
      h5: 28px
      h6: 22px
      text-large: 22px
      text-medium: 18px
      text-regular: 16px
      text-small: 14px
      text-tiny: 12px
    mobile:
      h1: 44px
      h2: 40px
      h3: 32px
      h4: 24px
      h5: 20px
      h6: 18px
      text-large: 18px
      text-medium: 16px
      text-regular: 12px
      text-small: 12px
      text-tiny: 10px

ui:
  style: "gradient"
  buttonRadius: 100px
  tagRadius: 100px
  inputRadius: 12px

cards:
  style: "flat"
  borderWidth: 0px
  dividerWidth: 1px
  radiusLarge: 8px
  radiusMedium: 8px
  radiusSmall: 8px

schemes:
  - name: "Scheme 1"
    background: "neutral-shade-0"
    backgroundHex: "#FFFFFF"
    foregroundHex: "#F2F2F2"
    textHex: "#070808"
    accentHex: "#0A2B4E"
    borderValue: "#07080826"
    useLogoVariant: light
    cssClass: "scheme-1"
  - name: "Scheme 2"
    background: "chromatic1-shade-1"
    backgroundHex: "#E6E9ED"
    foregroundHex: "#CED4DB"
    textHex: "#070808"
    accentHex: "#0A2B4E"
    borderValue: "#07080826"
    useLogoVariant: light
    cssClass: "scheme-2"
  - name: "Scheme 3"
    background: "neutral-shade-1"
    backgroundHex: "#F2F2F2"
    foregroundHex: "#FFFFFF"
    textHex: "#070808"
    accentHex: "#0A2B4E"
    borderValue: "#07080826"
    useLogoVariant: light
    cssClass: "scheme-3"
---

# Langigs Global — Design Specification

This file contains machine-readable design tokens in the YAML frontmatter above, and human-readable guidance below.

## Colors

The design uses a **light** theme with a neutral palette and 4 chromatic palettes.

- **Neutral shades** range from shade-0 (darkest) to shade-7 (lightest), plus white
- **Downriver** — primary shade: `#0A2B4E`
- **Tall Poppy** — primary shade: `#C0392B`
- **Jungle Green** — primary shade: `#27AE60`
- **Cascade** — primary shade: `#95A5A6`

Use the CSS custom properties from `react/globals.css` for all colors (e.g. `--color-neutral-darkest`, `--color-blue-ribbon`).

## Typography

Headings use **Quicksand** at weight 400. Body text uses **Quicksand** at weight 400.

The type scale has desktop and mobile sizes. Apply mobile sizes at smaller breakpoints. All values are in `react/globals.css`.

## UI Elements

UI style is **gradient** with button radius 100px. Cards use the **flat** style with border-width 0px.

## Color Schemes

Sections use color schemes to control their visual appearance. Each scheme is derived from a single background color — all other colors (text, foreground, accent, border) are automatically computed for optimal contrast.

| Scheme | Background | Text | Accent | Logo | CSS class |
|--------|-----------|------|--------|------|-----------|
| Scheme 1 | Neutral White (#FFFFFF) | #070808 | #0A2B4E | light | `.scheme-1` |
| Scheme 2 | Downriver Lightest (#E6E9ED) | #070808 | #0A2B4E | light | `.scheme-2` |
| Scheme 3 | Neutral Lightest (#F2F2F2) | #070808 | #0A2B4E | light | `.scheme-3` |

Apply a scheme by adding its CSS class to the section element. See `sitemap.md` for which scheme each section uses.

### Tweaking Schemes

To create visual variation, you can change which scheme a section uses. When switching schemes:

- Swap the CSS class (e.g. change `.scheme-1` to `.scheme-2`)
- All child elements automatically inherit the correct text, accent, and border colors
- Use the matching logo variant (`logo-light.svg` or `logo-dark.svg`) based on the scheme's `useLogoVariant`
- Alternate between light and dark schemes to create visual rhythm
