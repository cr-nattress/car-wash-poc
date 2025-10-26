'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

/**
 * Animated Counter Component
 *
 * Counts up from 0 to a target number when element enters viewport.
 *
 * Features:
 * - Smooth easing animation
 * - Triggers on scroll into view
 * - Customizable duration
 * - Support for prefixes/suffixes
 * - Decimal support
 */
export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)

      const startTime = Date.now()
      const startValue = 0

      const animate = () => {
        const currentTime = Date.now()
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function (easeOutCubic)
        const eased = 1 - Math.pow(1 - progress, 3)
        const currentCount = startValue + (end - startValue) * eased

        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration, hasAnimated])

  const formatNumber = (num: number) => {
    return num.toFixed(decimals)
  }

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}
