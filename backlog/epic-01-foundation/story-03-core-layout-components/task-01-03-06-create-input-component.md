# Task: Create Input Component

**ID**: TASK-01-03-06 | **Story**: STORY-01-03 | **Epic**: EPIC-01

---

## 🎯 Objective
Create Input component for forms with error states.

## 🔧 Implementation

Create `v1/src/components/ui/Input.tsx`:

```typescript
import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full rounded-lg border border-gray-300 px-4 py-2',
            'focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200',
            error && 'border-red-500',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
```

**Commit**: `feat(ui): create Input component`

---

**Status**: 🔵 Not Started | **Estimated**: 1 hour
