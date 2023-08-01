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
    // <div className={className}>
    //   <Menu>
    //     <div className="relative">
    //       <Menu.Button
    //         className="flex items-center gap-1 rounded-md border-2 border-zinc-200/75 p-1 py-2 font-semibold
    //        hover:bg-zinc-200/75 dark:border-zinc-700 dark:hover:bg-zinc-700"
    //       >
    //         {I18N_LANGUAGES.find((item) => item.locale === locale).title}
    //         <IconArrowDown />
    //       </Menu.Button>
    //     </div>
    //     <Transition
    //       as={React.Fragment}
    //       enter="transition ease-out duration-100"
    //       enterFrom="transform opacity-0 scale-95"
    //       enterTo="transform opacity-100 scale-100"
    //       leave="transition ease-in duration-75"
    //       leaveFrom="transform opacity-100 scale-100"
    //       leaveTo="transform opacity-0 scale-95"
    //     >
    //       <Menu.Items className="absolute z-50 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-[#F7F1F1] shadow-lg ring-1 ring-black/5 focus:outline-none  dark:bg-[#333333]">
    //         <div className="overflow-hidden rounded-md text-xs font-semibold">
    //           {I18N_LANGUAGES.map((item) => (
    //             <Menu.Item key={item.id}>
    //               <div
    //                 className="cursor-pointer p-2 hover:bg-zinc-200/75 dark:hover:bg-zinc-700"
    //                 onClick={() => onChange(item.locale)}
    //               >
    //                 {item.title}
    //               </div>
    //             </Menu.Item>
    //           ))}
    //         </div>
    //       </Menu.Items>
    //     </Transition>
    //   </Menu>
    // </div>
    <Dropdown>
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
