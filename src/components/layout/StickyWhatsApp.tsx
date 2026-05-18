import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'

const WHATSAPP = 'https://wa.me/919999999999?text=Hello%20Pruthvi%20Education%2C%20I%20am%20interested%20in%20MBBS%20Abroad.'
const PHONE    = 'tel:+919999999999'

export default function StickyWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp */}
      <motion.a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-2xl overflow-hidden group"
        style={{ boxShadow: '0 4px 24px rgba(37,211,102,0.45)' }}
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] ring-pulse opacity-0 group-hover:opacity-60" />
        <span className="relative flex items-center gap-2 px-4 py-3">
          <MessageCircle size={22} />
          <span className="hidden sm:inline text-sm font-semibold pr-1">WhatsApp</span>
        </span>
      </motion.a>

      {/* Call Now */}
      <motion.a
        href={PHONE}
        aria-label="Call Now"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.7, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-2 bg-brand-blue text-white rounded-full shadow-2xl overflow-hidden group"
        style={{ boxShadow: '0 4px 24px rgba(45,140,255,0.45)' }}
      >
        <span className="absolute inset-0 rounded-full bg-brand-blue ring-pulse opacity-0 group-hover:opacity-60" />
        <span className="relative flex items-center gap-2 px-4 py-3">
          <Phone size={22} />
          <span className="hidden sm:inline text-sm font-semibold pr-1">Call Now</span>
        </span>
      </motion.a>
    </div>
  )
}
