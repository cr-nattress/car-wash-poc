# Task: Create Badge Component

**ID**: TASK-01-03-07 | **Story**: STORY-01-03 | **Epic**: EPIC-01

---

## 🎯 Objective
Create Badge component for labels and tags.

## 🔧 Implementation

Create `v1/src/components/ui/Badge.tsx`:

```typescript
import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning'
}

export function Badge({ variant = 'primary', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        {
          'bg-primary-100 text-primary-700': variant === 'primary',
          'bg-accent-100 text-accent-700': variant === 'secondary',
          'bg-green-100 text-green-700': variant === 'success',
          'bg-yellow-100 text-yellow-700': variant === 'warning',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
```

**Commit**: `feat(ui): create Badge component`

---

**Status**: 🔵 Not Started | **Estimated**: 30 minutes
