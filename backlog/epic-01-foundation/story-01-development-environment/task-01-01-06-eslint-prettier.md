# Task: Configure ESLint and Prettier for Code Quality

**ID**: TASK-01-01-06

**Story**: STORY-01-01 (Development Environment)

**Epic**: EPIC-01 (Foundation & Setup)

**Source**: Task from Milestone 1.1 in planning/IMPLEMENTATION-PLAN.md

---

## 🎯 Objective

Set up ESLint for code linting and Prettier for automatic code formatting, ensuring consistent code style across the project.

## 📋 Context

**Why This Task**:
Code quality tools prevent bugs, enforce best practices, and ensure consistent formatting. ESLint catches potential errors before runtime, while Prettier eliminates formatting debates and saves time.

**Current State**:
- Next.js includes basic ESLint configuration
- Prettier installed but not configured
- No auto-formatting on save

**Desired State**:
- ESLint configured with Next.js best practices
- Prettier configured with project code style
- ESLint and Prettier integrated (no conflicts)
- Auto-format on save working in VS Code
- Format script available for CI/CD

## ✅ Acceptance Criteria

- [ ] `.prettierrc` configuration file created
- [ ] `.eslintrc.json` updated with custom rules
- [ ] `.prettierignore` excludes build files
- [ ] ESLint and Prettier don't conflict
- [ ] `npm run lint` passes on codebase
- [ ] `npm run format` formats all files
- [ ] Auto-format on save works (VS Code)
- [ ] Tailwind classes auto-sorted
- [ ] No linting errors on existing code
- [ ] Pre-commit hook considered (optional for POC)

## 🔧 Implementation Guide

**Application Location**: `v1/`

### Step 1: Create Prettier Configuration

Create `v1/.prettierrc`:

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "avoid",
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

**Configuration Explained**:
- `semi: false` - No semicolons (modern JavaScript style)
- `singleQuote: true` - Use 'single' instead of "double" quotes
- `tabWidth: 2` - 2 spaces for indentation
- `printWidth: 100` - Wrap lines at 100 characters
- `trailingComma: "es5"` - Trailing commas where valid in ES5
- `arrowParens: "avoid"` - Omit parens when possible `x => x`
- `plugins: ["prettier-plugin-tailwindcss"]` - Auto-sort Tailwind classes

### Step 2: Create Prettier Ignore File

Create `v1/.prettierignore`:

```
# Dependencies
node_modules

# Build outputs
.next
out
build
dist

# Cache
.cache

# Lock files
package-lock.json
yarn.lock
pnpm-lock.yaml

# Environment files
.env
.env.local
.env.production
.env.development

# Logs
*.log

# OS
.DS_Store
Thumbs.db
```

### Step 3: Update ESLint Configuration

Update `v1/.eslintrc.json`:

```json
{
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    // Disable rules that conflict with Prettier
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",

    // TypeScript specific
    "@typescript-eslint/no-unused-vars": ["error", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_"
    }],
    "@typescript-eslint/no-explicit-any": "warn",

    // Best practices
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "prefer-const": "error",
    "no-var": "error",

    // React best practices
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // Accessibility
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-role": "error"
  }
}
```

**Rules Explained**:
- `prettier` at end of extends - Disables ESLint formatting rules that conflict
- `@typescript-eslint/no-unused-vars` - Error on unused variables (except prefixed with `_`)
- `no-console` - Warn on console.log, allow console.warn/error
- `jsx-a11y/*` - Accessibility rules for WCAG compliance

### Step 4: Add Format Scripts to package.json

Update `v1/package.json` scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,md}\"",
    "format:check": "prettier --check \"src/**/*.{js,jsx,ts,tsx,json,css,md}\"",
    "type-check": "tsc --noEmit"
  }
}
```

**New Scripts**:
- `format` - Auto-format all files
- `format:check` - Check if files are formatted (for CI)
- `lint:fix` - Auto-fix linting issues

### Step 5: Configure VS Code Auto-Format (Optional but Recommended)

Create `v1/.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "['\"`]([^'\"`]*)['\"`]"]
  ]
}
```

Add `.vscode` to Git (don't ignore it - helps team consistency):

```bash
# .gitignore should NOT have .vscode/settings.json
# This file helps all developers have the same settings
```

### Step 6: Test Prettier Formatting

Create a test file with bad formatting:

```typescript
// v1/src/lib/__test__/format-test.ts
const   test  =   "badly formatted"
const unused = 'this will be caught'
console.log( test )
```

Run format:
```bash
cd v1
npm run format
```

Check file was formatted:
```typescript
// Should now be:
const test = 'badly formatted'
const unused = 'this will be caught'
console.log(test)
```

### Step 7: Test ESLint

Run lint on the test file:
```bash
npm run lint
```

Should show warnings:
- `unused` variable not used
- `console.log` should be avoided

Fix automatically:
```bash
npm run lint:fix
```

### Step 8: Test Tailwind Class Sorting

Create a test component:

```tsx
// v1/src/components/__test__/tailwind-sort-test.tsx
export function TailwindTest() {
  return (
    <div className="bg-primary-500 p-4 text-white rounded-lg hover:bg-primary-600">
      Test
    </div>
  )
}
```

Run format:
```bash
npm run format
```

Classes should be sorted in Tailwind's recommended order:
```tsx
// After formatting (sorted):
<div className="rounded-lg bg-primary-500 p-4 text-white hover:bg-primary-600">
```

Order: Layout → Spacing → Sizing → Colors → Typography → Effects

### Step 9: Format Entire Codebase

```bash
cd v1
npm run format
```

This will format all existing files to match the new standards.

### Step 10: Verify No Linting Errors

```bash
npm run lint
```

Fix any remaining issues:
```bash
npm run lint:fix
```

Goal: 0 errors, minimal warnings.

### Step 11: Add Pre-Commit Hook (Optional for POC)

For production, you'd install Husky:

```bash
npm install -D husky lint-staged
npx husky-init
```

Configure `.husky/pre-commit`:
```bash
#!/bin/sh
npm run lint:fix
npm run format
```

**For POC**: Skip this step. Rely on manual formatting.

## 📚 Resources

**Related Files**:
- `v1/.prettierrc` - Prettier configuration
- `v1/.prettierignore` - Files to skip formatting
- `v1/.eslintrc.json` - ESLint rules
- `v1/.vscode/settings.json` - VS Code auto-format

**Documentation**:
- Prettier: https://prettier.io/docs/en/
- ESLint: https://eslint.org/docs/latest/
- Next.js ESLint: https://nextjs.org/docs/app/building-your-application/configuring/eslint
- Prettier Plugin Tailwind: https://github.com/tailwindlabs/prettier-plugin-tailwindcss

**VS Code Extensions**:
- Prettier - Code formatter (`esbenp.prettier-vscode`)
- ESLint (`dbaeumer.vscode-eslint`)
- Tailwind CSS IntelliSense (`bradlc.vscode-tailwindcss`)

## 🧪 Testing Requirements

**Manual Testing**:

1. **Prettier Format Test**:
   ```bash
   cd v1
   # Create badly formatted file
   echo "const    x   =    'test'" > src/lib/test.ts
   npm run format
   cat src/lib/test.ts
   # Should be: const x = 'test'
   ```
   - [ ] File formatted correctly
   - [ ] Semicolons removed
   - [ ] Single quotes used

2. **ESLint Test**:
   ```bash
   npm run lint
   ```
   - [ ] Runs without crashing
   - [ ] Shows warnings for console.log
   - [ ] Shows errors for unused variables

3. **Tailwind Sort Test**:
   - Create component with unsorted classes
   - Run `npm run format`
   - [ ] Classes sorted correctly
   - [ ] No manual sorting needed

4. **Auto-Format on Save Test** (VS Code):
   - Open any .tsx file
   - Add bad formatting
   - Save file (Ctrl+S / Cmd+S)
   - [ ] File auto-formats
   - [ ] ESLint fixes applied

5. **Build Test**:
   ```bash
   npm run build
   ```
   - [ ] Build succeeds
   - [ ] No linting errors block build
   - [ ] Warnings acceptable

## 🎓 Learning Notes

**Key Concepts**:

1. **ESLint vs Prettier**:
   - **ESLint**: Code quality (catches bugs, enforces patterns)
   - **Prettier**: Code formatting (spacing, quotes, line breaks)
   - Use both together, but no overlap

2. **Auto-Fix Capabilities**:
   - Prettier fixes: All formatting issues automatically
   - ESLint fixes: Some issues (--fix flag), others need manual fix
   - Not all ESLint rules are auto-fixable (requires human judgment)

3. **Configuration Precedence**:
   ```
   .eslintrc.json (project)
   → extends (next/core-web-vitals, prettier)
   → rules (custom overrides)
   ```

4. **Prettier Plugin System**:
   - `prettier-plugin-tailwindcss` runs after Prettier
   - Reorders classes without changing functionality
   - Follows official Tailwind recommendations

**Common Pitfalls**:

⚠️ **ESLint and Prettier conflict**
- Without `eslint-config-prettier`, ESLint and Prettier fight
- Prettier formats, ESLint marks as error
- Solution: Add `prettier` to ESLint extends (disables conflicting rules)

⚠️ **Forgetting to run format before commit**
- Unformatted code in Git history
- Causes merge conflicts (formatting differences)
- Solution: Pre-commit hook or CI check

⚠️ **Too strict linting rules**
- Blocks development with too many errors
- Frustrates developers
- Solution: Start with warnings, upgrade to errors gradually

⚠️ **Ignoring accessibility rules**
- `jsx-a11y/*` rules often disabled for convenience
- Creates inaccessible apps
- Keep these rules, fix issues properly

⚠️ **Not configuring editor**
- Manual formatting wastes time
- Inconsistent code style
- Solution: .vscode/settings.json for team consistency

## 📏 Estimated Effort

**Time**: 45 minutes
- Create Prettier config: 10 minutes
- Update ESLint config: 10 minutes
- VS Code settings: 5 minutes
- Testing and verification: 15 minutes
- Format existing code: 5 minutes

**Complexity**: Low
- Configuration-based setup
- Well-documented tools
- Standard patterns

**Prerequisites**:
- TASK-01-01-01: Next.js initialized
- TASK-01-01-05: Prettier dependency installed
- VS Code (optional but recommended)

## ✔️ Definition of Done

- [ ] `.prettierrc` created with project standards
- [ ] `.prettierignore` excludes build files
- [ ] `.eslintrc.json` updated with custom rules
- [ ] ESLint extends `prettier` (no conflicts)
- [ ] `.vscode/settings.json` configured
- [ ] `npm run format` works
- [ ] `npm run lint` passes
- [ ] Tailwind classes auto-sort
- [ ] Auto-format on save works (VS Code)
- [ ] All existing code formatted

**Commit Message**:
```
chore(tooling): configure ESLint and Prettier

- Add .prettierrc with code style (no semi, single quotes, 100 width)
- Update .eslintrc.json with TypeScript and a11y rules
- Integrate prettier-plugin-tailwindcss for class sorting
- Add VS Code settings for auto-format on save
- Add format and lint:fix scripts

All code formatted consistently across project

Closes TASK-01-01-06
```

## 🤖 AI Agent Instructions

**Pre-Implementation**:

1. **Verify Dependencies**:
   ```bash
   cd v1
   npm list prettier eslint-config-prettier prettier-plugin-tailwindcss
   # Should all be installed from task-01-01-05
   ```

2. **Check Existing Config**:
   ```bash
   cat .eslintrc.json
   # Note current configuration
   ```

**Implementation**:

1. **Create Prettier Files**:
   - Create `.prettierrc` with config from Step 1
   - Create `.prettierignore` with exclusions from Step 2

2. **Update ESLint**:
   - Update `.eslintrc.json` with config from Step 3
   - Ensure `prettier` is last in extends array

3. **Update package.json**:
   - Add format and format:check scripts

4. **Create VS Code Settings**:
   - Create `.vscode/settings.json`
   - Configure auto-format on save

5. **Format Codebase**:
   ```bash
   npm run format
   npm run lint:fix
   ```

**Verification**:

```bash
# All should pass
npm run format:check
npm run lint
npm run type-check
npm run build
```

**Success Criteria**:
- Format script runs without errors
- Lint passes with 0 errors
- Tailwind classes sorted
- Auto-format works in VS Code

## 🔗 Related Tasks

**Depends On**:
- TASK-01-01-01: Next.js initialized
- TASK-01-01-05: Dependencies installed (Prettier, ESLint config)

**Blocks**:
- All development tasks (code quality enforced)

**Can Run in Parallel With**:
- TASK-01-01-07: TypeScript strict mode (independent)
- TASK-01-02-01: Create folder structure (independent)

---

**Status**: 🔵 Not Started
**Assigned To**: (Not assigned)
**Estimated**: 45 minutes
**Actual**: (Not started)

**Application Directory**: `v1/`

**Next**: After completing, proceed to `task-01-01-07-typescript-strict.md`
