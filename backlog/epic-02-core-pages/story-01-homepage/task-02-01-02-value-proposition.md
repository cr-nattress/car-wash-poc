# Task: Create Value Proposition Section

**ID**: TASK-02-01-02 | **Story**: STORY-02-01 | **Epic**: EPIC-02

---

## 🎯 Objective
Create value proposition section highlighting 4 key benefits with icons.

## ✅ Acceptance Criteria
- [ ] 4-column grid (responsive to 1-column mobile)
- [ ] Icon for each benefit
- [ ] Headline and description for each
- [ ] Brand colors (blue icons)

## 🔧 Implementation

Create `v1/src/components/features/ValueProposition.tsx`:

```typescript
export function ValueProposition() {
  const benefits = [
    {
      icon: '⚡',
      title: 'Express Service',
      description: 'In and out in under 5 minutes with our express wash',
    },
    {
      icon: '💰',
      title: 'Unbeatable Value',
      description: 'Unlimited washes from just $24/month - pays for itself',
    },
    {
      icon: '📍',
      title: '2 Locations',
      description: 'Convenient locations in downtown and north side Scranton',
    },
    {
      icon: '🕐',
      title: '24/7 Downtown',
      description: 'Wash your car anytime at our downtown location',
    },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Why Choose {SITE_NAME}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="text-center">
              <div className="mb-4 text-5xl">{benefit.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Commit**: `feat(homepage): add value proposition section`

**Depends On**: TASK-02-01-01 (Hero section)

---

**Status**: 🔵 Not Started | **Estimated**: 2 hours
