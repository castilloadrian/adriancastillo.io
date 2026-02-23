'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="text-sm w-[75px] h-5"></div>
  }

  const currentTheme = resolvedTheme || theme || systemTheme || 'light'

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  const displayText = currentTheme === 'dark' ? 'light mode' : 'dark mode'

  return (
    <button
      onClick={toggleTheme}
      className="text-sm hover:underline underline-offset-4"
      aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {displayText}
    </button>
  )
}
