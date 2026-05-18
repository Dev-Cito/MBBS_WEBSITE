import { motion } from 'framer-motion'
import { Shield, Users, GraduationCap, Clock, BookOpen, Utensils } from 'lucide-react'
import apolloImg from '../../assets/appollo.png'
import doctorBustImg from '../../assets/ChatGPT Image Apr 19, 2026, 01_05_21 AM.png'
import { NumberTicker } from '../../components/ui/number-ticker'

type Stat = {
  icon: React.ElementType
  label: string
  delay: number
} & (
  | { numeric: true;  value: number; suffix: string }
  | { numeric: false; value: string }
)

const stats: Stat[] = [
  { icon: Clock,         numeric: true,  value: 10,  suffix: '+',  label: 'Years Experience',            delay: 0 },
  { icon: Users,         numeric: true,  value: 650, suffix: '+',  label: 'Students Guided',              delay: 0.05 },
  { icon: GraduationCap, numeric: false, value: 'NMC',             label: 'Approved Universities',        delay: 0.1 },
  { icon: Shield,        numeric: true,  value: 24,  suffix: '/7', label: 'Student Support',              delay: 0.15 },
  { icon: BookOpen,      numeric: false, value: 'FMGE',            label: 'NExT Guidance',                delay: 0.2 },
  { icon: Utensils,      numeric: true,  value: 100, suffix: '%',  label: 'Indian Hostel & Food Support', delay: 0.25 },
]

export default function TrustBar() {
  return (
    <section className="bg-section-dark py-20 md:py-28 relative overflow-x-hidden">
      {/* Decorative Greek god images */}
      <img
        src={apolloImg}
        alt=""
        aria-hidden
        className="absolute -left-8 bottom-0 h-[630px] w-auto opacity-10 pointer-events-none select-none"
        style={{ filter: 'grayscale(0.3)' }}
      />
      <img
        src={doctorBustImg}
        alt=""
        aria-hidden
        className="absolute -right-8 bottom-0 h-[630px]  w-auto pointer-events-none select-none"
        style={{ filter: 'grayscale(0.3) brightness(0.6)', opacity: 0.08 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-3">Why Trust Pruthvi</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Numbers That Speak for <span className="gold-text">Themselves</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: stat.delay }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="glass rounded-2xl p-5 flex flex-col items-center text-center gap-3 glow-border-gold"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                <stat.icon size={20} className="text-brand-gold" />
              </div>

              <p className="text-2xl md:text-3xl font-black golden-3d-text">
                {stat.numeric ? (
                  <NumberTicker
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={3000}
                  />
                ) : (
                  stat.value
                )}
              </p>

              <p className="text-white/60 text-xs leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Marquee trust strip */}
        <div className="mt-14 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-6">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-9 pr-10">
                {['NMC Approved', 'WHO Recognized', 'FMGE Coaching', 'Indian Mess', '24/7 Support', 'Airport Pickup', 'Pre-Departure Sendoff', 'Visa Guidance', 'Official IEU Representative', 'Official AIMU Representative'].map(text => (
                  <span key={text} className="flex items-center gap-2 text-white/40 text-sm font-medium flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                    {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
