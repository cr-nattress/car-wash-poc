# How to Use the Generic Planning Prompt

> **Quick Start**: Drop `GENERIC-PLANNING-PROMPT.md` into any repo → Create `OBJECTIVE.md` → Ask AI to create plan

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Create OBJECTIVE.md

In your project directory, create an `OBJECTIVE.md` file:

```markdown
# Objective: [Your Project Name]

## Goal
[What are you building? 1-2 sentences]

## Success Criteria
- [How you'll know it's done - measurable]
- [Second criterion]
- [Third criterion]

## Target Platform
[Web/Mobile/Desktop/Embedded/ML Pipeline/Infrastructure/etc.]

## Constraints
- **Timeline**: [Deadline or duration]
- **Budget**: [If applicable]
- **Team**: [Size and composition]
- **Technical**: [Technology restrictions]

## Tech Stack (If decided)
- [Technology 1]
- [Technology 2]
- [Or "TBD" if not decided yet]
```

**Minimal Example**:
```markdown
# Objective: Build Task Management App

## Goal
Create a web-based task management app for small teams.

## Success Criteria
- Users can create, edit, delete tasks
- Tasks can be assigned to team members
- Real-time updates when tasks change
- Launch by March 2025

## Target Platform
Web (desktop and mobile browsers)

## Constraints
- Timeline: 3 months
- Team: 2 developers (full-stack)
- Budget: Self-funded, minimize costs

## Tech Stack
TBD - open to recommendations
```

### Step 2: Add Research Files (Optional but Recommended)

Add any documentation you have:

```
your-project/
├── OBJECTIVE.md                 ← Required
├── research/                    ← Optional
│   ├── tech-stack-analysis.md
│   ├── competitor-research.md
│   └── architecture-ideas.md
├── docs/                        ← Optional
│   └── requirements.md
└── README.md                    ← Will be found automatically
```

**The more context you provide, the better the plan!**

### Step 3: Use the Planning Prompt

**Option A: With Claude Code / Cursor / Windsurf**

1. Open your project in the AI coding tool
2. Copy the entire `GENERIC-PLANNING-PROMPT.md` content
3. Paste it as a system prompt or project instruction
4. Ask: "Create a detailed implementation plan based on OBJECTIVE.md and all research files in this directory"

**Option B: With ChatGPT / Claude / Any AI Chat**

1. Start a new conversation
2. Paste the entire `GENERIC-PLANNING-PROMPT.md` content
3. Then say: "I have an OBJECTIVE.md file and some research files. I'll paste them now."
4. Paste your OBJECTIVE.md content
5. Paste any research file contents
6. Say: "Create a detailed implementation plan"

**Option C: As a Custom Tool/Agent**

If your AI tool supports custom agents:
1. Create a new agent/tool
2. Use `GENERIC-PLANNING-PROMPT.md` as the system prompt
3. Point it at your project directory
4. Invoke with: "Create implementation plan"

---

## 📋 What You'll Get

A comprehensive implementation plan including:

### Executive Summary
- Project overview
- Success metrics
- Timeline estimate
- Top risks

### Research Synthesis
- Analysis of all files you provided
- Technology decisions
- Constraints summary

### Implementation Plan (Main Content)
- **Phases** (5-8 major phases)
  - Foundation & Setup
  - Core Development
  - Feature Implementation
  - Testing & QA
  - Deployment
  - etc.

- **Milestones** (2-5 per phase)
  - Specific deliverables
  - Time estimates
  - Dependencies

- **Tasks** (5-15 per milestone)
  - Detailed action items
  - Acceptance criteria
  - Time estimates (realistic, with buffers)

### Dependency Map
- Critical path (minimum project duration)
- Parallel work opportunities
- Bottlenecks to watch

### Timeline
- Gantt-style schedule
- Resource allocation
- Budget estimate (if enough info)

### Risk Management
- 10-20 identified risks
- Mitigation strategies
- Contingency plans

### Quality Gates
- Phase exit criteria
- Testing strategy
- Performance targets

---

## 🎯 Examples by Project Type

### Web Application

**OBJECTIVE.md**:
```markdown
# Objective: Social Media Dashboard

## Goal
Build a dashboard that aggregates social media metrics from Twitter, Facebook, Instagram.

## Success Criteria
- Display combined metrics in real-time
- Historical data charts (30 days)
- Export reports to PDF
- Works on desktop and mobile

## Target Platform
Web Application (SPA)

## Constraints
- Timeline: 8 weeks
- Team: 1 full-stack developer (you)
- Budget: $500/month for hosting

## Tech Stack Preferences
- Frontend: React or Vue (your choice)
- Backend: Node.js or Python
- Database: PostgreSQL
```

**Plan Output**: 60-page plan with 7 phases, 25 milestones, ~120 tasks, 6-8 week timeline with buffers.

---

### Mobile App

**OBJECTIVE.md**:
```markdown
# Objective: Fitness Tracking App

## Goal
iOS and Android app for tracking workouts and nutrition.

## Success Criteria
- Users can log workouts and meals
- Progress charts and statistics
- Offline mode (sync when online)
- App store ready by June 2025

## Target Platform
Mobile (iOS + Android)

## Constraints
- Timeline: 4 months
- Team: 2 developers (1 iOS, 1 Android) + 1 designer
- Must work offline

## Tech Stack
- Option 1: React Native (cross-platform)
- Option 2: Native (Swift + Kotlin)
- Backend: Firebase or custom API (TBD)
```

**Plan Output**: 70-page plan addressing cross-platform development, app store submission process, offline sync complexity.

---

### ML Pipeline

**OBJECTIVE.md**:
```markdown
# Objective: Customer Churn Prediction

## Goal
Build ML pipeline to predict which customers will churn in next 30 days.

## Success Criteria
- Model accuracy >85%
- Daily predictions for all active customers
- Alerts sent to sales team for high-risk customers
- Retrain model weekly with new data

## Target Platform
ML Pipeline (batch predictions)

## Constraints
- Timeline: 10 weeks
- Team: 2 ML engineers + 1 data engineer
- Data: 5 million customer records
- Must integrate with existing Salesforce

## Tech Stack Preferences
- Python (required)
- ML Framework: Scikit-learn or XGBoost
- Orchestration: Airflow or Prefect
- Cloud: AWS (company standard)
```

**Plan Output**: 80-page plan covering data pipeline, feature engineering, model training, deployment, monitoring, A/B testing.

---

### Infrastructure Project

**OBJECTIVE.md**:
```markdown
# Objective: Kubernetes Migration

## Goal
Migrate 20 microservices from EC2 instances to Kubernetes.

## Success Criteria
- All services running on k8s
- Zero downtime migration
- Cost reduced by 30%
- Auto-scaling working

## Target Platform
Infrastructure (Kubernetes on AWS EKS)

## Constraints
- Timeline: 12 weeks
- Team: 3 DevOps engineers
- Must maintain 99.9% uptime during migration
- Services are in production serving customers

## Tech Stack
- Kubernetes (AWS EKS)
- Terraform for IaC
- Helm for deployments
- Prometheus + Grafana for monitoring
```

**Plan Output**: 90-page plan with phased migration strategy, rollback procedures, cost analysis, monitoring setup.

---

## 💡 Tips for Better Plans

### 1. Be Specific in OBJECTIVE.md

❌ **Vague**:
```markdown
## Goal
Make a website
```

✅ **Specific**:
```markdown
## Goal
Create a portfolio website showcasing 20 design projects with:
- Project gallery with filtering
- Case study pages with images and text
- Contact form
- Blog for design articles
```

### 2. Define Measurable Success Criteria

❌ **Not Measurable**:
```markdown
## Success Criteria
- Website looks good
- Users are happy
```

✅ **Measurable**:
```markdown
## Success Criteria
- Lighthouse score >90
- Page load time <2 seconds
- Contact form has <5% spam
- Mobile responsive (works on iPhone 12 and up)
```

### 3. Include Real Constraints

❌ **No Constraints**:
```markdown
## Constraints
None
```

✅ **Real Constraints**:
```markdown
## Constraints
- Timeline: Must launch before conference (June 15, 2025)
- Team: Solo developer (me), part-time (10 hours/week)
- Budget: $50/month max for hosting
- Technical: Must work with existing WordPress blog
```

### 4. Add Research Files for Better Plans

Create additional files:

**tech-stack-research.md**:
```markdown
# Technology Stack Analysis

## Frontend Frameworks Comparison
I researched React vs Vue vs Svelte...

## Decision
Going with Vue 3 because:
- Smaller learning curve for team
- Better documentation
- Good TypeScript support
```

**architecture.md**:
```markdown
# Architecture Decision

## Pattern: Microservices vs Monolith

After research, choosing **Modular Monolith**:
- Team is small (2 devs)
- Can split to microservices later if needed
- Simpler deployment initially
```

The planning agent will incorporate this research into the plan!

### 5. Update Plan as You Learn

Plans should evolve:

1. **Week 0**: Initial plan based on research
2. **Week 2**: Update after completing Phase 1 (real velocity known)
3. **Week 8**: Update after encountering unexpected complexity
4. **Week 16**: Final plan adjustments before launch

To update:
- Add to OBJECTIVE.md: "Update: We learned X, adjust plan for Y"
- Re-run planning agent
- It will incorporate learnings into updated plan

---

## ⚙️ Advanced Usage

### Custom Plan Granularity

**High-Level Plan** (For executives):
```
In OBJECTIVE.md add:
## Plan Detail Level
High-level only: Phases and major milestones, no detailed tasks
```

**Medium Plan** (For team leads):
```
## Plan Detail Level
Medium: Phases, milestones, and task groups
```

**Full Detail** (For developers):
```
## Plan Detail Level
Full: All tasks with acceptance criteria and time estimates (default)
```

### Technology Recommendations

If you want the agent to suggest technologies:

```markdown
## Tech Stack
TBD - Please recommend based on:
- Team knows JavaScript well
- Budget is limited (<$100/month)
- Need to launch quickly (8 weeks)
- Must handle 10k users
```

The agent will analyze and recommend appropriate tech stack.

### Risk-Focused Planning

If you have specific concerns:

```markdown
## Known Risks
- This project failed twice before due to performance issues
- Third-party API we depend on is unreliable
- Team has never built mobile apps before

Please create a plan that addresses these risks.
```

The agent will add extra risk analysis and mitigation specific to your concerns.

---

## 🔧 Troubleshooting

### "Plan is too generic"

**Problem**: Plan lacks specific technical details.

**Solution**: Add more research files:
- Technology choices (with rationale)
- Architecture diagrams or descriptions
- API specifications
- Database schemas

### "Estimates seem way off"

**Problem**: Time estimates don't match your expectations.

**Cause**: Agent doesn't know your team's velocity.

**Solution**:
1. After completing Phase 1, note actual time vs estimated
2. Update OBJECTIVE.md: "Team velocity is 1.5x faster than estimates"
3. Regenerate plan with adjustment

Or specify in OBJECTIVE.md:
```markdown
## Team Experience
- Very experienced with [Technology X] (reduce estimates)
- Never used [Technology Y] before (increase estimates)
```

### "Plan doesn't address my specific requirement"

**Problem**: Plan misses something important.

**Solution**: Make it explicit in OBJECTIVE.md:
```markdown
## Must Include
- Real-time notifications (WebSocket/SSE)
- Internationalization (English, Spanish, French)
- WCAG 2.1 AA accessibility
```

---

## 📁 File Organization

Recommended structure for planning:

```
your-project/
├── OBJECTIVE.md                      ← Required
├── IMPLEMENTATION-PLAN.md            ← Generated by agent
│
├── planning/                         ← Optional research folder
│   ├── tech-stack-analysis.md
│   ├── architecture-decisions.md
│   ├── competitor-research.md
│   └── user-research.md
│
├── docs/                             ← Optional documentation
│   ├── requirements.md
│   └── api-spec.md
│
└── README.md                         ← Will be discovered automatically
```

Or simpler:

```
your-project/
├── OBJECTIVE.md
└── [your research files].md
```

The agent will find and read everything!

---

## 🎓 Learning from Plans

### Use Plans as Learning Tools

Even if you don't follow the plan exactly, it's valuable for:

1. **Seeing Dependencies**: What needs to happen in what order
2. **Realistic Timelines**: How long things actually take (with buffers)
3. **Risk Awareness**: What could go wrong and how to prepare
4. **Best Practices**: Quality gates and testing strategies

### Iterate and Improve

1. Generate initial plan
2. Review with team
3. Adjust OBJECTIVE.md based on discussion
4. Regenerate plan
5. Compare versions

You'll get better at writing OBJECTIVE.md files over time!

---

## ✅ Checklist Before Generating Plan

- [ ] OBJECTIVE.md exists with clear goal
- [ ] Success criteria are measurable
- [ ] Target platform specified (web/mobile/desktop/etc.)
- [ ] Constraints documented (timeline, team, budget)
- [ ] Tech stack specified or marked as "TBD"
- [ ] Optional: Research files added for better context
- [ ] Optional: Known risks documented

**Ready?** → Ask the AI: "Create a detailed implementation plan based on OBJECTIVE.md and all research files in this directory"

---

## 📚 Additional Resources

**Example OBJECTIVE.md files**:
- See `/examples/` folder (if available)
- Or use the templates in this document

**Professional Prompt Analysis**:
- `PROMPT-UPGRADE-GUIDELINES.md` - How this prompt was built
- `planning-agent-prompt.md` - Older version (more technical)

**Related Prompts**:
- Vue 3 Production Guide (for Vue projects)
- .NET API Guidelines (for .NET projects)
- Azure Storage Guidelines (for Azure projects)

---

**Questions?**
- Review the `GENERIC-PLANNING-PROMPT.md` for full details
- Check examples in this document
- Try with a simple project first to understand output

**Ready to plan your project?** 🚀
