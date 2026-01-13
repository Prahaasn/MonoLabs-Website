'use client'

import { motion } from 'framer-motion'
import { stats } from '@/data/features'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <AnimatedSection className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-mono-green-50 to-white border border-mono-green-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonial Quote */}
        <AnimatedSection delay={0.3} className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <svg
              className="w-12 h-12 text-mono-green-300 mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
            </svg>
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
              &ldquo;Kubera Technology transformed our concept into a production-ready product in record time.
              Their zero re-spin approach saved us months of development time and significant costs.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-mono-green-100 flex items-center justify-center">
                <span className="text-mono-green-600 font-semibold">RS</span>
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900">R. Sharma</div>
                <div className="text-sm text-gray-500">CTO, MedTech Innovations</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Industries Tagline */}
        <AnimatedSection delay={0.4} className="mt-16">
          <p className="text-center text-gray-600 font-medium">
            Trusted by companies across Healthcare, Automotive, Industrial, Aerospace, Defense, and Consumer Electronics
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
