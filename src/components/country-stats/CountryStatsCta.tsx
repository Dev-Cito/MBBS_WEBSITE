import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import manImg from '../../assets/god-musk.png'
import greekGodMobileImg from '../../assets/greek-god2.png'

export default function CountryStatsCta() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  return (
    <section className="bg-white py-12 sm:py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-7xl flex-col items-center gap-5 overflow-hidden rounded-3xl bg-[#01236A] py-8 pl-8 pr-5 sm:flex-row sm:gap-6 sm:py-0 sm:pr-10 sm:pl-5 lg:pr-12 lg:pl-5"
      >
        <div className="relative flex h-36 w-36 shrink-0 items-end justify-center sm:h-40 sm:w-44">
          <img
            src={greekGodMobileImg}
            alt=""
            aria-hidden
            className="h-full w-full object-contain object-bottom sm:hidden"
          />
          <img
            src={manImg}
            alt=""
            aria-hidden
            className="hidden h-full w-full object-contain object-bottom sm:block"
          />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Find Your Perfect Destination
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/75">
            Our experts will help you choose the best country and university based on your profile
            and preferences.
          </p>
        </div>

        <Link
          to="/#contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#01236A] shadow-md transition-all hover:scale-[1.03] hover:shadow-lg"
        >
          Get Free Consultation
          <ArrowRight size={16} aria-hidden />
        </Link>
      </motion.div>
    </section>
  )
}
