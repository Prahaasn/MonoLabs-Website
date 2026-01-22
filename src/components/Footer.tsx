'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Hardware Architecture', href: '#services' },
    { name: 'PCB Layout Design', href: '#services' },
    { name: 'SI/PI Analysis', href: '#services' },
    { name: 'Compliance & Certification', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Training', href: '#training' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ],
  resources: [
    { name: 'Insights', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Support', href: '#contact' },
  ],
}

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:info@kubera.com' },
]

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 4C20 4 8 12 8 22C8 28.627 13.373 34 20 34C26.627 34 32 28.627 32 22C32 12 20 4 20 4Z"
                    fill="url(#footer-logo-gradient)"
                  />
                  <path
                    d="M20 8C20 8 12 14 12 22C12 26.418 15.582 30 20 30C24.418 30 28 26.418 28 22C28 14 20 8 20 8Z"
                    fill="#f9fafb"
                  />
                  <path
                    d="M20 12C20 12 15 16 15 21C15 23.761 17.239 26 20 26C22.761 26 25 23.761 25 21C25 16 20 12 20 12Z"
                    fill="url(#footer-logo-gradient)"
                  />
                  <defs>
                    <linearGradient id="footer-logo-gradient" x1="8" y1="4" x2="32" y2="34" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8BC34A" />
                      <stop offset="1" stopColor="#6AAF29" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="font-bold text-lg text-gray-900">
                Kubera<span className="text-mono-green-600">Systems</span>
              </span>
            </Link>
            <p className="text-gray-600 text-sm mb-6 max-w-xs">
              Accelerating ideas into scalable electronics. 20+ years of expertise in end-to-end product development with zero design re-spins.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white hover:bg-mono-green-50 border border-gray-200 hover:border-mono-green-300 flex items-center justify-center text-gray-500 hover:text-mono-green-600 transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-mono-green-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-mono-green-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-mono-green-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Kubera Systems. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-700 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
