'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'Book Appointment | Superior Car Wash',
  description:
    'Schedule your car detailing appointment at Superior Car Wash. Choose from interior detailing or full detail packages.',
}

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    vehicleMake: '',
    vehicleModel: '',
    notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setSubmitStatus('success')
    setIsSubmitting(false)
  }

  if (submitStatus === 'success') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Container>
          <Card variant="elevated" padding="lg" className="mx-auto max-w-2xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-10 w-10 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Appointment Requested!</h2>
            <p className="mb-6 text-lg text-gray-600">
              Thank you for booking with Superior Car Wash. We&apos;ve received your appointment
              request and will contact you within 24 hours to confirm your booking.
            </p>
            <div className="space-y-3">
              <Button variant="primary" size="lg" fullWidth onClick={() => (window.location.href = '/')}>
                Return to Homepage
              </Button>
              <Button
                variant="outline"
                size="lg"
                fullWidth
                onClick={() => setSubmitStatus('idle')}
              >
                Book Another Appointment
              </Button>
            </div>
          </Card>
        </Container>
      </div>
    )
  }

  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-5xl font-bold">Book an Appointment</h1>
            <p className="text-xl text-primary-50">
              Schedule your detailing service and we&apos;ll have your vehicle looking its best.
            </p>
          </div>
        </Container>
      </section>

      {/* Booking form */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Card variant="elevated" padding="lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h2 className="mb-4 text-xl font-bold text-gray-900">Personal Information</h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Input
                      label="Full Name"
                      name="name"
                      type="text"
                      required
                      fullWidth
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      required
                      fullWidth
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(570) 555-0100"
                    />
                  </div>
                  <div className="mt-4">
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      required
                      fullWidth
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Service Details */}
                <div>
                  <h2 className="mb-4 text-xl font-bold text-gray-900">Service Details</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Service Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-base transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1"
                      >
                        <option value="">Select a service</option>
                        <option value="interior-detail">Interior Detailing ($75)</option>
                        <option value="full-detail">Full Detail Package ($150)</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Preferred Location <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-base transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1"
                      >
                        <option value="">Select a location</option>
                        <option value="downtown-scranton">Downtown Scranton</option>
                        <option value="wilkes-barre">Wilkes-Barre Plaza</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Input
                        label="Preferred Date"
                        name="preferredDate"
                        type="date"
                        required
                        fullWidth
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Preferred Time <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="preferredTime"
                          required
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-base transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1"
                        >
                          <option value="">Select time</option>
                          <option value="morning">Morning (8 AM - 12 PM)</option>
                          <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                          <option value="evening">Evening (4 PM - 8 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vehicle Information */}
                <div>
                  <h2 className="mb-4 text-xl font-bold text-gray-900">Vehicle Information</h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Input
                      label="Vehicle Make"
                      name="vehicleMake"
                      type="text"
                      required
                      fullWidth
                      value={formData.vehicleMake}
                      onChange={handleChange}
                      placeholder="Toyota"
                    />
                    <Input
                      label="Vehicle Model"
                      name="vehicleModel"
                      type="text"
                      required
                      fullWidth
                      value={formData.vehicleModel}
                      onChange={handleChange}
                      placeholder="Camry"
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <Textarea
                    label="Additional Notes"
                    name="notes"
                    fullWidth
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any special requests or areas of concern?"
                    helperText="Optional"
                  />
                </div>

                {/* Submit */}
                <div className="border-t border-gray-200 pt-6">
                  <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                  </Button>
                  <p className="mt-3 text-center text-sm text-gray-600">
                    We&apos;ll contact you within 24 hours to confirm your appointment.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
