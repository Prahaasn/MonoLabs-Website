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
  detailedFeatures?: string[]
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
    description: 'High-performance AI accelerator platform featuring dual/quad ARM Cortex-A53 cores combined with UltraScale+ FPGA fabric for low-latency AI inference at the edge. Handles vision, robotics, and signal processing workloads simultaneously.',
    image: '/images/products/zynq-ai-accelerator.png',
    status: 'available',
    category: 'development-kit',
    specs: [
      { label: 'Processor', value: 'Dual/Quad ARM Cortex-A53' },
      { label: 'FPGA', value: 'UltraScale+ Fabric' },
      { label: 'PCIe', value: 'Gen3/Gen4 (x1/x4/x8 lanes)' },
      { label: 'Ethernet', value: '10G / 100G Optional' },
    ],
    features: [
      'Low-latency AI inference at the edge',
      'Vision, robotics & signal processing',
      'MIPI-CSI/DSI camera & display support',
      'High-speed serial transceivers',
    ],
    detailedFeatures: [
      'High-Performance AI Computing with dual/quad ARM Cortex-A53 cores',
      'UltraScale+ FPGA fabric for low-latency AI inference at the edge',
      'Handles vision, robotics, and signal processing workloads simultaneously',
      'PCIe Gen3/Gen4 (x1/x4/x8 lanes) for high-speed host communication',
      'Gigabit Ethernet / 10G Ethernet, with optional 100G support for network connectivity',
      'MIPI-CSI / MIPI-DSI interfaces for camera input and display output',
      'High-Speed Serial Transceivers (LVDS / SerDes) supporting up to 16 Gbps per lane',
      'Memory Interfaces: DDR4 / LPDDR4 up to 2400 MT/s per pin',
      'USB Interfaces: USB 2.0 / 3.x for external device connectivity',
      'Low-Speed Interfaces: SPI, I2C, UART, CAN, GPIO for peripheral and control integration',
      'Expansion / Debug: JTAG and optional FMC connectors for daughter boards or expansion modules',
    ],
    cta: {
      primary: { text: 'Request Quote', href: '#contact' },
      secondary: { text: 'Learn More', href: '/products/zynq-ultrascale-ai-accelerator' },
    },
  },
  {
    id: 'esp32-smartwatch',
    slug: 'esp32-smartwatch',
    name: 'ESP32-S3 Based Smart Watch',
    tagline: 'Complete Health Monitoring',
    description: 'Feature-rich smartwatch platform with comprehensive health monitoring including heart rate, SpO2, ECG, sleep tracking, and step counting capabilities. Seamless connectivity via Bluetooth/BLE and Wi-Fi.',
    image: '/images/products/esp32-smartwatch.jpg',
    status: 'available',
    category: 'module',
    specs: [
      { label: 'Health Sensors', value: 'HR, SpO2, ECG' },
      { label: 'Connectivity', value: 'BLE, WiFi' },
      { label: 'Tracking', value: 'Sleep, Steps, Activity' },
      { label: 'Sync', value: 'Cloud & Smartphone' },
    ],
    features: [
      'Heart rate & SpO2 monitoring',
      'ECG and sleep tracking',
      'Step counting & activity tracking',
      'Bluetooth/BLE smartphone connectivity',
    ],
    detailedFeatures: [
      'Health & Fitness Monitoring: Heart rate, SpO2, ECG, sleep tracking, step counting',
      'Bluetooth / BLE for smartphone connectivity',
      'Wi-Fi for updates and cloud synchronization',
      'Low-power design for extended battery life',
      'Customizable watch faces and UI',
      'Real-time health data streaming',
      'Activity and workout tracking',
      'Notification support from paired smartphone',
    ],
    cta: {
      primary: { text: 'Request Quote', href: '#contact' },
      secondary: { text: 'Learn More', href: '/products/esp32-smartwatch' },
    },
  },
  {
    id: 'stm32-touchscreen',
    slug: 'stm32-touchscreen-module',
    name: 'STM32 Based Touch Screen Module',
    tagline: 'Industrial-Grade HMI',
    description: 'High-resolution capacitive touch screen module with integrated STM32 MCU for industrial HMI applications. Features gesture recognition, multi-touch support, and industrial temperature range operation.',
    image: '/images/products/stm32-touchscreen.webp',
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
    detailedFeatures: [
      'High-resolution Full HD (1920x1080) display',
      'Capacitive multi-touch with gesture recognition',
      'Integrated STM32 microcontroller for standalone operation',
      'TouchGFX or custom HMI framework support',
      'Industrial temperature range: -40°C to +85°C',
      'Sunlight readable option for outdoor applications',
      'Multiple interface options: SPI, I2C, UART, CAN',
      'Low-power modes for battery-operated devices',
      'Configurable backlight with PWM dimming',
      'EMI/EMC compliant design',
    ],
    cta: {
      primary: { text: 'Request Quote', href: '#contact' },
      secondary: { text: 'Learn More', href: '/products/stm32-touchscreen-module' },
    },
  },
  {
    id: 'custom-fpga-platforms',
    slug: 'custom-fpga-platforms',
    name: 'Customized FPGA Based Hardware Platforms',
    tagline: 'Tailored FPGA Solutions',
    description: 'Custom FPGA hardware platforms designed to your specifications using industry-leading FPGA families from Xilinx, Efinix, and Lattice. Complete design services from concept to production.',
    image: '/images/products/fpga-platform.jpg',
    status: 'available',
    category: 'development-kit',
    specs: [
      { label: 'Xilinx', value: 'Zynq UltraScale+' },
      { label: 'Efinix', value: 'Titanium, Topaz, Trion' },
      { label: 'Lattice', value: 'CrossLink, CrossLink-NX' },
      { label: 'Design', value: 'Full Custom' },
    ],
    features: [
      'Application-specific optimization',
      'Custom IP core integration',
      'Full documentation package',
      'Production-ready design',
    ],
    detailedFeatures: [
      'Support for Xilinx Zynq UltraScale+ family',
      'Efinix Titanium, Topaz, and Trion FPGA support',
      'Lattice CrossLink, CrossLink-NX, and Nexus platforms',
      'Application-specific hardware optimization',
      'Custom IP core development and integration',
      'Complete schematic and PCB design',
      'Signal integrity and power integrity analysis',
      'Thermal analysis and mechanical design',
      'Full documentation package including BOM',
      'Production-ready design with DFM/DFT considerations',
      'Prototype to volume manufacturing support',
    ],
    cta: {
      primary: { text: 'Discuss Requirements', href: '#contact' },
      secondary: { text: 'Learn More', href: '/products/custom-fpga-platforms' },
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
