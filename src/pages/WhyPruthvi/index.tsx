import { motion } from 'framer-motion'
import {
  GraduationCap, FileText, Plane, MapPin,
  Home, Utensils, BookOpen, Shield,
} from 'lucide-react'
import SectionHeading from '../../components/ui/SectionHeading'
import { TypingAnimation } from '../../components/ui/typing-animation'
import CircularText from '../../components/ui/CircularText'
import GlassCard from '../../components/ui/GlassCard'
import twoHandsImg from '../../assets/2 hands.png'
import companyLogo from '../../assets/company logo.png'
import apolloImg from '../../assets/appollo.png'

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={28} className="text-brand-gold" />,
  FileText:      <FileText      size={28} className="text-brand-gold" />,
  Stamp:         <Shield        size={28} className="text-brand-gold" />,
  PlaneTakeoff:  <Plane         size={28} className="text-brand-gold" />,
  MapPin:        <MapPin        size={28} className="text-brand-gold" />,
  Home:          <Home          size={28} className="text-brand-gold" />,
  Utensils:      <Utensils      size={28} className="text-brand-gold" />,
  BookOpen:      <BookOpen      size={28} className="text-brand-gold" />,
}

const services = [
  { id: 'admission',    icon: 'GraduationCap', title: 'Smooth Admission Process',         desc: 'End-to-end admission support from university selection to final offer letter — zero hidden steps.' },
  { id: 'docs',        icon: 'FileText',      title: 'Step by Step Documentation',       desc: 'Complete document preparation, verification, and submission handled by our expert team.' },
  { id: 'visa',        icon: 'Stamp',         title: 'Hassle Free Visa Process',         desc: 'Expert visa guidance with a near-100% success rate. We review every document before submission.' },
  { id: 'departure',   icon: 'PlaneTakeoff',  title: 'Pre-Departure Airport Sendoff',    desc: 'We coordinate a ceremonial sendoff with family — because every journey deserves a celebration.' },
  { id: 'pickup',      icon: 'MapPin',        title: 'Airport Pickup',                   desc: 'Our dedicated local representative meets students on arrival and escorts them safely to the hostel.' },
  { id: 'hostel',      icon: 'Home',          title: 'Best Hostel Service',              desc: 'Secure, clean, and comfortable accommodation with 24/7 security. We manage our own hostels in Kyrgyzstan.' },
  { id: 'food',        icon: 'Utensils',      title: 'Delicious Indian Food',            desc: 'Authentic Indian vegetarian and non-vegetarian meals served 3 times a day at all partner locations.' },
  { id: 'coaching',    icon: 'BookOpen',      title: 'FMGE / NExT Coaching',            desc: 'In-house coaching by Indian faculty, integrated from Year 1 — giving our students the highest FMGE passing rates.' },
]

export default function WhyPruthvi() {
  return (
    <main className="pt-16">
      {/* ── Hero banner ───────────────────────────────── */}
      <section className="relative bg-section-navy py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-blue-glow opacity-30 pointer-events-none" />
        <img
          src={apolloImg}
          alt=""
          aria-hidden
          className="absolute right-0 top-0 h-full w-auto opacity-8 pointer-events-none select-none object-right"
          style={{ opacity: 0.07 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            className="relative mx-auto mb-8 w-[200px] h-[200px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <CircularText
              text="WHY PRUTHVI EDUCATION * "
              spinDuration={20}
              onHover="speedUp"
            />
            <img
              src={companyLogo}
              alt="Pruthvi Education"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 md:h-20 w-auto z-10 animate-glow"
              style={{ filter: 'drop-shadow(0 0 16px rgba(212,175,55,0.55))' }}
            />
          </motion.div>
          <SectionHeading
            title="Why Students & Parents Trust Pruthvi Education"
            subtitle="We take limited seats!"
          />
          <p className="max-w-3xl mx-auto text-white/60 text-base md:text-lg leading-relaxed mt-6 min-h-[6rem]">
            <TypingAnimation duration={60} delay={300}>
              Start your MBBS abroad journey with trusted guidance, official university partnerships, and complete end-to-end support. From admission, visa, and hostel arrangements to Indian food, safe accommodation, FMGE/NExT preparation, and dedicated local assistance abroad, we ensure a smooth, secure, and student-friendly experience without hidden charges or false promises.
            </TypingAnimation>
          </p>
        </div>
      </section>

      {/* ── End-to-End Services ───────────────────────── */}
      <section className="bg-section-dark py-20 md:py-28 relative overflow-hidden">
        {/* Background image */}
        <img
          src={twoHandsImg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{ opacity: 0.07, filter: 'grayscale(0.2) brightness(1.3)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section title */}
          <div className="text-center mb-14">
            <SectionHeading
              title="We Provide End to End Service"
              subtitle="From the moment you decide to study abroad, until you receive your MD 
              Pruthvi is with you."
            />
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc, i) => (
              <GlassCard key={svc.id} variant="blue" delay={i * 0.06} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                  {iconMap[svc.icon]}
                </div>
                <div>
                  <p className="font-bold text-white text-base mb-1">
                    <span className="text-brand-gold mr-1">{String(i + 1).padStart(2, '0')}.</span>
                    {svc.title}
                  </p>
                  <p className="text-white/55 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
