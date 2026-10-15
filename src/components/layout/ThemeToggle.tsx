import { Monitor, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useThemeStore, type ThemeMode } from '@/store/theme-store'

const ORDER: ThemeMode[] = ['light', 'dark', 'system']
const ICONS: Record<ThemeMode, React.ComponentType<{ className?: string }>> = {
  light: Sun,
  dark: Moon,
  system: Monitor,
}

export function ThemeToggle({ className }: { className?: string }) {
  const mode = useThemeStore((s) => s.mode)
  const setMode = useThemeStore((s) => s.setMode)
  const Icon = ICONS[mode]

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={className}
      aria-label={`Theme: ${mode}. Click to switch.`}
      onClick={() => setMode(ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length])}
    >
      <Icon className="h-4 w-4" />
    </Button>
  )
}
