'use client'

import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { useMounted } from '@/hooks/use-mounted'
import { cn } from '@/lib/utils'

import { IconMoon, IconSun } from '../icons'

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [enabled, setEnabled] = React.useState(theme === 'dark')

  React.useEffect(() => {
    enabled ? setTheme('dark') : setTheme('light')
  }, [enabled, setTheme])

  const mounted = useMounted()
  if (!mounted) {
    return null
  }

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-zinc-700' : 'bg-zinc-200'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent
          transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
    >
      <span className="sr-only">Toggle Theme</span>
      <span
        className={cn(
          enabled ? 'translate-x-9 bg-zinc-400' : 'translate-x-0 bg-zinc-900',
          'pointer-events-none flex h-[34px] w-[34px] items-center justify-center',
          'rounded-full shadow-lg ring-0',
          'transition duration-200 ease-in-out'
        )}
      >
        {enabled ? <IconSun /> : <IconMoon />}
      </span>
    </Switch>
  )
}
