import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

interface NumberTickerProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number   // total animation ms
  className?: string
}

export function NumberTicker({
  value,
  suffix = '',
  prefix = '',
  duration = 1800,
  className,
}: NumberTickerProps) {
  const [count, setCount] = useState(0)
  const ref              = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const startTime = performance.now()

        const tick = (now: number) => {
          const elapsed  = now - startTime
          const progress = Math.min(elapsed / duration, 1)
          // easeOutQuart — fast start, smooth settle
          const eased    = 1 - Math.pow(1 - progress, 4)
          setCount(Math.round(eased * value))
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className={clsx('tabular-nums', className)}>
      {prefix}{count}{suffix}
    </span>
  )
}
