import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Accessibility Statement | Superior Car Wash',
  description:
    'Learn about our commitment to accessibility and how we make our services available to everyone.',
}

export default function AccessibilityPage() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-5xl font-bold">Accessibility Statement</h1>
            <p className="text-xl text-primary-50">
              Committed to serving all customers with dignity and respect
            </p>
          </div>
        </Container>
      </section>

      {/* Our Commitment */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-4xl font-bold text-gray-900">Our Commitment</h2>
            <div className="prose prose-lg mx-auto">
              <p>
                Superior Car Wash is committed to ensuring that our services and facilities are
                accessible to all individuals, including those with disabilities. We believe that
                everyone should have equal access to quality car care services.
              </p>
              <p>
                We continually work to improve the accessibility of our physical locations, website,
                and services to provide a welcoming experience for all customers.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Physical Accessibility */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-4xl font-bold text-gray-900">
              Physical Location Accessibility
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card variant="elevated" padding="lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                  <svg
                    className="h-6 w-6 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Accessible Parking</h3>
                <p className="text-gray-600">
                  Designated accessible parking spaces are available at all locations, located near
                  entrance points with accessible routes.
                </p>
              </Card>

              <Card variant="elevated" padding="lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                  <svg
                    className="h-6 w-6 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Accessible Facilities</h3>
                <p className="text-gray-600">
                  Our waiting areas, restrooms, and payment stations are designed to be accessible
                  with ramps, wide doorways, and appropriate clearances.
                </p>
              </Card>

              <Card variant="elevated" padding="lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                  <svg
                    className="h-6 w-6 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Assistance Available</h3>
                <p className="text-gray-600">
                  Our staff is trained to provide assistance to customers with disabilities. Please
                  do not hesitate to ask for help.
                </p>
              </Card>

              <Card variant="elevated" padding="lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                  <svg
                    className="h-6 w-6 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Service Animals Welcome</h3>
                <p className="text-gray-600">
                  Service animals are welcome in all areas of our facilities where customers are
                  permitted.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Website Accessibility */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-4xl font-bold text-gray-900">
              Website Accessibility
            </h2>
            <div className="prose prose-lg mx-auto">
              <p>
                We are committed to making our website accessible to all users. Our website is
                designed to conform to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
                standards.
              </p>

              <h3>Accessibility Features</h3>
              <ul>
                <li>
                  <strong>Keyboard Navigation:</strong> All interactive elements can be accessed
                  using a keyboard
                </li>
                <li>
                  <strong>Screen Reader Compatibility:</strong> Our site is compatible with popular
                  screen readers
                </li>
                <li>
                  <strong>Alternative Text:</strong> Images include descriptive alt text for screen
                  readers
                </li>
                <li>
                  <strong>Color Contrast:</strong> Text and interactive elements have sufficient
                  color contrast
                </li>
                <li>
                  <strong>Resizable Text:</strong> Text can be resized up to 200% without loss of
                  functionality
                </li>
                <li>
                  <strong>Clear Language:</strong> We use clear, simple language throughout the site
                </li>
              </ul>

              <h3>Third-Party Content</h3>
              <p>
                Some features on our website may use third-party services that we do not control. We
                work to ensure these services are as accessible as possible.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Communication Accessibility */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-4xl font-bold text-gray-900">
              Communication Options
            </h2>
            <div className="prose prose-lg mx-auto">
              <p>We offer multiple ways to communicate with us to accommodate different needs:</p>
              <ul>
                <li>
                  <strong>Phone:</strong> (570) 459-7000 - Available during business hours
                </li>
                <li>
                  <strong>Email:</strong> support@superiorcarwash.com - We respond within 24 hours
                </li>
                <li>
                  <strong>Online Form:</strong> Contact form available on our website
                </li>
                <li>
                  <strong>In-Person:</strong> Visit any of our locations during operating hours
                </li>
              </ul>
              <p>
                If you need information in an alternative format or require communication assistance,
                please let us know and we will do our best to accommodate your needs.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Feedback */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-4xl font-bold text-gray-900">
              Accessibility Feedback
            </h2>
            <div className="prose prose-lg mx-auto">
              <p>
                We welcome your feedback on the accessibility of our services and website. If you
                encounter any accessibility barriers or have suggestions for improvement, please
                contact us:
              </p>
              <p>
                <strong>Accessibility Coordinator</strong>
                <br />
                Email: accessibility@superiorcarwash.com
                <br />
                Phone: (570) 459-7000
                <br />
                Mail: Superior Car Wash, Accessibility Department
              </p>
              <p>
                We will make reasonable efforts to address your concerns and provide the information
                or service you need in an accessible format.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Ongoing Efforts */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-4xl font-bold text-gray-900">Ongoing Efforts</h2>
            <div className="prose prose-lg mx-auto">
              <p>
                Accessibility is an ongoing effort. We regularly review our services and facilities
                to identify and address accessibility barriers. Our commitment includes:
              </p>
              <ul>
                <li>Regular accessibility audits of our website and physical locations</li>
                <li>Staff training on accessibility and inclusive customer service</li>
                <li>Incorporating accessibility into all new projects and renovations</li>
                <li>Seeking feedback from customers with disabilities</li>
                <li>Staying informed about accessibility best practices and standards</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
