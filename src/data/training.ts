import { Cpu, Code, CircuitBoard, Shield } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export interface TrainingCourse {
  id: string
  title: string
  description: string
  duration: string
  level: 'beginner' | 'intermediate' | 'advanced'
  format: ('online' | 'in-person' | 'hybrid')[]
  topics: string[]
  icon: LucideIcon
}

export const trainingCourses: TrainingCourse[] = [
  {
    id: 'fpga-fundamentals',
    title: 'FPGA Design Fundamentals',
    description: 'Master the fundamentals of FPGA architecture, Verilog/VHDL programming, and digital design principles.',
    duration: '40 hours',
    level: 'beginner',
    format: ['online', 'in-person'],
    topics: ['FPGA Architecture', 'Verilog HDL', 'Synthesis & Timing', 'Testbench Development'],
    icon: Cpu,
  },
  {
    id: 'embedded-systems',
    title: 'Embedded Systems Bootcamp',
    description: 'Build robust embedded systems with ARM Cortex microcontrollers, RTOS, and peripheral interfaces.',
    duration: '60 hours',
    level: 'intermediate',
    format: ['online', 'hybrid'],
    topics: ['ARM Architecture', 'RTOS Concepts', 'Driver Development', 'Power Management'],
    icon: CircuitBoard,
  },
  {
    id: 'pcb-design',
    title: 'PCB Design Masterclass',
    description: 'Design production-ready PCBs with industry best practices for signal integrity and manufacturing.',
    duration: '32 hours',
    level: 'intermediate',
    format: ['online', 'in-person'],
    topics: ['Schematic Capture', 'Layout Techniques', 'Signal Integrity', 'DFM Guidelines'],
    icon: CircuitBoard,
  },
  {
    id: 'firmware-best-practices',
    title: 'Firmware Best Practices',
    description: 'Write maintainable, testable, and secure firmware code following industry standards.',
    duration: '24 hours',
    level: 'advanced',
    format: ['online'],
    topics: ['Code Architecture', 'Unit Testing', 'Security', 'OTA Updates'],
    icon: Code,
  },
]

export interface FormatOption {
  id: 'online' | 'in-person' | 'hybrid'
  label: string
  description: string
}

export const formatOptions: FormatOption[] = [
  { id: 'online', label: 'Online', description: 'Self-paced with live Q&A sessions' },
  { id: 'in-person', label: 'In-Person', description: 'Hands-on workshops at our lab' },
  { id: 'hybrid', label: 'Hybrid', description: 'Combination of online and in-person' },
]

export const levelColors = {
  beginner: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  intermediate: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  advanced: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
}
