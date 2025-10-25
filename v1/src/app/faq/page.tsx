'use client'

import { useState, useMemo } from 'react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Badge from '@/components/ui/Badge'
import { getFAQs } from '@/lib/data'
import type { FAQ } from '@/types'

export const metadata = {
  title: 'FAQ | Superior Car Wash',
  description:
    'Find answers to frequently asked questions about Superior Car Wash services, memberships, locations, and more.',
}

// We'll load data on the server side, but need client component for interactivity
export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [expandedFAQs, setExpandedFAQs] = useState<Set<string>>(new Set())
  const [isLoading, setIsLoading] = useState(true)

  // Load FAQs on mount
  useState(() => {
    getFAQs().then(data => {
      setFaqs(data)
      setIsLoading(false)
    })
  })

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'membership', label: 'Membership' },
    { id: 'services', label: 'Services' },
    { id: 'locations', label: 'Locations' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'general', label: 'General' },
  ]

  const filteredFAQs = useMemo(() => {
    let filtered = faqs

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        faq =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query) ||
          faq.keywords?.some(keyword => keyword.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [faqs, selectedCategory, searchQuery])

  const toggleFAQ = (id: string) => {
    setExpandedFAQs(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-primary-200 border-t-primary-600"></div>
          <p className="text-gray-600">Loading FAQs...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-5xl font-bold">Frequently Asked Questions</h1>
            <p className="text-xl text-primary-50">
              Find answers to common questions about our services, memberships, and locations.
            </p>
          </div>
        </Container>
      </section>

      {/* Search and filter */}
      <section className="bg-white py-8">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Search */}
            <div className="mb-6">
              <Input
                type="search"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                fullWidth
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            {filteredFAQs.length === 0 ? (
              <Card variant="default" padding="lg" className="text-center">
                <p className="text-gray-600">
                  No FAQs found matching your search. Try different keywords or browse all
                  categories.
                </p>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map(faq => {
                  const isExpanded = expandedFAQs.has(faq.id)

                  return (
                    <Card key={faq.id} variant="default" padding="none">
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="flex w-full items-start justify-between p-6 text-left transition-colors hover:bg-gray-50"
                      >
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-2">
                            <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                            <Badge
                              variant={
                                faq.category === 'membership'
                                  ? 'primary'
                                  : faq.category === 'services'
                                    ? 'secondary'
                                    : faq.category === 'pricing'
                                      ? 'success'
                                      : 'info'
                              }
                              size="sm"
                            >
                              {faq.category}
                            </Badge>
                          </div>
                        </div>
                        <svg
                          className={`ml-4 h-6 w-6 flex-shrink-0 text-gray-400 transition-transform ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {isExpanded && (
                        <div className="border-t border-gray-200 bg-gray-50 p-6">
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      )}
                    </Card>
                  )
                })}
              </div>
            )}

            {/* Results count */}
            <div className="mt-8 text-center text-sm text-gray-600">
              Showing {filteredFAQs.length} of {faqs.length} questions
            </div>
          </div>
        </Container>
      </section>

      {/* Still have questions? */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Still Have Questions?</h2>
            <p className="mb-6 text-lg text-gray-600">
              Can&apos;t find what you&apos;re looking for? Our team is here to help.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Contact Us
              </a>
              <a
                href="tel:5705550100"
                className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-100"
              >
                Call (570) 555-0100
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
