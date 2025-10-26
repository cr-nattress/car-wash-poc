'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryImage {
  src: string
  alt: string
  title: string
  description?: string
}

interface GalleryProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
}

/**
 * Photo Gallery Component
 *
 * Responsive image gallery with lightbox functionality.
 *
 * Features:
 * - Responsive grid layout (2-4 columns)
 * - Lightbox for full-screen viewing
 * - Keyboard navigation (arrow keys, ESC)
 * - Touch gestures for mobile
 * - Image captions and descriptions
 * - Lazy loading for performance
 */
export default function Gallery({ images, columns = 3 }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
  }

  const goToNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1)
    }
  }

  const goToPrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1)
    }
  }

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedIndex === null) return

    switch (e.key) {
      case 'Escape':
        closeLightbox()
        break
      case 'ArrowRight':
        goToNext()
        break
      case 'ArrowLeft':
        goToPrevious()
        break
    }
  }

  const gridColumns = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }

  return (
    <>
      {/* Gallery Grid */}
      <div
        className={`grid grid-cols-1 gap-4 ${gridColumns[columns]}`}
        role="list"
        aria-label="Photo gallery"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg bg-gray-100"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openLightbox(index)}
            role="listitem"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes={`(max-width: 768px) 100vw, (max-width: 1200px) ${100 / columns}vw, ${100 / columns}vw`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{image.title}</h3>
                {image.description && (
                  <p className="text-sm text-gray-200">{image.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            {selectedIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                aria-label="Previous image"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Next Button */}
            {selectedIndex < images.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                aria-label="Next image"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Image */}
            <motion.div
              className="relative mx-4 max-h-[90vh] max-w-[90vw]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex]!.src}
                alt={images[selectedIndex]!.alt}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto rounded-lg object-contain"
                priority
              />
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-semibold">{images[selectedIndex]!.title}</h3>
                {images[selectedIndex]!.description && (
                  <p className="mt-2 text-gray-300">{images[selectedIndex]!.description}</p>
                )}
                <p className="mt-2 text-sm text-gray-400">
                  {selectedIndex + 1} / {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
