'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Image from 'next/image'
import Link from 'next-intl/link'
import * as React from 'react'

import { ThemeToggle } from '@/components/widgets/theme-toggle'
import { MAIN_NAV_ITEMS } from '@/constants/nav'
import { cn } from '@/lib/utils'

import Download from '../../public/download.svg'
import Logo from '../../public/loora-logo.svg'

type LabelsType = MessagesType['Nav']

export function Header({
  labels,
  className,
}: {
  labels: LabelsType
  className?: string
}) {
  const { scrollY } = useScroll()
  const [isTop, setIsTop] = React.useState(true)
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 0) {
      setIsTop(false)
    } else {
      setIsTop(true)
    }
  })
  return (
    <header
      className={cn(
        'sticky left-0 top-0 z-50 w-full bg-white/80 backdrop-blur-sm transition-all dark:bg-black dark:bg-opacity-80 dark:backdrop-blur-sm'
      )}
    >
      <motion.div
        layout
        className={cn(
          'flex w-full items-center justify-between ',
          isTop ? 'p-[22px] md:p-[30px]' : 'p-[15px] md:p-[20px]',
          className
        )}
      >
        <Link
          href="/"
          className={cn('transition-all', isTop ? '' : 'scale-75 ')}
        >
          <Image
            src={Logo}
            alt="logo"
            className="h-10 w-20 md:w-24 lg:w-28 xl:w-32"
            width={130}
            height={45}
          />
        </Link>
        <div
          className={cn(
            'flex-center ',
            isTop ? 'gap-4 text-xl md:gap-8' : 'text-md gap-3 md:gap-5'
          )}
        >
          <nav className="hidden md:inline-block">
            <ul className="flex items-center gap-10 font-bold">
              {MAIN_NAV_ITEMS.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.url}>{labels[item.key]}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <ThemeToggle className={isTop ? '' : 'ml-3 scale-75'} />
          <Link
            href="#"
            className={cn('transition-all', isTop ? '' : 'scale-75 ')}
          >
            <Image
              src={Download}
              className="h-10 w-20 md:w-24 lg:w-28 xl:w-32"
              alt="download"
              width={130}
              height={45}
            />
          </Link>
        </div>
      </motion.div>
    </header>
  )
}
