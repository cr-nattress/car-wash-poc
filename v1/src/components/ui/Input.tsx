import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  fullWidth?: boolean
}

/**
 * Input component with label, error, and helper text support
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, fullWidth = false, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substring(7)}`

    return (
      <div className={cn('flex flex-col gap-1', { 'w-full': fullWidth })}>
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
            {label}
            {props.required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          className={cn(
            // Base styles
            'rounded-lg border px-4 py-2 text-base transition-colors',
            'placeholder:text-gray-400',
            'focus:outline-none focus:ring-2 focus:ring-offset-1',

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

Input.displayName = 'Input'

export default Input
