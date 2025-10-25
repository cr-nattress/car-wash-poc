# Task: Build Header Component (Mobile-First)

**ID**: TASK-01-03-02

**Story**: STORY-01-03 (Core Layout Components)

**Epic**: EPIC-01 (Foundation & Setup)

---

## 🎯 Objective

Create a mobile-first header component with responsive navigation, hamburger menu, and brand colors.

## ✅ Acceptance Criteria

- [ ] Header component created in `components/layout/Header.tsx`
- [ ] Mobile hamburger menu (< 768px)
- [ ] Desktop horizontal navigation (> 768px)
- [ ] Sticky header on scroll
- [ ] Brand colors (blue background)
- [ ] Click-to-call phone button on mobile
- [ ] "Join Now" CTA button

## 🔧 Implementation Guide

Create `v1/src/components/layout/Header.tsx`:

```typescript
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { SITE_NAME, MAIN_PHONE } from '@/lib/constants'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary-500 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        {/* Mobile Layout */}
        <div className="flex items-center justify-between md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <Link href="/" className="text-xl font-bold text-white">
            {SITE_NAME}
          </Link>

          <a
            href={`tel:${MAIN_PHONE.replace(/\D/g, '')}`}
            className="text-sm font-semibold text-white"
          >
            CALL
          </a>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            {SITE_NAME}
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/services" className="text-white hover:text-gray-200">
              Services
            </Link>
            <Link href="/membership" className="text-white hover:text-gray-200">
              Membership
            </Link>
            <Link href="/locations" className="text-white hover:text-gray-200">
              Locations
            </Link>
            <Link href="/about" className="text-white hover:text-gray-200">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
            <Link href="/membership">
              <Button variant="primary" size="md">
                Join Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mt-4 border-t border-primary-400 pt-4 md:hidden">
            <div className="flex flex-col space-y-3">
              <Link
                href="/services"
                className="text-white hover:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/membership"
                className="text-white hover:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Membership
              </Link>
              <Link
                href="/locations"
                className="text-white hover:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Locations
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link href="/membership" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" size="md" className="w-full">
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
```

**Commit Message**:
```
feat(header): build mobile-first header component

- Add hamburger menu for mobile (<768px)
- Add horizontal nav for desktop
- Add sticky positioning
- Add click-to-call button (mobile)
- Use brand blue background (primary-500)

Responsive navigation complete

Closes TASK-01-03-02
```

## 🔗 Related Tasks

**Depends On**: TASK-01-03-04 (Button component)
**Blocks**: TASK-01-03-01 (Root layout needs Header)

---

**Status**: 🔵 Not Started
**Estimated**: 4 hours
**Application Directory**: `v1/src/components/layout/`
