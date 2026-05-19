import { motion } from 'framer-motion'
import heroGlobeImg from '../../assets/country-stats-hero-globe.png'
import heroGodImg from '../../assets/hero-god.png'
import heroPillarImg from '../../assets/vecteezy_swirling-stone.webp'
import CountryStatsStatsBar from './CountryStatsStatsBar'

const MOBILE_BG_IMG =
  'pointer-events-none absolute object-contain opacity-20'

function HeroCopy({ className = '' }: { className?: string }) {
  return (
    <motion.div className={className}>
      <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-white/70 uppercase">
        Global Insights
      </p>
      <h2
        className="text-3xl md:text-5xl font-bold tracking-tight mb-4 gold-text"
      >
        Best Countries for MBBS
      </h2>
      {/* <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
        Explo re the Best Destinations for <span className="text-[#5B9BD5]">MBBS</span> Abroad.
      </h1> */}
      <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0">
        Explore medical education opportunities, university recognition, and student success
        rates across top MBBS destinations worldwide.
      </p>
    </motion.div>
  )
}

export default function CountryStatsHero() {
  return (
    <section className="relative pb-12 sm:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full overflow-hidden rounded-bl-[3.5rem] bg-[#01236A] pt-[4.5rem] sm:rounded-bl-[5rem] sm:pt-20"
      >
        {/* Mobile: earth left · man center · pillar right (full height) */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden lg:hidden"
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <img
            src={heroGlobeImg}
            alt=""
            className={`${MOBILE_BG_IMG} top-1/2 left-0 z-0 h-auto w-[38%] max-w-[175px] -translate-y-1/2 object-left`}
          />
          <img
            src={heroGodImg}
            alt=""
            className={`${MOBILE_BG_IMG} top-1/2 left-1/2 z-[1] max-h-[88%] w-auto max-w-[58%] -translate-x-1/2 -translate-y-1/2`}
          />
          <img
            src={heroPillarImg}
            alt=""
            className={`${MOBILE_BG_IMG} top-0 -right-[100px] z-0 h-full w-auto object-contain object-right`}
          />
          <div className="absolute inset-0 bg-[#01236A]/45" />
        </motion.div>

        {/* Mobile: text pinned to true vertical center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:hidden"
        >
          <HeroCopy className="w-full max-w-full text-center" />
        </motion.div>

        {/* Mobile hero height spacer + desktop grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 mx-auto min-h-[350px] max-w-7xl sm:min-h-[320px] lg:grid lg:min-h-0 lg:grid-cols-2 lg:items-center lg:gap-4"
        >
          <HeroCopy className="hidden max-w-full pb-16 lg:block lg:text-left" />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="relative hidden min-h-[280px] lg:flex lg:items-end lg:justify-end"
          >
            <img
              src={heroGlobeImg}
              alt=""
              aria-hidden
              className="pointer-events-none absolute top-3 left-0 z-[1] h-auto w-[380px] object-contain object-top opacity-80 xl:w-[420px]"
            />

            <img
              src={heroGodImg}
              alt=""
              aria-hidden
              className="relative -left-20 z-10 max-h-[400px] w-auto max-w-full object-contain object-bottom drop-shadow-2xl"
            />

            <img
              src={heroPillarImg}
              alt=""
              aria-hidden
              className="pointer-events-none absolute top-1/2 -right-[90px] z-[2] h-full w-auto -translate-y-1/2 translate-x-8 object-contain opacity-40 xl:translate-x-10"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <CountryStatsStatsBar />
    </section>
  )
}
