'use client'

import Link from 'next/link'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import FadeIn from '@/components/animations/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren'
import type { Service } from '@/types'

interface ServicesShowcaseProps {
  services: Service[]
}

/**
 * Services showcase section for the homepage
 */
export default function ServicesShowcase({ services }: ServicesShowcaseProps) {

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <Container>
        {/* Section header */}
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">Choose Your Wash</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Three levels of superior care for your vehicle. All using touchless technology to
              protect your paint.
            </p>
          </div>
        </FadeIn>

        {/* Services grid */}
        <StaggerChildren className="grid grid-cols-1 gap-8 lg:grid-cols-3" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={service.id}>
              <Card
                variant={index === 2 ? 'elevated' : 'default'}
                padding="none"
                className={`h-full ${index === 2 ? 'border-2 border-primary-500' : ''}`}
              >
              {index === 2 && (
                <div className="bg-primary-500 px-6 py-2 text-center">
                  <Badge variant="warning" size="sm">
                    Best Value
                  </Badge>
                </div>
              )}

              <div className="p-8">
                {/* Service name and price */}
                <div className="mb-6 text-center">
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                  </div>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">${service.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{service.duration}</p>
                </div>

                {/* Features list */}
                {service.features && (
                  <ul className="mb-8 space-y-3 border-t border-gray-200 pt-6">
                    {service.features.slice(0, 5).map((feature, idx) => (
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
                )}

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
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* View all link */}
        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="primary" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
