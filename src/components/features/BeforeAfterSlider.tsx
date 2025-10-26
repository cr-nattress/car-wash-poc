'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  altText: string
}

/**
 * Before/After Image Slider
 *
 * Interactive slider to compare before and after car wash results.
 *
 * Features:
 * - Draggable slider
 * - Click to set position
 * - Touch support for mobile
 * - Responsive design
 * - Accessibility labels
 */
export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  altText,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100

    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX)
    }
  }

  const handleStart = () => {
    setIsDragging(true)
  }

  const handleEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleEnd)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleEnd)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleEnd)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleEnd)
      }
    }
  }, [isDragging])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX)
  }

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative aspect-video cursor-ew-resize select-none overflow-hidden rounded-lg shadow-xl"
        onClick={handleClick}
        role="img"
        aria-label={altText}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={`${altText} - After`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
          {/* After Label */}
          <div className="absolute right-4 top-4 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
            {afterLabel}
          </div>
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <Image
            src={beforeImage}
            alt={`${altText} - Before`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
          {/* Before Label */}
          <div className="absolute left-4 top-4 rounded-full bg-gray-700 px-4 py-2 text-sm font-semibold text-white shadow-lg">
            {beforeLabel}
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute inset-y-0 w-1 bg-white shadow-2xl"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Draggable Button */}
          <motion.div
            className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center rounded-full bg-white shadow-2xl active:cursor-grabbing"
            onMouseDown={handleStart}
            onTouchStart={handleStart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Left Arrow */}
            <svg className="h-4 w-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {/* Right Arrow */}
            <svg className="h-4 w-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Instructions */}
      <p className="mt-4 text-center text-sm text-gray-600">
        <span className="hidden sm:inline">Drag the slider or click anywhere to compare</span>
        <span className="sm:hidden">Slide or tap to compare</span>
      </p>
    </div>
  )
}
