# Task: Configure Netlify Deployment and Auto-Deploy

**ID**: TASK-01-01-04

**Story**: STORY-01-01 (Development Environment)

**Epic**: EPIC-01 (Foundation & Setup)

**Source**: Task from Milestone 1.1 in planning/IMPLEMENTATION-PLAN.md

---

## 🎯 Objective

Connect GitHub repository to Netlify, configure build settings, set up environment variables, and deploy the initial site live.

## 📋 Context

**Why This Task**:
Netlify provides free hosting with auto-deploy on Git push, serverless functions for AI features, and form handling. Setting this up early establishes the deployment pipeline and enables continuous delivery.

**Current State**:
Code pushed to GitHub repository at https://github.com/cr-nattress/car-wash-poc.git

**Desired State**:
- Netlify account connected to GitHub
- Site auto-deploys on push to main branch
- Build settings configured correctly
- Live URL accessible
- Environment variables placeholder set
- Deploy previews working for branches

## ✅ Acceptance Criteria

- [ ] Netlify account created/logged in
- [ ] GitHub repository connected to Netlify
- [ ] Build command set to `npm run build`
- [ ] Publish directory set to `.next`
- [ ] Base directory set to `v1`
- [ ] Initial deployment successful
- [ ] Live URL accessible and shows Next.js app
- [ ] Auto-deploy triggers on push to main
- [ ] Environment variables section configured (placeholders)
- [ ] Deploy previews enabled for pull requests
- [ ] Build logs show successful compilation
- [ ] No build errors or warnings

## 🔧 Implementation Guide

**Application Location**: Netlify Dashboard + `v1/`

### Step 1: Create/Login to Netlify Account

1. Visit https://app.netlify.com/signup
2. Sign up with GitHub (recommended for easy integration)
3. Authorize Netlify to access GitHub repositories

### Step 2: Create New Site from Git

1. Click "Add new site" → "Import an existing project"
2. Choose "GitHub"
3. Authorize Netlify (if first time)
4. Search for "car-wash-poc"
5. Select `cr-nattress/car-wash-poc` repository

### Step 3: Configure Build Settings

**Site Settings**:
```
Base directory: v1
Build command: npm run build
Publish directory: v1/.next
```

**Build Configuration**:
- Branch to deploy: `main`
- Production branch: `main`
- Deploy previews: `Any pull request against production branch`

### Step 4: Add Environment Variables (Placeholders)

In Netlify Dashboard → Site Settings → Environment Variables, add:

```
NODE_VERSION=18

# Placeholders - will be replaced in later tasks
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=placeholder_will_update_later
NEXT_PUBLIC_WEATHER_API_KEY=placeholder_will_update_later
OPENAI_API_KEY=placeholder_will_update_later
```

**Note**: These are placeholders. Actual keys will be added when implementing those features.

### Step 5: Create netlify.toml Configuration

Create `v1/netlify.toml`:

```toml
[build]
  base = "v1"
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Security headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

# Cache static assets
[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# Functions configuration (for later AI features)
[functions]
  directory = "netlify/functions"
```

### Step 6: Trigger First Deployment

Option 1: Click "Deploy site" in Netlify dashboard

Option 2: Push the netlify.toml file to trigger auto-deploy:
```bash
cd v1
git add netlify.toml
git commit -m "chore(deploy): add Netlify configuration"
git push origin main
```

### Step 7: Monitor Deployment

1. Go to Netlify Dashboard → Deploys
2. Watch the build log in real-time
3. Build should take 2-5 minutes
4. Status should change from "Building" → "Published"

Expected build log output:
```
Installing dependencies
npm install

Building Next.js application
npm run build

> next build

✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (5/5)
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    1.2 kB         80.5 kB
└ ○ /_not-found                          871 B          80.2 kB

Deploy successful!
```

### Step 8: Verify Live Site

1. Copy the Netlify URL (e.g., `https://car-wash-poc-xyz123.netlify.app`)
2. Visit the URL in browser
3. Verify:
   - Next.js app loads
   - No 404 errors
   - Page displays correctly

### Step 9: Set Up Custom Domain (Optional for POC)

For production, you would:
1. Netlify Dashboard → Domain Settings
2. Add custom domain
3. Configure DNS
4. Enable HTTPS (automatic via Let's Encrypt)

**For POC**: Skip this step, use Netlify subdomain

### Step 10: Test Auto-Deploy

Make a small change to test auto-deploy:

```bash
cd v1

# Update README
echo "- Live URL: https://[your-netlify-url].netlify.app" >> README.md

git add README.md
git commit -m "docs: add live URL to README"
git push origin main
```

Verify:
1. Netlify dashboard shows new deploy triggered
2. Build completes successfully
3. Changes appear on live site within 2-3 minutes

### Step 11: Configure Deploy Notifications (Optional)

Netlify Dashboard → Site Settings → Build & Deploy → Deploy Notifications

Add notifications for:
- Deploy started
- Deploy succeeded
- Deploy failed

Options:
- Email notifications
- Slack webhook (if team uses Slack)
- GitHub commit status

## 📚 Resources

**Related Files**:
- `v1/netlify.toml` - Netlify configuration
- `v1/package.json` - Build scripts
- `v1/next.config.js` - Next.js configuration

**Documentation**:
- Netlify Next.js Guide: https://docs.netlify.com/frameworks/next-js/overview/
- Netlify Build Settings: https://docs.netlify.com/configure-builds/overview/
- Environment Variables: https://docs.netlify.com/environment-variables/overview/
- netlify.toml Reference: https://docs.netlify.com/configure-builds/file-based-configuration/

**Troubleshooting**:
- Build fails: Check build log for errors, verify Node version
- 404 on routes: Ensure redirects configured in netlify.toml
- Slow builds: Enable dependency caching

## 🧪 Testing Requirements

**Manual Testing**:

1. **Initial Deploy Test**:
   - [ ] Site deploys successfully
   - [ ] Live URL accessible
   - [ ] No 404 errors
   - [ ] Page loads within 3 seconds

2. **Auto-Deploy Test**:
   ```bash
   # Make a trivial change
   cd v1
   echo "# Test" >> README.md
   git add . && git commit -m "test: verify auto-deploy" && git push
   ```
   - [ ] Netlify detects push
   - [ ] Build triggers automatically
   - [ ] Deploy completes within 5 minutes
   - [ ] Changes appear on live site

3. **Build Configuration Test**:
   - [ ] Build command runs correctly
   - [ ] TypeScript compiles without errors
   - [ ] Static pages generated
   - [ ] No console errors in build log

4. **Deploy Preview Test** (if PR created):
   - [ ] Pull request creates deploy preview
   - [ ] Preview URL unique to PR
   - [ ] Preview reflects PR changes
   - [ ] Production site unaffected

**Performance Tests**:

```bash
# Check live site performance
# Visit: https://developers.google.com/speed/pagespeed/insights/
# Enter your Netlify URL
# Target scores:
# - Performance: > 80
# - Accessibility: > 90
# - Best Practices: > 90
# - SEO: > 90
```

## 🎓 Learning Notes

**Key Concepts**:

1. **Continuous Deployment**:
   - Every push to main triggers automatic build and deploy
   - No manual FTP uploads or server management
   - Enables rapid iteration and feedback

2. **Serverless Functions**:
   - Netlify Functions = AWS Lambda under the hood
   - Run backend code without managing servers
   - Perfect for AI chatbot API routes (later tasks)

3. **Deploy Previews**:
   - Each PR gets unique preview URL
   - Test changes before merging to production
   - Share with stakeholders for review

4. **Edge Network**:
   - Netlify CDN serves site from 100+ edge locations
   - Fast loading globally
   - Automatic HTTPS

5. **Build Optimization**:
   - Netlify caches `node_modules` between builds
   - Incremental Static Regeneration (ISR) support
   - Asset optimization (minification, compression)

**Common Pitfalls**:

⚠️ **Wrong publish directory**
- Next.js output is `.next` not `out`
- `out` is for static export only
- Verify: publish = `.next` or `v1/.next`

⚠️ **Missing base directory**
- If code is in subfolder (like `v1/`), must set base directory
- Otherwise Netlify runs build from root (fails)
- Set: base = `v1`

⚠️ **Build command not in package.json**
- Netlify runs `npm run build`
- Must exist in package.json scripts
- Check: `"build": "next build"` exists

⚠️ **Environment variables not set**
- Build fails if required env vars missing
- Set placeholders initially
- Update with real values when needed

⚠️ **Node version mismatch**
- Local development uses Node 18+
- Netlify default might be older
- Set: `NODE_VERSION=18` in environment variables

## 📏 Estimated Effort

**Time**: 1.5 hours
- Netlify account setup: 10 minutes
- Connect repository: 15 minutes
- Configure build settings: 20 minutes
- Create netlify.toml: 20 minutes
- First deployment: 10 minutes
- Testing and verification: 25 minutes

**Complexity**: Low-Medium
- Straightforward UI configuration
- Well-documented process
- Potential troubleshooting if build fails

**Prerequisites**:
- TASK-01-01-01: Next.js initialized
- TASK-01-01-03: Code pushed to GitHub
- GitHub account exists
- Email for Netlify account

## ✔️ Definition of Done

- [ ] Netlify account created and GitHub connected
- [ ] Site deployed successfully with live URL
- [ ] Build settings correct (base: v1, publish: .next)
- [ ] netlify.toml configuration file created and committed
- [ ] Environment variables configured (placeholders)
- [ ] Auto-deploy working (tested with push)
- [ ] Live site accessible and loads correctly
- [ ] Build logs show no errors
- [ ] README.md updated with live URL
- [ ] Deploy previews enabled

**Commit Message**:
```
chore(deploy): configure Netlify deployment

- Add netlify.toml with build configuration
- Set base directory to v1/
- Configure build command and publish directory
- Add environment variable placeholders
- Enable auto-deploy on push to main
- Add security headers and caching rules

Live URL: https://[your-netlify-url].netlify.app

Closes TASK-01-01-04
```

## 🤖 AI Agent Instructions

**Pre-Implementation**:

1. **Verify GitHub Push Complete**:
   ```bash
   cd v1
   git log origin/main --oneline
   # Should show commits on GitHub
   ```

2. **Ensure Build Script Exists**:
   ```bash
   cat package.json | grep "\"build\""
   # Should show: "build": "next build"
   ```

**Implementation**:

1. **Create Netlify Account**:
   - Visit https://app.netlify.com/signup
   - Sign up with GitHub
   - Authorize repository access

2. **Import Repository**:
   - Click "Add new site" → "Import from Git"
   - Select GitHub → car-wash-poc
   - Configure build:
     - Base: `v1`
     - Build: `npm run build`
     - Publish: `.next`

3. **Add Environment Variables**:
   - Site Settings → Environment Variables
   - Add `NODE_VERSION=18`
   - Add API key placeholders

4. **Create netlify.toml**:
   - Copy configuration from Step 5
   - Save to `v1/netlify.toml`
   - Commit and push

**Verification**:

```bash
# After deploy completes, test URL
curl -I https://[your-netlify-url].netlify.app
# Should return 200 OK

# Test auto-deploy
echo "# Test" >> README.md
git add . && git commit -m "test: auto-deploy" && git push
# Watch Netlify dashboard for new build
```

**Success Criteria**:
- Live URL returns 200 status
- Site loads in browser
- Auto-deploy triggers on push
- No build errors in logs

## 🔗 Related Tasks

**Depends On**:
- TASK-01-01-01: Next.js initialized
- TASK-01-01-03: Git repository pushed to GitHub

**Blocks**:
- All future tasks (need deployment pipeline for testing)
- TASK-04-01-01: AI chatbot (needs Netlify Functions)

**Can Run in Parallel With**:
- TASK-01-01-05: Install dependencies (independent)
- TASK-01-01-06: ESLint/Prettier (independent)

---

**Status**: 🔵 Not Started
**Assigned To**: (Not assigned)
**Estimated**: 1.5 hours
**Actual**: (Not started)

**Application Directory**: `v1/`
**Deployment Platform**: Netlify

**Next**: After completing, proceed to `task-01-01-05-install-dependencies.md`
