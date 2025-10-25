# Task: Create Mock Data Files in Markdown

**ID**: TASK-01-02-03

**Story**: STORY-01-02 (Project Structure & Mock Data)

**Epic**: EPIC-01 (Foundation & Setup)

**Source**: Task from Milestone 1.2 in planning/IMPLEMENTATION-PLAN.md

---

## 🎯 Objective

Create comprehensive mock data in Markdown format with frontmatter for locations, services, pricing tiers, testimonials, and FAQs.

## 📋 Context

**Why This Task**:
Mock data allows rapid development without a CMS or database. Markdown files with YAML frontmatter provide structured data that's easy to edit, version-controlled in Git, and can migrate to a real CMS later.

**Current State**:
`data/` folder exists but is empty.

**Desired State**:
Five Markdown files with realistic mock data:
- `locations.md` - 2 car wash locations
- `pricing.md` - 3 membership tiers
- `services.md` - 6+ wash services
- `testimonials.md` - 10+ customer reviews
- `faqs.md` - 20+ frequently asked questions

## ✅ Acceptance Criteria

- [ ] All 5 data files created in `src/data/`
- [ ] YAML frontmatter matches TypeScript interfaces
- [ ] locations.md has 2 locations with real-looking addresses
- [ ] pricing.md has 3 tiers ($24, $34, $42)
- [ ] services.md has at least 6 services
- [ ] testimonials.md has at least 10 reviews
- [ ] faqs.md has at least 20 questions across all categories
- [ ] Markdown content is realistic and professional
- [ ] Phone numbers, addresses use realistic formats
- [ ] Data parseable by gray-matter

## 🔧 Implementation Guide

**Application Location**: `v1/src/data/`

### Step 1: Create locations.md

Create `v1/src/data/locations.md`:

```markdown
---
id: downtown
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

Our flagship location serving downtown Scranton since 2015. Conveniently located on Main Street with easy access from I-81.

## Features

- **24/7 Operation**: Wash your car anytime, day or night
- **Express Service**: In and out in under 5 minutes
- **Free Vacuums**: Self-service vacuum stations available
- **Member Lanes**: Dedicated lanes for unlimited wash members

## Hours
Open 24 hours a day, 7 days a week

## Directions
From I-81: Take Exit 185, turn right onto Main Street. Location is 0.5 miles on the right.

---

---
id: northside
name: North Side Location
address: 456 North Avenue
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

Serving North Scranton since 2018. Family-owned and operated with a focus on quality and customer service.

## Features

- **Express Wash**: Quick exterior wash with spot-free rinse
- **Self-Service Bays**: 4 self-service wash bays available
- **Hand Dry**: Attendants available for hand-drying service
- **Free Vacuums**: High-powered vacuum stations

## Hours
- Monday-Saturday: 7:00 AM - 8:00 PM
- Sunday: 8:00 AM - 6:00 PM

## Directions
From Route 6: Turn onto North Avenue, location is 1 mile on the left side.
```

### Step 2: Create pricing.md

Create `v1/src/data/pricing.md`:

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

Perfect for regular maintenance and keeping your vehicle looking clean. Our entry-level plan includes everything you need for a great exterior wash.

**Best For**: Daily drivers, budget-conscious customers

**Value**: With just 3-4 washes per month, this plan pays for itself!

---

---
id: premium
name: Premium Protection
price: 34
frequency: monthly
popular: true
savings: Save $12/month vs single washes
badge: Most Popular
features:
  - Everything in Basic
  - Triple Foam Polish
  - Wheel Cleaner
  - Underbody Wash
  - Rust Inhibitor
  - Tire Shine
  - Rain Repellent
---

# Premium Protection Plan

Our most popular plan! Adds protective treatments and premium features to keep your vehicle looking showroom-new.

**Best For**: Most customers, year-round protection

**Why Popular**: Best value - includes protective treatments that extend your vehicle's life and appearance.

**Winter Benefit**: Underbody wash and rust inhibitor are essential for Northeast winters.

---

---
id: ultimate
name: Ultimate Ceramic
price: 42
frequency: monthly
savings: Save $18/month vs single washes
badge: Best Value
features:
  - Everything in Premium
  - Ceramic Sealant
  - Graphene Protection
  - Rain Repellent (Enhanced)
  - Bug Prep Treatment
  - Priority Service
  - Hand Dry Service
---

# Ultimate Ceramic Plan

The best wash we offer. Includes cutting-edge ceramic and graphene protection for maximum shine and paint protection.

**Best For**: Luxury vehicles, car enthusiasts, maximum protection

**Technology**: Ceramic and graphene coatings create a hydrophobic barrier that repels water, dirt, and contaminants.

**Premium Benefits**:
- Priority lanes (skip the line)
- Hand-dry service (attendant dries your vehicle)
- Longest-lasting protection

**Value**: Premium single washes cost $18-22. This plan includes those features unlimited!
```

### Step 3: Create services.md

Create `v1/src/data/services.md`:

```markdown
---
id: express-wash
name: Express Exterior Wash
description: Fast, thorough exterior wash with spot-free rinse
duration: 3-5 minutes
price: 10
category: basic
features:
  - High-pressure pre-soak
  - Soft-touch brushes
  - Spot-free rinse
  - Turbo air dry
image: /images/services/express.jpg
---

# Express Exterior Wash

Our signature express wash gets you in and out in under 5 minutes. Perfect for busy schedules.

---

---
id: premium-wash
name: Premium Protection Wash
description: Enhanced wash with protective treatments
duration: 5-7 minutes
price: 16
category: premium
features:
  - Everything in Express
  - Triple foam polish
  - Wheel cleaner
  - Underbody wash
  - Tire shine
image: /images/services/premium.jpg
---

# Premium Protection Wash

Upgrade to our premium wash for added protection and shine.

---

---
id: ultimate-wash
name: Ultimate Ceramic Wash
description: Top-tier wash with ceramic protection
duration: 7-10 minutes
price: 22
category: ultimate
features:
  - Everything in Premium
  - Ceramic sealant
  - Graphene coating
  - Rain repellent
  - Bug prep
  - Hand dry
image: /images/services/ultimate.jpg
---

# Ultimate Ceramic Wash

The best wash we offer with cutting-edge protection technology.

---

---
id: self-service
name: Self-Service Bay
description: Do-it-yourself wash bays
duration: As long as you need
price: 3
category: basic
features:
  - High-pressure soap
  - Rinse
  - Wax
  - Spot-free rinse
image: /images/services/self-service.jpg
---

# Self-Service Bays

Take control with our self-service bays. Pay by the minute.

(Available at North Side location only)

---

---
id: vacuum
name: Free Vacuum Service
description: High-powered vacuum stations
duration: 5-10 minutes
price: 0
category: basic
features:
  - High-powered suction
  - Multiple attachments
  - Fragrance dispensers
image: /images/services/vacuum.jpg
---

# Free Vacuum Service

Complimentary high-powered vacuums at both locations.

---

---
id: detail-addon
name: Interior Detail (Add-on)
description: Deep interior cleaning
duration: 30-45 minutes
price: 45
category: premium
features:
  - Vacuum and shampoo
  - Dashboard cleaning
  - Window cleaning
  - Leather conditioning
image: /images/services/detail.jpg
---

# Interior Detail Add-On

Professional interior detailing service. Available by appointment.

Call ahead to schedule: (570) 555-0100
```

### Step 4: Create testimonials.md

Create `v1/src/data/testimonials.md`:

```markdown
---
id: testimonial-1
name: Sarah Johnson
location: Scranton, PA
rating: 5
text: Best car wash in NEPA! The unlimited membership saves me so much money and my car always looks great. Staff is super friendly.
date: 2025-01-20
service: Premium Protection
verified: true
---

---
id: testimonial-2
name: Michael Chen
location: Clarks Summit, PA
rating: 5
text: Love the 24/7 downtown location. I work odd hours and it's so convenient to wash my car at 2am. Fast and thorough!
date: 2025-01-18
service: Express Wash
verified: true
---

---
id: testimonial-3
name: Jennifer Martinez
location: Dunmore, PA
rating: 5
text: The Ultimate Ceramic plan is worth every penny. My black SUV has never looked better. The ceramic coating really does repel water!
date: 2025-01-15
service: Ultimate Ceramic
verified: true
---

---
id: testimonial-4
name: David Thompson
location: Scranton, PA
rating: 4
text: Great value for the price. Membership pays for itself after 3-4 washes. My only wish is they had more locations.
date: 2025-01-12
service: Basic Shine
verified: true
---

---
id: testimonial-5
name: Emily Rodriguez
location: Moscow, PA
rating: 5
text: Clean facilities, quick service, and the free vacuums are amazing. My kids make a mess and I come here weekly!
date: 2025-01-10
verified: true
---

---
id: testimonial-6
name: Robert Kim
location: Scranton, PA
rating: 5
text: Switched from another car wash and so glad I did. Better quality, better price, better service. Highly recommend!
date: 2025-01-08
service: Premium Protection
verified: true
---

---
id: testimonial-7
name: Lisa Anderson
location: Carbondale, PA
rating: 5
text: The self-service bays at the North Side location are perfect. Clean, well-maintained equipment. Fair prices.
date: 2025-01-05
service: Self-Service Bay
verified: false
---

---
id: testimonial-8
name: James Wilson
location: Scranton, PA
rating: 4
text: Good wash, fast service. Sometimes there's a wait during peak times but they move the line quickly.
date: 2025-01-03
service: Express Wash
verified: true
---

---
id: testimonial-9
name: Amanda Taylor
location: Dickson City, PA
rating: 5
text: Love the membership program! Cancel anytime policy means no risk. Customer service is excellent.
date: 2024-12-28
service: Premium Protection
verified: true
---

---
id: testimonial-10
name: Christopher Lee
location: Scranton, PA
rating: 5
text: Best car wash I've found in PA. The rust inhibitor in winter is a must-have. Keeps my truck looking new.
date: 2024-12-25
service: Premium Protection
verified: true
---

---
id: testimonial-11
name: Rachel Green
location: Clarks Summit, PA
rating: 5
text: Clean, efficient, affordable. The triple foam makes my white car sparkle. Staff always greets with a smile.
date: 2024-12-20
verified: true
---

---
id: testimonial-12
name: Daniel Brown
location: Scranton, PA
rating: 4
text: Solid car wash. Good value. Would be 5 stars if they had a location closer to me.
date: 2024-12-15
service: Basic Shine
verified: false
---
```

### Step 5: Create faqs.md

Create `v1/src/data/faqs.md`:

```markdown
---
id: faq-1
category: membership
question: How does the unlimited membership work?
answer: Wash your car as often as you'd like for one monthly price. No limits, no restrictions. Cancel anytime.
keywords:
  - unlimited
  - membership
  - how it works
order: 1
---

---
id: faq-2
category: membership
question: Can I cancel my membership?
answer: Yes! You can cancel anytime with no penalties or fees. We offer month-to-month memberships, not annual contracts.
keywords:
  - cancel
  - cancellation
  - contract
order: 2
---

---
id: faq-3
category: membership
question: Which membership plan is best for me?
answer: Basic ($24/mo) is perfect for regular maintenance. Premium ($34/mo) is our most popular - adds protective treatments. Ultimate ($42/mo) is best for luxury vehicles or maximum protection.
keywords:
  - which plan
  - best plan
  - choose
order: 3
---

---
id: faq-4
category: pricing
question: How much does a single wash cost?
answer: Single washes range from $10 (Express) to $22 (Ultimate Ceramic). Memberships save you money if you wash 3+ times per month.
keywords:
  - price
  - cost
  - single wash
order: 4
---

---
id: faq-5
category: pricing
question: Do you offer discounts?
answer: Our best value is our membership plans! Save $6-18 per month compared to single washes.
keywords:
  - discount
  - deal
  - savings
order: 5
---

---
id: faq-6
category: services
question: What's included in the Express Wash?
answer: Exterior wash, spot-free rinse, and turbo dry. Takes 3-5 minutes.
keywords:
  - express
  - basic
  - included
order: 6
---

---
id: faq-7
category: services
question: Do you clean the inside of my car?
answer: Our wash packages are exterior-only. We offer interior detailing as an add-on service for $45 (30-45 minutes).
keywords:
  - interior
  - inside
  - detail
order: 7
---

---
id: faq-8
category: services
question: Are the vacuums free?
answer: Yes! High-powered vacuum stations are complimentary at both locations.
keywords:
  - vacuum
  - free
order: 8
---

---
id: faq-9
category: locations
question: What are your hours?
answer: Downtown location is open 24/7. North Side location is open Mon-Sat 7am-8pm, Sun 8am-6pm.
keywords:
  - hours
  - open
  - time
order: 9
---

---
id: faq-10
category: locations
question: Where are you located?
answer: We have two locations - Downtown Scranton (123 Main St) and North Side Scranton (456 North Ave).
keywords:
  - location
  - address
  - where
order: 10
---

---
id: faq-11
category: general
question: Is touchless or soft-touch better?
answer: We use soft-touch brushes made from gentle foam. They're safe for all paint types and provide superior cleaning compared to touchless.
keywords:
  - touchless
  - brush
  - scratch
order: 11
---

---
id: faq-12
category: general
question: Will the brushes scratch my car?
answer: No! Our modern soft-touch brushes are made from gentle foam that won't scratch your paint. We clean and maintain our equipment daily.
keywords:
  - scratch
  - damage
  - paint
order: 12
---

---
id: faq-13
category: general
question: Do I need to pre-wash my car?
answer: No need! Our high-pressure pre-soak removes dirt and grime before the wash. Just drive in!
keywords:
  - pre-wash
  - preparation
order: 13
---

---
id: faq-14
category: membership
question: Can I use my membership at both locations?
answer: Yes! Your membership works at both Downtown and North Side locations.
keywords:
  - both locations
  - multiple locations
order: 14
---

---
id: faq-15
category: membership
question: Can I share my membership with family?
answer: Memberships are vehicle-specific, not person-specific. The registered vehicle can be washed by anyone.
keywords:
  - share
  - family
  - multiple drivers
order: 15
---

---
id: faq-16
category: services
question: What is ceramic coating?
answer: Ceramic coating creates a hydrophobic barrier that repels water and protects your paint. Available in our Ultimate plan.
keywords:
  - ceramic
  - coating
  - protection
order: 16
---

---
id: faq-17
category: general
question: Do you recycle water?
answer: Yes! We use water reclamation technology to recycle and filter water, reducing our environmental impact.
keywords:
  - eco
  - water
  - recycle
  - environment
order: 17
---

---
id: faq-18
category: general
question: How long does a wash take?
answer: Express wash: 3-5 min, Premium: 5-7 min, Ultimate: 7-10 min. Average wait time during peak hours: 5-10 min.
keywords:
  - time
  - duration
  - how long
order: 18
---

---
id: faq-19
category: membership
question: How do I sign up for a membership?
answer: Sign up online or at either location. Bring your vehicle and ID. Setup takes less than 5 minutes.
keywords:
  - sign up
  - join
  - register
order: 19
---

---
id: faq-20
category: pricing
question: Do you have gift cards?
answer: Yes! Gift cards available in any amount. Perfect for birthdays or holidays. Purchase online or in-person.
keywords:
  - gift card
  - gift
  - present
order: 20
---

---
id: faq-21
category: general
question: Is my truck too tall?
answer: We can accommodate vehicles up to 7 feet tall. Trucks, SUVs, and vans welcome!
keywords:
  - truck
  - height
  - tall
  - SUV
order: 21
---

---
id: faq-22
category: services
question: Do you offer fleet services?
answer: Yes! Contact us for commercial fleet pricing. Great for businesses with multiple vehicles.
keywords:
  - fleet
  - business
  - commercial
order: 22
---
```

### Step 6: Verify Data Format

Test that gray-matter can parse one file:

```bash
cd v1
node -e "
const fs = require('fs');
const matter = require('gray-matter');
const content = fs.readFileSync('src/data/pricing.md', 'utf8');
const parsed = content.split('---').filter(s => s.trim());
console.log(parsed.length + ' entries found');
"
```

Should show "3 entries found" (3 pricing tiers).

## 📚 Resources

**Related Files**:
- `v1/src/data/*.md` - All mock data files
- `v1/src/types/index.ts` - Type definitions for data

**Documentation**:
- gray-matter: https://github.com/jonschlinkert/gray-matter
- YAML syntax: https://yaml.org/
- Markdown guide: https://www.markdownguide.org/

## 🧪 Testing Requirements

**Manual Testing**:

1. **File Existence Test**:
   ```bash
   cd v1/src/data
   ls -la
   # Should show all 5 .md files
   ```

2. **YAML Parsing Test**:
   - Open each file
   - Verify YAML frontmatter is valid
   - Check for syntax errors (colons, indentation)

3. **Data Accuracy Test**:
   - [ ] Locations have realistic addresses
   - [ ] Pricing matches $24/$34/$42 tiers
   - [ ] Phone numbers formatted correctly
   - [ ] Coordinates are realistic for Scranton, PA

## 🎓 Learning Notes

**Key Concepts**:

1. **Frontmatter**:
   - YAML metadata at top of Markdown files
   - Delimited by `---`
   - Structured data extracted by gray-matter

2. **Separation of Entries**:
   - Multiple entries separated by `---` on its own line
   - Each entry = one object (location, pricing tier, etc.)

3. **Data Versioning**:
   - Mock data in Git provides version history
   - Easy to see what changed
   - Can rollback bad data

**Common Pitfalls**:

⚠️ **Invalid YAML syntax**
- Indentation matters (use 2 spaces)
- Colons must have space after: `name: value` not `name:value`
- Arrays use `- item` format

⚠️ **Missing separators**
- Each entry must end with `---`
- Blank line before separator

⚠️ **Type mismatches**
- `price: 24` (number) not `price: "24"` (string)
- Match TypeScript types exactly

## 📏 Estimated Effort

**Time**: 3 hours
- locations.md: 30 min
- pricing.md: 30 min
- services.md: 45 min
- testimonials.md: 45 min
- faqs.md: 30 min

**Complexity**: Low-Medium
- Straightforward data entry
- Need realistic content

**Prerequisites**:
- TASK-01-02-02: TypeScript types defined

## ✔️ Definition of Done

- [ ] All 5 data files created
- [ ] locations.md has 2 complete locations
- [ ] pricing.md has 3 tiers with all fields
- [ ] services.md has 6+ services
- [ ] testimonials.md has 12+ reviews
- [ ] faqs.md has 22+ questions
- [ ] All YAML is valid
- [ ] Markdown content is professional
- [ ] Data matches TypeScript interfaces

**Commit Message**:
```
feat(data): create mock data files

- Add locations.md (2 locations with addresses, hours, coordinates)
- Add pricing.md (3 membership tiers: $24, $34, $42)
- Add services.md (6 wash packages and add-ons)
- Add testimonials.md (12 customer reviews)
- Add faqs.md (22 frequently asked questions)

All data in Markdown with YAML frontmatter for easy parsing

Closes TASK-01-02-03
```

## 🤖 AI Agent Instructions

**Implementation**:

1. **Create All Data Files**:
   - Copy content from Steps 1-5
   - Save each to `v1/src/data/`

2. **Verify YAML**:
   - Check syntax (indentation, colons)
   - Ensure all required fields present

3. **Test Parsing** (optional):
   ```bash
   cd v1
   npm install gray-matter
   node -e "const matter = require('gray-matter'); const fs = require('fs'); console.log(matter(fs.readFileSync('src/data/pricing.md', 'utf8')))"
   ```

**Success Criteria**:
- All files created
- YAML valid
- Content realistic
- Ready for data loader functions

## 🔗 Related Tasks

**Depends On**:
- TASK-01-02-01: Folder structure
- TASK-01-02-02: TypeScript types

**Blocks**:
- TASK-01-02-04: Data loading functions (needs files to load)

---

**Status**: 🔵 Not Started
**Estimated**: 3 hours
**Application Directory**: `v1/src/data/`

**Next**: `task-01-02-04-data-loading-functions.md`
