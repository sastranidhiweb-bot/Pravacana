// Course catalogue shown on the Pravacana page.
// Sources: the "Courses" section of sastranidhi.org (Sastranidhi-OAuth
// src/data/siteData.js) and the video courses on the IKS-LMS
// (sastranidhi.edmingle.com/courses).

export const LMS_URL = 'https://sastranidhi.edmingle.com'
export const LMS_COURSES_URL = `${LMS_URL}/courses`

export const TEACHER = {
  name: 'Śrīmān Mādhava Gopīnātha Dāsa',
  alias: 'Madhava Sharma',
  image: '/images/courses/teacher.webp',
}

// The self-paced courses featured on sastranidhi.org.
export type FeaturedCourse = {
  topLabel: string
  title: string
  description: string
  meta: string
  href: string
}

export const FEATURED_COURSES: FeaturedCourse[] = [
  {
    topLabel: 'Sanskrit for Śāstra',
    title: 'Sanskrit for Śāstric Study',
    description:
      'Learn Sanskrit with a focused approach to reading, understanding, and studying Śāstric texts.',
    meta: 'Self-paced · IKS-LMS',
    href: `${LMS_URL}/`,
  },
  {
    topLabel: 'Indian Knowledge Systems',
    title: 'Introduction to Indian Knowledge Systems',
    description:
      'Discover the foundations, scope, disciplines, and continuing relevance of India’s vast knowledge traditions.',
    meta: 'Self-paced · IKS-LMS',
    href: `${LMS_URL}/`,
  },
  {
    topLabel: 'Bhagavad-gītā',
    title: 'Bhagavad-gītā with Gauḍīya Commentaries',
    description:
      'Study the Bhagavad-gītā through the rich philosophical and devotional insights of the Gauḍīya Vaiṣṇava commentarial tradition.',
    meta: 'Self-paced · IKS-LMS',
    href: `${LMS_URL}/`,
  },
]

// "Bhāgavatam As It Is": one video course per canto on the IKS-LMS.
// Skandhas 1–3 also run live, with the descriptions used on sastranidhi.org.
export const BHAGAVATAM_INTRO =
  'A systematic study of Śrīmad-Bhāgavatam, canto by canto, combining the original text, Śrīla Prabhupāda’s Bhaktivedanta purports, traditional Vaiṣṇava commentarial insights, thematic study, recitation, presentations, and structured learning resources.'

export type CantoCourse = {
  canto: number
  subtitle: string
  description?: string
  live?: boolean
  href: string
}

export const CANTO_COURSES: CantoCourse[] = [
  {
    canto: 1,
    subtitle: 'Creation',
    live: true,
    description:
      'Enter the world of Śrīmad-Bhāgavatam through its foundational teachings, personalities, questions, and the circumstances that lead to the narration of the Bhāgavata.',
    href: `${LMS_URL}/course/SrimadBhagavatamAsitis-113306`,
  },
  {
    canto: 2,
    subtitle: 'The Cosmic Manifestation',
    live: true,
    description:
      'A focused study of the universal form, creation, meditation, the process of hearing, and the deeper philosophical structure of Śrīmad-Bhāgavatam.',
    href: `${LMS_URL}/course/BhagavatamCanto2-113611`,
  },
  {
    canto: 3,
    subtitle: 'The Status Quo',
    live: true,
    description:
      'Explore creation, cosmology, Varāha-līlā, the teachings of Kapiladeva, and the profound journey of Kardama Muni and Devahūti.',
    href: `${LMS_URL}/course/BhagavatamCanto3-113612`,
  },
  { canto: 4, subtitle: 'The Creation of the Fourth Order', href: `${LMS_URL}/course/BhagavatamCanto4-113613` },
  { canto: 5, subtitle: 'The Creative Impetus', href: `${LMS_URL}/course/BhagavatamCanto5-113614` },
  { canto: 6, subtitle: 'Prescribed Duties for Mankind', href: `${LMS_URL}/course/BhagavatamCanto6-113615` },
  { canto: 7, subtitle: 'The Science of God', href: `${LMS_URL}/course/BhagavatamCanto7-113616` },
  { canto: 8, subtitle: 'Withdrawal of the Cosmic Creations', href: `${LMS_URL}/course/BhagavatamCanto8-113617` },
  { canto: 9, subtitle: 'Liberation', href: `${LMS_URL}/course/BhagavatamCanto9-113618` },
  { canto: 10, subtitle: 'The Summum Bonum', href: `${LMS_URL}/course/BhagavatamCanto10-113619` },
  { canto: 11, subtitle: 'General History', href: `${LMS_URL}/course/BhagavatamCanto11-113620` },
  { canto: 12, subtitle: 'The Age of Deterioration', href: `${LMS_URL}/course/BhagavatamCanto12-113621` },
]

// The five Bhakti programmes on the IKS-LMS, in order of progression.
export type PathCourse = { title: string; href: string }

export const BHAKTI_PATH: PathCourse[] = [
  { title: 'Bhakti-praveśa', href: `${LMS_URL}/course/BhaktiPravesha-113631` },
  { title: 'Bhakti-śāstrī', href: `${LMS_URL}/course/BhaktiShastri-113632` },
  { title: 'Bhakti-vaibhava', href: `${LMS_URL}/course/BhaktiVaibhava-113633` },
  { title: 'Bhakti-vedānta', href: `${LMS_URL}/course/BhaktiVedanta-113634` },
  { title: 'Bhakti-sārvabhauma', href: `${LMS_URL}/course/BhaktiSarvabhauma-113635` },
]

// The remaining video courses on the IKS-LMS. `icon` keys ICONS in HomePage.
export type VideoCourse = { title: string; icon: 'gita' | 'lotus' | 'nectar' | 'degree'; href: string }

export const MORE_VIDEO_COURSES: VideoCourse[] = [
  { title: 'Bhagavad-gītā', icon: 'gita', href: `${LMS_URL}/course/BhagavadGita-113610` },
  { title: 'Pāda-padma', icon: 'lotus', href: `${LMS_URL}/course/PadaPadma-113624` },
  { title: 'Nectar of Instruction', icon: 'nectar', href: `${LMS_URL}/course/NectarofInstruction-113626` },
  { title: 'MA in Indian Knowledge Systems', icon: 'degree', href: `${LMS_URL}/course/MAIKSIndianKnowledgeSystem-113630` },
]
