'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'
import { MAIN_PHONE, SUPPORT_EMAIL } from '@/lib/constants'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormState({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-5xl font-bold">Contact Us</h1>
            <p className="text-xl text-primary-50">
              Have questions? We&apos;re here to help. Reach out to us and we&apos;ll get back to you as soon
              as possible.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact section */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Contact info */}
            <div className="space-y-6 lg:col-span-1">
              <Card variant="default" padding="lg">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Call Us</h3>
                <a
                  href={`tel:${MAIN_PHONE.replace(/\D/g, '')}`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  {MAIN_PHONE}
                </a>
                <p className="mt-2 text-sm text-gray-600">Monday - Sunday, 6 AM - 11 PM</p>
              </Card>

              <Card variant="default" padding="lg">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Email Us</h3>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  {SUPPORT_EMAIL}
                </a>
                <p className="mt-2 text-sm text-gray-600">We&apos;ll respond within 24 hours</p>
              </Card>

              <Card variant="default" padding="lg">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Visit Us</h3>
                <p className="text-gray-700">
                  Downtown Scranton
                  <br />
                  425 Lackawanna Avenue
                  <br />
                  Scranton, PA 18503
                </p>
                <p className="mt-4 text-gray-700">
                  Wilkes-Barre Plaza
                  <br />
                  890 Commerce Boulevard
                  <br />
                  Wilkes-Barre, PA 18702
                </p>
              </Card>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <Card variant="elevated" padding="lg">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Send Us a Message</h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-800">
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm">We&apos;ll get back to you as soon as possible.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Name"
                    name="name"
                    type="text"
                    required
                    fullWidth
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />

                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    required
                    fullWidth
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />

                  <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    fullWidth
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="(570) 555-0100"
                    helperText="Optional"
                  />

                  <Textarea
                    label="Message"
                    name="message"
                    required
                    fullWidth
                    rows={6}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                  />

                  <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
