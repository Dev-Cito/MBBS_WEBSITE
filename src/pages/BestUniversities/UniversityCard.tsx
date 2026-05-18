import { motion } from 'framer-motion'
import type { University } from '../../types'

interface Props {
  university: University
  index: number
}

export default function UniversityCard({ university, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.07 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="glass rounded-2xl overflow-hidden flex flex-col group transition-shadow duration-300 hover:glow-border-gold"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-brand-navy">
        <img
          src={university.image}
          alt={university.name}
          className="uni-img group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="text-[10px] font-bold tracking-widest text-brand-gold/80 uppercase">
            Est. {university.established}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="text-xs font-semibold text-white bg-brand-blue/80 backdrop-blur-sm rounded-full px-2 py-0.5">
            {university.shortName ?? university.name.split(' ').slice(-2).join(' ')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-5">
        <h4 className="text-white font-bold text-base mb-2 leading-snug">{university.name}</h4>
        <p className="text-white/55 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
          {university.description}
        </p>
        {university.highlights && (
          <ul className="space-y-1.5">
            {university.highlights.map(h => (
              <li key={h} className="flex items-start gap-2 text-xs text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}
