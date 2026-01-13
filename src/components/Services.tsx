'use client'

import { motion } from 'framer-motion'
import { services } from '@/data/services'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer'

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-white">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-mono-green-100/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive electronics product development services, from hardware architecture
            through production support.
          </p>
        </AnimatedSection>

        {/* Services Grid - show first 6 on homepage, link to full services page */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => (
            <StaggerItem key={service.id}>
              <div className="h-full p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-mono-green-200 transition-all duration-300 group">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-mono-green-50 border border-mono-green-200 flex items-center justify-center mb-4 group-hover:bg-mono-green-100 group-hover:border-mono-green-300 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-mono-green-600" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-500"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-mono-green-500 mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Services Link */}
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            And {services.length - 6} more services including fabrication, assembly, and compliance support
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-mono-green-600 hover:text-mono-green-700 font-medium transition-colors"
          >
            Discuss your project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
