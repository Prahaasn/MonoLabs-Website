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
    description: '20+ years of semiconductor experience delivering complex hardware solutions across multiple industries.',
    icon: Award,
  },
  {
    id: 'zero-respins',
    title: 'Zero Design Re-spins',
    description: 'Our rigorous SI/PI analysis and validation processes ensure first-time-right designs every time.',
    icon: Zap,
  },
  {
    id: 'quality',
    title: 'Production-Grade Quality',
    description: 'Every design optimized for manufacturing with DFM compliance and supply chain considerations built in.',
    icon: Shield,
  },
  {
    id: 'collaboration',
    title: 'Collaborative Approach',
    description: 'We work as an extension of your team, maintaining transparent communication throughout the project.',
    icon: Users,
  },
  {
    id: 'support',
    title: 'End-to-End Support',
    description: 'From concept to manufacturing, we support your product through its entire development lifecycle.',
    icon: Clock,
  },
  {
    id: 'innovation',
    title: 'Industry-Ready Training',
    description: 'Professional upskilling programs bridging the gap between academia and industry requirements.',
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
    id: 'concept',
    step: 1,
    title: 'Concept',
    description: 'Understanding your vision, requirements, and constraints through collaborative discovery.',
  },
  {
    id: 'design',
    step: 2,
    title: 'Design',
    description: 'Architecture development, schematic design, and component selection optimization.',
  },
  {
    id: 'prototype',
    step: 3,
    title: 'Prototype',
    description: 'Rapid PCB prototyping with SI/PI analysis ensuring first-time-right designs.',
  },
  {
    id: 'testing',
    step: 4,
    title: 'Testing',
    description: 'Comprehensive validation, bring-up, and compliance pre-testing.',
  },
  {
    id: 'manufacturing',
    step: 5,
    title: 'Manufacturing',
    description: 'Production support, supply chain setup, and quality assurance.',
  },
  {
    id: 'market',
    step: 6,
    title: 'Market',
    description: 'Ongoing support for product lifecycle and continuous improvement.',
  },
]

export interface Stat {
  id: string
  value: string
  label: string
}

export const stats: Stat[] = [
  { id: 'experience', value: '20+', label: 'Years Experience' },
  { id: 'products', value: '100+', label: 'Products Delivered' },
  { id: 'respins', value: '0', label: 'Design Re-spins' },
  { id: 'domains', value: '6+', label: 'Industry Domains' },
]
