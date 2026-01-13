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
    id: 'zynq-ultrascale-ai',
    slug: 'zynq-ultrascale-ai-accelerator',
    name: 'Zynq UltraScale+ MPSoC Based AI Accelerator',
    tagline: 'Edge AI at Scale',
    description: 'High-performance AI accelerator platform featuring dual/quad ARM Cortex-A53 cores with UltraScale+ FPGA fabric for low-latency inference at the edge.',
    image: '/images/products/zynq-ai-accelerator.svg',
    status: 'available',
    category: 'development-kit',
    specs: [
      { label: 'Processor', value: 'Dual/Quad ARM Cortex-A53' },
      { label: 'FPGA', value: 'UltraScale+ Fabric' },
      { label: 'Interfaces', value: 'PCIe Gen3/Gen4, 10G Ethernet' },
      { label: 'Memory', value: 'DDR4/LPDDR4' },
    ],
    features: [
      'Low-latency AI inference',
      'MIPI-CSI/DSI support',
      'USB, SPI, I2C, UART, CAN, GPIO',
      'Edge computing optimized',
    ],
    cta: {
      primary: { text: 'Request Quote', href: '#contact' },
      secondary: { text: 'Specifications', href: '#' },
    },
  },
  {
    id: 'esp32-smartwatch',
    slug: 'esp32-smartwatch',
    name: 'ESP32-S3 Based Smart Watch',
    tagline: 'Complete Health Monitoring',
    description: 'Feature-rich smartwatch platform with comprehensive health monitoring including heart rate, SpO2, ECG, and sleep tracking capabilities.',
    image: '/images/products/esp32-smartwatch.svg',
    status: 'available',
    category: 'module',
    specs: [
      { label: 'Display', value: '1.2-1.5" AMOLED/OLED Touch' },
      { label: 'Sensors', value: 'HR, SpO2, ECG, Accelerometer' },
      { label: 'Connectivity', value: 'BLE, WiFi, NFC (optional)' },
      { label: 'Battery', value: '1-3 days / 25+ days extended' },
    ],
    features: [
      'Heart rate & SpO2 monitoring',
      'ECG and sleep tracking',
      'GPS/GNSS navigation',
      'Step counting & activity tracking',
    ],
    cta: {
      primary: { text: 'Request Quote', href: '#contact' },
      secondary: { text: 'Learn More', href: '#' },
    },
  },
  {
    id: 'stm32-touchscreen',
    slug: 'stm32-touchscreen-module',
    name: 'STM32 Based Touch Screen Module',
    tagline: 'Industrial-Grade HMI',
    description: 'High-resolution capacitive touch screen module with integrated STM32 MCU for industrial HMI applications.',
    image: '/images/products/stm32-touchscreen.svg',
    status: 'available',
    category: 'module',
    specs: [
      { label: 'Resolution', value: 'Full HD (1920x1080)' },
      { label: 'Touch', value: 'Capacitive Multi-touch' },
      { label: 'MCU', value: 'STM32 Integrated' },
      { label: 'Interfaces', value: 'SPI, I2C, UART, CAN' },
    ],
    features: [
      'Gesture recognition',
      'TouchGFX or custom HMI',
      'Industrial temperature range',
      'Sunlight readable option',
    ],
    cta: {
      primary: { text: 'Request Quote', href: '#contact' },
      secondary: { text: 'Datasheet', href: '#' },
    },
  },
  {
    id: 'custom-fpga-platforms',
    slug: 'custom-fpga-platforms',
    name: 'Customized FPGA Based Hardware Platforms',
    tagline: 'Tailored FPGA Solutions',
    description: 'Custom FPGA hardware platforms designed to your specifications using industry-leading FPGA families from Xilinx, Efinix, and Lattice.',
    image: '/images/products/fpga-platforms.svg',
    status: 'available',
    category: 'development-kit',
    specs: [
      { label: 'Xilinx', value: 'Zynq UltraScale+' },
      { label: 'Efinix', value: 'Titanium, Topaz, Trion' },
      { label: 'Lattice', value: 'CrossLink, CrossLink-NX, Nexus' },
      { label: 'Customization', value: 'Full hardware design' },
    ],
    features: [
      'Application-specific optimization',
      'Custom IP core integration',
      'Full documentation package',
      'Production-ready design',
    ],
    cta: {
      primary: { text: 'Discuss Requirements', href: '#contact' },
      secondary: { text: 'Case Studies', href: '#' },
    },
  },
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
