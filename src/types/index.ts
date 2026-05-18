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

export interface CountryStatsStat {
  value: string
  label: string
  icon: 'globe' | 'graduation' | 'users' | 'star'
}

export interface RecognitionSegment {
  label: string
  percentage: number
  count: number
  color: string
}

export interface TopDestination {
  rank: number
  countryId: string
  name: string
  students: string
}

export interface StudentRegion {
  label: string
  percentage: number
  color: string
}

export interface SuccessMetric {
  label: string
  value: number
}

export interface NavItem {
  label: string
  href: string
  /** When true, navigates to a dedicated route instead of an in-page hash */
  route?: boolean
}

export interface Stat {
  value: string
  label: string
}

export interface Country {
  id: string
  name: string
  universities: number
  flag: string
  features: string[]
  description: string
  /** Capital / representative point for globe marker (WGS84) */
  coordinates: { lat: number; lng: number }
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface Review {
  id: number
  name: string
  role: string
  rating: number
  quote: string
  location: string
}
