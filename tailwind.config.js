/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark:    '#061543',   // deep rich blue — backgrounds, navbar, overlays
          navy:    '#0D3B8C',   // royal blue — alternate sections
          blue:    '#2D8CFF',   // primary vibrant blue — buttons, highlights, CTAs
          bluelit: '#5AABFF',   // light blue — hover states, tints
          gold:    '#D4AF37',   // premium gold — minimal accent only
          goldlit: '#F0C84A',   // lighter gold — highlights
          golddim: '#9A7A20',   // dark gold — shadows, depth
          white:   '#F8FBFF',   // soft white — cards, text contrast
          gray:    '#E9EEF5',   // light gray — subtle backgrounds
        },
      },
      backgroundImage: {
        'gold-gradient':   'linear-gradient(135deg, #F5D060 0%, #D4AF37 40%, #9A7A20 100%)',
        'blue-glow':       'radial-gradient(ellipse at center, rgba(45,140,255,0.45) 0%, transparent 70%)',
        'hero-overlay':    'linear-gradient(to bottom, rgba(6,21,67,0.92) 0%, rgba(6,21,67,0.72) 50%, rgba(4,12,46,0.97) 100%)',
        'blue-gradient':   'linear-gradient(135deg, #050F38 0%, #0D3B8C 60%, #1565E0 100%)',
        'section-gradient':'linear-gradient(135deg, #0D3B8C 0%, #155DC2 100%)',
        'card-shimmer':    'linear-gradient(135deg, rgba(45,140,255,0.10) 0%, rgba(90,171,255,0.05) 100%)',
      },
      animation: {
        'flag-wave':    'flagWave 2.5s ease-in-out infinite',
        'pulse-gold':   'pulseGold 2s ease-in-out infinite',
        'pulse-blue':   'pulseBlue 2.5s ease-in-out infinite',
        'float':        'float 6s ease-in-out infinite',
        'glow':         'glow 3s ease-in-out infinite alternate',
        'marquee':      'marquee 30s linear infinite',
        'spin-slow':    'spin 20s linear infinite',
        'fade-up':      'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        flagWave: {
          '0%,100%': { transform: 'skewX(0deg) scaleX(1)' },
          '25%':     { transform: 'skewX(-2deg) scaleX(0.97)' },
          '75%':     { transform: 'skewX(2deg) scaleX(0.97)' },
        },
        pulseGold: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(212,175,55,0)' },
          '50%':     { boxShadow: '0 0 20px 6px rgba(212,175,55,0.35)' },
        },
        pulseBlue: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(45,140,255,0)' },
          '50%':     { boxShadow: '0 0 24px 8px rgba(45,140,255,0.35)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-16px)' },
        },
        glow: {
          from: { filter: 'drop-shadow(0 0 20px rgba(45,140,255,0.35))' },
          to:   { filter: 'drop-shadow(0 0 56px rgba(45,140,255,0.70))' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'blue-lg':   '0 8px 40px rgba(45,140,255,0.25), 0 2px 12px rgba(45,140,255,0.15)',
        'blue-md':   '0 4px 24px rgba(45,140,255,0.20)',
        'gold-md':   '0 4px 24px rgba(212,175,55,0.20)',
        'glass':     '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
}
