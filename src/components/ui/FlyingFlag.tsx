import { motion } from 'framer-motion'

interface Props {
  country: 'russia' | 'georgia' | 'kyrgyzstan' | 'uzbekistan'
  label: string
}

const stripes: Record<Props['country'], string[]> = {
  russia:     ['#FFFFFF', '#0039A6', '#D52B1E'],
  georgia:    ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
  kyrgyzstan: ['#E8112D', '#E8112D', '#E8112D'],
  uzbekistan: ['#1EB53A', '#FFFFFF', '#009FCA'],
}

const overlays: Partial<Record<Props['country'], React.ReactNode>> = {
  georgia: (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-[20%] bg-[#FF0000]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-[20%] bg-[#FF0000]" />
        </div>
      </div>
    </div>
  ),
  kyrgyzstan: (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span className="text-[#FFCB00] text-xl font-bold">☀</span>
    </div>
  ),
}

export default function FlyingFlag({ country, label }: Props) {
  const colors = stripes[country]

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Pole */}
      <div className="relative flex items-flex-start">
        <div className="w-[3px] h-20 bg-gradient-to-b from-brand-gold to-brand-golddim rounded-full" />
        {/* Flag body */}
        <motion.div
          className="relative w-14 h-10 overflow-hidden rounded-r-sm shadow-lg origin-left"
          animate={{
            skewY: [0, -1.5, 0, 1.5, 0],
            scaleX: [1, 0.97, 1, 0.97, 1],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {colors.map((c, i) => (
            <div
              key={i}
              className="w-full"
              style={{ height: `${100 / colors.length}%`, backgroundColor: c }}
            />
          ))}
          {overlays[country]}
        </motion.div>
      </div>
      {/* Label */}
      <span className="text-white/80 text-xs font-medium tracking-wide">{label}</span>
    </motion.div>
  )
}
