'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'

interface WeatherAlert {
  type: 'rain' | 'snow' | 'pollen' | 'road-salt' | 'sunny'
  title: string
  message: string
  cta: string
  ctaLink: string
  icon: string
}

/**
 * Weather Personalization Banner
 *
 * AI-powered component that shows personalized messages based on weather conditions.
 * Encourages car wash visits during optimal times and explains weather-related car care.
 *
 * Features:
 * - Mock weather data (replace with real API)
 * - Seasonal recommendations
 * - Weather-appropriate CTAs
 * - Dismissible banner
 */
export default function WeatherBanner() {
  const [alert, setAlert] = useState<WeatherAlert | null>(null)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if user dismissed banner today
    const dismissed = localStorage.getItem('weatherBannerDismissed')
    const dismissedDate = dismissed ? new Date(dismissed) : null
    const today = new Date().toDateString()

    if (dismissedDate && dismissedDate.toDateString() === today) {
      setIsDismissed(true)
      return
    }

    // Get weather-based alert
    // TODO: Replace with real weather API call
    const currentAlert = getMockWeatherAlert()
    setAlert(currentAlert)
  }, [])

  const handleDismiss = () => {
    setIsDismissed(true)
    localStorage.setItem('weatherBannerDismissed', new Date().toISOString())
  }

  if (isDismissed || !alert) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="relative overflow-hidden border-b border-primary-200 bg-gradient-to-r from-primary-50 to-primary-100"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{alert.icon}</div>
              <div>
                <p className="font-semibold text-primary-900">{alert.title}</p>
                <p className="text-sm text-primary-700">{alert.message}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link href={alert.ctaLink}>
                <Button variant="primary" size="sm">
                  {alert.cta}
                </Button>
              </Link>
              <button
                onClick={handleDismiss}
                className="rounded-full p-1 text-primary-600 transition-colors hover:bg-primary-200 hover:text-primary-900"
                aria-label="Dismiss"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

/**
 * Mock Weather Alert Generator
 * Replace this with real weather API integration
 */
function getMockWeatherAlert(): WeatherAlert {
  const alerts: WeatherAlert[] = [
    {
      type: 'rain',
      title: 'Rain Expected Today',
      message: 'Rain doesn\'t clean your car - it leaves dirt and minerals! Perfect time for a wash.',
      cta: 'Book Now',
      ctaLink: '/book',
      icon: '🌧️',
    },
    {
      type: 'snow',
      title: 'Winter Weather Alert',
      message: 'Road salt causes rust! Protect your car with our underbody wash and wax treatment.',
      cta: 'See Services',
      ctaLink: '/services',
      icon: '❄️',
    },
    {
      type: 'pollen',
      title: 'High Pollen Count',
      message: 'Pollen can damage your paint! Our wax treatment creates a protective barrier.',
      cta: 'View Plans',
      ctaLink: '/pricing',
      icon: '🌸',
    },
    {
      type: 'road-salt',
      title: 'Salt Season is Here',
      message: 'Combat winter road salt with our Ultimate Protect plan - includes rust inhibitor.',
      cta: 'Learn More',
      ctaLink: '/pricing#ultimate',
      icon: '🧂',
    },
    {
      type: 'sunny',
      title: 'Perfect Weather for a Wash!',
      message: 'Sunny and dry - ideal conditions! Your car will look amazing with our premium wash.',
      cta: 'Get Started',
      ctaLink: '/services',
      icon: '☀️',
    },
  ]

  // Simulate weather-based selection
  // In production, this would use real weather data
  const currentMonth = new Date().getMonth()
  const currentDay = new Date().getDay()

  // Winter months (Dec-Feb): Show salt warning
  if ([11, 0, 1].includes(currentMonth)) {
    return alerts[1]!
  }

  // Spring months (Mar-May): Show pollen warning
  if ([2, 3, 4].includes(currentMonth)) {
    return alerts[2]!
  }

  // Random selection weighted by day of week
  if (currentDay === 0 || currentDay === 6) {
    return alerts[4]!
  }

  // Weekdays: rain promo (most common)
  return alerts[0]!
}

/**
 * Real Weather API Integration Example
 *
 * Uncomment and configure to use real weather data:
 */
/*
async function getRealWeatherAlert(): Promise<WeatherAlert> {
  // Using OpenWeatherMap API
  const apiKey = process.env['NEXT_PUBLIC_OPENWEATHER_API_KEY']
  const lat = 41.4090 // Scranton, PA coordinates
  const lon = -75.6624

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
  )

  const data = await response.json()
  const weather = data.weather[0].main.toLowerCase()
  const temp = data.main.temp

  // Determine alert based on conditions
  if (weather.includes('rain')) {
    return {
      type: 'rain',
      title: 'Rain in Scranton Today',
      message: `Currently ${Math.round(temp)}°F with rain. Don't let dirty rainwater sit on your car!`,
      cta: 'Book Now',
      ctaLink: '/book',
      icon: '🌧️',
    }
  }

  if (weather.includes('snow') || temp < 32) {
    return {
      type: 'snow',
      title: 'Winter Weather Alert',
      message: `${Math.round(temp)}°F - Road salt season! Protect your car from corrosion.`,
      cta: 'See Services',
      ctaLink: '/services',
      icon: '❄️',
    }
  }

  // Check for pollen data (requires additional API like Ambee)
  // const pollenLevel = await getPollenData()

  // Default sunny day
  return {
    type: 'sunny',
    title: 'Beautiful Weather Today!',
    message: `${Math.round(temp)}°F and sunny - perfect for a car wash!`,
    cta: 'Get Started',
    ctaLink: '/services',
    icon: '☀️',
  }
}
*/
