import { useEffect, type CSSProperties, type ReactNode } from 'react'
import { ArrowUpRight, BookOpen, Droplets, Flower2, GraduationCap, Play, Radio } from 'lucide-react'
import {
  BHAGAVATAM_INTRO,
  BHAKTI_PATH,
  CANTO_COURSES,
  FEATURED_COURSES,
  LMS_COURSES_URL,
  MORE_VIDEO_COURSES,
  TEACHER,
  type CantoCourse,
  type FeaturedCourse,
  type VideoCourse,
} from '@/data/courses'
import { HeroDome } from '@/components/layout/HeroDome'
import { MOTTO, SITE_NAME } from '@/lib/site'

const rise = (i: number) => ({ '--i': i }) as CSSProperties

// Scroll reveal: cards in the same row appear one after another.
const stagger = (i: number, perRow: number) => ({ '--d': `${(i % perRow) * 110}ms` }) as CSSProperties

// Adds .is-visible to each .reveal element the first time it scrolls into view.
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const COURSE_COUNT = FEATURED_COURSES.length + CANTO_COURSES.length + BHAKTI_PATH.length + MORE_VIDEO_COURSES.length

const SECTIONS = [
  { id: 'featured', label: 'Featured courses' },
  { id: 'bhagavatam', label: 'Bhāgavatam As It Is' },
  { id: 'bhakti', label: 'Bhakti path' },
  { id: 'more', label: 'More video courses' },
]

const ICONS: Record<VideoCourse['icon'], typeof BookOpen> = {
  gita: BookOpen,
  lotus: Flower2,
  nectar: Droplets,
  degree: GraduationCap,
}

// Links to the IKS-LMS open in a new tab.
const external = { target: '_blank', rel: 'noopener noreferrer' } as const

function SectionHeading({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) {
  return (
    <div className="reveal mb-6 flex flex-col items-center text-center">
      <div className="flex items-center gap-3">
        <span className="hero-flourish" aria-hidden="true" />
        <p className="-mr-[0.3em] text-xs font-semibold uppercase tracking-[0.3em] text-gold-ink">{kicker}</p>
        <span className="hero-flourish flip" aria-hidden="true" />
      </div>
      <h2 className="mt-2 font-serif text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {children && <p className="mt-2 max-w-3xl font-serif text-base text-muted-foreground sm:text-lg">{children}</p>}
    </div>
  )
}

function FeaturedCard({ course, index }: { course: FeaturedCourse; index: number }) {
  return (
    <a
      href={course.href}
      {...external}
      className="course-card reveal group flex flex-col overflow-hidden rounded-2xl border"
      style={stagger(index, 3)}
    >
      <div className="featured-band relative px-6 pb-5 pt-6">
        <span className="new-badge">New course</span>
        <p className="font-serif text-xl font-semibold text-brand-gold-soft">{course.topLabel}</p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{course.meta}</p>
        <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-foreground">{course.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{course.description}</p>
        <span className="card-cta mt-5">
          View course <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </a>
  )
}

function CantoCard({ course, index }: { course: CantoCourse; index: number }) {
  return (
    <a
      href={course.href}
      {...external}
      className="course-card reveal group flex flex-col overflow-hidden rounded-2xl border"
      style={stagger(index, 3)}
    >
      <div className="video-thumb relative aspect-video overflow-hidden">
        <img
          src={`/images/courses/canto-${course.canto}.webp`}
          alt={`Śrīmad Bhāgavatam As It Is — Canto ${course.canto}: ${course.subtitle}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="play-button" aria-hidden="true">
          <Play className="h-5 w-5 translate-x-px fill-current" />
        </span>
        {course.live && (
          <span className="live-badge">
            <Radio className="h-3.5 w-3.5" aria-hidden="true" /> Live
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-ink">Canto {course.canto}</p>
        <h3 className="mt-1 font-serif text-lg font-semibold leading-snug text-foreground">{course.subtitle}</h3>
        {course.description && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{course.description}</p>
        )}
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="free-tag">Free · Video course</span>
          <ArrowUpRight
            className="h-4 w-4 text-gold-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </div>
      </div>
    </a>
  )
}

// Landing page reached from sastranidhi.org's "Pravacana" link.
export function HomePage() {
  useScrollReveal()

  return (
    <>
      {/* Heading on a full-bleed violet band whose domed bottom edge has a
          gold rim, as on sastranidhi.org, Paripraśna and Viśleṣaka; the
          course sections start under the curve (spacing in index.css). */}
      <section className="hero-band mx-auto flex flex-col items-center pt-5 text-center">
        <HeroDome />
        <h1
          className="hero-title rise-in font-serif text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
          style={rise(0)}
        >
          {SITE_NAME}
        </h1>
        <p className="hero-subtitle rise-in mt-1 font-serif text-2xl font-semibold sm:text-3xl" style={rise(1)}>
          {MOTTO}
        </p>
        <div className="hero-divider rise-in mt-3" aria-hidden="true" style={rise(2)}>
          <span className="hero-divider-line" />
          <span className="hero-divider-dot" />
          <span className="hero-divider-star">✦</span>
          <span className="hero-divider-dot" />
          <span className="hero-divider-line flip" />
        </div>
        <p className="hero-intro rise-in mt-4 max-w-2xl font-serif text-base sm:text-lg" style={rise(3)}>
          {COURSE_COUNT} courses on Śrīmad-Bhāgavatam, Bhagavad-gītā, Sanskrit and Indian Knowledge Systems —
          self-paced, live, and free video courses on the IKS-LMS.
        </p>
        <nav className="rise-in mt-5 flex flex-wrap justify-center gap-2" aria-label="Course sections" style={rise(4)}>
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="section-chip">
              {s.label}
            </a>
          ))}
        </nav>
      </section>

      <section id="featured" className="hero-band-next scroll-mt-20">
        <SectionHeading kicker="From Sastranidhi" title="Featured Courses">
          Structured online learning programs in Indian Knowledge Systems, Sanskrit and scriptural studies.
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-3">
          {FEATURED_COURSES.map((c, i) => (
            <FeaturedCard key={c.title} course={c} index={i} />
          ))}
        </div>
      </section>

      <section id="bhagavatam" className="scroll-mt-20 pt-16">
        <SectionHeading kicker="Video course series · Cantos 1–12" title="Śrīmad-Bhāgavatam As It Is">
          {BHAGAVATAM_INTRO}
        </SectionHeading>

        <div className="teacher-strip reveal mx-auto mb-8 flex max-w-xl items-center gap-4 rounded-full border py-2 pl-2 pr-6">
          <img src={TEACHER.image} alt={TEACHER.name} className="h-14 w-14 shrink-0 rounded-full object-cover" />
          <div className="text-left">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Taught by</p>
            <p className="font-serif font-semibold leading-tight text-foreground">
              {TEACHER.name} <span className="font-normal text-muted-foreground">({TEACHER.alias})</span>
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CANTO_COURSES.map((c, i) => (
            <CantoCard key={c.canto} course={c} index={i} />
          ))}
        </div>
      </section>

      <section id="bhakti" className="scroll-mt-20 pt-16">
        <SectionHeading kicker="Five progressive programmes" title="The Bhakti Path">
          Step by step, from first entry to the highest level of study.
        </SectionHeading>
        <ol className="bhakti-path grid gap-4 lg:grid-cols-5">
          {BHAKTI_PATH.map((c, i) => (
            <li key={c.title} className="reveal relative" style={stagger(i, 5)}>
              <a href={c.href} {...external} className="course-card path-step group flex h-full flex-col items-center rounded-2xl border px-4 pb-5 pt-6 text-center">
                <span className="path-medallion font-serif">{i + 1}</span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-ink">Level {i + 1}</p>
                <h3 className="mt-1 font-serif text-lg font-semibold text-foreground">{c.title}</h3>
                <span className="free-tag mt-3">Free · Video course</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section id="more" className="scroll-mt-20 pt-16">
        <SectionHeading kicker="On the IKS-LMS" title="More Video Courses" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MORE_VIDEO_COURSES.map((c, i) => {
            const Icon = ICONS[c.icon]
            return (
              <a
                key={c.title}
                href={c.href}
                {...external}
                className="course-card reveal group flex items-center gap-4 rounded-2xl border p-5"
                style={stagger(i, 4)}
              >
                <span className="icon-medallion">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-lg font-semibold leading-snug text-foreground">{c.title}</h3>
                  <span className="free-tag mt-1.5">Free · Video course</span>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-gold-ink" aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </section>

      <section className="pb-4 pt-16">
        <div className="cta-band reveal flex flex-col items-center gap-4 rounded-3xl px-6 py-10 text-center">
          <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">Begin your study today</h2>
          <p className="max-w-xl font-serif text-brand-lavender-300">
            Every video course is free to join on the Sastranidhi IKS-LMS.
          </p>
          <a href={LMS_COURSES_URL} {...external} className="cta-button">
            Browse all courses <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  )
}
