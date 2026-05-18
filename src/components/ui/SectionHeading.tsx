import { motion } from 'framer-motion'
import clsx from 'clsx'

interface Props {
  title: string
  subtitle?: string
  gold?: boolean
  center?: boolean
  className?: string
}

export default function SectionHeading({ title, subtitle, gold = true, center = true, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={clsx(center && 'text-center', className)}
    >
      <h2
        className={clsx(
          'text-3xl md:text-5xl font-bold tracking-tight mb-4',
          gold ? 'gold-text' : 'text-white'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-5 flex items-center justify-center gap-3">
        <div className="h-px w-16 bg-brand-gold/40" />
        <div className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
        <div className="h-px w-16 bg-brand-gold/40" />
      </div>
    </motion.div>
  )
}
