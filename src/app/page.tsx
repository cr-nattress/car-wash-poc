import Hero from '@/components/home/Hero'
import ServicesShowcase from '@/components/home/ServicesShowcase'
import PricingPreview from '@/components/home/PricingPreview'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import WeatherBanner from '@/components/ai/WeatherBanner'
import { getServices, getPricingTiers, getTestimonialsByRating } from '@/lib/data'

export default async function HomePage() {
  // Load all data server-side
  const services = await getServices()
  const pricingTiers = await getPricingTiers()
  const testimonials = await getTestimonialsByRating(5)

  // Filter to show only the three main wash tiers
  const washTiers = services.filter(s =>
    ['express-wash', 'deluxe-wash', 'ultimate-wash'].includes(s.id)
  )

  return (
    <>
      <WeatherBanner />
      <Hero />
      <ServicesShowcase services={washTiers} />
      <PricingPreview tiers={pricingTiers} />
      <TestimonialsSection testimonials={testimonials.slice(0, 6)} />
    </>
  )
}
