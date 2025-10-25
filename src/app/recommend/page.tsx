import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import ServiceRecommender from '@/components/ai/ServiceRecommender'

export const metadata: Metadata = {
  title: 'Find Your Perfect Service | Superior Car Wash',
  description:
    'Not sure which service or membership is right for you? Take our quick quiz and get a personalized recommendation.',
}

export default function RecommendPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-5xl font-bold">Find Your Perfect Service</h1>
            <p className="text-xl text-primary-50">
              Answer 3 quick questions and we'll recommend the best option for your needs
            </p>
          </div>
        </Container>
      </section>

      {/* Recommender Section */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <ServiceRecommender />
          </div>
        </Container>
      </section>

      {/* Why Trust Our Recommendations */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-4xl font-bold text-gray-900">
              Why Trust Our Recommendations?
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Personalized</h3>
                <p className="text-gray-600">
                  Based on your actual washing habits and preferences, not generic advice
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Save Money</h3>
                <p className="text-gray-600">
                  We'll show you how to get the most value based on your budget
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Instant Results</h3>
                <p className="text-gray-600">
                  Get your recommendation in under 30 seconds with clear explanations
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Still Unsure CTA */}
      <section className="bg-primary-500 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold">Still Have Questions?</h2>
            <p className="mb-8 text-xl text-primary-50">
              Our AI chatbot can answer any questions about our services, or you can contact us directly
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  // Chat bubble should already be on page
                  const chatButton = document.querySelector('[aria-label="Open chat"]') as HTMLButtonElement
                  chatButton?.click()
                }}
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-primary-600 transition-colors hover:bg-primary-50"
              >
                Chat with AI Assistant
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-primary-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
