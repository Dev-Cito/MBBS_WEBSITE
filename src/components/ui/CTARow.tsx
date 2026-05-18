import { Phone, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface Props {
  className?: string
  center?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const PHONE    = 'tel:+919999999999'
const WHATSAPP = 'https://wa.me/919999999999?text=Hello%20Pruthvi%20Education%2C%20I%20am%20interested%20in%20MBBS%20Abroad.'

export default function CTARow({ className, center = false, size = 'md' }: Props) {
  const btnBase = clsx(
    'inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-300 shadow-lg',
    size === 'sm'  && 'px-4 py-2 text-sm',
    size === 'md'  && 'px-6 py-3 text-base',
    size === 'lg'  && 'px-8 py-4 text-lg',
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={clsx('flex flex-wrap gap-3', center && 'justify-center', className)}
    >
      <a
        href={PHONE}
        className={clsx(btnBase, 'btn-primary text-white')}
      >
        <Phone size={size === 'lg' ? 20 : 16} />
        Call Now
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(btnBase, 'bg-[#25D366] hover:bg-[#1ebe5e] text-white')}
      >
        <MessageCircle size={size === 'lg' ? 20 : 16} />
        Talk on WhatsApp
      </a>
    </motion.div>
  )
}
