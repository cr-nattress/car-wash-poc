# Task: Create Homepage Hero Section with Brand Colors

**ID**: TASK-02-01-01

**Story**: STORY-02-01 (Homepage)

**Epic**: EPIC-02 (Core Pages & Content)

**Source**: Task from Milestone 2.1 in planning/IMPLEMENTATION-PLAN.md

---

## 🎯 Objective

Create a mobile-first hero section for the homepage with the brand's cyan blue gradient background, compelling headline, dual CTAs (orange and white), and trust badges.

## 📋 Context

**Why This Task**:
The hero section is the first thing visitors see - it must immediately communicate value and drive membership signups. Based on industry research (WEB.md), 70% of bookings happen on mobile, so mobile-first design is critical.

**Current State**:
Homepage exists as a placeholder from Next.js initialization.

**Desired State**:
Full-viewport hero section with:
- Background gradient using brand blue (`#00A3E0` to `#006186`)
- Compelling headline about unlimited washes
- Subheadline highlighting $24/month starting price
- Primary CTA: Orange "Get Unlimited Washes" button
- Secondary CTA: White outline "Find a Location" button
- Trust badges: "Cancel Anytime", "2 Locations", etc.
- Mobile-optimized layout (buttons stack vertically)
- Smooth animations on load (Framer Motion)

## ✅ Acceptance Criteria

- [ ] Hero section takes full viewport height (600px mobile, 700px desktop)
- [ ] Background uses cyan blue gradient (`#00A3E0` to `#006186`) with 70% opacity overlay
- [ ] Headline is bold, 4xl on mobile, 6xl on desktop
- [ ] Subheadline mentions "$24/month" prominently
- [ ] Primary CTA uses orange `#FF6600` (accent-500)
- [ ] Secondary CTA uses white outline style
- [ ] CTAs stack vertically on mobile (<640px), side-by-side on desktop
- [ ] Trust badges display with checkmark icons
- [ ] Framer Motion fade-in animation on component load
- [ ] Text is readable with WCAG AA contrast (white text on dark blue)
- [ ] Hero is responsive from 320px to 2560px
- [ ] No layout shift on load (CLS < 0.1)

## 🔧 Implementation Guide

**Application Location**: `v1/src/components/features/Hero.tsx`

### Step 1: Create Hero Component File

```bash
cd v1
mkdir -p src/components/features
touch src/components/features/Hero.tsx
```

### Step 2: Implement Hero Component

Create `v1/src/components/features/Hero.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
      {/* Background Gradient (brand colors) */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500" />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-primary-900/30" />

      {/* Content */}
      <div className="relative container mx-auto px-4 text-white z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Unlimited Shine,
            <br />
            Unbeatable Value
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Join 1,000+ members enjoying unlimited monthly washes from just{' '}
            <span className="text-accent-500 font-bold">$24/month</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Primary CTA - Orange */}
            <Link href="/membership">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Get Unlimited Washes
              </Button>
            </Link>

            {/* Secondary CTA - White Outline */}
            <Link href="/locations">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10"
              >
                Find a Location
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Cancel Anytime</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>2 Convenient Locations</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Free Vacuums</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

### Step 3: Import Hero on Homepage

Update `v1/src/app/page.tsx`:

```tsx
import { Hero } from '@/components/features/Hero'

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Other homepage sections will be added in subsequent tasks */}
    </>
  )
}
```

### Step 4: Verify Button Component Exists

The Hero uses the Button component. Ensure it exists from EPIC-01.

If not, the Button component should be at `v1/src/components/ui/Button.tsx` with variants:
- `primary`: Orange background (`bg-accent-500`)
- `outline`: Transparent with border

### Step 5: Test Responsive Behavior

**Mobile Test** (< 640px):
- Buttons stack vertically
- Text is 4xl size
- Trust badges stack vertically
- Hero height is 600px

**Desktop Test** (> 640px):
- Buttons side-by-side
- Text is 6xl size
- Trust badges horizontal
- Hero height is 700px

### Step 6: Test Brand Colors

Verify colors match the facility:
- Background gradient uses `primary-700` (`#006186`) to `primary-500` (`#00A3E0`)
- Primary button is `accent-500` (`#FF6600` orange)
- Checkmarks are `yellow-500` (`#FFD700`)

Compare to `planning/BRAND-COLORS.md` and `images/` folder photos.

### Step 7: Test Animation

- Component should fade in smoothly on page load
- Animation duration: 0.6 seconds
- No jarring movement

### Step 8: Accessibility Check

```bash
# Check contrast ratio
# White text on primary-700 background should be > 7:1 (AAA)
```

**Manual Check**:
- Tab through CTAs with keyboard
- Screen reader announces headline correctly
- All interactive elements focusable

## 📚 Resources

**Related Files**:
- `v1/src/components/ui/Button.tsx` - Button component (from EPIC-01)
- `v1/src/app/layout.tsx` - Root layout
- `planning/BRAND-COLORS.md` - Official brand colors
- `planning/WEB.md` - Hero best practices from industry research

**Documentation**:
- Framer Motion: https://www.framer.com/motion/
- Tailwind Gradients: https://tailwindcss.com/docs/gradient-color-stops
- Next.js Image: https://nextjs.org/docs/app/api-reference/components/image

**Inspiration**:
- See `planning/COMPETITORS.md` for competitor hero sections
- Tommy's Express has strong hero messaging
- Sparkle Car Wash uses blue gradient well

## 🧪 Testing Requirements

**Manual Testing**:

1. **Mobile Test** (iPhone Safari, Chrome Android):
   ```bash
   cd v1
   npm run dev
   # Visit on mobile device or DevTools mobile view
   ```
   - [ ] Hero is full height
   - [ ] Text readable
   - [ ] Buttons stack vertically
   - [ ] Buttons easy to tap (44x44px minimum)

2. **Desktop Test**:
   - [ ] Hero 700px height
   - [ ] Text larger (6xl)
   - [ ] Buttons side-by-side
   - [ ] Gradient visible

3. **Brand Color Test**:
   - [ ] Gradient uses correct blue shades
   - [ ] Orange button matches OPEN 24/7 signage (`#FF6600`)
   - [ ] Yellow checkmarks match equipment (`#FFD700`)

4. **Animation Test**:
   - [ ] Fade-in smooth
   - [ ] No layout shift (CLS score)
   - [ ] Text appears within 0.6s

**Automated Tests** (Optional for POC):

```typescript
// v1/src/components/features/__tests__/Hero.test.tsx
import { render, screen } from '@testing/library/react'
import { Hero } from '../Hero'

describe('Hero Component', () => {
  it('renders headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Unlimited Shine/)).toBeInTheDocument()
  })

  it('displays price', () => {
    render(<Hero />)
    expect(screen.getByText(/\$24\/month/)).toBeInTheDocument()
  })

  it('has two CTAs', () => {
    render(<Hero />)
    const buttons = screen.getAllByRole('link')
    expect(buttons).toHaveLength(2)
  })
})
```

**Lighthouse Test**:
```bash
# Check performance score
npm run build
npm run start
# Run Lighthouse on http://localhost:3000
# Target: Performance > 90
```

## 🎓 Learning Notes

**Key Concepts**:

1. **Full Viewport Height**:
   - `h-[600px]` on mobile, `h-[700px]` on desktop
   - Creates immersive first impression
   - Common pattern for hero sections

2. **Gradient Backgrounds**:
   - `bg-gradient-to-r from-[color] to-[color]`
   - Creates depth and visual interest
   - Uses brand colors for consistency

3. **Mobile-First Responsive**:
   - Design for mobile, enhance for desktop
   - `flex-col` stacks, `sm:flex-row` goes horizontal
   - Text size increases with breakpoints (4xl → 6xl)

4. **Framer Motion**:
   - `initial`, `animate`, `transition` props
   - Adds polish without hurting performance
   - Client component required ('use client')

5. **Trust Badges**:
   - Reduce friction (Cancel Anytime)
   - Highlight convenience (2 Locations)
   - Emphasize value (Free Vacuums)

**Common Pitfalls**:

⚠️ **Forgetting 'use client' directive**
- Framer Motion requires client component
- Add `'use client'` at top of file

⚠️ **Poor color contrast**
- Always test white text on colored backgrounds
- Use WCAG contrast checker
- Minimum 4.5:1 for AA compliance

⚠️ **Layout shift on animation**
- Use `opacity` animation (not `transform`)
- Set explicit height to prevent shift
- Measure CLS in Lighthouse

⚠️ **Non-responsive button sizes**
- Buttons must be 44x44px minimum on mobile
- Use proper spacing (`gap-4`)
- Test on actual devices

⚠️ **Hardcoding colors**
- Use Tailwind classes (`bg-accent-500`)
- Don't use inline styles or hex codes
- Ensures brand consistency

## 📏 Estimated Effort

**Time**: 2-3 hours
- Component creation: 1 hour
- Responsive testing: 30 minutes
- Brand color verification: 30 minutes
- Animation polish: 30 minutes
- Documentation: 30 minutes

**Complexity**: Low-Medium
- Standard hero section pattern
- Framer Motion adds slight complexity
- Responsive design requires testing

**Prerequisites**:
- TASK-01-01-01: Next.js initialized
- TASK-01-01-02: Tailwind configured with brand colors
- TASK-01-03-04: Button component created

## ✔️ Definition of Done

- [ ] Hero component created in `v1/src/components/features/Hero.tsx`
- [ ] Imported on homepage (`v1/src/app/page.tsx`)
- [ ] Uses exact brand colors (verified against `planning/BRAND-COLORS.md`)
- [ ] Gradient background (cyan blue `#00A3E0` to `#006186`)
- [ ] Orange CTA button (`#FF6600`)
- [ ] Yellow checkmarks (`#FFD700`)
- [ ] Mobile responsive (320px to 2560px tested)
- [ ] Buttons stack on mobile, side-by-side on desktop
- [ ] Framer Motion animation working
- [ ] Text readable (WCAG AA contrast)
- [ ] No console errors
- [ ] TypeScript compiles without errors
- [ ] Tested on Chrome, Safari, Firefox
- [ ] Tested on actual mobile device (or DevTools)

**Commit Message**:
```
feat(homepage): add hero section with brand colors

- Full viewport height hero (600px mobile, 700px desktop)
- Cyan blue gradient background (#00A3E0 to #006186)
- Orange primary CTA (#FF6600)
- White outline secondary CTA
- Trust badges with yellow checkmarks (#FFD700)
- Mobile-first responsive design
- Framer Motion fade-in animation
- WCAG AA compliant contrast

Closes TASK-02-01-01
```

## 🤖 AI Agent Instructions

**Pre-Implementation**:

1. **Verify Prerequisites**:
   ```bash
   cd v1
   # Check Button component exists
   test -f src/components/ui/Button.tsx && echo "✓ Button exists" || echo "✗ Create Button first"

   # Check Framer Motion installed
   npm list framer-motion || npm install framer-motion
   ```

2. **Check Brand Colors**:
   ```bash
   # Verify Tailwind config has brand colors
   cat tailwind.config.ts | grep "#00a3e0"
   # Should find primary-500
   ```

**Implementation**:

1. **Create Directory**:
   ```bash
   mkdir -p src/components/features
   ```

2. **Create Component**:
   - Use the code example above
   - Ensure 'use client' directive at top
   - Import Button from ui/Button
   - Use exact brand colors

3. **Update Homepage**:
   ```bash
   # Edit src/app/page.tsx
   # Import and add <Hero />
   ```

4. **Test**:
   ```bash
   npm run dev
   # Visit http://localhost:3000
   # Test mobile view in DevTools
   ```

**Verification**:

```bash
# Type check
npm run type-check

# Lint check
npm run lint

# Build test
npm run build
```

**Success Criteria**:
- Hero displays at http://localhost:3000
- Brand colors match photos in `images/` folder
- Mobile responsive (test at 375px width)
- No TypeScript or console errors

## 🔗 Related Tasks

**Depends On**:
- TASK-01-01-01: Next.js initialized
- TASK-01-01-02: Tailwind with brand colors
- TASK-01-03-04: Button component created

**Blocks**:
- TASK-02-01-02: Value Proposition section (needs Hero complete)

**Can Run in Parallel With**:
- TASK-02-02-01: Services page grid (independent)
- TASK-02-03-01: Google Maps setup (independent)

---

**Status**: 🔵 Not Started
**Assigned To**: (Not assigned)
**Estimated**: 2-3 hours
**Actual**: (Not started)

**Application Directory**: `v1/`

**Next**: After completing, proceed to `task-02-01-02-value-proposition.md`
