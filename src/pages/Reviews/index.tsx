import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionHeading from '../../components/ui/SectionHeading'
import bodyMusclesVideo from '../../assets/videos/body muscles.mp4'
import GlassCard from '../../components/ui/GlassCard'

const reviews = [
  { name: 'Parent — Russia Batch 2023', rating: 5, text: 'Pruthvi Education was with us every single step. From the NEET counselling to airport pickup in Russia, they never left our side. My son is now thriving in his 2nd year at NSU. Zero regrets.' },
  { name: 'Student — Georgia, SEU',     rating: 5, text: 'The pre-departure sendoff was something I will never forget. The team genuinely cares about every student. The hostel arrangements in Tbilisi were excellent and Indian food was available from Day 1.' },
  { name: 'Parent — Kyrgyzstan Batch',  rating: 5, text: 'Being official representatives for IEU and AIMU means everything. We got direct university communication, no middlemen, no surprises. The FMGE coaching update calls every month gave us peace of mind.' },
  { name: 'Student — Orenburg, Russia', rating: 5, text: 'I cleared FMGE on my first attempt. Pruthvi\'s in-house coaching was available from Year 1 and that made the difference. Highly recommend to anyone serious about returning to practice in India.' },
  { name: 'Parent — Uzbekistan Batch',  rating: 5, text: 'We chose Uzbekistan for the budget and Pruthvi made sure quality was never compromised. ASMI is an excellent university and the Indian student community there is vibrant. Pruthvi did a fantastic job.' },
  { name: 'Student — Georgia, DTMU',    rating: 5, text: 'The documentation process can be overwhelming but Pruthvi handled everything step by step. All I had to do was focus on my studies. Their motto "your dream is our responsibility" is 100% true.' },
]

export default function Reviews() {
  return (
    <main className="pt-16">
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <video
          src={bodyMusclesVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040E35]/85 via-[#061543]/75 to-[#040E35]/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeading
            title="What Students & Parents Say About Us"
            subtitle="Real voices. Real journeys. Real results."
          />

          {/* Google rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-3 glass-gold rounded-2xl px-6 py-4 mt-8"
          >
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(n => <Star key={n} size={18} className="text-brand-gold fill-brand-gold" />)}
            </div>
            <span className="text-white font-bold text-lg">4.9 / 5</span>
            <span className="text-white/40 text-sm">on Google Reviews</span>
          </motion.div>
        </div>
      </section>

      {/* ── Video testimonials section ───────────────── */}
      <section className="bg-section-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-white/40 text-xs font-bold tracking-widest uppercase text-center mb-8">
            Video Testimonials
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1,2,3].map(i => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl aspect-video flex items-center justify-center cursor-pointer hover:glow-border-gold transition-all duration-300 group"
              >
                <div className="flex flex-col items-center gap-3 text-white/30 group-hover:text-brand-gold/60 transition-colors">
                  <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-current ml-1" />
                  </div>
                  <span className="text-xs">Student Testimonial {i}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-white/30 text-center text-xs mt-4">
            Video testimonials will be embedded here — please share the video links or files.
          </p>
        </div>
      </section>

      {/* ── Written reviews ─────────────────────────── */}
      <section className="bg-section-navy py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {reviews.map((r, i) => (
              <GlassCard key={i} variant="default" delay={i * 0.07} className="flex flex-col gap-4">
                <Quote size={20} className="text-brand-gold/50" />
                <p className="text-white/70 text-sm leading-relaxed flex-1 italic">{r.text}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-xs font-medium">{r.name}</span>
                  <div className="flex gap-0.5">
                    {[...Array(r.rating)].map((_, j) => (
                      <Star key={j} size={12} className="text-brand-gold fill-brand-gold" />
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Student photos placeholder */}
          <div className="section-divider mb-10" />
          <p className="text-white/40 text-center text-xs font-bold tracking-widest uppercase mb-6">Student Photos</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="glass rounded-xl aspect-square flex items-center justify-center text-white/20 text-xs">
                Photo {i}
              </div>
            ))}
          </div>
          <p className="text-white/30 text-center text-xs mt-3">
            Student photos will be added here — please provide the image files.
          </p>
        </div>
      </section>
    </main>
  )
}
