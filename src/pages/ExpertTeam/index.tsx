import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import SectionHeading from '../../components/ui/SectionHeading'
import GlassCard from '../../components/ui/GlassCard'
import { teamMembers } from '../../data/services'
import heartVideo from '../../assets/videos/light heart in chest.mp4'

const qualities = [
  '10+ years industry experience',
  'Country-specific specialists',
  'Student-first approach',
  'Transparent & ethical guidance',
]

export default function ExpertTeam() {
  return (
    <main className="pt-16">
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <video
          src={heartVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040E35]/85 via-[#061543]/75 to-[#040E35]/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeading
            title="Meet the Experts Behind Your Success"
            subtitle="Our team consists of experienced counselors, education advisors, and international admission experts who are dedicated to guiding students at every step."
          />
        </div>
      </section>

      {/* ── Qualities ──────────────────────────────────── */}
      <section className="bg-section-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualities.map((q, i) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-3 glass-gold rounded-xl px-5 py-4"
              >
                <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                <span className="text-white/80 font-medium">{q}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team cards ─────────────────────────────────── */}
      <section className="bg-section-navy py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {teamMembers.map((member, i) => (
              <GlassCard key={member.role} variant="gold" delay={i * 0.1} className="text-center flex flex-col items-center gap-4">
                {/* Photo placeholder */}
                <div className="w-24 h-24 rounded-full bg-brand-blue/20 border-2 border-brand-gold/30 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <User size={36} className="text-brand-gold/50" />
                  )}
                </div>
                <div>
                  <p className="font-black text-white text-lg">{member.name}</p>
                  <p className="text-brand-gold text-sm font-medium">{member.role}</p>
                  <p className="text-white/40 text-xs mt-0.5">{member.experience}</p>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>
              </GlassCard>
            ))}
          </div>

        </div>
      </section>
    </main>
  )
}
