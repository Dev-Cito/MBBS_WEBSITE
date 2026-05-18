import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'
import SectionHeading from '../../components/ui/SectionHeading'
import GlassCard from '../../components/ui/GlassCard'
import CTARow from '../../components/ui/CTARow'
import { blogPosts } from '../../data/services'

const books = [
  { title: 'Book on NEET Preparation', description: 'A comprehensive guide to acing NEET for students aiming for MBBS abroad. Covers syllabus, strategy, and mock patterns.', file: '#' },
  { title: 'Book: Mission MBBS', description: 'The definitive roadmap for Indian students pursuing MBBS abroad — from NEET to graduation and FMGE success.', file: '#' },
]

const categoryColors: Record<string, string> = {
  Guide:      'bg-brand-blue/20 text-brand-bluelit',
  Russia:     'bg-red-900/30 text-red-300',
  Georgia:    'bg-green-900/30 text-green-300',
  Comparison: 'bg-purple-900/30 text-purple-300',
  'Exam Prep':'bg-yellow-900/30 text-yellow-300',
}

export default function BooksBlogs() {
  return (
    <main className="pt-16">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="bg-section-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeading
            title="Books & Blogs"
            subtitle="Download free resources and read expert-written, SEO-optimised content on MBBS abroad — curated by the Pruthvi Education team."
          />
        </div>
      </section>

      {/* ── Downloadable books ───────────────────────── */}
      <section className="bg-section-dark py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-white/40 text-xs font-bold tracking-widest uppercase text-center mb-8">
            Free Downloads — Click Title to Download PDF
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {books.map((book, i) => (
              <GlassCard key={book.title} variant="gold" delay={i * 0.1} className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Download size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <a
                      href={book.file}
                      className="font-bold text-white hover:text-brand-gold transition-colors text-base leading-snug"
                    >
                      {book.title}
                    </a>
                    <p className="text-white/50 text-sm mt-1 leading-relaxed">{book.description}</p>
                  </div>
                </div>
                <a
                  href={book.file}
                  className="inline-flex items-center gap-2 text-brand-gold text-sm font-semibold hover:underline"
                >
                  Download Free PDF <ArrowRight size={14} />
                </a>
              </GlassCard>
            ))}
          </div>
          <p className="text-white/25 text-center text-xs mt-4">
            PDF files will be attached once provided — please share the book files to activate downloads.
          </p>
        </div>
      </section>

      {/* ── Blog grid ────────────────────────────────── */}
      <section className="bg-section-navy py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl font-bold text-white text-center mb-3">
            Expert Blogs — <span className="gold-text">SEO Optimized Content</span>
          </h3>
          <p className="text-white/40 text-center text-sm mb-10">
            High-ranking topics written for Indian students searching MBBS abroad guidance online.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 flex flex-col gap-3 cursor-pointer group hover:glow-border-gold transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold rounded-full px-2.5 py-1 ${categoryColors[post.category] ?? 'bg-white/10 text-white/60'}`}>
                    {post.category}
                  </span>
                  <ArrowRight size={14} className="text-white/20 group-hover:text-brand-gold group-hover:translate-x-1 transition-all duration-200" />
                </div>
                <h4 className="font-bold text-white text-sm leading-snug group-hover:text-brand-gold transition-colors duration-200">
                  {post.title}
                </h4>
                <p className="text-white/50 text-xs leading-relaxed flex-1">{post.excerpt}</p>
                <span className="text-brand-gold/60 text-xs font-medium">Read more →</span>
              </motion.article>
            ))}
          </div>
          <p className="text-white/25 text-center text-xs mt-6">
            Full blog articles will be added once the content is provided. The above represents the planned SEO content strategy.
          </p>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="bg-section-dark py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-3">
            Ready to Start Your <span className="gold-text">MBBS Journey?</span>
          </h3>
          <p className="text-white/50 mb-6">Download the resources, read the blogs — then talk to our experts.</p>
          <CTARow center size="lg" />
        </div>
      </section>
    </main>
  )
}
