import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react'
import './LogoLoop.css'

const SMOOTH_TAU = 0.25
const MIN_COPIES = 2
const COPY_HEADROOM = 2

interface LogoItem {
  node: React.ReactNode
  title?: string
}

interface LogoLoopProps {
  logos: LogoItem[]
  speed?: number
  direction?: 'left' | 'right'
  gap?: number
  fadeOut?: boolean
  fadeOutColor?: string
  className?: string
}

function useResizeObserver(callback: () => void, refs: React.RefObject<Element | null>[]) {
  useEffect(() => {
    if (!window.ResizeObserver) {
      window.addEventListener('resize', callback)
      callback()
      return () => window.removeEventListener('resize', callback)
    }
    const observers = refs.map(ref => {
      if (!ref.current) return null
      const obs = new ResizeObserver(callback)
      obs.observe(ref.current)
      return obs
    })
    callback()
    return () => observers.forEach(o => o?.disconnect())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback])
}

export const LogoLoop = memo(({
  logos,
  speed = 80,
  direction = 'left',
  gap = 32,
  fadeOut = false,
  fadeOutColor,
  className = '',
}: LogoLoopProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef     = useRef<HTMLDivElement>(null)
  const seqRef       = useRef<HTMLUListElement>(null)

  const [seqWidth,  setSeqWidth]  = useState(0)
  const [copyCount, setCopyCount] = useState(MIN_COPIES)

  const targetVelocity = direction === 'left' ? Math.abs(speed) : -Math.abs(speed)

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0
    const sequenceWidth  = seqRef.current?.getBoundingClientRect().width ?? 0
    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth))
      setCopyCount(Math.max(MIN_COPIES, Math.ceil(containerWidth / sequenceWidth) + COPY_HEADROOM))
    }
  }, [])

  useResizeObserver(updateDimensions, [containerRef, seqRef])

  // Animation loop
  useEffect(() => {
    const track = trackRef.current
    if (!track || seqWidth === 0) return

    let rafId: number
    let lastTs: number | null = null
    let offset = 0
    let velocity = 0

    const animate = (ts: number) => {
      if (lastTs === null) lastTs = ts
      const dt = Math.max(0, ts - lastTs) / 1000
      lastTs = ts

      const ease = 1 - Math.exp(-dt / SMOOTH_TAU)
      velocity += (targetVelocity - velocity) * ease

      let next = offset + velocity * dt
      next = ((next % seqWidth) + seqWidth) % seqWidth
      offset = next

      track.style.transform = `translate3d(${-offset}px, 0, 0)`
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [targetVelocity, seqWidth])

  const cssVars = useMemo(() => ({
    '--logoloop-gap': `${gap}px`,
    ...(fadeOutColor ? { '--logoloop-fadeColor': fadeOutColor } : {}),
  }), [gap, fadeOutColor])

  const rootClass = ['logoloop', fadeOut && 'logoloop--fade', className].filter(Boolean).join(' ')

  const lists = useMemo(() =>
    Array.from({ length: copyCount }, (_, ci) => (
      <ul
        key={ci}
        className="logoloop__list"
        role="list"
        aria-hidden={ci > 0}
        ref={ci === 0 ? seqRef : undefined}
      >
        {logos.map((item, ii) => (
          <li key={`${ci}-${ii}`} className="logoloop__item" role="listitem">
            <span className="logoloop__node">{item.node}</span>
          </li>
        ))}
      </ul>
    )), [copyCount, logos])

  return (
    <div
      ref={containerRef}
      className={rootClass}
      style={cssVars as React.CSSProperties}
      role="region"
    >
      <div className="logoloop__track" ref={trackRef}>
        {lists}
      </div>
    </div>
  )
})

LogoLoop.displayName = 'LogoLoop'
export default LogoLoop
