import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

interface TypingAnimationProps {
  children: string
  className?: string
  duration?: number   // ms per character
  delay?: number      // ms before typing starts (after entering view)
}

export function TypingAnimation({
  children,
  className,
  duration = 22,
  delay = 200,
}: TypingAnimationProps) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone]           = useState(false)
  const ref                       = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        let i = 0
        const start = setTimeout(() => {
          const tick = setInterval(() => {
            i++
            setDisplayed(children.slice(0, i))
            if (i >= children.length) {
              clearInterval(tick)
              // keep cursor briefly then hide it
              setTimeout(() => setDone(true), 600)
            }
          }, duration)
        }, delay)

        return () => {
          clearTimeout(start)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [children, duration, delay])

  return (
    <span ref={ref} className={clsx('inline', className)}>
      {displayed}
      {!done && (
        <span
          className="inline-block w-px ml-0.5 align-middle bg-current"
          style={{
            height: '1.1em',
            animation: 'blink 0.75s step-end infinite',
          }}
        />
      )}
      {/* inject blink keyframe once */}
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </span>
  )
}
