'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Training', href: '#training' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isHidden, setIsHidden] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0

    // Hide navbar when scrolling down, show when scrolling up
    if (latest > previous && latest > 150) {
      setIsHidden(true)
      setIsMobileOpen(false)
    } else {
      setIsHidden(false)
    }

    // Add background when scrolled
    setHasScrolled(latest > 50)
  })

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileOpen])

  const handleNavClick = () => {
    setIsMobileOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          hasScrolled
            ? 'bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm'
            : 'bg-white/80 backdrop-blur-sm'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-50">
              <div className="w-8 h-8 md:w-10 md:h-10">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 4C20 4 8 12 8 22C8 28.627 13.373 34 20 34C26.627 34 32 28.627 32 22C32 12 20 4 20 4Z"
                    fill="url(#logo-gradient)"
                  />
                  <path
                    d="M20 8C20 8 12 14 12 22C12 26.418 15.582 30 20 30C24.418 30 28 26.418 28 22C28 14 20 8 20 8Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M20 12C20 12 15 16 15 21C15 23.761 17.239 26 20 26C22.761 26 25 23.761 25 21C25 16 20 12 20 12Z"
                    fill="url(#logo-gradient)"
                  />
                  <defs>
                    <linearGradient id="logo-gradient" x1="8" y1="4" x2="32" y2="34" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8BC34A" />
                      <stop offset="1" stopColor="#6AAF29" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="font-bold text-lg md:text-xl text-gray-900">
                Kubera<span className="text-mono-green-600">Systems</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-mono-green-600 transition-colors duration-200 text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="btn-primary text-sm"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden z-50 p-2 text-gray-900"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/95 backdrop-blur-lg"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white border-l border-gray-200 flex flex-col shadow-xl"
            >
              <div className="flex-1 flex flex-col justify-center px-8 py-20">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleNavClick}
                      className="block py-4 text-2xl font-medium text-gray-900 hover:text-mono-green-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="mt-8"
                >
                  <Link
                    href="#contact"
                    onClick={handleNavClick}
                    className="btn-primary w-full text-center"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
