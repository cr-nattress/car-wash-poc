'use client'

import { useEffect } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

/**
 * Global Error Boundary
 *
 * Catches errors during rendering and displays a friendly error page
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console (in production, send to error tracking service)
    console.error('Application error:', error)
  }, [error])

  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        {/* Error Icon */}
        <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-red-100">
          <svg
            className="h-16 w-16 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Content */}
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Oops! Something went wrong</h1>
        <p className="mb-8 max-w-md text-lg text-gray-600">
          We&apos;re sorry, but something unexpected happened. Our team has been notified and is
          working on a fix.
        </p>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 max-w-2xl rounded-lg bg-gray-100 p-4 text-left">
            <p className="mb-2 font-mono text-sm font-semibold text-red-600">
              {error.name}: {error.message}
            </p>
            {error.digest && (
              <p className="font-mono text-xs text-gray-600">Error ID: {error.digest}</p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button variant="primary" size="lg" onClick={reset}>
            Try Again
          </Button>
          <Button variant="outline" size="lg" onClick={() => (window.location.href = '/')}>
            Go Home
          </Button>
        </div>

        {/* Help Text */}
        <p className="mt-8 text-sm text-gray-500">
          If this problem persists, please{' '}
          <a href="/contact" className="text-primary-600 hover:underline">
            contact us
          </a>
          .
        </p>
      </div>
    </Container>
  )
}
