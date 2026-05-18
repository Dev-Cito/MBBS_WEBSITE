import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/services'
import companyLogo from '../../assets/company logo.png'
import clsx from 'clsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 shadow-xl'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={companyLogo} alt="Pruthvi Education" className="h-10 w-auto animate-glow" />
          <span className="hidden sm:block font-bold text-white text-base tracking-wide leading-tight">
            PRUTHVI<br /><span className="text-brand-gold text-xs font-medium tracking-widest">EDUCATION</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={clsx(
                'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200',
                location.pathname === link.path
                  ? 'text-brand-gold bg-brand-gold/10'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* MBBS ABROAD badge */}
        <div className="hidden lg:flex items-center gap-2">
          <span className="text-xs font-bold tracking-widest text-brand-gold border border-brand-gold/40 rounded-full px-3 py-1">
            MBBS ABROAD
          </span>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(v => !v)}
          className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-brand-dark/98 border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={clsx(
                    'px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                    location.pathname === link.path
                      ? 'text-brand-gold bg-brand-gold/10'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
