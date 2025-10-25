import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import type { Location, PricingTier, Service, Testimonial, FAQ } from '@/types'

const dataDirectory = path.join(process.cwd(), 'src', 'data')

/**
 * Parse markdown content to HTML
 */
async function parseMarkdown(content: string): Promise<string> {
  const result = await remark().use(html).process(content)
  return result.toString()
}

/**
 * Read and parse a markdown file with frontmatter
 */
async function parseMarkdownFile<T>(filePath: string): Promise<Array<T & { content: string }>> {
  const fileContents = fs.readFileSync(filePath, 'utf8')

  // Split by --- to handle multiple entries in one file
  const entries = fileContents.split(/\n---\n/).filter(entry => entry.trim())

  const parsedEntries = await Promise.all(
    entries.map(async entry => {
      const { data, content } = matter(entry.trim())
      const htmlContent = await parseMarkdown(content)

      return {
        ...data,
        content: htmlContent,
      } as T & { content: string }
    })
  )

  return parsedEntries
}

/**
 * Get all locations
 */
export async function getLocations(): Promise<Location[]> {
  const filePath = path.join(dataDirectory, 'locations.md')
  return parseMarkdownFile<Location>(filePath)
}

/**
 * Get a single location by ID
 */
export async function getLocationById(id: string): Promise<Location | null> {
  const locations = await getLocations()
  return locations.find(location => location.id === id) || null
}

/**
 * Get all pricing tiers
 */
export async function getPricingTiers(): Promise<PricingTier[]> {
  const filePath = path.join(dataDirectory, 'pricing.md')
  return parseMarkdownFile<PricingTier>(filePath)
}

/**
 * Get a single pricing tier by ID
 */
export async function getPricingTierById(id: string): Promise<PricingTier | null> {
  const tiers = await getPricingTiers()
  return tiers.find(tier => tier.id === id) || null
}

/**
 * Get the popular pricing tier
 */
export async function getPopularPricingTier(): Promise<PricingTier | null> {
  const tiers = await getPricingTiers()
  return tiers.find(tier => tier.popular === true) || null
}

/**
 * Get all services
 */
export async function getServices(): Promise<Service[]> {
  const filePath = path.join(dataDirectory, 'services.md')
  return parseMarkdownFile<Service>(filePath)
}

/**
 * Get a single service by ID
 */
export async function getServiceById(id: string): Promise<Service | null> {
  const services = await getServices()
  return services.find(service => service.id === id) || null
}

/**
 * Get services by category
 */
export async function getServicesByCategory(
  category: 'basic' | 'premium' | 'ultimate'
): Promise<Service[]> {
  const services = await getServices()
  return services.filter(service => service.category === category)
}

/**
 * Get all testimonials
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  const filePath = path.join(dataDirectory, 'testimonials.md')
  const testimonials = await parseMarkdownFile<Testimonial>(filePath)

  // Sort by date (most recent first)
  return testimonials.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

/**
 * Get verified testimonials only
 */
export async function getVerifiedTestimonials(): Promise<Testimonial[]> {
  const testimonials = await getTestimonials()
  return testimonials.filter(testimonial => testimonial.verified === true)
}

/**
 * Get testimonials by minimum rating
 */
export async function getTestimonialsByRating(minRating: number): Promise<Testimonial[]> {
  const testimonials = await getTestimonials()
  return testimonials.filter(testimonial => testimonial.rating >= minRating)
}

/**
 * Get all FAQs
 */
export async function getFAQs(): Promise<FAQ[]> {
  const filePath = path.join(dataDirectory, 'faqs.md')
  const faqs = await parseMarkdownFile<FAQ>(filePath)

  // Sort by order if specified, otherwise by ID
  return faqs.sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order
    }
    return a.id.localeCompare(b.id)
  })
}

/**
 * Get FAQs by category
 */
export async function getFAQsByCategory(
  category: 'membership' | 'services' | 'locations' | 'general' | 'pricing'
): Promise<FAQ[]> {
  const faqs = await getFAQs()
  return faqs.filter(faq => faq.category === category)
}

/**
 * Search FAQs by keyword
 */
export async function searchFAQs(query: string): Promise<FAQ[]> {
  const faqs = await getFAQs()
  const lowercaseQuery = query.toLowerCase()

  return faqs.filter(faq => {
    // Search in question
    if (faq.question.toLowerCase().includes(lowercaseQuery)) {
      return true
    }

    // Search in answer
    if (faq.answer.toLowerCase().includes(lowercaseQuery)) {
      return true
    }

    // Search in keywords
    if (faq.keywords) {
      return faq.keywords.some(keyword => keyword.toLowerCase().includes(lowercaseQuery))
    }

    return false
  })
}
