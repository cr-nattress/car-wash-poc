'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

interface RecommendationAnswer {
  question: string
  answer: string
}

interface ServiceRecommendation {
  service: string
  tier: string
  reason: string
  price: string
  link: string
}

/**
 * AI-Powered Service Recommender
 *
 * Interactive questionnaire that recommends the best service/membership
 * based on customer needs using AI logic.
 *
 * Features:
 * - Step-by-step questions
 * - Personalized recommendations
 * - Clear explanations
 * - Direct booking links
 */
export default function ServiceRecommender() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<RecommendationAnswer[]>([])
  const [recommendation, setRecommendation] = useState<ServiceRecommendation | null>(null)

  const questions = [
    {
      id: 'frequency',
      question: 'How often do you wash your car?',
      options: [
        { value: 'weekly', label: 'Weekly or more', icon: '🚗' },
        { value: 'monthly', label: '2-4 times per month', icon: '📅' },
        { value: 'occasionally', label: 'Once a month or less', icon: '🌟' },
      ],
    },
    {
      id: 'priority',
      question: 'What matters most to you?',
      options: [
        { value: 'speed', label: 'Speed & convenience', icon: '⚡' },
        { value: 'protection', label: 'Paint protection', icon: '🛡️' },
        { value: 'value', label: 'Best value for money', icon: '💰' },
        { value: 'detail', label: 'Deep cleaning', icon: '✨' },
      ],
    },
    {
      id: 'budget',
      question: 'What\'s your monthly budget?',
      options: [
        { value: 'under-25', label: 'Under $25', icon: '💵' },
        { value: '25-40', label: '$25-40', icon: '💳' },
        { value: 'over-40', label: 'Over $40', icon: '💎' },
        { value: 'per-wash', label: 'Pay per wash', icon: '🎫' },
      ],
    },
  ]

  const handleAnswer = (_questionId: string, option: { value: string; label: string }) => {
    const newAnswers = [
      ...answers,
      {
        question: questions[step]?.question || '',
        answer: option.label,
      },
    ]
    setAnswers(newAnswers)

    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      // Generate recommendation
      const rec = generateRecommendation(newAnswers)
      setRecommendation(rec)
    }
  }

  const handleReset = () => {
    setStep(0)
    setAnswers([])
    setRecommendation(null)
  }

  if (recommendation) {
    return (
      <Card variant="elevated" padding="lg">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h3 className="mb-2 text-2xl font-bold text-gray-900">Perfect Match Found!</h3>
          <p className="mb-6 text-gray-600">Based on your preferences, we recommend:</p>

          <div className="mb-6 rounded-lg bg-primary-50 p-6">
            <h4 className="mb-2 text-3xl font-bold text-primary-600">{recommendation.service}</h4>
            <p className="mb-4 text-xl font-semibold text-gray-700">{recommendation.price}</p>
            <p className="text-gray-600">{recommendation.reason}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href={recommendation.link}>
              <Button variant="primary" size="lg">
                Learn More
              </Button>
            </Link>
            <Link href="/book">
              <Button variant="outline" size="lg">
                Book Now
              </Button>
            </Link>
          </div>

          <button
            onClick={handleReset}
            className="mt-4 text-sm text-gray-500 hover:text-gray-700"
          >
            Start Over
          </button>
        </div>
      </Card>
    )
  }

  const currentQuestion = questions[step]

  return (
    <Card variant="elevated" padding="lg">
      <div className="mb-6">
        <div className="mb-4 flex justify-between text-sm text-gray-500">
          <span>Question {step + 1} of {questions.length}</span>
          <span>{Math.round(((step + 1) / questions.length) * 100)}% Complete</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-gray-200">
          <motion.div
            className="h-full bg-primary-500"
            initial={{ width: 0 }}
            animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
        {currentQuestion?.question}
      </h3>

      <div className="space-y-3">
        {currentQuestion?.options.map(option => (
          <button
            key={option.value}
            onClick={() => handleAnswer(currentQuestion.id, option)}
            className="w-full rounded-lg border-2 border-gray-200 p-4 text-left transition-all hover:border-primary-500 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{option.icon}</span>
              <span className="font-medium text-gray-900">{option.label}</span>
            </div>
          </button>
        ))}
      </div>

      {step > 0 && (
        <button
          onClick={() => setStep(step - 1)}
          className="mt-6 text-sm text-gray-500 hover:text-gray-700"
        >
          ← Back
        </button>
      )}
    </Card>
  )
}

/**
 * AI Logic for Service Recommendation
 *
 * Analyzes user answers and recommends the best service/membership
 */
function generateRecommendation(answers: RecommendationAnswer[]): ServiceRecommendation {
  const answerValues = answers.map(a => a.answer.toLowerCase())

  // Extract key preferences
  const frequency = answerValues[0]
  const priority = answerValues[1]
  const budget = answerValues[2]

  // Frequent washers (weekly or 2-4 times/month) -> Membership
  if (frequency?.includes('weekly') || frequency?.includes('2-4')) {
    if (budget?.includes('under $25')) {
      return {
        service: 'Basic Shine Membership',
        tier: 'basic',
        reason: 'Perfect for frequent washers on a budget. You\'ll save money compared to paying per wash, and your car stays clean all month!',
        price: '$24/month - Unlimited Washes',
        link: '/pricing#basic',
      }
    }

    if (budget?.includes('over $40') || priority?.includes('protection')) {
      return {
        service: 'Ultimate Protect Membership',
        tier: 'ultimate',
        reason: 'Maximum protection for your investment. Includes ceramic coating, quarterly detailing, and rust inhibitor - everything to keep your car in showroom condition.',
        price: '$42/month - Unlimited Premium Washes',
        link: '/pricing#ultimate',
      }
    }

    // Default for frequent washers
    return {
      service: 'Premium Gloss Membership',
      tier: 'premium',
      reason: 'Our most popular choice! Perfect balance of protection and value. Includes wax, Rain-X, and tire shine with unlimited washes.',
      price: '$34/month - Unlimited Washes',
      link: '/pricing#premium',
    }
  }

  // Occasional washers -> Pay per wash
  if (frequency?.includes('once a month') || budget?.includes('pay per wash')) {
    if (priority?.includes('detail') || priority?.includes('deep')) {
      return {
        service: 'Full Detail Service',
        tier: 'detail',
        reason: 'Since you wash occasionally, a comprehensive detail gives you deep cleaning inside and out. Your car will look brand new!',
        price: '$99+ per service',
        link: '/services/full-detail',
      }
    }

    if (priority?.includes('speed')) {
      return {
        service: 'Express Wash',
        tier: 'express',
        reason: 'Quick, convenient, and effective. In and out in 5 minutes with a spotless car. Perfect for occasional touch-ups!',
        price: '$12 per wash',
        link: '/services/express-wash',
      }
    }

    // Default for occasional washers
    return {
      service: 'Deluxe Wash',
      tier: 'deluxe',
      reason: 'Best value for occasional washes. Includes premium treatments like wax and tire shine that make your car shine like new.',
      price: '$22 per wash',
      link: '/services/deluxe-wash',
    }
  }

  // Fallback to Premium Membership
  return {
    service: 'Premium Gloss Membership',
    tier: 'premium',
    reason: 'Our most popular plan! Great value with premium features. You can wash as often as you like and save money compared to paying per wash.',
    price: '$34/month - Unlimited Washes',
    link: '/pricing#premium',
  }
}
