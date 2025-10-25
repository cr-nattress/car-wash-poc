'use client'

import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren'
import AnimatedCounter from '@/components/animations/AnimatedCounter'
import type { Testimonial } from '@/types'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

/**
 * Testimonials section for the homepage
 */
export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <Container>
        {/* Section header */}
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about
              their experience with Superior Car Wash.
            </p>
          </div>
        </FadeIn>

        {/* Testimonials grid */}
        <StaggerChildren className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {testimonials.map(testimonial => (
            <StaggerItem key={testimonial.id}>
              <Card variant="default" padding="md">
              {/* Rating stars */}
              <div className="mb-3 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                {testimonial.verified && (
                  <svg
                    className="ml-2 h-5 w-5 text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-label="Verified Customer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>

              {/* Testimonial text */}
              <p className="mb-4 text-gray-700">{testimonial.text}</p>

              {/* Customer info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                {testimonial.service && (
                  <p className="mt-1 text-xs text-primary-600">{testimonial.service}</p>
                )}
              </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Trust indicators */}
        <FadeIn delay={0.4}>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary-600">
                <AnimatedCounter value={10000} duration={2.5} suffix="+" />
              </div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary-600">
                <AnimatedCounter value={4.9} duration={2} suffix="/5" decimals={1} />
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary-600">
                <AnimatedCounter value={2} duration={1.5} />
              </div>
              <p className="text-gray-600">Convenient Locations</p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
