'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { services } from '@/data/services'
import { Send, CheckCircle, Mail, MapPin, Clock } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  service: string
  message: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Build mailto link with form data
    const subject = encodeURIComponent(`New Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || 'Not provided'}\n` +
      `Service Interest: ${formData.service || 'Not specified'}\n\n` +
      `Message:\n${formData.message}`
    )

    // Open mailto link
    window.location.href = `mailto:contact@monolabs.co.in?subject=${subject}&body=${body}`

    // Show success state
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: '',
    })
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-mono-green-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s <span className="text-gradient">Talk</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to start your project? Get in touch and let&apos;s discuss how we can
            help bring your hardware vision to life.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <AnimatedSection direction="right" className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Get in Touch
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Whether you have a question about our services, need a quote for your project,
                  or want to explore training options, we&apos;re here to help.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-mono-green-500/10 border border-mono-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-mono-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <a
                      href="mailto:contact@monolabs.co.in"
                      className="text-white hover:text-mono-green-400 transition-colors"
                    >
                      contact@monolabs.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-mono-green-500/10 border border-mono-green-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-mono-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="text-white">India</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-mono-green-500/10 border border-mono-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-mono-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Response Time</div>
                    <div className="text-white">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <div className="glass-card p-6 md:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-mono-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-mono-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Email Client Opened!
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Please send the email from your mail client. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-mono-green-500/50 focus:ring-1 focus:ring-mono-green-500/50 transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-mono-green-500/50 focus:ring-1 focus:ring-mono-green-500/50 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-mono-green-500/50 focus:ring-1 focus:ring-mono-green-500/50 transition-all"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-mono-green-500/50 focus:ring-1 focus:ring-mono-green-500/50 transition-all appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '1.5em',
                          }}
                        >
                          <option value="" className="bg-mono-dark">Select a service</option>
                          {services.map((service) => (
                            <option
                              key={service.id}
                              value={service.id}
                              className="bg-mono-dark"
                            >
                              {service.title}
                            </option>
                          ))}
                          <option value="training" className="bg-mono-dark">Training</option>
                          <option value="other" className="bg-mono-dark">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-mono-green-500/50 focus:ring-1 focus:ring-mono-green-500/50 transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full md:w-auto"
                    >
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
