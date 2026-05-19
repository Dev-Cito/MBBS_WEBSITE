import SectionHeading from '../../components/ui/SectionHeading'
import CountrySection from './CountrySection'
import { countries } from '../../data/universities'

export default function BestUniversities() {
  return (
    <main className="pt-16">
      {/* ── Globe hero ─────────────────────────────────── */}
      <section className="bg-section-navy py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Explore the Best Destinations for MBBS Abroad"
            subtitle="Click on a country tag on the globe to jump directly to its universities."
          />

          {/* Quick jump links */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {countries.map(c => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="glass-gold rounded-full px-4 py-2 text-sm font-semibold text-brand-gold hover:bg-brand-gold/20 transition-all duration-200"
              >
                {c.flag} MBBS in {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ── Country sections ──────────────────────────────── */}
      {countries.map((country, i) => (
        <div
          key={country.id}
          className={i % 2 === 0 ? 'bg-section-dark' : 'bg-section-navy'}
        >
          <CountrySection country={country} />
          <div className="section-divider" />
        </div>
      ))}
    </main>
  )
}
