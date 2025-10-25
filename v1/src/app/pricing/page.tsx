import Link from 'next/link'
import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { getPricingTiers } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Membership Pricing | Shine On Car Wash',
  description:
    'Choose the perfect unlimited car wash membership for your vehicle. Plans starting at just $24/month with no long-term contracts.',
}

export default async function PricingPage() {
  const tiers = await getPricingTiers()

  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-5xl font-bold">Membership Pricing</h1>
            <p className="text-xl text-primary-50">
              Unlimited car washes, exclusive benefits, and no long-term contracts. Choose the plan
              that&apos;s right for you.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing tiers */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map(tier => (
              <Card
                key={tier.id}
                id={tier.id}
                variant={tier.popular ? 'elevated' : 'default'}
                padding="none"
                className={`flex flex-col ${tier.popular ? 'border-2 border-primary-500 lg:scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="bg-primary-500 px-6 py-3 text-center">
                    <Badge variant="warning" size="md">
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-8">
                  {/* Tier header */}
                  <div className="mb-6 text-center">
                    <h2 className="mb-2 text-3xl font-bold text-gray-900">{tier.name}</h2>
                    <div className="flex items-baseline justify-center">
                      <span className="text-6xl font-bold text-gray-900">${tier.price}</span>
                      <span className="ml-2 text-lg text-gray-600">/month</span>
                    </div>
                    {tier.savings && (
                      <p className="mt-3 text-sm font-semibold text-green-600">{tier.savings}</p>
                    )}
                  </div>

                  {/* Features list */}
                  <ul className="mb-8 flex-1 space-y-4">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <svg
                          className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
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

                  {/* Content */}
                  {tier.content && (
                    <div
                      className="prose prose-sm mb-6 max-w-none border-t border-gray-200 pt-6"
                      dangerouslySetInnerHTML={{ __html: tier.content }}
                    />
                  )}

                  {/* CTA button */}
                  <Link href="/contact">
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
        </Container>
      </section>

      {/* FAQ section */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Membership FAQs
            </h2>

            <div className="space-y-6">
              <Card variant="default" padding="md">
                <h3 className="mb-2 font-bold text-gray-900">Can I cancel anytime?</h3>
                <p className="text-gray-600">
                  Yes! All memberships are month-to-month with no long-term contracts. Cancel
                  anytime with no cancellation fees.
                </p>
              </Card>

              <Card variant="default" padding="md">
                <h3 className="mb-2 font-bold text-gray-900">
                  Can I upgrade or downgrade my membership?
                </h3>
                <p className="text-gray-600">
                  Absolutely! You can change your tier at any time. Upgrades take effect
                  immediately, while downgrades take effect at the start of your next billing cycle.
                </p>
              </Card>

              <Card variant="default" padding="md">
                <h3 className="mb-2 font-bold text-gray-900">
                  Can I use my membership at both locations?
                </h3>
                <p className="text-gray-600">
                  Yes! Your membership is valid at both our Downtown Scranton and Wilkes-Barre
                  locations. Wash wherever is most convenient for you.
                </p>
              </Card>

              <Card variant="default" padding="md">
                <h3 className="mb-2 font-bold text-gray-900">
                  Do you offer family or multi-vehicle plans?
                </h3>
                <p className="text-gray-600">
                  Yes! Add additional vehicles to your membership at a discounted rate. The second
                  vehicle receives 20% off, and the third and subsequent vehicles receive 30% off.
                </p>
              </Card>

              <Card variant="default" padding="md">
                <h3 className="mb-2 font-bold text-gray-900">How do I sign up?</h3>
                <p className="text-gray-600">
                  You can sign up online, through our mobile app, or in person at either location.
                  The process takes just a few minutes and you can start using your membership
                  immediately.
                </p>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Link href="/faq" className="text-primary-600 hover:text-primary-700">
                View All FAQs →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mb-6 text-lg text-primary-50">
              Join thousands of satisfied members who keep their vehicles looking their best with
              Shine On Car Wash.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Sign Up Now
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
