import Link from 'next/link'
import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { getLocations } from '@/lib/data'
import { formatPhone } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Our Locations | Superior Car Wash',
  description: 'Find a Superior Car Wash location near you. We have 2 convenient locations serving the Scranton and Wilkes-Barre areas.',
}

export default async function LocationsPage() {
  const locations = await getLocations()

  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-5xl font-bold">Our Locations</h1>
            <p className="text-xl text-primary-50">
              Find a Superior Car Wash near you. We have 2 convenient locations ready to serve you.
            </p>
          </div>
        </Container>
      </section>

      {/* Locations */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto max-w-6xl space-y-8">
            {locations.map(location => (
              <Card key={location.id} variant="elevated" padding="none" className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Location image/map placeholder */}
                  <div className="h-80 bg-gradient-to-br from-primary-100 to-primary-200 lg:h-auto">
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <svg
                          className="mx-auto mb-4 h-24 w-24 text-primary-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <p className="text-sm text-primary-600">
                          {location.coordinates.lat.toFixed(4)}, {location.coordinates.lng.toFixed(4)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Location details */}
                  <div className="p-8">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">{location.name}</h2>

                    {/* Address */}
                    <div className="mb-6">
                      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600">
                        Address
                      </h3>
                      <p className="text-gray-700">
                        {location.address}
                        <br />
                        {location.city}, {location.state} {location.zip}
                      </p>
                    </div>

                    {/* Contact */}
                    <div className="mb-6">
                      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600">
                        Contact
                      </h3>
                      <a
                        href={`tel:${location.phone.replace(/\D/g, '')}`}
                        className="text-primary-600 hover:text-primary-700"
                      >
                        {formatPhone(location.phone)}
                      </a>
                    </div>

                    {/* Hours */}
                    <div className="mb-6">
                      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600">
                        Hours
                      </h3>
                      <div className="space-y-1 text-sm text-gray-700">
                        <div className="flex justify-between">
                          <span>Monday:</span>
                          <span>{location.hours.monday}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tuesday:</span>
                          <span>{location.hours.tuesday}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Wednesday:</span>
                          <span>{location.hours.wednesday}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Thursday:</span>
                          <span>{location.hours.thursday}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Friday:</span>
                          <span>{location.hours.friday}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span>{location.hours.saturday}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span>{location.hours.sunday}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600">
                        Features
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {location.features.map((feature, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="primary" size="md" fullWidth>
                          Get Directions
                        </Button>
                      </a>
                      <Link href="/contact" className="flex-1">
                        <Button variant="outline" size="md" fullWidth>
                          Contact Location
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Expandable content */}
                {location.content && (
                  <div className="border-t border-gray-200 bg-gray-50 p-8">
                    <div
                      className="prose max-w-none"
                      dangerouslySetInnerHTML={{ __html: location.content }}
                    />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA section */}
      <section className="bg-white py-16">
        <Container>
          <div className="rounded-2xl bg-gradient-to-r from-primary-500 to-primary-700 px-8 py-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Ready to Experience the Shine?</h2>
            <p className="mb-6 text-lg text-primary-50">
              Visit us today or join our membership program for unlimited washes at both locations.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/pricing">
                <Button variant="secondary" size="lg">
                  View Membership Plans
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                >
                  Browse Services
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
