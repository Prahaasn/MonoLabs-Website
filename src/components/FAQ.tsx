'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ChevronDown, Plus, Minus } from 'lucide-react'

const faqs = [
  {
    id: 'what-services',
    question: 'What services does Kubera Systems offer?',
    answer: 'We provide end-to-end electronics product development services including hardware architecture development, schematic design, PCB layout, signal & power integrity analysis, mechanical design integration, fabrication support, component sourcing, PCB assembly, bring-up & validation, and industry compliance certification.',
  },
  {
    id: 'zero-respin',
    question: 'What does "zero design re-spin" mean?',
    answer: 'Our zero design re-spin approach means we get your product right the first time. Through rigorous design reviews, simulation, and validation at every stage, we eliminate costly PCB revisions. This saves you time, money, and accelerates your time-to-market.',
  },
  {
    id: 'industries',
    question: 'Which industries do you serve?',
    answer: 'We serve diverse industries including Healthcare (medical devices, wearables), Automotive (ADAS, EV components), Industrial (automation, IoT sensors), Aerospace (avionics, satellite systems), Defense (rugged electronics, secure communications), and Consumer Electronics (smart devices, connected home products).',
  },
  {
    id: 'project-timeline',
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. A simple design might take 4-8 weeks, while complex multi-board systems can take 3-6 months. We provide detailed project plans with milestones after initial consultation and requirements analysis.',
  },
  {
    id: 'training-programs',
    question: 'Do you offer training programs?',
    answer: 'Yes! We offer comprehensive training programs including FPGA Design Fundamentals, Embedded Systems Bootcamp, PCB Design Masterclass, Firmware Best Practices, and IoT Masterclass. These are available in online, in-person, and hybrid formats.',
  },
  {
    id: 'nda-ip',
    question: 'How do you handle intellectual property and NDAs?',
    answer: 'We take IP protection seriously. We sign NDAs before any project discussion and all designs, documentation, and source code are owned by you. Our secure development environment and strict access controls ensure your IP remains protected.',
  },
  {
    id: 'support-after',
    question: 'Do you provide support after product delivery?',
    answer: 'Absolutely. We offer ongoing support including design modifications, production support, troubleshooting, and maintenance. We build long-term partnerships with our clients to ensure continued product success.',
  },
  {
    id: 'get-started',
    question: 'How do I get started with Kubera Systems?',
    answer: 'Simply reach out through our contact form or email us at info@kubera.com. We\'ll schedule a consultation to understand your requirements, provide a detailed proposal, and create a project plan tailored to your needs.',
  },
]

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-gray-50">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-mono-green-100/30 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and how we can help bring your product to life.
          </p>
        </AnimatedSection>

        {/* FAQ List */}
        <AnimatedSection delay={0.2}>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:border-mono-green-200"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-mono-green-50 border border-mono-green-200 flex items-center justify-center">
                    {openId === faq.id ? (
                      <Minus className="w-4 h-4 text-mono-green-600" />
                    ) : (
                      <Plus className="w-4 h-4 text-mono-green-600" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
