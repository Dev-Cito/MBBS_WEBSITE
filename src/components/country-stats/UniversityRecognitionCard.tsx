import {
  Building2,
  Award,
  FileText,
  Globe,
  MoreHorizontal,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { UNIVERSITY_RECOGNITION } from '../../data/countryStats'
import type { RecognitionSegment } from '../../types'

const TOTAL_UNIVERSITIES = UNIVERSITY_RECOGNITION.reduce((sum, item) => sum + item.count, 0)

const RECOGNITION_ICONS: Record<string, LucideIcon> = {
  'NMC Approved': ShieldCheck,
  'WHO Recognized': Globe,
  'FAIMER Listed': FileText,
  'Other Recognitions': MoreHorizontal,
}

function DonutChart({ size = 160, stroke = 28 }: { size?: number; stroke?: number }) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  let offset = 0

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="shrink-0 -rotate-90"
      role="img"
      aria-label="University recognition breakdown"
    >
      {UNIVERSITY_RECOGNITION.map((segment) => {
        const dash = (segment.percentage / 100) * circumference
        const circle = (
          <circle
            key={segment.label}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={segment.color}
            strokeWidth={stroke}
            strokeDasharray={`${dash} ${circumference - dash}`}
            strokeDashoffset={-offset}
            strokeLinecap="butt"
          />
        )
        offset += dash
        return circle
      })}
    </svg>
  )
}

function DonutWithCenter({ size, stroke }: { size: number; stroke: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <DonutChart size={size} stroke={stroke} />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center sm:px-4">
        <span
          className={`mb-1 flex items-center justify-center rounded-full bg-[#E8EDF7] text-[#2B7FE8] ${
            size >= 200 ? 'h-8 w-8' : 'h-7 w-7'
          }`}
        >
          <Award size={size >= 200 ? 16 : 14} strokeWidth={2} aria-hidden />
        </span>
        <p
          className={`font-bold tracking-tight text-[#01236A] ${
            size >= 200 ? 'text-3xl' : 'text-2xl'
          }`}
        >
          {TOTAL_UNIVERSITIES}+
        </p>
      </div>
    </div>
  )
}

function MobileRecognitionRow({
  item,
  index,
  inView,
}: {
  item: RecognitionSegment
  index: number
  inView: boolean
}) {
  const Icon = RECOGNITION_ICONS[item.label] ?? MoreHorizontal

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
      className="flex overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_1px_6px_rgba(1,35,106,0.06)]"
    >
      <span
        className="w-1 shrink-0"
        style={{ backgroundColor: item.color }}
        aria-hidden
      />
      <div className="flex min-w-0 flex-1 items-center gap-3 px-3 py-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
          style={{ backgroundColor: item.color }}
        >
          <Icon size={18} strokeWidth={2} aria-hidden />
        </span>
        <div className="min-w-0 shrink-0">
          <p className="text-sm font-bold text-[#01236A]">{item.label}</p>
          <p className="text-xs text-gray-500">{item.count} Universities</p>
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span
            className="min-w-[1rem] flex-1 border-b border-dotted border-gray-300"
            aria-hidden
          />
          <span className="shrink-0 text-sm font-bold" style={{ color: item.color }}>
            {item.percentage}%
          </span>
        </div>
      </div>
    </motion.li>
  )
}

export default function UniversityRecognitionCard() {
  const { ref, inView } = useInView({ threshold: 0.15 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
      className="flex h-full w-full flex-col rounded-2xl border border-gray-300 bg-white p-6 sm:p-7"
    >
      <header className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#01236A] sm:text-2xl">University Recognition</h2>
          <p className="mt-1 text-sm text-gray-500">Recognition status by major organizations</p>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8EDF7] text-[#01236A] sm:hidden">
          <Building2 size={20} strokeWidth={1.75} aria-hidden />
        </span>
      </header>

      {/* Mobile */}
      <div className="flex flex-1 flex-col gap-6 sm:hidden">
        <div className="flex justify-center">
          <DonutWithCenter size={200} stroke={32} />
        </div>

        <ul className="space-y-3">
          {UNIVERSITY_RECOGNITION.map((item, i) => (
            <MobileRecognitionRow key={item.label} item={item} index={i} inView={inView} />
          ))}
        </ul>
      </div>

      {/* Desktop */}
      <motion.div className="hidden flex-1 flex-col items-center justify-center gap-8 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-10">
        <DonutWithCenter size={160} stroke={28} />

        <ul className="w-full min-w-0 flex-1 space-y-5 sm:max-w-md">
          {UNIVERSITY_RECOGNITION.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: 12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              className="flex items-center gap-3"
            >
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: item.color }}
                aria-hidden
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-sm font-bold text-[#01236A] sm:text-base">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-[#01236A] sm:text-base">
                    {item.percentage}%
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-normal text-[#01236A]/55">
                  ({item.count} Universities)
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.article>
  )
}
