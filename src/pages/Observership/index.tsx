import { motion } from 'framer-motion'
import { Activity, Microscope, Award, Hospital, Stethoscope } from 'lucide-react'
import SectionHeading from '../../components/ui/SectionHeading'
import GlassCard from '../../components/ui/GlassCard'
import CTARow from '../../components/ui/CTARow'
import InquiryForm from '../../components/ui/InquiryForm'
import surgeryImg   from '../../assets/ChatGPT Image Apr 22, 2026, 12_42_04 AM.png'
import mriImg       from '../../assets/ChatGPT Image Apr 20, 2026, 02_41_43 AM.png'
import microscopeImg from '../../assets/pngegg (47).png'
import apolloImg    from '../../assets/appollo.png'

const highlights = [
  { icon: Activity,     label: 'ICU Exposure',                delay: 0 },
  { icon: Microscope,   label: 'Oncology Departments',        delay: 0.07 },
  { icon: Hospital,     label: 'Advanced Medical Technology', delay: 0.14 },
  { icon: Award,        label: 'Professional Certification',  delay: 0.21 },
  { icon: Stethoscope,  label: 'Hospital-Based Learning',     delay: 0.28 },
]

const keyHighlights = [
  {
    title: 'Elite Clinical Exposure',
    body: 'Observe daily ward rounds, complex ICU procedures, and interdisciplinary teaching programs alongside leading specialists.',
  },
  {
    title: 'Oncology & Critical Care',
    body: 'Gain unique insights into high-demand fields, including comprehensive exposure to oncological sub-specialties and intensive care diagnostics including the latest in Tele-ICU technology.',
  },
  {
    title: 'Professional Recognition',
    body: 'Successful completion of the program culminates in a Professional Certificate, validating your clinical exposure and dedication to the field.',
  },
]

const whyChoose = [
  { n: '1', title: 'Practical Knowledge', body: 'Witness the integration of advanced medical technologies in a live hospital environment.' },
  { n: '2', title: 'Global Standards',    body: 'Learn international clinical protocols that will give you a competitive edge in your future career.' },
  { n: '3', title: 'Structured Learning', body: 'Our programs are meticulously organized to maximize your educational outcomes in a condensed timeframe.' },
]

export default function Observership() {
  return (
    <main className="pt-16">
      {/* ── Hero banner ────────────────────────────────── */}
      <section
        className="relative py-24 md:py-36 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #050d1a 0%, #0a1628 60%, #050d1a 100%)' }}
      >
        {/* Cinematic surgery overhead image */}
        <div className="absolute inset-0">
          <img src={surgeryImg} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/50 to-brand-dark" />
        </div>

        {/* Apollo */}
        <img
          src={apolloImg}
          alt=""
          aria-hidden
          className="absolute right-4 bottom-0 h-72 md:h-96 opacity-20 pointer-events-none select-none"
          style={{ filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.3))' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeading
            title="Clinical Observership Programs for Future Doctors"
            subtitle="Elevate your medical journey with Pruthvi Education's exclusive Clinical Observership Program, specifically designed for our students pursuing their MBBS abroad."
          />
        </div>
      </section>

      {/* ── Highlight stats (glassmorphism) ──────────── */}
      <section className="bg-section-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {highlights.map(({ icon: Icon, label, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                className="glass-gold rounded-2xl px-6 py-5 flex flex-col items-center gap-2 min-w-[140px]"
              >
                <Icon size={28} className="text-brand-gold" />
                <span className="text-white/80 text-sm font-semibold text-center">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Program overview ──────────────────────────── */}
      <section className="bg-section-navy py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
            <div>
              <p className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-3">Program Overview</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                A High-Impact Short-Term<br /><span className="gold-text">Clinical Immersion</span>
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">
                Our observerships offer a high-impact, short-term clinical immersion ranging from{' '}
                <strong className="text-white">one week to one month</strong>. This program is curated to provide
                students with a front-row seat to advanced medical practices, departmental workflows,
                and cutting-edge healthcare technologies — all without the pressure of direct patient care.
              </p>
              <p className="text-white/60 leading-relaxed">
                Bridge the gap between academic theory and real-world practice by gaining first-hand
                exposure to the inner workings of premier healthcare institutions.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {keyHighlights.map((h, i) => (
                <GlassCard key={h.title} variant="blue" delay={i * 0.1} className="flex gap-4">
                  <span className="text-3xl font-black text-brand-gold/30 leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="font-bold text-white mb-1">{h.title}</p>
                    <p className="text-white/55 text-sm leading-relaxed">{h.body}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Why choose */}
          <div className="section-divider mb-14" />
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Why Choose a <span className="gold-text">Pruthvi Observership?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {whyChoose.map(w => (
              <GlassCard key={w.title} variant="gold">
                <p className="text-5xl font-black text-brand-gold/20 mb-3">{w.n}</p>
                <p className="font-bold text-white mb-2">{w.title}</p>
                <p className="text-white/55 text-sm leading-relaxed">{w.body}</p>
              </GlassCard>
            ))}
          </div>

          {/* Partner hospital images */}
          <div className="section-divider mb-10" />
          <p className="text-white/40 text-center text-xs font-bold tracking-widest uppercase mb-8">
            We Provide Observership in Our Partner Hospitals
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[mriImg, microscopeImg, surgeryImg].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden glass aspect-video"
              >
                <img src={src} alt="Partner Hospital" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-section-dark py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Apply for Your <span className="gold-text">Observership Slot</span>
              </h3>
              <p className="text-white/60 mb-6">Limited slots available per batch. Reserve your spot now.</p>
              <CTARow size="lg" />
            </div>
            <InquiryForm title="Apply for Observership" />
          </div>
        </div>
      </section>
    </main>
  )
}
