import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://superiorcarwash.netlify.app'

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/pricing',
    '/locations',
    '/membership',
    '/gallery',
    '/recommend',
    '/faq',
    '/contact',
    '/book',
    '/privacy',
    '/terms',
    '/accessibility',
  ]

  // Service detail pages
  const services = [
    'express-wash',
    'deluxe-wash',
    'ultimate-wash',
    'full-detail',
    'interior-detail',
    'pet-wash',
    'self-service',
  ]

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes]
}
