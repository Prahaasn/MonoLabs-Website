import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { products, getProductBySlug } from '@/data/products'
import { ArrowLeft, Check, ArrowRight } from 'lucide-react'

// Generate static params for all products
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

// Generate metadata for each product page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return { title: 'Product Not Found' }
  }

  return {
    title: `${product.name} | Kubera Systems`,
    description: product.description,
  }
}

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

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  // Find related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 2)

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-mono-green-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-8 md:py-16 bg-gradient-to-br from-mono-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative aspect-square bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${statusStyles[product.status]}`}>
                  {statusLabels[product.status]}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <p className="text-mono-green-600 font-medium mb-2">{product.tagline}</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="p-4 rounded-xl bg-white border border-gray-200">
                    <div className="text-sm text-gray-500 mb-1">{spec.label}</div>
                    <div className="font-semibold text-gray-900">{spec.value}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link href={product.cta.primary.href} className="btn-primary">
                  {product.cta.primary.text}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link href="#contact" className="btn-secondary">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Features & Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {(product.detailedFeatures || product.features).map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
              >
                <div className="w-6 h-6 rounded-full bg-mono-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-mono-green-600" />
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Technical Specifications
          </h2>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <tbody>
                {product.specs.map((spec, index) => (
                  <tr key={spec.label} className={index !== product.specs.length - 1 ? 'border-b border-gray-100' : ''}>
                    <td className="px-6 py-4 text-gray-600 font-medium w-1/3">{spec.label}</td>
                    <td className="px-6 py-4 text-gray-900">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Related Products
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.slug}`}
                  className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-mono-green-200 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-mono-green-600 transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-mono-green-600 text-sm mb-3">{relatedProduct.tagline}</p>
                  <p className="text-gray-600 text-sm line-clamp-2">{relatedProduct.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-mono-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact our team to discuss your requirements and get a custom quote for the {product.name}.
          </p>
          <Link href="#contact" className="btn-primary">
            Request a Quote
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
