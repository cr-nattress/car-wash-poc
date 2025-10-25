# Task: Build Footer Component

**ID**: TASK-01-03-03
**Story**: STORY-01-03
**Epic**: EPIC-01

---

## 🎯 Objective
Create footer component with links, locations, hours, and social media.

## ✅ Acceptance Criteria
- [ ] Footer component created
- [ ] 4-column grid (responsive to 1-column mobile)
- [ ] Company info, quick links, locations, hours
- [ ] Social media links
- [ ] Copyright notice
- [ ] Dark background (gray-900)

## 🔧 Implementation

Create `v1/src/components/layout/Footer.tsx`:

```typescript
import Link from 'next/link'
import { getLocations } from '@/lib/data'
import { SITE_NAME, SOCIAL_MEDIA } from '@/lib/constants'

export function Footer() {
  const locations = getLocations()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{SITE_NAME}</h3>
            <p className="text-gray-400">
              Premium car wash service with AI technology
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-400 hover:text-white">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-400 hover:text-white">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4">Our Locations</h4>
            {locations.map(loc => (
              <div key={loc.id} className="mb-3">
                <p className="font-medium">{loc.name}</p>
                <a
                  href={`tel:${loc.phone.replace(/\D/g, '')}`}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  {loc.phone}
                </a>
              </div>
            ))}
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href={SOCIAL_MEDIA.facebook} className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href={SOCIAL_MEDIA.instagram} className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
```

**Commit**: `feat(footer): build footer component with locations`

---

**Status**: 🔵 Not Started | **Estimated**: 3 hours
