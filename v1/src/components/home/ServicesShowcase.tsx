'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { CardSkeleton } from '@/components/ui/Skeleton'
import FadeIn from '@/components/animations/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren'
import { getServices } from '@/lib/data'
import type { Service } from '@/types'

/**
 * Services showcase section for the homepage
 */
export default function ServicesShowcase() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getServices().then(data => {
      setServices(data.slice(0, 6)) // Show first 6 services
      setLoading(false)
    })
  }, [])

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <Container>
        {/* Section header */}
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              From quick express washes to comprehensive detailing, we have the perfect service for
              every need and budget.
            </p>
          </div>
        </FadeIn>

        {/* Services grid */}
        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <StaggerChildren className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {services.map(service => (
            <StaggerItem key={service.id}>
              <Card variant="default" padding="none" className="overflow-hidden">
              {/* Service image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200">
                <div className="flex h-full items-center justify-center">
                  <svg
                    className="h-24 w-24 text-primary-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
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

                <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
                  <span>⏱️ {service.duration}</span>
                  {service.price && (
                    <span className="text-lg font-bold text-primary-600">${service.price}</span>
                  )}
                </div>

                <Link href={`/services/${service.id}`}>
                  <Button variant="outline" size="sm" fullWidth>
                    Learn More
                  </Button>
                </Link>
              </div>
              </Card>
            </StaggerItem>
          ))}
          </StaggerChildren>
        )}

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
