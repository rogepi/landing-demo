'use client'

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import * as React from 'react'

import { I18N_LANGUAGES } from '@/constants/i18n'
import { useMounted } from '@/hooks/use-mounted'

import { IconArrowDown } from '../icons'

export function LocaleSwitch({ className }: { className?: string }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const onChange = (locale: string) => {
    const pathArray = pathname.split('/')
    const isEn = !I18N_LANGUAGES.find((item) => item.locale === pathArray.at(1))

    const shouldUpdate =
      (isEn && locale === 'en') || (!isEn && locale === pathArray.at(1))

    if (shouldUpdate) {
      return
    }

    const updatedPath = isEn
      ? `/${locale}${pathname}`
      : `/${pathArray.splice(2).join('/')}`

    router.push(updatedPath)
    window.scrollTo(0, 0)
  }

  const mounted = useMounted()
  if (!mounted) {
    return null
  }

  return (
    <Dropdown className={className}>
      <DropdownTrigger>
        <Button size="sm" variant="ghost" endContent={<IconArrowDown />}>
          {I18N_LANGUAGES.find((item) => item.locale === locale).title}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={I18N_LANGUAGES}>
        {(item: (typeof I18N_LANGUAGES)[0]) => (
          <DropdownItem onClick={() => onChange(item.locale)} key={item.id}>{item.title}</DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  )
}
