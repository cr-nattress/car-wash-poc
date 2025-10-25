import { z } from 'zod'

/**
 * Contact Form Schema
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .optional()
    .refine(
      value => {
        if (!value) return true
        // Remove non-digits and check length
        const cleaned = value.replace(/\D/g, '')
        return cleaned.length === 10
      },
      {
        message: 'Phone number must be 10 digits',
      }
    ),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  website: z.string().optional(), // Honeypot field for spam prevention
})

export type ContactFormData = z.infer<typeof contactFormSchema>

/**
 * Newsletter Subscription Schema
 */
export const newsletterFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .optional(),
})

export type NewsletterFormData = z.infer<typeof newsletterFormSchema>

/**
 * Membership Signup Schema
 */
export const membershipSignupSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().refine(
    value => {
      const cleaned = value.replace(/\D/g, '')
      return cleaned.length === 10
    },
    {
      message: 'Phone number must be 10 digits',
    }
  ),
  vehicleMake: z
    .string()
    .min(2, 'Vehicle make is required')
    .max(50, 'Vehicle make must be less than 50 characters'),
  vehicleModel: z
    .string()
    .min(1, 'Vehicle model is required')
    .max(50, 'Vehicle model must be less than 50 characters'),
  vehicleYear: z
    .number()
    .min(1990, 'Vehicle year must be 1990 or later')
    .max(new Date().getFullYear() + 1, 'Invalid vehicle year'),
  licensePlate: z
    .string()
    .min(2, 'License plate is required')
    .max(10, 'License plate must be less than 10 characters')
    .transform(val => val.toUpperCase()),
  tierSelection: z.enum(['basic', 'premium', 'ultimate'], {
    message: 'Please select a membership tier',
  }),
  agreedToTerms: z.literal(true, {
    message: 'You must agree to the terms and conditions',
  }),
})

export type MembershipSignupData = z.infer<typeof membershipSignupSchema>

/**
 * Appointment Booking Schema
 */
export const appointmentBookingSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().refine(
    value => {
      const cleaned = value.replace(/\D/g, '')
      return cleaned.length === 10
    },
    {
      message: 'Phone number must be 10 digits',
    }
  ),
  serviceType: z.enum(['interior-detail', 'full-detail'], {
    message: 'Please select a service type',
  }),
  preferredDate: z.string().refine(
    value => {
      const date = new Date(value)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return date >= today
    },
    {
      message: 'Date must be today or in the future',
    }
  ),
  preferredTime: z.enum(['morning', 'afternoon', 'evening'], {
    message: 'Please select a preferred time',
  }),
  location: z.enum(['downtown-scranton', 'wilkes-barre'], {
    message: 'Please select a location',
  }),
  notes: z.string().max(500, 'Notes must be less than 500 characters').optional(),
})

export type AppointmentBookingData = z.infer<typeof appointmentBookingSchema>

/**
 * Review Submission Schema
 */
export const reviewSubmissionSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  location: z
    .string()
    .min(2, 'Location is required')
    .max(100, 'Location must be less than 100 characters'),
  rating: z.number().min(1, 'Please select a rating').max(5, 'Rating must be between 1 and 5'),
  service: z
    .string()
    .min(2, 'Service type is required')
    .max(100, 'Service must be less than 100 characters')
    .optional(),
  review: z
    .string()
    .min(20, 'Review must be at least 20 characters')
    .max(1000, 'Review must be less than 1000 characters'),
  agreedToPublish: z.boolean().optional(),
})

export type ReviewSubmissionData = z.infer<typeof reviewSubmissionSchema>
