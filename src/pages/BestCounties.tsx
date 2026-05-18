import { useEffect, useState } from 'react'
import CountryStatsHero from '../components/country-stats/CountryStatsHero'
import TopDestinationsCard from '../components/country-stats/TopDestinationsCard'
import StudentsByRegionCard from '../components/country-stats/StudentsByRegionCard'
import UniversityRecognitionCard from '../components/country-stats/UniversityRecognitionCard'
import SuccessRateCard from '../components/country-stats/SuccessRateCard'
import CountryStatsCta from '../components/country-stats/CountryStatsCta'

export default function CountryStatsPage() {
  const [activeCountryId, setActiveCountryId] = useState('russia')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="flex flex-col gap-6 bg-white">
      <CountryStatsHero />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 lg:px-0">
        <section>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <TopDestinationsCard
                activeCountryId={activeCountryId}
                onSelectCountry={setActiveCountryId}
              />
            </div>
            <div className="lg:col-span-8">
              <StudentsByRegionCard activeCountryId={activeCountryId} />
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-5">
            <div className="flex lg:col-span-2">
              <UniversityRecognitionCard />
            </div>
            <div className="flex lg:col-span-3">
              <SuccessRateCard />
            </div>
          </div>
        </section>

        <section className="pb-10 sm:pb-12">
          <CountryStatsCta />
        </section>
      </div>
    </main>
  )
}
