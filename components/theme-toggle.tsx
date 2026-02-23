'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <div className="text-sm w-[75px] h-5"></div> // Placeholder to prevent layout shift
    )
  }

  // Get the actual current theme, prioritizing resolvedTheme
  // resolvedTheme gives us the actual applied theme (light/dark) even when theme is "system"
  const currentTheme = resolvedTheme || theme || systemTheme || 'light'

  const toggleTheme = () => {
    // When toggling, explicitly set to the opposite theme
    // This ensures we bypass any system theme confusion
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
