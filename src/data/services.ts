import type { Service, TeamMember, BlogPost, BudgetRange, NavLink } from '../types'

export const services: Service[] = [
  {
    id: 'admission',
    title: 'Smooth Admission Process',
    icon: 'GraduationCap',
    description: 'End-to-end admission support — from university selection to final offer letter, with zero hidden steps.',
  },
  {
    id: 'documentation',
    title: 'Step by Step Documentation',
    icon: 'FileText',
    description: 'Complete document preparation, verification, and submission handled by our expert team so nothing slips through.',
  },
  {
    id: 'visa',
    title: 'Hassle Free Visa Process',
    icon: 'Stamp',
    description: 'Expert visa guidance with a near-100% success rate. We prepare and review every document before submission.',
  },
  {
    id: 'departure',
    title: 'Pre-Departure Airport Sendoff',
    icon: 'PlaneTakeoff',
    description: 'We accompany students to the airport and coordinate a ceremonial sendoff with family — because every journey matters.',
  },
  {
    id: 'pickup',
    title: 'Airport Pickup',
    icon: 'MapPin',
    description: 'Our dedicated local representative meets students on arrival and escorts them safely to their hostel.',
  },
  {
    id: 'hostel',
    title: 'Best Hostel Service',
    icon: 'Home',
    description: 'Secure, clean, and comfortable accommodation with 24/7 security — we manage our own hostels in Kyrgyzstan.',
  },
  {
    id: 'food',
    title: 'Delicious Indian Food',
    icon: 'Utensils',
    description: 'Authentic Indian vegetarian and non-vegetarian meals served 3 times a day at all partner university locations.',
  },
  {
    id: 'coaching',
    title: 'FMGE / NExT Coaching',
    icon: 'BookOpen',
    description: 'In-house coaching by Indian faculty, integrated from Year 1 — giving our students the highest FMGE passing rates.',
  },
]

export const trustStats = [
  { value: '10+', label: 'Years Experience' },
  { value: '650+', label: 'Students Guided' },
  { value: 'NMC', label: 'Approved Universities' },
  { value: '24/7', label: 'Student Support' },
  { value: 'FMGE', label: 'NExT Guidance' },
  { value: '100%', label: 'Indian Hostel & Food' },
]

export const teamMembers: TeamMember[] = [
  {
    name: 'Director',
    role: 'Founder & Director',
    image: '',
    experience: '10+ years',
    bio: 'Visionary leader with over a decade of experience in international medical education. Personally guided 650+ students to fulfil their dream of becoming doctors.',
  },
  {
    name: 'Admission Head',
    role: 'Head of Admissions',
    image: '',
    experience: '8+ years',
    bio: 'Expert in university selection, documentation, and visa processing across Russia, Georgia, Kyrgyzstan, and Uzbekistan.',
  },
  {
    name: 'Manager',
    role: 'Student Relations Manager',
    image: '',
    experience: '5+ years',
    bio: 'Dedicated to student welfare and day-to-day support from pre-departure to graduation. Your first point of contact for any concern.',
  },
]

export const budgetRanges: BudgetRange[] = [
  {
    label: '₹20 – 30 Lakhs',
    min: 20,
    max: 30,
    universities: ['IEU (Kyrgyzstan)', 'AIMU (Kyrgyzstan)', 'Navoi State University (Uzbekistan)'],
  },
  {
    label: '₹30 – 40 Lakhs',
    min: 30,
    max: 40,
    universities: [
      'ASMI (Uzbekistan)',
      'Mari State University (Russia)',
      'North Caucasian State Medical Academy (Russia)',
      'Amur State Medical Academy (Russia)',
    ],
  },
  {
    label: '₹40 – 50 Lakhs',
    min: 40,
    max: 50,
    universities: [
      'Smolensk State Medical University (Russia)',
      'Orenburg State Medical University (Russia)',
      'KBSU (Russia)',
      'Perm State Medical University (Russia)',
      'CFU (Russia)',
      'Georgian National University SEU',
      'GRUNI (Georgia)',
      'Caucasus University (Georgia)',
    ],
  },
  {
    label: '₹50 – 60 Lakhs',
    min: 50,
    max: 60,
    universities: [
      'NSU (Russia)',
      'DTMU (Georgia)',
      'University of Georgia (UG)',
      'Avicenna Batumi Medical University',
      'CIU (Georgia)',
    ],
  },
]

export const blogPosts: BlogPost[] = [
  { id: '1', title: 'MBBS Abroad for Indian Students — Complete 2026 Guide', slug: 'mbbs-abroad-indian-students-2026', excerpt: 'Everything an Indian student and parent needs to know before choosing MBBS abroad — from NEET to graduation.', category: 'Guide' },
  { id: '2', title: 'MBBS in Russia Fees 2026 — University-wise Breakdown', slug: 'mbbs-russia-fees-2026', excerpt: 'A detailed fee structure for all top Russian medical universities accepted by the NMC India.', category: 'Russia' },
  { id: '3', title: 'Cheapest Countries for MBBS Abroad', slug: 'cheapest-countries-mbbs-abroad', excerpt: 'Compare total costs across Russia, Georgia, Kyrgyzstan, and Uzbekistan to find the most affordable option.', category: 'Comparison' },
  { id: '4', title: 'MBBS Abroad vs Private MBBS in India — Which is Better?', slug: 'mbbs-abroad-vs-private-mbbs-india', excerpt: 'An honest side-by-side comparison of cost, quality, clinical exposure, and career outcomes.', category: 'Guide' },
  { id: '5', title: 'FMGE / NExT Preparation Guide for MBBS Abroad Students', slug: 'fmge-next-preparation-guide', excerpt: 'How to clear FMGE on your first attempt — study plans, books, and Pruthvi\'s in-house coaching advantage.', category: 'Exam Prep' },
  { id: '6', title: 'NMC Guidelines for MBBS Abroad — 2026 Updated', slug: 'nmc-guidelines-mbbs-abroad-2026', excerpt: 'The complete and updated NMC eligibility, screening test, and recognition criteria for foreign MBBS graduates.', category: 'Guide' },
  { id: '7', title: 'Best Country for MBBS After NEET — 2026 Rankings', slug: 'best-country-mbbs-after-neet', excerpt: 'Russia, Georgia, Kyrgyzstan or Uzbekistan? We rank them by safety, cost, clinical exposure, and FMGE success.', category: 'Comparison' },
  { id: '8', title: 'MBBS in Georgia for Indian Students — Everything You Need to Know', slug: 'mbbs-georgia-indian-students', excerpt: 'Why Georgia is emerging as one of the safest and most reputed MBBS abroad destinations for Indian students.', category: 'Georgia' },
  { id: '9', title: 'Is MBBS Abroad Worth It? — Honest Answer for 2026', slug: 'is-mbbs-abroad-worth-it-2026', excerpt: 'Career outcomes, return on investment, and what MBBS abroad graduates are doing 5 years later.', category: 'Guide' },
]

export const navLinks: NavLink[] = [
  { label: 'Why Pruthvi', path: '/why-pruthvi' },
  { label: 'Best Countries', path: '/best-countries' },
  { label: 'Expert Team', path: '/expert-team' },
  { label: 'Observership', path: '/observership' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Books & Blogs', path: '/books-blogs' },
  { label: 'Contact Us', path: '/contact' },
]
