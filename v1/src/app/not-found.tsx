import Link from 'next/link'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {/* 404 illustration */}
          <div className="mb-8">
            <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full bg-primary-100">
              <svg
                className="h-32 w-32 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* Error message */}
          <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Page Not Found</h2>
          <p className="mb-8 text-lg text-gray-600">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or
            deleted.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/">
              <Button variant="primary" size="lg">
                Go to Homepage
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                Browse Services
              </Button>
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-600">
              Popular Pages
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/pricing" className="text-primary-600 hover:text-primary-700">
                Pricing
              </Link>
              <Link href="/locations" className="text-primary-600 hover:text-primary-700">
                Locations
              </Link>
              <Link href="/about" className="text-primary-600 hover:text-primary-700">
                About Us
              </Link>
              <Link href="/contact" className="text-primary-600 hover:text-primary-700">
                Contact
              </Link>
              <Link href="/faq" className="text-primary-600 hover:text-primary-700">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
