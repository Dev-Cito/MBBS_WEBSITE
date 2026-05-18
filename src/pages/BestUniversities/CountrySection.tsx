import { motion } from 'framer-motion'
import FlyingFlag from '../../components/ui/FlyingFlag'
import UniversityCard from './UniversityCard'
import type { CountryData } from '../../types'

interface Props {
  country: CountryData
}

export default function CountrySection({ country }: Props) {
  return (
    <section
      id={country.id}
      className="py-16 md:py-24 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Country header */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
          <div className="flex items-center gap-5">
            <FlyingFlag country={country.id} label="" />
            <div>
              <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-1">MBBS in</p>
              <h2 className="text-3xl md:text-4xl font-black gold-text">{country.name}</h2>
              <p className="text-white/50 text-sm mt-1 max-w-md">{country.tagline}</p>
            </div>
          </div>
        </div>

        {/* Highlights glass card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="glass-gold rounded-2xl p-5 mb-10 flex flex-wrap gap-3"
        >
          {country.highlights.map(h => (
            <span
              key={h}
              className="inline-flex items-center gap-2 text-sm text-white/80 bg-brand-gold/10 rounded-full px-3 py-1.5 border border-brand-gold/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              {h}
            </span>
          ))}
        </motion.div>

        {/* Special note (Kyrgyzstan) */}
        {country.specialNote && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-blue rounded-2xl p-5 mb-10 border-l-4 border-brand-gold"
          >
            <p className="text-white/75 text-sm leading-relaxed">{country.specialNote}</p>
          </motion.div>
        )}

        {/* Universities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {country.universities.map((uni, i) => (
            <UniversityCard key={uni.id} university={uni} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
