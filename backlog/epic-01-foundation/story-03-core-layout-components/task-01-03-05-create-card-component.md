# Task: Create Card Component

**ID**: TASK-01-03-05 | **Story**: STORY-01-03 | **Epic**: EPIC-01

---

## 🎯 Objective
Create reusable Card wrapper component for content sections.

## ✅ Acceptance Criteria
- [ ] Card component in `components/ui/Card.tsx`
- [ ] White background with shadow
- [ ] Rounded corners
- [ ] Padding
- [ ] Accepts className prop for customization

## 🔧 Implementation

Create `v1/src/components/ui/Card.tsx`:

```typescript
import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn('rounded-lg bg-white p-6 shadow-md', className)}
      {...props}
    >
      {children}
    </div>
  )
}
```

**Commit**: `feat(ui): create Card component`

---

**Status**: 🔵 Not Started | **Estimated**: 30 minutes
