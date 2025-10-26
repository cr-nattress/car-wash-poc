'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface VideoPlayerProps {
  videoId: string
  platform?: 'youtube' | 'vimeo' | 'local'
  thumbnail?: string
  title: string
  description?: string
  autoplay?: boolean
}

/**
 * Responsive Video Player Component
 *
 * Supports YouTube, Vimeo, and local video files with:
 * - Click-to-play thumbnail preview
 * - Responsive 16:9 aspect ratio
 * - Lazy loading for performance
 * - Accessibility features
 */
export default function VideoPlayer({
  videoId,
  platform = 'youtube',
  thumbnail,
  title,
  description,
  autoplay = false,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay)

  const getEmbedUrl = () => {
    switch (platform) {
      case 'youtube':
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
      case 'vimeo':
        return `https://player.vimeo.com/video/${videoId}?autoplay=1`
      case 'local':
        return videoId // videoId is the path for local videos
      default:
        return ''
    }
  }

  const getThumbnailUrl = () => {
    if (thumbnail) return thumbnail

    switch (platform) {
      case 'youtube':
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      case 'vimeo':
        // Vimeo thumbnails require API call - using placeholder
        return '/placeholder-video.jpg'
      default:
        return '/placeholder-video.jpg'
    }
  }

  return (
    <div className="w-full">
      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-900 shadow-xl">
        {!isPlaying ? (
          /* Thumbnail Preview */
          <motion.div
            className="group relative h-full w-full cursor-pointer"
            onClick={() => setIsPlaying(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${getThumbnailUrl()})`,
              }}
            >
              <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/20" />
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="flex h-20 w-20 items-center justify-center rounded-full bg-accent-500 shadow-2xl transition-all group-hover:scale-110 group-hover:bg-accent-600"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="ml-1 h-8 w-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              {description && (
                <p className="mt-1 text-sm text-gray-200">{description}</p>
              )}
            </div>
          </motion.div>
        ) : (
          /* Video Player */
          <div className="h-full w-full">
            {platform === 'local' ? (
              <video
                className="h-full w-full"
                controls
                autoPlay={autoplay}
                aria-label={title}
              >
                <source src={videoId} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe
                className="h-full w-full"
                src={getEmbedUrl()}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            )}
          </div>
        )}
      </div>

      {/* Video Info (when not playing) */}
      {!isPlaying && (
        <div className="mt-4">
          <button
            onClick={() => setIsPlaying(true)}
            className="text-sm text-gray-500 hover:text-primary-600"
          >
            Click to watch: {title}
          </button>
        </div>
      )}
    </div>
  )
}
