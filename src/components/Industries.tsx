'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer'
import { Heart, Car, Factory, Plane, Shield, Smartphone } from 'lucide-react'

const industries = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Medical devices, wearables, and diagnostic equipment with regulatory compliance.',
    icon: Heart,
  },
  {
    id: 'automotive',
    title: 'Automotive',
    description: 'Advanced driver assistance systems, EV components, and infotainment solutions.',
    icon: Car,
  },
  {
    id: 'industrial',
    title: 'Industrial',
    description: 'Automation systems, IoT sensors, and industrial control electronics.',
    icon: Factory,
  },
  {
    id: 'aerospace',
    title: 'Aerospace',
    description: 'Avionics, satellite systems, and high-reliability flight electronics.',
    icon: Plane,
  },
  {
    id: 'defense',
    title: 'Defense',
    description: 'Rugged electronics, secure communications, and mission-critical systems.',
    icon: Shield,
  },
  {
    id: 'consumer',
    title: 'Consumer Electronics',
    description: 'Smart devices, wearables, and connected home products.',
    icon: Smartphone,
  },
]

export function Industries() {
  return (
    <section className="relative py-24 md:py-32 bg-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-mono-green-50/50 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering specialized hardware solutions across diverse sectors with deep domain expertise.
          </p>
        </AnimatedSection>

        {/* Industries Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <StaggerItem key={industry.id}>
              <div className="group h-full p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-mono-green-200 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-mono-green-50 border border-mono-green-200 flex items-center justify-center flex-shrink-0 group-hover:bg-mono-green-100 transition-colors">
                    <industry.icon className="w-6 h-6 text-mono-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don&apos;t see your industry? We adapt our expertise to your unique requirements.
          </p>
          <a href="#contact" className="btn-secondary">
            Discuss Your Project
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
