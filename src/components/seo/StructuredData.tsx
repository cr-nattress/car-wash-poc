/**
 * Structured Data (JSON-LD) Component
 *
 * Adds Schema.org structured data for SEO.
 * Helps Google understand the business and show rich snippets.
 */

interface LocalBusinessData {
  name: string
  description: string
  url: string
  telephone: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  openingHours?: string[]
  priceRange?: string
}

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Service' | 'FAQPage' | 'WebSite'
  data?: LocalBusinessData
}

export default function StructuredData({ type }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://superiorcarwash.netlify.app'

    switch (type) {
      case 'LocalBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'AutoWash',
          name: 'Superior Car Wash',
          description:
            'Premium car wash service in Northeast Pennsylvania with AI-powered technology, unlimited memberships, and exceptional service.',
          image: `${baseUrl}/gallery/2024-08-12.webp`,
          '@id': baseUrl,
          url: baseUrl,
          telephone: '+1-570-555-0123',
          priceRange: '$$',
          address: [
            {
              '@type': 'PostalAddress',
              streetAddress: '123 Main Street',
              addressLocality: 'Scranton',
              addressRegion: 'PA',
              postalCode: '18503',
              addressCountry: 'US',
            },
            {
              '@type': 'PostalAddress',
              streetAddress: '456 Market Street',
              addressLocality: 'Wilkes-Barre',
              addressRegion: 'PA',
              postalCode: '18702',
              addressCountry: 'US',
            },
          ],
          geo: [
            {
              '@type': 'GeoCoordinates',
              latitude: 41.409,
              longitude: -75.6624,
            },
            {
              '@type': 'GeoCoordinates',
              latitude: 41.2459,
              longitude: -75.8813,
            },
          ],
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '07:00',
              closes: '20:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: 'Sunday',
              opens: '08:00',
              closes: '18:00',
            },
          ],
          sameAs: [
            'https://www.facebook.com/superiorcarwash',
            'https://www.instagram.com/superiorcarwash',
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '847',
          },
          paymentAccepted: 'Cash, Credit Card, Debit Card',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Car Wash Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Express Wash',
                  description: '5-minute touchless wash',
                  price: '12.00',
                  priceCurrency: 'USD',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Deluxe Wash',
                  description: 'Wash with wax and tire shine',
                  price: '22.00',
                  priceCurrency: 'USD',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Ultimate Wash',
                  description: 'Premium wash with ceramic coating',
                  price: '32.00',
                  priceCurrency: 'USD',
                },
              },
            ],
          },
        }

      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Superior Car Wash',
          url: baseUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
        }

      case 'FAQPage':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What are your hours?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Monday-Saturday: 7:00 AM - 8:00 PM, Sunday: 8:00 AM - 6:00 PM at both locations.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does an unlimited membership cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our membership plans range from $24/month (Basic Shine) to $42/month (Ultimate Protect) with unlimited washes.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need an appointment?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Walk-ins are welcome for all wash services! Appointments are recommended for detail services.',
              },
            },
          ],
        }

      default:
        return null
    }
  }

  const structuredData = getStructuredData()

  if (!structuredData) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
