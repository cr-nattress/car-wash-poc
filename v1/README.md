# Car Wash Website POC - v1 Application

This directory contains the Next.js application code for the car wash website POC.

## Quick Start

```bash
# From project root
cd v1

# Install dependencies (after Next.js initialization)
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

## About This Directory

**Purpose**: All application source code lives here

**Technology**: Next.js 14+ with App Router, React 18+, TypeScript 5+, Tailwind CSS 3+

**Structure** (after initialization):
```
v1/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── lib/              # Utilities and helpers
│   └── data/             # Mock data (Markdown files)
├── public/               # Static assets
├── node_modules/         # Dependencies
├── package.json          # Project manifest
├── tsconfig.json         # TypeScript config
├── tailwind.config.ts    # Tailwind config (with brand colors)
└── next.config.js        # Next.js config
```

## Brand Colors

See `../planning/BRAND-COLORS.md` for complete specifications.

**Primary Colors** (from actual facility):
- Cyan Blue: `#00A3E0` (building exterior)
- Orange: `#FF6600` (OPEN 24/7 signage)
- Yellow: `#FFD700` (equipment)
- White: `#FFFFFF` (clean backgrounds)

## Development Workflow

1. **Initialize** (First time only):
   ```bash
   cd v1
   npx create-next-app@latest . --typescript --tailwind --app --src-dir --eslint
   ```

2. **Develop**:
   ```bash
   npm run dev
   ```

3. **Build**:
   ```bash
   npm run build
   ```

4. **Deploy** (Netlify):
   - Push to GitHub
   - Netlify auto-deploys from main branch
   - Build command: `npm run build`
   - Publish directory: `.next`

## Tasks

All development tasks are in `../backlog/`

**Start with**: `../backlog/epic-01-foundation/story-01-development-environment/task-01-01-01-initialize-nextjs.md`

## References

- Implementation Plan: `../planning/IMPLEMENTATION-PLAN.md`
- Brand Colors: `../planning/BRAND-COLORS.md`
- Backlog: `../backlog/README.md`
- Project Objective: `../planning/OBJECTIVE.md`
