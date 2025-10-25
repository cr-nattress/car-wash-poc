import Link from 'next/link'
import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About Us | Shine On Car Wash',
  description:
    'Learn about Shine On Car Wash, our commitment to quality, and our AI-powered car wash technology.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-5xl font-bold">About Shine On Car Wash</h1>
            <p className="text-xl text-primary-50">
              Delivering premium car care with cutting-edge technology and exceptional service since 2020.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-4xl font-bold text-gray-900">Our Story</h2>
            <div className="prose prose-lg mx-auto">
              <p>
                Founded in 2020, Shine On Car Wash was born from a simple idea: car care should be
                convenient, affordable, and deliver exceptional results every time. We saw an
                opportunity to combine traditional car wash excellence with modern technology to
                create an experience that exceeds expectations.
              </p>
              <p>
                Today, we&apos;re proud to serve thousands of customers across our two Pennsylvania
                locations with our innovative AI-powered spot detection technology, unlimited
                membership plans, and commitment to environmental sustainability.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16">
        <Container>
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">Our Values</h2>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            <Card variant="default" padding="lg" className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <svg
                    className="h-8 w-8 text-primary-600"
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
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Quality First</h3>
              <p className="text-gray-600">
                We&apos;re committed to delivering the highest quality wash every single time. Your
                satisfaction is our top priority.
              </p>
            </Card>

            <Card variant="default" padding="lg" className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <svg
                    className="h-8 w-8 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                We leverage the latest technology, including AI-powered spot detection, to ensure
                your vehicle gets the best care possible.
              </p>
            </Card>

            <Card variant="default" padding="lg" className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <svg
                    className="h-8 w-8 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Sustainability</h3>
              <p className="text-gray-600">
                Our water reclamation system reuses up to 80% of water, and we use only
                biodegradable, eco-friendly cleaning products.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Technology */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-4xl font-bold text-gray-900">
              AI-Powered Technology
            </h2>
            <Card variant="elevated" padding="lg">
              <div className="prose prose-lg mx-auto">
                <p>
                  Our proprietary AI-powered spot detection system uses advanced computer vision to
                  identify and target trouble spots on your vehicle that traditional wash systems
                  might miss. This ensures a thorough, consistent clean every time.
                </p>
                <p>
                  Combined with our touchless wash technology, your vehicle receives the gentlest
                  yet most effective clean possible, protecting your paint while removing dirt,
                  grime, and contaminants.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-5xl font-bold text-primary-600">10,000+</div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                Happy Customers
              </p>
            </div>
            <div>
              <div className="mb-2 text-5xl font-bold text-primary-600">2</div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                Locations
              </p>
            </div>
            <div>
              <div className="mb-2 text-5xl font-bold text-primary-600">4.9/5</div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                Average Rating
              </p>
            </div>
            <div>
              <div className="mb-2 text-5xl font-bold text-primary-600">80%</div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                Water Recycled
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Experience the Difference</h2>
            <p className="mb-6 text-lg text-primary-50">
              Join thousands of satisfied customers who trust Shine On Car Wash with their vehicles.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/pricing">
                <Button variant="secondary" size="lg">
                  View Membership Plans
                </Button>
              </Link>
              <Link href="/locations">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                >
                  Find a Location
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
