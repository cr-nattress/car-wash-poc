import Link from 'next/link'
import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { getServices } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Our Services | Shine On Car Wash',
  description:
    'Explore our full range of car wash services, from quick express washes to comprehensive detailing packages.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-5xl font-bold">Our Services</h1>
            <p className="text-xl text-primary-50">
              Professional car care solutions for every need and budget. From quick express washes
              to premium detailing, we&apos;ve got you covered.
            </p>
          </div>
        </Container>
      </section>

      {/* Services grid */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map(service => (
              <Card key={service.id} variant="default" padding="none" className="overflow-hidden">
                {/* Service image placeholder */}
                <div className="h-56 bg-gradient-to-br from-primary-100 to-primary-200">
                  <div className="flex h-full items-center justify-center">
                    <svg
                      className="h-32 w-32 text-primary-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">{service.name}</h2>
                    {service.category && (
                      <Badge
                        variant={
                          service.category === 'ultimate'
                            ? 'secondary'
                            : service.category === 'premium'
                              ? 'primary'
                              : 'info'
                        }
                        size="sm"
                      >
                        {service.category}
                      </Badge>
                    )}
                  </div>

                  <p className="mb-4 text-gray-600">{service.description}</p>

                  <div className="mb-6 flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        className="mr-1 h-5 w-5"
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
                      {service.duration}
                    </div>
                    {service.price && (
                      <div className="text-2xl font-bold text-primary-600">${service.price}</div>
                    )}
                  </div>

                  <Link href={`/services/${service.id}`}>
                    <Button variant="primary" size="md" fullWidth>
                      View Details
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA section */}
      <section className="bg-white py-16">
        <Container>
          <div className="rounded-2xl bg-gradient-to-r from-primary-500 to-primary-700 px-8 py-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Save More with a Membership</h2>
            <p className="mb-6 text-lg text-primary-50">
              Get unlimited washes and exclusive member pricing on all services. Plans starting at
              just $24/month.
            </p>
            <Link href="/pricing">
              <Button variant="secondary" size="lg">
                View Membership Plans
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
