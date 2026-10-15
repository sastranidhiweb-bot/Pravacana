import { ArrowUpRight } from 'lucide-react'
import type { CSSProperties, PointerEvent, ReactNode } from 'react'
import { Mandala } from '@/components/layout/Mandala'
import { Tagline } from '@/components/layout/Tagline'
import { MOTTO, SITE_NAME } from '@/lib/site'

type SiteCard = {
  title: string
  site: string
  // Artwork in public/images/cards/, shown whole (never cropped).
  image: string
  imageAlt: string
  // Site URL, opened in a new tab — leave empty until the link is available.
  href: string
}

// TODO: placeholders until the final card titles, site names and links arrive.
const CARDS: SiteCard[] = [
  {
    title: 'Bhagavad-Gītā',
    site: 'Coming soon',
    image: '/images/cards/gita-krishna-arjuna-chariot.jpg',
    imageAlt: 'Kṛṣṇa as Arjuna’s charioteer on the battlefield of Kurukṣetra',
    href: '',
  },
  {
    title: 'Upaniṣads',
    site: 'Coming soon',
    image: '/images/cards/upanishads-rishi-teaching.jpg',
    imageAlt: 'A ṛṣi teaching his students beneath a banyan tree',
    href: '',
  },
  {
    title: 'Brahma-sūtras',
    site: 'Coming soon',
    image: '/images/cards/brahmasutras-vyasadeva.jpg',
    imageAlt: 'Śrīla Vyāsadeva writing in the Himalayas at Badarikāśrama',
    href: '',
  },
  {
    title: 'Bhāgavatam',
    site: 'Coming soon',
    image: '/images/cards/bhagavatam-krishna-flute.jpg',
    imageAlt: 'Kṛṣṇa playing His flute in Vṛndāvana',
    href: '',
  },
  {
    title: 'Viṣṇu Purāṇa',
    site: 'Coming soon',
    image: '/images/cards/vishnu-ananta-sesa.jpg',
    imageAlt: 'Lord Viṣṇu reclining on Ananta-Śeṣa with Lakṣmī, and Brahmā on the lotus',
    href: '',
  },
  {
    title: 'Ṣaṭ-sandarbhas',
    site: 'Coming soon',
    image: '/images/cards/sandarbhas-jiva-gosvami.jpg',
    imageAlt: 'Śrīla Jīva Gosvāmī writing before Śrī Śrī Rādhā-Dāmodara',
    href: '',
  },
]

const MAX_TILT_DEG = 12

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Tilt the card toward the pointer and move the glare highlight with it.
function handleTilt(e: PointerEvent<HTMLElement>) {
  if (e.pointerType !== 'mouse' || prefersReducedMotion()) return
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width
  const y = (e.clientY - rect.top) / rect.height
  el.style.setProperty('--rx', `${(0.5 - y) * MAX_TILT_DEG}deg`)
  el.style.setProperty('--ry', `${(x - 0.5) * MAX_TILT_DEG}deg`)
  el.style.setProperty('--gx', `${x * 100}%`)
  el.style.setProperty('--gy', `${y * 100}%`)
  el.style.setProperty('--px', `${x - 0.5}`)
  el.style.setProperty('--py', `${y - 0.5}`)
}

function resetTilt(e: PointerEvent<HTMLElement>) {
  e.currentTarget.style.setProperty('--rx', '0deg')
  e.currentTarget.style.setProperty('--ry', '0deg')
  e.currentTarget.style.setProperty('--px', '0')
  e.currentTarget.style.setProperty('--py', '0')
}

function TiltCard({ card, index }: { card: SiteCard; index: number }) {
  const body: ReactNode = (
    <>
      <div className="card-art">
        <img className="card-art-fill" src={card.image} alt="" aria-hidden="true" />
        <img className="card-art-main" src={card.image} alt={card.imageAlt} />
      </div>
      <span className="card-frame" aria-hidden="true" />
      <div className="card-text relative mt-auto pr-2">
        <h2 className="font-serif text-2xl font-semibold text-white sm:text-[1.7rem]">{card.title}</h2>
        <p className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold">{card.site}</span>
          {card.href ? (
            <ArrowUpRight
              className="h-4 w-4 self-center text-brand-lavender-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-gold"
              aria-hidden="true"
            />
          ) : card.site !== 'Coming soon' ? (
            <span className="text-xs text-brand-lavender-300">(Coming soon)</span>
          ) : null}
        </p>
      </div>
      <span className="tilt-glare" aria-hidden="true" />
    </>
  )

  const className = 'tilt-card group relative flex h-full min-h-48 flex-col rounded-3xl border p-6'
  const tiltHandlers = { onPointerMove: handleTilt, onPointerLeave: resetTilt }

  return (
    <div className="rise-in" style={{ '--i': index } as CSSProperties}>
      {card.href ? (
        <a href={card.href} target="_blank" rel="noopener noreferrer" className={className} {...tiltHandlers}>
          {body}
        </a>
      ) : (
        <div className={className} {...tiltHandlers}>
          {body}
        </div>
      )}
    </div>
  )
}

// Landing page reached from sastranidhi.org's "Pravacana" link.
export function HomePage() {
  return (
    <>
      <div className="cosmos" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
        <span className="stars" />
        {/* Mandala + orbit rings live in the full-viewport fixed layer so they
            are never clipped; the stage centres them on the card grid. */}
        <div className="cosmos-stage">
          <Mandala className="hero-mandala" />
          <span className="hero-orbit" />
          <span className="hero-orbit two" />
        </div>
      </div>

      {/* Fills the viewport below the header (4rem) minus <main>'s py-8 (4rem),
          so all six cards are visible without scrolling on desktop. */}
      <div className="-mt-2 flex flex-col gap-6 lg:h-[calc(100svh-7.5rem)] lg:min-h-[34rem]">
        <section className="hero-plaque mx-auto flex flex-col items-center text-center">
          <h1 className="hero-title font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            {SITE_NAME}
          </h1>
          <div className="mt-1 flex items-center gap-3 sm:gap-4">
            <span className="hero-flourish" aria-hidden="true" />
            {/* Negative right margin cancels the trailing letter-spacing so the text stays centred. */}
            <p className="-mr-[0.4em] font-serif text-xs font-semibold uppercase tracking-[0.4em] text-accent sm:text-sm">
              {MOTTO}
            </p>
            <span className="hero-flourish flip" aria-hidden="true" />
          </div>
          <Tagline className="mt-1.5 font-serif text-sm italic text-muted-foreground sm:text-base" />
        </section>

        <section className="flex-1">
          <div className="grid h-full gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {CARDS.map((card, i) => (
              <TiltCard key={card.title} card={card} index={i} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
