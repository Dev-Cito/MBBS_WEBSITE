import { useEffect, useRef, useState } from 'react'
import { Globe, GraduationCap, Star, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { COUNTRY_STATS_HERO_STATS } from '../../data/countryStats'
import type { CountryStatsStat } from '../../types'

const ICONS = {
  graduation: GraduationCap,
  globe: Globe,
  users: Users,
  star: Star,
} as const

function AnimatedNumber({ value }: { value: string }) {
  const [displayed, setDisplayed] = useState('0')
  const { ref, inView } = useInView<HTMLSpanElement>({ once: true })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    const match = value.match(/^(\d+)(.*)$/)
    if (!match) {
      setDisplayed(value)
      return
    }

    const target = parseInt(match[1], 10)
    const suffix = match[2]
    const duration = 1800
    const step = 16
    const increment = target / (duration / step)
    let current = 0

    const interval = setInterval(() => {
      current = Math.min(current + increment, target)
      setDisplayed(`${Math.round(current)}${suffix}`)
      if (current >= target) clearInterval(interval)
    }, step)

    return () => clearInterval(interval)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {displayed || value}
    </span>
  )
}

function StatIcon({
  icon,
  size = 'md',
}: {
  icon: CountryStatsStat['icon']
  size?: 'md' | 'lg'
}) {
  const Icon = ICONS[icon]
  const isLg = size === 'lg'
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-[#E8EDF7] text-[#01236A] ${
        isLg ? 'h-12 w-12' : 'h-11 w-11'
      }`}
    >
      <Icon size={isLg ? 22 : 20} strokeWidth={1.75} aria-hidden />
    </span>
  )
}

function MobileStatCard({
  stat,
  index,
  inView,
}: {
  stat: CountryStatsStat
  index: number
  inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white px-3 py-6 text-center shadow-[0_8px_28px_rgba(1,35,106,0.1)]"
    >
      <StatIcon icon={stat.icon} size="lg" />
      <p className="mt-4 text-2xl font-bold tracking-tight text-[#01236A]">
        <AnimatedNumber value={stat.value} />
      </p>

      <p className="mt-1 text-xs leading-snug font-medium text-[#01236A]/70">{stat.label}</p>
      <span className="mt-4 h-1 w-10 rounded-full bg-[#01236A]" aria-hidden />
    </motion.div>
  )
}

export default function CountryStatsStatsBar() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className="relative z-20 mx-auto -mt-14 w-full max-w-7xl px-4 sm:-mt-16 lg:px-0"
    >
      {/* Mobile: 2×2 card grid */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
        className="grid grid-cols-2 gap-3 lg:hidden"
      >
        {COUNTRY_STATS_HERO_STATS.map((stat, i) => (
          <MobileStatCard key={stat.label} stat={stat} index={i} inView={inView} />
        ))}
      </motion.div>

      {/* Desktop: single stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
        className="hidden rounded-2xl border border-gray-100 bg-white px-8 py-10 shadow-[0_16px_48px_rgba(1,35,106,0.12)] lg:block"
      >
        <div className="grid grid-cols-4 gap-0 divide-x divide-gray-100">
          {COUNTRY_STATS_HERO_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex items-center gap-4 px-5 xl:px-7"
            >
              <StatIcon icon={stat.icon} />
              <motion.div className="min-w-0 text-left">
                <p className="text-3xl font-bold tracking-tight text-[#01236A]">
                  <AnimatedNumber value={stat.value} />
                </p>

                <p className="mt-0.5 text-sm font-medium text-[#01236A]/70">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
