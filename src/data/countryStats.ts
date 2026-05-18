import type {
  CountryStatsStat,
  RecognitionSegment,
  StudentRegion,
  SuccessMetric,
  TopDestination,
} from '../types'

export const COUNTRY_STATS_HERO_STATS: CountryStatsStat[] = [
  { value: '25+', label: 'Countries Worldwide', icon: 'graduation' },
  { value: '450+', label: 'Universities Recognized', icon: 'globe' },
  { value: '15000+', label: 'Students Guided', icon: 'users' },
  { value: '98%', label: 'Student Satisfaction', icon: 'star' },
]

export const TOP_DESTINATIONS: TopDestination[] = [
  { rank: 1, countryId: 'russia', name: 'Russia', students: '8,500+ Students' },
  { rank: 2, countryId: 'georgia', name: 'Georgia', students: '6,200+ Students' },
  { rank: 3, countryId: 'kazakhstan', name: 'Kazakhstan', students: '4,800+ Students' },
  { rank: 4, countryId: 'kyrgyzstan', name: 'Kyrgyzstan', students: '3,600+ Students' },
  { rank: 5, countryId: 'uzbekistan', name: 'Uzbekistan', students: '2,900+ Students' },
]

export const TOTAL_STUDENTS_LABEL = '25,000+'

export const STUDENT_REGIONS: StudentRegion[] = [
  { label: 'Europe & Asia', percentage: 68, color: '#2563EB' },
  { label: 'Central Asia', percentage: 18, color: '#14B8A6' },
  { label: 'Middle East', percentage: 8, color: '#8B5CF6' },
  { label: 'Others', percentage: 6, color: '#F97316' },
]

export const UNIVERSITY_RECOGNITION: RecognitionSegment[] = [
  { label: 'NMC Approved', percentage: 65, count: 295, color: '#2B7FE8' },
  { label: 'WHO Recognized', percentage: 20, count: 90, color: '#01236A' },
  { label: 'FAIMER Listed', percentage: 10, count: 45, color: '#C10400' },
  { label: 'Other Recognitions', percentage: 5, count: 20, color: '#C5CED8' },
]

export const SUCCESS_METRICS: SuccessMetric[] = [
  { label: 'Admission Rate', value: 87 },
  { label: 'Visa Success', value: 92 },
  { label: 'Course Completion', value: 95 },
  { label: 'Licensing Success', value: 98 },
]
