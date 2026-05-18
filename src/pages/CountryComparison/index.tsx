import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import SectionHeading from '../../components/ui/SectionHeading'
import CTARow from '../../components/ui/CTARow'
import InquiryForm from '../../components/ui/InquiryForm'
import { budgetRanges } from '../../data/services'
import { faqs } from '../../data/faq'

export default function CountryComparison() {
  const [selectedBudget, setSelectedBudget] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const currentRange = selectedBudget !== null ? budgetRanges[selectedBudget] : null


  return (
    <main className="pt-16">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="bg-section-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeading
            title="Country Comparison Tool & FAQ"
            subtitle="Select your budget to instantly see which universities and countries are the best match for you."
          />
        </div>
      </section>

      {/* ── Budget comparison tool ──────────────────── */}
      <section className="bg-section-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="glass rounded-3xl p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-2">
              Select your Budget
            </h3>
            <p className="text-white/50 text-sm text-center mb-8">
              You will see all matching university options instantly.
            </p>

            {/* Budget range buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {budgetRanges.map((range, i) => (
                <motion.button
                  key={range.label}
                  onClick={() => setSelectedBudget(i === selectedBudget ? null : i)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`
                    rounded-xl px-4 py-4 text-sm font-bold transition-all duration-200 border
                    ${selectedBudget === i
                      ? 'bg-brand-gold text-brand-dark border-brand-gold shadow-lg'
                      : 'glass text-white/70 border-white/10 hover:border-brand-gold/40 hover:text-white'
                    }
                  `}
                >
                  {range.label}
                </motion.button>
              ))}
            </div>

            {/* Results */}
            <AnimatePresence mode="wait">
              {currentRange && (
                <motion.div
                  key={currentRange.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="glass-gold rounded-2xl p-6"
                >
                  <p className="text-brand-gold font-bold text-sm mb-4 uppercase tracking-widest">
                    Universities in the {currentRange.label} range:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentRange.universities.map(uni => (
                      <div key={uni} className="flex items-center gap-2 text-white/80 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                        {uni}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-5 border-t border-brand-gold/20">
                    <p className="text-white/50 text-xs mb-3">
                      Ready to explore your options? Our experts will match the right university to your NEET score and preferences.
                    </p>
                    <CTARow size="sm" />
                  </div>
                </motion.div>
              )}
              {!currentRange && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8 text-white/30 text-sm"
                >
                  Click a budget range above to see matching universities →
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────── */}
      <section className="bg-section-navy py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Frequently Asked Questions" subtitle="Answers to the most common questions from students and parents." />

          <div className="mt-10 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-white font-semibold text-sm md:text-base">{faq.question}</span>
                  {openFaq === i
                    ? <ChevronUp size={18} className="text-brand-gold flex-shrink-0" />
                    : <ChevronDown size={18} className="text-white/40 flex-shrink-0" />
                  }
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="bg-section-dark py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Still Have <span className="gold-text">Questions?</span>
              </h3>
              <p className="text-white/60 mb-6">Our counselors are available 24/7 to answer any question, no matter how small.</p>
              <CTARow size="lg" />
            </div>
            <InquiryForm title="Ask Our Counselors" />
          </div>
        </div>
      </section>
    </main>
  )
}
