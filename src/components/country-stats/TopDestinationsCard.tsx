import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { TOP_DESTINATIONS } from '../../data/countryStats'
import { getCountryFlagUrl } from '../../utils/countryFlags'

function DestinationFlag({ countryId, name }: { countryId: string; name: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        className="flex h-9 w-12 shrink-0 items-center justify-center rounded bg-gray-100 text-lg"
        aria-hidden
      >
        🏳️
      </span>
    )
  }

  return (
    <img
      src={getCountryFlagUrl(countryId, 80)}
      alt={`${name} flag`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-9 w-12 shrink-0 rounded object-cover shadow-sm ring-1 ring-black/5"
    />
  )
}

interface TopDestinationsCardProps {
  activeCountryId: string
  onSelectCountry: (countryId: string) => void
}

export default function TopDestinationsCard({
  activeCountryId,
  onSelectCountry,
}: TopDestinationsCardProps) {
  const { ref, inView } = useInView({ threshold: 0.15 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
      className="flex h-full flex-col rounded-2xl border border-gray-300 bg-white p-6 sm:p-7"
    >
      <header className="mb-6">
        <h2 className="text-xl font-bold text-[#01236A] sm:text-2xl">Top Destinations</h2>
        <p className="mt-1 text-sm text-gray-500">Most popular countries for MBBS abroad</p>
      </header>

      <ol className="flex-1 divide-y divide-gray-100 [&>li:first-child>button]:pt-0 [&>li:last-child>button]:pb-0">
        {TOP_DESTINATIONS.map((item, i) => (
          <motion.li
              key={item.countryId}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.06 }}
            >
              <button
                type="button"
                onClick={() => onSelectCountry(item.countryId)}
                aria-current={activeCountryId === item.countryId ? 'true' : undefined}
                className="flex w-full cursor-pointer items-center gap-4 py-4 text-left transition-colors hover:bg-gray-50/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B7FE8]"
              >
                <span className="w-5 shrink-0 text-sm font-medium text-gray-400">{item.rank}</span>
                <DestinationFlag countryId={item.countryId} name={item.name} />
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-[#01236A]">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.students}</p>
                </div>
              </button>
            </motion.li>
        ))}
      </ol>

      <Link
        to="/best-countries-details"
        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#2B7FE8] transition-colors hover:text-[#01236A]"
      >
        View All Countries
        <ArrowRight size={16} aria-hidden />
      </Link>
    </motion.article>
  )
}
