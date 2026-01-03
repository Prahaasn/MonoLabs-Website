'use client'

import { trainingCourses, formatOptions, levelColors } from '@/data/training'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer'
import { GlassCard } from '@/components/ui/GlassCard'
import { Clock, Users, Monitor, Building } from 'lucide-react'

const formatIcons = {
  online: Monitor,
  'in-person': Building,
  hybrid: Users,
}

export function Training() {
  return (
    <section id="training" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-mono-green-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Training</span> Programs
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Level up your team&apos;s hardware skills with our expert-led training programs.
            From FPGA fundamentals to advanced firmware development.
          </p>
        </AnimatedSection>

        {/* Courses Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trainingCourses.map((course) => (
            <StaggerItem key={course.id}>
              <GlassCard className="h-full flex flex-col">
                {/* Icon and Level */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-mono-green-500/10 border border-mono-green-500/20 flex items-center justify-center">
                    <course.icon className="w-6 h-6 text-mono-green-400" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${levelColors[course.level]}`}>
                    {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                  {course.description}
                </p>

                {/* Duration */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-400"
                    >
                      {topic}
                    </span>
                  ))}
                  {course.topics.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500">
                      +{course.topics.length - 3} more
                    </span>
                  )}
                </div>

                {/* Format badges */}
                <div className="flex gap-2 mt-auto">
                  {course.format.map((format) => {
                    const Icon = formatIcons[format]
                    return (
                      <div
                        key={format}
                        className="flex items-center gap-1 text-xs text-gray-500"
                        title={formatOptions.find(f => f.id === format)?.description}
                      >
                        <Icon className="w-3 h-3" />
                        <span className="capitalize">{format}</span>
                      </div>
                    )
                  })}
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Format Options */}
        <AnimatedSection delay={0.3}>
          <div className="glass-card p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Flexible Learning Options
              </h3>
              <p className="text-gray-400">
                Choose the format that works best for your team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {formatOptions.map((option) => {
                const Icon = formatIcons[option.id]
                return (
                  <div
                    key={option.id}
                    className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-mono-green-500/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-mono-green-500/10 border border-mono-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-mono-green-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">{option.label}</h4>
                    <p className="text-sm text-gray-400">{option.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-8">
              <a href="#contact" className="btn-primary">
                Request Custom Training
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
