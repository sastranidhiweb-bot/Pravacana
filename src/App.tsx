import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { useApplyTheme } from '@/hooks/useApplyTheme'
import { HomePage } from '@/pages/HomePage'

// Single-page gateway, so no router: header, the card grid, footer.
export function App() {
  useApplyTheme()

  return (
    // `isolate` lets the page's -z-10 aurora background sit above this
    // wrapper's fill but below all content; `overflow-x-clip` stops the title's
    // halo widening the page on phones (clip, unlike hidden, keeps sticky working).
    <div className="isolate flex min-h-screen flex-col overflow-x-clip bg-background text-foreground">
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}
