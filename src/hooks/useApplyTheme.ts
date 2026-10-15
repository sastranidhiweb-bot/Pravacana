import { useEffect } from 'react'
import { resolveTheme, useThemeStore } from '@/store/theme-store'

/** Applies the resolved light/dark class to <html> and reacts to OS theme changes. */
export function useApplyTheme() {
  const mode = useThemeStore((s) => s.mode)

  useEffect(() => {
    const root = document.documentElement
    const apply = () => {
      const resolved = resolveTheme(mode)
      root.classList.toggle('dark', resolved === 'dark')
    }
    apply()

    if (mode === 'system') {
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      mql.addEventListener('change', apply)
      return () => mql.removeEventListener('change', apply)
    }
  }, [mode])
}
