# Task: Setup Git Repository and Connect to GitHub

**ID**: TASK-01-01-03

**Story**: STORY-01-01 (Development Environment)

**Epic**: EPIC-01 (Foundation & Setup)

**Source**: Task from Milestone 1.1 in planning/IMPLEMENTATION-PLAN.md

---

## 🎯 Objective

Initialize Git repository for version control, create comprehensive `.gitignore`, and push initial codebase to GitHub remote.

## 📋 Context

**Why This Task**:
Version control is essential for tracking changes, collaboration, and deployment. Git provides history, backup, and enables Netlify auto-deployment on push.

**Current State**:
- Git repository initialized (done previously)
- Remote origin set to https://github.com/cr-nattress/car-wash-poc.git
- No initial commit yet

**Desired State**:
- Comprehensive `.gitignore` file excluding sensitive data
- Initial commit with all foundation files
- Code pushed to GitHub main branch
- Repository ready for Netlify deployment

## ✅ Acceptance Criteria

- [ ] `.gitignore` file includes node_modules, .env.local, .next, build artifacts
- [ ] Git status shows only tracked files (no node_modules or build files)
- [ ] Initial commit created with descriptive message
- [ ] Code successfully pushed to GitHub remote
- [ ] GitHub repository shows all files online
- [ ] No sensitive data (API keys, .env files) committed
- [ ] README.md exists in v1/ directory
- [ ] Commit history is clean

## 🔧 Implementation Guide

**Application Location**: `v1/`

### Step 1: Verify Git Initialization

```bash
cd v1
git status
# Should show: "On branch main" or "On branch master"
```

If not initialized:
```bash
git init
```

### Step 2: Create Comprehensive .gitignore

Create `v1/.gitignore`:

```gitignore
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env.local
.env.development.local
.env.test.local
.env.production.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# IDE files
.vscode/
.idea/
*.swp
*.swo
*~

# OS files
Thumbs.db

# test files
__test__/
*.test.ts.snap
```

### Step 3: Verify Nothing Sensitive is Staged

```bash
cd v1
git status
# Check that no .env files or API keys are shown
```

If `.env.local` appears, ensure it's in `.gitignore`:
```bash
echo "# Ensure this exists" >> .gitignore
echo ".env.local" >> .gitignore
```

### Step 4: Create README for v1 Directory

Verify `v1/README.md` exists (should already exist from previous setup). If not, create it:

```markdown
# Car Wash Website POC - v1 Application

This directory contains the Next.js application code.

## Quick Start

\`\`\`bash
npm install
npm run dev
\`\`\`

## Technology Stack

- Next.js 14+ (App Router)
- React 18+
- TypeScript 5+
- Tailwind CSS 3+

## Brand Colors

See `../planning/BRAND-COLORS.md` for complete specifications.

- Primary Blue: #00A3E0
- Accent Orange: #FF6600
- Yellow: #FFD700

## Development

\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Run type checking
npm run type-check

# Run linting
npm run lint
\`\`\`

## Deployment

- Platform: Netlify
- Auto-deploys on push to main branch
- Environment variables set in Netlify dashboard
```

### Step 5: Stage All Files for Initial Commit

```bash
cd v1
git add .
```

### Step 6: Verify What Will Be Committed

```bash
git status
# Review the list - should NOT include:
# - node_modules/
# - .next/
# - .env.local
# - Any build artifacts
```

If unwanted files appear:
```bash
git reset HEAD <file>  # Unstage specific file
# Update .gitignore
git add .gitignore
```

### Step 7: Create Initial Commit

```bash
git commit -m "$(cat <<'EOF'
chore(init): initial project setup

- Initialize Next.js 14 with TypeScript and App Router
- Configure Tailwind CSS with brand colors (#00A3E0, #FF6600, #FFD700)
- Set up project structure (src/app, src/components, src/lib)
- Add comprehensive .gitignore
- Configure development environment

Project: Car Wash POC
Application Location: v1/
Brand colors extracted from facility images
EOF
)"
```

### Step 8: Verify Remote is Set

```bash
git remote -v
# Should show:
# origin  https://github.com/cr-nattress/car-wash-poc.git (fetch)
# origin  https://github.com/cr-nattress/car-wash-poc.git (push)
```

If not set:
```bash
git remote add origin https://github.com/cr-nattress/car-wash-poc.git
```

### Step 9: Push to GitHub

```bash
git push -u origin main
```

If branch is `master` instead of `main`:
```bash
git branch -M main
git push -u origin main
```

### Step 10: Verify on GitHub

Visit https://github.com/cr-nattress/car-wash-poc

Check:
- [ ] All files visible in repository
- [ ] No node_modules directory
- [ ] No .env files
- [ ] README.md displays correctly
- [ ] Commit message visible

## 📚 Resources

**Related Files**:
- `v1/.gitignore` - Files to exclude from version control
- `v1/README.md` - Project documentation

**Documentation**:
- Git Documentation: https://git-scm.com/doc
- GitHub Guides: https://guides.github.com/
- .gitignore Templates: https://github.com/github/gitignore

**Best Practices**:
- Never commit sensitive data (API keys, passwords, .env files)
- Write descriptive commit messages
- Commit frequently with logical groupings
- Review `git status` before committing

## 🧪 Testing Requirements

**Manual Testing**:

1. **Verify .gitignore Works**:
   ```bash
   cd v1
   # Create a test .env.local file
   echo "TEST_KEY=12345" > .env.local
   git status
   # Should NOT show .env.local as untracked
   ```

2. **Check Commit Contents**:
   ```bash
   git log --oneline
   # Should show initial commit

   git show HEAD --name-only
   # Review list of committed files
   # Ensure no sensitive or unnecessary files
   ```

3. **Verify GitHub Push**:
   ```bash
   git log origin/main
   # Should match local commits
   ```

4. **Test Clone** (Optional):
   ```bash
   cd /tmp
   git clone https://github.com/cr-nattress/car-wash-poc.git test-clone
   cd test-clone/v1
   ls -la
   # Should show all source files but no node_modules
   ```

## 🎓 Learning Notes

**Key Concepts**:

1. **Version Control Benefits**:
   - Track every change with full history
   - Revert mistakes easily
   - Collaborate with team members
   - Backup code in the cloud

2. **.gitignore Importance**:
   - Prevents committing large files (node_modules = 100+ MB)
   - Protects sensitive data (API keys in .env)
   - Keeps repository clean and focused
   - Reduces clone/pull times

3. **Commit Message Format**:
   - Type: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`
   - Scope: `(init)`, `(config)`, `(api)`, `(ui)`
   - Description: Clear, imperative mood ("add" not "added")
   - Body: Optional details and context

4. **Git Workflow**:
   ```
   Edit files → git add → git commit → git push
   ```

**Common Pitfalls**:

⚠️ **Committing node_modules**
- NEVER commit node_modules folder (huge size, not needed)
- Always ensure `node_modules` in .gitignore
- Use `npm install` to recreate dependencies

⚠️ **Committing .env files**
- .env files contain secrets (API keys, passwords)
- Use .env.example with placeholder values instead
- Set actual values in Netlify dashboard

⚠️ **Vague commit messages**
- Bad: "update stuff"
- Good: "feat(hero): add hero section with brand colors"
- Commit message explains WHAT and WHY

⚠️ **Too many changes in one commit**
- Commit logical units of work
- Makes history clear and reverting easier
- Example: Separate commits for "add Tailwind" and "create header"

⚠️ **Not reviewing before commit**
- Always run `git status` and `git diff`
- Check what you're about to commit
- Catch accidental files before they're committed

## 📏 Estimated Effort

**Time**: 30 minutes
- Create .gitignore: 10 minutes
- Initial commit: 5 minutes
- Push to GitHub: 5 minutes
- Verification: 10 minutes

**Complexity**: Low
- Standard Git workflow
- Well-established patterns
- Straightforward process

**Prerequisites**:
- TASK-01-01-01: Next.js initialized
- GitHub repository created
- Git installed on system

## ✔️ Definition of Done

- [ ] `.gitignore` created with comprehensive exclusions
- [ ] No sensitive data in tracked files
- [ ] No node_modules or build files tracked
- [ ] Initial commit created with descriptive message
- [ ] Code pushed to GitHub successfully
- [ ] Repository visible at https://github.com/cr-nattress/car-wash-poc
- [ ] README.md displays on GitHub
- [ ] Clean git status (no uncommitted changes)

**Commit Message**:
```
chore(git): configure Git repository and push to GitHub

- Create comprehensive .gitignore (excludes node_modules, .env, builds)
- Verify no sensitive data committed
- Push initial codebase to GitHub
- Repository: https://github.com/cr-nattress/car-wash-poc

Ready for Netlify deployment integration

Closes TASK-01-01-03
```

## 🤖 AI Agent Instructions

**Pre-Implementation**:

1. **Verify Git Installed**:
   ```bash
   git --version
   # Should show Git version 2.x
   ```

2. **Check Current Status**:
   ```bash
   cd v1
   git status
   # Note current branch and status
   ```

**Implementation**:

1. **Create .gitignore**:
   - Copy the comprehensive .gitignore from Step 2
   - Save to `v1/.gitignore`

2. **Verify Exclusions**:
   ```bash
   git status
   # Ensure node_modules doesn't appear
   ```

3. **Stage and Commit**:
   ```bash
   git add .
   git commit -m "chore(init): initial project setup with Next.js and Tailwind"
   ```

4. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```

**Verification**:

```bash
# Check remote matches local
git log origin/main --oneline

# Verify no sensitive files
git ls-files | grep -E '\.env|node_modules'
# Should return nothing
```

**Success Criteria**:
- GitHub shows all files
- No .env or node_modules committed
- Clean commit history
- Remote and local in sync

## 🔗 Related Tasks

**Depends On**:
- TASK-01-01-01: Next.js initialized
- GitHub repository created (prerequisite)

**Blocks**:
- TASK-01-01-04: Netlify deployment (needs GitHub repo)

**Can Run in Parallel With**:
- TASK-01-01-02: Tailwind configuration (independent)
- TASK-01-01-05: Install dependencies (independent)

---

**Status**: 🔵 Not Started
**Assigned To**: (Not assigned)
**Estimated**: 30 minutes
**Actual**: (Not started)

**Application Directory**: `v1/`

**Next**: After completing, proceed to `task-01-01-04-netlify-deploy.md`
