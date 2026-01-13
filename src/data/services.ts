import { Cpu, Wrench, Code, Zap, Layout, Activity, Box, Factory, Truck, PlayCircle, Shield, Database, FileCode } from 'lucide-react'
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
    id: 'hardware-architecture',
    title: 'Hardware Architecture Development',
    description: 'Strategic hardware architecture planning that ensures scalability, performance, and manufacturing efficiency.',
    icon: Cpu,
    features: [
      'System-level architecture design',
      'Component selection optimization',
      'Risk mitigation strategies',
      'Scalability planning',
    ],
  },
  {
    id: 'schematic-design',
    title: 'Schematic Design & Review',
    description: 'Comprehensive schematic capture with rigorous design rule checking and peer review processes.',
    icon: FileCode,
    features: [
      'Multi-sheet schematic capture',
      'Design rule verification',
      'Net connectivity validation',
      'Component annotation',
    ],
  },
  {
    id: 'library-management',
    title: 'Industry-Standard Library Management',
    description: 'Centralized component library management ensuring consistency and compliance across all designs.',
    icon: Database,
    features: [
      'IPC-compliant footprints',
      'Symbol standardization',
      '3D model integration',
      'Part lifecycle management',
    ],
  },
  {
    id: 'pcb-layout',
    title: 'PCB Layout Design',
    description: 'Expert PCB layout optimized for signal integrity, manufacturability, and thermal performance.',
    icon: Layout,
    features: [
      'Multi-layer routing',
      'Impedance-controlled traces',
      'EMC/EMI optimization',
      'DFM compliance',
    ],
  },
  {
    id: 'si-pi-thermal',
    title: 'Signal & Power Integrity (SI/PI) & Thermal Analysis',
    description: 'Advanced simulation and analysis ensuring first-time-right designs with zero re-spins.',
    icon: Activity,
    features: [
      'Pre-layout SI/PI simulation',
      'Post-layout verification',
      'Thermal analysis & optimization',
      'Eye diagram analysis',
    ],
  },
  {
    id: 'mechanical-design',
    title: 'Mechanical Design & Integration',
    description: 'Seamless mechanical integration ensuring fit, form, and function alignment.',
    icon: Box,
    features: [
      'Enclosure design',
      '3D CAD integration',
      'Thermal management',
      'Mounting solutions',
    ],
  },
  {
    id: 'fabrication-support',
    title: 'Fabrication Support',
    description: 'End-to-end fabrication support from prototype to production volumes.',
    icon: Factory,
    features: [
      'Fabrication file generation',
      'Vendor coordination',
      'Quality assurance',
      'Process optimization',
    ],
  },
  {
    id: 'component-sourcing',
    title: 'Component Sourcing & Supply Chain',
    description: 'Strategic component sourcing with supply chain risk mitigation.',
    icon: Truck,
    features: [
      'Multi-source qualification',
      'Cost optimization',
      'Lead time management',
      'Obsolescence planning',
    ],
  },
  {
    id: 'pcb-assembly',
    title: 'PCB Assembly & Production Support',
    description: 'Comprehensive assembly support ensuring quality and reliability.',
    icon: Wrench,
    features: [
      'Assembly file preparation',
      'Pick & place optimization',
      'Test fixture design',
      'Production line support',
    ],
  },
  {
    id: 'pcb-bringup',
    title: 'PCB Bring-Up & Validation',
    description: 'Systematic board bring-up and validation ensuring design intent is met.',
    icon: PlayCircle,
    features: [
      'Power sequencing validation',
      'Functional testing',
      'Performance benchmarking',
      'Debug & troubleshooting',
    ],
  },
  {
    id: 'compliance-certification',
    title: 'Industry Compliance & Certification',
    description: 'Navigate regulatory requirements with expert compliance support.',
    icon: Shield,
    features: [
      'CE/FCC pre-compliance',
      'Medical device standards',
      'Automotive certifications',
      'Environmental compliance',
    ],
  },
]
