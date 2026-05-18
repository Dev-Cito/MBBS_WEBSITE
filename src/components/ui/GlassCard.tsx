import { motion } from 'framer-motion'
import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'blue' | 'gold'
  hover?: boolean
  delay?: number
}

export default function GlassCard({ children, className, variant = 'default', hover = true, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      className={clsx(
        'rounded-2xl p-6 transition-shadow duration-300',
        variant === 'default' && 'glass',
        variant === 'blue'    && 'glass-blue',
        variant === 'gold'    && 'glass-gold glow-border-gold',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
