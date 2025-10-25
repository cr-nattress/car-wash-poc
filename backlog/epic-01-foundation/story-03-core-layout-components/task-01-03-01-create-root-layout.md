# Task: Create Root Layout

**ID**: TASK-01-03-01

**Story**: STORY-01-03 (Core Layout Components)

**Epic**: EPIC-01 (Foundation & Setup)

---

## 🎯 Objective

Create the root layout component that wraps all pages with Header, Footer, and global styles.

## ✅ Acceptance Criteria

- [ ] `app/layout.tsx` updated with Header and Footer
- [ ] Metadata configured (title, description)
- [ ] Font loaded (Inter)
- [ ] Global styles applied
- [ ] Layout renders on all pages

## 🔧 Implementation Guide

Create `v1/src/app/layout.tsx`:

```typescript
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import '@/app/globals.css'
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
```

**Commit Message**:
```
feat(layout): create root layout with header and footer

- Add root layout.tsx with Inter font
- Configure metadata (title, description)
- Add Header and Footer components
- Implement flex layout for sticky footer

Closes TASK-01-03-01
```

## 🔗 Related Tasks

**Depends On**: Story 01-02 complete
**Blocks**: All page tasks

---

**Status**: 🔵 Not Started
**Estimated**: 1 hour
**Application Directory**: `v1/src/app/`
