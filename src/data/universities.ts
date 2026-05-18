import type { CountryData } from '../types'

// ── asset imports ────────────────────────────────────────────────────

// Russia university photos
import imgNSU      from '../assets/Novosibirsk State University .jpg'
import imgCFU      from '../assets/Crimea Federal University.webp'
import imgOrenburg from '../assets/Orenburg State Medical University.webp'
import imgPerm     from '../assets/Perm State Medical University.webp'
import imgMari     from '../assets/Mari State University.jpeg'
import imgNCMA     from '../assets/North Caucasian State Medical Academy.jpg'
import imgKBSU     from '../assets/Kabardino-Balkarian State University.webp'
import imgAmur     from '../assets/Amur State Medical Academy.png'
import imgSmolensk from '../assets/Smolensk State Medical University .avif'

// Georgia university photos
import imgSEU         from '../assets/Georgian National University SEU .jpg'
import imgDTMU        from '../assets/David Tvildiani Medical University .jpg'
import imgUG          from '../assets/The University of Georgia .webp'
import imgAvicennaBat from '../assets/Avicenna Batumi Medical University .jpg'
import imgCIU         from '../assets/Caucasus International University .webp'
import imgGRUNI       from '../assets/Grigol Robakidze University .jpg'
import imgCU          from '../assets/Caucasus University .webp'

// Kyrgyzstan university photos
import imgIEU  from '../assets/International European University .webp'
import imgAIMU from '../assets/Avicenna International Medical University .png'

// Uzbekistan university photos
import imgASMI  from '../assets/Andijan State Medical Institute .jpg'
import imgNavoi from '../assets/Navoi State University .png'

export const countries: CountryData[] = [
  // ── RUSSIA ──────────────────────────────────────────────────────────
  {
    id: 'russia',
    name: 'Russia',
    flag: '🇷🇺',
    lat: 61.5,
    lon: 105.3,
    tagline: 'World-Class Medical Education in the Land of Science',
    highlights: [
      'Globally reputed universities',
      'Advanced medical infrastructure',
      'Strong academic curriculum',
      'High-quality practical exposure',
      'Recognized worldwide',
    ],
    universities: [
      {
        id: 'nsu',
        name: 'Novosibirsk State University',
        shortName: 'NSU',
        country: 'russia',
        established: 1959,
        image: imgNSU,
        description:
          'One of Russia\'s most prestigious and highest-ranked public research institutions. Located in the heart of a major scientific hub, the university offers a 6-year English-medium MBBS program heavily oriented toward scientific research and modern medical technology. Students at NSU benefit from high-level clinical training at the Meshalkin National Medical Research Center, gaining exposure to advanced cardiovascular surgery and diagnostic procedures. The curriculum is designed to foster critical thinking, ensuring graduates are well-prepared for international licensing exams like the USMLE and PLAB.',
        highlights: ['Meshalkin National Medical Research Center', 'USMLE & PLAB ready', '6-year English MBBS'],
      },
      {
        id: 'cfu',
        name: 'Crimea Federal University',
        shortName: 'CFU',
        country: 'russia',
        established: 1918,
        image: imgCFU,
        description:
          'A historic institution with roots dating back to 1918, making it one of the oldest and most established medical schools in the region. CFU has become a top choice for international students due to its long-standing English-medium curriculum and a massive, supportive Indian student community. The university is famous for its Electronic Anatomy center and its partnership with 11 large multi-profile clinics across the Crimean peninsula. CFU provides a vibrant student life with dedicated Indian mess facilities, sports centers, and 16 educational buildings.',
        highlights: ['Electronic Anatomy Center', '11 multi-profile clinics', 'Large Indian community'],
      },
      {
        id: 'orenburg',
        name: 'Orenburg State Medical University',
        country: 'russia',
        established: 1944,
        image: imgOrenburg,
        description:
          'A leading government institution recognized for its rigorous academic standards and exceptional FMGE/NExT passing rates among Indian graduates. The university operates 18 affiliated teaching hospitals with over 1,000 beds, allowing students to begin hands-on clinical rotations as early as their third year. Its infrastructure includes a state-of-the-art Clinical Skills Simulation Center equipped with high-fidelity mannequins, ensuring that students master emergency protocols and surgical basics in a controlled environment before interacting with patients.',
        highlights: ['18 teaching hospitals, 1000+ beds', 'Clinical Skills Simulation Center', 'Top FMGE/NExT passing rates'],
      },
      {
        id: 'perm',
        name: 'Perm State Medical University',
        country: 'russia',
        established: 1916,
        image: imgPerm,
        description:
          'A cornerstone of medical education in the Ural region since 1916. Particularly noted for its high-tech approach to learning, featuring a unique Center of Electronic Anatomy that utilizes virtual reality and 3D modeling to help students master human anatomy. With nine multi-disciplinary hospitals attached directly to the campus, students participate in full-responsibility internship rotations during their final year. The institution maintains a vast medical library and emphasizes a European-style medical curriculum.',
        highlights: ['VR & 3D anatomy center', '9 multi-disciplinary hospitals', 'European-style curriculum'],
      },
      {
        id: 'mari',
        name: 'Mari State University',
        country: 'russia',
        established: 1972,
        image: imgMari,
        description:
          'Established in 1972 in the peaceful city of Yoshkar-Ola, Mari State has grown into a major center for international medical education, currently hosting over 1,500 Indian students. A key feature of this university is the integration of exclusive NExT and FMGE coaching into the standard academic schedule, helping students prepare for their return to India from an early stage. The campus environment is known for its safety and dedicated local representatives who provide 24/7 assistance to international students.',
        highlights: ['1500+ Indian students', 'NExT & FMGE coaching integrated', '24/7 local support'],
      },
      {
        id: 'ncma',
        name: 'North Caucasian State Medical Academy',
        country: 'russia',
        established: 1938,
        image: imgNCMA,
        description:
          'Founded in 1938, located in a scenic region and prioritizes a personalized teaching methodology. The academy is known for maintaining a low student-to-teacher ratio, typically 8 to 10 students per group, which ensures that every student receives detailed attention during laboratory sessions and clinical rounds. It strictly follows the European Credit Transfer System (ECTS), which facilitates international academic mobility and ensures the degree is recognized by major global medical councils.',
        highlights: ['8–10 student:teacher ratio', 'ECTS recognized', 'Personalized teaching'],
      },
      {
        id: 'kbsu',
        name: 'Kabardino-Balkarian State University',
        shortName: 'KBSU',
        country: 'russia',
        established: 1932,
        image: imgKBSU,
        description:
          'Established in 1932, a government-funded institution in Nalchik known for its robust clinical foundation. The university partners with more than 12 teaching hospitals, including a Level 1 Trauma Center, providing students exposure to over 45,000 inpatient admissions annually. The urban campus is equipped with modern diagnostic technology, such as 128-slice CT scanners and 3 Tesla MRI systems, ensuring that students are trained on the same equipment used in top-tier global hospitals.',
        highlights: ['Level 1 Trauma Center', '128-slice CT & 3T MRI', '45,000+ inpatient cases/year'],
      },
      {
        id: 'amur',
        name: 'Amur State Medical Academy',
        country: 'russia',
        established: 1952,
        image: imgAmur,
        description:
          'With its history stretching back to 1952, situated near the Chinese border and noted for its disciplined, academy-style academic environment. The academy includes a 500-bed teaching hospital and a comprehensive library with over 10,000 medical journals. A unique aspect of their curriculum is the specialized Russian language modules designed specifically for international students, which enable them to communicate effectively with local patients during their senior clinical rotations.',
        highlights: ['500-bed teaching hospital', '10,000+ medical journals', 'Specialized Russian language support'],
      },
      {
        id: 'smolensk',
        name: 'Smolensk State Medical University',
        country: 'russia',
        established: 1920,
        image: imgSmolensk,
        description:
          'Established in 1920, one of the oldest and most prestigious government medical institutions in Russia, located approximately 360 kilometres west of Moscow. Over its century-long history, the university has evolved into a major scientific and educational center, currently recognized by the WHO, NMC (India), and other global medical councils. Particularly popular among international students for its fully English-medium MBBS program and its proximity to the capital.',
        highlights: ['WHO & NMC recognized', 'Near Moscow', 'Century-long history'],
      },
    ],
  },

  // ── GEORGIA ──────────────────────────────────────────────────────────
  {
    id: 'georgia',
    name: 'Georgia',
    flag: '🇬🇪',
    lat: 41.7,
    lon: 44.4,
    tagline: 'European-Standard Medical Degrees, Safe & Accessible',
    highlights: [
      'European standard education',
      'Modern hospitals & clinical training',
      'Safe for students',
      'High visa success rate',
      'Globally accepted degree',
    ],
    universities: [
      {
        id: 'seu',
        name: 'Georgian National University SEU',
        shortName: 'SEU',
        country: 'georgia',
        established: 2001,
        image: imgSEU,
        description:
          'Established in 2001, the largest private higher education institution in Georgia and a premier hub for international medical students. The university is distinguished by its ultra-modern campus in Tbilisi, which features over 160 study rooms and sophisticated simulation centers that adhere to the highest European standards. SEU offers a 6-year English-medium MD program that emphasizes early clinical exposure, allowing students to bridge the gap between theory and practice from their initial years of study. With a student body representing over 50 countries, the university provides a vibrant multicultural environment, dedicated FMGE/NExT coaching, and high-quality hostel facilities with Indian mess options.',
        highlights: ['160+ study rooms', 'FMGE/NExT coaching', 'Students from 50+ countries'],
      },
      {
        id: 'dtmu',
        name: 'David Tvildiani Medical University',
        shortName: 'DTMU',
        country: 'georgia',
        established: 1989,
        image: imgDTMU,
        description:
          'Founded in 1989, was the first private medical school in Georgia to offer a curriculum entirely in English. It is renowned for its academic rigor and a specialized focus on preparing students for international licensing exams like the USMLE. The 6-year program is structured to provide a deep foundation in basic sciences before transitioning into intensive clinical clerkships. Students at DTMU benefit from a rich digital and physical library and a curriculum that is highly respected by global medical bodies, making it a top choice for those aiming for careers in the United States or Europe.',
        highlights: ['First English-medium private school', 'USMLE focused', 'USMLE, PLAB ready'],
      },
      {
        id: 'ug',
        name: 'The University of Georgia',
        shortName: 'UG',
        country: 'georgia',
        established: 2004,
        image: imgUG,
        description:
          'Established in 2004, widely recognized for having one of the most advanced infrastructures in the region. The university hosts a massive international student population and offers a 6-year MD program that is fully compliant with WHO and NMC standards. UG is known for its high-tech laboratories and "smart" classrooms that facilitate an interactive learning experience. The university\'s strong clinical network in Tbilisi ensures that students receive diverse hands-on training in various medical specialties, supported by a campus life that includes numerous professional and cultural student clubs.',
        highlights: ['WHO & NMC compliant', 'Smart classrooms', 'Advanced infrastructure'],
      },
      {
        id: 'avicenna-batumi',
        name: 'Avicenna Batumi Medical University',
        country: 'georgia',
        established: 2022,
        image: imgAvicennaBat,
        description:
          'Established in 2022, a modern institution located in the scenic coastal city of Batumi. Founded on the platform of a network of five multi-profile hospitals, offering a unique "hospital-based" education model where clinical training is integrated into the campus experience from day one. The university follows the "Learning for Life" philosophy, utilizing a state-of-the-art simulation center equipped with American-standard technology. Despite being a newer institution, it has quickly gained a reputation for its research-oriented approach and its commitment to meeting Western academic standards in medical training.',
        highlights: ['5 multi-profile hospital network', 'Hospital-based learning', 'American-standard simulation'],
      },
      {
        id: 'ciu',
        name: 'Caucasus International University',
        shortName: 'CIU',
        country: 'georgia',
        established: 1995,
        image: imgCIU,
        description:
          'Founded in 1995, a prominent multi-profile university that maintains an extensive clinical foundation through partnerships with over 44 affiliated hospitals. This vast network allows students to gain exposure to a wide variety of medical cases and healthcare environments throughout their 6-year program. CIU is dedicated to providing a supportive atmosphere for international students, featuring modern anatomy labs, simulation centers, and comprehensive on-campus facilities that include Indian dining options and 24/7 student assistance.',
        highlights: ['44 affiliated hospitals', 'Indian dining options', '24/7 student assistance'],
      },
      {
        id: 'gruni',
        name: 'Grigol Robakidze University',
        shortName: 'GRUNI',
        country: 'georgia',
        established: 1992,
        image: imgGRUNI,
        description:
          'Established in 1992, a prestigious private institution that has invested heavily in simulation-based medical education. Its School of Medicine is famous for its Simulation Training Laboratory Centre, which allows students to perfect their diagnostic and surgical skills on high-fidelity phantoms before beginning patient rotations. The university maintains a significant medical library and provides a curriculum that is fully aligned with international standards.',
        highlights: ['Simulation Training Laboratory Centre', 'High-fidelity phantoms', 'International standards'],
      },
      {
        id: 'cu',
        name: 'Caucasus University',
        shortName: 'CU',
        country: 'georgia',
        established: 1998,
        image: imgCU,
        description:
          'Established in 1998, has expanded its academic excellence into the field of medicine with a program that emphasizes internationalization and innovation. The university is highly ranked for its academic quality and maintains strong ties with various international medical organizations. Its medical curriculum is designed to meet European standards, focusing on research proficiency and the use of modern diagnostic tools.',
        highlights: ['European-standard curriculum', 'Research proficiency', 'International medical ties'],
      },
    ],
  },

  // ── KYRGYZSTAN ───────────────────────────────────────────────────────
  {
    id: 'kyrgyzstan',
    name: 'Kyrgyzstan',
    flag: '🇰🇬',
    lat: 41.2,
    lon: 74.8,
    tagline: 'Affordable Excellence — Official South India Representatives for IEU & AIMU',
    highlights: [
      'Affordable fee structure',
      'NMC & WHO recognized universities',
      'English medium education',
      'Indian food & safe environment',
      'High FMGE passing rate',
    ],
    specialNote:
      'We are the official South India representatives for IEU (International European University) and AIMU (Avicenna International Medical University), Bishkek. Beyond admissions, we provide a "home away from home" with our own dedicated hostels and authentic Indian mess facilities. We take immense pride in fostering a vibrant Maharashtrian student community, where traditional festivals are celebrated with great enthusiasm and cultural joy. We also conduct specialized FMGE coaching classes.',
    universities: [
      {
        id: 'ieu',
        name: 'International European University',
        shortName: 'IEU',
        country: 'kyrgyzstan',
        established: 2002,
        image: imgIEU,
        description:
          'A modern private university in Bishkek offering a globally recognized 6-year MBBS program (5 years academic + 1 year internship) taught entirely in English. IEU is approved by the NMC (India) and WHO, featuring advanced infrastructure like smart classrooms, simulation centers, and affiliated hospitals for clinical training. The institution is dedicated to providing high-quality, affordable medical education to international students with strong support systems.',
        highlights: ['NMC & WHO approved', 'Smart classrooms & simulation centers', '6-year English MBBS'],
      },
      {
        id: 'aimu',
        name: 'Avicenna International Medical University',
        shortName: 'AIMU',
        country: 'kyrgyzstan',
        established: 2019,
        image: imgAIMU,
        description:
          'Established in 2019, a prominent medical institution in Bishkek known for providing high-quality, affordable medical education to international students. Offers a comprehensive 6-year MBBS program (5.5 years academic + 0.5 year internship) with the entire curriculum taught in English. The University is fully recognized by the NMC (India), WHO, and is listed in the World Directory of Medical Schools (WDOMS), ensuring the degree is valid for licensing exams like NEXT, USMLE, and PLAB. Features modern urban campus with advanced simulation centers, well-equipped laboratories, and a library containing over 5,000 medical volumes. Provides separate, secure hostels for boys and girls with 24/7 security, Wi-Fi, and an Indian mess serving both vegetarian and non-vegetarian food options three times a day.',
        highlights: ['NMC, WHO & WDOMS listed', 'Separate secure hostels', 'Indian mess — 3 meals/day'],
      },
    ],
  },

  // ── UZBEKISTAN ───────────────────────────────────────────────────────
  {
    id: 'uzbekistan',
    name: 'Uzbekistan',
    flag: '🇺🇿',
    lat: 41.3,
    lon: 64.6,
    tagline: 'Budget-Friendly MBBS with Top-Quality Infrastructure',
    highlights: [
      'Budget-friendly education',
      'NMC-approved universities',
      'English-medium programs',
      'Good Indian student community',
      'Quality hostel & facilities',
    ],
    universities: [
      {
        id: 'asmi',
        name: 'Andijan State Medical Institute',
        shortName: 'ASMI',
        country: 'uzbekistan',
        established: 1955,
        image: imgASMI,
        description:
          'Established in 1955, one of the oldest and most respected government medical institutions in Uzbekistan. Located in the culturally rich Fergana Valley—the birthplace of the Mughal Emperor Babur—the institute has a long-standing reputation for academic excellence. It offers a comprehensive 6-year English-medium MBBS program (MD) that is fully recognized by the WHO and NMC. The university is home to over 56 specialized departments and provides extensive clinical exposure through its large network of affiliated teaching hospitals. Its modern infrastructure includes advanced simulation centers and digital classrooms, while the campus is known for its vibrant international student community and dedicated Indian mess facilities.',
        highlights: ['WHO & NMC recognized', '56 specialized departments', 'Dedicated Indian mess'],
      },
      {
        id: 'navoi',
        name: 'Navoi State University',
        country: 'uzbekistan',
        established: 1983,
        image: imgNavoi,
        description:
          'Traces its origins back to 1983, with its medical department rapidly emerging as a popular destination for international students. The university provides a modern, research-oriented medical curriculum taught entirely in English, designed to meet global standards for licensing exams like the NExT/FMGE and USMLE. Students at Navoi benefit from a student-centric learning environment spread across multiple academic buildings in the city. The program emphasizes both theoretical mastery and practical skills, supported by high-tech laboratories and clinical rotations at regional multi-profile hospitals.',
        highlights: ['Research-oriented curriculum', 'NExT/FMGE & USMLE aligned', 'Modern urban campus'],
      },
    ],
  },
]
