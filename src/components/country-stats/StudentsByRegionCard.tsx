import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { STUDENT_REGIONS, TOTAL_STUDENTS_LABEL } from '../../data/countryStats'
import type { StudentRegion } from '../../types'
import Globe3D from '../globe/Globe3D'

const GLOBE_LAYOUT_SM = { canvasPx: 250, framePaddingPx: 22 }
const GLOBE_LAYOUT_LG = { canvasPx: 360, framePaddingPx: 28 }

const GLOBE_RING_GAP_PX = 25
const CONNECTOR_DOT = '2 6'

const REGION_PLACEMENT = [
  { boxClass: 'left-0 top-1/2 -translate-y-1/2 sm:left-1' },
  { boxClass: 'right-2 top-[12%] sm:right-3' },
  { boxClass: 'right-0 top-[44%] -translate-y-1/2' },
  { boxClass: 'right-2 bottom-[10%] sm:right-3' },
] as const

type ConnectorLine = { x1: number; y1: number; x2: number; y2: number; color: string }

interface StudentsByRegionCardProps {
  activeCountryId: string
}

function MobileRegionRow({
  region,
  index,
  inView,
}: {
  region: StudentRegion
  index: number
  inView: boolean
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.12 + index * 0.06 }}
      className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-white px-3 py-3 shadow-[0_1px_6px_rgba(1,35,106,0.06)]"
    >
      <span className="flex w-[7.25rem] shrink-0 items-center gap-2">
        <span
          className="h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ backgroundColor: region.color }}
          aria-hidden
        />
        <span className="truncate text-xs font-medium text-[#01236A]">{region.label}</span>
      </span>

      <motion.div
        className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-gray-100"
        role="presentation"
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: region.color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${region.percentage}%` } : { width: 0 }}
          transition={{ duration: 0.55, delay: 0.18 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      <span className="w-9 shrink-0 text-right text-sm font-bold text-[#01236A]">
        {region.percentage}%
      </span>
    </motion.li>
  )
}

const RegionStatBox = forwardRef<
  HTMLDivElement,
  { region: StudentRegion; index: number; inView: boolean; className?: string }
>(function RegionStatBox({ region, index, inView, className = '' }, ref) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: 0.12 + index * 0.06 }}
      className={`min-w-[7.25rem] rounded-lg border bg-white px-3 py-2.5 shadow-[0_2px_10px_rgba(1,35,106,0.08)] sm:min-w-[7.75rem] sm:px-3.5 sm:py-3 ${className}`}
      style={{ borderColor: region.color }}
    >
      <p className="text-[11px] font-medium leading-tight text-gray-600 sm:text-xs">{region.label}</p>
      <p className="mt-0.5 text-lg font-bold leading-none sm:text-xl" style={{ color: region.color }}>
        {region.percentage}%
      </p>
    </motion.div>
  )
})

function GlobeOrbitRing({ diameter }: { diameter: number }) {
  if (diameter <= 0) return null

  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-slate-400"
      style={{ width: diameter, height: diameter }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      aria-hidden
    />
  )
}

function RegionConnectors({ lines, inView }: { lines: ConnectorLine[]; inView: boolean }) {
  if (lines.length === 0) return null

  return (
    <svg className="pointer-events-none absolute inset-0 z-[3] h-full w-full" aria-hidden>
      {lines.map((line, i) => (
        <motion.line
          key={STUDENT_REGIONS[i].label}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke={line.color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray={CONNECTOR_DOT}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.92 } : { opacity: 0 }}
          transition={{ duration: 0.45, delay: 0.2 + i * 0.05 }}
        />
      ))}
    </svg>
  )
}

function useConnectorLines(
  containerRef: React.RefObject<HTMLDivElement | null>,
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>,
  globeCanvasPx: number,
  active: boolean,
) {
  const [geometry, setGeometry] = useState<{ lines: ConnectorLine[]; ringDiameter: number }>({
    lines: [],
    ringDiameter: 0,
  })

  useLayoutEffect(() => {
    if (!active) {
      setGeometry({ lines: [], ringDiameter: 0 })
      return
    }

    const measure = () => {
      const container = containerRef.current
      if (!container) return

      const cRect = container.getBoundingClientRect()
      const center = { x: cRect.width / 2, y: cRect.height / 2 }
      const ringRadius = globeCanvasPx / 2 + GLOBE_RING_GAP_PX
      const lines: ConnectorLine[] = []

      STUDENT_REGIONS.forEach((region, i) => {
        const card = cardRefs.current[i]
        if (!card) return

        const cardRect = card.getBoundingClientRect()
        const sx = cardRect.left + cardRect.width / 2 - cRect.left
        const sy = cardRect.top + cardRect.height / 2 - cRect.top
        const dx = sx - center.x
        const dy = sy - center.y
        const dist = Math.hypot(dx, dy) || 1

        lines.push({
          x1: sx,
          y1: sy,
          x2: center.x + (dx / dist) * ringRadius,
          y2: center.y + (dy / dist) * ringRadius,
          color: region.color,
        })
      })

      setGeometry({ lines, ringDiameter: ringRadius * 2 })
    }

    measure()
    const t = window.setTimeout(measure, 450)

    const ro = new ResizeObserver(measure)
    ro.observe(containerRef.current!)
    cardRefs.current.forEach((el) => {
      if (el) ro.observe(el)
    })
    window.addEventListener('resize', measure)

    return () => {
      window.clearTimeout(t)
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [active, globeCanvasPx, containerRef, cardRefs])

  return geometry
}

export default function StudentsByRegionCard({ activeCountryId }: StudentsByRegionCardProps) {
  const { ref, inView } = useInView({ threshold: 0.15 })
  const [layout, setLayout] = useState(GLOBE_LAYOUT_SM)
  const [isDesktop, setIsDesktop] = useState(false)
  const visualRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const apply = () => {
      setIsDesktop(mq.matches)
      setLayout(mq.matches ? GLOBE_LAYOUT_LG : GLOBE_LAYOUT_SM)
    }
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const framePx = layout.canvasPx + layout.framePaddingPx * 2
  const { lines, ringDiameter } = useConnectorLines(
    visualRef,
    cardRefs,
    layout.canvasPx,
    isDesktop,
  )

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.08 }}
      className="flex h-full flex-col rounded-2xl border border-gray-300 bg-white p-6 sm:p-7"
    >
      <header className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <h2 className="text-xl font-bold text-[#01236A] sm:text-2xl">Students by Region</h2>
          <p className="mt-1 text-sm text-gray-500">
            Distribution of students across different regions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.14 }}
          className="hidden items-center gap-2.5 rounded-xl border border-sky-100 bg-sky-50 px-3.5 py-2.5 shadow-[0_1px_6px_rgba(37,99,235,0.08)] sm:flex"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2563EB]/5 text-[#2563EB] shadow-sm">
            <Users className="h-4 w-4" strokeWidth={2.25} aria-hidden />
          </span>
          <div>
            <p className="text-base font-bold leading-tight text-[#01236A] sm:text-lg">
              {TOTAL_STUDENTS_LABEL}
            </p>
            <p className="text-[11px] text-gray-500 sm:text-xs">Total Students</p>
          </div>
        </motion.div>
      </header>

      <motion.div
        ref={visualRef}
        className="relative flex flex-1 flex-col overflow-visible"
        style={{ minHeight: isDesktop ? Math.max(framePx + 32, 400) : framePx }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.16 }}
      >
        {isDesktop ? (
          <>
            <GlobeOrbitRing diameter={ringDiameter} />
            <RegionConnectors lines={lines} inView={inView} />

            <motion.div
              className="absolute inset-0 z-[1] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              <Globe3D activeCountryId={activeCountryId} layout={layout} />
            </motion.div>

            {STUDENT_REGIONS.map((region, i) => (
              <RegionStatBox
                key={region.label}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                region={region}
                index={i}
                inView={inView}
                className={`absolute z-[4] ${REGION_PLACEMENT[i].boxClass}`}
              />
            ))}
          </>
        ) : (
          <>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              <Globe3D activeCountryId={activeCountryId} layout={layout} />
            </motion.div>

            <ul className="mt-4 space-y-2">
              {STUDENT_REGIONS.map((region, i) => (
                <MobileRegionRow key={region.label} region={region} index={i} inView={inView} />
              ))}
            </ul>
          </>
        )}
      </motion.div>
    </motion.article>
  )
}
