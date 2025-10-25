'use client'

import { useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

interface NewsletterSignupProps {
  variant?: 'inline' | 'card'
  showName?: boolean
}

export default function NewsletterSignup({
  variant = 'inline',
  showName = false,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitStatus('success')
    setIsSubmitting(false)
    setEmail('')
    setFirstName('')

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitStatus('idle')
    }, 5000)
  }

  const FormContent = () => (
    <>
      {submitStatus === 'success' && (
        <div className="mb-4 rounded-lg bg-green-50 p-3 text-sm text-green-800">
          Thanks for subscribing! Check your email for a confirmation.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {showName && (
          <Input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            fullWidth
          />
        )}

        <div className="flex flex-col gap-2 sm:flex-row">
          <Input
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            fullWidth
          />
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={isSubmitting}
            className="sm:w-auto"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </div>

        <p className="text-xs text-gray-500">
          Join our newsletter for exclusive offers and car care tips. Unsubscribe anytime.
        </p>
      </form>
    </>
  )

  if (variant === 'card') {
    return (
      <Card variant="elevated" padding="lg">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
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
          <div>
            <h3 className="text-lg font-bold text-gray-900">Stay Updated</h3>
            <p className="text-sm text-gray-600">Get exclusive offers and tips</p>
          </div>
        </div>
        <FormContent />
      </Card>
    )
  }

  return <FormContent />
}
