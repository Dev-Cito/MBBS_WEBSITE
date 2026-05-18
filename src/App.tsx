import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Suspense, lazy } from 'react'

import Navbar          from './components/layout/Navbar'
import Footer          from './components/layout/Footer'
import StickyWhatsApp  from './components/layout/StickyWhatsApp'

// Lazy-loaded pages for optimal performance
const Home              = lazy(() => import('./pages/Home'))
const WhyPruthvi        = lazy(() => import('./pages/WhyPruthvi'))
const BestUniversities  = lazy(() => import('./pages/BestUniversities'))
const ExpertTeam        = lazy(() => import('./pages/ExpertTeam'))
const Observership      = lazy(() => import('./pages/Observership'))
const Reviews           = lazy(() => import('./pages/Reviews'))
const CountryComparison = lazy(() => import('./pages/CountryComparison'))
const BooksBlogs        = lazy(() => import('./pages/BooksBlogs'))
const Contact           = lazy(() => import('./pages/Contact'))

// Thin loading bar shown between page loads
function PageLoader() {
  return (
    <div className="fixed inset-x-0 top-0 z-[100] h-0.5 bg-brand-dark">
      <motion.div
        className="h-full bg-gradient-to-r from-brand-gold to-brand-bluelit"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
    </div>
  )
}

// Page transition wrapper
function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

// Inner router needs access to useLocation
function AppRoutes() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <StickyWhatsApp />

      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/"                   element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/why-pruthvi"        element={<AnimatedPage><WhyPruthvi /></AnimatedPage>} />
            <Route path="/best-universities"  element={<AnimatedPage><BestUniversities /></AnimatedPage>} />
            <Route path="/expert-team"        element={<AnimatedPage><ExpertTeam /></AnimatedPage>} />
            <Route path="/observership"       element={<AnimatedPage><Observership /></AnimatedPage>} />
            <Route path="/reviews"            element={<AnimatedPage><Reviews /></AnimatedPage>} />
            <Route path="/country-comparison" element={<AnimatedPage><CountryComparison /></AnimatedPage>} />
            <Route path="/books-blogs"        element={<AnimatedPage><BooksBlogs /></AnimatedPage>} />
            <Route path="/contact"            element={<AnimatedPage><Contact /></AnimatedPage>} />
          </Routes>
        </Suspense>
      </AnimatePresence>

      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
