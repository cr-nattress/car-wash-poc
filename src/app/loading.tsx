import Container from '@/components/ui/Container'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

/**
 * Global Loading State
 *
 * Displayed during page transitions and data fetching
 */
export default function Loading() {
  return (
    <Container>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" className="mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    </Container>
  )
}
