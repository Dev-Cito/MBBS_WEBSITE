export interface University {
  id: string
  name: string
  shortName?: string
  country: 'russia' | 'georgia' | 'kyrgyzstan' | 'uzbekistan'
  established: number
  image: string
  description: string
  highlights?: string[]
}

export interface CountryData {
  id: 'russia' | 'georgia' | 'kyrgyzstan' | 'uzbekistan'
  name: string
  flag: string
  lat: number
  lon: number
  tagline: string
  highlights: string[]
  universities: University[]
  specialNote?: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Service {
  id: string
  title: string
  icon: string
  description: string
  image?: string
}

export interface TeamMember {
  name: string
  role: string
  image: string
  experience: string
  bio: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
}

export interface BudgetRange {
  label: string
  min: number
  max: number
  universities: string[]
}

export interface NavLink {
  label: string
  path: string
}
