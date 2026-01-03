import { Shield, Zap, Users, Award, Clock, Lightbulb } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export interface Feature {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const features: Feature[] = [
  {
    id: 'expertise',
    title: 'Deep Technical Expertise',
    description: 'Our team brings decades of combined experience in hardware, firmware, and FPGA design across diverse industries.',
    icon: Award,
  },
  {
    id: 'speed',
    title: 'Rapid Turnaround',
    description: 'Agile development processes and parallel workflows to get your product to market faster without compromising quality.',
    icon: Zap,
  },
  {
    id: 'quality',
    title: 'Production-Grade Quality',
    description: 'Every design is optimized for manufacturing, reliability, and long-term maintainability from day one.',
    icon: Shield,
  },
  {
    id: 'collaboration',
    title: 'Collaborative Approach',
    description: 'We work as an extension of your team, maintaining transparent communication and shared ownership of outcomes.',
    icon: Users,
  },
  {
    id: 'support',
    title: 'Lifecycle Support',
    description: 'Long-term partnership with ongoing support throughout your product lifecycle, from prototype to EOL.',
    icon: Clock,
  },
  {
    id: 'innovation',
    title: 'Innovative Solutions',
    description: 'Cutting-edge approaches leveraging the latest technologies to solve your most challenging engineering problems.',
    icon: Lightbulb,
  },
]

export interface ProcessStep {
  id: string
  step: number
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    step: 1,
    title: 'Discovery',
    description: 'Understanding your requirements, constraints, and goals through detailed technical discussions.',
  },
  {
    id: 'design',
    step: 2,
    title: 'Design',
    description: 'Creating schematic designs, PCB layouts, and firmware architecture tailored to your needs.',
  },
  {
    id: 'prototype',
    step: 3,
    title: 'Prototype',
    description: 'Rapid prototyping with iterative testing and refinement to validate the design.',
  },
  {
    id: 'validate',
    step: 4,
    title: 'Validate',
    description: 'Comprehensive testing, certification prep, and final design optimization.',
  },
  {
    id: 'production',
    step: 5,
    title: 'Production',
    description: 'Manufacturing support, quality control, and production transfer assistance.',
  },
]

export interface Stat {
  id: string
  value: string
  label: string
}

export const stats: Stat[] = [
  { id: 'products', value: '50+', label: 'Products Launched' },
  { id: 'experience', value: '10+', label: 'Years Experience' },
  { id: 'satisfaction', value: '100%', label: 'Client Satisfaction' },
  { id: 'engineers', value: '15+', label: 'Expert Engineers' },
]
