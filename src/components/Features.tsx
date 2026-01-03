'use client'

import { features } from '@/data/features'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer'

export function Features() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-gradient-to-b from-transparent via-mono-green-900/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Mono Labs</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We combine deep technical expertise with a collaborative approach
            to deliver exceptional results for every project.
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <StaggerItem key={feature.id}>
              <div className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-mono-green-500/20 transition-all duration-300">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-mono-green-500/0 via-mono-green-500/5 to-mono-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-mono-green-500/10 border border-mono-green-500/20 flex items-center justify-center mb-5 group-hover:bg-mono-green-500/20 group-hover:border-mono-green-500/40 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-mono-green-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
