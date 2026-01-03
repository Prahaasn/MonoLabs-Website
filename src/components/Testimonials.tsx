'use client'

import { motion } from 'framer-motion'
import { stats } from '@/data/features'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-transparent via-mono-green-900/10 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <AnimatedSection className="glass-card p-8 md:p-12">
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
                <div className="text-sm md:text-base text-gray-400">
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
              className="w-12 h-12 text-mono-green-500/30 mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
            </svg>
            <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
              &ldquo;Mono Labs transformed our concept into a production-ready product in record time.
              Their expertise in hardware design and firmware development is exceptional.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-mono-green-500/20 flex items-center justify-center">
                <span className="text-mono-green-400 font-semibold">JD</span>
              </div>
              <div className="text-left">
                <div className="font-medium text-white">John Doe</div>
                <div className="text-sm text-gray-500">CEO, TechStartup Inc.</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Trust badges / Logos placeholder */}
        <AnimatedSection delay={0.4} className="mt-16">
          <p className="text-center text-sm text-gray-500 mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
            {/* Placeholder logos - replace with actual client logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-24 h-8 bg-gray-600 rounded"
                style={{ opacity: 0.5 }}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
