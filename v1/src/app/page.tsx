import Hero from '@/components/home/Hero'
import ServicesShowcase from '@/components/home/ServicesShowcase'
import PricingPreview from '@/components/home/PricingPreview'
import TestimonialsSection from '@/components/home/TestimonialsSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesShowcase />
      <PricingPreview />
      <TestimonialsSection />
    </>
  )
}
