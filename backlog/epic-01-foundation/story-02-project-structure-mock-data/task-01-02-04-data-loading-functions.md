# Task: Create Data Loading Functions

**ID**: TASK-01-02-04

**Story**: STORY-01-02 (Project Structure & Mock Data)

**Epic**: EPIC-01 (Foundation & Setup)

**Source**: Task from Milestone 1.2 in planning/IMPLEMENTATION-PLAN.md

---

## 🎯 Objective

Create utility functions to load and parse mock data from Markdown files with type-safe returns.

## 📋 Context

**Why This Task**:
Data loading functions centralize the logic for reading and parsing Markdown files, provide type-safe data access, and make it easy for components to consume mock data without knowing the implementation details.

**Current State**:
Mock data files exist but no way to load them into the application.

**Desired State**:
Complete data loading module in `lib/data.ts` with functions to load locations, pricing, services, testimonials, and FAQs, all returning properly typed data.

## ✅ Acceptance Criteria

- [ ] `lib/data.ts` created with all loading functions
- [ ] `getLocations()` returns typed `Location[]`
- [ ] `getPricingTiers()` returns typed `PricingTier[]`
- [ ] `getServices()` returns typed `Service[]`
- [ ] `getTestimonials()` returns typed `Testimonial[]`
- [ ] `getFAQs()` returns typed `FAQ[]`
- [ ] Functions parse YAML frontmatter correctly
- [ ] Functions handle errors gracefully
- [ ] All functions work in Server Components
- [ ] Type-safe return values (no `any`)

## 🔧 Implementation Guide

**Application Location**: `v1/src/lib/data.ts`

### Step 1: Create Data Loading Module

Create `v1/src/lib/data.ts`:

```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type {
  Location,
  PricingTier,
  Service,
  Testimonial,
  FAQ,
} from '@/types'

// Data directory path
const dataDirectory = path.join(process.cwd(), 'src', 'data')

/**
 * Parse a Markdown file with multiple entries separated by ---
 * @param filename - Name of the file in src/data/
 * @returns Array of parsed entries with data and content
 */
function parseMultiEntryMarkdown<T>(filename: string): T[] {
  const fullPath = path.join(dataDirectory, filename)

  // Read file
  let fileContents: string
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8')
  } catch (error) {
    console.error(`Failed to read ${filename}:`, error)
    return []
  }

  // Split by --- separator
  const entries = fileContents
    .split(/\n---\n/)
    .filter(entry => entry.trim().length > 0)

  // Parse each entry with gray-matter
  return entries.map(entry => {
    const { data, content } = matter(entry.trim())
    return {
      ...data,
      content: content.trim(),
    } as T
  })
}

/**
 * Get all car wash locations
 * @returns Array of locations with full details
 */
export function getLocations(): Location[] {
  return parseMultiEntryMarkdown<Location>('locations.md')
}

/**
 * Get a single location by ID
 * @param id - Location ID
 * @returns Location or undefined if not found
 */
export function getLocationById(id: string): Location | undefined {
  return getLocations().find(loc => loc.id === id)
}

/**
 * Get all pricing tiers
 * @returns Array of pricing tiers sorted by price
 */
export function getPricingTiers(): PricingTier[] {
  const tiers = parseMultiEntryMarkdown<PricingTier>('pricing.md')
  // Sort by price (low to high)
  return tiers.sort((a, b) => a.price - b.price)
}

/**
 * Get a single pricing tier by ID
 * @param id - Tier ID
 * @returns Pricing tier or undefined
 */
export function getPricingTierById(id: string): PricingTier | undefined {
  return getPricingTiers().find(tier => tier.id === id)
}

/**
 * Get the most popular pricing tier
 * @returns Popular tier or first tier if none marked popular
 */
export function getPopularTier(): PricingTier {
  const tiers = getPricingTiers()
  return tiers.find(tier => tier.popular) || tiers[0]
}

/**
 * Get all wash services
 * @returns Array of services
 */
export function getServices(): Service[] {
  return parseMultiEntryMarkdown<Service>('services.md')
}

/**
 * Get services by category
 * @param category - Service category (basic, premium, ultimate)
 * @returns Filtered services
 */
export function getServicesByCategory(
  category: 'basic' | 'premium' | 'ultimate'
): Service[] {
  return getServices().filter(service => service.category === category)
}

/**
 * Get all customer testimonials
 * @returns Array of testimonials sorted by date (newest first)
 */
export function getTestimonials(): Testimonial[] {
  const testimonials = parseMultiEntryMarkdown<Testimonial>('testimonials.md')
  // Sort by date (newest first)
  return testimonials.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

/**
 * Get featured testimonials (5-star reviews only)
 * @param limit - Maximum number to return (default: 3)
 * @returns Top-rated testimonials
 */
export function getFeaturedTestimonials(limit: number = 3): Testimonial[] {
  return getTestimonials()
    .filter(t => t.rating === 5)
    .slice(0, limit)
}

/**
 * Get all FAQs
 * @returns Array of FAQs sorted by order
 */
export function getFAQs(): FAQ[] {
  const faqs = parseMultiEntryMarkdown<FAQ>('faqs.md')
  // Sort by order field (if present), otherwise by ID
  return faqs.sort((a, b) => {
    if (a.order && b.order) return a.order - b.order
    return a.id.localeCompare(b.id)
  })
}

/**
 * Get FAQs by category
 * @param category - FAQ category
 * @returns Filtered FAQs
 */
export function getFAQsByCategory(
  category: 'membership' | 'services' | 'locations' | 'general' | 'pricing'
): FAQ[] {
  return getFAQs().filter(faq => faq.category === category)
}

/**
 * Search FAQs by keyword
 * @param query - Search query
 * @returns Matching FAQs
 */
export function searchFAQs(query: string): FAQ[] {
  const lowerQuery = query.toLowerCase()
  return getFAQs().filter(faq => {
    const questionMatch = faq.question.toLowerCase().includes(lowerQuery)
    const answerMatch = faq.answer.toLowerCase().includes(lowerQuery)
    const keywordMatch = faq.keywords?.some(kw =>
      kw.toLowerCase().includes(lowerQuery)
    )
    return questionMatch || answerMatch || keywordMatch
  })
}

/**
 * Get statistics about the business
 * @returns Aggregated stats
 */
export function getStats() {
  const locations = getLocations()
  const testimonials = getTestimonials()
  const services = getServices()

  // Calculate average rating
  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length

  return {
    locationCount: locations.length,
    serviceCount: services.length,
    reviewCount: testimonials.length,
    averageRating: Math.round(avgRating * 10) / 10, // Round to 1 decimal
  }
}
```

### Step 2: Add Error Handling

Add robust error handling:

```typescript
// Add after imports
const CACHE_ENABLED = process.env.NODE_ENV === 'production'
const cache = new Map<string, unknown>()

/**
 * Parse with caching (production only)
 */
function parseMultiEntryMarkdown<T>(filename: string): T[] {
  // Check cache first
  if (CACHE_ENABLED && cache.has(filename)) {
    return cache.get(filename) as T[]
  }

  const fullPath = path.join(dataDirectory, filename)

  // Read file with error handling
  let fileContents: string
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8')
  } catch (error) {
    console.error(`Failed to read ${filename}:`, error)
    // Return empty array instead of crashing
    return []
  }

  // Parse entries
  try {
    const entries = fileContents
      .split(/\n---\n/)
      .filter(entry => entry.trim().length > 0)

    const parsed = entries.map(entry => {
      const { data, content } = matter(entry.trim())
      return {
        ...data,
        content: content.trim(),
      } as T
    })

    // Cache for production
    if (CACHE_ENABLED) {
      cache.set(filename, parsed)
    }

    return parsed
  } catch (error) {
    console.error(`Failed to parse ${filename}:`, error)
    return []
  }
}
```

### Step 3: Create Test File

Create `v1/src/lib/__test__/data.test.ts`:

```typescript
import {
  getLocations,
  getPricingTiers,
  getServices,
  getTestimonials,
  getFAQs,
  getStats,
} from '../data'

// This file verifies data loading works correctly

describe('Data Loading Functions', () => {
  test('getLocations returns array', () => {
    const locations = getLocations()
    console.log(`✓ Loaded ${locations.length} locations`)
    console.log('  IDs:', locations.map(l => l.id))
  })

  test('getPricingTiers returns array', () => {
    const tiers = getPricingTiers()
    console.log(`✓ Loaded ${tiers.length} pricing tiers`)
    console.log('  Prices:', tiers.map(t => `$${t.price}`))
  })

  test('getServices returns array', () => {
    const services = getServices()
    console.log(`✓ Loaded ${services.length} services`)
  })

  test('getTestimonials returns array', () => {
    const testimonials = getTestimonials()
    console.log(`✓ Loaded ${testimonials.length} testimonials`)
  })

  test('getFAQs returns array', () => {
    const faqs = getFAQs()
    console.log(`✓ Loaded ${faqs.length} FAQs`)
  })

  test('getStats returns correct data', () => {
    const stats = getStats()
    console.log('✓ Stats:', stats)
  })
})

// Run tests
describe('Data Loading Functions', () => {})
```

Run test:
```bash
cd v1
npx ts-node src/lib/__test__/data.test.ts
```

### Step 4: Test Data Loading in a Page

Test in `v1/src/app/page.tsx`:

```typescript
import { getLocations, getPricingTiers, getStats } from '@/lib/data'

export default function HomePage() {
  const locations = getLocations()
  const pricing = getPricingTiers()
  const stats = getStats()

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Data Loading Test</h1>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Stats</h2>
          <pre>{JSON.stringify(stats, null, 2)}</pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Locations ({locations.length})</h2>
          <ul>
            {locations.map(loc => (
              <li key={loc.id}>
                {loc.name} - {loc.address}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Pricing ({pricing.length})</h2>
          <ul>
            {pricing.map(tier => (
              <li key={tier.id}>
                {tier.name} - ${tier.price}/month
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
```

Run dev server and verify data loads:
```bash
npm run dev
# Visit http://localhost:3000
```

### Step 5: Verify Type Safety

```typescript
// This should work (correct type):
const locations: Location[] = getLocations()

// This should error (wrong type):
const locations: string[] = getLocations() // ❌ Type error

// This should error (missing field):
locations[0].nonexistentField // ❌ Type error

// This should work (correct optional field):
const content = locations[0].content // string | undefined
```

## 📚 Resources

**Related Files**:
- `v1/src/lib/data.ts` - Data loading functions
- `v1/src/data/*.md` - Source data files
- `v1/src/types/index.ts` - Type definitions

**Documentation**:
- gray-matter: https://github.com/jonschlinkert/gray-matter
- Node.js fs module: https://nodejs.org/api/fs.html
- Next.js Server Components: https://nextjs.org/docs/app/building-your-application/rendering/server-components

## 🧪 Testing Requirements

**Manual Testing**:

1. **Function Test**:
   ```typescript
   import { getLocations } from '@/lib/data'
   const locs = getLocations()
   console.log(locs) // Should show array of locations
   ```

2. **Type Safety Test**:
   ```bash
   npm run type-check
   # Should pass with correct types
   ```

3. **Server Component Test**:
   - Use data loading function in a page
   - Verify data displays correctly
   - Check no client-side errors

## 🎓 Learning Notes

**Key Concepts**:

1. **Server-Side Data Loading**:
   - These functions run on server only
   - Can't be used in Client Components ('use client')
   - Perfect for Next.js Server Components

2. **Type Safety**:
   - Functions return typed data
   - TypeScript checks usage at compile time
   - Prevents runtime errors

3. **Caching**:
   - Production mode caches parsed data
   - Improves performance
   - Development mode always fresh data

**Common Pitfalls**:

⚠️ **Using in Client Components**
- gray-matter uses Node.js `fs` module
- Only works on server
- Use in Server Components or API routes

⚠️ **Not handling errors**
- File might not exist
- YAML might be invalid
- Return empty array instead of crashing

⚠️ **Forgetting to sort**
- Data order matters for UX
- Sort by date, price, or order field
- Consistent ordering

## 📏 Estimated Effort

**Time**: 2 hours
- Create data.ts: 1 hour
- Testing: 30 min
- Error handling: 30 min

**Complexity**: Medium
- File system operations
- Parsing and type safety

**Prerequisites**:
- TASK-01-02-03: Mock data files
- TASK-01-02-02: TypeScript types

## ✔️ Definition of Done

- [ ] `lib/data.ts` created with all functions
- [ ] All get* functions return typed data
- [ ] Helper functions (getById, search) work
- [ ] Error handling implemented
- [ ] Caching implemented for production
- [ ] Type checking passes
- [ ] Test file created and passes
- [ ] Functions work in Server Components

**Commit Message**:
```
feat(data): create data loading functions

- Add parseMultiEntryMarkdown helper
- Add getLocations, getPricingTiers, getServices functions
- Add getTestimonials, getFAQs functions
- Add helper functions (getById, search, getByCategory)
- Add error handling and production caching
- Add getStats aggregation function

All functions return properly typed data

Closes TASK-01-02-04
```

## 🤖 AI Agent Instructions

**Implementation**:

1. **Create lib/data.ts**:
   - Copy code from Step 1
   - Add error handling from Step 2

2. **Test Functions**:
   ```bash
   cd v1
   # Create simple test
   node -e "const { getLocations } = require('./src/lib/data.ts'); console.log(getLocations())"
   ```

3. **Verify Types**:
   ```bash
   npm run type-check
   ```

**Success Criteria**:
- Functions load data correctly
- Types are correct
- No runtime errors
- Works in Server Components

## 🔗 Related Tasks

**Depends On**:
- TASK-01-02-03: Mock data files
- TASK-01-02-02: TypeScript types

**Blocks**:
- All page/component tasks (need data loading)

---

**Status**: 🔵 Not Started
**Estimated**: 2 hours
**Application Directory**: `v1/src/lib/`

**Next**: Story 01-02 tasks continue with README updates and verification
