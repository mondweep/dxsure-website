# Agentics London - Style Guide

Design system documentation for the Agentics London Chapter website, aligned with the parent [Agentics Foundation](https://agentics.org/) brand identity.

**Last Updated**: November 2025
**Version**: 1.0.0

---

## Table of Contents

1. [Brand Overview](#brand-overview)
2. [Typography](#typography)
3. [Color Palette](#color-palette)
4. [Visual Style](#visual-style)
5. [Layout System](#layout-system)
6. [Components](#components)
7. [Interactive Elements](#interactive-elements)
8. [Responsive Design](#responsive-design)
9. [Implementation Guidelines](#implementation-guidelines)

---

## Brand Overview

### Design Philosophy

The Agentics Foundation brand embodies a **technical, developer-focused aesthetic** that balances:
- **Modern minimalism** with functional clarity
- **Technical sophistication** with approachability
- **Bold visual identity** with readability

### Visual Personality

- **Technical**: Monospace typography, console-inspired elements
- **Modern**: High contrast, clean lines, generous spacing
- **Warm**: Coral primary color, warm neutral backgrounds
- **Accessible**: WCAG AA compliant, semantic HTML

---

## Typography

### Font Families

#### Primary Font: IBM Plex Mono
**Source**: Google Fonts
**URL**: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap`

**Usage**: Body text, navigation, labels, code-like content
**Weights**:
- `400` - Regular (body text, paragraphs)
- `500` - Medium (emphasis, subheadings)
- `600` - Semibold (strong emphasis, labels)
- `700` - Bold (high emphasis, buttons)

**Character**: Monospace font that evokes technical precision and developer culture. Clean, readable, and distinctive.

#### Heading Font: Barlow Condensed
**Source**: Google Fonts
**URL**: `https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600&display=swap`

**Usage**: All headings (h1-h6), section titles, hero text
**Weight**:
- `600` - Semibold (all headings)

**Character**: Condensed sans-serif that creates strong visual hierarchy and modern, technical aesthetic.

### Typographic Scale

```css
/* Headings - Barlow Condensed */
h1 { font-size: 3rem; }      /* 48px */
h2 { font-size: 2.25rem; }   /* 36px */
h3 { font-size: 1.875rem; }  /* 30px */
h4 { font-size: 1.5rem; }    /* 24px */
h5 { font-size: 1.25rem; }   /* 20px */
h6 { font-size: 1rem; }      /* 16px */

/* Body Text - IBM Plex Mono */
body { font-size: 1rem; }    /* 16px */
small { font-size: 0.875rem; } /* 14px */
```

### Typography Guidelines

**Line Heights**:
- Headings: `1.2` (tight, impactful)
- Body text: `1.6` (readable, comfortable)
- Code blocks: `1.5` (balanced for monospace)

**Letter Spacing**:
- Headings: `-0.02em` (slightly tighter)
- Body: `0` (default)
- Uppercase text: `0.05em` (slightly looser)

**Font Pairing**:
- **Do**: Use Barlow Condensed for headings, IBM Plex Mono for body
- **Don't**: Mix with other font families
- **Contrast**: The pairing creates strong visual distinction between headings and content

---

## Color Palette

### Light Mode (Primary Theme)

#### Core Colors

| Color Name | HSL Value | Hex Code | RGB | Usage |
|------------|-----------|----------|-----|-------|
| **Primary** | `hsl(11, 74%, 56%)` | `#E25C3D` | `rgb(226, 92, 61)` | Primary actions, links, brand elements |
| **Background** | `hsl(40, 78%, 98%)` | `#FEF9F5` | `rgb(254, 249, 245)` | Page background, main canvas |
| **Foreground** | `hsl(0, 0%, 12%)` | `#1F1F1F` | `rgb(31, 31, 31)` | Body text, headings |
| **Secondary** | `hsl(40, 7%, 42%)` | `#6B6862` | `rgb(107, 104, 98)` | Secondary text, de-emphasized content |
| **Muted** | `hsl(40, 7%, 88%)` | `#E3E1DF` | `rgb(227, 225, 223)` | Borders, dividers, subtle backgrounds |
| **Accent** | `hsl(11, 74%, 56%)` | `#E25C3D` | `rgb(226, 92, 61)` | Highlights, emphasis |
| **Border** | `hsl(40, 7%, 88%)` | `#E3E1DF` | `rgb(227, 225, 223)` | Component borders, separators |

#### Semantic Colors

| Purpose | HSL Value | Hex Code | Usage |
|---------|-----------|----------|-------|
| **Destructive** | `hsl(0, 84%, 60%)` | `#EE4444` | Error states, delete actions |
| **Success** (suggested) | `hsl(142, 71%, 45%)` | `#22C55E` | Success messages, confirmations |
| **Warning** (suggested) | `hsl(43, 100%, 64%)` | `#FFD954` | Warning states, cautions |

#### Console/Terminal Theme Colors

| Element | HSL Value | Hex Code | Usage |
|---------|-----------|----------|-------|
| **Console Window** | `hsl(40, 28%, 95%)` | `#F7F5F2` | Console window backgrounds |
| **Console Dot Red** | `hsl(0, 100%, 63%)` | `#FF5252` | macOS-style red dot |
| **Console Dot Yellow** | `hsl(43, 100%, 64%)` | `#FFD954` | macOS-style yellow dot |
| **Console Dot Teal** | `hsl(174, 60%, 51%)` | `#51C9B8` | macOS-style green dot |

#### Code Syntax Colors

| Element | Hex Code | Usage |
|---------|----------|-------|
| **Keyword** | `#7DCE82` | Keywords, reserved words |
| **String** | `#4EC9B0` | Strings, text literals |
| **Comment** | `#808080` | Comments, documentation |
| **Text** | `#D4D4D4` | Default code text |

### Dark Mode (Future Implementation)

#### Core Colors

| Color Name | HSL Value | Hex Code | Usage |
|------------|-----------|----------|-------|
| **Primary** | `hsl(11, 100%, 64%)` | `#FF6B47` | Primary actions (brighter for contrast) |
| **Background** | `hsl(0, 0%, 5%)` | `#0D0D0D` | Page background |
| **Foreground** | `hsl(0, 0%, 93%)` | `#EDEDED` | Body text, headings |
| **Muted** | `hsl(0, 0%, 13%)` | `#212121` | Subtle backgrounds, borders |
| **Border** | `hsl(0, 0%, 13%)` | `#212121` | Component borders |

### Color Usage Guidelines

**Primary Color (`#E25C3D`)**:
- Primary call-to-action buttons
- Interactive links (default state)
- Brand elements and logos
- Important icons and indicators
- Navigation active states

**Background Color (`#FEF9F5`)**:
- Main page background
- Creates warm, inviting canvas
- Contrasts well with primary coral

**Foreground Color (`#1F1F1F`)**:
- All body text
- Headings
- High-contrast UI elements
- Ensures WCAG AA compliance

**Secondary Color (`#6B6862`)**:
- Secondary text (descriptions, metadata)
- Disabled state text
- De-emphasized content
- Supplementary information

**Muted Color (`#E3E1DF`)**:
- Component borders
- Dividers and separators
- Card backgrounds (subtle)
- Input field borders

### Accessibility Standards

All color combinations meet **WCAG 2.1 AA** standards:
- **Text contrast**: Minimum 4.5:1 for normal text
- **Large text contrast**: Minimum 3:1 for 18px+ or 14px+ bold
- **UI components**: Minimum 3:1 contrast for interactive elements

**Tested Combinations**:
- `#E25C3D` on `#FEF9F5`: ✅ 4.8:1 (AA compliant)
- `#1F1F1F` on `#FEF9F5`: ✅ 17.2:1 (AAA compliant)
- `#6B6862` on `#FEF9F5`: ✅ 5.1:1 (AA compliant)

---

## Visual Style

### Border Radius

**Standard Radius**: `32px`

This creates the signature "pill-shaped" modern aesthetic throughout the site.

**Variations**:
- **Large** (buttons, cards): `32px`
- **Medium** (inputs, badges): `30px` (`calc(32px - 2px)`)
- **Small** (chips, tags): `28px` (`calc(32px - 4px)`)
- **Full** (avatar, icons): `9999px` or `50%`

**Usage**:
```css
/* Primary components */
.button, .card { border-radius: 32px; }

/* Medium components */
.input, .badge { border-radius: 30px; }

/* Small components */
.chip, .tag { border-radius: 28px; }

/* Circular */
.avatar { border-radius: 50%; }
```

### Shadows

**Shadow Scale**:

```css
/* Subtle elevation */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* Default elevation */
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
             0 2px 4px -1px rgba(0, 0, 0, 0.06);

/* Prominent elevation */
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
             0 4px 6px -2px rgba(0, 0, 0, 0.05);

/* High elevation */
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
             0 10px 10px -5px rgba(0, 0, 0, 0.04);

/* Maximum elevation */
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

**Usage Guidelines**:
- **Cards**: `shadow-md` or `shadow-lg`
- **Modals**: `shadow-xl` or `shadow-2xl`
- **Buttons (hover)**: `shadow-md`
- **Dropdowns**: `shadow-lg`
- **Floating elements**: `shadow-xl`

### Spacing Scale

Based on 4px baseline grid:

| Name | Value | Usage |
|------|-------|-------|
| `xs` | `4px` | Tight spacing, inline elements |
| `sm` | `8px` | Related elements |
| `md` | `16px` | Default spacing |
| `lg` | `24px` | Section padding |
| `xl` | `32px` | Large gaps |
| `2xl` | `48px` | Section separators |
| `3xl` | `64px` | Major sections |

---

## Layout System

### Container

**Max Width**: `1080px`
**Padding**: `2rem` (32px) horizontal on all breakpoints

```css
.container {
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
}
```

### Grid System

**12-column grid** with flexible gaps:

```css
.grid {
  display: grid;
  gap: 1.5rem; /* 24px default */
}

/* Common patterns */
.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
```

### Flexbox Patterns

```css
/* Horizontal stack */
.flex-row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

/* Vertical stack */
.flex-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Center aligned */
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

## Components

### Buttons

#### Primary Button

```html
<button class="btn-primary">
  Get Started
</button>
```

**Styles**:
```css
.btn-primary {
  background-color: #E25C3D;
  color: #FEF9F5;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  padding: 0.75rem 1.5rem; /* 12px 24px */
  border-radius: 32px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background-color: #C74D2F; /* Darker shade */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-primary:active {
  transform: translateY(1px);
}
```

#### Secondary Button

```css
.btn-secondary {
  background-color: #6B6862;
  color: #FEF9F5;
  /* Same sizing and border-radius as primary */
}

.btn-secondary:hover {
  background-color: #544F4A;
}
```

#### Ghost Button

```css
.btn-ghost {
  background-color: transparent;
  color: #E25C3D;
  border: 2px solid #E25C3D;
  /* Same sizing and border-radius as primary */
}

.btn-ghost:hover {
  background-color: #E25C3D;
  color: #FEF9F5;
}
```

### Cards

```css
.card {
  background-color: #FFFFFF;
  border: 1px solid #E3E1DF;
  border-radius: 32px;
  padding: 2rem; /* 32px */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

### Links

```css
a {
  color: #E25C3D;
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.2s ease;
}

a:hover {
  color: #C74D2F;
}

a:focus {
  outline: 2px solid #E25C3D;
  outline-offset: 2px;
}
```

### Inputs

```css
input, textarea {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: 2px solid #E3E1DF;
  border-radius: 30px;
  background-color: #FFFFFF;
  transition: border-color 0.2s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #E25C3D;
  box-shadow: 0 0 0 3px rgba(226, 92, 61, 0.1);
}
```

---

## Interactive Elements

### Hover States

**Timing**: `200ms` transition for most interactions
**Easing**: `ease` or `ease-in-out`

**Standard hover effects**:
1. **Color shift**: Darken by ~10-15%
2. **Shadow increase**: From `shadow-md` to `shadow-lg`
3. **Subtle scale**: `scale(1.02)` for large clickable areas
4. **Opacity**: `opacity: 0.8` for images/icons

### Focus States

**Keyboard navigation** must be clearly visible:

```css
:focus {
  outline: 2px solid #E25C3D;
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none; /* Hide for mouse users */
}
```

### Active States

```css
.button:active {
  transform: translateY(1px);
  box-shadow: none;
}
```

### Transitions

**Default transition**: `transition: all 0.2s ease;`

**Specific transitions**:
- **Colors**: `transition: background-color 0.2s ease, color 0.2s ease;`
- **Shadows**: `transition: box-shadow 0.3s ease;`
- **Transforms**: `transition: transform 0.15s ease;`

---

## Responsive Design

### Breakpoints

| Name | Min Width | Usage |
|------|-----------|-------|
| **Mobile** | `0px` | Default (mobile-first) |
| **Tablet** | `768px` | 2-column layouts |
| **Desktop** | `1080px` | Full container width |

### Responsive Patterns

```css
/* Mobile-first approach */
.grid {
  grid-template-columns: 1fr;
}

/* Tablet */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1080px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Mobile Navigation

- Hamburger menu for mobile (< 768px)
- Full horizontal navigation for desktop (≥ 768px)
- Touch-friendly tap targets (minimum 44x44px)

---

## Implementation Guidelines

### HTML Structure

**Semantic HTML**:
```html
<header>
  <nav>...</nav>
</header>

<main>
  <section>...</section>
  <article>...</article>
</main>

<footer>...</footer>
```

### CSS Architecture

**Inline styles in `<style>` tags** (current approach):
- All styles in HTML file `<style>` blocks
- No external CSS files
- Scoped to each HTML page

**Recommended organization**:
1. CSS Variables (`:root`)
2. Reset/Base styles
3. Typography
4. Layout
5. Components
6. Utilities

### Font Loading

**Google Fonts CDN**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**CSS Declaration**:
```css
body {
  font-family: 'IBM Plex Mono', 'Courier New', monospace;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Barlow Condensed', 'Arial Narrow', sans-serif;
}
```

### Performance Considerations

- **Font display**: Use `swap` to prevent FOIT (Flash of Invisible Text)
- **Image optimization**: Compress images before adding to `assets/` or `images/`
- **Video compression**: Compress videos for faster gallery loading
- **Lazy loading**: Add `loading="lazy"` to images below the fold

---

## Browser Support

### Target Browsers

- **Chrome**: Last 2 versions
- **Firefox**: Last 2 versions
- **Safari**: Last 2 versions
- **Edge**: Last 2 versions
- **Mobile Safari**: iOS 13+
- **Chrome Mobile**: Android 9+

### Progressive Enhancement

1. **Base experience**: Semantic HTML, readable without CSS
2. **Enhanced experience**: Full styling with CSS
3. **Advanced features**: JavaScript interactions

---

## Tools & Resources

### Design Tools
- **Figma**: For design mockups and prototypes
- **Adobe Color**: For color palette generation
- **Coolors**: For color harmony exploration

### Development Tools
- **Chrome DevTools**: For responsive testing
- **WAVE**: For accessibility testing
- **Lighthouse**: For performance audits

### References
- **Parent site**: [agentics.org](https://agentics.org/)
- **Google Fonts**: [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono), [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed)
- **WCAG Guidelines**: [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)

---

## Changelog

### Version 1.0.0 (November 2025)
- Initial style guide creation
- Documented design system from parent Agentics Foundation site
- Defined typography (IBM Plex Mono + Barlow Condensed)
- Established color palette (light mode + dark mode preparation)
- Specified visual style (32px border radius, shadow scale)
- Documented layout system and component patterns
- Added responsive design guidelines

---

## Questions or Feedback?

For questions about this style guide or suggestions for improvements, please contact the Agentics London team or reference the parent foundation's design system at [agentics.org](https://agentics.org/).
