import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
}

/**
 * Card component for displaying content in a contained format
 * Enhanced with CSS transitions for smooth hover effects
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', hoverable = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'rounded-lg bg-white transition-all duration-200',
          // Hover effects
          hoverable && 'hover:-translate-y-1 hover:shadow-xl',

          // Variant styles
          {
            'shadow-sm border border-gray-200': variant === 'default',
            'shadow-lg': variant === 'elevated',
            'border-2 border-gray-300': variant === 'outlined',
          },

          // Padding styles
          {
            'p-0': padding === 'none',
            'p-4': padding === 'sm',
            'p-6': padding === 'md',
            'p-8': padding === 'lg',
          },

          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
