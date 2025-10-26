# Deployment Guide

This guide covers deploying the Superior Car Wash website to Netlify.

## Prerequisites

- GitHub account with repository access
- Netlify account (free tier works)
- Node.js 18+ installed locally for testing

## Environment Variables

The following environment variables need to be configured in Netlify:

### Required (if using real APIs)
```bash
# AI Chatbot (OpenAI or Anthropic Claude)
OPENAI_API_KEY=sk-...                    # OpenAI API key
# OR
ANTHROPIC_API_KEY=sk-ant-...             # Anthropic Claude API key

# Weather Service (OpenWeather)
NEXT_PUBLIC_WEATHER_API_KEY=...          # OpenWeather API key

# Google Maps (for locations)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=...      # Google Maps JavaScript API key

# Analytics (Google Analytics 4)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX           # GA4 Measurement ID
```

### Optional
```bash
# Sentry Error Tracking
NEXT_PUBLIC_SENTRY_DSN=https://...       # Sentry DSN for error tracking

# Environment
NODE_ENV=production                       # Set to production
```

**Note**: The site works without these API keys (uses mock data). See ENV.md for detailed instructions on obtaining API keys.

## Deployment Steps

### Initial Setup (First Time Only)

1. **Push code to GitHub**
   ```bash
   git push origin main
   ```

2. **Log in to Netlify**
   - Go to https://netlify.com
   - Sign up or log in with GitHub

3. **Create New Site**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" as your Git provider
   - Authorize Netlify to access your repositories
   - Select the `car-wash-poc` repository

4. **Configure Build Settings**
   ```
   Build command:    npm run build
   Publish directory: .next
   ```

5. **Set Environment Variables**
   - Go to Site settings → Build & deploy → Environment
   - Click "Add environment variable"
   - Add each variable from the list above (if using real APIs)

6. **Deploy Site**
   - Click "Deploy site"
   - Wait for build to complete (2-3 minutes)

### Subsequent Deployments

Netlify automatically deploys when you push to the `main` branch:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The site will auto-build and deploy in 2-3 minutes.

## Custom Domain Setup (Optional)

If you have a custom domain (e.g., `superiorcarwash.com`):

1. **Add Domain in Netlify**
   - Site settings → Domain management → Add custom domain
   - Enter your domain name

2. **Configure DNS**
   - Option A: Use Netlify DNS (recommended)
     - Transfer domain to Netlify DNS
     - Netlify automatically configures everything

   - Option B: Keep existing DNS provider
     - Add CNAME record: `www` → `your-site.netlify.app`
     - Add A record: `@` → Netlify's IP (provided in dashboard)

3. **Enable HTTPS**
   - Site settings → Domain management → HTTPS
   - Enable "Force HTTPS" (redirects HTTP → HTTPS)
   - SSL certificate provisions automatically (Let's Encrypt)

4. **Update URLs in Code**
   - Update `baseUrl` in `src/app/sitemap.ts`
   - Update `baseUrl` in `src/components/seo/StructuredData.tsx`
   - Update `siteUrl` in `src/app/layout.tsx` metadata

## Post-Deployment Checklist

After deployment completes:

- [ ] Visit production URL and verify homepage loads
- [ ] Test all navigation links
- [ ] Submit a test form
- [ ] Test chatbot (if API configured)
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit on production
- [ ] Verify sitemap.xml accessible: `/sitemap.xml`
- [ ] Verify robots.txt accessible: `/robots.txt`
- [ ] Check Google Search Console (if domain added)
- [ ] Monitor Netlify function logs for errors

## Build Troubleshooting

### Build Fails

1. **Check build logs in Netlify**
   - Deploys → Click failed deploy → View logs
   - Look for error messages

2. **Common Issues**:
   - TypeScript errors → Run `npm run type-check` locally
   - ESLint errors → Run `npm run lint` locally
   - Missing dependencies → Run `npm install` and commit `package-lock.json`
   - Environment variables → Check they're set correctly

3. **Test locally**:
   ```bash
   npm run build    # Should complete without errors
   npm start        # Test production build locally
   ```

### Deployment Succeeds But Site Broken

1. **Check browser console for errors**
   - Right-click → Inspect → Console tab
   - Look for 404 errors or JavaScript errors

2. **Verify environment variables**
   - Missing env vars cause features to fail
   - Check Netlify dashboard → Site settings → Environment

3. **Clear cache and hard refresh**
   - Ctrl+Shift+R (Windows/Linux)
   - Cmd+Shift+R (Mac)

### Functions Not Working

If AI chatbot or other serverless functions fail:

1. **Check function logs**
   - Netlify dashboard → Functions → Click function → Logs

2. **Verify API keys**
   - Environment variables set correctly
   - API keys are valid and have credits

3. **Check rate limits**
   - Some APIs have rate limits
   - Implement caching if needed

## Performance Optimization

### Pre-Launch Checklist

- [ ] Run `npm run build` locally first
- [ ] Check bundle size (main bundle should be < 200KB)
- [ ] Optimize images (use WebP format, lazy loading)
- [ ] Enable Netlify's asset optimization
  - Site settings → Build & deploy → Post processing
  - Enable "Bundle CSS", "Minify JS", "Compress images"

### Monitoring

After launch, monitor:

1. **Netlify Analytics** (if enabled)
   - Traffic patterns
   - Most visited pages
   - 404 errors

2. **Google Analytics** (if configured)
   - User behavior
   - Conversions
   - Traffic sources

3. **Lighthouse CI** (optional)
   - Automated performance monitoring
   - Can be integrated with GitHub Actions

## Rollback Procedure

If deployment causes issues:

1. **Instant Rollback**
   - Netlify dashboard → Deploys
   - Find previous working deploy
   - Click "..." menu → "Publish deploy"
   - Confirms rollback

2. **Git Rollback**
   ```bash
   git revert HEAD              # Revert last commit
   git push origin main         # Triggers new deploy
   ```

## Continuous Deployment

The site is configured for continuous deployment:

```
main branch → Auto-deploy to production
```

**Branch Previews** (optional):
- Enable Deploy Previews in Netlify settings
- Every PR gets a preview URL
- Test changes before merging to main

## Support & Resources

- **Netlify Docs**: https://docs.netlify.com
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Status Page**: https://www.netlifystatus.com

## Security Notes

**Never commit these to Git:**
- `.env.local` (contains API keys)
- API keys or secrets
- Database credentials

**Always use environment variables in Netlify for:**
- API keys
- Third-party credentials
- Any sensitive configuration

## Cost Estimate

**Netlify Free Tier Includes:**
- 100GB bandwidth/month
- 300 build minutes/month
- Automatic HTTPS
- Serverless functions (125k requests/month)
- Forms (100 submissions/month)

**Estimated monthly costs for this site:**
- Netlify: $0 (free tier sufficient for POC)
- OpenAI API: $5-20 (depends on chatbot usage)
- OpenWeather API: $0 (free tier: 60 calls/minute)
- Google Maps API: $0-10 (free tier: 28k+ views/month)

**Total: $5-30/month** depending on traffic and API usage.
