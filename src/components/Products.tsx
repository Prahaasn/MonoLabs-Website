'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { products, Product } from '@/data/products'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer'
import { ArrowRight, Package } from 'lucide-react'

const statusStyles = {
  'available': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'coming-soon': 'bg-amber-50 text-amber-700 border-amber-200',
  'pre-order': 'bg-blue-50 text-blue-700 border-blue-200',
}

const statusLabels = {
  'available': 'Available Now',
  'coming-soon': 'Coming Soon',
  'pre-order': 'Pre-Order',
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="h-full flex flex-col overflow-hidden group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:border-mono-green-200 transition-all duration-300">
      {/* Product Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-mono-green-50 to-gray-50 rounded-lg mb-4 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Status Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[product.status]}`}>
            {statusLabels[product.status]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {product.name}
        </h3>
        <p className="text-mono-green-600 text-sm mb-3">
          {product.tagline}
        </p>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Specs preview */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {product.specs.slice(0, 4).map((spec) => (
            <div key={spec.label} className="text-xs">
              <span className="text-gray-500">{spec.label}:</span>
              <span className="text-gray-700 ml-1">{spec.value}</span>
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
    </div>
  )
}

export function Products() {
  return (
    <section id="products" className="relative py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready-to-deploy hardware platforms and custom solutions
            designed for your specific application requirements.
          </p>
        </AnimatedSection>

        {/* Products Grid */}
        {products.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <AnimatedSection className="text-center py-16">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">
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
