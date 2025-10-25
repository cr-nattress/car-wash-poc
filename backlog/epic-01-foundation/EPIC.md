# Epic: Foundation & Setup

**ID**: EPIC-01

**Source**: Phase 1 from planning/IMPLEMENTATION-PLAN.md

---

## Description

Establish the foundational infrastructure for the car wash website including Next.js project setup, Tailwind CSS configuration with brand colors, mock data structure, and core layout components. This epic delivers the development environment and base components that all other features will build upon.

## Business Value

Without a solid foundation, all subsequent development will be slowed or blocked. This epic ensures:
- Development environment is consistent and optimized
- Brand colors (Cyan Blue `#00A3E0`, Orange `#FF6600`) are correctly implemented from day 1
- Mock data structure supports rapid prototyping
- Core layout components provide reusable UI patterns

**Critical Path**: All other epics depend on EPIC-01 completion.

## Acceptance Criteria

- [ ] Next.js 14+ project initialized with TypeScript
- [ ] Tailwind CSS configured with exact brand colors from facility photos
- [ ] Project deploys successfully to Netlify
- [ ] Mock data files (Markdown) load correctly with TypeScript types
- [ ] Header and Footer components render on all pages
- [ ] Reusable UI components (Button, Card, Input) exist
- [ ] Development environment documented in README

## Estimated Duration

**Week 1 (Days 1-5)**
- Total: 25 tasks
- Estimated effort: 40-50 hours

## Dependencies

**Requires**:
- None (starting point)

**Blocks**:
- EPIC-02 (Core Pages)
- EPIC-03 (Mobile Optimization)
- EPIC-04 (AI Integration)
- All other epics

## Stories in This Epic

### STORY-01-01: Development Environment Setup
**Duration**: Day 1 (6-8 hours)
**Tasks**: 7
**Goal**: Working Next.js + Tailwind environment deploying to Netlify

- TASK-01-01-01: Initialize Next.js project with TypeScript
- TASK-01-01-02: Configure Tailwind CSS with brand colors
- TASK-01-01-03: Set up Git repository and GitHub connection
- TASK-01-01-04: Configure Netlify deployment pipeline
- TASK-01-01-05: Install essential dependencies
- TASK-01-01-06: Configure ESLint and Prettier
- TASK-01-01-07: Set up TypeScript strict mode

### STORY-01-02: Project Structure & Mock Data
**Duration**: Day 2 (6-8 hours)
**Tasks**: 8
**Goal**: Complete folder structure with type-safe mock data loading

- TASK-01-02-01: Create folder structure
- TASK-01-02-02: Create TypeScript types for all data
- TASK-01-02-03: Create locations.md with 2 locations
- TASK-01-02-04: Create pricing.md with 3 tiers
- TASK-01-02-05: Create services/testimonials/faqs.md
- TASK-01-02-06: Create data loading functions (gray-matter)
- TASK-01-02-07: Test data loading with console output
- TASK-01-02-08: Document mock data structure

### STORY-01-03: Core Layout Components
**Duration**: Days 3-4 (12-14 hours)
**Tasks**: 10
**Goal**: Reusable layout and UI components with brand colors

- TASK-01-03-01: Create root layout (app/layout.tsx)
- TASK-01-03-02: Build mobile-first header with brand blue
- TASK-01-03-03: Build footer with darker brand blue
- TASK-01-03-04: Create Button component (orange primary CTA)
- TASK-01-03-05: Create Card component
- TASK-01-03-06: Create Input component
- TASK-01-03-07: Create Badge component (yellow highlight)
- TASK-01-03-08: Create Container component
- TASK-01-03-09: Test all components render correctly
- TASK-01-03-10: Deploy to Netlify and verify

## Technical Notes

### Key Technologies
- Next.js 14+ with App Router (not Pages Router)
- TypeScript with strict mode enabled
- Tailwind CSS with custom theme
- gray-matter for parsing Markdown frontmatter
- Netlify for hosting and deployment

### Brand Colors (from actual facility)
```typescript
colors: {
  primary: {
    500: '#00a3e0',  // Cyan blue from building exterior
    700: '#006186',  // Darker for footer
  },
  accent: {
    500: '#ff6600',  // Orange from OPEN 24/7 signage
  },
  yellow: {
    500: '#ffd700',  // Yellow from equipment
  },
}
```

See `planning/BRAND-COLORS.md` for complete specifications.

### Folder Structure
```
src/
├── app/
│   ├── (routes)/
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   ├── layout/
│   └── features/
├── lib/
│   ├── data.ts
│   ├── utils.ts
│   └── types.ts
└── data/
    ├── locations.md
    ├── pricing.md
    ├── services.md
    ├── testimonials.md
    └── faqs.md
```

## Definition of Done

When EPIC-01 is complete:

- [ ] Development environment fully functional
- [ ] Site deploys to Netlify automatically on git push
- [ ] All mock data files created and loading
- [ ] Header with mobile menu and brand colors
- [ ] Footer with location info and brand colors
- [ ] Reusable UI components documented
- [ ] TypeScript compiling with zero errors
- [ ] Linter passing with zero warnings
- [ ] README.md updated with setup instructions

## Progress Tracking

**Status**: 🔵 Not Started

**Completed Stories**: 0/3
- [ ] STORY-01-01: Development Environment
- [ ] STORY-01-02: Project Structure & Mock Data
- [ ] STORY-01-03: Core Layout Components

**Completed Tasks**: 0/25

**Estimated vs Actual**:
- Estimated: 40-50 hours
- Actual: TBD

## References

- **Implementation Plan**: planning/IMPLEMENTATION-PLAN.md (Phase 1)
- **Brand Colors**: planning/BRAND-COLORS.md
- **Objective**: planning/OBJECTIVE.md
- **Technology Decisions**: planning/IMPLEMENTATION-PLAN.md (Technology Stack section)

---

**Next Steps**: Start with STORY-01-01 (Development Environment Setup)

**First Task**: `story-01-development-environment/task-01-01-01-initialize-nextjs.md`
