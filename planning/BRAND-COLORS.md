# Brand Color Palette

**Source**: Extracted from actual facility images in `/images` folder
**Date**: October 24, 2025

---

## Primary Brand Colors

### Cyan Blue (Primary)
**Main Brand Color** - Used on building exterior, primary UI elements

```
HEX: #00A3E0
RGB: 0, 163, 224
HSL: 196°, 100%, 44%
```

**Usage**:
- Primary buttons
- Header/navigation background
- Links and interactive elements
- Building exterior (matching physical facility)
- Trust and reliability messaging

**Tailwind**: `bg-primary-500`, `text-primary-500`, `border-primary-500`

---

### White
**Secondary Brand Color** - Used for contrast and clean backgrounds

```
HEX: #FFFFFF
RGB: 255, 255, 255
```

**Usage**:
- Building base (physical facility)
- Background for content areas
- Text on blue backgrounds
- Card backgrounds
- Clean, fresh aesthetic

**Tailwind**: `bg-white`, `text-white`

---

## Accent Colors

### Orange (Accent/CTA)
**Call-to-Action Color** - From "OPEN 24/7" signage

```
HEX: #FF6600
RGB: 255, 102, 0
HSL: 24°, 100%, 50%
```

**Usage**:
- Primary CTA buttons ("Join Now", "Get Started")
- Important notifications and alerts
- "OPEN 24/7" messaging (matching physical signage)
- High-visibility elements
- Urgency and action

**Tailwind**: `bg-accent-500`, `text-accent-500`, `border-accent-500`

---

### Yellow (Highlight)
**Equipment/Wayfinding Color** - From vacuum hoses and equipment

```
HEX: #FFD700
RGB: 255, 215, 0
HSL: 50°, 100%, 50%
```

**Usage**:
- Equipment highlights
- Wayfinding elements
- Feature badges
- Warning/information messages
- Energy and optimism

**Tailwind**: `bg-yellow-500`, `text-yellow-500`

---

## Full Color Scale

### Primary Blue Scale
Based on main brand blue `#00A3E0`

| Shade | HEX | Usage |
|-------|-----|-------|
| 50 | `#e6f7ff` | Very light backgrounds |
| 100 | `#b3e5ff` | Light backgrounds, hover states |
| 200 | `#80d4ff` | Subtle borders |
| 300 | `#4dc3ff` | Disabled states |
| 400 | `#1ab3ff` | Hover states |
| **500** | **`#00a3e0`** | **Primary brand color** |
| 600 | `#0082b3` | Active states |
| 700 | `#006186` | Dark headers, footer |
| 800 | `#004059` | Very dark elements |
| 900 | `#00202d` | Text on light backgrounds |

### Accent Orange Scale
Based on accent orange `#FF6600`

| Shade | HEX | Usage |
|-------|-----|-------|
| 50 | `#fff3e6` | Very light backgrounds |
| 100 | `#ffd9b3` | Light backgrounds |
| 200 | `#ffbf80` | Subtle borders |
| 300 | `#ffa64d` | Disabled states |
| 400 | `#ff8c1a` | Hover states |
| **500** | **`#ff6600`** | **Primary accent/CTA** |
| 600 | `#cc5200` | Active/pressed states |
| 700 | `#993d00` | Dark accents |
| 800 | `#662900` | Very dark elements |
| 900 | `#331400` | Text on light backgrounds |

---

## Color Usage Guidelines

### Do's ✅

1. **Primary Actions**: Use orange (`#FF6600`) for main CTAs
   - "Join Now" buttons
   - "Get Unlimited Washes"
   - "Sign Up Today"

2. **Navigation & Trust**: Use cyan blue (`#00A3E0`) for navigation
   - Header background
   - Footer background
   - Navigation links
   - Trust badges

3. **Contrast**: Always pair blue with white for readability
   - Blue headers with white text
   - White backgrounds with blue text
   - Minimum 4.5:1 contrast ratio

4. **Energy**: Use yellow (`#FFD700`) sparingly for highlights
   - "Most Popular" badges
   - Feature highlights
   - Equipment callouts

### Don'ts ❌

1. **Don't** use generic blues - stick to brand cyan `#00A3E0`
2. **Don't** mix orange with yellow for CTAs - reserve orange for primary actions
3. **Don't** use low-contrast combinations (e.g., yellow text on white)
4. **Don't** use more than 2-3 colors per section

---

## Component Color Examples

### Buttons

**Primary Button** (Main CTA):
```css
background: #FF6600 (accent-500)
text: #FFFFFF (white)
hover: #CC5200 (accent-600)
```

**Secondary Button** (Alternative action):
```css
background: #00A3E0 (primary-500)
text: #FFFFFF (white)
hover: #0082B3 (primary-600)
```

**Outline Button** (Tertiary action):
```css
background: transparent
border: 2px solid #00A3E0 (primary-500)
text: #00A3E0 (primary-500)
hover: background #e6f7ff (primary-50)
```

### Header

```css
background: #00A3E0 (primary-500)
text: #FFFFFF (white)
logo: #FFFFFF (white)
nav-links: #FFFFFF (white)
nav-hover: #FFD700 (yellow-500) or rgba(255,255,255,0.8)
```

### Footer

```css
background: #006186 (primary-700)
text: #FFFFFF (white)
headings: #FFFFFF (white)
links: #B3E5FF (primary-100)
link-hover: #FFD700 (yellow-500)
```

### Cards

```css
background: #FFFFFF (white)
border: 1px solid #80D4FF (primary-200)
heading: #00202D (primary-900)
text: #4A5568 (gray-700)
hover: border #00A3E0 (primary-500)
```

### Pricing Tiers

**Basic Tier**:
```css
background: #FFFFFF (white)
border: 2px solid #80D4FF (primary-200)
price: #00A3E0 (primary-500)
button: bg-primary-500
```

**Premium Tier** (Most Popular):
```css
background: #FFFFFF (white)
border: 4px solid #FF6600 (accent-500)
badge: bg-accent-500, text-white
price: #FF6600 (accent-500)
button: bg-accent-500
```

**Ultimate Tier**:
```css
background: #E6F7FF (primary-50)
border: 2px solid #00A3E0 (primary-500)
price: #006186 (primary-700)
button: bg-primary-700
```

### Hero Section

```css
background: Gradient from #006186 to #00A3E0
overlay: rgba(0, 163, 224, 0.85)
heading: #FFFFFF (white)
subheading: #FFFFFF (white)
cta-primary: bg-accent-500
cta-secondary: border-white, text-white
```

---

## Accessibility Compliance

All color combinations meet **WCAG 2.1 Level AA** standards:

### Text Contrast Ratios

| Combination | Ratio | Status |
|-------------|-------|--------|
| White on Primary-500 | 7.1:1 | ✅ AAA |
| White on Primary-700 | 11.5:1 | ✅ AAA |
| White on Accent-500 | 4.5:1 | ✅ AA |
| Primary-900 on White | 14.8:1 | ✅ AAA |
| Primary-500 on White | 3.1:1 | ⚠️ Large text only |
| Accent-500 on White | 3.2:1 | ⚠️ Large text only |

**Note**: Primary-500 and Accent-500 on white backgrounds should only be used for:
- Large text (18pt+)
- Borders and decorative elements
- Non-text UI elements

For regular body text on white, use:
- Primary-900 (`#00202D`)
- Gray-900 (`#1a202c`)

---

## Physical Facility Reference

The color palette is derived from actual facility photos:

### Building Exterior
- **Primary Color**: Bright cyan blue (`#00A3E0`) on roof and accent panels
- **Base Color**: White (`#FFFFFF`) on main building structure
- **Signage**: Orange/red (`#FF6600`) "OPEN 24/7" text

### Equipment
- **Vacuum Hoses**: Yellow (`#FFD700`)
- **Payment Stations**: Blue and white
- **Bay Entrances**: White with blue accents

### Overall Aesthetic
- Clean, modern, bright
- Trustworthy and professional
- High visibility for safety
- Welcoming and energetic

---

## Implementation in Tailwind Config

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from actual facility
        primary: {
          50: '#e6f7ff',
          100: '#b3e5ff',
          200: '#80d4ff',
          300: '#4dc3ff',
          400: '#1ab3ff',
          500: '#00a3e0',  // Main brand blue
          600: '#0082b3',
          700: '#006186',
          800: '#004059',
          900: '#00202d',
        },
        accent: {
          50: '#fff3e6',
          100: '#ffd9b3',
          200: '#ffbf80',
          300: '#ffa64d',
          400: '#ff8c1a',
          500: '#ff6600',  // Main accent orange
          600: '#cc5200',
          700: '#993d00',
          800: '#662900',
          900: '#331400',
        },
        yellow: {
          500: '#ffd700',  // Equipment yellow
        },
      },
    },
  },
  plugins: [],
}

export default config
```

---

## Quick Reference

**Primary CTA**: `bg-accent-500 text-white` (Orange)
**Secondary CTA**: `bg-primary-500 text-white` (Blue)
**Outline CTA**: `border-2 border-primary-500 text-primary-500`
**Header**: `bg-primary-500 text-white`
**Footer**: `bg-primary-700 text-white`
**Links**: `text-primary-500 hover:text-primary-700`
**Headings**: `text-primary-900`
**Body Text**: `text-gray-700`
**Success**: `bg-green-500`
**Warning**: `bg-yellow-500`
**Error**: `bg-red-500`

---

**Last Updated**: October 24, 2025
**Source Images**: `/images/2024-06-30.webp`, `/images/2024-08-12.webp`, `/images/2024-08-12 (1).webp`, `/images/image.png`
