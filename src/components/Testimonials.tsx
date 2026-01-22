'use client'

import { motion } from 'framer-motion'
import { stats } from '@/data/features'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer'
import { Quote } from 'lucide-react'

const clients = [
  {
    id: 'seloriz',
    company: 'Seloriz',
    website: 'www.seloriz.com',
    contact: 'Muttanna K',
    role: 'Founder',
    quote: 'Kubera Systems delivered exceptional hardware solutions that exceeded our expectations. Their attention to detail and technical expertise made our product vision a reality.',
    initials: 'MK',
  },
  {
    id: 'semicongate',
    company: 'Semicongate',
    website: 'semicongate.com',
    contact: 'Technical Team',
    role: 'Engineering Partner',
    quote: 'Working with Kubera Systems has been transformative for our electronics development. Their zero re-spin approach saved us significant time and resources.',
    initials: 'SC',
  },
  {
    id: 'qbnox',
    company: 'Qbnox Systems',
    website: '',
    contact: 'Ugen',
    role: 'Director',
    quote: 'The team at Kubera Systems combines deep technical knowledge with a collaborative approach. They delivered our complex hardware project on time with outstanding quality.',
    initials: 'QS',
  },
]

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

        {/* Section Header */}
        <AnimatedSection delay={0.2} className="mt-20 text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Trusted By <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Companies across diverse sectors trust Kubera Systems for their electronics product development needs.
          </p>
        </AnimatedSection>

        {/* Client Testimonials Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clients.map((client) => (
            <StaggerItem key={client.id}>
              <div className="h-full p-6 rounded-2xl bg-white border border-gray-200 hover:border-mono-green-200 hover:shadow-lg transition-all duration-300">
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-lg bg-mono-green-50 border border-mono-green-200 flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-mono-green-600" />
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-6">
                  &ldquo;{client.quote}&rdquo;
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-mono-green-100 flex items-center justify-center">
                    <span className="text-mono-green-700 font-semibold text-sm">{client.initials}</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{client.contact}</div>
                    <div className="text-sm text-gray-500">
                      {client.role}, {client.company}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Industries Tagline */}
        <AnimatedSection delay={0.4} className="mt-12">
          <p className="text-center text-gray-600 font-medium">
            Delivering excellence across Healthcare, Automotive, Industrial, Aerospace, Defense, and Consumer Electronics
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
