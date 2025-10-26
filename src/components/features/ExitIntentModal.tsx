'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

/**
 * Exit Intent Modal
 *
 * Captures email addresses when users are about to leave the site.
 *
 * Features:
 * - Detects mouse leaving viewport (desktop)
 * - Triggers only once per session
 * - Dismissible
 * - Special offer incentive
 * - Mobile-responsive
 */
export default function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Check if user has already seen the modal this session
    const hasSeenModal = sessionStorage.getItem('exitIntentShown')
    if (hasSeenModal) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves from top of page
      if (e.clientY <= 0 && !hasSeenModal) {
        setIsVisible(true)
        sessionStorage.setItem('exitIntentShown', 'true')
      }
    }

    // Add event listener after a delay to avoid triggering immediately
    const timeout = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 3000)

    return () => {
      clearTimeout(timeout)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    // TODO: Replace with actual email capture service
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Close modal after showing success message
    setTimeout(() => {
      setIsVisible(false)
    }, 3000)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              aria-label="Close modal"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!isSubmitted ? (
              <div className="p-8">
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-100">
                    <svg className="h-8 w-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Heading */}
                <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
                  Wait! Before You Go...
                </h2>
                <p className="mb-6 text-center text-gray-600">
                  Get <span className="font-bold text-accent-600">$5 OFF</span> your first wash when you
                  join our newsletter!
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Claim My $5 Discount'}
                  </Button>
                </form>

                {/* Benefits */}
                <ul className="mt-6 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Exclusive member-only discounts
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Car care tips from the pros
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Unsubscribe anytime
                  </li>
                </ul>

                <p className="mt-4 text-center text-xs text-gray-500">
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            ) : (
              /* Success State */
              <div className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">You're All Set!</h3>
                <p className="text-gray-600">
                  Check your email for your $5 discount code and exclusive offers.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
