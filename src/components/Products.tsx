'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { products, Product } from '@/data/products'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer'
import { GlassCard } from '@/components/ui/GlassCard'
import { ArrowRight, Package } from 'lucide-react'

const statusStyles = {
  'available': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'coming-soon': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  'pre-order': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
}

const statusLabels = {
  'available': 'Available Now',
  'coming-soon': 'Coming Soon',
  'pre-order': 'Pre-Order',
}

function ProductCard({ product }: { product: Product }) {
  return (
    <GlassCard className="h-full flex flex-col overflow-hidden group">
      {/* Product Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-mono-green-900/20 to-mono-dark rounded-lg mb-4 overflow-hidden">
        {/* Placeholder SVG for product */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 200 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3/4 h-3/4 opacity-60 group-hover:opacity-80 transition-opacity"
          >
            {/* PCB Board outline */}
            <rect x="20" y="20" width="160" height="110" rx="4" stroke="#8BC34A" strokeWidth="2" fill="none" />
            {/* Circuit traces */}
            <path d="M40 50 H80 V70 H120" stroke="#6AAF29" strokeWidth="1.5" fill="none" />
            <path d="M40 80 H60 V100 H140" stroke="#6AAF29" strokeWidth="1.5" fill="none" />
            <path d="M160 50 H140 V90 H100" stroke="#6AAF29" strokeWidth="1.5" fill="none" />
            {/* Chips */}
            <rect x="85" y="55" width="30" height="20" rx="2" fill="#3D6B12" stroke="#8BC34A" strokeWidth="1" />
            <rect x="45" y="85" width="20" height="15" rx="1" fill="#3D6B12" stroke="#6AAF29" strokeWidth="1" />
            <rect x="130" y="70" width="25" height="18" rx="2" fill="#3D6B12" stroke="#8BC34A" strokeWidth="1" />
            {/* Capacitors/components */}
            <circle cx="50" cy="50" r="4" fill="#8BC34A" />
            <circle cx="150" cy="50" r="4" fill="#8BC34A" />
            <circle cx="50" cy="110" r="3" fill="#6AAF29" />
            <circle cx="150" cy="110" r="3" fill="#6AAF29" />
            {/* USB connector */}
            <rect x="90" y="120" width="20" height="10" fill="#4E8C17" />
            {/* LEDs */}
            <circle cx="35" cy="35" r="2" fill="#8BC34A" className="animate-pulse" />
            <circle cx="165" cy="35" r="2" fill="#6AAF29" />
          </svg>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[product.status]}`}>
            {statusLabels[product.status]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-white mb-1">
          {product.name}
        </h3>
        <p className="text-mono-green-400 text-sm mb-3">
          {product.tagline}
        </p>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Specs preview */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {product.specs.slice(0, 4).map((spec) => (
            <div key={spec.label} className="text-xs">
              <span className="text-gray-500">{spec.label}:</span>
              <span className="text-gray-300 ml-1">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex gap-3 mt-auto">
          <Link
            href={product.cta.primary.href}
            className="btn-primary text-sm flex-1 justify-center"
          >
            {product.cta.primary.text}
          </Link>
          {product.cta.secondary && (
            <Link
              href={product.cta.secondary.href}
              className="btn-secondary text-sm"
            >
              {product.cta.secondary.text}
            </Link>
          )}
        </div>
      </div>
    </GlassCard>
  )
}

export function Products() {
  return (
    <section id="products" className="relative py-24 md:py-32 bg-gradient-to-b from-transparent via-mono-green-900/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Development kits and tools designed by engineers, for engineers.
            Built to accelerate your prototyping and development process.
          </p>
        </AnimatedSection>

        {/* Products Grid */}
        {products.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}

            {/* Coming Soon Placeholder */}
            <StaggerItem>
              <div className="h-full glass-card p-6 flex flex-col items-center justify-center text-center min-h-[400px] border-dashed border-2 border-white/10">
                <Package className="w-12 h-12 text-gray-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-400 mb-2">
                  More Products Coming
                </h3>
                <p className="text-sm text-gray-500 max-w-xs">
                  We&apos;re working on new development tools and modules.
                  Stay tuned for updates.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        ) : (
          <AnimatedSection className="text-center py-16">
            <Package className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-400 mb-2">
              Products Coming Soon
            </h3>
            <p className="text-gray-500">
              We&apos;re preparing our product lineup. Check back soon!
            </p>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
