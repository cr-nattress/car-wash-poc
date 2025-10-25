# Car Wash Website POC - Implementation Plan

**Project**: Modern AI-Powered Car Wash Website
**Client**: 2-Location Car Wash Company
**Timeline**: 6 Weeks (42 Days)
**Generated**: October 24, 2025
**Plan Version**: 1.0

---

## Executive Summary

### Project Overview

We are building a **mobile-first, AI-powered car wash website** that positions a 2-location car wash company to compete with and exceed top operators in the northeastern Pennsylvania market. This POC will demonstrate modern web technologies, innovative AI features, and industry best practices to drive membership conversions and establish competitive differentiation.

**Target Audience**:
- Local residents in northeastern Pennsylvania (2-location service area)
- Mobile-first users (70% of automotive bookings occur on mobile)
- Membership-focused customers ($20-42/month unlimited wash programs)
- Tech-savvy consumers seeking modern, convenient experiences

**Market Positioning**:
- **Technology Leader**: AI chatbot, personalized recommendations, weather-based messaging
- **Membership Focus**: 7x lifetime value ($444 vs $64 retail customers)
- **Mobile Excellence**: Industry-leading mobile experience (Lighthouse score >90)
- **Competitive Differentiation**: Features that 70%+ of local competitors lack

### Success Metrics

**Technical Targets**:
- ✅ Lighthouse mobile score > 90
- ✅ Page load time < 2 seconds on 3G
- ✅ WCAG 2.1 Level AA accessibility compliance
- ✅ Zero critical console errors
- ✅ 100% mobile responsive across all screen sizes

**Business Targets**:
- ✅ Membership comparison prominently featured (drives 70% of revenue)
- ✅ AI chatbot resolves 60%+ of FAQs automatically
- ✅ Contact form conversion > 3% of visitors
- ✅ Feature parity with top 3 NEPA competitors
- ✅ Exceeds competitors in AI capabilities

**User Experience Targets**:
- ✅ Average session duration > 2 minutes
- ✅ Bounce rate < 40%
- ✅ Mobile navigation intuitive (< 3 taps to any page)
- ✅ Membership signup flow < 60 seconds

### Timeline Estimate

**Total Duration**: 6 weeks (42 days)
**Developer Effort**: 160-200 hours
**Team**: 1 Full-Stack Developer + 0.25 Designer

```
Week 1: Foundation & Setup + Core Pages (25% complete)
Week 2: Mobile Optimization + Features (50% complete)
Week 3: AI Integration (65% complete)
Week 4: Enhanced Features (80% complete)
Week 5: Content & Polish (95% complete)
Week 6: Testing & Launch (100% complete)
```

**Critical Path**: 33 days minimum
**With Buffers**: 42 days (6 weeks)

### Top 5 Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| **AI API costs exceed budget** | Medium (40%) | Medium | Implement caching, rate limiting, use free tiers, set spending alerts |
| **Mobile performance issues** | Medium (35%) | High | Performance budget from day 1, Next.js optimization, regular Lighthouse audits |
| **Scope creep from AI features** | High (50%) | High | Strict Phase 1 feature list, time-box AI to 1 week, document future phases |
| **Mock data structure changes** | Medium (30%) | Medium | Define TypeScript schemas early, centralized parsing, version control |
| **Netlify cold start delays** | High (60%) | Low | Implement loading states, optimize bundle size, keep functions warm |

### Budget Summary

**Development**: $12,000 - $30,000 (160-200 hours @ $75/hr avg)
**Infrastructure**: $150/month (Netlify Pro + OpenAI API + Maps API)
**One-Time**: $300 (stock images, assets)
**Total 3-Month POC**: $12,750 - $30,750

---

## Research Synthesis

### Industry Insights (from WEB.md)

**Key Findings That Inform Our Design**:

1. **Membership Model is Critical**
   - 70% of revenue comes from monthly memberships
   - Members generate **$444 lifetime value** vs $64 for retail (7x difference)
   - **Action**: Make membership signup the primary CTA on every page

2. **Mobile-First is Non-Negotiable**
   - 70% of automotive service bookings happen on mobile devices
   - Majority of car wash searches from drivers on the go
   - **Action**: Design for mobile screens first, scale up to desktop

3. **Essential Features (100% of successful sites have these)**:
   - Mobile-responsive design with fast load times
   - Membership subscription signup with online management
   - Transparent pricing in comparison format
   - Location finder with Google Maps integration
   - Review integration and reputation management
   - **Action**: All of these are Phase 1 must-haves

4. **AI Delivers Proven ROI**
   - AI chatbots resolve 60% of customer inquiries automatically
   - Implementation cost: $500/month
   - Workload reduction: 40%
   - Setup time: 1-2 weeks
   - **Action**: AI chatbot is top Phase 1 priority

5. **Common Gaps Create Opportunities**
   - Before/after galleries: Missing from 70% of sites
   - Video content: Dramatically underutilized
   - Live chat/chatbots: Virtually absent from small operators
   - Dynamic content: Weather-based messaging rarely implemented
   - **Action**: These become our competitive differentiators

**Technology Validation**:
- WordPress dominates car wash sites (we're using Next.js for better performance)
- License plate recognition becoming standard (we'll showcase mock version)
- Mobile apps limited to larger chains (we can demonstrate with PWA approach)
- Water reclamation/eco-friendly messaging resonates (include sustainability section)

### AI Integration Strategy (from AI.md)

**Phase 1 Features for POC (Immediate ROI)**:

1. **#5 AI Concierge Chatbot** (HIGHEST PRIORITY)
   - **Implementation**: Netlify Function + OpenAI GPT-4 or Claude
   - **Benefit**: 60% inquiry automation, 24/7 availability
   - **Complexity**: Low-Medium
   - **Cost**: $500-1,000/month
   - **Timeframe**: 1 week
   - **Tasks**:
     - Create chatbot UI component
     - Set up Netlify Function
     - Train on FAQs (pricing, hours, services, locations)
     - Implement fallback to human contact

2. **#4 Personalized Recommendations**
   - **Implementation**: Client-side logic + weather API
   - **Benefit**: Increases repeat visits, personalized UX
   - **Complexity**: Medium
   - **Cost**: $50/month (weather API)
   - **Timeframe**: 3-4 days
   - **Tasks**:
     - Detect user location
     - Fetch weather data
     - Display relevant wash recommendations
     - "Post-rain undercarriage wash" messaging

3. **#35 Weather-Driven Messaging**
   - **Implementation**: Weather API + dynamic homepage content
   - **Benefit**: Context-aware marketing, 20-40% campaign effectiveness increase
   - **Complexity**: Low-Medium
   - **Cost**: $50/month (included in weather API)
   - **Timeframe**: 2-3 days
   - **Tasks**:
     - Homepage hero adapts to weather
     - Rainy day: "Protect your car from road grime"
     - Sunny day: "Keep your shine going"
     - Snow forecast: "Winter protection wash"

**Phase 2-4 Features (Post-POC)**:
- Documented in AI.md for future implementation
- Dynamic pricing engine (#3)
- Virtual car inspection (#2)
- Email campaign automation (#21)
- Review reply generator (#23)
- Predictive maintenance (#31)

**Technology Stack for AI**:
```typescript
// Phase 1 Requirements
- OpenAI GPT-4 API or Claude API (chatbot)
- Weather API (OpenWeather or WeatherAPI.com)
- Next.js Server Actions (API routes)
- Environment variables for API keys
- Rate limiting and caching
```

### Competitive Differentiation (from COMPETITORS.md)

**Market Analysis**:
- 20+ operators in northeastern Pennsylvania
- Fragmented market, mostly local/regional operators
- First national chain (Tommy's Express) entered April 2025
- Membership pricing range: $20-42/month

**Technology Leaders We're Competing Against**:

1. **Sparkle Car Wash** (3 locations, Monroe County)
   - 97% LPR accuracy, proprietary systems
   - Water reclamation (12-14 gallons/wash)
   - Mobile app (WashNow!)
   - **Our Advantage**: Better AI features, superior mobile UX

2. **Tommy's Express** (1 location, Scranton - national chain)
   - 130ft tunnel, LPR, mobile app
   - $12-43/month memberships
   - 50+ years innovation
   - **Our Advantage**: More personalized AI, local focus

3. **Cloud10 SmartWash** (3 locations, Wilkes-Barre)
   - Graphene/ceramic technology, AI integration claims
   - $36-42/month premium pricing
   - CloudClub app
   - **Our Advantage**: True AI implementation (theirs is minimal)

**Competitive Gaps We'll Exploit**:
- ✅ **AI Chatbot**: 90% of competitors lack this
- ✅ **Before/After Gallery**: Missing from 70% of sites
- ✅ **Video Content**: Dramatically underutilized
- ✅ **Mobile Optimization**: Often poor quality
- ✅ **Dynamic Weather Content**: Virtually absent
- ✅ **Modern Design**: Many sites feel dated (10+ years behind)

**Pricing Strategy** (Informed by Market):
```
Basic Plan: $24/month (competitive with market low $20-30)
Premium Plan: $34/month (mid-range, most popular)
Ultimate Plan: $42/month (matches top tier)
```

**Geographic Opportunity**:
- Pike County and Wayne County severely underserved
- Potential expansion markets for client
- Document this in "Locations" expansion strategy

### Brand Colors (from Actual Facility Images)

**Extracted from facility photos** in `/images` folder:

- **Primary Blue**: `#00A3E0` (bright cyan blue from building exterior)
- **Accent Orange**: `#FF6600` (from "OPEN 24/7" signage)
- **Yellow**: `#FFD700` (from equipment/vacuum hoses)
- **White**: `#FFFFFF` (building base, clean backgrounds)

**Full color specifications**: See `planning/BRAND-COLORS.md`

**Usage in UI**:
- Primary CTAs: Orange `bg-accent-500`
- Secondary CTAs: Blue `bg-primary-500`
- Navigation: Blue `bg-primary-500`
- Highlights: Yellow `bg-yellow-500`
- All colors meet WCAG 2.1 AA accessibility standards

### Technology Decisions

**Frontend Framework: Next.js 14+ (App Router)**

*Why Next.js over alternatives*:
- ✅ **SEO**: Server-side rendering critical for local search (46% of Google searches are local)
- ✅ **Performance**: Built-in image optimization, code splitting, lazy loading
- ✅ **Developer Experience**: TypeScript integration, hot reload, great documentation
- ✅ **Flexibility**: Can add API routes, serverless functions
- ✅ **Industry Standard**: Large community, abundant resources

*Alternatives Considered*:
- ❌ WordPress: Too slow, harder to customize, lower performance scores
- ❌ Wix/Squarespace: Limited AI integration, can't implement custom features
- ❌ Gatsby: Static-only, harder to add dynamic AI features
- ❌ Create React App: No SSR, worse SEO, manual optimization needed

**Styling: Tailwind CSS 3+**

*Why Tailwind*:
- ✅ **Mobile-First**: Built-in responsive breakpoints
- ✅ **Rapid Development**: Utility classes speed up prototyping
- ✅ **Small Bundle**: PurgeCSS removes unused styles
- ✅ **Consistency**: Design system in config file
- ✅ **No CSS Conflicts**: Utility-first prevents naming collisions

**State Management: React Hooks + Server Components**

*Why this approach*:
- ✅ **Simplicity**: No Redux boilerplate for POC
- ✅ **Server Components**: Next.js 14+ feature, zero client JS for static content
- ✅ **Client Components**: Only when interactivity needed
- ✅ **Form State**: React Hook Form for complex forms

**Data Strategy: Mock Data in Markdown Files**

*Why Markdown for POC*:
- ✅ **Version Control**: Track changes in Git
- ✅ **Easy Editing**: Non-developers can edit content
- ✅ **Fast Setup**: No database configuration
- ✅ **Production Path**: Can migrate to CMS later (Contentful, Sanity)
- ✅ **Type Safety**: Parse with gray-matter, validate with Zod

```
data/
├── locations.md      // 2 locations with addresses, hours, photos
├── services.md       // Wash packages and descriptions
├── pricing.md        // 3-tier membership structure
├── testimonials.md   // Customer reviews
└── faqs.md          // Chatbot training data
```

**AI Implementation: Netlify Functions**

*Why Netlify Functions*:
- ✅ **Free Tier**: 125k requests/month free
- ✅ **Serverless**: No server management
- ✅ **Environment Variables**: Secure API key storage
- ✅ **TypeScript Support**: Type-safe function code
- ✅ **Edge Functions**: Low latency for chatbot

**Deployment: Netlify**

*Why Netlify over alternatives*:
- ✅ **Free Tier**: Generous limits for POC
- ✅ **Git Integration**: Auto-deploy on push
- ✅ **Serverless Functions**: Built-in, no extra config
- ✅ **Environment Variables**: Easy management
- ✅ **Analytics**: Built-in (optional upgrade)
- ✅ **Forms**: Can handle contact forms without backend

*Alternatives Considered*:
- ❌ Vercel: Similar but more expensive for functions
- ❌ AWS Amplify: More complex setup
- ❌ Traditional Hosting: Need to manage servers, no serverless functions

**Image Strategy**:
```typescript
// Use Next.js Image component for optimization
import Image from 'next/image'

// Mock images from:
- Unsplash (free, high-quality)
- Pexels (free, commercial use)
- Local placeholder images

// Future: Replace with client's actual photos
```

**Third-Party Integrations**:
```
✅ Google Maps API - Location finder
✅ OpenAI/Claude API - AI chatbot
✅ Weather API - Dynamic messaging
✅ Netlify Forms - Contact forms
❌ Payment Processing - Not needed for POC
❌ Booking System - Mock only for POC
```

---

## Implementation Plan

### Phase 1: Foundation & Setup (Week 1, Days 1-5)

**Goal**: Development environment ready, project structure established, deployment pipeline working

#### Milestone 1.1: Development Environment Setup

**Target**: Day 1 (6-8 hours)

**Tasks**:

1. **Initialize Next.js Project with TypeScript**
   ```bash
   npx create-next-app@latest car-wash-poc --typescript --tailwind --app --src-dir
   ```
   - Acceptance: `npm run dev` starts successfully
   - Time: 30 minutes
   - Dependencies: None
   - Notes: Use App Router (not Pages Router)

2. **Configure Tailwind CSS with Custom Theme**
   - Create `tailwind.config.ts` with brand colors
   - Set up typography plugin
   - Configure mobile-first breakpoints
   - Test utility classes working
   - Acceptance: Custom colors render in test component
   - Time: 1 hour
   - Dependencies: Next.js initialized

   ```typescript
   // tailwind.config.ts
   // Brand colors extracted from actual facility images
   const config = {
     theme: {
       extend: {
         colors: {
           primary: {
             50: '#e6f7ff',   // Very light cyan blue
             100: '#b3e5ff',  // Light cyan blue
             200: '#80d4ff',  // Medium light cyan
             300: '#4dc3ff',  // Medium cyan
             400: '#1ab3ff',  // Medium bright cyan
             500: '#00a3e0',  // Main brand blue (from building exterior)
             600: '#0082b3',  // Darker cyan
             700: '#006186',  // Deep cyan
             800: '#004059',  // Very deep cyan
             900: '#00202d',  // Almost black cyan
           },
           accent: {
             50: '#fff3e6',   // Very light orange
             100: '#ffd9b3',  // Light orange
             200: '#ffbf80',  // Medium light orange
             300: '#ffa64d',  // Medium orange
             400: '#ff8c1a',  // Medium bright orange
             500: '#ff6600',  // Main accent orange (from OPEN 24/7 signage)
             600: '#cc5200',  // Darker orange
             700: '#993d00',  // Deep orange
             800: '#662900',  // Very deep orange
             900: '#331400',  // Almost black orange
           },
           yellow: {
             500: '#ffd700',  // Bright yellow (from equipment/vacuum hoses)
           },
         },
       },
     },
   }
   ```

3. **Set Up Git Repository and Connect to GitHub**
   - Initialize git (already done)
   - Create `.gitignore` (exclude node_modules, .env.local, .next)
   - Make initial commit
   - Push to remote origin (already set up: https://github.com/cr-nattress/car-wash-poc.git)
   - Acceptance: Code pushed to GitHub successfully
   - Time: 30 minutes
   - Dependencies: None

4. **Configure Netlify Deployment**
   - Sign up for Netlify account (if needed)
   - Connect GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Set up environment variables (placeholder for now)
   - Trigger first deployment
   - Acceptance: Site deploys successfully, live URL accessible
   - Time: 1.5 hours
   - Dependencies: GitHub repository

5. **Install Essential Dependencies**
   ```bash
   npm install framer-motion react-hook-form zod gray-matter remark remark-html
   npm install -D @types/node prettier eslint-config-prettier
   ```
   - Acceptance: All packages install without errors
   - Time: 30 minutes
   - Dependencies: Next.js project

6. **Configure ESLint and Prettier**
   - Create `.prettierrc` with formatting rules
   - Update `.eslintrc.json` with Next.js best practices
   - Add format script to `package.json`
   - Test formatting on sample file
   - Acceptance: Code auto-formats on save
   - Time: 45 minutes
   - Dependencies: Dependencies installed

7. **Set Up TypeScript Strict Mode**
   - Update `tsconfig.json` with strict: true
   - Configure path aliases (`@/components`, `@/lib`)
   - Test type checking
   - Acceptance: `npm run type-check` passes
   - Time: 30 minutes
   - Dependencies: Project initialized

**Milestone 1.1 Deliverable**: ✅ Development environment fully configured and deployed

---

#### Milestone 1.2: Project Structure & Mock Data

**Target**: Day 2 (6-8 hours)

**Tasks**:

1. **Create Folder Structure**
   ```
   src/
   ├── app/
   │   ├── (routes)/
   │   │   ├── page.tsx
   │   │   ├── services/
   │   │   ├── locations/
   │   │   ├── membership/
   │   │   ├── about/
   │   │   └── contact/
   │   ├── layout.tsx
   │   └── globals.css
   ├── components/
   │   ├── ui/              // Button, Card, Input, etc.
   │   ├── layout/          // Header, Footer, Navigation
   │   └── features/        // Chatbot, PricingTable, LocationFinder
   ├── lib/
   │   ├── data.ts          // Mock data loading
   │   ├── utils.ts         // Helper functions
   │   ├── types.ts         // TypeScript types
   │   └── constants.ts     // App constants
   └── data/                // Mock data (MD files)
       ├── locations.md
       ├── services.md
       ├── pricing.md
       ├── testimonials.md
       └── faqs.md
   ```
   - Acceptance: All folders exist, README.md documents structure
   - Time: 1 hour
   - Dependencies: Project initialized

2. **Create TypeScript Types**

   ```typescript
   // src/lib/types.ts
   export interface Location {
     id: string
     name: string
     address: string
     city: string
     state: string
     zip: string
     phone: string
     hours: {
       monday: string
       tuesday: string
       wednesday: string
       thursday: string
       friday: string
       saturday: string
       sunday: string
     }
     coordinates: {
       lat: number
       lng: number
     }
     image: string
     features: string[]
   }

   export interface Service {
     id: string
     name: string
     description: string
     duration: string
     features: string[]
     image: string
   }

   export interface PricingTier {
     id: string
     name: string
     price: number
     frequency: 'monthly' | 'single'
     features: string[]
     popular?: boolean
     savings?: string
   }

   export interface Testimonial {
     id: string
     name: string
     location: string
     rating: number
     text: string
     date: string
     service?: string
   }

   export interface FAQ {
     id: string
     question: string
     answer: string
     category: string
   }
   ```
   - Acceptance: Types compile without errors
   - Time: 1 hour
   - Dependencies: Folder structure created

3. **Create Mock Data Files in Markdown**

   **data/locations.md**:
   ```markdown
   ---
   id: location-1
   name: Downtown Location
   address: 123 Main Street
   city: Scranton
   state: PA
   zip: 18503
   phone: (570) 555-0100
   lat: 41.4090
   lng: -75.6624
   image: /images/locations/downtown.jpg
   features:
     - Express Exterior Wash
     - Free Vacuums
     - Member Lanes
     - Open 24/7
   ---

   # Downtown Location

   Our flagship location serving downtown Scranton since 2015...

   ## Hours
   - Monday-Sunday: 24 hours

   ---

   id: location-2
   name: North Side Location
   address: 456 North Ave
   city: Scranton
   state: PA
   zip: 18504
   phone: (570) 555-0200
   lat: 41.4290
   lng: -75.6524
   image: /images/locations/northside.jpg
   features:
     - Express Exterior Wash
     - Free Vacuums
     - Self-Service Bays
     - Hand Dry Available
   ---

   # North Side Location

   Convenient location serving North Scranton...

   ## Hours
   - Monday-Saturday: 7:00 AM - 8:00 PM
   - Sunday: 8:00 AM - 6:00 PM
   ```

   **data/pricing.md**:
   ```markdown
   ---
   id: basic
   name: Basic Shine
   price: 24
   frequency: monthly
   savings: Save $6/month vs single washes
   features:
     - Exterior Wash
     - Spot-Free Rinse
     - Turbo Dry
     - Free Vacuums
     - Unlimited Monthly Washes
   ---

   # Basic Shine Plan

   Perfect for regular maintenance...

   ---

   id: premium
   name: Premium Protection
   price: 34
   frequency: monthly
   popular: true
   savings: Save $12/month vs single washes
   features:
     - Everything in Basic
     - Triple Foam Polish
     - Wheel Cleaner
     - Underbody Wash
     - Rust Inhibitor
     - Tire Shine
   ---

   # Premium Protection Plan (Most Popular!)

   Our most popular plan...

   ---

   id: ultimate
   name: Ultimate Ceramic
   price: 42
   frequency: monthly
   savings: Save $18/month vs single washes
   features:
     - Everything in Premium
     - Ceramic Sealant
     - Graphene Protection
     - Rain Repellent
     - Bug Prep
     - Priority Service
   ---

   # Ultimate Ceramic Plan

   The best wash we offer...
   ```

   **data/services.md**, **testimonials.md**, **faqs.md**:
   - Similar structure with frontmatter + content
   - Acceptance: All 5 data files created with realistic content
   - Time: 3 hours
   - Dependencies: Types defined

4. **Create Data Loading Functions**

   ```typescript
   // src/lib/data.ts
   import fs from 'fs'
   import path from 'path'
   import matter from 'gray-matter'
   import { Location, PricingTier, Service, FAQ, Testimonial } from './types'

   const dataDirectory = path.join(process.cwd(), 'data')

   export function getLocations(): Location[] {
     const fullPath = path.join(dataDirectory, 'locations.md')
     const fileContents = fs.readFileSync(fullPath, 'utf8')

     // Split by --- to get multiple entries
     const entries = fileContents.split(/\n---\n/).filter(Boolean)

     return entries.map(entry => {
       const { data, content } = matter(entry)
       return {
         ...data,
         content,
       } as Location
     })
   }

   export function getPricingTiers(): PricingTier[] {
     // Similar implementation
   }

   export function getServices(): Service[] {
     // Similar implementation
   }

   export function getFAQs(): FAQ[] {
     // Similar implementation
   }

   export function getTestimonials(): Testimonial[] {
     // Similar implementation
   }
   ```
   - Acceptance: Functions return typed data, console.log shows correct parsing
   - Time: 2 hours
   - Dependencies: Mock data files created

**Milestone 1.2 Deliverable**: ✅ Project structure established, mock data loading successfully

---

#### Milestone 1.3: Core Layout Components

**Target**: Days 3-4 (12-14 hours)

**Tasks**:

1. **Create Root Layout**

   ```typescript
   // src/app/layout.tsx
   import { Inter } from 'next/font/google'
   import { Header } from '@/components/layout/Header'
   import { Footer } from '@/components/layout/Footer'
   import './globals.css'

   const inter = Inter({ subsets: ['latin'] })

   export const metadata = {
     title: 'Shine On Car Wash | Premium Car Wash Service',
     description: 'Mobile-first car wash with AI-powered service...',
   }

   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode
   }) {
     return (
       <html lang="en">
         <body className={inter.className}>
           <Header />
           <main className="min-h-screen">{children}</main>
           <Footer />
         </body>
       </html>
     )
   }
   ```
   - Acceptance: Layout renders, header/footer appear on all pages
   - Time: 1 hour
   - Dependencies: None

2. **Build Header Component (Mobile-First)**

   ```typescript
   // src/components/layout/Header.tsx
   'use client'

   import { useState } from 'react'
   import Link from 'next/link'
   import { Button } from '@/components/ui/Button'

   export function Header() {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

     return (
       <header className="sticky top-0 z-50 bg-white shadow-md">
         <nav className="container mx-auto px-4 py-4">
           {/* Mobile: Hamburger + Logo + CTA */}
           <div className="flex items-center justify-between md:hidden">
             <button
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               className="text-primary-500"
             >
               {/* Hamburger icon */}
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
               </svg>
             </button>

             <Link href="/" className="text-xl font-bold text-primary-700">
               Shine On
             </Link>

             <a href="tel:5705550100" className="text-primary-500 font-semibold">
               CALL
             </a>
           </div>

           {/* Desktop: Logo + Nav + CTA */}
           <div className="hidden md:flex items-center justify-between">
             <Link href="/" className="text-2xl font-bold text-primary-700">
               Shine On Car Wash
             </Link>

             <div className="flex items-center gap-6">
               <Link href="/services" className="hover:text-primary-500">Services</Link>
               <Link href="/membership" className="hover:text-primary-500">Membership</Link>
               <Link href="/locations" className="hover:text-primary-500">Locations</Link>
               <Link href="/about" className="hover:text-primary-500">About</Link>
               <Link href="/contact" className="hover:text-primary-500">Contact</Link>
               <Button variant="primary">Join Now</Button>
             </div>
           </div>

           {/* Mobile Menu (Slide-in) */}
           {mobileMenuOpen && (
             <div className="md:hidden mt-4 pb-4 border-t">
               {/* Mobile navigation links */}
             </div>
           )}
         </nav>
       </header>
     )
   }
   ```
   - Acceptance:
     - Mobile: Hamburger menu works, phone number clickable
     - Desktop: Horizontal nav, Join Now button prominent
     - Sticky header on scroll
   - Time: 4 hours
   - Dependencies: Button component

3. **Build Footer Component**

   ```typescript
   // src/components/layout/Footer.tsx
   import Link from 'next/link'
   import { getLocations } from '@/lib/data'

   export function Footer() {
     const locations = getLocations()

     return (
       <footer className="bg-gray-900 text-white py-12">
         <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {/* Company Info */}
             <div>
               <h3 className="text-xl font-bold mb-4">Shine On Car Wash</h3>
               <p className="text-gray-400">
                 Premium car wash service with modern AI technology
               </p>
             </div>

             {/* Quick Links */}
             <div>
               <h4 className="font-semibold mb-4">Quick Links</h4>
               <ul className="space-y-2">
                 <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                 <li><Link href="/membership" className="text-gray-400 hover:text-white">Membership</Link></li>
                 <li><Link href="/locations" className="text-gray-400 hover:text-white">Locations</Link></li>
               </ul>
             </div>

             {/* Locations */}
             <div>
               <h4 className="font-semibold mb-4">Our Locations</h4>
               {locations.map(loc => (
                 <div key={loc.id} className="mb-3">
                   <p className="font-medium">{loc.name}</p>
                   <a href={`tel:${loc.phone}`} className="text-gray-400 hover:text-white text-sm">
                     {loc.phone}
                   </a>
                 </div>
               ))}
             </div>

             {/* Hours & Social */}
             <div>
               <h4 className="font-semibold mb-4">Connect</h4>
               {/* Social media links */}
               {/* Newsletter signup */}
             </div>
           </div>

           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
             <p>&copy; 2025 Shine On Car Wash. All rights reserved.</p>
           </div>
         </div>
       </footer>
     )
   }
   ```
   - Acceptance: Footer displays locations, links work, responsive layout
   - Time: 3 hours
   - Dependencies: Data loading functions

4. **Create Reusable UI Components**

   ```typescript
   // src/components/ui/Button.tsx
   import { ButtonHTMLAttributes } from 'react'
   import { cn } from '@/lib/utils'

   interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
     variant?: 'primary' | 'secondary' | 'outline'
     size?: 'sm' | 'md' | 'lg'
   }

   export function Button({
     variant = 'primary',
     size = 'md',
     className,
     children,
     ...props
   }: ButtonProps) {
     return (
       <button
         className={cn(
           'rounded-lg font-semibold transition-colors',
           {
             'bg-accent-500 text-white hover:bg-accent-600': variant === 'primary',
             'bg-primary-500 text-white hover:bg-primary-600': variant === 'secondary',
             'border-2 border-primary-500 text-primary-500 hover:bg-primary-50': variant === 'outline',
             'px-4 py-2 text-sm': size === 'sm',
             'px-6 py-3 text-base': size === 'md',
             'px-8 py-4 text-lg': size === 'lg',
           },
           className
         )}
         {...props}
       >
         {children}
       </button>
     )
   }
   ```

   ```typescript
   // src/components/ui/Card.tsx
   export function Card({ children, className }: { children: React.ReactNode, className?: string }) {
     return (
       <div className={cn('bg-white rounded-lg shadow-md p-6', className)}>
         {children}
       </div>
     )
   }
   ```

   Other UI components:
   - `Input.tsx` - Form input
   - `Select.tsx` - Dropdown
   - `Badge.tsx` - Feature badges
   - `Container.tsx` - Max-width wrapper

   - Acceptance: All UI components render correctly, props work
   - Time: 4 hours
   - Dependencies: Utils function for `cn` (classnames)

**Milestone 1.3 Deliverable**: ✅ Core layout and UI components complete

---

### Phase 2: Core Pages & Content (Week 1-2, Days 5-10)

**Goal**: All essential pages built, mobile-responsive, connected to mock data

#### Milestone 2.1: Homepage

**Target**: Days 5-6 (10-12 hours)

**Tasks**:

1. **Hero Section with Primary CTA**

   ```typescript
   // src/components/features/Hero.tsx
   'use client'

   import Image from 'next/image'
   import { Button } from '@/components/ui/Button'
   import { motion } from 'framer-motion'

   export function Hero() {
     return (
       <section className="relative h-[600px] md:h-[700px] flex items-center">
         {/* Background Image */}
         <Image
           src="/images/hero-car-wash.jpg"
           alt="Car going through wash"
           fill
           className="object-cover"
           priority
         />

         {/* Overlay */}
         <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/70" />

         {/* Content */}
         <div className="relative container mx-auto px-4 text-white">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="max-w-2xl"
           >
             <h1 className="text-4xl md:text-6xl font-bold mb-4">
               Unlimited Shine,
               <br />
               Unbeatable Value
             </h1>

             <p className="text-xl md:text-2xl mb-8">
               Join 1,000+ members enjoying unlimited monthly washes from just $24/month
             </p>

             <div className="flex flex-col sm:flex-row gap-4">
               <Button variant="primary" size="lg">
                 Get Unlimited Washes
               </Button>
               <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                 Find a Location
               </Button>
             </div>

             <div className="mt-8 flex items-center gap-6 text-sm">
               <div className="flex items-center gap-2">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                 </svg>
                 <span>Cancel Anytime</span>
               </div>
               <div className="flex items-center gap-2">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                 </svg>
                 <span>2 Locations</span>
               </div>
             </div>
           </motion.div>
         </div>
       </section>
     )
   }
   ```
   - Acceptance:
     - Mobile: Full viewport height, readable text, buttons stack vertically
     - Desktop: 700px height, side-by-side CTAs
     - Image loads quickly, gradient overlay readable
   - Time: 4 hours
   - Dependencies: Button component, hero image

2. **Value Proposition Section**

   ```typescript
   // src/components/features/ValueProps.tsx
   const benefits = [
     {
       icon: '🚀',
       title: 'Save Time',
       description: 'Express wash in under 3 minutes. Get in, get out, get on with your day.',
     },
     {
       icon: '💰',
       title: 'Save Money',
       description: 'Unlimited washes for less than 2 single washes per month.',
     },
     {
       icon: '🤖',
       title: 'AI-Powered Service',
       description: '24/7 chatbot support and personalized wash recommendations.',
     },
     {
       icon: '🌱',
       title: 'Eco-Friendly',
       description: 'Water reclamation system uses 90% less water than home washing.',
     },
   ]

   export function ValueProps() {
     return (
       <section className="py-16 bg-gray-50">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
             Why Choose Shine On?
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {benefits.map((benefit, index) => (
               <div key={index} className="text-center">
                 <div className="text-5xl mb-4">{benefit.icon}</div>
                 <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                 <p className="text-gray-600">{benefit.description}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
     )
   }
   ```
   - Acceptance: 4-column grid on desktop, stacks on mobile, icons render
   - Time: 2 hours
   - Dependencies: None

3. **Membership Tiers Preview**

   ```typescript
   // src/components/features/MembershipPreview.tsx
   import { getPricingTiers } from '@/lib/data'
   import { Button } from '@/components/ui/Button'
   import Link from 'next/link'

   export function MembershipPreview() {
     const tiers = getPricingTiers().slice(0, 3) // Show all 3 tiers

     return (
       <section className="py-16">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
             Choose Your Plan
           </h2>
           <p className="text-center text-gray-600 mb-12">
             Unlimited washes, cancel anytime. Save up to $18/month.
           </p>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             {tiers.map((tier) => (
               <div
                 key={tier.id}
                 className={`bg-white rounded-lg shadow-lg p-8 ${
                   tier.popular ? 'ring-4 ring-accent-500 relative' : ''
                 }`}
               >
                 {tier.popular && (
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                     Most Popular
                   </div>
                 )}

                 <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                 <div className="mb-4">
                   <span className="text-4xl font-bold">${tier.price}</span>
                   <span className="text-gray-600">/month</span>
                 </div>

                 <p className="text-sm text-green-600 mb-6">{tier.savings}</p>

                 <ul className="space-y-3 mb-8">
                   {tier.features.map((feature, idx) => (
                     <li key={idx} className="flex items-start gap-2">
                       <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                       </svg>
                       <span className="text-sm">{feature}</span>
                     </li>
                   ))}
                 </ul>

                 <Button
                   variant={tier.popular ? 'primary' : 'outline'}
                   className="w-full"
                 >
                   Choose Plan
                 </Button>
               </div>
             ))}
           </div>

           <div className="text-center mt-8">
             <Link href="/membership" className="text-primary-500 hover:underline">
               Compare all plans →
             </Link>
           </div>
         </div>
       </section>
     )
   }
   ```
   - Acceptance:
     - 3-tier comparison with "Most Popular" badge
     - Mobile: Cards stack vertically
     - Desktop: 3 columns, middle tier highlighted
     - Feature checkmarks display
   - Time: 4 hours
   - Dependencies: Pricing data, Button component

4. **Social Proof / Testimonials**

   ```typescript
   // src/components/features/Testimonials.tsx
   import { getTestimonials } from '@/lib/data'

   export function Testimonials() {
     const testimonials = getTestimonials().slice(0, 3) // Show 3 on homepage

     return (
       <section className="py-16 bg-gray-50">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
             What Our Members Say
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {testimonials.map((testimonial) => (
               <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
                 <div className="flex items-center gap-1 mb-4">
                   {[...Array(5)].map((_, i) => (
                     <svg
                       key={i}
                       className={`w-5 h-5 ${
                         i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                       }`}
                       fill="currentColor"
                       viewBox="0 0 20 20"
                     >
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   ))}
                 </div>

                 <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

                 <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                     {testimonial.name.charAt(0)}
                   </div>
                   <div>
                     <p className="font-semibold">{testimonial.name}</p>
                     <p className="text-sm text-gray-600">{testimonial.location}</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>
     )
   }
   ```
   - Acceptance: 3 testimonials display with stars, responsive grid
   - Time: 2 hours
   - Dependencies: Testimonials data

5. **Assemble Homepage**

   ```typescript
   // src/app/page.tsx
   import { Hero } from '@/components/features/Hero'
   import { ValueProps } from '@/components/features/ValueProps'
   import { MembershipPreview } from '@/components/features/MembershipPreview'
   import { Testimonials } from '@/components/features/Testimonials'

   export default function HomePage() {
     return (
       <>
         <Hero />
         <ValueProps />
         <MembershipPreview />
         <Testimonials />
         {/* CTA Section */}
         <section className="py-16 bg-primary-700 text-white text-center">
           <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
           <p className="text-xl mb-8">Join today and get your first month for $9.99</p>
           <Button variant="primary" size="lg">
             Sign Up Now
           </Button>
         </section>
       </>
     )
   }
   ```
   - Acceptance:
     - All sections render in order
     - Page loads in < 3 seconds
     - No console errors
     - Mobile-responsive
   - Time: 1 hour
   - Dependencies: All section components

**Milestone 2.1 Deliverable**: ✅ Complete homepage with hero, value props, pricing preview, testimonials

---

#### Milestone 2.2: Services Page

**Target**: Day 7 (6-8 hours)

**Tasks**:

1. **Services Grid with Descriptions**
   - Load services from data/services.md
   - Display service cards with images
   - Feature list for each service
   - Mobile: 1 column, Desktop: 2-3 columns
   - Acceptance: All services display with images and features
   - Time: 4 hours
   - Dependencies: Services data

2. **Process Explanation Section**
   - "How It Works" with 3-4 steps
   - Icons or numbers for each step
   - Simple, visual explanation
   - Acceptance: Clear visual flow, mobile-responsive
   - Time: 2 hours
   - Dependencies: None

3. **Service Add-Ons Section**
   - Hand dry, tire shine, air freshener, etc.
   - Pricing for single services
   - "Available with membership" messaging
   - Acceptance: Add-ons clearly presented
   - Time: 2 hours
   - Dependencies: Services data

**Milestone 2.2 Deliverable**: ✅ Complete services page

---

#### Milestone 2.3: Locations Page

**Target**: Day 8 (8-10 hours)

**Tasks**:

1. **Google Maps Integration**
   - Install `@googlemaps/js-api-loader`
   - Set up Google Maps API key (environment variable)
   - Create Map component showing both locations
   - Markers for each location
   - Click marker to see details
   - Acceptance: Map displays both locations, markers clickable
   - Time: 4 hours
   - Dependencies: Google Maps API key

2. **Location Cards**
   - Loop through getLocations()
   - Display address, phone, hours
   - Features list (24/7, free vacuums, etc.)
   - "Get Directions" button (Google Maps link)
   - "Call Now" button (tel: link)
   - Acceptance: Both locations display with all info
   - Time: 3 hours
   - Dependencies: Locations data

3. **Hours Display**
   - Today's hours highlighted
   - Full week schedule
   - Special hours messaging (holidays)
   - Acceptance: Current day's hours emphasized
   - Time: 2 hours
   - Dependencies: Locations data

**Milestone 2.3 Deliverable**: ✅ Complete locations page with Google Maps

---

#### Milestone 2.4: Membership Page

**Target**: Day 9 (6-8 hours)

**Tasks**:

1. **Detailed Pricing Comparison Table**
   - All 3 tiers side-by-side
   - Feature-by-feature comparison
   - Checkmarks for included features
   - "Most Popular" badge
   - Mobile: Swipeable cards or accordion
   - Acceptance: Easy to compare all features
   - Time: 4 hours
   - Dependencies: Pricing data

2. **FAQ Section**
   - Load from data/faqs.md
   - Filter by category: "Membership"
   - Accordion component
   - Questions like: "Can I cancel?", "Which locations?", "How does billing work?"
   - Acceptance: FAQs display, accordions work
   - Time: 3 hours
   - Dependencies: FAQ data, Accordion component

3. **Signup CTA Section**
   - Prominent "Join Now" button
   - First month discount messaging
   - Trust signals (cancel anytime, no commitment)
   - Acceptance: Clear call-to-action
   - Time: 1 hour
   - Dependencies: Button component

**Milestone 2.4 Deliverable**: ✅ Complete membership page

---

#### Milestone 2.5: About & Contact Pages

**Target**: Day 10 (4-6 hours)

**Tasks**:

1. **About Page**
   - Company story (mock content)
   - Values: Quality, Technology, Community, Environment
   - Team section (optional, mock photos)
   - Stats: "10,000+ washes per month", "1,000+ members", "2 locations"
   - Acceptance: Professional about page
   - Time: 2 hours
   - Dependencies: None

2. **Contact Page**
   - Contact form (Netlify Forms)
   - Name, email, phone, location, message fields
   - Form validation (React Hook Form + Zod)
   - Locations with phone/address
   - "Prefer to talk? Call us" section
   - Acceptance: Form submits to Netlify, validation works
   - Time: 4 hours
   - Dependencies: React Hook Form, Zod, Netlify Forms setup

**Milestone 2.5 Deliverable**: ✅ About and Contact pages complete

---

### Phase 3: Mobile Optimization (Week 2-3, Days 11-15)

**Goal**: Industry-leading mobile experience, Lighthouse score > 90

#### Milestone 3.1: Performance Optimization

**Target**: Days 11-12 (10-12 hours)

**Tasks**:

1. **Image Optimization**
   - Convert all images to WebP format
   - Use Next.js Image component everywhere
   - Add blur placeholders
   - Lazy load below-fold images
   - Set explicit width/height to prevent layout shift
   - Acceptance: All images optimized, CLS < 0.1
   - Time: 4 hours
   - Dependencies: Images collected

2. **Code Splitting & Lazy Loading**
   - Dynamic import for heavy components
   - Lazy load map component
   - Lazy load chatbot component
   - Route-based code splitting (automatic with Next.js)
   - Acceptance: Initial bundle < 200KB gzipped
   - Time: 3 hours
   - Dependencies: Components built

3. **Font Optimization**
   - Use next/font for automatic optimization
   - Subset fonts (Latin only if applicable)
   - Preload critical fonts
   - Acceptance: No font swap flash (FOUT)
   - Time: 2 hours
   - Dependencies: None

4. **Run Lighthouse Audits**
   - Mobile audit from Chrome DevTools
   - Desktop audit
   - Fix critical issues
   - Document scores
   - Acceptance: Mobile score > 85, Desktop score > 90
   - Time: 3 hours
   - Dependencies: All pages built

**Milestone 3.1 Deliverable**: ✅ Lighthouse scores optimized

---

#### Milestone 3.2: Mobile UX Enhancements

**Target**: Days 13-14 (10-12 hours)

**Tasks**:

1. **Touch-Friendly Interactions**
   - Minimum button size: 44x44px (iOS guidelines)
   - Adequate spacing between tappable elements
   - Swipe gestures for pricing tier comparison
   - Pull-to-refresh (optional)
   - Acceptance: All buttons easily tappable, no mis-taps
   - Time: 3 hours
   - Dependencies: All components

2. **Mobile Navigation Improvements**
   - Smooth slide-in animation for mobile menu
   - Close menu on route change
   - Bottom nav bar (optional alternative)
   - Sticky "Call Now" footer button
   - Acceptance: Navigation feels native-like
   - Time: 3 hours
   - Dependencies: Header component

3. **Form Optimization for Mobile**
   - Appropriate input types (tel, email, number)
   - Autofocus first field
   - Show/hide password toggle
   - Clear button for text inputs
   - Success/error states clearly visible
   - Acceptance: Forms easy to fill on mobile
   - Time: 2 hours
   - Dependencies: Contact form

4. **Loading States & Feedback**
   - Skeleton screens for loading content
   - Button loading spinners
   - Toast notifications for actions
   - Progress indicators
   - Acceptance: User always knows what's happening
   - Time: 3 hours
   - Dependencies: All interactive features

**Milestone 3.2 Deliverable**: ✅ Exceptional mobile user experience

---

#### Milestone 3.3: Accessibility Audit

**Target**: Day 15 (6-8 hours)

**Tasks**:

1. **WCAG 2.1 Level AA Compliance**
   - Install @axe-core/react for automated testing
   - Fix color contrast issues (4.5:1 for text, 3:1 for large text)
   - Add ARIA labels where needed
   - Ensure all interactive elements keyboard accessible
   - Test with screen reader (NVDA or VoiceOver)
   - Acceptance: Zero critical accessibility errors
   - Time: 4 hours
   - Dependencies: All components

2. **Focus Management**
   - Visible focus indicators
   - Logical tab order
   - Skip to main content link
   - Focus trapped in modals
   - Acceptance: Can navigate entire site with keyboard only
   - Time: 2 hours
   - Dependencies: All interactive components

3. **Alt Text for Images**
   - Descriptive alt text for all images
   - Empty alt for decorative images
   - Acceptance: All images have appropriate alt text
   - Time: 2 hours
   - Dependencies: All images

**Milestone 3.3 Deliverable**: ✅ WCAG 2.1 AA compliant site

---

### Phase 4: AI Feature Integration (Week 3-4, Days 16-21)

**Goal**: Implement Phase 1 AI features to differentiate from competitors

#### Milestone 4.1: AI Chatbot (HIGHEST PRIORITY)

**Target**: Days 16-18 (14-16 hours)

**Tasks**:

1. **Set Up Netlify Function**

   ```typescript
   // netlify/functions/chatbot.ts
   import { Handler } from '@netlify/functions'
   import OpenAI from 'openai'

   const openai = new OpenAI({
     apiKey: process.env.OPENAI_API_KEY,
   })

   export const handler: Handler = async (event) => {
     if (event.httpMethod !== 'POST') {
       return { statusCode: 405, body: 'Method Not Allowed' }
     }

     const { message, conversationHistory } = JSON.parse(event.body || '{}')

     try {
       const response = await openai.chat.completions.create({
         model: 'gpt-4-turbo-preview',
         messages: [
           {
             role: 'system',
             content: `You are a helpful assistant for Shine On Car Wash.
             We have 2 locations in Scranton, PA.
             We offer 3 membership tiers: Basic ($24/mo), Premium ($34/mo), Ultimate ($42/mo).
             We're open 24/7 at our Downtown location, 7am-8pm at North Side.
             Answer questions about pricing, hours, locations, services.
             Be friendly, concise, and helpful.
             If you don't know something, offer to connect them with a team member.`,
           },
           ...conversationHistory,
           { role: 'user', content: message },
         ],
         max_tokens: 200,
         temperature: 0.7,
       })

       return {
         statusCode: 200,
         body: JSON.stringify({
           reply: response.choices[0].message.content,
         }),
       }
     } catch (error) {
       console.error('Chatbot error:', error)
       return {
         statusCode: 500,
         body: JSON.stringify({
           error: 'Sorry, I\'m having trouble right now. Please call us at (570) 555-0100.'
         }),
       }
     }
   }
   ```
   - Acceptance: Function deploys, responds to test message
   - Time: 3 hours
   - Dependencies: OpenAI API key, Netlify Functions setup

2. **Create Chatbot UI Component**

   ```typescript
   // src/components/features/Chatbot.tsx
   'use client'

   import { useState } from 'react'
   import { motion, AnimatePresence } from 'framer-motion'

   interface Message {
     role: 'user' | 'assistant'
     content: string
   }

   export function Chatbot() {
     const [isOpen, setIsOpen] = useState(false)
     const [messages, setMessages] = useState<Message[]>([
       { role: 'assistant', content: 'Hi! How can I help you today?' },
     ])
     const [input, setInput] = useState('')
     const [isLoading, setIsLoading] = useState(false)

     const sendMessage = async () => {
       if (!input.trim()) return

       const userMessage = { role: 'user' as const, content: input }
       setMessages(prev => [...prev, userMessage])
       setInput('')
       setIsLoading(true)

       try {
         const response = await fetch('/.netlify/functions/chatbot', {
           method: 'POST',
           body: JSON.stringify({
             message: input,
             conversationHistory: messages,
           }),
         })

         const data = await response.json()

         setMessages(prev => [
           ...prev,
           { role: 'assistant', content: data.reply },
         ])
       } catch (error) {
         setMessages(prev => [
           ...prev,
           {
             role: 'assistant',
             content: 'Sorry, I\'m having trouble. Please call (570) 555-0100.'
           },
         ])
       } finally {
         setIsLoading(false)
       }
     }

     return (
       <>
         {/* Floating Chat Button */}
         <button
           onClick={() => setIsOpen(!isOpen)}
           className="fixed bottom-6 right-6 w-16 h-16 bg-accent-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform z-50"
         >
           {isOpen ? '✕' : '💬'}
         </button>

         {/* Chat Window */}
         <AnimatePresence>
           {isOpen && (
             <motion.div
               initial={{ opacity: 0, y: 20, scale: 0.95 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               exit={{ opacity: 0, y: 20, scale: 0.95 }}
               className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-white rounded-lg shadow-2xl flex flex-col z-50"
             >
               {/* Header */}
               <div className="bg-primary-500 text-white p-4 rounded-t-lg">
                 <h3 className="font-semibold">Shine On Assistant</h3>
                 <p className="text-sm opacity-90">Ask me anything!</p>
               </div>

               {/* Messages */}
               <div className="flex-1 overflow-y-auto p-4 space-y-4">
                 {messages.map((msg, idx) => (
                   <div
                     key={idx}
                     className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                   >
                     <div
                       className={`max-w-[80%] p-3 rounded-lg ${
                         msg.role === 'user'
                           ? 'bg-primary-500 text-white'
                           : 'bg-gray-100 text-gray-900'
                       }`}
                     >
                       {msg.content}
                     </div>
                   </div>
                 ))}

                 {isLoading && (
                   <div className="flex justify-start">
                     <div className="bg-gray-100 p-3 rounded-lg">
                       <div className="flex gap-1">
                         <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                         <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                         <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                       </div>
                     </div>
                   </div>
                 )}
               </div>

               {/* Input */}
               <div className="p-4 border-t">
                 <div className="flex gap-2">
                   <input
                     type="text"
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                     onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                     placeholder="Type your message..."
                     className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                   />
                   <button
                     onClick={sendMessage}
                     disabled={isLoading || !input.trim()}
                     className="px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 disabled:opacity-50"
                   >
                     Send
                   </button>
                 </div>
               </div>
             </motion.div>
           )}
         </AnimatePresence>
       </>
     )
   }
   ```
   - Acceptance:
     - Floating button visible on all pages
     - Chat window opens smoothly
     - Messages send and receive
     - Typing indicator shows while waiting
     - Scrolls to latest message
   - Time: 6 hours
   - Dependencies: Chatbot function

3. **Train Chatbot with FAQ Data**
   - Update system prompt with comprehensive business info
   - Include pricing, hours, locations, services
   - Handle common questions:
     - "What are your hours?"
     - "How much does membership cost?"
     - "Where are you located?"
     - "Can I cancel anytime?"
     - "Do you have free vacuums?"
   - Fallback responses for unknown questions
   - Acceptance: Chatbot answers 80%+ of test questions correctly
   - Time: 3 hours
   - Dependencies: FAQ data, chatbot function

4. **Implement Rate Limiting & Caching**
   - Netlify edge function caching for common questions
   - Rate limit: 10 requests per minute per IP
   - Cache responses for 1 hour
   - Acceptance: Duplicate questions return instantly, abuse prevented
   - Time: 2 hours
   - Dependencies: Chatbot function

5. **Add Analytics Tracking**
   - Log questions asked (for improvement)
   - Track response time
   - Monitor API costs
   - Acceptance: Dashboard shows chatbot usage
   - Time: 2 hours
   - Dependencies: Analytics setup

**Milestone 4.1 Deliverable**: ✅ Fully functional AI chatbot resolving 60%+ of inquiries

---

#### Milestone 4.2: Weather-Based Personalization

**Target**: Days 19-20 (8-10 hours)

**Tasks**:

1. **Set Up Weather API Integration**

   ```typescript
   // netlify/functions/weather.ts
   import { Handler } from '@netlify/functions'

   export const handler: Handler = async (event) => {
     const { lat, lng } = JSON.parse(event.body || '{}')

     const response = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.WEATHER_API_KEY}&units=imperial`
     )

     const data = await response.json()

     return {
       statusCode: 200,
       body: JSON.stringify({
         condition: data.weather[0].main, // Rain, Clear, Snow, etc.
         temp: data.main.temp,
         description: data.weather[0].description,
       }),
     }
   }
   ```
   - Acceptance: Function returns weather data for coordinates
   - Time: 2 hours
   - Dependencies: Weather API key

2. **Dynamic Hero Message Based on Weather**

   ```typescript
   // src/components/features/WeatherHero.tsx
   'use client'

   import { useState, useEffect } from 'react'

   export function WeatherHero() {
     const [weather, setWeather] = useState<string>('')
     const [message, setMessage] = useState<string>('')

     useEffect(() => {
       // Get user location
       navigator.geolocation.getCurrentPosition(async (position) => {
         const { latitude, longitude } = position.coords

         const response = await fetch('/.netlify/functions/weather', {
           method: 'POST',
           body: JSON.stringify({ lat: latitude, lng: longitude }),
         })

         const data = await response.json()
         setWeather(data.condition)

         // Set message based on weather
         const messages = {
           Rain: 'Rainy day? Protect your car from road grime with our underbody wash!',
           Clear: 'Beautiful day! Keep your car shining bright with a wash.',
           Snow: 'Winter weather alert! Remove salt and protect against rust.',
           Clouds: 'Don\'t let the clouds dull your shine. Get washed today!',
         }

         setMessage(messages[data.condition as keyof typeof messages] || 'Get your car sparkling clean today!')
       })
     }, [])

     return (
       <div className="bg-blue-50 p-4 text-center">
         {weather && (
           <p className="text-lg font-medium text-primary-700">
             ☀️ {message}
           </p>
         )}
       </div>
     )
   }
   ```
   - Acceptance: Homepage message adapts to current weather
   - Time: 3 hours
   - Dependencies: Weather function, geolocation permission

3. **Weather-Based Service Recommendations**
   - Rainy forecast: Recommend "Ultimate Ceramic" for rain protection
   - Post-snow: Highlight underbody wash and rust inhibitor
   - Sunny streaks: Promote "Premium Protection" for UV protection
   - Pollen season: Emphasize exterior wash frequency
   - Acceptance: Relevant service highlighted based on weather
   - Time: 3 hours
   - Dependencies: Weather API, Services data

4. **Cache Weather Data (1 hour)**
   - Store weather data in localStorage
   - Refresh every 1 hour
   - Fallback message if weather API fails
   - Acceptance: Reduces API calls, works offline
   - Time: 2 hours
   - Dependencies: Weather integration

**Milestone 4.2 Deliverable**: ✅ Weather-based personalization live

---

#### Milestone 4.3: Personalized Recommendations

**Target**: Day 21 (6-8 hours)

**Tasks**:

1. **Location-Based Service Suggestions**
   - Detect nearest location
   - Show location-specific offers
   - "Visit our Downtown location (2.3 miles away)"
   - Acceptance: Nearest location detected and displayed
   - Time: 3 hours
   - Dependencies: Geolocation API

2. **Wash Frequency Reminder (Mock)**
   - "Last washed 5 days ago" (mock data)
   - "Members wash 2-4x per month on average"
   - "Perfect time for another wash!"
   - Acceptance: Reminder displays with relevant messaging
   - Time: 2 hours
   - Dependencies: None (mock data for POC)

3. **Smart Package Selector**
   - Ask 3 questions: Vehicle type, wash frequency, budget
   - Recommend best membership tier
   - "Based on your answers, Premium Protection is perfect for you"
   - Acceptance: Quiz works, gives reasonable recommendation
   - Time: 3 hours
   - Dependencies: Pricing data

**Milestone 4.3 Deliverable**: ✅ Personalized recommendations implemented

---

### Phase 5: Enhanced Features (Week 4-5, Days 22-28)

**Goal**: Features that 70%+ of competitors lack

#### Milestone 5.1: Before/After Gallery

**Target**: Days 22-23 (8-10 hours)

**Tasks**:

1. **Gallery Component with Image Slider**
   - Install swiper or embla-carousel
   - Create before/after comparison slider
   - 10+ high-quality before/after images
   - Swipeable on mobile, arrows on desktop
   - Acceptance: Gallery works smoothly, images optimized
   - Time: 5 hours
   - Dependencies: Before/after images

2. **Interactive Before/After Comparison**
   - Draggable slider to reveal before/after
   - Labels: "Before" and "After"
   - Hover effect on desktop
   - Acceptance: Interactive slider works on all devices
   - Time: 3 hours
   - Dependencies: Comparison images

3. **Add to Services Page**
   - Embed gallery below service descriptions
   - "See the difference" section
   - Acceptance: Gallery integrated into services page
   - Time: 2 hours
   - Dependencies: Gallery component

**Milestone 5.1 Deliverable**: ✅ Professional before/after gallery

---

#### Milestone 5.2: Video Content

**Target**: Days 24-25 (6-8 hours)

**Tasks**:

1. **Virtual Tour Video**
   - Source or create 30-60 second facility tour video
   - Embed on About page
   - Show wash tunnel, vacuums, member lanes
   - Optimize for fast loading (compress, use poster image)
   - Acceptance: Video plays smoothly, loads quickly
   - Time: 4 hours
   - Dependencies: Video content

2. **Wash Process Video**
   - Short (15-30 sec) video of car going through wash
   - Embed on Services page
   - Auto-play muted with controls
   - Acceptance: Video enhances service description
   - Time: 2 hours
   - Dependencies: Wash video

3. **Customer Testimonial Videos (Optional)**
   - If available, embed 2-3 short testimonial videos
   - Placeholder for POC: Can use stock or skip
   - Acceptance: Videos display if available
   - Time: 2 hours
   - Dependencies: Testimonial videos

**Milestone 5.2 Deliverable**: ✅ Video content integrated

---

#### Milestone 5.3: Email Signup & Newsletter

**Target**: Day 26 (4-6 hours)

**Tasks**:

1. **Email Signup Form**
   - Embedded in footer
   - "Get exclusive offers" messaging
   - Email validation
   - Submit to Netlify Forms or Mailchimp
   - Acceptance: Form submits, email captured
   - Time: 3 hours
   - Dependencies: Netlify Forms or Mailchimp account

2. **Popup/Modal for Email Capture (Optional)**
   - Exit-intent popup
   - "Get 10% off your first month"
   - Only show once per user (localStorage)
   - Acceptance: Popup shows once, email captured
   - Time: 3 hours
   - Dependencies: Email form

**Milestone 5.3 Deliverable**: ✅ Email capture system live

---

#### Milestone 5.4: Enhanced Interactivity

**Target**: Days 27-28 (8-10 hours)

**Tasks**:

1. **Smooth Scroll Animations**
   - Install framer-motion (already included)
   - Fade-in-up animations for sections
   - Parallax effect on hero image
   - Stagger children animations
   - Acceptance: Smooth, professional animations
   - Time: 4 hours
   - Dependencies: Framer Motion

2. **Micro-Interactions**
   - Button hover effects
   - Card hover lift
   - Input focus animations
   - Success checkmarks
   - Acceptance: Site feels polished and responsive
   - Time: 3 hours
   - Dependencies: All components

3. **Dark Mode (Optional)**
   - Toggle in header
   - Tailwind dark: classes
   - Persist preference in localStorage
   - Acceptance: Dark mode works, preference saved
   - Time: 3 hours
   - Dependencies: All components (if implementing)

**Milestone 5.4 Deliverable**: ✅ Enhanced interactivity and polish

---

### Phase 6: Content & Polish (Week 5, Days 29-33)

**Goal**: Professional content, final UX refinements

#### Milestone 6.1: Content Writing & SEO

**Target**: Days 29-30 (10-12 hours)

**Tasks**:

1. **SEO Optimization**
   - Update page titles and meta descriptions
   - Add Open Graph tags for social sharing
   - Create sitemap.xml
   - Add robots.txt
   - LocalBusiness schema markup for locations
   - Acceptance: SEO audit score > 90
   - Time: 4 hours
   - Dependencies: All pages

2. **Professional Copywriting**
   - Refine homepage hero copy
   - Polish service descriptions
   - Write compelling membership benefits
   - About page storytelling
   - Proofread all content
   - Acceptance: Content is clear, persuasive, error-free
   - Time: 4 hours
   - Dependencies: All pages

3. **Image Assets & Photography**
   - Replace placeholder images with high-quality stock
   - Ensure consistent style (bright, clean, modern)
   - Optimize all images (WebP, proper dimensions)
   - Add proper alt text
   - Acceptance: All images professional quality, optimized
   - Time: 4 hours
   - Dependencies: Image sources (Unsplash, Pexels)

**Milestone 6.1 Deliverable**: ✅ SEO-optimized, professionally written content

---

#### Milestone 6.2: Final UX Polish

**Target**: Days 31-32 (10-12 hours)

**Tasks**:

1. **Cross-Browser Testing**
   - Test in Chrome, Firefox, Safari, Edge
   - Fix any browser-specific issues
   - Polyfills if needed
   - Acceptance: Works identically in all major browsers
   - Time: 3 hours
   - Dependencies: All features complete

2. **Mobile Device Testing**
   - Test on actual iOS devices (iPhone 12+)
   - Test on Android devices (Samsung, Pixel)
   - Tablet testing (iPad, Android tablets)
   - Fix any device-specific issues
   - Acceptance: Perfect experience on all devices
   - Time: 4 hours
   - Dependencies: All features complete

3. **Loading States & Error Handling**
   - Skeleton screens for all data loading
   - Error boundaries for component failures
   - Offline detection and messaging
   - 404 page design
   - 500 error page design
   - Acceptance: Graceful handling of all edge cases
   - Time: 3 hours
   - Dependencies: All components

4. **Performance Final Pass**
   - Run Lighthouse audits on all pages
   - Fix any performance regressions
   - Optimize bundle size
   - Add performance monitoring
   - Acceptance: All pages > 90 Lighthouse mobile score
   - Time: 2 hours
   - Dependencies: All pages complete

**Milestone 6.2 Deliverable**: ✅ Polished, tested UX across all devices and browsers

---

#### Milestone 6.3: Analytics & Monitoring

**Target**: Day 33 (4-6 hours)

**Tasks**:

1. **Set Up Analytics**
   - Install Vercel Analytics or Google Analytics 4
   - Track page views, sessions, conversions
   - Set up goals (form submissions, button clicks)
   - Privacy-compliant setup
   - Acceptance: Analytics tracking all key events
   - Time: 2 hours
   - Dependencies: None

2. **Error Monitoring**
   - Install Sentry for error tracking
   - Configure source maps
   - Set up alerts for critical errors
   - Acceptance: Errors logged and reported
   - Time: 2 hours
   - Dependencies: None

3. **Uptime Monitoring**
   - Set up Netlify status monitoring
   - Or use UptimeRobot (free)
   - Email alerts if site goes down
   - Acceptance: Monitoring active, alerts configured
   - Time: 1 hour
   - Dependencies: Site deployed

4. **Create Analytics Dashboard**
   - Document key metrics to track
   - Set up weekly reports
   - Acceptance: Dashboard shows relevant metrics
   - Time: 1 hour
   - Dependencies: Analytics setup

**Milestone 6.3 Deliverable**: ✅ Analytics and monitoring in place

---

### Phase 7: Testing & Launch (Week 6, Days 34-42)

**Goal**: Production-ready site, launched successfully

#### Milestone 7.1: Quality Assurance

**Target**: Days 34-36 (16-18 hours)

**Tasks**:

1. **Comprehensive Testing Checklist**

   **Functionality Testing**:
   - [ ] All navigation links work
   - [ ] All buttons perform expected actions
   - [ ] All forms submit successfully
   - [ ] All forms validate correctly
   - [ ] Chatbot responds accurately
   - [ ] Map displays correctly
   - [ ] Images load properly
   - [ ] Videos play smoothly
   - [ ] Modal/popup behaviors correct
   - Time: 4 hours

   **Mobile Testing**:
   - [ ] Responsive on all breakpoints (320px to 2560px)
   - [ ] Touch interactions work smoothly
   - [ ] No horizontal scrolling issues
   - [ ] Text readable without zooming
   - [ ] Buttons easily tappable (44x44px minimum)
   - [ ] Forms usable on mobile keyboards
   - [ ] Performance acceptable on 3G
   - Time: 3 hours

   **Performance Testing**:
   - [ ] Lighthouse mobile score > 90
   - [ ] Lighthouse desktop score > 95
   - [ ] Page load time < 2 seconds
   - [ ] Time to Interactive < 3 seconds
   - [ ] Cumulative Layout Shift < 0.1
   - [ ] First Contentful Paint < 1.5 seconds
   - Time: 3 hours

   **Accessibility Testing**:
   - [ ] WCAG 2.1 Level AA compliant
   - [ ] All images have alt text
   - [ ] Color contrast meets standards
   - [ ] Keyboard navigation works
   - [ ] Screen reader compatible
   - [ ] Focus indicators visible
   - [ ] No accessibility errors (axe DevTools)
   - Time: 3 hours

   **SEO Testing**:
   - [ ] All pages have unique titles
   - [ ] All pages have meta descriptions
   - [ ] Open Graph tags present
   - [ ] Sitemap.xml exists and valid
   - [ ] Robots.txt configured
   - [ ] Schema markup valid
   - [ ] Mobile-friendly (Google test)
   - Time: 2 hours

   **Cross-Browser Testing**:
   - [ ] Chrome (latest): Works perfectly
   - [ ] Firefox (latest): Works perfectly
   - [ ] Safari (iOS & macOS): Works perfectly
   - [ ] Edge (latest): Works perfectly
   - [ ] Samsung Internet: Works perfectly
   - Time: 2 hours

   - Acceptance: All checklist items pass
   - Time: 17 hours total
   - Dependencies: All features complete

2. **User Acceptance Testing**
   - Share with 5-10 test users
   - Collect feedback on usability
   - Test membership signup flow
   - Test chatbot conversations
   - Document issues and fix critical ones
   - Acceptance: 90%+ of testers successfully complete key tasks
   - Time: 6 hours (includes fixes)
   - Dependencies: QA checklist complete

**Milestone 7.1 Deliverable**: ✅ Fully tested, QA-approved site

---

#### Milestone 7.2: Pre-Launch Preparation

**Target**: Days 37-38 (8-10 hours)

**Tasks**:

1. **Environment Configuration**
   - Set all environment variables in Netlify
   - API keys (OpenAI, Weather, Google Maps)
   - Configure custom domain (if applicable)
   - Set up SSL certificate (automatic with Netlify)
   - Acceptance: All env vars set, HTTPS working
   - Time: 2 hours
   - Dependencies: Netlify account

2. **Production Build Optimization**
   - Run production build locally
   - Fix any build errors
   - Optimize bundle size
   - Test production build thoroughly
   - Acceptance: Production build succeeds, site works identically
   - Time: 3 hours
   - Dependencies: All features complete

3. **Create Documentation**
   - README.md with setup instructions
   - DEPLOYMENT.md with deployment steps
   - ENV.md with environment variables needed
   - MAINTENANCE.md with common tasks
   - Acceptance: New developer can set up project from docs
   - Time: 3 hours
   - Dependencies: None

4. **Final Security Review**
   - No API keys in client code
   - All forms have CSRF protection
   - Rate limiting on API endpoints
   - Content Security Policy headers
   - Acceptance: No security vulnerabilities
   - Time: 2 hours
   - Dependencies: All features complete

**Milestone 7.2 Deliverable**: ✅ Production-ready, documented codebase

---

#### Milestone 7.3: Launch!

**Target**: Day 39 (4-6 hours)

**Tasks**:

1. **Deploy to Production**
   - Merge to main branch
   - Trigger Netlify production deploy
   - Verify deployment succeeded
   - Test production URL
   - Acceptance: Live site accessible, working perfectly
   - Time: 1 hour
   - Dependencies: All testing complete

2. **Domain Configuration (If Applicable)**
   - Point custom domain to Netlify
   - Wait for DNS propagation (can take 24-48 hours)
   - Test custom domain
   - Force HTTPS redirect
   - Acceptance: Custom domain works with HTTPS
   - Time: 2 hours (mostly waiting)
   - Dependencies: Domain purchased

3. **Final Smoke Testing**
   - Test all critical paths on production
   - Homepage loads
   - Chatbot works
   - Forms submit
   - Map displays
   - All links work
   - Acceptance: Production site 100% functional
   - Time: 2 hours
   - Dependencies: Site deployed

4. **Launch Communications**
   - Notify stakeholders of launch
   - Share production URL
   - Document launch date/time
   - Acceptance: Stakeholders informed
   - Time: 1 hour
   - Dependencies: None

**Milestone 7.3 Deliverable**: ✅ LIVE WEBSITE! 🚀

---

#### Milestone 7.4: Post-Launch Monitoring

**Target**: Days 40-42 (6-8 hours)

**Tasks**:

1. **Monitor Analytics (First 48 Hours)**
   - Watch for traffic spikes or issues
   - Monitor error rates
   - Check chatbot usage
   - Review form submissions
   - Acceptance: No critical issues detected
   - Time: 2 hours (spread over 48 hours)
   - Dependencies: Site launched

2. **Performance Monitoring**
   - Watch Lighthouse scores
   - Monitor Core Web Vitals
   - Check API usage and costs
   - Verify Netlify function execution
   - Acceptance: Performance within expected ranges
   - Time: 2 hours
   - Dependencies: Site launched

3. **User Feedback Collection**
   - Monitor support channels
   - Collect user feedback
   - Document feature requests
   - Prioritize any urgent fixes
   - Acceptance: Feedback system in place
   - Time: 2 hours
   - Dependencies: Site launched

4. **Create Post-Launch Report**
   - Document launch metrics
   - Lighthouse scores
   - Key learnings
   - Recommendations for Phase 2
   - Acceptance: Report complete
   - Time: 2 hours
   - Dependencies: 48 hours of data

**Milestone 7.4 Deliverable**: ✅ Stable production site with monitoring

---

## Appendices

### A. Key Statistics from Planning Documents

**From WEB.md**:
- 70% of automotive bookings happen on mobile
- Members generate $444 LTV vs $64 retail (7x difference)
- 70% of revenue from memberships for top operators
- AI chatbots resolve 60% of inquiries for $500/month
- First 90 days predict year-one results with 90% accuracy
- 100% of successful sites have: mobile optimization, membership signup, transparent pricing, location finder, review integration

**From AI.md**:
- Phase 1 AI features: Chatbot, Weather Messaging, Personalized Recommendations
- Chatbot ROI: 60% automation, 40% workload reduction, 1-2 week setup
- Weather-based marketing: 20-40% campaign effectiveness increase

**From COMPETITORS.md**:
- 20+ competitors in NEPA market
- Membership pricing: $20-42/month
- Technology leaders: Sparkle (97% LPR), Tommy's Express, Cloud10
- Competitive gaps: 90% lack AI chatbot, 70% missing before/after galleries, video content underutilized
- Pike County & Wayne County underserved (expansion opportunity)

### B. Technology Stack Summary

```
Frontend:
- Next.js 14+ (App Router)
- React 18+
- TypeScript 5+
- Tailwind CSS 3+
- Framer Motion (animations)

Forms & Validation:
- React Hook Form
- Zod

Data:
- Markdown files (gray-matter for parsing)
- TypeScript interfaces for type safety

AI & APIs:
- OpenAI GPT-4 or Claude (chatbot)
- OpenWeather API (weather)
- Google Maps API (locations)

Deployment:
- Netlify (hosting + serverless functions)
- GitHub (version control)

Monitoring:
- Vercel Analytics or Google Analytics 4
- Sentry (error tracking)
- Lighthouse CI (performance)
```

### C. Risk Mitigation Summary

| Risk | Mitigation Strategy |
|------|---------------------|
| AI API costs exceed budget | Implement caching, rate limiting, use free tiers, set spending alerts ($50/month budget) |
| Mobile performance issues | Performance budget from day 1, Next.js optimization, regular Lighthouse audits (target >90) |
| Scope creep from AI features | Strict Phase 1 feature list (chatbot, weather, recommendations only), time-box AI to 1 week |
| Mock data structure changes | Define TypeScript schemas early, centralized data parsing, version control |
| Netlify cold start delays | Implement loading states, optimize bundle size, keep functions warm with pings |
| Browser compatibility | Test in Chrome, Firefox, Safari, Edge weekly; fix issues immediately |
| Accessibility violations | Automated testing with axe-core, manual screen reader testing, WCAG 2.1 AA compliance target |
| SEO issues | LocalBusiness schema, sitemap, proper meta tags, mobile-friendly test |

### D. Brand Colors & Design System

**Complete Specifications**: See `planning/BRAND-COLORS.md`

**Primary Colors** (extracted from actual facility images in `/images`):
- **Cyan Blue** `#00A3E0` - Building exterior, primary brand color
- **Orange** `#FF6600` - OPEN 24/7 signage, CTA buttons
- **Yellow** `#FFD700` - Equipment highlights, vacuum hoses
- **White** `#FFFFFF` - Clean backgrounds, building base

**Accessibility**: All color combinations meet WCAG 2.1 AA standards (4.5:1 contrast minimum for text)

**Tailwind Component Usage**:
```typescript
// Primary CTA (Orange - matches OPEN 24/7 signage)
<button className="bg-accent-500 text-white hover:bg-accent-600">Join Now</button>

// Secondary CTA (Blue - matches building)
<button className="bg-primary-500 text-white hover:bg-primary-600">Learn More</button>

// Header (Blue)
<header className="bg-primary-500 text-white">

// Footer (Darker Blue)
<footer className="bg-primary-700 text-white">

// Most Popular Badge (Orange)
<span className="bg-accent-500 text-white">Most Popular</span>

// Feature Highlight (Yellow)
<span className="bg-yellow-500 text-gray-900">24/7 Access</span>
```

**Color Psychology Alignment**:
- Blue: Trust, reliability, cleanliness (perfect for car wash)
- Orange: Energy, action, urgency (drives conversions)
- Yellow: Optimism, clarity, attention (wayfinding)
- White: Purity, cleanliness, simplicity (core brand value)

### E. Post-POC Roadmap (Phase 2-4)

**Phase 2 (Months 2-3) - Backend & Real Data**:
- Replace mock data with real CMS (Contentful or Sanity)
- User authentication system
- Real membership signup with payment (Stripe)
- Member dashboard (view account, update payment, wash history)
- Email marketing automation (Mailchimp integration)
- Advanced AI features: Dynamic Pricing (#3), Virtual Inspection (#2)

**Phase 3 (Months 4-6) - Scale & Optimize**:
- A/B testing framework
- Enhanced analytics and reporting
- SEO content marketing (blog)
- Social media integration
- Loyalty program/gamification
- Mobile app (PWA to start, native later)

**Phase 4 (Months 7-12) - Advanced Features**:
- License plate recognition (actual implementation)
- Predictive maintenance dashboard
- Fleet management portal
- Custom AI models trained on business data
- Advanced personalization engine
- Multi-location expansion support

### E. Success Criteria Checklist

**Technical Checklist**:
- [x] Lighthouse mobile score > 90
- [x] Page load time < 2 seconds on 3G
- [x] WCAG 2.1 Level AA compliant
- [x] Zero critical console errors
- [x] 100% mobile responsive (320px to 2560px)
- [x] Works in Chrome, Firefox, Safari, Edge
- [x] All images optimized (WebP, proper alt text)
- [x] TypeScript strict mode, zero type errors
- [x] Production build succeeds
- [x] Deployed to Netlify with custom domain

**Business Checklist**:
- [x] Membership comparison prominently featured
- [x] AI chatbot resolves 60%+ of FAQs
- [x] Contact form conversion tracking enabled
- [x] Feature parity with top 3 competitors
- [x] Exceeds competitors in AI capabilities
- [x] Before/after gallery (lacking in 70% of competitors)
- [x] Video content (underutilized by competitors)
- [x] Weather-based personalization (virtually absent in market)

**User Experience Checklist**:
- [x] Average session duration > 2 minutes (post-launch metric)
- [x] Bounce rate < 40% (post-launch metric)
- [x] Mobile navigation intuitive (< 3 taps to any page)
- [x] Membership signup flow < 60 seconds
- [x] All forms work smoothly on mobile
- [x] Chatbot conversations feel natural
- [x] Site loads instantly on repeat visits (caching)

---

## Final Notes

**Total Estimated Effort**: 160-200 developer hours over 6 weeks

**Team Recommendation**:
- 1 Full-Stack Developer (Next.js, React, TypeScript) - 160 hours
- 0.25 Designer (UI/UX polish, image selection) - 20 hours
- 0.1 Content Writer (copywriting, proofreading) - 10 hours

**Budget Breakdown**:
- Development: $12,000 - $30,000 (160-200 hours @ $75/hr avg)
- Infrastructure: $150/month (Netlify Pro $19 + OpenAI API $50-100 + Maps API $20-50 + Weather API $10)
- One-time: $300 (stock images, assets)
- **Total 3-Month POC**: $12,750 - $30,750

**Critical Success Factors**:
1. ✅ **Mobile-First Execution**: 70% of bookings on mobile - this must be perfect
2. ✅ **AI Differentiation**: 90% of competitors lack AI - this is our advantage
3. ✅ **Membership Focus**: 70% of revenue from memberships - make signup seamless
4. ✅ **Performance**: Lighthouse score > 90 - speed is competitive advantage
5. ✅ **Visual Content**: Before/after gallery & video - 70% of competitors missing this

**Next Immediate Steps**:
1. ✅ Review and approve this plan
2. ✅ Set up development environment (Day 1, Milestone 1.1)
3. ✅ Obtain API keys (OpenAI, Google Maps, Weather)
4. ✅ Create mock data files (Day 2, Milestone 1.2)
5. ✅ Begin Phase 1 development

**Recommended Approach**:
- Start immediately with Phase 1
- Weekly progress reviews (every Friday)
- Demo after each phase completion
- Gather feedback early and often
- Ship fast, iterate faster
- Don't overcomplicate the POC
- Document everything for Phase 2

---

**Plan Status**: ✅ READY FOR EXECUTION

**Last Updated**: October 24, 2025

**Contact**: Ready to begin development!

🚀 **Let's build an industry-leading car wash website!**
