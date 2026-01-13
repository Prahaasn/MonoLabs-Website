'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Eye, Target } from 'lucide-react'

export function VisionMission() {
  return (
    <section className="relative py-24 md:py-32 bg-gray-50">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-mono-green-100/40 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Our <span className="text-gradient">Purpose</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Driving innovation through engineering excellence and empowering the next generation of hardware professionals.
          </p>
        </AnimatedSection>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="h-full p-8 md:p-10 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-mono-green-200 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-mono-green-50 border border-mono-green-200 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-mono-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To create a strong and future-ready engineering workforce by bridging the gap between
                academia and industry, empowering professionals with practical skills and industry
                knowledge to drive technological innovation.
              </p>
            </div>
          </AnimatedSection>

          {/* Mission Card */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="h-full p-8 md:p-10 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-mono-green-200 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-mono-green-50 border border-mono-green-200 flex items-center justify-center">
                  <Target className="w-7 h-7 text-mono-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To deliver end-to-end electronics product development services—from concept to
                production—while upskilling engineers through industry-aligned training programs,
                ensuring zero design re-spins and 100% production-ready outcomes.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
