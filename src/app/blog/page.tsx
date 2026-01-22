'use client'

import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 'pcb-design-best-practices-2024',
    title: 'PCB Design Best Practices for High-Speed Applications',
    excerpt: 'Learn the essential techniques for designing PCBs that handle high-speed signals with minimal interference and optimal signal integrity.',
    category: 'PCB Design',
    date: '2024-01-15',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 'fpga-vs-asic',
    title: 'FPGA vs ASIC: Making the Right Choice for Your Project',
    excerpt: 'A comprehensive comparison of FPGA and ASIC solutions to help you decide which technology best fits your product requirements.',
    category: 'Hardware',
    date: '2024-01-10',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 'iot-security-fundamentals',
    title: 'IoT Security Fundamentals Every Engineer Should Know',
    excerpt: 'Explore the critical security considerations when designing IoT devices, from secure boot to encrypted communications.',
    category: 'IoT',
    date: '2024-01-05',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'signal-integrity-analysis',
    title: 'Signal Integrity Analysis: Tools and Techniques',
    excerpt: 'Deep dive into signal integrity analysis methods and the tools that help ensure your designs meet performance requirements.',
    category: 'Signal Integrity',
    date: '2023-12-28',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 'embedded-rtos-selection',
    title: 'Choosing the Right RTOS for Embedded Systems',
    excerpt: 'Compare popular real-time operating systems and learn how to select the best one for your embedded application.',
    category: 'Embedded',
    date: '2023-12-20',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'power-integrity-basics',
    title: 'Power Integrity: Designing Robust Power Distribution Networks',
    excerpt: 'Master the fundamentals of power integrity and learn how to design PDNs that ensure stable power delivery to your ICs.',
    category: 'Power',
    date: '2023-12-15',
    readTime: '8 min read',
    featured: false,
  },
]

const categories = ['All', 'PCB Design', 'Hardware', 'IoT', 'Embedded', 'Signal Integrity', 'Power']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gray-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-mono-green-100/40 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Insights & <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Technical articles, industry insights, and best practices from our engineering team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === 'All'
                    ? 'bg-mono-green-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-mono-green-50 hover:text-mono-green-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Posts */}
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="group block p-6 rounded-2xl bg-white border border-gray-200 hover:border-mono-green-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-mono-green-50 text-mono-green-700 text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">Featured</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-mono-green-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-mono-green-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
            </div>
          </AnimatedSection>

          {/* All Posts */}
          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <StaggerItem key={post.id}>
                  <Link
                    href={`/blog/${post.id}`}
                    className="group block h-full p-6 rounded-2xl bg-white border border-gray-200 hover:border-mono-green-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-mono-green-500" />
                      <span className="text-mono-green-600 text-sm font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-mono-green-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-auto">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedSection>

          {/* Newsletter CTA */}
          <AnimatedSection delay={0.3} className="mt-16">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-mono-green-50 to-white border border-mono-green-100 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Subscribe to our newsletter for the latest articles, industry insights, and technical resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-mono-green-500 focus:ring-1 focus:ring-mono-green-500"
                />
                <button className="btn-primary whitespace-nowrap">Subscribe</button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
