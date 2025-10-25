import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

/**
 * Base skeleton component for loading states
 */
export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-gray-200', className)}
      aria-live="polite"
      aria-busy="true"
    />
  )
}

/**
 * Skeleton for card content
 */
export function CardSkeleton({ className }: SkeletonProps) {
  return (
    <div className={cn('rounded-lg border border-gray-200 p-6', className)}>
      <Skeleton className="mb-4 h-48 w-full" />
      <Skeleton className="mb-2 h-6 w-3/4" />
      <Skeleton className="mb-4 h-4 w-full" />
      <Skeleton className="mb-2 h-4 w-5/6" />
      <Skeleton className="h-10 w-full" />
    </div>
  )
}

/**
 * Skeleton for pricing card
 */
export function PricingCardSkeleton({ className }: SkeletonProps) {
  return (
    <div className={cn('rounded-lg border border-gray-200 p-8', className)}>
      <div className="mb-6 text-center">
        <Skeleton className="mx-auto mb-2 h-8 w-32" />
        <Skeleton className="mx-auto h-12 w-24" />
      </div>
      <div className="mb-8 space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <Skeleton className="h-12 w-full" />
    </div>
  )
}

/**
 * Skeleton for testimonial card
 */
export function TestimonialSkeleton({ className }: SkeletonProps) {
  return (
    <div className={cn('rounded-lg border border-gray-200 p-6', className)}>
      <Skeleton className="mb-3 h-5 w-32" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-4 h-4 w-5/6" />
      <div className="border-t border-gray-200 pt-4">
        <Skeleton className="mb-1 h-5 w-32" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  )
}

/**
 * Skeleton for text lines
 */
export function TextSkeleton({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={cn('h-4', i === lines - 1 ? 'w-4/5' : 'w-full')} />
      ))}
    </div>
  )
}
