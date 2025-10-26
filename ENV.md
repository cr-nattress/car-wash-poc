# Environment Variables Guide

This document explains all environment variables used in the Superior Car Wash application and how to obtain the necessary API keys.

## Overview

The application uses environment variables for third-party API integrations. **The site works without these variables** (falls back to mock data), but real functionality requires API keys.

## Environment File Setup

1. Create `.env.local` in project root (never commit this file!)
2. Add variables using the template below
3. For production, set these in Netlify dashboard

### `.env.local` Template

```bash
# AI Chatbot (Choose ONE - OpenAI OR Anthropic)
OPENAI_API_KEY=sk-...
# OR
ANTHROPIC_API_KEY=sk-ant-...

# Weather Service (OpenWeather)
NEXT_PUBLIC_WEATHER_API_KEY=...

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=...

# Analytics (Google Analytics 4)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Error Tracking (Optional)
NEXT_PUBLIC_SENTRY_DSN=https://...

# Environment
NODE_ENV=development
```

## API Key Setup Instructions

### 1. OpenAI API (Chatbot - Option A)

**Purpose**: Powers AI chatbot for customer inquiries

**Setup Steps**:
1. Go to https://platform.openai.com/signup
2. Create an account or log in
3. Navigate to API keys: https://platform.openai.com/api-keys
4. Click "Create new secret key"
5. Copy the key (starts with `sk-`)
6. Add to `.env.local`:
   ```bash
   OPENAI_API_KEY=sk-your-key-here
   ```

**Cost**:
- Pay-as-you-go pricing
- GPT-4: ~$0.03 per 1K tokens (~750 words)
- GPT-3.5-turbo: ~$0.002 per 1K tokens
- Estimated: $5-20/month for typical chatbot usage
- Set billing limits in dashboard

**Rate Limits**:
- Free tier: 3 requests/minute
- Paid tier: 3,500 requests/minute
- Our implementation caches responses

### 2. Anthropic Claude API (Chatbot - Option B)

**Purpose**: Alternative to OpenAI for chatbot

**Setup Steps**:
1. Go to https://console.anthropic.com
2. Create account
3. Navigate to API Keys
4. Click "Create Key"
5. Copy the key (starts with `sk-ant-`)
6. Add to `.env.local`:
   ```bash
   ANTHROPIC_API_KEY=sk-ant-your-key-here
   ```

**Cost**:
- Claude Instant: $0.80 per 1M tokens (input), $2.40 (output)
- Claude 2: $8 per 1M tokens (input), $24 (output)
- Estimated: $5-15/month

**Rate Limits**:
- Standard: 40 requests/minute
- Higher limits available with usage

**Recommendation**: Use OpenAI GPT-3.5-turbo for cost-effectiveness or Claude for better conversation quality.

### 3. OpenWeather API (Weather Alerts)

**Purpose**: Powers weather-based service recommendations and alerts

**Setup Steps**:
1. Go to https://openweathermap.org/api
2. Sign up for free account
3. Navigate to API keys tab
4. Copy your default API key (or create new one)
5. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_WEATHER_API_KEY=your-key-here
   ```

**Cost**:
- Free tier: 60 calls/minute, 1M calls/month
- Professional tier: $40/month (higher limits)
- **Our usage**: ~100-200 calls/day (well within free tier)

**Rate Limits**:
- Free: 60 calls/minute
- Our implementation caches weather data for 30 minutes

**API Used**:
- Current Weather Data API
- Geocoding API (for location-based weather)

### 4. Google Maps JavaScript API (Location Maps)

**Purpose**: Displays interactive maps for car wash locations

**Setup Steps**:
1. Go to https://console.cloud.google.com
2. Create new project or select existing
3. Enable APIs:
   - Maps JavaScript API
   - Geocoding API
4. Create credentials:
   - APIs & Services → Credentials
   - Create Credentials → API Key
   - Copy the API key
5. **Restrict the key** (important for security):
   - HTTP referrers: `localhost:3000`, `*.netlify.app`, `yourdomain.com`
   - API restrictions: Maps JavaScript API, Geocoding API
6. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-key-here
   ```

**Cost**:
- Free tier: $200 credit/month
- Maps JavaScript API: $7 per 1,000 loads
- 28,571 free map loads/month with credit
- **Our usage**: Likely < 1,000 loads/month (free)

**Rate Limits**:
- Maps JavaScript API: 30,000 requests/minute
- More than sufficient for our needs

**Security**:
- Always restrict API keys by domain
- Monitor usage in Google Cloud Console
- Set up billing alerts

### 5. Google Analytics 4 (Website Analytics)

**Purpose**: Track website traffic, user behavior, conversions

**Setup Steps**:
1. Go to https://analytics.google.com
2. Create account or log in
3. Create new GA4 property:
   - Admin → Create Property
   - Property name: "Superior Car Wash"
   - Select time zone and currency
4. Create data stream:
   - Web stream
   - Website URL: your production URL
   - Stream name: "Production"
5. Copy Measurement ID (format: `G-XXXXXXXXXX`)
6. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

**Cost**: Free (no limits)

**Features Tracked**:
- Page views
- Events (button clicks, form submissions)
- User demographics
- Traffic sources
- Conversions

**Setup Time**: ~10 minutes
**Data delay**: Real-time data available immediately, full reports in 24-48 hours

### 6. Sentry Error Tracking (Optional)

**Purpose**: Monitor and track production errors

**Setup Steps**:
1. Go to https://sentry.io
2. Create account (free tier available)
3. Create new project:
   - Platform: Next.js
   - Project name: "car-wash-poc"
4. Copy DSN (Data Source Name)
5. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_SENTRY_DSN=https://...@sentry.io/...
   ```

**Cost**:
- Free tier: 5,000 events/month
- Paid: Starting at $26/month

**Recommendation**: Optional but highly recommended for production monitoring

## Environment Variable Checklist

### Development (.env.local)
```bash
# Minimum for development (all features work with mocks)
NODE_ENV=development

# Add these for real API functionality
OPENAI_API_KEY=...                      # OR ANTHROPIC_API_KEY
NEXT_PUBLIC_WEATHER_API_KEY=...
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=...
NEXT_PUBLIC_GA_ID=...
```

### Production (Netlify Dashboard)
Set these in Netlify → Site settings → Build & deploy → Environment:

```bash
NODE_ENV=production
OPENAI_API_KEY=...                      # OR ANTHROPIC_API_KEY
NEXT_PUBLIC_WEATHER_API_KEY=...
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=...
NEXT_PUBLIC_GA_ID=...
NEXT_PUBLIC_SENTRY_DSN=...              # Optional
```

## Security Best Practices

### Client-Side Variables (`NEXT_PUBLIC_*`)
- Exposed to browser (visible in source code)
- Only use for non-sensitive keys (Google Maps, Analytics)
- **Never** expose API keys that incur costs (OpenAI, Anthropic)
- Always restrict by domain/referrer

### Server-Side Variables (No prefix)
- Only accessible in API routes and server components
- Use for sensitive keys (OpenAI, Anthropic)
- Never exposed to browser

### Key Management
- [ ] Never commit `.env.local` to Git
- [ ] Add `.env.local` to `.gitignore` (already done)
- [ ] Rotate keys if accidentally exposed
- [ ] Set up billing alerts for paid APIs
- [ ] Restrict API keys by domain/IP
- [ ] Monitor API usage regularly

## Testing Without API Keys

The application gracefully handles missing API keys:

| Feature | Without API Key | With API Key |
|---------|-----------------|--------------|
| Chatbot | Mock responses | Real AI responses |
| Weather | Mock seasonal data | Live weather data |
| Maps | Static image fallback | Interactive map |
| Analytics | No tracking | Full analytics |

**For POC/demo**: Mock data is sufficient
**For production**: Real API keys recommended

## Troubleshooting

### API Key Not Working

1. **Check key format**:
   - OpenAI: starts with `sk-`
   - Anthropic: starts with `sk-ant-`
   - Google: alphanumeric string

2. **Verify key is active**:
   - Check API dashboard
   - Ensure billing is set up (for paid APIs)
   - Check rate limits not exceeded

3. **Check environment**:
   - Restart dev server after adding keys
   - Verify variable name spelling
   - Check for extra spaces/quotes

4. **Server vs Client**:
   - `NEXT_PUBLIC_*` available in browser
   - Server-only vars only in API routes

### Build Errors

```bash
Error: Missing required environment variable
```

**Solution**: Check that all `NEXT_PUBLIC_*` vars are set in Netlify

### Cost Concerns

**To minimize costs**:
1. Set billing alerts in each API dashboard
2. Implement rate limiting in API routes
3. Cache API responses (already implemented)
4. Use free tiers where possible
5. Monitor usage weekly

**Estimated monthly costs**:
- Zero API keys: $0
- All APIs (low traffic): $5-30
- All APIs (medium traffic): $30-100

## Support Resources

- **OpenAI**: https://help.openai.com
- **Anthropic**: https://docs.anthropic.com
- **OpenWeather**: https://openweathermap.org/faq
- **Google Cloud**: https://cloud.google.com/support
- **Google Analytics**: https://support.google.com/analytics
- **Sentry**: https://docs.sentry.io

## Quick Start Checklist

For fastest setup:

1. [ ] Create `.env.local` file
2. [ ] Add `NODE_ENV=development`
3. [ ] Test site (works with mocks)
4. [ ] Add OpenAI key (or Anthropic) for chatbot
5. [ ] Add Google Analytics for tracking
6. [ ] Add remaining APIs as needed
7. [ ] Set same variables in Netlify for production

**Recommended priority**:
1. Google Analytics (free, essential for tracking)
2. Google Maps (free tier, better UX)
3. OpenAI/Anthropic (paid, enhances chatbot)
4. OpenWeather (free, nice-to-have)
5. Sentry (optional, production monitoring)
