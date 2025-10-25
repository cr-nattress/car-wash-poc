# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Superior Car Wash is a Next.js 14 (App Router) website showcasing a modern car wash business with membership tiers, service offerings, and online booking. The project uses TypeScript, Tailwind CSS, and Framer Motion for animations.

**Key Characteristics:**
- Markdown-based content management system (no CMS/database)
- Server Components by default, Client Components only when necessary
- Strict TypeScript with comprehensive type definitions
- Mobile-first responsive design with brand colors from building exterior photos

## Development Commands

```bash
# Development
npm run dev                # Start dev server on localhost:3000

# Building & Production
npm run build             # Production build
npm start                 # Run production build locally

# Code Quality
npm run type-check        # TypeScript type checking (run before commits)
npm run lint              # ESLint checking
npm run lint:fix          # Auto-fix ESLint issues
npm run format            # Format code with Prettier
npm run format:check      # Check formatting without changes
```

**Pre-commit checklist:** Run `npm run type-check && npm run lint && npm run build` to catch errors before pushing.

## Architecture

### Markdown-Based Data Layer

All dynamic content lives in `src/data/*.md` files with YAML frontmatter. This is a **critical architectural decision**:

```
src/data/
├── services.md       # Service offerings (wash types, detailing)
├── pricing.md        # Membership tiers (Basic, Premium, Ultimate)
├── locations.md      # Business locations with hours/coordinates
├── testimonials.md   # Customer reviews
└── faqs.md          # FAQ entries
```

**Data parsing flow:**
1. Markdown files contain multiple entries separated by `---\n\n---` (triple-dash, blank line, triple-dash)
2. Each entry has YAML frontmatter + Markdown content
3. `src/lib/data.ts` parses frontmatter into TypeScript types, converts Markdown to HTML
4. Type interfaces in `src/types/index.ts` ensure type safety

**Adding new data:**
```markdown
---
id: new-service
name: New Service Name
price: 29
features:
  - Feature One
  - Feature Two
---

# Service Title

Markdown content here gets converted to HTML and stored in the `content` property.
```

**Fetching data (Server Components only):**
```typescript
import { getServices, getServiceById } from '@/lib/data'

const services = await getServices()
const service = await getServiceById('express-wash')
```

### Server vs Client Components

**Default: Server Components** - Pages and data-fetching components
```typescript
// src/app/services/page.tsx
export default async function ServicesPage() {
  const services = await getServices() // ✓ Server-side data fetching
  return <div>...</div>
}
```

**Use 'use client' only for:**
- Interactive forms (React Hook Form)
- Animation components (Framer Motion)
- Components using hooks (useState, useEffect)
- Event handlers (onClick, onChange)

```typescript
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
```

### Form Validation Pattern

All forms use React Hook Form + Zod for validation:

1. Schema defined in `src/lib/schemas.ts`
2. Form component uses `useForm` with `zodResolver`
3. Honeypot field (`website`) for spam prevention

```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema } from '@/lib/schemas'

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(contactFormSchema)
})
```

### Animation System

Page transitions handled automatically via `src/app/template.tsx` wrapping all pages with `PageTransition` component.

**Available animation components:**
```typescript
import FadeIn from '@/components/animations/FadeIn'
import ScaleIn from '@/components/animations/ScaleIn'
import StaggerChildren from '@/components/animations/StaggerChildren'

// Usage
<FadeIn delay={0.2}>Content</FadeIn>
<ScaleIn>Content</ScaleIn>
<StaggerChildren staggerDelay={0.1}>
  {items.map(item => <div key={item.id}>{item.name}</div>)}
</StaggerChildren>
```

## Component Organization

```
src/components/
├── animations/      # Framer Motion wrapper components
├── ui/             # Base components (Button, Card, Badge, Input)
├── layout/         # Header, Footer (used in root layout)
├── home/           # Homepage-specific sections
├── booking/        # Booking flow components
├── common/         # Shared across multiple pages
└── faq/           # FAQ-specific components
```

**Component naming:**
- PascalCase for component files
- Props interface: `ComponentNameProps`
- Use `forwardRef` for UI components that might need refs
- Always include `className?: string` prop for composability

## Styling Conventions

**Tailwind utility classes only** - No CSS modules or styled-components

```typescript
import { cn } from '@/lib/utils' // Tailwind merge utility

<div className={cn(
  'base-classes',
  conditionalClass && 'conditional-classes',
  className // Always allow className override
)} />
```

**Brand colors:**
- `primary-500`: #00a3e0 (cyan blue from building)
- `accent-500`: #ff6600 (orange from 24/7 signage)
- `yellow-500`: #ffd700 (equipment yellow)

Defined in `tailwind.config.ts` with full 50-900 scale for primary/accent.

## Type System

**Never use `any`** - All types defined in `src/types/index.ts`

Key interfaces:
- `Service`: Service offerings with features/pricing
- `PricingTier`: Membership tiers (note: no `description` field, use `savings` or `content`)
- `Location`: Business locations with hours/coordinates
- `Testimonial`: Customer reviews
- `FAQ`: FAQ entries with category

**Form types auto-inferred from Zod schemas:**
```typescript
import { contactFormSchema } from '@/lib/schemas'
import type { z } from 'zod'

type ContactFormData = z.infer<typeof contactFormSchema>
```

## Common Patterns

### Creating a new page

```typescript
// src/app/new-page/page.tsx
import { Metadata } from 'next'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Page Title | Superior Car Wash',
  description: 'Page description for SEO',
}

export default function NewPage() {
  return (
    <Container>
      <h1>Page Content</h1>
    </Container>
  )
}
```

### Adding a new UI component

```typescript
// src/components/ui/NewComponent.tsx
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface NewComponentProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'alternate'
}

const NewComponent = forwardRef<HTMLDivElement, NewComponentProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'base-styles',
          { 'variant-styles': variant === 'alternate' },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

NewComponent.displayName = 'NewComponent'
export default NewComponent
```

### Fetching and displaying data

```typescript
// Server Component
import { getServices } from '@/lib/data'

export default async function Page() {
  const services = await getServices()

  return (
    <div>
      {services.map(service => (
        <div key={service.id}>
          <h2>{service.name}</h2>
          {service.content && (
            <div dangerouslySetInnerHTML={{ __html: service.content }} />
          )}
        </div>
      ))}
    </div>
  )
}
```

## Common Issues

### TypeScript Errors
- **"Property X does not exist on type Y"**: Check `src/types/index.ts` for actual interface properties
- **PricingTier doesn't have `description`**: Use `tier.savings` or `tier.content` instead
- Always run `npm run type-check` before committing

### Build Failures
- Unicode characters can cause syntax errors in compiled JS - use HTML entities or standard ASCII
- Missing pages referenced in navigation will cause 404s on deployment
- Check that all imports use `@/` alias correctly (defined in `tsconfig.json`)

### Data Not Showing
- Ensure Markdown file has proper `---\n\n---` separators between entries
- Verify frontmatter YAML is valid (use 2-space indentation for arrays)
- Check that `id` field in frontmatter matches the ID used in queries

## Deployment

**Netlify Configuration:**
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18+

The site auto-deploys on every push to `main`. Check build logs if deployment fails - usually TypeScript or missing page errors.

## Project Status

Current version: **0.1.0** (POC phase)

**Completed:** Foundation, core pages, branding, mobile optimization, animations
**Next:** AI integration, enhanced features, content polish

See `README.md` for detailed project structure and `planning/` directory for development roadmap.
