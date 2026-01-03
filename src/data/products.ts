export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  status: 'available' | 'coming-soon' | 'pre-order'
  category: 'development-kit' | 'module' | 'tool'
  specs: ProductSpec[]
  features: string[]
  cta: {
    primary: { text: string; href: string }
    secondary?: { text: string; href: string }
  }
}

export const products: Product[] = [
  {
    id: 'monocore-dev-kit',
    slug: 'monocore-dev-kit',
    name: 'MonoCore Dev Kit',
    tagline: 'Rapid prototyping made simple',
    description: 'An all-in-one development kit designed for rapid prototyping of embedded systems. Features integrated debugging, multiple connectivity options, and modular expansion capabilities.',
    image: '/images/products/monocore-dev-kit.svg',
    status: 'coming-soon',
    category: 'development-kit',
    specs: [
      { label: 'Processor', value: 'ARM Cortex-M7 @ 480MHz' },
      { label: 'Memory', value: '1MB Flash, 512KB SRAM' },
      { label: 'Connectivity', value: 'WiFi 6, BLE 5.2, Ethernet' },
      { label: 'Interfaces', value: 'USB-C, CAN, SPI, I2C, UART' },
    ],
    features: [
      'Integrated debugger with trace',
      'Modular expansion headers',
      'Ultra low-power modes',
      'Open-source SDK & examples',
    ],
    cta: {
      primary: { text: 'Join Waitlist', href: '#contact' },
      secondary: { text: 'Learn More', href: '#' },
    },
  },
  // Add more products here following the same structure
  // Example:
  // {
  //   id: 'mono-sensor-module',
  //   slug: 'mono-sensor-module',
  //   name: 'Mono Sensor Module',
  //   tagline: 'Multi-sensor fusion made easy',
  //   ...
  // },
]

// Helper functions for filtering products
export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category)
}

export function getProductsByStatus(status: Product['status']): Product[] {
  return products.filter((p) => p.status === status)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
