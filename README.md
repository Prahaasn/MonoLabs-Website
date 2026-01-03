# Mono Labs Website

A modern, Framer-style landing page for Mono Labs - a hardware product development company specializing in electronics design, firmware engineering, and FPGA solutions.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Resend (optional)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd monolabs-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/contact/    # Contact form API route
│   ├── globals.css     # Global styles & Tailwind theme
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── ui/             # Reusable UI components
│   │   ├── AnimatedSection.tsx
│   │   ├── GlassCard.tsx
│   │   └── StaggerContainer.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Products.tsx
│   ├── Training.tsx
│   ├── Features.tsx
│   ├── Process.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/               # Static data files
│   ├── services.ts
│   ├── products.ts
│   ├── training.ts
│   └── features.ts
└── lib/
    └── utils.ts        # Utility functions
```

## Adding Products

To add new products, edit `src/data/products.ts`:

```typescript
export const products: Product[] = [
  {
    id: 'new-product',
    slug: 'new-product',
    name: 'Product Name',
    tagline: 'Short tagline',
    description: 'Product description...',
    image: '/images/products/new-product.svg',
    status: 'coming-soon', // 'available' | 'coming-soon' | 'pre-order'
    category: 'development-kit', // 'development-kit' | 'module' | 'tool'
    specs: [
      { label: 'Spec 1', value: 'Value 1' },
      // ...
    ],
    features: ['Feature 1', 'Feature 2'],
    cta: {
      primary: { text: 'Learn More', href: '#' },
    },
  },
  // ... existing products
]
```

## Contact Form Setup

The contact form uses Resend for email delivery. To enable:

1. Create a Resend account at [resend.com](https://resend.com)
2. Get your API key
3. Create `.env.local`:

```env
RESEND_API_KEY=your_api_key_here
```

4. Update the email addresses in `src/app/api/contact/route.ts`

Without the API key, form submissions are logged to the console.

## Customization

### Colors

Edit the color palette in `src/app/globals.css`:

```css
@theme inline {
  --color-mono-green-400: #8BC34A;
  --color-mono-green-500: #6AAF29;
  /* ... */
}
```

### Logo

Replace `public/logo.svg` with your logo file.

### Content

- **Services**: `src/data/services.ts`
- **Training**: `src/data/training.ts`
- **Features**: `src/data/features.ts`
- **Stats**: `src/data/features.ts` (stats array)

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Other Platforms

Build the static export:

```bash
npm run build
```

The output will be in `.next/` folder.

## License

MIT License - Mono Labs
