'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { PricingCardSkeleton } from '@/components/ui/Skeleton'
import FadeIn from '@/components/animations/FadeIn'
import ScaleIn from '@/components/animations/ScaleIn'
import { getPricingTiers } from '@/lib/data'
import type { PricingTier } from '@/types'

/**
 * Pricing preview section for the homepage
 */
export default function PricingPreview() {
  const [tiers, setTiers] = useState<PricingTier[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPricingTiers().then(data => {
      setTiers(data)
      setLoading(false)
    })
  }, [])

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        {/* Section header */}
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
              Unlimited Membership Plans
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Choose the perfect membership tier for your vehicle. All plans include unlimited monthly
              washes and exclusive member benefits.
            </p>
          </div>
        </FadeIn>

        {/* Pricing cards */}
        {loading ? (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <PricingCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map((tier, index) => (
            <ScaleIn key={tier.id} delay={index * 0.1}>
              <Card
                variant={tier.popular ? 'elevated' : 'default'}
                padding="none"
                className={tier.popular ? 'border-2 border-primary-500' : ''}
              >
              {tier.popular && (
                <div className="bg-primary-500 px-6 py-2 text-center">
                  <Badge variant="warning" size="sm">
                    {tier.badge}
                  </Badge>
                </div>
              )}

              <div className="p-8">
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
                <ul className="mb-8 space-y-3">
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
            </ScaleIn>
          ))}
          </div>
        )}

        {/* Additional info */}
        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              All memberships are month-to-month with no long-term contracts.{' '}
              <Link href="/pricing" className="font-semibold text-primary-600 hover:text-primary-700">
                Learn more about membership benefits →
              </Link>
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
