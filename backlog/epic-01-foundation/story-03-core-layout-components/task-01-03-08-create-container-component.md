# Task: Create Container Component

**ID**: TASK-01-03-08 | **Story**: STORY-01-03 | **Epic**: EPIC-01

---

## 🎯 Objective
Create Container component for max-width content wrapper.

## 🔧 Implementation

Create `v1/src/components/ui/Container.tsx`:

```typescript
import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn('container mx-auto px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </div>
  )
}
```

**Commit**: `feat(ui): create Container component`

---

**Status**: 🔵 Not Started | **Estimated**: 15 minutes
