'use client'

import {
  cn,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import { ThemeToggle } from '@/components/widgets/theme-toggle'
import { NAV_ITEMS } from '@/constants/nav'

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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

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
    <Navbar
      className={className}
      maxWidth="2xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* left */}
      <NavbarContent className={cn('transition-all', isTop ? '' : 'scale-95 ')}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              className="h-10 w-20 md:w-24 lg:w-28 xl:w-32"
              width={130}
              height={45}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* center */}
      <NavbarContent
        className="hidden font-semibold sm:flex sm:gap-12 sm:text-xl"
        justify="center"
      >
        {NAV_ITEMS.filter((item) => item.key !== 'home').map((item, index) => (
          <NavbarItem className=" hover:opacity-70" key={index}>
            <Link href={item.url}>{labels[item.key]}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* right */}
      <NavbarContent
        className={cn('transition-all', isTop ? '' : 'scale-95 ')}
        justify="end"
      >
        <NavbarItem className="flex items-center">
          <ThemeToggle />
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <Image
              src={Download}
              className="h-10 w-20 md:w-24 lg:w-28 xl:w-32"
              alt="download"
              width={130}
              height={45}
            />
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* mobile menu */}
      <NavbarMenu className="font-semibold">
        {NAV_ITEMS.map((item, index) => (
          <NavbarMenuItem
            onClick={() => {
              setIsMenuOpen(false)
            }}
            key={`m-${index}`}
          >
            <Link href={item.url}>{labels[item.key]}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
