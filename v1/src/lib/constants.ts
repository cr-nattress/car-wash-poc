/**
 * Application Constants
 */

export const SITE_NAME = 'Shine On Car Wash'
export const SITE_DESCRIPTION = 'Premium car wash service with AI-powered features'
export const SITE_URL = process.env['NEXT_PUBLIC_SITE_URL'] || 'https://shineoncarwash.com'

export const MAIN_PHONE = '(570) 555-0100'
export const SUPPORT_EMAIL = 'support@shineoncarwash.com'

export const MIN_MEMBERSHIP_PRICE = 24
export const MAX_MEMBERSHIP_PRICE = 42
export const POPULAR_TIER_ID = 'premium'

export const SOCIAL_MEDIA = {
  facebook: 'https://facebook.com/shineoncarwash',
  instagram: 'https://instagram.com/shineoncarwash',
} as const
