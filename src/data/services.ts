import { Cpu, Wrench, Code, Zap } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  features: string[]
}

export const services: Service[] = [
  {
    id: 'product-development',
    title: 'Product Development',
    description: 'End-to-end electronics product development from concept to production-ready design.',
    icon: Wrench,
    features: [
      'Requirements analysis & feasibility',
      'Rapid prototyping & iteration',
      'Design for Manufacturing (DFM)',
      'Production support & transfer',
    ],
  },
  {
    id: 'hardware-design',
    title: 'Hardware Design',
    description: 'Custom PCB design and electrical engineering solutions for complex systems.',
    icon: Cpu,
    features: [
      'Multi-layer PCB design',
      'High-speed signal routing',
      'Power optimization',
      'EMC/EMI compliance',
    ],
  },
  {
    id: 'firmware-development',
    title: 'Firmware Development',
    description: 'Embedded software development for microcontrollers and processors.',
    icon: Code,
    features: [
      'RTOS implementation',
      'Driver development',
      'Bootloader design',
      'OTA update systems',
    ],
  },
  {
    id: 'fpga-design',
    title: 'FPGA Design',
    description: 'High-performance FPGA solutions for demanding applications.',
    icon: Zap,
    features: [
      'RTL design (Verilog/VHDL)',
      'Custom IP core development',
      'High-speed interfaces',
      'Hardware acceleration',
    ],
  },
]
