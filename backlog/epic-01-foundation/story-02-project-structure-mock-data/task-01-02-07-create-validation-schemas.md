# Task: Create Zod Validation Schemas

**ID**: TASK-01-02-07

**Story**: STORY-01-02 (Project Structure & Mock Data)

**Epic**: EPIC-01 (Foundation & Setup)

---

## 🎯 Objective

Create Zod validation schemas for forms (contact, newsletter) to ensure type-safe form validation.

## ✅ Acceptance Criteria

- [ ] `lib/validation.ts` created with Zod schemas
- [ ] Contact form schema defined
- [ ] Newsletter schema defined
- [ ] Schemas match TypeScript types
- [ ] Error messages are user-friendly

## 🔧 Implementation Guide

Create `v1/src/lib/validation.ts`:

```typescript
import { z } from 'zod'

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),

  email: z
    .string()
    .email('Please enter a valid email address')
    .toLowerCase(),

  phone: z
    .string()
    .regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, {
      message: 'Please enter a valid phone number',
    })
    .optional(),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters'),

  // Honeypot field for spam prevention
  website: z.string().max(0).optional(),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

/**
 * Newsletter signup validation schema
 */
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .toLowerCase(),

  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(30)
    .optional(),
})

export type NewsletterValues = z.infer<typeof newsletterSchema>
```

**Commit Message**:
```
feat(validation): add Zod form validation schemas

- Add contactFormSchema with name, email, phone, message
- Add newsletterSchema with email and firstName
- Include honeypot field for spam prevention
- Export inferred types for form values

Type-safe forms with runtime validation

Closes TASK-01-02-07
```

## 🔗 Related Tasks

**Depends On**: TASK-01-01-05 (Zod installed)
**Blocks**: TASK-02-05-06 (Contact form implementation)

---

**Status**: 🔵 Not Started
**Estimated**: 30 minutes
**Application Directory**: `v1/src/lib/`
