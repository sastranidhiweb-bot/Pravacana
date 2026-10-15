import { ArrowUpRight, AudioLines } from 'lucide-react'
import { Mandala } from '@/components/layout/Mandala'
import { Tagline } from '@/components/layout/Tagline'
import { MOTTO, SASTRANIDHI_URL, SITE_NAME } from '@/lib/site'

// Footer, in the header's branded treatment (violet
// gradient, gold shimmer hairline — styles in index.css): a slowly turning
// mandala behind the brand, tagline, and a link back to the Sastranidhi portal.
export function Footer() {
  return (
    <footer className="site-footer relative overflow-hidden">
      <Mandala className="footer-mandala" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-10 pt-12 text-center sm:px-6">
        <a href="/" className="group flex items-center gap-3 font-serif text-2xl font-bold tracking-wide">
          <span className="logo-badge transition-transform duration-300 group-hover:scale-110">
            <AudioLines className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          <span className="brand-text">{SITE_NAME}</span>
        </a>

        <div className="mt-3 flex items-center gap-3 sm:gap-4">
          <span className="hero-flourish" aria-hidden="true" />
          {/* Negative right margin cancels the trailing letter-spacing so the text stays centred. */}
          <p className="-mr-[0.4em] font-serif text-xs font-semibold uppercase tracking-[0.4em] text-brand-gold-soft">
            {MOTTO}
          </p>
          <span className="hero-flourish flip" aria-hidden="true" />
        </div>

        <Tagline className="mt-3 max-w-2xl font-serif text-sm italic text-brand-lavender-300/85 sm:text-base" />

        <a
          href={SASTRANIDHI_URL}
          className="footer-pill group mt-7 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-brand-lavender-200"
        >
          A <span className="font-serif font-semibold text-brand-gold">Sastranidhi</span> initiative
          <ArrowUpRight
            className="h-4 w-4 text-brand-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>

      <div className="relative border-t border-white/10 px-4 py-4 text-center text-xs tracking-wide text-brand-lavender-300/70 sm:px-6">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  )
}
