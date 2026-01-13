'use client'

import { motion } from 'framer-motion'
import { processSteps } from '@/data/features'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Search, Pencil, Cpu, CheckCircle, Factory, Rocket } from 'lucide-react'

const stepIcons = [Search, Pencil, Cpu, CheckCircle, Factory, Rocket]

export function Process() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mono-green-50/50 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven process that takes your idea from concept to production-ready product.
          </p>
        </AnimatedSection>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-mono-green-300 to-transparent" />

            <div className="grid grid-cols-6 gap-4">
              {processSteps.map((step, index) => {
                const Icon = stepIcons[index]
                return (
                  <AnimatedSection
                    key={step.id}
                    delay={index * 0.15}
                    className="relative"
                  >
                    {/* Step number and icon */}
                    <div className="flex flex-col items-center mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-24 h-24 rounded-full bg-white border-2 border-mono-green-200 shadow-lg flex items-center justify-center relative z-10"
                      >
                        <div className="w-16 h-16 rounded-full bg-mono-green-50 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-mono-green-600" />
                        </div>
                        {/* Step number badge */}
                        <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-mono-green-600 text-white font-bold text-sm flex items-center justify-center">
                          {step.step}
                        </span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="text-center px-2">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile/Tablet */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-mono-green-300 via-mono-green-200 to-transparent" />

            <div className="space-y-8">
              {processSteps.map((step, index) => {
                const Icon = stepIcons[index]
                return (
                  <AnimatedSection
                    key={step.id}
                    delay={index * 0.1}
                    direction="right"
                    className="relative pl-16"
                  >
                    {/* Icon */}
                    <div className="absolute left-0 top-0">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-mono-green-200 shadow-md flex items-center justify-center">
                        <Icon className="w-5 h-5 text-mono-green-600" />
                      </div>
                      {/* Step number badge */}
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-mono-green-600 text-white font-bold text-xs flex items-center justify-center">
                        {step.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.5} className="text-center mt-16">
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
