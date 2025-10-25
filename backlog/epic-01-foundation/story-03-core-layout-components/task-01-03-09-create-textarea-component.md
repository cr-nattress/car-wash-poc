# Task: Create Textarea Component

**ID**: TASK-01-03-09 | **Story**: STORY-01-03 | **Epic**: EPIC-01

---

## 🎯 Objective
Create Textarea component for multi-line text input (contact form).

## 🔧 Implementation

Create `v1/src/components/ui/Textarea.tsx`:

```typescript
import { TextareaHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full rounded-lg border border-gray-300 px-4 py-2',
            'focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200',
            'min-h-[120px] resize-y',
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

Textarea.displayName = 'Textarea'
```

**Commit**: `feat(ui): create Textarea component`

---

**Status**: 🔵 Not Started | **Estimated**: 30 minutes
