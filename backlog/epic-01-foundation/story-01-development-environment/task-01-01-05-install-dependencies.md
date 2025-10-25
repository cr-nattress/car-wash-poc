# Task: Install Essential Dependencies for POC

**ID**: TASK-01-01-05

**Story**: STORY-01-01 (Development Environment)

**Epic**: EPIC-01 (Foundation & Setup)

**Source**: Task from Milestone 1.1 in planning/IMPLEMENTATION-PLAN.md

---

## 🎯 Objective

Install all essential npm packages required for the POC including animation libraries, form handling, markdown parsing, and development tools.

## 📋 Context

**Why This Task**:
Installing dependencies early ensures all subsequent development tasks have the required packages available. This prevents interruptions during feature development and establishes the technology stack upfront.

**Current State**:
Next.js project with default dependencies (React, Next.js, Tailwind).

**Desired State**:
All production and development dependencies installed and ready for use:
- Framer Motion (animations)
- React Hook Form + Zod (forms and validation)
- gray-matter + remark (markdown parsing for mock data)
- Prettier + ESLint config (code quality)

## ✅ Acceptance Criteria

- [ ] All production dependencies installed without errors
- [ ] All development dependencies installed without errors
- [ ] package.json includes all required packages with versions
- [ ] package-lock.json updated correctly
- [ ] No peer dependency warnings
- [ ] `npm run dev` starts successfully with all deps
- [ ] TypeScript recognizes all installed types
- [ ] No security vulnerabilities (high/critical)

## 🔧 Implementation Guide

**Application Location**: `v1/`

### Step 1: Install Production Dependencies

```bash
cd v1

# Animation library for smooth UI transitions
npm install framer-motion

# Form handling and validation
npm install react-hook-form zod @hookform/resolvers

# Markdown parsing for mock data
npm install gray-matter remark remark-html

# Date utilities
npm install date-fns

# Utility library for conditional classes
npm install clsx tailwind-merge
```

**What Each Package Does**:

- **framer-motion** (v10.16.0+): Animation library for React
  - Smooth page transitions
  - Hero section fade-ins
  - Button hover effects
  - Scroll animations

- **react-hook-form** (v7.48.0+): Form state management
  - Contact form handling
  - Newsletter signup
  - Membership inquiry forms
  - Less re-renders than useState

- **zod** (v3.22.0+): Schema validation
  - Type-safe form validation
  - Runtime type checking
  - Error messages
  - Works perfectly with TypeScript

- **@hookform/resolvers** (v3.3.0+): Bridge between react-hook-form and Zod
  - Connects form library to validation schema
  - Single source of truth for validation

- **gray-matter** (v4.0.0+): Parse frontmatter from markdown
  - Loads mock data from .md files
  - Extracts metadata (id, name, price, etc.)
  - Content management without CMS

- **remark** + **remark-html** (v15.0.0+): Markdown to HTML converter
  - Converts markdown content to HTML
  - Used for blog-style content sections
  - Lightweight alternative to full CMS

- **date-fns** (v2.30.0+): Modern date utility library
  - Format dates for testimonials
  - Parse hours of operation
  - Smaller than moment.js

- **clsx** (v2.0.0+): Conditional className utility
  - Cleaner conditional classes
  - Works with Tailwind

- **tailwind-merge** (v2.0.0+): Merge Tailwind classes without conflicts
  - Prevents duplicate utility classes
  - Enables component prop overrides

### Step 2: Install Development Dependencies

```bash
cd v1

# TypeScript types
npm install -D @types/node @types/react @types/react-dom

# Code formatting
npm install -D prettier eslint-config-prettier prettier-plugin-tailwindcss

# TypeScript strict checking
npm install -D typescript
```

**What Each Package Does**:

- **@types/node**: TypeScript definitions for Node.js APIs
- **@types/react** + **@types/react-dom**: React type definitions
- **prettier**: Code formatter (auto-format on save)
- **eslint-config-prettier**: Disables ESLint rules that conflict with Prettier
- **prettier-plugin-tailwindcss**: Sorts Tailwind classes automatically
- **typescript**: TypeScript compiler (if not already installed)

### Step 3: Verify Installation

```bash
cd v1

# Check all packages installed
npm list --depth=0

# Should show:
# ├── @hookform/resolvers@3.x.x
# ├── @types/node@20.x.x
# ├── clsx@2.x.x
# ├── date-fns@2.x.x
# ├── framer-motion@10.x.x
# ├── gray-matter@4.x.x
# ├── next@14.x.x
# ├── react@18.x.x
# ├── react-hook-form@7.x.x
# ├── remark@15.x.x
# ├── tailwind-merge@2.x.x
# ├── zod@3.x.x
# ... and more
```

### Step 4: Check for Vulnerabilities

```bash
cd v1
npm audit

# If vulnerabilities found:
npm audit fix

# If critical vulnerabilities remain:
npm audit fix --force
# (Use with caution, may update to breaking versions)
```

Target: 0 high or critical vulnerabilities

### Step 5: Verify TypeScript Types

```bash
cd v1
npx tsc --noEmit

# Should compile without errors
# All types should be recognized
```

### Step 6: Test Imports in Code

Create a test file to verify imports work:

`v1/src/lib/__test__/dependencies-test.ts`:

```typescript
// This file verifies all dependencies are properly installed
// Delete after verification

// Animation
import { motion } from 'framer-motion'

// Forms
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Markdown
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Utilities
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format } from 'date-fns'

// If this file compiles, all dependencies are working
console.log('All dependencies imported successfully')

export {}
```

Run TypeScript check:
```bash
npx tsc --noEmit
# Should pass without errors
```

### Step 7: Update package.json Scripts (if needed)

Verify these scripts exist in `v1/package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "format": "prettier --write \"src/**/*.{ts,tsx,css,md}\""
  }
}
```

Add any missing scripts.

### Step 8: Test Development Server

```bash
cd v1
npm run dev
```

Verify:
- Server starts on port 3000
- No module not found errors
- No type errors
- Homepage loads successfully

### Step 9: Create cn Utility Function

Create `v1/src/lib/utils.ts` to use clsx and tailwind-merge:

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges Tailwind CSS classes without conflicts
 * Uses clsx for conditional classes and tailwind-merge to handle conflicts
 *
 * @example
 * cn('px-4 py-2', condition && 'bg-blue-500', 'px-6') // px-6 wins, keeps py-2 and conditional bg
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

This utility will be used throughout the app for conditional Tailwind classes.

## 📚 Resources

**Related Files**:
- `v1/package.json` - Dependency manifest
- `v1/package-lock.json` - Locked versions
- `v1/src/lib/utils.ts` - Utility functions

**Documentation**:
- Framer Motion: https://www.framer.com/motion/
- React Hook Form: https://react-hook-form.com/
- Zod: https://zod.dev/
- gray-matter: https://github.com/jonschlinkert/gray-matter
- remark: https://github.com/remarkjs/remark
- date-fns: https://date-fns.org/

**Package Considerations**:
- All packages actively maintained (updated within 6 months)
- Minimal bundle impact (<50KB each)
- Strong TypeScript support
- Wide community adoption

## 🧪 Testing Requirements

**Manual Testing**:

1. **Installation Test**:
   ```bash
   cd v1
   npm install
   # Should complete without errors
   ```
   - [ ] No error messages
   - [ ] No peer dependency warnings
   - [ ] package-lock.json updated

2. **Type Check Test**:
   ```bash
   npm run type-check
   # Should pass
   ```
   - [ ] TypeScript compiles
   - [ ] All types recognized
   - [ ] No "cannot find module" errors

3. **Development Server Test**:
   ```bash
   npm run dev
   ```
   - [ ] Starts successfully
   - [ ] No module errors in console
   - [ ] http://localhost:3000 loads

4. **Import Test**:
   - Create the test file from Step 6
   - Run `npx tsc --noEmit`
   - [ ] All imports resolve
   - [ ] No type errors

5. **Vulnerability Scan**:
   ```bash
   npm audit
   ```
   - [ ] 0 critical vulnerabilities
   - [ ] 0 high vulnerabilities
   - [ ] Low/moderate acceptable for POC

## 🎓 Learning Notes

**Key Concepts**:

1. **Production vs Development Dependencies**:
   - Production (`dependencies`): Required for app to run
   - Development (`devDependencies`): Only needed for development
   - Netlify installs both during build, only ships production to browser

2. **Package Versions**:
   - `^10.16.0`: Allows updates to 10.x.x (minor/patch)
   - `~10.16.0`: Only allows 10.16.x (patch only)
   - `10.16.0`: Exact version only
   - Use `^` for flexibility, lock with package-lock.json

3. **Peer Dependencies**:
   - Package requires another package to be installed
   - Example: @hookform/resolvers needs react-hook-form
   - npm 7+ installs automatically, older versions show warnings

4. **Bundle Size Impact**:
   - Framer Motion: ~40KB gzipped
   - React Hook Form: ~8KB gzipped
   - Zod: ~12KB gzipped
   - Total added: ~60KB (acceptable for POC)

**Common Pitfalls**:

⚠️ **Installing packages globally**
- Don't use `npm install -g` for project dependencies
- Always install locally in project
- Ensures version consistency across environments

⚠️ **Mixing package managers**
- Use npm OR yarn OR pnpm, not mixed
- Mixing creates conflicts
- This project uses npm (has package-lock.json)

⚠️ **Ignoring audit warnings**
- Critical vulnerabilities must be addressed
- High vulnerabilities should be fixed
- Low/moderate acceptable for POC, fix before production

⚠️ **Not committing package-lock.json**
- Always commit package-lock.json
- Ensures exact versions across environments
- Prevents "works on my machine" issues

⚠️ **Installing unnecessary packages**
- Only install what you need
- Each package increases bundle size
- Evaluate alternatives (native solutions, smaller libraries)

## 📏 Estimated Effort

**Time**: 30 minutes
- Install production deps: 10 minutes
- Install dev deps: 5 minutes
- Verification and testing: 10 minutes
- Documentation: 5 minutes

**Complexity**: Low
- Straightforward npm install commands
- Well-established packages
- Clear verification steps

**Prerequisites**:
- TASK-01-01-01: Next.js initialized
- npm installed on system

## ✔️ Definition of Done

- [ ] All production dependencies installed
- [ ] All development dependencies installed
- [ ] package.json updated with correct versions
- [ ] package-lock.json committed to Git
- [ ] No security vulnerabilities (high/critical)
- [ ] TypeScript recognizes all type definitions
- [ ] Development server starts with all deps
- [ ] All imports working in test file
- [ ] `npm run type-check` passes
- [ ] cn() utility function created

**Commit Message**:
```
chore(deps): install essential dependencies for POC

Production dependencies:
- framer-motion (animations)
- react-hook-form + zod (forms and validation)
- gray-matter + remark (markdown parsing)
- date-fns (date utilities)
- clsx + tailwind-merge (className utilities)

Development dependencies:
- @types/* (TypeScript definitions)
- prettier + eslint-config (code formatting)
- prettier-plugin-tailwindcss (class sorting)

All packages verified, no vulnerabilities

Closes TASK-01-01-05
```

## 🤖 AI Agent Instructions

**Pre-Implementation**:

1. **Verify npm Available**:
   ```bash
   npm --version
   # Should show 9.x or higher
   ```

2. **Check Current Dependencies**:
   ```bash
   cd v1
   cat package.json
   # Note existing dependencies
   ```

**Implementation**:

1. **Install Production Deps**:
   ```bash
   cd v1
   npm install framer-motion react-hook-form zod @hookform/resolvers gray-matter remark remark-html date-fns clsx tailwind-merge
   ```

2. **Install Dev Deps**:
   ```bash
   npm install -D @types/node prettier eslint-config-prettier prettier-plugin-tailwindcss
   ```

3. **Verify Installation**:
   ```bash
   npm list --depth=0
   npm audit
   npm run type-check
   ```

4. **Create cn() Utility**:
   - Create `src/lib/utils.ts`
   - Add the cn() function from Step 9

5. **Test**:
   ```bash
   npm run dev
   # Should start successfully
   ```

**Verification**:

```bash
# All should pass
npm run type-check
npm run lint
npm run build
```

**Success Criteria**:
- No installation errors
- Type checking passes
- Development server starts
- 0 high/critical vulnerabilities

## 🔗 Related Tasks

**Depends On**:
- TASK-01-01-01: Next.js initialized

**Blocks**:
- All UI component tasks (need Framer Motion, clsx)
- All form tasks (need React Hook Form, Zod)
- All data loading tasks (need gray-matter)

**Can Run in Parallel With**:
- TASK-01-01-02: Tailwind configuration (independent)
- TASK-01-01-03: Git setup (independent)
- TASK-01-01-06: ESLint/Prettier (will use deps from this task)

---

**Status**: 🔵 Not Started
**Assigned To**: (Not assigned)
**Estimated**: 30 minutes
**Actual**: (Not started)

**Application Directory**: `v1/`

**Next**: After completing, proceed to `task-01-01-06-eslint-prettier.md`
