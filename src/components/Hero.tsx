'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Phone } from 'lucide-react'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  }

  const processSteps = ['Concept', 'Design', 'Prototype', 'Testing', 'Manufacturing', 'Market']

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Subtle gradient orbs for light theme */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary orb */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-mono-green-100/50 rounded-full blur-[120px]" />
        {/* Secondary orb */}
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-mono-green-50/60 rounded-full blur-[100px]" />
      </motion.div>

      {/* Subtle circuit pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234E8C17' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mono-green-50 border border-mono-green-200 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-mono-green-500 animate-pulse" />
          <span className="text-sm text-mono-green-700 font-medium">
            20+ Years of Engineering Excellence
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900"
        >
          ENGINEERING THE FUTURE.
          <br />
          <span className="text-gradient">TODAY.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Accelerating Ideas into Scalable Electronics. 20+ years of expertise delivering
          end-to-end electronics product development—from concept to manufacturing-ready solution.
        </motion.p>

        {/* Process Flow Animation */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mt-10 flex flex-wrap justify-center items-center gap-2 md:gap-4"
        >
          {processSteps.map((step, index) => (
            <div key={step} className="flex items-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="px-3 py-1.5 md:px-4 md:py-2 bg-white border border-gray-200 rounded-full text-sm md:text-base font-medium text-gray-700 shadow-sm hover:border-mono-green-300 hover:text-mono-green-700 transition-colors"
              >
                {step}
              </motion.span>
              {index < processSteps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-mono-green-500 mx-1 hidden md:block" />
              )}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="#contact" className="btn-primary group">
            Get Started
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#contact" className="btn-secondary group">
            <Phone className="mr-2 w-4 h-4" />
            Talk to Us
          </Link>
        </motion.div>

        {/* Stats preview */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: '20+', label: 'Years Experience' },
            { value: '100+', label: 'Products Delivered' },
            { value: '0', label: 'Design Re-spins' },
            { value: '6+', label: 'Industry Domains' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-mono-green-600">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
