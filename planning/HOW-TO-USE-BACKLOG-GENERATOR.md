# How to Use the Backlog Generator

> **Quick Start**: Have IMPLEMENTATION-PLAN.md → Run Backlog Generator → Get /backlog folder with executable tasks

---

## 🚀 Quick Start (2 Minutes)

### Prerequisites

You need an **IMPLEMENTATION-PLAN.md** file. If you don't have one:

1. Create `OBJECTIVE.md` (see `HOW-TO-USE-PLANNING-PROMPT.md`)
2. Run the Planning Agent (use `GENERIC-PLANNING-PROMPT.md`)
3. You'll get `IMPLEMENTATION-PLAN.md`

### Step 1: Verify You Have Implementation Plan

```bash
ls IMPLEMENTATION-PLAN.md
```

Should show a file with structure like:
```
# Implementation Plan: Your Project

## Phase 1: Foundation
### Milestone 1.1: Project Setup
#### Task 1.1.1: Initialize Repository
...
```

### Step 2: Run Backlog Generator

**With Claude Code / Cursor**:
1. Open your project
2. Copy entire `BACKLOG-GENERATOR-PROMPT.md` content
3. Paste as system prompt
4. Ask: "Convert IMPLEMENTATION-PLAN.md into backlog structure"

**With ChatGPT / Claude**:
1. Paste `BACKLOG-GENERATOR-PROMPT.md` content
2. Paste your `IMPLEMENTATION-PLAN.md` content
3. Say: "Generate backlog structure from this plan"

### Step 3: Review Output

You'll get a `/backlog` folder:

```
backlog/
├── README.md                      ← Start here
├── BACKLOG-INDEX.md               ← All tasks listed
├── epic-01-foundation/
│   ├── EPIC.md
│   ├── story-01-project-setup/
│   │   ├── STORY.md
│   │   ├── task-01-initialize-repo.md
│   │   ├── task-02-configure-tools.md
│   │   └── ...
│   └── story-02-ci-cd/
│       └── ...
├── epic-02-backend/
│   └── ...
└── epic-03-frontend/
    └── ...
```

---

## 📊 What You Get

### Epic Files (EPIC.md)

High-level feature overview:

```markdown
# Epic: Core Backend API

**ID**: EPIC-02

**Business Value**:
Enables frontend development. Provides secure API foundation.

**Acceptance Criteria**:
- [ ] Database schema implemented
- [ ] RESTful API for core entities
- [ ] Authentication working
- [ ] 80%+ test coverage

**Stories**: 5
- STORY-02-01: Database Schema
- STORY-02-02: API Framework
- STORY-02-03: Authentication
- STORY-02-04: Core Endpoints
- STORY-02-05: Testing Suite
```

### Story Files (STORY.md)

User story format with details:

```markdown
# User Story: API Framework Setup

**ID**: STORY-02-02

**As a** backend developer,
**I want** a fully configured Express API framework,
**So that** I can build endpoints on a solid foundation.

**Acceptance Criteria**:
- [ ] Server starts on port 3000
- [ ] Middleware pipeline configured
- [ ] Error handling middleware
- [ ] Health check endpoint

**Tasks**: 8
- TASK-02-02-01: Install Express
- TASK-02-02-02: Setup TypeScript
- ...

**Estimated Effort**: 1 week
```

### Task Files (task-NN-name.md)

**Executable prompts for AI agents**:

```markdown
# Task: Implement Error Handling Middleware

**ID**: TASK-02-02-04

## 🎯 Objective
Create centralized error handling middleware.

## 📋 Context
**Why**: Consistent error responses
**Current**: No error handling
**Desired**: All errors caught and logged

## ✅ Acceptance Criteria
- [ ] Catches all errors
- [ ] Logs with stack trace
- [ ] Returns JSON format
- [ ] Dev vs prod behavior
- [ ] Tests passing

## 🔧 Implementation Guide

**Files to Create**:
- src/middleware/errorHandler.ts
- tests/middleware/errorHandler.test.ts

**Step-by-Step**:
1. Create AppError class
2. Create error middleware
3. Register in server.ts
4. Write tests

**Code Example**:
```typescript
export const errorHandler = (err, req, res, next) => {
  // Implementation
};
```

## 🧪 Testing Requirements
[Unit tests, integration tests, manual verification]

## 🤖 AI Agent Instructions
1. Read related files first
2. Search for existing patterns
3. Implement following guide
4. Run tests
5. Verify criteria
```

---

## 🎯 Use Cases

### Use Case 1: Solo Developer

**Scenario**: You're building an app yourself.

**Workflow**:
1. Generate backlog from your implementation plan
2. Open `backlog/README.md` to see overview
3. Start with `epic-01-foundation/story-01-project-setup/task-01-initialize-repo.md`
4. Read task prompt
5. Implement following the guide
6. Check off acceptance criteria
7. Move to next task

**Benefit**: Clear roadmap of exactly what to build next.

### Use Case 2: Team Development

**Scenario**: Team of 3-5 developers.

**Workflow**:
1. Generate backlog
2. Review `BACKLOG-INDEX.md` together
3. Assign stories to team members
4. Each dev works on their story's tasks
5. Daily standup: Reference task IDs
6. Update progress in `README.md`

**Benefit**: Everyone knows what everyone else is working on.

### Use Case 3: AI-Assisted Development

**Scenario**: Using Claude Code/Cursor to implement.

**Workflow**:
1. Generate backlog
2. Point AI agent to first task file
3. AI reads task prompt
4. AI implements following guide
5. AI runs tests and verifies
6. AI marks task complete
7. AI moves to next task
8. Human reviews and approves

**Benefit**: AI has clear, structured instructions for each task.

### Use Case 4: Project Management

**Scenario**: Managing a project in Jira/Linear.

**Workflow**:
1. Generate backlog
2. Import epics to Jira as Epics
3. Import stories as Stories
4. Import tasks as Sub-tasks
5. Track progress in Jira
6. Link back to task prompt files for details

**Benefit**: Structured backlog ready for PM tool.

---

## 💡 Advanced Usage

### Custom Epic/Story Mapping

If your plan has unusual structure:

**In your IMPLEMENTATION-PLAN.md, add**:
```markdown
## Epic Mapping Notes

Phase 1 should become 2 epics:
- Epic 1A: Initial Setup
- Epic 1B: Architecture Design

Phase 4 is too large, split into 3 epics:
- Epic 4A: Core Features
- Epic 4B: Advanced Features
- Epic 4C: Integrations
```

The agent will respect these notes.

### Priority Assignment

Add priorities to tasks in your plan:

```markdown
#### Task 1.1.1: Initialize Repository
**Priority**: P0 (Critical - blocks everything)

#### Task 2.3.5: Add optional analytics
**Priority**: P3 (Nice-to-have)
```

Backlog generator will preserve priorities.

### Effort Estimates

Already in your plan, will be included:

```markdown
#### Task 2.2.3: Error Handling
**Estimated Time**: 4 hours
**Complexity**: Medium

Backlog task will show:
**Effort**: M (4-8 hours)
**Complexity**: Medium
```

---

## 📁 Example Workflow

### Full Example: E-Commerce Project

**Step 1: You have IMPLEMENTATION-PLAN.md**

Your plan has:
- 6 Phases
- 22 Milestones
- 98 Tasks

**Step 2: Run Backlog Generator**

```
User: "Convert IMPLEMENTATION-PLAN.md to backlog structure"

Agent: 📋 Backlog Generator

Reading IMPLEMENTATION-PLAN.md... ✓
- 6 phases identified
- 22 milestones identified
- 98 tasks identified

Converting to Agile structure...
- 6 epics created
- 22 stories created
- 98 task prompts prepared

Generating files... ✓
- Created /backlog folder
- Created 6 epic folders
- Created 22 story folders
- Created 98 task files
- Created README.md
- Created BACKLOG-INDEX.md

Total: 128 files generated
```

**Step 3: Explore Backlog**

```bash
cd backlog
cat README.md
```

You see:
```markdown
# Project Backlog

**Total**: 6 epics, 22 stories, 98 tasks
**Duration**: 18 weeks

## Epic Overview

### EPIC-01: Foundation (2 weeks)
- STORY-01-01: Project Setup (5 tasks)
- STORY-01-02: CI/CD Pipeline (4 tasks)
- STORY-01-03: Architecture Setup (6 tasks)

### EPIC-02: Backend API (4 weeks)
[...]
```

**Step 4: Start First Task**

```bash
cd epic-01-foundation/story-01-project-setup
cat task-01-initialize-repo.md
```

You see complete executable prompt:
```markdown
# Task: Initialize Git Repository

## 🎯 Objective
Create Git repository with proper .gitignore and initial commit.

## 📋 Context
Starting fresh project, need version control.

## ✅ Acceptance Criteria
- [ ] Git repo initialized
- [ ] .gitignore configured for Node.js
- [ ] Initial commit made
- [ ] Main branch protected

## 🔧 Implementation Guide

Step 1: Initialize repo
```bash
git init
```

Step 2: Create .gitignore
```bash
cat > .gitignore << EOF
node_modules/
dist/
.env
.env.local
EOF
```

[... complete guide with all steps ...]
```

**Step 5: Execute & Track**

You implement the task, verify criteria, update README:

```markdown
## Progress

**Epic 01**: 1/15 tasks complete (7%)
- [x] TASK-01-01-01: Initialize repository ✓
- [ ] TASK-01-01-02: Configure package manager
- [ ] TASK-01-01-03: Setup TypeScript
[...]
```

---

## 🔧 Troubleshooting

### Issue: "IMPLEMENTATION-PLAN.md not found"

**Cause**: Plan file doesn't exist or has different name.

**Solution**:
1. Check: `ls *.md | grep -i plan`
2. If found with different name: rename to `IMPLEMENTATION-PLAN.md`
3. If not found: Create plan first using `GENERIC-PLANNING-PROMPT.md`

### Issue: "Backlog is too generic"

**Cause**: Implementation plan lacks technical details.

**Solution**:
1. Update IMPLEMENTATION-PLAN.md with more specifics:
   - Add technology stack details
   - Add code examples in tasks
   - Add testing requirements
   - Add acceptance criteria
2. Re-run backlog generator

**Example**:

❌ **Generic Plan Task**:
```
#### Task 2.3.1: Create API endpoints
Make the API work.
```

✅ **Specific Plan Task**:
```
#### Task 2.3.1: Implement User CRUD Endpoints

**Description**:
Create RESTful endpoints for User entity (GET, POST, PUT, DELETE).

**Acceptance Criteria**:
- [ ] GET /api/v1/users - list users (paginated)
- [ ] POST /api/v1/users - create user (validate email)
- [ ] PUT /api/v1/users/:id - update user
- [ ] DELETE /api/v1/users/:id - soft delete

**Technical Notes**:
- Use Express Router
- Validate with express-validator
- Return 201 for POST, 204 for DELETE
- Include request/response examples
```

Second version generates much better task prompt.

### Issue: "Too many tasks in one file"

**Cause**: Milestone in plan has 20+ tasks.

**Solution**:
Break down milestone in IMPLEMENTATION-PLAN.md:

```markdown
Instead of:
### Milestone 2.1: Complete Backend (25 tasks)

Do:
### Milestone 2.1: Database Layer (8 tasks)
### Milestone 2.2: API Layer (9 tasks)
### Milestone 2.3: Business Logic (8 tasks)
```

### Issue: "Tasks not detailed enough for AI"

**Cause**: Plan tasks are one-liners.

**Solution**:
In IMPLEMENTATION-PLAN.md, expand each task:

```markdown
#### Task X.Y.Z: [Name]

**Description**: [2-3 sentences what to do]

**Acceptance Criteria**:
- [ ] [Specific criterion]
- [ ] [Specific criterion]

**Technical Notes**:
- Use [specific library/pattern]
- Reference [documentation]
- Example: [code snippet]
```

Backlog generator will convert this to full task prompt.

---

## 🎓 Best Practices

### 1. Review Before Starting

Don't blindly execute tasks:

**Do This**:
1. Read entire epic
2. Read all stories in epic
3. Skim all task titles
4. Understand dependencies
5. **Then** start executing

**Why**: Avoid rework, understand big picture.

### 2. Update as You Learn

Plans change. Update backlog:

**When you discover**:
- Task is actually 3 tasks → Split it
- Task no longer needed → Remove it
- New task needed → Add it

**How**:
1. Edit the task file directly
2. Update BACKLOG-INDEX.md
3. Update README.md progress
4. (Optional) Update IMPLEMENTATION-PLAN.md for next project

### 3. Use Task Prompts with AI

**Don't do this**:
```
You: "Build the backend API"
AI: [Confused, asks clarifying questions]
```

**Do this**:
```
You: "Execute task-02-02-04-error-handling.md"
AI: [Reads file]
    [Has complete context]
    [Implements following guide]
    [Runs tests]
    [Reports completion]
```

### 4. Track Progress

Update README.md after each task:

```markdown
**Sprint 1 Progress** (Week 1):
- [x] TASK-01-01-01 ✓ (2h actual vs 2h estimated)
- [x] TASK-01-01-02 ✓ (1.5h actual vs 1h estimated)
- [ ] TASK-01-01-03 (in progress)
```

**Benefits**:
- See actual vs estimated time
- Adjust future estimates
- Team visibility

### 5. Parallel Work

Check BACKLOG-INDEX.md for parallel opportunities:

```markdown
## Week 2 Parallel Work

Team Member A (Backend):
- TASK-02-01-03
- TASK-02-01-04

Team Member B (Frontend):
- TASK-03-01-01  ← Can work simultaneously
- TASK-03-01-02  ← Can work simultaneously

Team Member C (DevOps):
- TASK-04-01-01  ← Can work simultaneously
```

### 6. Link to Original Plan

Keep traceability:

```markdown
## Why are we doing this task?

See: IMPLEMENTATION-PLAN.md, Task 2.2.4
Which comes from: Milestone 2.2 (API Framework)
Which comes from: Phase 2 (Backend Development)
Which achieves: OBJECTIVE.md goal #2 (Secure API)
```

---

## 🔗 Integration with Tools

### Jira / Linear / Asana

**Import Structure**:
```
Epic (Jira Epic) ← EPIC.md
├─ Story (Jira Story) ← STORY.md
│  ├─ Task (Jira Sub-task) ← task-01.md
│  ├─ Task (Jira Sub-task) ← task-02.md
│  └─ Task (Jira Sub-task) ← task-03.md
```

**Link Back**:
In Jira description, add:
```
Full details: /backlog/epic-02-backend/story-01-database/task-01-schema.md
```

### GitHub Projects

Create issues from backlog:

```bash
# For each task file, create GitHub issue
gh issue create \
  --title "TASK-02-02-04: Error Handling" \
  --body-file task-02-02-04-error-handling.md \
  --label "epic:backend,story:api-framework"
```

### Notion / Obsidian

Import markdown files directly:
- Each epic = Notion page
- Each story = Sub-page
- Each task = Database entry

### AI Coding Agents

**Claude Code**:
```
.clauderules or .claude/rules:

When implementing from backlog:
1. Read task file completely
2. Search for existing patterns
3. Follow implementation guide exactly
4. Run tests before marking complete
5. Update backlog/README.md progress
```

**Cursor**:
```
.cursorrules:

Task execution protocol:
- Load task prompt from backlog/
- Implement per guide
- Verify acceptance criteria
- Update progress
```

---

## 📊 Metrics to Track

### Velocity

Track actual vs estimated:

```markdown
## Sprint 1 Velocity

**Planned**: 15 tasks, 60 hours
**Actual**: 12 tasks, 68 hours
**Velocity**: 0.8 (12/15)

**Insights**:
- Underestimated setup tasks (2h → 4h)
- Faster on implementation (8h → 6h)
- Adjust Phase 2 estimates by 1.2x
```

### Quality Metrics

```markdown
## Quality Stats

**Test Coverage**: 85% (target: 80%) ✓
**Bug Count**: 3 (2 fixed, 1 open)
**Code Review**: 100% of tasks reviewed
**Rework**: 2 tasks required changes (87% first-time-right)
```

### Progress

```markdown
## Overall Progress

**By Epic**:
- EPIC-01: 15/15 (100%) ✓
- EPIC-02: 12/28 (43%) 🟡
- EPIC-03: 0/35 (0%) 🔵

**By Week**:
- Week 1: 15 tasks ✓
- Week 2: 12 tasks ✓
- Week 3: 0 tasks (current)

**Projected Completion**: Week 18 (on track)
```

---

## ✅ Quick Checklist

**Before generating backlog**:
- [ ] IMPLEMENTATION-PLAN.md exists
- [ ] Plan has phases, milestones, tasks
- [ ] Tasks have acceptance criteria
- [ ] Technical details included

**After generating backlog**:
- [ ] /backlog folder created
- [ ] README.md reviewed
- [ ] BACKLOG-INDEX.md checked
- [ ] First task is clear

**During execution**:
- [ ] Update progress regularly
- [ ] Track actual vs estimated
- [ ] Update backlog when plan changes
- [ ] Link commits to task IDs

---

## 🎯 Success Patterns

### Pattern 1: AI-First Development

```
1. Generate backlog
2. Point AI agent to task file
3. AI implements autonomously
4. Human reviews and approves
5. Repeat for next task
```

**Works well for**:
- Well-structured tasks
- Standard implementations
- Repetitive work

### Pattern 2: Human-First with AI Assist

```
1. Human reads task
2. Human starts implementation
3. Gets stuck on sub-problem
4. Asks AI for help with specific part
5. Human completes and tests
```

**Works well for**:
- Novel problems
- Architectural decisions
- Learning new tech

### Pattern 3: Pair Programming

```
1. Human reads task aloud
2. AI suggests implementation approach
3. Human evaluates options
4. AI implements chosen approach
5. Human reviews and refines
```

**Works well for**:
- Complex features
- Critical path items
- Teaching/learning

---

## 🚀 Next Steps

**To start using backlog**:

1. **Generate it**:
   ```
   [Copy BACKLOG-GENERATOR-PROMPT.md to AI]
   "Convert IMPLEMENTATION-PLAN.md to backlog"
   ```

2. **Review structure**:
   ```
   cd backlog
   cat README.md
   ```

3. **Start first task**:
   ```
   cat epic-01-foundation/story-01-project-setup/task-01-initialize-repo.md
   ```

4. **Execute and track**:
   - Follow task guide
   - Check acceptance criteria
   - Update progress

5. **Repeat** until project complete!

---

## 📚 Related Resources

**Generation**:
- `GENERIC-PLANNING-PROMPT.md` - Create implementation plan
- `BACKLOG-GENERATOR-PROMPT.md` - Convert plan to backlog

**Execution**:
- Task files in `/backlog` - AI-ready prompts
- `README.md` in backlog - Progress tracking

**Improvement**:
- Update plan based on learnings
- Regenerate backlog with improvements
- Iterate until project complete

---

**Questions?**
- Review `BACKLOG-GENERATOR-PROMPT.md` for full details
- Check example task prompts in `/backlog` folder
- See `GENERIC-PLANNING-PROMPT.md` for planning help

**Ready to convert your plan to backlog?** 🚀
