import FAQList from '@/components/faq/FAQList'
import { getFAQs } from '@/lib/data'

export const metadata = {
  title: 'FAQ | Superior Car Wash',
  description:
    'Find answers to frequently asked questions about Superior Car Wash services, memberships, locations, and more.',
}

export default async function FAQPage() {
  const faqs = await getFAQs()

  return <FAQList faqs={faqs} />
}
