import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { MOTTO, SASTRANIDHI_URL, SITE_NAME, SITE_NAME_SANSKRIT } from '@/lib/site'

// Brand, theme, and sign-in/sign-up on the Sastranidhi portal.
export function Header() {
  return (
    // Brand's header treatment (sastranidhi.org): a layered violet gradient
    // banner with a gold shimmer hairline (styles in index.css), independent
    // of light/dark mode — the header stays branded either way.
    <header className="site-header sticky top-0 z-40">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <a href="/" className="group flex shrink-0 items-center gap-3">
          <span className="brand-logo transition-transform duration-300 group-hover:scale-105">
            <img src="/images/sastranidhi-logo.png" alt="Śāstranidhi" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-xl font-bold tracking-wide">
              <span className="brand-text">{SITE_NAME}</span>{' '}
              <span className="brand-sanskrit" lang="sa">({SITE_NAME_SANSKRIT})</span>
            </span>
            <span className="brand-tagline">{MOTTO}</span>
          </span>
        </a>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle className="rounded-full text-brand-lavender-200 hover:bg-white/10 hover:text-brand-gold" />
          <Button asChild variant="ghost" size="sm" className="text-brand-lavender-200 hover:bg-white/10 hover:text-brand-gold">
            <a href={`${SASTRANIDHI_URL}/login`}>Sign in</a>
          </Button>
          <Button asChild variant="gold" size="sm">
            <a href={`${SASTRANIDHI_URL}/signup`}>Sign up</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
