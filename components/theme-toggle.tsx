'use client'

import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-sm hover:underline underline-offset-4"
    >
      {theme === 'dark' ? 'light mode' : 'dark mode'}
    </button>
  )
}

