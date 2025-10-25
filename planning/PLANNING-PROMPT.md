# Car Wash Website Implementation Planning Prompt

> Use this prompt with Claude Code or your AI assistant to generate a detailed implementation plan for the car wash website POC.

---

## How to Use This Prompt

**Step 1**: Ensure you have reviewed all planning documents:
- `OBJECTIVE.md` - Project objectives and technical requirements
- `WEB.md` - Industry analysis and best practices
- `AI.md` - 50 AI feature ideas with implementation guidance
- `COMPETITORS.md` - Market analysis and competitive positioning

**Step 2**: Copy the Planning Agent Instructions below and paste into your AI assistant

**Step 3**: Ask: "Create a detailed implementation plan for the car wash website POC"

---

## Planning Agent Instructions

You are an expert technical project planner specializing in modern web applications, AI integration, and Next.js development. Your task is to create a comprehensive implementation plan for a car wash website POC.

### Context Documents to Analyze

Read and synthesize these planning documents located in the `planning/` folder:

1. **OBJECTIVE.md** - Core project requirements
   - Technical stack: Next.js, React, TypeScript, Tailwind CSS
   - Deployment: Netlify with serverless functions
   - Mobile-first approach
   - AI feature integration
   - Mock data (Markdown files) for POC

2. **WEB.md** - Industry research and insights
   - Membership models drive 70% of revenue
   - Essential features: mobile optimization, transparent pricing, location finders
   - Technology trends: AI chatbots, LPR, weather-based marketing
   - Common gaps: before/after galleries, video content, live chat
   - ROI data and best practices

3. **AI.md** - 50 AI feature ideas
   - Prioritized by implementation complexity and ROI
   - Phase 1 (Immediate): AI Chatbot, Email Campaigns, Review Replies
   - Phase 2-4: Progressive feature rollout
   - Technology stack requirements for each feature

4. **COMPETITORS.md** - Market analysis
   - 20+ competitors in NEPA market
   - Competitive positioning matrix
   - Technology adoption patterns
   - Pricing tiers ($20-42/month memberships)
   - Geographic opportunities

### Planning Requirements

Generate a **detailed, actionable implementation plan** with the following structure:

---

## 1. Executive Summary (1-2 pages)

**Project Overview**
- Brief description of what we're building
- Target audience and market positioning
- Key success metrics

**Timeline Estimate**
- Total project duration
- Major phase milestones
- Critical path items

**Resource Requirements**
- Team composition needed
- Key skills required
- External dependencies (APIs, services)

**Top 5 Risks**
- List with mitigation strategies
- Probability and impact assessment

**Success Criteria**
- How we'll measure completion
- Quality gates
- Performance targets

---

## 2. Research Synthesis (2-3 pages)

**Industry Insights from WEB.md**
- Key findings that inform our design decisions
- Must-have features based on 100% of successful sites
- Technology choices validated by industry data
- ROI justifications for major decisions

**AI Integration Strategy from AI.md**
- Phase 1 features we'll implement in POC
- Technology stack for AI features
- Cost estimates and ROI projections
- Future phases roadmap

**Competitive Differentiation from COMPETITORS.md**
- How we'll exceed competitor capabilities
- Technology advantages we'll leverage
- Pricing strategy informed by market data
- Geographic/market opportunities

**Technology Decisions**
- Next.js architecture approach
- State management strategy
- Styling approach with Tailwind
- Mock data structure
- Netlify Functions implementation for AI
- Third-party integrations

---

## 3. Implementation Plan (Main Content)

### Phase 1: Foundation & Setup (Week 1)

**Milestone 1.1: Development Environment**
- Task: Initialize Next.js project with TypeScript
  - Acceptance: `npm run dev` starts successfully
  - Time: 1 hour
  - Dependencies: None

- Task: Configure Tailwind CSS with custom theme
  - Acceptance: Custom colors and fonts working
  - Time: 2 hours
  - Dependencies: Next.js project initialized

- Task: Set up Netlify deployment pipeline
  - Acceptance: Auto-deploy from git push working
  - Time: 2 hours
  - Dependencies: Project initialized

[Continue with detailed tasks for each milestone]

**Milestone 1.2: Project Structure**
- Task: Create folder structure (components, pages, styles, lib, data)
  - Acceptance: Standard Next.js 13+ app directory structure
  - Time: 1 hour

- Task: Set up mock data structure in Markdown files
  - Acceptance: Location data, pricing tiers, services in MD format
  - Time: 3 hours

[Continue...]

### Phase 2: Core Pages & Navigation (Week 1-2)

**Milestone 2.1: Layout & Navigation**
- Homepage hero section with CTA
- Mobile-first responsive navigation
- Footer with location info
- Common layout components

**Milestone 2.2: Essential Pages**
- Homepage with value proposition
- Services page with pricing tiers
- Locations page with map integration
- About/Contact pages

[Continue with detailed tasks...]

### Phase 3: Mobile Optimization & Responsive Design (Week 2-3)

**Milestone 3.1: Mobile-First Components**
- Touch-friendly navigation
- Mobile-optimized forms
- Swipe gestures for galleries
- Performance optimization for mobile

**Milestone 3.2: Performance Tuning**
- Image optimization (Next.js Image component)
- Code splitting
- Lazy loading
- Lighthouse score > 90

[Continue...]

### Phase 4: AI Feature Integration (Week 3-4)

**Milestone 4.1: AI Chatbot (Phase 1 Priority)**
- Set up Netlify Function for chatbot
- Integrate OpenAI or Claude API
- Create chat UI component
- Handle FAQ automation

**Milestone 4.2: Dynamic Content Generation**
- Weather-based messaging
- Personalized recommendations
- Review reply generation

[Continue...]

### Phase 5: Enhanced Features (Week 4-5)

**Milestone 5.1: Membership System (Mock)**
- Membership tier comparison table
- Mock signup flow
- Member benefits showcase
- Family plan presentation

**Milestone 5.2: Interactive Elements**
- Before/after image gallery
- Virtual tour (if applicable)
- Customer testimonials
- Service selector tool

[Continue...]

### Phase 6: Content & Polish (Week 5-6)

**Milestone 6.1: Content Population**
- Professional copywriting
- Mock images and assets
- SEO optimization
- Schema markup

**Milestone 6.2: UI/UX Refinement**
- Animation and transitions
- Micro-interactions
- Accessibility audit (WCAG 2.1)
- Cross-browser testing

[Continue...]

### Phase 7: Testing & Launch Prep (Week 6)

**Milestone 7.1: Quality Assurance**
- End-to-end testing
- Mobile device testing
- Performance testing
- Security review

**Milestone 7.2: Deployment**
- Production build optimization
- Netlify environment configuration
- Domain setup
- Analytics integration

[Continue...]

---

## 4. Detailed Task Breakdown by Feature

### Homepage Implementation
1. **Hero Section**
   - Large background image/video
   - Primary CTA: "Get Unlimited Washes"
   - Secondary CTA: "Find a Location"
   - Mobile-optimized layout
   - Time: 4 hours

2. **Value Proposition Section**
   - Three-column benefits grid
   - Icons and concise copy
   - Responsive layout
   - Time: 3 hours

[Continue for each major feature...]

### Membership System (Mock)
1. **Three-Tier Comparison Table**
   - Based on COMPETITORS.md pricing research
   - Feature checkmarks
   - "Most Popular" badge
   - Mobile-stacked layout
   - Time: 4 hours

[Continue...]

### AI Chatbot Integration
1. **Netlify Function Setup**
   - Create `/netlify/functions/chatbot.ts`
   - Environment variables for API keys
   - Rate limiting
   - Time: 3 hours

2. **Chat UI Component**
   - Floating chat button
   - Message history
   - Typing indicators
   - Time: 5 hours

[Continue...]

---

## 5. Dependency Map

### Critical Path (Minimum Timeline)
```
Week 1: Setup → Project Structure → Layout → Core Pages (12-15 days)
Week 2-3: Mobile Optimization → Core Features (8-10 days)
Week 4: AI Integration (5-7 days)
Week 5: Polish & Content (5-7 days)
Week 6: Testing & Launch (3-5 days)

Minimum: 33 days
With buffer: 42 days (6 weeks)
```

### Parallel Work Opportunities
- Content writing can happen alongside development
- Mock data creation parallel to component building
- AI function development parallel to UI components
- Testing can start once core pages are ready

### Blocking Dependencies
- Netlify deployment must be set up before AI functions
- Layout components must exist before page development
- Mock data structure needed before dynamic components
- Mobile optimization depends on core features

---

## 6. Timeline & Resource Allocation

### Gantt Chart (Text Format)

```
Week 1: Setup & Foundation
[████████████████] Phase 1: Setup (100%)
[████████░░░░░░░░] Phase 2: Core Pages (50%)

Week 2: Core Development
[████████████████] Phase 2: Core Pages (100%)
[████████████░░░░] Phase 3: Mobile Opt (75%)

Week 3: Mobile & Features
[████████████████] Phase 3: Mobile Opt (100%)
[████████░░░░░░░░] Phase 4: AI Features (50%)

Week 4: AI Integration
[████████████████] Phase 4: AI Features (100%)
[████░░░░░░░░░░░░] Phase 5: Enhanced (25%)

Week 5: Enhancement & Polish
[████████████████] Phase 5: Enhanced (100%)
[████████████████] Phase 6: Polish (100%)

Week 6: Testing & Launch
[████████████████] Phase 7: Testing (100%)
[████████████████] Launch Ready
```

### Resource Requirements by Phase

**Phase 1-2 (Weeks 1-2)**: 1 Full-Stack Developer
- Skills: Next.js, React, TypeScript, Tailwind
- Hours: 40-60 hours

**Phase 3-4 (Weeks 3-4)**: 1 Full-Stack Developer + 0.5 AI Engineer
- Skills: Mobile optimization, API integration, AI/LLM
- Hours: 60-80 hours

**Phase 5-7 (Weeks 5-6)**: 1 Full-Stack Developer + 0.5 Designer
- Skills: UI/UX, testing, deployment
- Hours: 40-60 hours

**Total Effort**: 140-200 developer hours over 6 weeks

---

## 7. Risk Management

### High-Probability Risks

1. **AI API Costs Exceed Budget**
   - **Probability**: Medium (40%)
   - **Impact**: Medium
   - **Mitigation**:
     - Implement request caching
     - Rate limiting on chatbot
     - Use free tier APIs during POC
     - Set spending alerts
   - **Contingency**: Fall back to rule-based chatbot

2. **Mobile Performance Issues**
   - **Probability**: Medium (35%)
   - **Impact**: High (mobile-first requirement)
   - **Mitigation**:
     - Performance budget from day 1
     - Next.js Image optimization
     - Lazy loading
     - Regular Lighthouse audits
   - **Contingency**: Reduce image quality, simplify animations

3. **Netlify Function Cold Start Delays**
   - **Probability**: High (60%)
   - **Impact**: Medium
   - **Mitigation**:
     - Keep functions warm with periodic pings
     - Loading states in UI
     - Optimize function bundle size
   - **Contingency**: Move to always-on backend service

4. **Mock Data Structure Changes**
   - **Probability**: Medium (30%)
   - **Impact**: Medium
   - **Mitigation**:
     - Define schema early
     - TypeScript interfaces for data
     - Centralized data parsing
   - **Contingency**: Database migration path documented

5. **Scope Creep from AI Features**
   - **Probability**: High (50%)
   - **Impact**: High
   - **Mitigation**:
     - Stick to Phase 1 AI features only
     - Document Phase 2-4 for post-POC
     - Time-box AI implementation (1 week max)
   - **Contingency**: Ship without AI if timeline at risk

[Continue with 10-15 more risks...]

---

## 8. Quality Gates & Testing Strategy

### Phase Exit Criteria

**Phase 1 Complete When:**
- [ ] Project builds without errors
- [ ] Deploys to Netlify successfully
- [ ] Mock data files load correctly
- [ ] Development environment documented

**Phase 2 Complete When:**
- [ ] All core pages render
- [ ] Navigation works on mobile and desktop
- [ ] Layout is responsive
- [ ] Content uses mock data successfully

**Phase 3 Complete When:**
- [ ] Lighthouse mobile score > 85
- [ ] Touch interactions work smoothly
- [ ] Page load < 3 seconds on 3G
- [ ] No console errors

**Phase 4 Complete When:**
- [ ] AI chatbot responds correctly
- [ ] Netlify functions deploy without errors
- [ ] API costs within budget
- [ ] Fallback behavior works

[Continue...]

### Testing Strategy

**Unit Testing** (Optional for POC)
- Jest for utility functions
- Component testing with React Testing Library
- Coverage target: 60%+ for critical paths

**Integration Testing**
- Test page navigation
- Test form submissions
- Test AI chatbot flow
- Test mobile gestures

**Performance Testing**
- Lighthouse CI on every deploy
- Mobile score > 90 target
- Desktop score > 95 target
- Bundle size < 200KB gzipped

**Accessibility Testing**
- WAVE browser extension
- Keyboard navigation
- Screen reader testing
- WCAG 2.1 Level AA compliance

**Cross-Browser Testing**
- Chrome (latest)
- Safari (iOS and macOS)
- Firefox (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

**User Acceptance Testing**
- Test on actual mobile devices
- Test membership signup flow
- Test location finder
- Test chatbot conversations

---

## 9. Technology Stack Details

### Frontend Framework
```
Next.js 14+ (App Router)
├── React 18+
├── TypeScript 5+
└── Tailwind CSS 3+
```

### Key Libraries
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^10.0.0",  // Animations
    "react-hook-form": "^7.0.0",  // Forms
    "zod": "^3.0.0",  // Validation
    "gray-matter": "^4.0.0",  // Parse MD files
    "remark": "^15.0.0",  // Markdown processing
    "@vercel/analytics": "^1.0.0"  // Analytics
  }
}
```

### AI Integration (Netlify Functions)
```typescript
// Technology options
- OpenAI GPT-4 (chatbot, content generation)
- Claude API (alternative to OpenAI)
- Weather API (weather-based messaging)
- Google Maps API (location features)
```

### Development Tools
```
- ESLint + Prettier (code quality)
- Husky (git hooks)
- TypeScript strict mode
- VS Code with recommended extensions
```

### Deployment
```
Netlify
├── Auto-deploy from Git
├── Environment variables (API keys)
├── Netlify Functions (serverless)
└── Custom domain (optional)
```

---

## 10. Implementation Best Practices

### Code Organization
```
app/
├── (routes)/
│   ├── page.tsx           // Homepage
│   ├── services/
│   ├── locations/
│   ├── about/
│   └── contact/
├── components/
│   ├── ui/                // Reusable UI
│   ├── layout/            // Layout components
│   └── features/          // Feature-specific
├── lib/
│   ├── data.ts            // Mock data loading
│   ├── utils.ts           // Utilities
│   └── types.ts           // TypeScript types
├── data/                  // Mock data (MD files)
│   ├── locations.md
│   ├── services.md
│   └── pricing.md
└── netlify/
    └── functions/
        ├── chatbot.ts
        └── weather.ts
```

### Component Architecture
- Use Server Components by default (Next.js 14+)
- Client Components only when needed (interactivity)
- Shared UI components in `components/ui/`
- Feature components in `components/features/`

### State Management
- Server state: React Server Components
- Client state: React hooks (useState, useReducer)
- Forms: React Hook Form
- No Redux needed for POC

### Styling Strategy
- Tailwind utility classes
- Custom theme in `tailwind.config.js`
- Component-specific styles when needed
- Mobile-first breakpoints

### Data Flow
```
Markdown Files → gray-matter parsing → TypeScript types → Components
```

### Performance Optimization
- Next.js Image component for all images
- Dynamic imports for heavy components
- Lazy load below-fold content
- Optimize fonts (next/font)

---

## 11. Feature Priority Matrix

Based on WEB.md research and AI.md recommendations:

### Must-Have (Phase 1 - POC Launch)
- [x] Mobile-responsive design
- [x] Homepage with value proposition
- [x] Services page with pricing tiers
- [x] Location finder with map
- [x] Membership comparison table
- [x] Contact form
- [x] AI chatbot (basic)
- [x] Transparent pricing display

### Should-Have (Phase 2 - Post-POC)
- [ ] Online booking system (mock)
- [ ] Before/after gallery
- [ ] Customer testimonials with reviews
- [ ] Video content (virtual tour)
- [ ] Weather-based messaging
- [ ] Email signup with automation
- [ ] Enhanced AI features (wash selector)

### Nice-to-Have (Phase 3-4 - Future)
- [ ] Membership portal (gamified)
- [ ] License plate recognition (mock/demo)
- [ ] AR wash preview
- [ ] Mobile app prototype
- [ ] Advanced analytics dashboard
- [ ] Predictive maintenance dashboard

---

## 12. Budget & Cost Estimates

### Development Costs
- Developer time (200 hours @ $50-150/hr): $10,000 - $30,000
- Designer time (40 hours @ $50-100/hr): $2,000 - $4,000
- Project management (20 hours @ $75-150/hr): $1,500 - $3,000
- **Total Development**: $13,500 - $37,000

### Infrastructure Costs (Monthly)
- Netlify (free tier or Pro $19/month): $0 - $19/month
- OpenAI API (chatbot): $50 - $200/month
- Google Maps API: $0 - $50/month (free tier available)
- Domain name: $12/year
- **Total Monthly**: $50 - $270/month

### One-Time Costs
- Stock photos/assets: $0 - $500 (or free alternatives)
- Font licensing (if needed): $0 - $200
- **Total One-Time**: $0 - $700

### POC Total Budget
- **Development**: $13,500 - $37,000
- **3-Month Infrastructure**: $150 - $810
- **One-Time Costs**: $0 - $700
- **TOTAL**: $13,650 - $38,510

*(Can be reduced significantly with free tiers and self-development)*

---

## 13. Success Metrics & KPIs

### Technical Metrics
- [ ] Lighthouse score > 90 (mobile and desktop)
- [ ] Page load time < 2 seconds
- [ ] Zero critical accessibility issues
- [ ] 99.9% uptime (Netlify SLA)
- [ ] Mobile-responsive on all screen sizes

### User Experience Metrics
- [ ] AI chatbot resolves 60%+ of FAQs automatically
- [ ] Average session duration > 2 minutes
- [ ] Bounce rate < 40%
- [ ] Contact form conversion > 3%

### Business Metrics (for production)
- [ ] Membership signup conversion > 10%
- [ ] Mobile traffic > 60% of total
- [ ] Email signup > 5% of visitors
- [ ] Return visitor rate > 25%

### Competitive Metrics
- [ ] Feature parity with top 3 competitors
- [ ] Exceeds competitors in AI capabilities
- [ ] Matches or beats competitor load times
- [ ] Modern design compared to market

---

## 14. Post-POC Roadmap

### Phase 2 Enhancements (Months 2-3)
- Real backend API (replace mock data)
- User authentication system
- Online booking with payment
- Member dashboard
- Advanced AI features from AI.md Phase 2

### Phase 3 Scale-Up (Months 4-6)
- CMS integration for content management
- Email marketing automation
- Analytics and reporting
- A/B testing framework
- SEO optimization

### Phase 4 Advanced Features (Months 7-12)
- Mobile app development
- License plate recognition
- Loyalty program
- Predictive analytics
- Advanced AI from AI.md Phase 3-4

---

## 15. Appendices

### A. Key Insights from WEB.md
- 70% of bookings happen on mobile (must prioritize mobile)
- Members generate $444 LTV vs $64 for retail (7x difference)
- 100% of successful sites have membership signup
- AI chatbots resolve 60% of inquiries for $500/month
- First 90 days predict year-one results with 90% accuracy

### B. AI Features Priority from AI.md
**Immediate ROI**:
1. AI Concierge Chatbot (#5) - 60% inquiry automation
2. AI Email Campaigns (#21) - Increases rebook rate
3. Review Reply Generator (#23) - Builds trust

**Near-term**:
4. Dynamic Pricing Engine (#3) - Maximizes revenue
5. Personalized Recommendations (#4) - Repeat visits

### C. Competitive Gaps to Exploit
From COMPETITORS.md:
- Most competitors lack modern AI features
- Before/after galleries missing from 70% of sites
- Video content dramatically underutilized
- Mobile optimization often poor
- Live chat absent from most sites

### D. Technology Decision Rationale
- **Next.js**: SEO, performance, full-stack capability
- **TypeScript**: Type safety, better DX, fewer bugs
- **Tailwind**: Rapid development, mobile-first, small bundle
- **Netlify**: Easy deployment, serverless functions, free tier
- **Mock Data in MD**: Simple, version-controlled, easy to edit

---

## Final Notes

This plan is based on:
- ✅ OBJECTIVE.md requirements
- ✅ WEB.md industry research (181 lines)
- ✅ AI.md feature catalog (50 features)
- ✅ COMPETITORS.md market analysis (391 lines)

**Estimated Timeline**: 6 weeks (can be accelerated or extended)

**Recommended Approach**:
1. Start with Phase 1 core features
2. Get feedback early and often
3. Iterate based on real user testing
4. Don't overcomplicate the POC
5. Document everything for future phases

**Next Steps**:
1. Review and approve this plan
2. Set up development environment
3. Begin Phase 1: Foundation & Setup
4. Ship fast, iterate faster

---

*Generated for: Car Wash Website POC*
*Based on: OBJECTIVE.md, WEB.md, AI.md, COMPETITORS.md*
*Date: 2025-10-24*
