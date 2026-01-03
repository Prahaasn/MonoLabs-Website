'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function GlassCard({
  children,
  className = '',
  hover = true,
  onClick,
}: GlassCardProps) {
  if (hover) {
    return (
      <motion.div
        whileHover={{
          scale: 1.02,
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.36), 0 0 30px rgba(139, 195, 74, 0.15)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onClick={onClick}
        className={cn(
          'glass-card p-6 transition-all duration-300',
          onClick && 'cursor-pointer',
          className
        )}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={cn('glass-card p-6', className)}>
      {children}
    </div>
  )
}
