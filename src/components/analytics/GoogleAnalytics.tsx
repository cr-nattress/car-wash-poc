import Script from 'next/script'

/**
 * Google Analytics Component
 *
 * Integrates Google Analytics 4 (GA4) for tracking page views,
 * events, and conversions.
 *
 * Setup:
 * 1. Create GA4 property at https://analytics.google.com
 * 2. Get Measurement ID (format: G-XXXXXXXXXX)
 * 3. Add NEXT_PUBLIC_GA_ID to .env.local
 * 4. Import this component in layout.tsx
 */

const GA_MEASUREMENT_ID = process.env['NEXT_PUBLIC_GA_ID']

export default function GoogleAnalytics() {
  // Don't load analytics in development or if ID not configured
  if (!GA_MEASUREMENT_ID || process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

/**
 * Track custom events
 *
 * Usage:
 * import { trackEvent } from '@/components/analytics/GoogleAnalytics'
 * trackEvent('button_click', { button_name: 'Book Now' })
 */
export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', eventName, params)
  }
}

/**
 * Track page views
 *
 * Usage in app router:
 * import { usePathname, useSearchParams } from 'next/navigation'
 * import { useEffect } from 'react'
 * import { trackPageView } from '@/components/analytics/GoogleAnalytics'
 *
 * useEffect(() => {
 *   trackPageView(pathname + searchParams.toString())
 * }, [pathname, searchParams])
 */
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}
