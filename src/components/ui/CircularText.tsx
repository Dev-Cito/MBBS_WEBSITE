import { useEffect } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import './CircularText.css'

type OnHover = 'speedUp' | 'slowDown' | 'pause' | 'goBonkers'

interface CircularTextProps {
  text: string
  spinDuration?: number
  onHover?: OnHover | null
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function makeSpinTransition(duration: number, from: number, loop = true): any {
  return {
    rotate: { from, to: from + 360, ease: 'linear', duration, type: 'tween', repeat: loop ? Infinity : 0 },
    scale:  { type: 'spring', damping: 20, stiffness: 300 },
  }
}

export default function CircularText({
  text,
  spinDuration = 20,
  onHover = 'speedUp',
  className = '',
}: CircularTextProps) {
  const letters  = Array.from(text)
  const controls = useAnimation()
  const rotation = useMotionValue(0)

  useEffect(() => {
    const from = rotation.get()
    controls.start({ rotate: from + 360, scale: 1, transition: makeSpinTransition(spinDuration, from) })
  }, [spinDuration, text, onHover, controls, rotation])

  const handleHoverStart = () => {
    const from = rotation.get()
    if (!onHover) return

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let transition: any = makeSpinTransition(spinDuration, from)
    let scale = 1

    if (onHover === 'slowDown')  transition = makeSpinTransition(spinDuration * 2, from)
    if (onHover === 'speedUp')   transition = makeSpinTransition(spinDuration / 4, from)
    if (onHover === 'goBonkers') { transition = makeSpinTransition(spinDuration / 20, from); scale = 0.8 }
    if (onHover === 'pause')     transition = { rotate: { type: 'spring', damping: 20, stiffness: 300 }, scale: { type: 'spring', damping: 20, stiffness: 300 } }

    controls.start({ rotate: from + 360, scale, transition })
  }

  const handleHoverEnd = () => {
    const from = rotation.get()
    controls.start({ rotate: from + 360, scale: 1, transition: makeSpinTransition(spinDuration, from) })
  }

  return (
    <motion.div
      className={`circular-text ${className}`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotDeg    = (360 / letters.length) * i
        const factor    = Math.PI / letters.length
        const transform = `rotateZ(${rotDeg}deg) translate3d(${factor * i}px, ${factor * i}px, 0)`
        return (
          <span key={i} style={{ transform, WebkitTransform: transform }}>
            {letter}
          </span>
        )
      })}
    </motion.div>
  )
}
