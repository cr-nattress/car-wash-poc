import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { getServiceById, getServices } from '@/lib/data'

interface ServicePageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  const services = await getServices()
  return services.map(service => ({
    id: service.id,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { id } = await params
  const service = await getServiceById(id)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.name} | Superior Car Wash`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params
  const service = await getServiceById(id)

  if (!service) {
    notFound()
  }

  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm">
              <Link href="/services" className="text-primary-100 hover:text-white">
                Services
              </Link>
              <span className="mx-2 text-primary-200">/</span>
              <span className="text-white">{service.name}</span>
            </nav>

            <div className="flex items-start justify-between">
              <div>
                <h1 className="mb-4 text-5xl font-bold">{service.name}</h1>
                <p className="text-xl text-primary-50">{service.description}</p>
              </div>
              {service.category && (
                <Badge
                  variant={
                    service.category === 'ultimate'
                      ? 'secondary'
                      : service.category === 'premium'
                        ? 'warning'
                        : 'info'
                  }
                  size="lg"
                  className="ml-4"
                >
                  {service.category}
                </Badge>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Service details */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Card variant="default" padding="lg">
                {/* Service description */}
                {service.content && (
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: service.content }}
                  />
                )}

                {/* Features list */}
                <div className="mt-8">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">What&apos;s Included</h2>
                  <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-6 w-6 flex-shrink-0 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card variant="elevated" padding="lg" className="sticky top-24">
                {/* Pricing */}
                <div className="mb-6 text-center">
                  {service.price ? (
                    <>
                      <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600">
                        Single Service
                      </div>
                      <div className="text-5xl font-bold text-gray-900">${service.price}</div>
                    </>
                  ) : (
                    <div className="text-2xl font-bold text-gray-900">Included in Membership</div>
                  )}
                </div>

                {/* Duration */}
                <div className="mb-6 flex items-center justify-center text-gray-600">
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{service.duration}</span>
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <Link href="/pricing">
                    <Button variant="primary" size="lg" fullWidth>
                      Join Membership
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="lg" fullWidth>
                      Contact Us
                    </Button>
                  </Link>
                </div>

                {/* Additional info */}
                <div className="mt-6 border-t border-gray-200 pt-6 text-sm text-gray-600">
                  <p className="mb-2 font-semibold">Member Benefits:</p>
                  <ul className="space-y-1">
                    <li>✓ Unlimited monthly washes</li>
                    <li>✓ Exclusive member pricing</li>
                    <li>✓ Priority lane access</li>
                    <li>✓ No long-term contracts</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Back to services */}
      <section className="bg-white py-8">
        <Container>
          <div className="text-center">
            <Link href="/services" className="text-primary-600 hover:text-primary-700">
              ← View All Services
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
