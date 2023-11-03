import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    console.log('mounted?', mounted)
    return null
  }

  console.log('theme', theme)
  function toggleTheme() {
    console.log('toggletheme', theme)
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div>
      {mounted ? (
        <button onClick={toggleTheme}>
          {theme === 'light' ? (
            <Sun className="h-5 w-5 text-zinc-600 dark:text-zinc-100" />
          ) : (
            <Moon className="h-5 w-5 text-zinc-600 dark:text-zinc-100" />
          )}
        </button>
      ) : (
        <Sun className="h-5 w-5 text-zinc-600 dark:text-zinc-100" />
      )}
    </div>
  )
}
