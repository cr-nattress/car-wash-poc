# Task: Create Membership Tier Preview

**ID**: TASK-02-01-03 | **Story**: STORY-02-01 | **Epic**: EPIC-02

---

## 🎯 Objective
Create membership tier preview section showing 3 pricing tiers with "Most Popular" badge.

## 🔧 Implementation

Create `v1/src/components/features/MembershipPreview.tsx`:

```typescript
import { getPricingTiers } from '@/lib/data'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'

export function MembershipPreview() {
  const tiers = getPricingTiers()

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold">
          Unlimited Monthly Memberships
        </h2>
        <p className="mb-12 text-center text-gray-600">
          Choose the plan that's right for you
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map(tier => (
            <div
              key={tier.id}
              className="rounded-lg border-2 border-gray-200 p-6 hover:border-primary-500"
            >
              {tier.popular && (
                <Badge variant="secondary" className="mb-4">
                  Most Popular
                </Badge>
              )}
              <h3 className="mb-2 text-2xl font-bold">{tier.name}</h3>
              <p className="mb-4">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className="text-gray-600">/month</span>
              </p>
              <ul className="mb-6 space-y-2">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-yellow-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/membership">
                <Button variant="primary" className="w-full">
                  Choose Plan
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Commit**: `feat(homepage): add membership tier preview`

---

**Status**: 🔵 Not Started | **Estimated**: 2 hours
