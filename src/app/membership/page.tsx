import Link from 'next/link'
import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { getPricingTiers } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Membership Benefits | Superior Car Wash',
  description:
    'Join Superior Car Wash membership program for unlimited washes, exclusive discounts, and premium benefits.',
}

export default async function MembershipPage() {
  const pricingTiers = await getPricingTiers()

  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-5xl font-bold">Membership Benefits</h1>
            <p className="text-xl text-primary-50">
              Unlimited car washes, exclusive perks, and incredible savings
            </p>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-4xl font-bold text-gray-900">Why Join?</h2>
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Unlimited Washes</h3>
                <p className="text-gray-600">
                  Wash your car as many times as you want. No limits, no restrictions.
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Save Money</h3>
                <p className="text-gray-600">
                  Pay once per month and save hundreds compared to pay-per-wash pricing.
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Skip the Line</h3>
                <p className="text-gray-600">
                  Members get priority access during busy hours. Get in and out faster.
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
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Flexible Plans</h3>
                <p className="text-gray-600">
                  Choose from three tiers. Cancel anytime with no penalties or fees.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Membership Tiers */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
              Choose Your Plan
            </h2>
            <p className="mb-12 text-center text-xl text-gray-600">
              All plans include unlimited washes and can be used at any location
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {pricingTiers.map(tier => (
                <Card
                  key={tier.id}
                  variant={tier.popular ? 'elevated' : 'default'}
                  padding="lg"
                  className={tier.popular ? 'ring-2 ring-primary-500' : ''}
                >
                  {tier.popular && (
                    <div className="mb-4 -mt-4 inline-block rounded-full bg-primary-500 px-3 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </div>
                  )}
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  {tier.savings && (
                    <p className="mb-6 text-sm font-semibold text-green-600">{tier.savings}</p>
                  )}
                  <ul className="mb-6 space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="mr-2 h-5 w-5 flex-shrink-0 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/book">
                    <Button
                      variant={tier.popular ? 'primary' : 'outline'}
                      size="lg"
                      fullWidth
                    >
                      Get Started
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ section */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-4xl font-bold text-gray-900">
              Membership FAQ
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Can I cancel anytime?
                </h3>
                <p className="text-gray-600">
                  Yes! You can cancel your membership at any time with no penalties or fees.
                  Your membership will remain active until the end of your billing period.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Can I use my membership at all locations?
                </h3>
                <p className="text-gray-600">
                  Absolutely! Your membership is valid at all Superior Car Wash locations.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  How do I upgrade or downgrade my plan?
                </h3>
                <p className="text-gray-600">
                  You can change your plan at any time through your account dashboard or by
                  contacting our customer service team.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Is there a limit to how many times I can wash my car?
                </h3>
                <p className="text-gray-600">
                  No limits! Wash your car as often as you like. We recommend waiting at least
                  8 hours between washes to protect your vehicle&apos;s finish.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-primary-500 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold">Ready to Join?</h2>
            <p className="mb-8 text-xl text-primary-50">
              Start saving today with unlimited car washes
            </p>
            <Link href="/book">
              <Button variant="secondary" size="lg">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
