import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { useApplyTheme } from '@/hooks/useApplyTheme'
import { HomePage } from '@/pages/HomePage'

// Single-page gateway, so no router: header, the card grid, footer.
export function App() {
  useApplyTheme()

  return (
    <div className="isolate flex min-h-screen flex-col overflow-x-clip bg-background text-foreground">
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-5 pt-0 sm:px-6">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}
