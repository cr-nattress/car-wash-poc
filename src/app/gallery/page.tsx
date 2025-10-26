import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Gallery from '@/components/features/Gallery'

export const metadata: Metadata = {
  title: 'Photo Gallery | Superior Car Wash',
  description:
    'View our state-of-the-art car wash facilities in Scranton and Wilkes-Barre. See our modern equipment, clean facilities, and satisfied customers.',
}

const galleryImages = [
  {
    src: '/gallery/2024-06-30.webp',
    alt: 'Superior Car Wash facility illuminated at night',
    title: 'Our Facility at Night',
    description: 'State-of-the-art car wash facility with modern lighting and equipment',
  },
  {
    src: '/gallery/2024-08-12.webp',
    alt: 'Aerial view of Superior Car Wash facility',
    title: 'Aerial View',
    description: 'Bird\'s eye view showing our spacious facility and convenient layout',
  },
  {
    src: '/gallery/2024-08-12 (1).webp',
    alt: 'Superior Car Wash facility during daytime',
    title: 'Daytime Operations',
    description: 'Our clean, modern facility during business hours',
  },
  {
    src: '/gallery/image.png',
    alt: 'Superior Car Wash detail view',
    title: 'Modern Equipment',
    description: 'Close-up of our advanced car wash technology',
  },
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-5xl font-bold">Photo Gallery</h1>
            <p className="text-xl text-primary-50">
              Take a virtual tour of our state-of-the-art facilities in Northeast Pennsylvania
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Facilities</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Modern equipment, clean facilities, and exceptional service. See why thousands of customers
              trust Superior Car Wash for their vehicle care needs.
            </p>
          </div>

          <Gallery images={galleryImages} columns={3} />
        </Container>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-4xl font-bold text-gray-900">
              What Makes Us Different
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Modern Technology</h3>
                <p className="text-gray-600">
                  State-of-the-art equipment including ceramic coating, Rain-X treatment, and advanced
                  drying systems
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Spotlessly Clean</h3>
                <p className="text-gray-600">
                  We maintain our facilities to the highest standards - the same care we give your vehicle
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Friendly Staff</h3>
                <p className="text-gray-600">
                  Our team is trained to provide exceptional service and answer any questions
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold">Experience the Difference</h2>
            <p className="mb-8 text-xl text-primary-50">
              Visit one of our locations today and see why we&apos;re Northeast Pennsylvania&apos;s premier car wash
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/book"
                className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-8 py-4 font-semibold text-white transition-colors hover:bg-accent-600"
              >
                Book Appointment
              </a>
              <a
                href="/locations"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-primary-600"
              >
                View Locations
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
