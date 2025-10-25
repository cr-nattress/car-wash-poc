# Superior Car Wash

> A modern, AI-powered car wash website built with Next.js 14, featuring premium UI/UX and intelligent booking capabilities

[\![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[\![React](https://img.shields.io/badge/React-18.3-blue?style=flat&logo=react)](https://react.dev/)
[\![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[\![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[\![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](LICENSE)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Development Workflow](#development-workflow)
- [Brand & Design](#brand--design)
- [Data Management](#data-management)
- [Deployment](#deployment)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Superior Car Wash** is a proof-of-concept (POC) website for a modern car wash business with multiple locations. This project demonstrates cutting-edge web development practices, mobile-first design, and AI-powered features to create a best-in-class user experience that exceeds industry standards.

### What Makes This Project Special

- **Mobile-First Design**: Optimized for touchscreen devices with progressive enhancement for desktop
- **Performance Focused**: Server-side rendering, optimized images, and fast load times
- **Modern Animations**: Framer Motion powered transitions and micro-interactions
- **Type-Safe Development**: Full TypeScript implementation with comprehensive type definitions
- **Component-Driven**: Reusable UI components with consistent design system
- **Markdown-Based Content**: Easy content management through Markdown files with frontmatter
- **Production Ready**: Built with enterprise-grade patterns and best practices

### Project Goals

1. **Exceed Industry Standards**: Outperform top car wash websites in features and UX
2. **AI Innovation**: Integrate intelligent features throughout the user journey
3. **Competitive Positioning**: Establish market leadership in the Northeastern PA region
4. **Scalability**: Architecture ready for multi-location expansion

---

## Features

### Core Functionality

- **Service Showcase**: Detailed service pages with pricing, features, and dynamic content
- **Location Management**: Multi-location support with hours, addresses, and maps integration
- **Membership Tiers**: Three-tier pricing system (Basic, Premium, Ultimate) with comparison
- **Online Booking**: Form-based appointment scheduling with validation
- **Contact & Support**: FAQ system, contact forms, and customer support channels
- **Newsletter Signup**: Email collection with honeypot spam protection

### User Experience

- **Responsive Design**: Seamless experience across mobile, tablet, and desktop
- **Page Transitions**: Smooth animations between routes using Framer Motion
- **Loading States**: Skeleton screens and progressive content loading
- **Form Validation**: Real-time validation using React Hook Form + Zod schemas
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags, structured data, and Next.js App Router benefits

### Developer Experience

- **TypeScript**: Full type safety across components, utilities, and data
- **ESLint + Prettier**: Automated code formatting and linting
- **Component Library**: Reusable UI components (Button, Card, Badge, Input, etc.)
- **Animation Utilities**: Custom animation components (FadeIn, ScaleIn, StaggerChildren)
- **Utility Functions**: Tailwind merge, class names, date formatting helpers
- **Clear Structure**: Organized file hierarchy with logical grouping

---

## Technology Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.2.13 | React framework with App Router and SSR |
| **React** | 18.3.1 | UI library for component-based architecture |
| **TypeScript** | 5.x | Type-safe development and improved DX |
| **Tailwind CSS** | 3.4.1 | Utility-first styling framework |
| **Framer Motion** | 12.23.24 | Animation library for smooth transitions |

### Forms & Validation

| Technology | Version | Purpose |
|------------|---------|---------|
| **React Hook Form** | 7.65.0 | Performant form management |
| **Zod** | 4.1.12 | Schema validation with TypeScript inference |
| **@hookform/resolvers** | 5.2.2 | Bridge between React Hook Form and Zod |

### Content & Data

| Technology | Version | Purpose |
|------------|---------|---------|
| **Gray Matter** | 4.0.3 | Parse Markdown frontmatter for data |
| **Remark** | 15.0.1 | Markdown processor |
| **Remark HTML** | 16.0.1 | Convert Markdown to HTML |

### Utilities

| Technology | Version | Purpose |
|------------|---------|---------|
| **clsx** | 2.1.1 | Conditional class name construction |
| **Tailwind Merge** | 3.3.1 | Merge Tailwind classes intelligently |
| **date-fns** | 4.1.0 | Modern date utility library |

### Development Tools

| Technology | Version | Purpose |
|------------|---------|---------|
| **ESLint** | 8.x | Code linting and quality enforcement |
| **Prettier** | 3.6.2 | Code formatting with Tailwind plugin |
| **Autoprefixer** | 10.4.20 | CSS vendor prefix automation |

---

## Project Structure


car-wash-poc/
├── v1/                          # Main application directory
│   ├── src/
│   │   ├── app/                 # Next.js App Router pages
│   │   │   ├── page.tsx         # Homepage
│   │   │   ├── layout.tsx       # Root layout with metadata
│   │   │   ├── template.tsx     # Page transition wrapper
│   │   │   ├── globals.css      # Global styles & Tailwind imports
│   │   │   ├── about/           # About page
│   │   │   ├── book/            # Booking page
│   │   │   ├── contact/         # Contact page
│   │   │   ├── faq/             # FAQ page
│   │   │   ├── locations/       # Locations listing
│   │   │   ├── pricing/         # Membership pricing
│   │   │   └── services/        # Services pages
│   │   │       ├── page.tsx     # Services listing
│   │   │       └── [id]/        # Dynamic service detail pages
│   │   │
│   │   ├── components/
│   │   │   ├── animations/      # Reusable animation components
│   │   │   ├── booking/         # Booking-specific components
│   │   │   ├── common/          # Shared components
│   │   │   ├── faq/             # FAQ components
│   │   │   ├── home/            # Homepage sections
│   │   │   ├── layout/          # Layout components
│   │   │   └── ui/              # Base UI components
│   │   │
│   │   ├── data/                # Markdown data files
│   │   │   ├── faqs.md
│   │   │   ├── locations.md
│   │   │   ├── pricing.md
│   │   │   ├── services.md
│   │   │   └── testimonials.md
│   │   │
│   │   ├── lib/                 # Utilities and helpers
│   │   │   ├── constants.ts     # App-wide constants
│   │   │   ├── data.ts          # Data fetching functions
│   │   │   ├── schemas.ts       # Zod validation schemas
│   │   │   └── utils.ts         # Utility functions
│   │   │
│   │   └── types/               # TypeScript type definitions
│   │       └── index.ts
│   │
│   ├── public/                  # Static assets
│   ├── .eslintrc.json
│   ├── .prettierrc
│   ├── next.config.mjs
│   ├── package.json
│   ├── tailwind.config.ts
│   └── tsconfig.json
│
├── planning/                    # Project documentation
├── backlog/                     # Development backlog
└── images/                      # Brand reference photos


---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: v18.17.0 or higher ([Download](https://nodejs.org/))
- **npm**: v9.0.0 or higher (comes with Node.js)
- **Git**: Latest version ([Download](https://git-scm.com/))

### Installation

1. **Clone the repository**

   bash
   git clone https://github.com/yourusername/car-wash-poc.git
   cd car-wash-poc
   

2. **Navigate to the application directory**

   bash
   cd v1
   

3. **Install dependencies**

   bash
   npm install
   

4. **Run the development server**

   bash
   npm run dev
   

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Expected Output

You should see the Superior Car Wash homepage with:
- Animated hero section with call-to-action buttons
- Services showcase with three wash tiers
- Pricing preview with membership options
- Customer testimonials section

---

## Available Scripts

All scripts should be run from the v1/ directory.

### Development

bash
# Start development server with hot reload
npm run dev


### Building

bash
# Create optimized production build
npm run build

# Start production server (after build)
npm start


### Code Quality

bash
# Run ESLint to check for code issues
npm run lint

# Run ESLint and auto-fix issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting without making changes
npm run format:check

# Type-check TypeScript without emitting files
npm run type-check


---

## Development Workflow

### Creating New Pages

Next.js App Router uses file-system based routing:

typescript
// v1/src/app/new-page/page.tsx
export default function NewPage() {
  return <div><h1>New Page</h1></div>
}


### Creating New Components

typescript
// v1/src/components/ui/MyComponent.tsx
import { cn } from '@/lib/utils'

interface MyComponentProps {
  className?: string
  children: React.ReactNode
}

export default function MyComponent({ className, children }: MyComponentProps) {
  return <div className={cn('base-styles', className)}>{children}</div>
}


### Adding Data

Add content to Markdown files in v1/src/data/:

markdown
---
id: new-service
name: New Service
price: 29
features:
  - Feature 1
  - Feature 2
---

# Service Description

Detailed content in Markdown format.


---

## Brand & Design

### Color Palette

Brand colors defined in v1/tailwind.config.ts:

typescript
// Cyan Blue (building exterior)
primary: { 500: '#00a3e0' }

// Orange (OPEN 24/7 signage)
accent: { 500: '#ff6600' }

// Yellow (equipment)
yellow: { 500: '#ffd700' }


### Responsive Breakpoints

typescript
sm: '640px'   // Phones in landscape
md: '768px'   // Tablets
lg: '1024px'  // Laptops
xl: '1280px'  // Desktops
2xl: '1536px' // Large desktops


---

## Data Management

### Markdown-Based Content

All dynamic content is stored in Markdown files with YAML frontmatter in v1/src/data/.

| File | Purpose | Type Interface |
|------|---------|----------------|
| services.md | Service offerings | Service |
| pricing.md | Membership tiers | PricingTier |
| locations.md | Business locations | Location |
| testimonials.md | Customer reviews | Testimonial |
| faqs.md | FAQ entries | FAQ |

### Fetching Data

typescript
import { getServices, getServiceById } from '@/lib/data'

// Get all services
const services = await getServices()

// Get single service
const service = await getServiceById('express-wash')


---

## Deployment

### Netlify (Recommended)

1. **Push to GitHub**

   bash
   git push origin main
   

2. **Configure Netlify**

   - Base directory: v1
   - Build command: npm run build
   - Publish directory: v1/.next
   - Node version: 18

3. **Deploy**

   Auto-deploys on every push to main

### Vercel

bash
npm i -g vercel
cd v1
vercel


---

## Architecture

### Component Architecture


Components
├── app/              # Page-level (Server Components)
├── layout/           # Header, Footer
├── home/             # Homepage sections
├── booking/          # Booking flow
├── common/           # Shared components
├── animations/       # Animation wrappers
└── ui/               # Base UI components


### Server vs Client Components

**Server Components** (default):
- Page components (app/**/page.tsx)
- Data fetching components
- Static content

**Client Components** ('use client'):
- Forms with user interaction
- Components with hooks
- Animation components (Framer Motion)

### Data Flow


Markdown Files → Data Layer → Type Interfaces → Server Components → UI Components


---

## Contributing

### Development Process

1. Fork the repository
2. Create feature branch: git checkout -b feature/name
3. Make changes (follow code style)
4. Test: npm run type-check && npm run lint && npm run build
5. Commit: git commit -m feat: add feature
6. Push and create Pull Request

### Code Standards

- **TypeScript**: All new code must be TypeScript
- **Styling**: Use Tailwind utility classes
- **Imports**: Use absolute imports with @/ alias
- **Naming**: PascalCase for components, camelCase for functions

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

### Built With

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [React Hook Form](https://react-hook-form.com/) - Form Management
- [Zod](https://zod.dev/) - Schema Validation

---

## Project Status

**Current Version**: 0.1.0 (POC Phase)

### Completed Epics

- ✅ Epic 1: Foundation & Setup
- ✅ Epic 2: Core Pages & Homepage
- ✅ Epic 3: Branding & Mobile Optimization
- ✅ Epic 4: Animations & Polish

### Upcoming Features

- 🔄 Epic 5: AI Integration
- 🔄 Epic 6: Enhanced Features
- 🔄 Epic 7: Content Polish & Testing

See [BACKLOG-COMPLETE.md](BACKLOG-COMPLETE.md) for detailed roadmap.

---

## Support

- **GitHub Issues**: [Create an issue](https://github.com/yourusername/car-wash-poc/issues)
- **Email**: support@superiorcarwash.com
- **Documentation**: See /planning directory

---

<div align="center">

**Superior Car Wash** - Built with Next.js

[Documentation](./planning/OBJECTIVE.md) · [Report Bug](https://github.com/yourusername/car-wash-poc/issues) · [Request Feature](https://github.com/yourusername/car-wash-poc/issues)

</div>
