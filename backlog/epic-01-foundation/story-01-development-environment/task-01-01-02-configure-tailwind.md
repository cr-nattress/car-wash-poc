# Task: Configure Tailwind CSS with Brand Colors

**ID**: TASK-01-01-02

**Story**: STORY-01-01 (Development Environment)

**Epic**: EPIC-01 (Foundation & Setup)

**Source**: Task from Milestone 1.1 in planning/IMPLEMENTATION-PLAN.md

---

## 🎯 Objective

Configure Tailwind CSS with custom brand colors extracted from actual facility images and set up mobile-first breakpoints.

## 📋 Context

**Why This Task**:
Tailwind CSS must be configured with the exact brand colors from the facility to ensure visual consistency between the physical locations and the website. This configuration will be used throughout the entire application.

**Current State**:
Next.js initialized with default Tailwind configuration.

**Desired State**:
Custom `tailwind.config.ts` with:
- Brand color palette (Cyan Blue, Orange, Yellow) with full 50-900 scales
- Typography plugin configured
- Mobile-first breakpoints verified
- Custom utility classes working

## ✅ Acceptance Criteria

- [ ] `tailwind.config.ts` exists with custom configuration
- [ ] Primary colors (blue) defined from 50-900 with main at 500 (#00A3E0)
- [ ] Accent colors (orange) defined from 50-900 with main at 500 (#FF6600)
- [ ] Yellow color defined at 500 (#FFD700)
- [ ] Typography plugin installed and configured
- [ ] Test component successfully uses custom colors
- [ ] Mobile-first breakpoints work (sm, md, lg, xl, 2xl)
- [ ] Colors match specifications in `planning/BRAND-COLORS.md`
- [ ] PurgeCSS configured for production optimization
- [ ] No console warnings about Tailwind configuration

## 🔧 Implementation Guide

**Application Location**: `v1/tailwind.config.ts`

### Step 1: Install Typography Plugin

```bash
cd v1
npm install -D @tailwindcss/typography
```

### Step 2: Create Custom Tailwind Configuration

Update `v1/tailwind.config.ts`:

```typescript
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
        // Primary brand blue (from building exterior)
        primary: {
          50: '#e6f7ff',   // Very light cyan blue
          100: '#b3e5ff',  // Light cyan blue
          200: '#80d4ff',  // Medium light cyan
          300: '#4dc3ff',  // Medium cyan
          400: '#1ab3ff',  // Medium bright cyan
          500: '#00a3e0',  // Main brand blue (building exterior)
          600: '#0082b3',  // Darker cyan
          700: '#006186',  // Deep cyan
          800: '#004059',  // Very deep cyan
          900: '#00202d',  // Almost black cyan
        },
        // Accent orange (from OPEN 24/7 signage)
        accent: {
          50: '#fff3e6',   // Very light orange
          100: '#ffd9b3',  // Light orange
          200: '#ffbf80',  // Medium light orange
          300: '#ffa64d',  // Medium orange
          400: '#ff8c1a',  // Medium bright orange
          500: '#ff6600',  // Main accent orange (OPEN 24/7 sign)
          600: '#cc5200',  // Darker orange
          700: '#993d00',  // Deep orange
          800: '#662900',  // Very deep orange
          900: '#331400',  // Almost black orange
        },
        // Yellow (from equipment/vacuum hoses)
        yellow: {
          500: '#ffd700',  // Bright yellow (equipment)
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
```

### Step 3: Verify Colors in Global CSS

Check that `v1/src/app/globals.css` has Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-primary: #00a3e0;
    --color-accent: #ff6600;
    --color-yellow: #ffd700;
  }
}
```

### Step 4: Create Test Component to Verify Colors

Create `v1/src/components/__test__/ColorTest.tsx`:

```tsx
export function ColorTest() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold text-primary-700">Color Test</h1>

      {/* Primary Blues */}
      <div className="space-y-2">
        <h2 className="font-semibold">Primary Blues</h2>
        <div className="flex gap-2">
          <div className="w-16 h-16 bg-primary-50 rounded" />
          <div className="w-16 h-16 bg-primary-100 rounded" />
          <div className="w-16 h-16 bg-primary-200 rounded" />
          <div className="w-16 h-16 bg-primary-300 rounded" />
          <div className="w-16 h-16 bg-primary-400 rounded" />
          <div className="w-16 h-16 bg-primary-500 rounded" />
          <div className="w-16 h-16 bg-primary-600 rounded" />
          <div className="w-16 h-16 bg-primary-700 rounded" />
          <div className="w-16 h-16 bg-primary-800 rounded" />
          <div className="w-16 h-16 bg-primary-900 rounded" />
        </div>
      </div>

      {/* Accent Oranges */}
      <div className="space-y-2">
        <h2 className="font-semibold">Accent Oranges</h2>
        <div className="flex gap-2">
          <div className="w-16 h-16 bg-accent-50 rounded" />
          <div className="w-16 h-16 bg-accent-100 rounded" />
          <div className="w-16 h-16 bg-accent-200 rounded" />
          <div className="w-16 h-16 bg-accent-300 rounded" />
          <div className="w-16 h-16 bg-accent-400 rounded" />
          <div className="w-16 h-16 bg-accent-500 rounded" />
          <div className="w-16 h-16 bg-accent-600 rounded" />
          <div className="w-16 h-16 bg-accent-700 rounded" />
          <div className="w-16 h-16 bg-accent-800 rounded" />
          <div className="w-16 h-16 bg-accent-900 rounded" />
        </div>
      </div>

      {/* Yellow */}
      <div className="space-y-2">
        <h2 className="font-semibold">Yellow</h2>
        <div className="w-16 h-16 bg-yellow-500 rounded" />
      </div>

      {/* Test Buttons */}
      <div className="space-x-4">
        <button className="px-6 py-3 bg-accent-500 text-white rounded-lg hover:bg-accent-600">
          Primary CTA (Orange)
        </button>
        <button className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
          Secondary CTA (Blue)
        </button>
      </div>
    </div>
  )
}
```

### Step 5: Test Configuration

Add the test component to homepage temporarily:

```tsx
// v1/src/app/page.tsx
import { ColorTest } from '@/components/__test__/ColorTest'

export default function HomePage() {
  return <ColorTest />
}
```

Run development server:
```bash
cd v1
npm run dev
```

Visit http://localhost:3000 and verify:
- All color swatches display correctly
- Primary-500 is cyan blue (#00A3E0)
- Accent-500 is orange (#FF6600)
- Yellow-500 is gold (#FFD700)
- Buttons use correct colors and hover states work

### Step 6: Compare Against Brand Colors Document

```bash
# Open brand colors reference
cat ../planning/BRAND-COLORS.md
```

Verify each color matches exactly:
- Primary-500: #00A3E0 ✓
- Accent-500: #FF6600 ✓
- Yellow-500: #FFD700 ✓

### Step 7: Test Responsive Breakpoints

Add responsive test to `ColorTest.tsx`:

```tsx
<div className="space-y-4">
  <div className="bg-primary-500 text-white p-4">
    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
      Responsive text sizing test
    </p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div className="bg-accent-500 text-white p-4">Col 1</div>
    <div className="bg-accent-500 text-white p-4">Col 2</div>
    <div className="bg-accent-500 text-white p-4">Col 3</div>
    <div className="bg-accent-500 text-white p-4">Col 4</div>
  </div>
</div>
```

Test at different screen sizes:
- Mobile (< 640px): 1 column, small text
- Tablet (640-1024px): 2-3 columns, medium text
- Desktop (> 1024px): 4 columns, large text

### Step 8: Remove Test Component

After verification, remove the test component from homepage:

```tsx
// v1/src/app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  )
}
```

You can keep `ColorTest.tsx` in the codebase for future reference but don't import it.

## 📚 Resources

**Related Files**:
- `planning/BRAND-COLORS.md` - Official brand color specifications
- `v1/tailwind.config.ts` - Configuration file
- `v1/src/app/globals.css` - Global styles

**Documentation**:
- Tailwind CSS: https://tailwindcss.com/docs
- Customizing Colors: https://tailwindcss.com/docs/customizing-colors
- Typography Plugin: https://tailwindcss.com/docs/typography-plugin
- Responsive Design: https://tailwindcss.com/docs/responsive-design

**Design References**:
- `images/2024-06-30.webp` - Building exterior (cyan blue source)
- `images/2024-08-12.webp` - Aerial view with signage (orange source)
- `images/2024-08-12 (1).webp` - Daytime view (equipment colors)

## 🧪 Testing Requirements

**Manual Testing**:

1. **Color Accuracy Test**:
   ```bash
   cd v1
   npm run dev
   # Visit http://localhost:3000 with ColorTest component
   ```
   - [ ] Primary-500 matches building blue (#00A3E0)
   - [ ] Accent-500 matches signage orange (#FF6600)
   - [ ] Yellow-500 matches equipment yellow (#FFD700)
   - [ ] All shades (50-900) render correctly

2. **Responsive Breakpoint Test**:
   - [ ] Resize browser from 320px to 2560px
   - [ ] Verify sm: (640px) breakpoint works
   - [ ] Verify md: (768px) breakpoint works
   - [ ] Verify lg: (1024px) breakpoint works
   - [ ] Verify xl: (1280px) breakpoint works

3. **Build Test**:
   ```bash
   npm run build
   ```
   - [ ] Build completes without warnings
   - [ ] CSS file size reasonable (< 50KB)
   - [ ] Unused styles purged

**Automated Tests**:

```bash
# Type check
npm run type-check

# Lint check
npm run lint
```

## 🎓 Learning Notes

**Key Concepts**:

1. **Mobile-First Design**:
   - Tailwind uses mobile-first breakpoints
   - Base styles apply to mobile, use `md:` for desktop
   - Example: `text-sm md:text-lg` (small on mobile, large on desktop)

2. **Color Scale System**:
   - 50: Lightest (backgrounds, hover states)
   - 500: Main brand color (primary usage)
   - 900: Darkest (text, emphasis)
   - Provides flexibility for UI variations

3. **Brand Color Consistency**:
   - Colors extracted from actual facility photos
   - Ensures website matches physical locations
   - Builds trust and recognition

4. **PurgeCSS Optimization**:
   - Tailwind scans content array for used classes
   - Removes unused CSS in production
   - Results in tiny CSS bundles (often < 20KB)

**Common Pitfalls**:

⚠️ **Forgetting content paths**
- Update `content` array in tailwind.config.ts
- Must include all files that use Tailwind classes
- Missing paths = classes won't work in production

⚠️ **Not using extend**
- Always use `theme.extend` to add to defaults
- Using `theme` alone overrides all Tailwind defaults
- You'll lose standard colors like `gray-500`

⚠️ **Hardcoding hex values**
- Don't use `className="bg-[#00A3E0]"`
- Always use configured classes: `bg-primary-500`
- Ensures consistency and easier refactoring

⚠️ **Wrong breakpoint direction**
- Tailwind is mobile-first, not desktop-first
- Use `md:text-lg` (large on medium+), not opposite
- Default styles should work on mobile

## 📏 Estimated Effort

**Time**: 1 hour
- Install typography plugin: 5 minutes
- Configure tailwind.config.ts: 20 minutes
- Create test component: 15 minutes
- Test colors and breakpoints: 15 minutes
- Documentation: 5 minutes

**Complexity**: Low
- Standard Tailwind configuration
- Following established template
- Well-documented process

**Prerequisites**:
- TASK-01-01-01: Next.js initialized

## ✔️ Definition of Done

- [ ] `tailwind.config.ts` configured with custom colors
- [ ] All brand colors defined (primary, accent, yellow)
- [ ] Color values match `planning/BRAND-COLORS.md` exactly
- [ ] Typography plugin installed
- [ ] Test component displays all colors correctly
- [ ] Responsive breakpoints work (320px - 2560px tested)
- [ ] Build completes without warnings
- [ ] TypeScript compiles successfully
- [ ] No console errors

**Commit Message**:
```
feat(config): configure Tailwind with brand colors

- Add primary blue scale (50-900) from building exterior
- Add accent orange scale (50-900) from signage
- Add yellow (#FFD700) from equipment
- Install @tailwindcss/typography plugin
- Configure mobile-first responsive breakpoints
- Verify colors match planning/BRAND-COLORS.md

Colors extracted from actual facility photos in /images

Closes TASK-01-01-02
```

## 🤖 AI Agent Instructions

**Pre-Implementation**:

1. **Verify Prerequisites**:
   ```bash
   cd v1
   # Ensure Next.js is initialized
   test -f package.json && echo "✓ Next.js ready" || echo "✗ Run task-01-01-01 first"
   ```

2. **Check Brand Colors Document**:
   ```bash
   cat ../planning/BRAND-COLORS.md
   # Note exact color values to use
   ```

**Implementation**:

1. **Install Dependencies**:
   ```bash
   cd v1
   npm install -D @tailwindcss/typography
   ```

2. **Update tailwind.config.ts**:
   - Copy the complete configuration from Step 2
   - Ensure all color values are exact
   - Save file

3. **Create Test Component**:
   - Create `src/components/__test__/ColorTest.tsx`
   - Add color swatches and button tests
   - Import in `src/app/page.tsx`

4. **Verify**:
   ```bash
   npm run dev
   # Visit http://localhost:3000
   # Check all colors render correctly
   ```

**Verification**:

```bash
# Type check
npm run type-check

# Build test
npm run build

# Check for warnings
# Should build successfully
```

**Success Criteria**:
- Colors match brand specifications
- Breakpoints work at all screen sizes
- Build completes without errors
- Test component displays correctly

## 🔗 Related Tasks

**Depends On**:
- TASK-01-01-01: Next.js initialized (must be complete)

**Blocks**:
- All subsequent tasks (need brand colors configured)
- TASK-01-03-04: Button component (uses accent-500)
- TASK-02-01-01: Hero section (uses primary gradient)

**Can Run in Parallel With**:
- TASK-01-01-03: Git repository setup (independent)

---

**Status**: 🔵 Not Started
**Assigned To**: (Not assigned)
**Estimated**: 1 hour
**Actual**: (Not started)

**Application Directory**: `v1/`

**Next**: After completing, proceed to `task-01-01-03-setup-git.md`
