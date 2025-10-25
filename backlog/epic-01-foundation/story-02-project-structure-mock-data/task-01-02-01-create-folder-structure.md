# Task: Create Project Folder Structure

**ID**: TASK-01-02-01

**Story**: STORY-01-02 (Project Structure & Mock Data)

**Epic**: EPIC-01 (Foundation & Setup)

**Source**: Task from Milestone 1.2 in planning/IMPLEMENTATION-PLAN.md

---

## 🎯 Objective

Create a well-organized folder structure for the Next.js application following best practices for the App Router architecture.

## 📋 Context

**Why This Task**:
A clear folder structure improves code organization, makes the codebase easier to navigate, and establishes conventions that the team will follow throughout development.

**Current State**:
Basic Next.js structure with `src/app` folder.

**Desired State**:
Complete folder structure with:
- `src/app/` - Next.js App Router pages
- `src/components/` - React components (ui, layout, features)
- `src/lib/` - Utility functions and helpers
- `src/data/` - Mock data (Markdown files)
- `src/types/` - TypeScript type definitions

## ✅ Acceptance Criteria

- [ ] All required folders created
- [ ] Folder structure matches Next.js App Router best practices
- [ ] README.md in each major folder explaining its purpose
- [ ] `.gitkeep` files in empty folders (ensures Git tracks them)
- [ ] Structure documented in v1/README.md
- [ ] No unnecessary nesting
- [ ] Clear separation of concerns

## 🔧 Implementation Guide

**Application Location**: `v1/src/`

### Step 1: Create Main Directory Structure

```bash
cd v1/src

# App Router pages
mkdir -p app/(routes)/services
mkdir -p app/(routes)/locations
mkdir -p app/(routes)/membership
mkdir -p app/(routes)/about
mkdir -p app/(routes)/contact

# Components
mkdir -p components/ui
mkdir -p components/layout
mkdir -p components/features

# Library/Utilities
mkdir -p lib

# Mock Data
mkdir -p data

# Type Definitions
mkdir -p types
```

### Step 2: Create Component Sub-Folders

```bash
cd v1/src/components

# UI Components (reusable primitives)
cd ui
touch .gitkeep
cd ..

# Layout Components (header, footer, navigation)
cd layout
touch .gitkeep
cd ..

# Feature Components (chatbot, hero, pricing table)
cd features
touch .gitkeep
cd ..
```

### Step 3: Document Folder Structure

Create `v1/src/README.md`:

```markdown
# Source Code Structure

This directory contains all application source code.

## Folder Organization

### `/app`
Next.js 14 App Router pages and routes.

**Structure**:
- `layout.tsx` - Root layout (wraps all pages)
- `page.tsx` - Homepage
- `(routes)/` - Route group (doesn't affect URL structure)
  - `services/page.tsx` - /services route
  - `locations/page.tsx` - /locations route
  - `membership/page.tsx` - /membership route
  - `about/page.tsx` - /about route
  - `contact/page.tsx` - /contact route

### `/components`
React components organized by type.

#### `/components/ui`
**Purpose**: Reusable UI primitives (buttons, inputs, cards)

**Examples**:
- `Button.tsx` - Button component with variants
- `Card.tsx` - Card wrapper component
- `Input.tsx` - Form input component
- `Badge.tsx` - Badge/pill component

**Guidelines**:
- Highly reusable
- No business logic
- Accepts props for customization
- Uses brand colors from Tailwind config

#### `/components/layout`
**Purpose**: Layout components (header, footer, navigation)

**Examples**:
- `Header.tsx` - Site header with navigation
- `Footer.tsx` - Site footer with links
- `Navigation.tsx` - Mobile and desktop nav
- `MobileMenu.tsx` - Mobile slide-in menu

**Guidelines**:
- Used in app/layout.tsx
- Consistent across all pages
- Responsive (mobile-first)

#### `/components/features`
**Purpose**: Feature-specific components (hero, chatbot, maps)

**Examples**:
- `Hero.tsx` - Homepage hero section
- `Chatbot.tsx` - AI chatbot interface
- `PricingTable.tsx` - Membership comparison table
- `LocationFinder.tsx` - Google Maps integration
- `TestimonialCarousel.tsx` - Customer reviews

**Guidelines**:
- Domain-specific logic
- May use multiple UI components
- Often page-specific

### `/lib`
**Purpose**: Utility functions, helpers, and shared logic

**Files**:
- `utils.ts` - General utilities (cn function, formatters)
- `data.ts` - Mock data loading functions
- `constants.ts` - App-wide constants
- `validation.ts` - Zod schemas for forms
- `api.ts` - API helper functions (for AI chatbot)

**Guidelines**:
- Pure functions (no side effects)
- Well-tested
- TypeScript strict mode compliant

### `/data`
**Purpose**: Mock data in Markdown format

**Files**:
- `locations.md` - 2 car wash locations
- `services.md` - Wash packages and features
- `pricing.md` - 3-tier membership pricing
- `testimonials.md` - Customer reviews
- `faqs.md` - Frequently asked questions

**Format**:
```markdown
---
id: location-1
name: Downtown Location
address: 123 Main St
---

# Content in markdown

Additional details...
```

**Guidelines**:
- Frontmatter (YAML) for structured data
- Markdown content for rich text
- Parsed by gray-matter in lib/data.ts

### `/types`
**Purpose**: TypeScript type definitions and interfaces

**Files**:
- `global.d.ts` - Global type augmentations
- `index.ts` - Main type exports

**Guidelines**:
- Export all types for reuse
- Match data structure exactly
- Use strict TypeScript

## Import Conventions

Use path aliases for all imports:

```typescript
// Good
import { Button } from '@/components/ui/Button'
import { getLocations } from '@/lib/data'

// Bad
import { Button } from '../../components/ui/Button'
import { getLocations } from '../lib/data'
```

## Naming Conventions

- **Components**: PascalCase (`Button.tsx`, `Header.tsx`)
- **Utilities**: camelCase (`utils.ts`, `data.ts`)
- **Types**: PascalCase (`Location`, `PricingTier`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_ITEMS`, `API_URL`)

## File Organization

Each component should be self-contained:

```
Button.tsx          # Component + types
Button.test.tsx     # Tests (optional for POC)
Button.stories.tsx  # Storybook (optional for POC)
```

For complex components, use a folder:

```
Chatbot/
  index.tsx         # Main component
  ChatMessage.tsx   # Sub-component
  ChatInput.tsx     # Sub-component
  types.ts          # Component-specific types
  utils.ts          # Component-specific utils
```
```

### Step 4: Create README Files for Each Major Folder

Create `v1/src/components/README.md`:

```markdown
# Components

All React components organized by type.

See `/src/README.md` for detailed structure documentation.

## Quick Reference

- `/ui` - Reusable UI primitives (Button, Card, Input)
- `/layout` - Layout components (Header, Footer)
- `/features` - Feature-specific components (Hero, Chatbot)
```

Create `v1/src/lib/README.md`:

```markdown
# Library / Utilities

Shared utility functions and helpers.

## Files

- `utils.ts` - General utilities (cn, formatters)
- `data.ts` - Mock data loading functions
- `constants.ts` - App constants
- `validation.ts` - Zod schemas

All functions should be pure (no side effects).
```

Create `v1/src/data/README.md`:

```markdown
# Mock Data

All content stored as Markdown files with frontmatter.

## Format

\`\`\`markdown
---
id: unique-id
field: value
---

# Markdown content here
\`\`\`

Parsed by `lib/data.ts` using gray-matter.

## Files

- `locations.md` - 2 locations
- `services.md` - Wash packages
- `pricing.md` - 3 membership tiers
- `testimonials.md` - Customer reviews
- `faqs.md` - FAQ for chatbot
```

### Step 5: Verify Structure

```bash
cd v1
tree src -L 3
```

**Expected Output**:
```
src/
├── app/
│   ├── (routes)/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── locations/
│   │   ├── membership/
│   │   └── services/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── features/
│   ├── layout/
│   └── ui/
├── data/
│   └── README.md
├── lib/
│   └── README.md
├── types/
│   └── global.d.ts
└── README.md
```

### Step 6: Update Main README

Update `v1/README.md` to reference the new structure:

```markdown
# Car Wash Website POC - v1 Application

## Project Structure

\`\`\`
v1/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components (ui, layout, features)
│   ├── lib/              # Utilities and helpers
│   ├── data/             # Mock data (Markdown files)
│   └── types/            # TypeScript types
├── public/               # Static assets (images, fonts)
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── tailwind.config.ts    # Tailwind config (brand colors)
└── next.config.js        # Next.js config
\`\`\`

See `src/README.md` for detailed folder documentation.
```

## 📚 Resources

**Related Files**:
- `v1/src/README.md` - Detailed structure documentation
- `v1/README.md` - Project overview

**Documentation**:
- Next.js App Router: https://nextjs.org/docs/app
- Project Structure: https://nextjs.org/docs/app/building-your-application/routing/colocation
- Best Practices: https://nextjs.org/docs/app/building-your-application/routing/project-organization

**Reference Projects**:
- Next.js Examples: https://github.com/vercel/next.js/tree/canary/examples

## 🧪 Testing Requirements

**Manual Testing**:

1. **Folder Existence Test**:
   ```bash
   cd v1/src
   ls -la app components lib data types
   # All should exist
   ```

2. **README Verification**:
   ```bash
   cat src/README.md
   cat src/components/README.md
   # Should show documentation
   ```

3. **Git Tracking Test**:
   ```bash
   git status
   # Should show new folders/files
   # .gitkeep ensures empty folders tracked
   ```

## 🎓 Learning Notes

**Key Concepts**:

1. **App Router (routes) Pattern**:
   - `(routes)` is a route group that doesn't affect URL
   - Keeps app/ folder cleaner
   - `(routes)/services/page.tsx` → `/services` URL

2. **Component Organization**:
   - **UI**: Reusable, no business logic (Button, Card)
   - **Layout**: Structural, consistent (Header, Footer)
   - **Features**: Domain-specific (Chatbot, PricingTable)

3. **Colocation**:
   - Keep related files close together
   - Complex components get their own folder
   - Simple components are single files

4. **Separation of Concerns**:
   - `/components` - Presentation
   - `/lib` - Business logic
   - `/data` - Content
   - `/types` - Type definitions

**Common Pitfalls**:

⚠️ **Too much nesting**
- Don't create folders like `components/ui/buttons/primary/Button.tsx`
- Keep it flat: `components/ui/Button.tsx`

⚠️ **Mixing concerns**
- Don't put API calls in components
- Use `/lib` for business logic

⚠️ **Forgetting .gitkeep**
- Git doesn't track empty folders
- Add `.gitkeep` to ensure they're committed

⚠️ **Inconsistent naming**
- Components: PascalCase
- Utils: camelCase
- Don't mix conventions

## 📏 Estimated Effort

**Time**: 1 hour
- Create folders: 15 minutes
- Write documentation: 30 minutes
- Verification: 15 minutes

**Complexity**: Low
- Straightforward folder creation
- Clear structure

**Prerequisites**:
- TASK-01-01-01: Next.js initialized

## ✔️ Definition of Done

- [ ] All folders created (app, components, lib, data, types)
- [ ] Subfold folders created (ui, layout, features)
- [ ] Route folders created (services, locations, membership, about, contact)
- [ ] README.md files in major folders
- [ ] .gitkeep files in empty folders
- [ ] Structure documented in v1/src/README.md
- [ ] Main README updated with structure overview
- [ ] All folders tracked in Git

**Commit Message**:
```
feat(structure): create project folder structure

- Add app/(routes) for pages (services, locations, membership, about, contact)
- Add components folders (ui, layout, features)
- Add lib for utilities and data loading
- Add data for Markdown mock data
- Add types for TypeScript definitions
- Document structure in README files

Follows Next.js App Router best practices

Closes TASK-01-02-01
```

## 🤖 AI Agent Instructions

**Pre-Implementation**:

1. **Verify Current Structure**:
   ```bash
   cd v1
   ls -la src/
   # Note current folders
   ```

**Implementation**:

1. **Create All Folders**:
   ```bash
   cd v1/src
   mkdir -p app/(routes)/{services,locations,membership,about,contact}
   mkdir -p components/{ui,layout,features}
   mkdir -p lib data types
   ```

2. **Add .gitkeep Files**:
   ```bash
   touch components/ui/.gitkeep
   touch components/layout/.gitkeep
   touch components/features/.gitkeep
   ```

3. **Create README Files**:
   - Copy README content from Steps 3-4
   - Create in appropriate locations

4. **Verify Structure**:
   ```bash
   tree src -L 2
   # Or: find src -type d
   ```

**Verification**:

```bash
# Check all folders exist
test -d src/components/ui && echo "✓ ui exists"
test -d src/lib && echo "✓ lib exists"
test -d src/data && echo "✓ data exists"

# Commit
git add .
git status
# Should show new folders and README files
```

**Success Criteria**:
- All folders created
- README files documented
- Git tracks all folders
- Structure matches specification

## 🔗 Related Tasks

**Depends On**:
- TASK-01-01-01: Next.js initialized

**Blocks**:
- TASK-01-02-02: Create TypeScript types (needs types/ folder)
- TASK-01-02-03: Create mock data files (needs data/ folder)
- All component tasks (need components/ folders)

**Can Run in Parallel With**:
- TASK-01-01-06: ESLint/Prettier (independent)
- TASK-01-01-07: TypeScript strict (independent)

---

**Status**: 🔵 Not Started
**Assigned To**: (Not assigned)
**Estimated**: 1 hour
**Actual**: (Not started)

**Application Directory**: `v1/src/`

**Next**: After completing, proceed to `task-01-02-02-create-typescript-types.md`
