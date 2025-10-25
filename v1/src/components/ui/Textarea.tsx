import { TextareaHTMLAttributes, forwardRef, useId } from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  fullWidth?: boolean
}

/**
 * Textarea component with label, error, and helper text support
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, fullWidth = false, id, rows = 4, ...props }, ref) => {
    const generatedId = useId()
    const textareaId = id || generatedId

    return (
      <div className={cn('flex flex-col gap-1', { 'w-full': fullWidth })}>
        {label && (
          <label htmlFor={textareaId} className="text-sm font-medium text-gray-700">
            {label}
            {props.required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            // Base styles
            'rounded-lg border px-4 py-2 text-base transition-colors',
            'placeholder:text-gray-400',
            'focus:outline-none focus:ring-2 focus:ring-offset-1',
            'resize-y',

            // State styles
            {
              'border-gray-300 focus:border-primary-500 focus:ring-primary-500': !error,
              'border-red-500 focus:border-red-500 focus:ring-red-500': error,
            },

            // Disabled styles
            'disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500',

            className
          )}
          {...props}
        />

        {error && <p className="text-sm text-red-600">{error}</p>}

        {helperText && !error && <p className="text-sm text-gray-500">{helperText}</p>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
