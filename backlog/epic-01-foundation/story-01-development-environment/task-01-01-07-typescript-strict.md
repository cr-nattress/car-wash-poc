# Task: Enable TypeScript Strict Mode and Path Aliases

**ID**: TASK-01-01-07

**Story**: STORY-01-01 (Development Environment)

**Epic**: EPIC-01 (Foundation & Setup)

**Source**: Task from Milestone 1.1 in planning/IMPLEMENTATION-PLAN.md

---

## 🎯 Objective

Enable TypeScript strict mode for maximum type safety and configure path aliases for cleaner imports throughout the application.

## 📋 Context

**Why This Task**:
TypeScript strict mode catches more bugs at compile time, enforces best practices, and improves code reliability. Path aliases eliminate ugly relative imports (`../../../../components/Button`) and make refactoring easier.

**Current State**:
- TypeScript configured with default settings
- Imports use relative paths (`../../lib/utils`)
- Some type safety rules disabled

**Desired State**:
- Strict mode enabled (strict: true)
- Path aliases configured (`@/components`, `@/lib`, `@/app`)
- All existing code passes strict type checking
- Cleaner import statements throughout codebase

## ✅ Acceptance Criteria

- [ ] `tsconfig.json` has `strict: true`
- [ ] Path aliases configured (`@/*` maps to `src/*`)
- [ ] Additional strict options enabled
- [ ] No type errors with strict mode on
- [ ] Imports use `@/` instead of relative paths
- [ ] TypeScript recognizes path aliases
- [ ] VS Code autocomplete works with aliases
- [ ] Build succeeds with strict mode
- [ ] No `any` types in codebase (except explicitly needed)

## 🔧 Implementation Guide

**Application Location**: `v1/tsconfig.json`

### Step 1: Update tsconfig.json with Strict Mode

Update `v1/tsconfig.json`:

```json
{
  "compilerOptions": {
    /* Language and Environment */
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve",

    /* Modules */
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,

    /* Type Checking - STRICT MODE */
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noPropertyAccessFromIndexSignature": true,

    /* Path Aliases */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/app/*": ["./src/app/*"],
      "@/data/*": ["./src/data/*"]
    },

    /* Emit */
    "noEmit": true,
    "incremental": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,

    /* Interop Constraints */
    "isolatedModules": true,
    "forceConsistentCasingInFileNames": true,

    /* Skip type checking for libraries */
    "skipLibCheck": true,

    /* Next.js specific */
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

**Strict Options Explained**:

- **`strict: true`** - Enables all strict type-checking options
  - `strictNullChecks` - `null` and `undefined` must be explicitly checked
  - `strictFunctionTypes` - Function parameters checked contravariantly
  - `strictBindCallApply` - `bind`, `call`, `apply` have correct types
  - `strictPropertyInitialization` - Class properties must be initialized
  - `noImplicitAny` - Error on expressions with implied `any` type
  - `noImplicitThis` - Error on `this` with implied `any` type
  - `alwaysStrict` - Parse in strict mode and emit "use strict"

- **`noUncheckedIndexedAccess: true`** - Adds `undefined` to array/object lookups
  ```typescript
  const arr = [1, 2, 3]
  const x = arr[10] // Type is `number | undefined` (not just `number`)
  ```

- **`noUnusedLocals: true`** - Error on unused local variables

- **`noUnusedParameters: true`** - Error on unused function parameters
  - Can prefix with `_` to allow: `function foo(_unused: string) {}`

- **`noPropertyAccessFromIndexSignature: true`** - Use bracket notation for index signatures
  ```typescript
  interface Obj { [key: string]: string }
  const obj: Obj = {}
  obj.foo // Error - use obj['foo'] instead
  ```

### Step 2: Verify Path Aliases Work

Create a test file to verify aliases:

```typescript
// v1/src/app/page.tsx
// OLD (relative imports):
// import { Button } from '../../components/ui/Button'
// import { cn } from '../../lib/utils'

// NEW (path aliases):
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export default function HomePage() {
  return (
    <div className={cn('p-4')}>
      <Button>Test</Button>
    </div>
  )
}
```

Test autocomplete:
- Type `import { } from '@/`
- VS Code should show autocomplete with `components`, `lib`, `app`, `data`

### Step 3: Fix Strict Mode Errors in Existing Code

Run type check:
```bash
cd v1
npm run type-check
```

**Common Errors and Fixes**:

**Error: Property 'children' does not exist on type**
```typescript
// Before
export function Layout({ children }) {
  return <div>{children}</div>
}

// After
export function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
```

**Error: Object is possibly 'undefined'**
```typescript
// Before
const value = array[0]
value.toUpperCase() // Error: value might be undefined

// After
const value = array[0]
if (value) {
  value.toUpperCase() // OK
}
// Or use optional chaining:
value?.toUpperCase()
```

**Error: Implicit 'any' type**
```typescript
// Before
function process(data) {
  return data.value
}

// After
function process(data: { value: string }) {
  return data.value
}
```

**Error: Parameter 'x' is declared but never used**
```typescript
// Before
function onClick(event) {
  console.log('clicked')
}

// After - prefix with underscore if intentionally unused
function onClick(_event: React.MouseEvent) {
  console.log('clicked')
}
```

### Step 4: Update All Imports to Use Path Aliases

Search and replace relative imports:

```bash
# Find relative imports (manual search or script)
cd v1
grep -r "from '\.\." src/

# Replace with path aliases
# Example: from '../../components/Button' → from '@/components/Button'
```

**Before** (relative imports):
```typescript
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'
import { getLocations } from '../../../lib/data'
```

**After** (path aliases):
```typescript
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getLocations } from '@/lib/data'
```

### Step 5: Create Global Type Definitions

Create `v1/src/types/global.d.ts`:

```typescript
// Global type definitions

// Extend Window interface if needed
declare global {
  interface Window {
    // Example: Google Maps API
    google?: typeof google
  }
}

// Ensure this file is treated as a module
export {}
```

This file will be auto-included by TypeScript.

### Step 6: Update next.config.js to Support Path Aliases

Verify `v1/next.config.js` includes:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Path aliases are handled by tsconfig.json
  // No additional config needed for Next.js 14+
}

module.exports = nextConfig
```

Next.js 14+ automatically respects tsconfig.json path aliases.

### Step 7: Test Type Checking Passes

```bash
cd v1
npm run type-check
```

**Expected Output**:
```
✓ Type checking passed
```

Fix any remaining errors before proceeding.

### Step 8: Test in Development Server

```bash
npm run dev
```

Verify:
- No module resolution errors
- Imports resolve correctly
- Hot reload works with path aliases

### Step 9: Test Build

```bash
npm run build
```

Verify:
- Build completes successfully
- No type errors
- Path aliases resolved correctly

## 📚 Resources

**Related Files**:
- `v1/tsconfig.json` - TypeScript configuration
- `v1/src/types/global.d.ts` - Global type definitions
- `v1/next.config.js` - Next.js configuration

**Documentation**:
- TypeScript Strict Mode: https://www.typescriptlang.org/tsconfig#strict
- Compiler Options: https://www.typescriptlang.org/tsconfig
- Path Mapping: https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping
- Next.js TypeScript: https://nextjs.org/docs/app/building-your-application/configuring/typescript

**Learning Resources**:
- TypeScript Strict Mode Benefits: https://www.typescriptlang.org/docs/handbook/2/strictness.html
- Understanding strictNullChecks: https://basarat.gitbook.io/typescript/intro/strictnullchecks

## 🧪 Testing Requirements

**Manual Testing**:

1. **Type Check Test**:
   ```bash
   cd v1
   npm run type-check
   ```
   - [ ] Passes with 0 errors
   - [ ] No implicit `any` warnings
   - [ ] All imports resolve

2. **Path Alias Test**:
   - Open any file in VS Code
   - Type: `import { } from '@/'`
   - [ ] Autocomplete shows folders
   - [ ] Imports resolve correctly
   - [ ] No module not found errors

3. **Strict Null Check Test**:
   ```typescript
   // Create test file
   const arr: string[] = []
   const item = arr[0]
   item.toUpperCase() // Should error: possibly undefined
   ```
   - [ ] TypeScript errors on potentially undefined access
   - [ ] Forces null checking

4. **Build Test**:
   ```bash
   npm run build
   ```
   - [ ] Build succeeds
   - [ ] All aliases resolved
   - [ ] No type errors

5. **Development Server Test**:
   ```bash
   npm run dev
   ```
   - [ ] Server starts
   - [ ] Hot reload works
   - [ ] Path aliases work in browser

## 🎓 Learning Notes

**Key Concepts**:

1. **Benefits of Strict Mode**:
   - Catches more bugs at compile time (not runtime)
   - Forces explicit null/undefined handling (prevents runtime errors)
   - Prevents implicit `any` (maintains type safety)
   - Enforces complete type coverage

2. **Path Aliases Benefits**:
   - **Readable**: `@/components/Button` vs `../../../../components/Button`
   - **Refactor-friendly**: Move files without updating imports
   - **Shorter**: Less typing, clearer intent
   - **Autocomplete**: Better IDE support

3. **Strict Null Checks**:
   ```typescript
   // Without strictNullChecks
   function len(s: string) {
     return s.length // OK even if s is null
   }

   // With strictNullChecks
   function len(s: string | null) {
     return s.length // Error: s might be null
     return s?.length // OK: optional chaining
   }
   ```

4. **noUncheckedIndexedAccess**:
   ```typescript
   const arr = [1, 2, 3]

   // Without noUncheckedIndexedAccess
   const x = arr[10] // Type: number (unsafe!)

   // With noUncheckedIndexedAccess
   const x = arr[10] // Type: number | undefined (safe!)
   if (x) {
     console.log(x + 1) // OK
   }
   ```

**Common Pitfalls**:

⚠️ **Enabling strict mode too late**
- Hard to fix all errors in large codebase
- Enable early (like now!)
- Prevents technical debt

⚠️ **Using `any` to "fix" errors**
- Defeats purpose of TypeScript
- Bad: `const data: any = response`
- Good: `const data: ResponseType = response`
- Use `unknown` if type truly unknown, then narrow

⚠️ **Forgetting to check array access**
- `arr[0]` is now `T | undefined` with strict mode
- Must check: `if (arr[0])` or use `arr[0]?`
- Prevents "undefined is not an object" runtime errors

⚠️ **Path alias misconfiguration**
- Must set `baseUrl` to use `paths`
- Must match in both tsconfig.json and next.config (if needed)
- Check VS Code recognizes aliases (restart if needed)

⚠️ **Ignoring unused parameter errors**
- Prefix with `_` if intentionally unused: `_event`
- Or remove if truly not needed
- Don't disable the rule globally

## 📏 Estimated Effort

**Time**: 30 minutes
- Update tsconfig.json: 10 minutes
- Fix strict mode errors: 10 minutes
- Update imports to path aliases: 5 minutes
- Testing and verification: 5 minutes

**Complexity**: Low-Medium
- Configuration straightforward
- May need to fix existing code
- Path alias updates manual but simple

**Prerequisites**:
- TASK-01-01-01: Next.js initialized
- Basic TypeScript knowledge

## ✔️ Definition of Done

- [ ] tsconfig.json has `strict: true`
- [ ] Additional strict options enabled
- [ ] Path aliases configured (`@/*` → `src/*`)
- [ ] All imports updated to use `@/` aliases
- [ ] `npm run type-check` passes with 0 errors
- [ ] `npm run build` succeeds
- [ ] VS Code autocomplete works with aliases
- [ ] No implicit `any` types in codebase
- [ ] Global type definitions file created

**Commit Message**:
```
chore(typescript): enable strict mode and path aliases

- Enable TypeScript strict mode for maximum type safety
- Configure path aliases (@/components, @/lib, @/app)
- Update all imports to use path aliases
- Add global type definitions (src/types/global.d.ts)
- Fix all strict mode type errors
- Enable noUncheckedIndexedAccess for safer array access

All type checks passing

Closes TASK-01-01-07
```

## 🤖 AI Agent Instructions

**Pre-Implementation**:

1. **Verify TypeScript Installed**:
   ```bash
   cd v1
   npx tsc --version
   # Should show 5.x
   ```

2. **Check Current Config**:
   ```bash
   cat tsconfig.json
   # Note current strict setting
   ```

**Implementation**:

1. **Update tsconfig.json**:
   - Copy configuration from Step 1
   - Replace entire file
   - Save

2. **Create Global Types**:
   ```bash
   mkdir -p src/types
   # Create src/types/global.d.ts from Step 5
   ```

3. **Run Type Check**:
   ```bash
   npm run type-check
   # Note all errors
   ```

4. **Fix Errors**:
   - Add type annotations where missing
   - Check for null/undefined
   - Prefix unused params with `_`
   - Fix each error systematically

5. **Update Imports**:
   - Search for relative imports (`from '../`)
   - Replace with path aliases (`from '@/`)

6. **Verify**:
   ```bash
   npm run type-check
   npm run build
   npm run dev
   ```

**Verification**:

```bash
# All should pass
npm run type-check
npm run lint
npm run build
```

**Success Criteria**:
- Zero type errors
- All imports use `@/` aliases
- Build succeeds
- Development server works

## 🔗 Related Tasks

**Depends On**:
- TASK-01-01-01: Next.js initialized

**Blocks**:
- All TypeScript development tasks (type safety enforced)

**Can Run in Parallel With**:
- TASK-01-01-06: ESLint/Prettier (independent)
- TASK-01-02-01: Folder structure (independent)

---

**Status**: 🔵 Not Started
**Assigned To**: (Not assigned)
**Estimated**: 30 minutes
**Actual**: (Not started)

**Application Directory**: `v1/`

**Next**: Story 01-01 complete! Proceed to Story 01-02 (`task-01-02-01-create-folder-structure.md`)
