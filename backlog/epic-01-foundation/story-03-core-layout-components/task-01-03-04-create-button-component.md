# Task: Create Button Component

**ID**: TASK-01-03-04 | **Story**: STORY-01-03 | **Epic**: EPIC-01

---

## 🎯 Objective
Create reusable Button component with variants (primary, secondary, outline) and sizes.

## ✅ Acceptance Criteria
- [ ] Button component in `components/ui/Button.tsx`
- [ ] Primary variant (orange bg-accent-500)
- [ ] Secondary variant (blue bg-primary-500)
- [ ] Outline variant (transparent with border)
- [ ] Sizes: sm, md, lg
- [ ] TypeScript typed props
- [ ] Hover states

## 🔧 Implementation

Create `v1/src/components/ui/Button.tsx`:

```typescript
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
          'border-2 border-primary-500 text-primary-500 hover:bg-primary-50':
            variant === 'outline',
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

**Commit**: `feat(ui): create Button component with variants`

**Depends On**: TASK-01-02-05 (cn utility)

---

**Status**: 🔵 Not Started | **Estimated**: 1 hour
