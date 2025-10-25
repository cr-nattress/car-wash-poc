# Task: Create Utility Functions (utils.ts)

**ID**: TASK-01-02-05

**Story**: STORY-01-02 (Project Structure & Mock Data)

**Epic**: EPIC-01 (Foundation & Setup)

---

## 🎯 Objective

Create utility helper functions including the `cn()` function for className merging and other common utilities.

## ✅ Acceptance Criteria

- [ ] `lib/utils.ts` created with `cn()` function
- [ ] Additional utility functions added (formatPhone, formatDate, etc.)
- [ ] All functions are pure (no side effects)
- [ ] Functions are exported and typed
- [ ] Unit tests created (optional for POC)

## 🔧 Implementation Guide

Create `v1/src/lib/utils.ts`:

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format } from 'date-fns'

/**
 * Merges Tailwind CSS classes without conflicts
 * Combines clsx for conditional classes and tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format phone number to (XXX) XXX-XXXX
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

/**
 * Format date to readable string
 */
export function formatDate(date: string | Date): string {
  return format(new Date(date), 'MMMM d, yyyy')
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

/**
 * Generate a random ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 11)
}
```

**Commit Message**:
```
feat(utils): add utility functions

- Add cn() for className merging (clsx + tailwind-merge)
- Add formatPhone, formatDate helpers
- Add truncate and generateId utilities

All functions pure and typed

Closes TASK-01-02-05
```

## 🔗 Related Tasks

**Depends On**: TASK-01-01-05 (Dependencies installed)
**Blocks**: All component tasks (use cn function)

---

**Status**: 🔵 Not Started
**Estimated**: 30 minutes
**Application Directory**: `v1/src/lib/`
