# Task: Create Constants File

**ID**: TASK-01-02-06

**Story**: STORY-01-02 (Project Structure & Mock Data)

**Epic**: EPIC-01 (Foundation & Setup)

---

## 🎯 Objective

Create a constants file for app-wide configuration values, URLs, and magic numbers.

## ✅ Acceptance Criteria

- [ ] `lib/constants.ts` created
- [ ] All magic numbers extracted to constants
- [ ] API endpoints defined
- [ ] App configuration centralized
- [ ] All constants exported and typed

## 🔧 Implementation Guide

Create `v1/src/lib/constants.ts`:

```typescript
/**
 * Application Constants
 */

// Site Information
export const SITE_NAME = 'Shine On Car Wash'
export const SITE_DESCRIPTION = 'Premium car wash service with AI-powered features'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shineoncarwash.com'

// Contact Information
export const MAIN_PHONE = '(570) 555-0100'
export const SUPPORT_EMAIL = 'support@shineoncarwash.com'

// Business Hours
export const DOWNTOWN_HOURS = '24/7'
export const NORTHSIDE_HOURS = 'Mon-Sat: 7AM-8PM, Sun: 8AM-6PM'

// Pricing
export const MIN_MEMBERSHIP_PRICE = 24
export const MAX_MEMBERSHIP_PRICE = 42
export const POPULAR_TIER_ID = 'premium'

// Limits
export const MAX_TESTIMONIALS_DISPLAY = 3
export const MAX_FAQ_RESULTS = 10
export const CHATBOT_MAX_MESSAGES = 50

// API Endpoints (for later tasks)
export const API_ENDPOINTS = {
  chatbot: '/api/chatbot',
  weather: '/api/weather',
  contact: '/api/contact',
  newsletter: '/api/newsletter',
} as const

// External URLs
export const SOCIAL_MEDIA = {
  facebook: 'https://facebook.com/shineoncarwash',
  instagram: 'https://instagram.com/shineoncarwash',
  twitter: 'https://twitter.com/shineoncarwash',
} as const

// Feature Flags
export const FEATURES = {
  chatbot: true,
  weatherIntegration: true,
  onlineBooking: false, // Not in POC
  paymentProcessing: false, // Not in POC
} as const
```

**Commit Message**:
```
feat(config): add application constants

- Add site information and contact details
- Add pricing limits and popular tier ID
- Add API endpoint constants
- Add feature flags for POC scope

Centralized configuration for easy updates

Closes TASK-01-02-06
```

## 🔗 Related Tasks

**Depends On**: None
**Blocks**: Component tasks (reference constants)

---

**Status**: 🔵 Not Started
**Estimated**: 15 minutes
**Application Directory**: `v1/src/lib/`
