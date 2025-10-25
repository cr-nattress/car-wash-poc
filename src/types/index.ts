/**
 * Core data model type definitions
 */

export interface Location {
  id: string
  name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  hours: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
  coordinates: {
    lat: number
    lng: number
  }
  image: string
  features: string[]
  content?: string
}

export interface PricingTier {
  id: string
  name: string
  price: number
  frequency: 'monthly' | 'single'
  features: string[]
  popular?: boolean
  savings?: string
  content?: string
  badge?: string
}

export interface Service {
  id: string
  name: string
  description: string
  duration: string
  price?: number
  features: string[]
  image: string
  content?: string
  category?: 'basic' | 'premium' | 'ultimate'
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  date: string
  service?: string
  avatar?: string
  verified?: boolean
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: 'membership' | 'services' | 'locations' | 'general' | 'pricing'
  keywords?: string[]
  order?: number
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  website?: string
}

export interface NewsletterFormData {
  email: string
  firstName?: string
}
