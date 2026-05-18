import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ChevronDown } from 'lucide-react'
import FlyingFlag from '../../components/ui/FlyingFlag'
import companyLogo from '../../assets/company logo.png'
import greekGodWelcome from '../../assets/greek god (11).png'

// video import
import heartVideo from '../../assets/videos/heart beating alone.mp4'

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out', delay: 0.3 }
    )
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* ── Video background ─────────────────────────── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      >
        <source src={heartVideo} type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/60 to-brand-dark" />
      <div className="absolute inset-0 bg-blue-glow opacity-40" />

      {/* ── Main content ─────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 px-6 md:px-12 py-10 max-w-7xl mx-auto w-full">
        {/* Left: text content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Logo large */}
          <motion.img
            src={companyLogo}
            alt=""
            className="h-24 md:h-32 w-auto mb-4 animate-float hidden lg:block"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
          />

          {/* 3D Golden company name */}
          <h1
            ref={titleRef}
            className="golden-3d-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-4"
          >
            PRUTHVI<br />EDUCATION
          </h1>

          {/* Divider */}
          <div className="section-divider w-full max-w-md mb-6" />

          {/* Main headline */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mb-6"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
              From Dream to Doctor
            </p>
            <p className="text-base md:text-lg text-white/70 font-medium">
              Your Trusted Guardians for MBBS Abroad
            </p>
          </motion.div>

          {/* Flying flags */}
          <motion.div
            className="flex items-end gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <FlyingFlag country="russia"     label="Russia" />
            <FlyingFlag country="georgia"    label="Georgia" />
            <FlyingFlag country="kyrgyzstan" label="Kyrgyzstan" />
            <FlyingFlag country="uzbekistan" label="Uzbekistan" />
          </motion.div>

        </div>

        {/* Right: Greek god */}
        <motion.div
          className="flex-shrink-0 w-64 md:w-80 lg:w-[500px] relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 80 }}
        >
          <div className="absolute inset-0 bg-blue-glow scale-150 opacity-60 pointer-events-none" />
          <img
            src={greekGodWelcome}
            alt="Pruthvi Guardian"
            className="relative w-full h-auto drop-shadow-2xl animate-float"
            style={{ filter: 'drop-shadow(0 0 48px rgba(45,140,255,0.60))' }}
          />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors duration-300 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to next section"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={14} />
      </motion.button>
    </section>
  )
}
