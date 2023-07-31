'use client'

import { useTheme } from 'next-themes'
import * as React from 'react'

import { useMounted } from '@/hooks/use-mounted'

import { IconTheme } from '../icons'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()

  const handleToggle = () => {
    if (theme === 'dark') setTheme('light')
    else setTheme('dark')
  }

  const mounted = useMounted()
  if (!mounted) {
    return <IconTheme className="text-black dark:text-white" />
  }

  return (
    <button className={className} onClick={handleToggle}>
      <IconTheme className="text-black dark:text-white" />
    </button>
  )
}
