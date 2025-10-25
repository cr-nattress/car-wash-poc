# Epic: Core Pages & Content

**ID**: EPIC-02

**Source**: Phase 2 from planning/IMPLEMENTATION-PLAN.md

---

## Description

Implement all essential website pages with mobile-responsive design, brand colors, and mock data integration. This epic delivers the core user-facing pages: Homepage with hero and value propositions, Services page with pricing, Locations page with Google Maps, Membership comparison page, and About/Contact pages. All pages will be optimized for mobile-first experience and use the brand colors extracted from the actual facility.

## Business Value

These pages are the face of the business online. Without them, there's no website to show customers. This epic:
- Establishes online presence with all core information
- Showcases membership options (70% of revenue source)
- Provides location information for both facilities
- Builds trust through about/contact pages
- Implements mobile-first design (70% of bookings occur on mobile)

**Critical**: This epic must be completed before AI features, optimization, or launch.

## Acceptance Criteria

- [ ] Homepage renders with hero, value props, membership preview, testimonials
- [ ] Services page displays all wash packages with descriptions and features
- [ ] Locations page shows both locations with Google Maps integration
- [ ] Membership page has 3-tier comparison table (Basic $24, Premium $34, Ultimate $42)
- [ ] About page tells company story
- [ ] Contact page has working form (Netlify Forms)
- [ ] All pages use brand colors (Cyan Blue `#00A3E0`, Orange `#FF6600`, Yellow `#FFD700`)
- [ ] All pages are mobile-responsive (320px to 2560px)
- [ ] All pages load mock data from Markdown files
- [ ] Navigation works between all pages

## Estimated Duration

**Week 1-2 (Days 5-10)**
- Total: 45 tasks
- Estimated effort: 50-60 hours

## Dependencies

**Requires**:
- EPIC-01 complete (Foundation & Setup)
- Next.js environment configured
- Tailwind with brand colors
- Mock data files created
- Layout components ready

**Blocks**:
- EPIC-03 (Mobile Optimization - needs pages to optimize)
- EPIC-04 (AI Integration - needs pages to integrate into)
- EPIC-05 (Enhanced Features - needs base pages)
- All subsequent epics

## Stories in This Epic

### STORY-02-01: Homepage
**Duration**: Days 5-6 (10-12 hours)
**Tasks**: 10
**Goal**: Complete homepage with hero, value props, membership preview, testimonials

- TASK-02-01-01: Create hero section with brand colors
- TASK-02-01-02: Build value proposition section (4 benefits)
- TASK-02-01-03: Create membership tier preview (3 tiers)
- TASK-02-01-04: Build testimonials section (3 reviews)
- TASK-02-01-05: Add final CTA section
- TASK-02-01-06: Connect to mock data
- TASK-02-01-07: Implement responsive breakpoints
- TASK-02-01-08: Add Framer Motion animations
- TASK-02-01-09: Test on mobile devices
- TASK-02-01-10: Deploy and verify

### STORY-02-02: Services Page
**Duration**: Day 7 (6-8 hours)
**Tasks**: 8
**Goal**: Complete services page with all wash packages

- TASK-02-02-01: Create services grid layout
- TASK-02-02-02: Build service card component
- TASK-02-02-03: Add "How It Works" section
- TASK-02-02-04: Create service add-ons section
- TASK-02-02-05: Load services from mock data
- TASK-02-02-06: Implement mobile responsive layout
- TASK-02-02-07: Add service imagery
- TASK-02-02-08: Test and deploy

### STORY-02-03: Locations Page
**Duration**: Day 8 (8-10 hours)
**Tasks**: 10
**Goal**: Complete locations page with Google Maps and facility info

- TASK-02-03-01: Set up Google Maps API
- TASK-02-03-02: Create Map component with both locations
- TASK-02-03-03: Build location card component
- TASK-02-03-04: Display hours for each location
- TASK-02-03-05: Add "Get Directions" functionality
- TASK-02-03-06: Add "Call Now" click-to-call
- TASK-02-03-07: Load locations from mock data
- TASK-02-03-08: Implement responsive layout
- TASK-02-03-09: Add facility photos
- TASK-02-03-10: Test and deploy

### STORY-02-04: Membership Page
**Duration**: Day 9 (6-8 hours)
**Tasks**: 8
**Goal**: Complete membership comparison with 3 tiers

- TASK-02-04-01: Create pricing comparison table
- TASK-02-04-02: Build pricing tier card component
- TASK-02-04-03: Add "Most Popular" badge to Premium tier
- TASK-02-04-04: Create membership FAQ section
- TASK-02-04-05: Add signup CTA section
- TASK-02-04-06: Load pricing from mock data
- TASK-02-04-07: Implement mobile-responsive layout (cards stack)
- TASK-02-04-08: Test and deploy

### STORY-02-05: About & Contact Pages
**Duration**: Day 10 (4-6 hours)
**Tasks**: 9
**Goal**: Complete about page and contact form

- TASK-02-05-01: Create about page layout
- TASK-02-05-02: Add company story section
- TASK-02-05-03: Create values section (Quality, Technology, Community, Environment)
- TASK-02-05-04: Add stats section (10,000+ washes, 1,000+ members, 2 locations)
- TASK-02-05-05: Create contact page layout
- TASK-02-05-06: Build contact form with React Hook Form
- TASK-02-05-07: Set up Netlify Forms integration
- TASK-02-05-08: Add form validation with Zod
- TASK-02-05-09: Test form submission and deploy

## Technical Notes

### Brand Colors Integration

All pages MUST use the official brand colors from `planning/BRAND-COLORS.md`:

- **Primary Blue**: `#00A3E0` (navigation, headers, primary actions)
- **Orange**: `#FF6600` (CTAs, "Join Now" buttons, "Most Popular" badges)
- **Yellow**: `#FFD700` (highlights, feature badges)
- **White**: `#FFFFFF` (backgrounds, contrast)

### Mobile-First Design

**Breakpoints** (Tailwind defaults):
- Mobile: `< 640px` (design for this first)
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

**Mobile Navigation**:
- Hamburger menu (slide-in)
- Sticky header
- Click-to-call phone number prominent

### Mock Data Integration

All content comes from Markdown files in `v1/src/data/`:

```typescript
// Example: Loading locations
import { getLocations } from '@/lib/data'

export default function LocationsPage() {
  const locations = getLocations() // Returns typed Location[]

  return (
    <div>
      {locations.map(location => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  )
}
```

### Google Maps Integration

**API Key**: Store in `.env.local`:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
```

**Library**: `@googlemaps/js-api-loader`

### Images

**POC Phase**: Use mock images from:
- Unsplash (https://unsplash.com)
- Pexels (https://pexels.com)
- Project images folder: `images/`

**Next.js Image Component**: Always use `next/image` for optimization
```tsx
import Image from 'next/image'

<Image
  src="/images/car-wash.jpg"
  alt="Car wash facility"
  width={800}
  height={600}
  priority // For above-fold images
/>
```

## Definition of Done

When EPIC-02 is complete:

- [ ] All 5 pages deployed and accessible via navigation
- [ ] Homepage hero uses Cyan Blue and Orange CTAs
- [ ] Services page displays all packages from mock data
- [ ] Locations page shows Google Maps with 2 markers
- [ ] Membership page has 3-tier comparison with "Most Popular" badge
- [ ] Contact form submits to Netlify Forms
- [ ] All pages tested on iPhone (Safari) and Android (Chrome)
- [ ] All pages load in < 3 seconds on 3G
- [ ] Navigation works between all pages
- [ ] Footer appears on all pages with correct info
- [ ] No console errors on any page
- [ ] All images use Next.js Image component
- [ ] TypeScript compiles with zero errors
- [ ] Linter passes on all files

## Progress Tracking

**Status**: 🔵 Not Started

**Completed Stories**: 0/5
- [ ] STORY-02-01: Homepage
- [ ] STORY-02-02: Services Page
- [ ] STORY-02-03: Locations Page
- [ ] STORY-02-04: Membership Page
- [ ] STORY-02-05: About & Contact Pages

**Completed Tasks**: 0/45

**Estimated vs Actual**:
- Estimated: 50-60 hours
- Actual: TBD

## References

- **Implementation Plan**: planning/IMPLEMENTATION-PLAN.md (Phase 2)
- **Brand Colors**: planning/BRAND-COLORS.md (complete color specs)
- **Competitors**: planning/COMPETITORS.md (pricing benchmarks)
- **Industry Research**: planning/WEB.md (best practices)
- **Mock Data**: v1/src/data/*.md files

---

**Dependencies Met?**: Requires EPIC-01 complete

**Next Steps**: Start with STORY-02-01 (Homepage)

**First Task**: `story-01-homepage/task-02-01-01-create-hero-section.md`

**Application Directory**: `v1/`
