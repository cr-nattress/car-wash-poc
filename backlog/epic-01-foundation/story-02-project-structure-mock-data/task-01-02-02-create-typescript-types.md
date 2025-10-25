# Task: Create TypeScript Type Definitions

**ID**: TASK-01-02-02

**Story**: STORY-01-02 (Project Structure & Mock Data)

**Epic**: EPIC-01 (Foundation & Setup)

**Source**: Task from Milestone 1.2 in planning/IMPLEMENTATION-PLAN.md

---

## 🎯 Objective

Define comprehensive TypeScript interfaces and types for all data models used in the application (locations, services, pricing, testimonials, FAQs).

## 📋 Context

**Why This Task**:
TypeScript types provide compile-time type safety, enable better IDE autocomplete, catch bugs early, and serve as documentation for data structures. Defining types before creating data ensures consistency.

**Current State**:
`types/` folder exists but is empty.

**Desired State**:
Complete type definitions for all data models exported from `types/index.ts`, ensuring end-to-end type safety across the application.

## ✅ Acceptance Criteria

- [ ] `types/index.ts` created with all data model interfaces
- [ ] `Location` interface matches locations data structure
- [ ] `Service` interface matches services data structure
- [ ] `PricingTier` interface matches pricing data structure
- [ ] `Testimonial` interface matches testimonials data structure
- [ ] `FAQ` interface matches FAQs data structure
- [ ] All interfaces exported for reuse
- [ ] Optional vs required fields correctly specified
- [ ] TypeScript compiles without errors
- [ ] No `any` types used

## 🔧 Implementation Guide

**Application Location**: `v1/src/types/index.ts`

### Step 1: Create Main Types File

Create `v1/src/types/index.ts`:

```typescript
/**
 * Core data model type definitions
 *
 * These types match the structure of data in /src/data/*.md files
 * and are used throughout the application for type safety.
 */

/**
 * Car wash location data
 */
export interface Location {
  // Unique identifier
  id: string

  // Basic info
  name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string

  // Operating hours (24/7 or specific times)
  hours: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }

  // GPS coordinates for Google Maps
  coordinates: {
    lat: number
    lng: number
  }

  // Location photo
  image: string

  // Features available at this location
  features: string[]

  // Optional: Markdown content (from gray-matter)
  content?: string
}

/**
 * Wash service/package
 */
export interface Service {
  // Unique identifier
  id: string

  // Service name
  name: string

  // Brief description
  description: string

  // Estimated duration
  duration: string

  // Single wash price (if applicable)
  price?: number

  // Features included in this service
  features: string[]

  // Service image
  image: string

  // Optional: Markdown content
  content?: string

  // Optional: Category (basic, premium, ultimate)
  category?: 'basic' | 'premium' | 'ultimate'
}

/**
 * Membership pricing tier
 */
export interface PricingTier {
  // Unique identifier
  id: string

  // Tier name (e.g., "Basic Shine", "Premium Protection")
  name: string

  // Monthly price in dollars
  price: number

  // Payment frequency
  frequency: 'monthly' | 'single'

  // Features included in this tier
  features: string[]

  // Is this the most popular tier?
  popular?: boolean

  // Savings message (e.g., "Save $12/month")
  savings?: string

  // Optional: Markdown content
  content?: string

  // Optional: Recommended for specific scenarios
  recommendedFor?: string[]

  // Optional: Badge text (e.g., "Best Value")
  badge?: string
}

/**
 * Customer testimonial/review
 */
export interface Testimonial {
  // Unique identifier
  id: string

  // Customer name
  name: string

  // Location (e.g., "Scranton, PA")
  location: string

  // Rating (1-5 stars)
  rating: number

  // Review text
  text: string

  // Review date (ISO string)
  date: string

  // Optional: Which service they reviewed
  service?: string

  // Optional: Customer photo/avatar
  avatar?: string

  // Optional: Verified customer badge
  verified?: boolean
}

/**
 * Frequently asked question
 */
export interface FAQ {
  // Unique identifier
  id: string

  // Question text
  question: string

  // Answer text (can include markdown)
  answer: string

  // Category for grouping
  category: 'membership' | 'services' | 'locations' | 'general' | 'pricing'

  // Optional: Keywords for chatbot matching
  keywords?: string[]

  // Optional: Order/priority for display
  order?: number
}

/**
 * Chatbot message
 */
export interface ChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
}

/**
 * Contact form data
 */
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  // Honeypot field for spam prevention
  website?: string
}

/**
 * Newsletter signup data
 */
export interface NewsletterFormData {
  email: string
  // Optional: First name for personalization
  firstName?: string
}

/**
 * Weather data from API
 */
export interface WeatherData {
  temperature: number
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'clear'
  description: string
  location: string
  timestamp: Date
}

/**
 * API response wrapper
 */
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
```

### Step 2: Add Utility Types

Add utility types at the end of `v1/src/types/index.ts`:

```typescript
/**
 * Utility Types
 */

// Extract only the fields needed for a card/preview
export type LocationCard = Pick<
  Location,
  'id' | 'name' | 'address' | 'city' | 'phone' | 'image'
>

export type ServiceCard = Pick<Service, 'id' | 'name' | 'description' | 'image' | 'category'>

export type PricingCard = Omit<PricingTier, 'content'>

// For forms
export type LocationFormValues = Pick<Location, 'name' | 'address' | 'city' | 'state' | 'zip'>

// For API payloads
export type CreateTestimonialPayload = Omit<Testimonial, 'id' | 'date'>
```

### Step 3: Add Type Guards

Add type guard functions for runtime type checking:

```typescript
/**
 * Type Guards
 */

export function isLocation(obj: unknown): obj is Location {
  const loc = obj as Location
  return (
    typeof loc === 'object' &&
    loc !== null &&
    typeof loc.id === 'string' &&
    typeof loc.name === 'string' &&
    typeof loc.coordinates?.lat === 'number' &&
    typeof loc.coordinates?.lng === 'number'
  )
}

export function isPricingTier(obj: unknown): obj is PricingTier {
  const tier = obj as PricingTier
  return (
    typeof tier === 'object' &&
    tier !== null &&
    typeof tier.id === 'string' &&
    typeof tier.price === 'number' &&
    Array.isArray(tier.features)
  )
}

export function isChatMessage(obj: unknown): obj is ChatMessage {
  const msg = obj as ChatMessage
  return (
    typeof msg === 'object' &&
    msg !== null &&
    typeof msg.id === 'string' &&
    ['user', 'assistant', 'system'].includes(msg.role) &&
    typeof msg.content === 'string'
  )
}
```

### Step 4: Test Types with Mock Data

Create a test file to verify types work:

```typescript
// v1/src/types/__test__/types.test.ts
import type {
  Location,
  Service,
  PricingTier,
  Testimonial,
  FAQ,
  ContactFormData,
} from '../index'

// This file tests that our types match expected data structures
// If this compiles, types are correct

const mockLocation: Location = {
  id: 'loc-1',
  name: 'Downtown Location',
  address: '123 Main St',
  city: 'Scranton',
  state: 'PA',
  zip: '18503',
  phone: '(570) 555-0100',
  hours: {
    monday: '24 hours',
    tuesday: '24 hours',
    wednesday: '24 hours',
    thursday: '24 hours',
    friday: '24 hours',
    saturday: '24 hours',
    sunday: '24 hours',
  },
  coordinates: {
    lat: 41.409,
    lng: -75.6624,
  },
  image: '/images/downtown.jpg',
  features: ['Express Wash', 'Free Vacuums', 'Member Lanes'],
}

const mockPricingTier: PricingTier = {
  id: 'premium',
  name: 'Premium Protection',
  price: 34,
  frequency: 'monthly',
  popular: true,
  features: ['Triple Foam', 'Wheel Cleaner', 'Underbody Wash'],
  savings: 'Save $12/month',
}

const mockTestimonial: Testimonial = {
  id: 'test-1',
  name: 'John Doe',
  location: 'Scranton, PA',
  rating: 5,
  text: 'Great service!',
  date: '2025-01-15',
}

// If these compile, types are working
console.log('Types validated successfully')

export {}
```

Run type check:
```bash
cd v1
npm run type-check
# Should pass
```

### Step 5: Export from Index

Ensure all types are exported from `types/index.ts` so they can be imported elsewhere:

```typescript
// Other files can now import:
import type { Location, PricingTier, Testimonial } from '@/types'
```

### Step 6: Update tsconfig.json Paths (if needed)

Verify `v1/tsconfig.json` includes types in paths:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/types": ["./src/types"]
    }
  }
}
```

### Step 7: Document Type Usage

Add comments to complex types:

```typescript
/**
 * Location interface
 *
 * Represents a car wash facility location.
 *
 * @example
 * const location: Location = {
 *   id: 'downtown',
 *   name: 'Downtown Wash',
 *   address: '123 Main St',
 *   // ... other fields
 * }
 */
export interface Location {
  // ...
}
```

## 📚 Resources

**Related Files**:
- `v1/src/types/index.ts` - All type definitions
- `v1/src/types/global.d.ts` - Global augmentations
- `v1/tsconfig.json` - TypeScript configuration

**Documentation**:
- TypeScript Interfaces: https://www.typescriptlang.org/docs/handbook/interfaces.html
- Type vs Interface: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
- Type Guards: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

## 🧪 Testing Requirements

**Manual Testing**:

1. **Compilation Test**:
   ```bash
   cd v1
   npm run type-check
   ```
   - [ ] Passes with 0 errors
   - [ ] All types recognized

2. **Import Test**:
   ```typescript
   // In any file
   import type { Location, PricingTier } from '@/types'

   const loc: Location = { ... }
   ```
   - [ ] Imports work
   - [ ] Autocomplete shows all fields

3. **Type Guard Test**:
   ```typescript
   const data: unknown = fetchData()
   if (isLocation(data)) {
     // data is now typed as Location
     console.log(data.name) // No error
   }
   ```
   - [ ] Type guards narrow types correctly

## 🎓 Learning Notes

**Key Concepts**:

1. **Interface vs Type**:
   - **Interface**: Can be extended, merged, better for objects
   - **Type**: Can represent unions, primitives, better for complex types
   - For this project: Use `interface` for data models, `type` for utilities

2. **Optional Fields**:
   - `field?: string` - May or may not exist
   - Required fields have no `?`
   - Makes intent clear

3. **Utility Types**:
   - `Pick<T, K>` - Select specific fields
   - `Omit<T, K>` - Exclude specific fields
   - `Partial<T>` - Make all fields optional
   - `Required<T>` - Make all fields required

4. **Type Guards**:
   - Runtime check that narrows type
   - `is` predicate tells TypeScript the type
   - Useful for API responses, user input

**Common Pitfalls**:

⚠️ **Using `any` type**
- Defeats purpose of TypeScript
- Use `unknown` if type truly unknown, then narrow
- Or define proper interface

⚠️ **Forgetting optional fields**
- Not all data always present
- `content?` might not be in mock data
- Mark as optional to prevent runtime errors

⚠️ **Not exporting types**
- Types must be exported to use elsewhere
- `export interface Location` not just `interface Location`

⚠️ **Circular dependencies**
- Type file imports another type file that imports first
- Keep types in single file or use forward declarations

## 📏 Estimated Effort

**Time**: 1 hour
- Define interfaces: 30 minutes
- Add utility types: 15 minutes
- Documentation and testing: 15 minutes

**Complexity**: Low-Medium
- Straightforward interface definitions
- Matching data structure

**Prerequisites**:
- TASK-01-02-01: Folder structure created
- Understanding of data models needed

## ✔️ Definition of Done

- [ ] `types/index.ts` created with all interfaces
- [ ] Location, Service, PricingTier, Testimonial, FAQ interfaces defined
- [ ] ContactFormData, ChatMessage, WeatherData interfaces added
- [ ] Utility types created (Pick, Omit helpers)
- [ ] Type guards implemented
- [ ] All types exported
- [ ] TypeScript compiles without errors
- [ ] Test file created and passes
- [ ] Documentation comments added

**Commit Message**:
```
feat(types): add TypeScript type definitions

- Define Location interface (2 locations data)
- Define Service interface (wash packages)
- Define PricingTier interface (3-tier membership)
- Define Testimonial interface (customer reviews)
- Define FAQ interface (chatbot training data)
- Add form data types (Contact, Newsletter)
- Add utility types (Card types, API response)
- Add type guards for runtime checking

All data models typed for end-to-end type safety

Closes TASK-01-02-02
```

## 🤖 AI Agent Instructions

**Pre-Implementation**:

1. **Verify Types Folder**:
   ```bash
   cd v1
   test -d src/types && echo "✓ types folder exists"
   ```

**Implementation**:

1. **Create types/index.ts**:
   - Copy interface definitions from Step 1
   - Add utility types from Step 2
   - Add type guards from Step 3

2. **Create Test File**:
   - Create `types/__test__/types.test.ts`
   - Add mock data matching each interface

3. **Verify Types**:
   ```bash
   npm run type-check
   # Should pass
   ```

**Verification**:

```bash
# Type check
npm run type-check

# Try importing in a test file
echo "import type { Location } from '@/types'" > src/test.ts
npm run type-check
rm src/test.ts
```

**Success Criteria**:
- All interfaces compile
- No `any` types used
- Imports work with path aliases
- Type guards function correctly

## 🔗 Related Tasks

**Depends On**:
- TASK-01-02-01: Folder structure created
- TASK-01-01-07: TypeScript strict mode (optional but recommended)

**Blocks**:
- TASK-01-02-03: Create mock data (uses these types)
- TASK-01-02-04: Data loading functions (returns these types)
- All component tasks (consume these types)

**Can Run in Parallel With**:
- TASK-01-03-01: Root layout (independent)

---

**Status**: 🔵 Not Started
**Assigned To**: (Not assigned)
**Estimated**: 1 hour
**Actual**: (Not started)

**Application Directory**: `v1/src/types/`

**Next**: After completing, proceed to `task-01-02-03-create-mock-data.md`
