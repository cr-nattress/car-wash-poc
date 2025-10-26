# Maintenance Guide

Common maintenance tasks for the Superior Car Wash website.

## Table of Contents

1. [Content Updates](#content-updates)
2. [Adding New Services](#adding-new-services)
3. [Updating Pricing](#updating-pricing)
4. [Managing Locations](#managing-locations)
5. [Updating Testimonials](#updating-testimonials)
6. [FAQ Management](#faq-management)
7. [Dependency Updates](#dependency-updates)
8. [Performance Optimization](#performance-optimization)
9. [Monitoring & Logs](#monitoring--logs)

---

## Content Updates

### Update Text Content

All dynamic content is in Markdown files under `src/data/`:

```
src/data/
├── services.md       # Service offerings
├── pricing.md        # Membership tiers
├── locations.md      # Business locations
├── testimonials.md   # Customer reviews
└── faqs.md          # Frequently asked questions
```

**Steps**:
1. Edit the relevant `.md` file
2. Markdown content is automatically converted to HTML
3. Changes appear after rebuilding/redeploying

### Update Images

1. Add images to `public/` directory
2. Reference in components: `/image-name.webp`
3. **Use WebP format** for better performance
4. Recommended sizes:
   - Hero images: 1920x1080px
   - Service images: 800x600px
   - Gallery images: 1200x800px
   - Thumbnails: 400x300px

---

## Adding New Services

### Step 1: Add to services.md

Edit `src/data/services.md` and add:

```markdown
---

---

---
id: new-service-id
name: New Service Name
price: 29
duration: 20 minutes
category: wash
featured: false
features:
  - Feature one
  - Feature two
  - Feature three
---

# New Service Name

Detailed description of the service goes here in Markdown.

**What's included:**
- Item 1
- Item 2
- Item 3

Perfect for customers who need...
```

### Step 2: Add route (optional)

If you want a dedicated page (`/services/new-service-id`):

The dynamic route `/services/[id]` already handles this automatically!

Just ensure the `id` in frontmatter matches the URL you want.

### Step 3: Add image (optional)

1. Add service image to `public/services/new-service.webp`
2. Update service frontmatter:
   ```yaml
   image: /services/new-service.webp
   ```

### Step 4: Deploy

```bash
git add src/data/services.md public/services/
git commit -m "feat: Add new service"
git push origin main
```

---

## Updating Pricing

### Edit pricing.md

Edit `src/data/pricing.md`:

```markdown
---
id: basic-shine
name: Basic Shine
price: 24
billingPeriod: monthly
popular: false
features:
  - Unlimited basic washes
  - Standard dry
  - Loyalty rewards app
savings: Save $120/year vs. single washes
---

Pricing content (optional)...
```

**Important**: The `id` must match existing IDs if replacing, or be unique if adding new tier.

### Update pricing in multiple locations

Pricing appears in:
- `/pricing` page (automatically from pricing.md)
- `/membership` page (manually coded)
- `StructuredData.tsx` (for SEO schema)

**Update StructuredData**:

Edit `src/components/seo/StructuredData.tsx` around line 106-136:

```typescript
{
  '@type': 'Offer',
  itemOffered: {
    '@type': 'Service',
    name: 'New Service',
    description: 'Description',
    price: '29.00',
    priceCurrency: 'USD',
  },
},
```

---

## Managing Locations

### Add New Location

Edit `src/data/locations.md`:

```markdown
---

---

---
id: new-location
name: New Location Name
address: 123 Main Street
city: Scranton
state: PA
zip: 18503
phone: (570) 555-0123
coordinates:
  lat: 41.409
  lng: -75.6624
hours:
  monday: 7:00 AM - 8:00 PM
  tuesday: 7:00 AM - 8:00 PM
  wednesday: 7:00 AM - 8:00 PM
  thursday: 7:00 AM - 8:00 PM
  friday: 7:00 AM - 8:00 PM
  saturday: 7:00 AM - 8:00 PM
  sunday: 8:00 AM - 6:00 PM
---

Additional location information...
```

### Update StructuredData for SEO

Edit `src/components/seo/StructuredData.tsx` to add the new location to the `address` and `geo` arrays.

### Update Sitemap

Locations are generated dynamically, but verify in `src/app/sitemap.ts` if needed.

---

## Updating Testimonials

Edit `src/data/testimonials.md`:

```markdown
---

---

---
name: John Smith
role: Regular Customer
rating: 5
date: 2024-01-15
verified: true
---

"This is the best car wash I've ever used! The staff is friendly and my car always looks amazing."
```

**Fields**:
- `name`: Customer name
- `role`: Customer type or vehicle
- `rating`: 1-5 stars
- `date`: Review date (YYYY-MM-DD)
- `verified`: true/false

Testimonials display on homepage and `/about` page.

---

## FAQ Management

### Add New FAQ

Edit `src/data/faqs.md`:

```markdown
---

---

---
question: What are your holiday hours?
category: hours
order: 10
---

We're open regular hours on most holidays, except Christmas Day and Thanksgiving. Check our website or call ahead during major holidays.
```

**Categories**:
- `general`: General questions
- `membership`: Membership-related
- `services`: Service-specific
- `hours`: Hours and availability
- `technical`: Technical/website questions

**Order**: Lower numbers appear first

### Update FAQ Schema

FAQs are automatically added to SEO schema in `StructuredData.tsx`, but you can manually prioritize important ones.

---

## Dependency Updates

### Check for Updates

```bash
npm outdated
```

### Update Dependencies

**Patch updates (safe)**:
```bash
npm update
```

**Major updates (test thoroughly)**:
```bash
npm install package-name@latest
```

### Update Next.js

```bash
npm install next@latest react@latest react-dom@latest
```

**Important**: Test thoroughly after Next.js updates:
```bash
npm run build
npm run type-check
npm run lint
```

### Security Updates

```bash
npm audit
npm audit fix
```

**Monthly maintenance**:
1. Run `npm outdated`
2. Update patch versions
3. Test locally
4. Deploy to production

---

## Performance Optimization

### Analyze Bundle Size

```bash
npm run build
```

Look for the bundle size report. Main bundle should be < 200KB.

### Optimize Images

1. Use WebP format
2. Use Next.js Image component:
   ```tsx
   import Image from 'next/image'

   <Image
     src="/image.webp"
     alt="Description"
     width={800}
     height={600}
     loading="lazy"
   />
   ```

3. Tools:
   - https://squoosh.app (WebP conversion)
   - https://tinypng.com (compression)

### Run Lighthouse

```bash
npm run build
npm start
```

Then run Lighthouse in Chrome DevTools (Ctrl+Shift+I → Lighthouse tab).

**Target scores**:
- Performance: > 90 (mobile), > 95 (desktop)
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95

---

## Monitoring & Logs

### Netlify Build Logs

1. Go to Netlify dashboard
2. Deploys → Click deploy → View logs
3. Check for errors or warnings

### Function Logs (API Routes)

1. Netlify dashboard → Functions
2. Click function name
3. View real-time logs

### Google Analytics

1. Go to https://analytics.google.com
2. Select property
3. Monitor:
   - Realtime users
   - Page views
   - Events (form submissions, button clicks)
   - User demographics

### Performance Monitoring

**Core Web Vitals**:
- Google Search Console → Experience → Core Web Vitals
- Monitor LCP, FID, CLS

**Lighthouse CI** (optional):
- Automated Lighthouse runs on every deploy
- Set up via GitHub Actions

### Error Tracking (if Sentry enabled)

1. Go to https://sentry.io
2. View errors and stack traces
3. Set up alerts for critical errors

---

## Common Tasks Cheat Sheet

### Update Service Price
```bash
# Edit src/data/services.md
# Change price field
git commit -m "update: Adjust Express Wash price"
git push
```

### Add Testimonial
```bash
# Edit src/data/testimonials.md
# Add new entry
git commit -m "content: Add new testimonial from Jane Doe"
git push
```

### Update Business Hours
```bash
# Edit src/data/locations.md
# Update hours field
# Also update StructuredData.tsx for SEO
git commit -m "update: Holiday hours"
git push
```

### Change Homepage Hero Text
```bash
# Edit src/app/page.tsx
# Find <Hero> component
# Update title and description props
git commit -m "content: Update hero messaging"
git push
```

### Add New FAQ
```bash
# Edit src/data/faqs.md
# Add new question/answer
git commit -m "content: Add FAQ about winter services"
git push
```

---

## Backup & Recovery

### Database Backup

This site has **no database** - all content is in Git. Your backups are:
1. GitHub repository (primary)
2. Local clone (secondary)
3. Netlify deployments (point-in-time snapshots)

### Rollback Content

```bash
# View file history
git log -- src/data/services.md

# Restore specific file from commit
git checkout COMMIT_HASH -- src/data/services.md

# Or revert entire commit
git revert COMMIT_HASH
```

### Download All Content

```bash
# Clone entire repository
git clone https://github.com/username/car-wash-poc.git

# Just download data files
git clone --depth 1 --filter=blob:none --sparse \
  https://github.com/username/car-wash-poc.git
cd car-wash-poc
git sparse-checkout set src/data
```

---

## Troubleshooting

### Site Not Updating

1. **Check deployment**:
   - Netlify dashboard → Deploys
   - Verify latest deploy succeeded

2. **Clear cache**:
   - Netlify: Site settings → Build & deploy → Clear cache
   - Browser: Ctrl+Shift+R (hard refresh)

3. **Check build logs**:
   - Look for errors in Netlify build logs

### Form Submissions Not Working

1. **Check Netlify Forms**:
   - Netlify dashboard → Forms
   - Verify forms are enabled

2. **Check honeypot field**:
   - Ensure `website` field is hidden
   - Check not being filled by browsers

3. **Check notification settings**:
   - Netlify → Forms → Form notifications

### Chatbot Not Responding

1. **Check API key**:
   - Netlify → Environment variables
   - Verify OPENAI_API_KEY or ANTHROPIC_API_KEY set

2. **Check function logs**:
   - Netlify → Functions → chat
   - Look for errors

3. **Check rate limits**:
   - OpenAI/Anthropic dashboard
   - Verify not exceeding limits

### Performance Issues

1. **Run Lighthouse audit**
2. **Check image sizes** (should be < 500KB each)
3. **Review bundle size** (npm run build)
4. **Enable Netlify optimizations**:
   - Site settings → Post processing
   - Enable all optimizations

---

## Support

For technical issues:
- Check DEPLOYMENT.md
- Check ENV.md for API setup
- Review QA-CHECKLIST.md for testing

For Next.js questions:
- https://nextjs.org/docs

For Netlify questions:
- https://docs.netlify.com
- https://answers.netlify.com
