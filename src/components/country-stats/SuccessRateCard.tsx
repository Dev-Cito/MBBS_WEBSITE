import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { SUCCESS_METRICS } from '../../data/countryStats'

const CHART_W = 400
const CHART_H = 180
const PAD = { top: 16, right: 32, bottom: 36, left: 32 }
const INNER_W = CHART_W - PAD.left - PAD.right
const INNER_H = CHART_H - PAD.top - PAD.bottom

function valueToY(value: number) {
  const min = 80
  const max = 100
  const t = (value - min) / (max - min)
  return PAD.top + INNER_H - t * INNER_H
}

function valueToX(index: number) {
  const step = INNER_W / (SUCCESS_METRICS.length - 1)
  return PAD.left + index * step
}

export default function SuccessRateCard() {
  const { ref, inView } = useInView({ threshold: 0.15 })

  const points = SUCCESS_METRICS.map((m, i) => ({
    x: valueToX(i),
    y: valueToY(m.value),
    ...m,
  }))

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${PAD.top + INNER_H} L ${points[0].x} ${PAD.top + INNER_H} Z`

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.08 }}
      className="flex h-full w-full flex-col rounded-2xl border border-gray-300 bg-white p-6 sm:p-7"
    >
      <header className="mb-6">
        <h2 className="text-xl font-bold text-[#01236A] sm:text-2xl">Success Rate</h2>
        <p className="mt-1 text-sm text-gray-500">Student success metrics and outcomes</p>
      </header>

      <div className="w-full min-w-0 flex-1 overflow-visible">
        <svg
          viewBox={`0 0 ${CHART_W} ${CHART_H}`}
          className="aspect-[400/180] h-auto w-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Student success rate trend"
        >
          <defs>
            <linearGradient id="successArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2B7FE8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#2B7FE8" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {[0, 1, 2, 3].map((i) => {
            const y = PAD.top + (INNER_H / 3) * i
            return (
              <line
                key={i}
                x1={PAD.left}
                y1={y}
                x2={CHART_W - PAD.right}
                y2={y}
                stroke="#E5E7EB"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            )
          })}

          {points.map((p) => (
            <line
              key={`guide-${p.label}`}
              x1={p.x}
              y1={p.y}
              x2={p.x}
              y2={PAD.top + INNER_H}
              stroke="#D1D5DB"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          ))}

          <path d={areaPath} fill="url(#successArea)" />
          <path d={linePath} fill="none" stroke="#2B7FE8" strokeWidth="2.5" strokeLinejoin="round" />

          {points.map((p) => {
            const anchor = "middle"

            return (
              <g key={p.label}>
                <circle cx={p.x} cy={p.y} r="6" fill="#2B7FE8" />
                <circle cx={p.x} cy={p.y} r="3" fill="white" />
                <text
                  x={p.x}
                  y={p.y - 12}
                  textAnchor={anchor}
                  className="fill-[#01236A] text-[11px] font-bold"
                >
                  {p.value}%
                </text>
                <text
                  x={p.x}
                  y={PAD.top + INNER_H + 15}
                  textAnchor={anchor}
                  fill="#6B7280"
                  fontSize={8}
                >
                  {p.label}
                </text>
              </g>
            )
          })}
        </svg>
      </div>
    </motion.article>
  )
}
