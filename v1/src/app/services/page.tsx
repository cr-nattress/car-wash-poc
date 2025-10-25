import Link from 'next/link'
import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { getServices, getPricingTiers } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Our Services | Superior Car Wash',
  description:
    'Explore our full range of car wash services, from quick express washes to comprehensive detailing packages.',
}

export default async function ServicesPage() {
  const services = await getServices()
  const pricingTiers = await getPricingTiers()

  // Filter services by category
  const washServices = services.filter(s =>
    ['express-wash', 'deluxe-wash', 'ultimate-wash'].includes(s.id)
  )
  const otherServices = services.filter(s =>
    !['express-wash', 'deluxe-wash', 'ultimate-wash'].includes(s.id)
  )

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

      {/* Featured Wash Tiers */}
      <section className="bg-white py-16">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Single Wash Options</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Choose the perfect wash for your vehicle. All our washes use touchless technology to
              protect your paint.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {washServices.map((service, index) => (
              <Card
                key={service.id}
                variant={index === 2 ? 'elevated' : 'default'}
                padding="none"
                className={index === 2 ? 'border-2 border-primary-500' : ''}
              >
                {index === 2 && (
                  <div className="bg-primary-500 px-6 py-2 text-center">
                    <Badge variant="warning" size="sm">
                      Most Comprehensive
                    </Badge>
                  </div>
                )}

                <div className="p-8">
                  {/* Service name and price */}
                  <div className="mb-6 text-center">
                    <div className="mb-2 flex items-center justify-center gap-2">
                      <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
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
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">${service.price}</span>
                      <span className="ml-2 text-gray-600">/{service.duration}</span>
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="mb-8 space-y-3">
                    {service.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <Link href={`/services/${service.id}`}>
                    <Button
                      variant={index === 2 ? 'primary' : 'outline'}
                      size="lg"
                      fullWidth
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Membership Plans Section */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Unlimited Membership Plans</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Get unlimited washes every month and save big. All plans include exclusive member
              benefits and no long-term contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingTiers.map(tier => (
              <Card
                key={tier.id}
                variant={tier.popular ? 'elevated' : 'default'}
                padding="none"
                className={`h-full flex flex-col ${tier.popular ? 'border-2 border-primary-500' : ''}`}
              >
                {tier.popular && (
                  <div className="bg-primary-500 px-6 py-2 text-center">
                    <Badge variant="warning" size="sm">
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <div className="flex flex-col flex-1 p-8">
                  {/* Tier name and price */}
                  <div className="mb-6 text-center">
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">{tier.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">${tier.price}</span>
                      <span className="ml-2 text-gray-600">/month</span>
                    </div>
                    {tier.savings && (
                      <p className="mt-2 text-sm font-semibold text-green-600">{tier.savings}</p>
                    )}
                  </div>

                  {/* Features list */}
                  <ul className="mb-8 space-y-3 flex-1">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <Link href={`/pricing#${tier.id}`}>
                    <Button
                      variant={tier.popular ? 'primary' : 'outline'}
                      size="lg"
                      fullWidth
                    >
                      Choose {tier.name}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/pricing" className="text-primary-600 hover:text-primary-700 font-semibold">
              Compare all membership benefits →
            </Link>
          </div>
        </Container>
      </section>

      {/* Additional Services */}
      <section className="bg-white py-16">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Additional Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Premium detailing and specialty services to keep your vehicle in top condition.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherServices.map(service => (
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
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-primary-50">
              Book your first wash or sign up for a membership today. Your vehicle deserves the
              best care.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/book">
                <Button variant="secondary" size="lg" className="min-w-[200px]">
                  Book Now
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  variant="outline"
                  size="lg"
                  className="min-w-[200px] border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
