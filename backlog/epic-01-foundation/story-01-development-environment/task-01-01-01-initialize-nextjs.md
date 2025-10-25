# Task: Initialize Next.js Project with TypeScript

**ID**: TASK-01-01-01

**Story**: STORY-01-01 (Development Environment Setup)

**Epic**: EPIC-01 (Foundation & Setup)

**Source**: Task from Milestone 1.1 in planning/IMPLEMENTATION-PLAN.md

---

## 🎯 Objective

Create a Next.js 14+ project with TypeScript, App Router, and Tailwind CSS configured for the car wash website POC.

## 📋 Context

**Why This Task**:
This is the very first development task - establishing the foundation for the entire project. Without this, no other development can proceed. Next.js provides the framework for the modern, performant, SEO-friendly car wash website.

**Current State**:
Empty directory ready for initialization.

**Desired State**:
Fully configured Next.js project with:
- TypeScript for type safety
- App Router (not Pages Router) for modern React patterns
- Tailwind CSS for utility-first styling
- Development server running successfully
- Project structure ready for car wash features

## ✅ Acceptance Criteria

- [ ] Next.js 14+ project initialized
- [ ] TypeScript configured with strict mode
- [ ] App Router enabled (not Pages Router)
- [ ] Tailwind CSS installed and working
- [ ] `npm run dev` starts development server on port 3000
- [ ] Can view "Welcome to Next.js" page at http://localhost:3000
- [ ] `npm run build` completes successfully
- [ ] Zero TypeScript errors when running `npm run type-check`
- [ ] Project uses `src/` directory structure
- [ ] All files use TypeScript (.ts/.tsx extensions)

## 🔧 Implementation Guide

**Step-by-Step Approach**:

### Step 1: Initialize Next.js Project

**IMPORTANT**: All application code goes in the `v1/` directory.

Navigate to v1 directory and run:

```bash
cd v1
npx create-next-app@latest . --typescript --tailwind --app --src-dir --eslint
```

**CRITICAL**: The `.` tells it to initialize in the current directory (v1).

**Prompt Responses** (if asked interactively):
- ✅ Would you like to use TypeScript? → **Yes**
- ✅ Would you like to use ESLint? → **Yes**
- ✅ Would you like to use Tailwind CSS? → **Yes**
- ✅ Would you like to use `src/` directory? → **Yes**
- ✅ Would you like to use App Router? → **Yes** (CRITICAL - NOT Pages Router)
- ❌ Would you like to customize the default import alias? → **No**

This initializes Next.js with App Router in the `v1/` directory.

### Step 2: Verify Installation

Check that these files were created:

```bash
ls
```

Expected output:
```
node_modules/
public/
src/
  app/
    layout.tsx
    page.tsx
    globals.css
.eslintrc.json
.gitignore
next.config.js (or next.config.mjs)
package.json
postcss.config.js
tailwind.config.ts
tsconfig.json
README.md
```

### Step 3: Verify TypeScript Configuration

Open `tsconfig.json` and verify:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,  // MUST be true
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]  // Path alias for imports
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**If `strict` is not `true`**: Add it manually.

### Step 4: Verify Tailwind Configuration

Open `tailwind.config.ts` and verify:

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
      // We'll add custom brand colors in next task
    },
  },
  plugins: [],
}
export default config
```

### Step 5: Start Development Server

```bash
npm run dev
```

Expected output:
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
  - Ready in Xms
```

### Step 6: Verify in Browser

1. Open browser to http://localhost:3000
2. Should see Next.js welcome page
3. Should NOT see any errors in browser console
4. Should NOT see any errors in terminal

### Step 7: Test Production Build

Stop dev server (Ctrl+C) and run:

```bash
npm run build
```

Expected output:
```
✓ Creating an optimized production build
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (X/X)
✓ Finalizing page optimization

Route (app)                              Size
┌ ○ /                                    X kB        X kB
└ ○ /_not-found                         X kB        X kB
```

### Step 8: Add Scripts to package.json

Verify these scripts exist in `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"  // Add if missing
  }
}
```

**If `type-check` script is missing**, add it manually.

### Step 9: Run Type Check

```bash
npm run type-check
```

Expected output:
```
(No output = success)
```

If there are TypeScript errors, they must be fixed before proceeding.

## 📚 Resources

**Official Documentation**:
- Next.js 14 Docs: https://nextjs.org/docs
- Next.js App Router: https://nextjs.org/docs/app
- TypeScript with Next.js: https://nextjs.org/docs/app/building-your-application/configuring/typescript

**Project Files to Review After Creation**:
- `src/app/layout.tsx` - Root layout component
- `src/app/page.tsx` - Homepage component
- `src/app/globals.css` - Global styles with Tailwind directives
- `tailwind.config.ts` - Tailwind configuration
- `next.config.js` - Next.js configuration

**Next Task Dependencies**:
This task blocks TASK-01-01-02 (Configure Tailwind with brand colors)

## 🧪 Testing Requirements

**Manual Verification**:

1. **Dev Server Test**:
   ```bash
   npm run dev
   # Visit http://localhost:3000
   # Should see Next.js page, no console errors
   ```

2. **Production Build Test**:
   ```bash
   npm run build
   # Should complete with no errors
   # Should show green checkmarks
   ```

3. **TypeScript Test**:
   ```bash
   npm run type-check
   # Should complete with no output (no errors)
   ```

4. **Linter Test**:
   ```bash
   npm run lint
   # Should pass or show only warnings (not errors)
   ```

**File Structure Test**:

Verify this structure exists:
```
src/
├── app/
│   ├── layout.tsx     ✓ TypeScript file
│   ├── page.tsx       ✓ TypeScript file
│   ├── globals.css    ✓ CSS with Tailwind directives
│   └── favicon.ico    ✓ Favicon
public/               ✓ Static assets folder
node_modules/         ✓ Dependencies installed
package.json          ✓ Project manifest
tsconfig.json         ✓ TypeScript config
tailwind.config.ts    ✓ Tailwind config (TypeScript)
next.config.js        ✓ Next.js config
```

## 🎓 Learning Notes

**Key Concepts**:

1. **App Router vs Pages Router**:
   - App Router is the modern approach (React Server Components)
   - Pages Router is legacy (will be supported but not recommended)
   - This project MUST use App Router

2. **`src/` Directory**:
   - Cleaner project structure
   - Separates source code from configuration files
   - Optional but recommended

3. **TypeScript Strict Mode**:
   - `strict: true` enables all strict type checking
   - Catches bugs earlier
   - May require more type annotations but worth it

4. **Path Aliases**:
   - `@/*` maps to `src/*`
   - Allows imports like `import { Button } from '@/components/ui/Button'`
   - Cleaner than relative paths like `../../components/ui/Button`

**Common Pitfalls**:

⚠️ **Using Pages Router instead of App Router**
- Make sure when initializing you select "Yes" for App Router
- App Router files live in `src/app/`, not `src/pages/`

⚠️ **Not using strict TypeScript**
- Always enable `strict: true` in tsconfig.json
- Catches type errors early

⚠️ **Forgetting to add type-check script**
- Manually add `"type-check": "tsc --noEmit"` to scripts
- Run it before committing code

⚠️ **Installing in wrong directory**
- If already in project root, use `.` not a subdirectory name
- `npx create-next-app@latest .` (note the dot)

## 📏 Estimated Effort

**Time**: 30 minutes - 1 hour
- Installation: 10 minutes
- Verification: 10 minutes
- Testing: 10 minutes
- Troubleshooting (if needed): 30 minutes

**Complexity**: Low
- Well-documented process
- Single command to initialize
- Common task with lots of resources

**Prerequisites**:
- Node.js 18+ installed
- npm or yarn installed
- Empty or initialized project directory

## ✔️ Definition of Done

Before marking this task complete, verify:

- [ ] Next.js 14+ installed (check `package.json`)
- [ ] TypeScript configured with `strict: true`
- [ ] Tailwind CSS installed and configured
- [ ] App Router structure (src/app/ folder exists)
- [ ] `npm run dev` starts server successfully
- [ ] Can view site at http://localhost:3000
- [ ] `npm run build` completes without errors
- [ ] `npm run type-check` passes with no errors
- [ ] `npm run lint` passes (warnings OK, errors not OK)
- [ ] .gitignore includes node_modules, .next, .env*
- [ ] All files use TypeScript (.ts/.tsx extensions)

**Commit Message Format**:
```
feat(setup): initialize Next.js 14 with TypeScript and Tailwind

- App Router enabled
- TypeScript strict mode
- Tailwind CSS configured
- src/ directory structure
- Development server verified

Closes TASK-01-01-01
```

## 🤖 AI Agent Instructions

**If you are an AI agent executing this task**:

### Pre-Implementation Search

Before creating anything new, check:
```bash
# Check if Next.js is already initialized
ls package.json
ls src/app/layout.tsx

# If these exist, this task may already be complete or partially done
```

### Implementation Steps

1. **Check Node.js Version**:
   ```bash
   node --version
   # Should be 18.x or higher
   ```

2. **Initialize Project**:
   ```bash
   # If in car-wash-poc directory:
   npx create-next-app@latest . --typescript --tailwind --app --src-dir --eslint

   # If creating subdirectory:
   npx create-next-app@latest car-wash-poc --typescript --tailwind --app --src-dir --eslint
   ```

3. **Verify Installation**:
   ```bash
   # Check structure
   ls -la
   cat tsconfig.json | grep "strict"
   cat tailwind.config.ts
   ```

4. **Test Development Server**:
   ```bash
   npm run dev &
   # Wait 5 seconds
   curl http://localhost:3000
   # Should return HTML
   # Kill dev server
   kill %1
   ```

5. **Test Build**:
   ```bash
   npm run build
   # Should succeed
   ```

6. **Run Type Check**:
   ```bash
   npm run type-check
   # Should have no output (success)
   ```

### Verification Checklist

Run this verification script:
```bash
echo "Verifying Next.js initialization..."
test -f package.json && echo "✓ package.json exists" || echo "✗ package.json missing"
test -f tsconfig.json && echo "✓ tsconfig.json exists" || echo "✗ tsconfig.json missing"
test -f tailwind.config.ts && echo "✓ tailwind.config.ts exists" || echo "✗ tailwind.config.ts missing"
test -d src/app && echo "✓ src/app directory exists" || echo "✗ src/app missing"
test -f src/app/layout.tsx && echo "✓ layout.tsx exists" || echo "✗ layout.tsx missing"
test -f src/app/page.tsx && echo "✓ page.tsx exists" || echo "✗ page.tsx missing"
grep -q "\"strict\": true" tsconfig.json && echo "✓ TypeScript strict mode enabled" || echo "✗ strict mode not enabled"
```

### Commit

```bash
git add .
git commit -m "feat(setup): initialize Next.js 14 with TypeScript and Tailwind

- App Router enabled
- TypeScript strict mode
- Tailwind CSS configured
- src/ directory structure
- Development server verified

Closes TASK-01-01-01"
```

### Report Completion

Output:
```
✅ TASK-01-01-01 Complete

Next.js 14.x initialized successfully:
- TypeScript: ✓ (strict mode enabled)
- Tailwind CSS: ✓
- App Router: ✓
- Dev server: ✓ (tested on port 3000)
- Production build: ✓ (no errors)
- Type check: ✓ (no errors)

Next task: TASK-01-01-02 (Configure Tailwind with brand colors)
```

## 🔗 Related Tasks

**Depends On**:
- None (this is the first task)

**Blocks**:
- TASK-01-01-02: Configure Tailwind CSS with Brand Colors
- TASK-01-01-03: Set Up Git Repository
- ALL other tasks (nothing can proceed without this)

**Can Run in Parallel With**:
- None (must complete first)

---

**Status**: 🔵 Not Started
**Assigned To**: (Not assigned)
**Estimated**: 0.5-1 hour
**Actual**: (Not started)

**Next**: After completing this task, proceed to `task-01-01-02-configure-tailwind.md`
