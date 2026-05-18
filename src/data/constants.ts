import type { NavItem, Stat, Country, ProcessStep, Review } from '../types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Why Us',       href: '#why-us' },
  { label: 'Team',         href: '#team' },
  { label: 'Observership', href: '#observership' },
  { label: 'Reviews',      href: '#reviews' },
  { label: 'Country Stats', href: '/country-stats', route: true },
  { label: 'Reads',        href: '#blogs' },
]

export const STATS: Stat[] = [
  { value: '650+',  label: 'Doctor Placed' },
  { value: '10+',   label: 'Years Exp.'    },
  { value: '5',     label: 'Countries'     },
  { value: '24/7',  label: 'Support'       },
]

export const COUNTRIES: Country[] = [
  {
    id: 'kyrgyzstan',
    name: 'Kyrgyzstan',
    coordinates: { lat: -45, lng: 75 },
    universities: 4,
    flag: '🇰🇬',
    description: 'Affordable MBBS with NMC-approved institutions in Central Asia.',
    features: [
      'Low tuition & living costs',
      'NMC-approved universities',
      'English-medium programs',
      'Safe & student-friendly cities',
      'Indian food & community',
    ],
  },
  {
    id: 'russia',
    name: 'Russia',
    coordinates: { lat: -22, lng: 60 },
    universities: 6,
    flag: '🇷🇺',
    description: 'Top-ranked medical universities with century-old traditions of excellence.',
    features: [
      'World-renowned medical research',
      'NMC & WHO approved',
      'Affordable fees vs. private India',
      'Strong alumni network',
      'Quality hostel & facilities',
    ],
  },
  {
    id: 'georgia',
    name: 'Georgia',
    coordinates: { lat: -30, lng: 50 },
    universities: 3,
    flag: '🇬🇪',
    description: 'EU-standard education with English medium programs at competitive fees.',
    features: [
      'English-medium education',
      'NMC-approved facilities',
      'English-medium programs',
      'Good Indian student community',
      'Quality hostel & facilities',
    ],
  },
  {
    id: 'kazakhstan',
    name: 'Kazakhstan',
    coordinates: { lat: -35, lng: 70 },
    universities: 3,
    flag: '🇰🇿',
    description: 'Rapidly growing medical education hub with modern infrastructure.',
    features: [
      'Modern campus infrastructure',
      'NMC-approved universities',
      'Affordable total cost',
      'Multicultural environment',
      'Strong clinical exposure',
    ],
  },
  {
    id: 'uzbekistan',
    name: 'Uzbekistan',
    coordinates: { lat: -40, lng: 58 },
    universities: 2,
    flag: '🇺🇿',
    description: 'Emerging destination with quality education and vibrant Indian community.',
    features: [
      'Low cost of living',
      'NMC-approved colleges',
      'English-medium instruction',
      'Warm Indian community',
      'Direct university tie-ups',
    ],
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Career Counseling',
    description: 'We understand your goals, budget & NEET score',
  },
  {
    number: '02',
    title: 'University Selection',
    description: 'Right country, right institution for you',
  },
  {
    number: '03',
    title: 'Documentation',
    description: 'Passport, academic records, eligibility',
  },
  {
    number: '04',
    title: 'Admission Letter',
    description: 'Official university confirmation',
  },
  {
    number: '05',
    title: 'Visa Processing',
    description: 'Smooth, hassle-free visa approval',
  },
  {
    number: '06',
    title: 'Air Ticket',
    description: 'Affordable & convenient flights',
  },
  {
    number: '07',
    title: 'Pre-Departure',
    description: 'Travel, culture & university briefing',
  },
  {
    number: '08',
    title: 'Post-Arrival Support',
    description: 'Airport pickup, hostel & Indian mess',
  },
]

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Parent',
    rating: 5,
    quote: 'They guided my daughter at every step. We felt safe the entire journey — from application to arrival.',
    location: 'Parents & students across India',
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    role: 'Student',
    rating: 5,
    quote: 'They guided my daughter at every step. We felt safe the entire journey — from application to arrival.',
    location: 'Parents & students across India',
  },
  {
    id: 3,
    name: 'Ananya Patel',
    role: 'Student',
    rating: 5,
    quote: 'They guided my daughter at every step. We felt safe the entire journey — from application to arrival.',
    location: 'Parents & students across India',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'Parent',
    rating: 5,
    quote: 'They guided my daughter at every step. We felt safe the entire journey — from application to arrival.',
    location: 'Parents & students across India',
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    role: 'Student',
    rating: 5,
    quote: 'They guided my daughter at every step. We felt safe the entire journey — from application to arrival.',
    location: 'Parents & students across India',
  },
  {
    id: 6,
    name: 'Arjun Kumar',
    role: 'Student',
    rating: 5,
    quote: 'They guided my daughter at every step. We felt safe the entire journey — from application to arrival.',
    location: 'Parents & students across India',
  },
]
