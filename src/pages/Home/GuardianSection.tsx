import { motion } from 'framer-motion'
import InquiryForm from '../../components/ui/InquiryForm'
import { TypingAnimation } from '../../components/ui/typing-animation'
import greekGodNamaste from '../../assets/greek god (7).png'

export default function GuardianSection() {
  return (
    <section className="bg-section-navy py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text + CTA */}
          <div>
            {/* Subheadline — typing animation triggers on scroll into view */}
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg min-h-[3.5rem]">
              <TypingAnimation duration={60} delay={300}>
                Providing complete support for students pursuing MBBS abroad from university selection to graduation and beyond.
              </TypingAnimation>
            </p>

            {/* Greek god + Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative glass-gold rounded-3xl p-6 md:p-8 mb-10 overflow-hidden"
            >
              {/* Decorative glow */}
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img
                  src={greekGodNamaste}
                  alt="Pruthvi Guardian"
                  className="w-36 md:w-44 h-auto drop-shadow-xl flex-shrink-0"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.35))' }}
                />
                <blockquote className="text-center sm:text-left">
                  <p className="text-lg md:text-2xl font-bold text-white leading-snug mb-2">
                    "WE ARE NOT AGENTS<br />OR CONSULTANTS."
                  </p>
                  <p className="gold-text text-xl md:text-2xl font-black tracking-wide">
                    WE ARE GUARDIANS.
                  </p>
                </blockquote>
              </div>
            </motion.div>

          </div>

          {/* Right: Inquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <InquiryForm title="Book Free Counselling" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
