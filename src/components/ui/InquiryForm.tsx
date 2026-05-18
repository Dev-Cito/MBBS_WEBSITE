import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import clsx from 'clsx'

interface Props {
  variant?: 'dark' | 'glass'
  title?: string
  className?: string
}

const COUNTRIES = ['Russia', 'Georgia', 'Kyrgyzstan', 'Uzbekistan', 'Not decided yet']

export default function InquiryForm({ variant = 'glass', title = 'Get Free Counselling', className }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', country: '', mobile: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: wire to backend / WhatsApp API
    setSubmitted(true)
  }

  const inputCls = clsx(
    'w-full rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none transition-all duration-200',
    'border border-white/10 focus:border-brand-gold/60',
    variant === 'glass' ? 'bg-white/5 backdrop-blur-sm' : 'bg-brand-navy'
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className={clsx(
        'rounded-2xl p-6 md:p-8',
        variant === 'glass' ? 'glass' : 'bg-brand-navy border border-brand-gold/20',
        className
      )}
    >
      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{title}</h3>
      <p className="text-white/50 text-sm mb-6">We take limited seats — secure your spot today.</p>

      {submitted ? (
        <div className="flex flex-col items-center gap-3 py-8 text-center">
          <CheckCircle size={48} className="text-brand-gold animate-pulse-gold" />
          <p className="text-white font-semibold text-lg">Thank you! We'll reach out within 24 hours.</p>
          <p className="text-white/50 text-sm">Or WhatsApp us directly for an instant response.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            placeholder="Your Full Name"
            required
            value={form.name}
            onChange={handleChange}
            className={inputCls}
          />
          <select
            name="country"
            required
            value={form.country}
            onChange={handleChange}
            className={clsx(inputCls, 'appearance-none cursor-pointer')}
          >
            <option value="" disabled>Which Country Do You Want?</option>
            {COUNTRIES.map(c => (
              <option key={c} value={c} className="bg-brand-dark text-white">{c}</option>
            ))}
          </select>
          <input
            name="mobile"
            type="tel"
            placeholder="Mobile Number (with country code)"
            required
            value={form.mobile}
            onChange={handleChange}
            className={inputCls}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 rounded-xl py-3 px-6 bg-gradient-to-r from-brand-gold to-brand-goldlit text-brand-dark font-bold text-base shadow-lg hover:shadow-brand-gold/30 transition-shadow duration-300"
          >
            <Send size={16} />
            Send Information
          </motion.button>
        </form>
      )}
    </motion.div>
  )
}
