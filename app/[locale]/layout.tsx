import '../globals.css'

import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

import { getMessages } from '@/lib/i18n/server'

import { Footer } from './footer'
import { Header } from './header'
import { ThemeProvider } from './theme-provider'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh-CN' }]
}

export const metadata = {
  title: 'Landing Page Demo',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: LocaleType }
}) {
  let messages = {} as MessagesType
  try {
    messages = await getMessages(locale)
  } catch {
    notFound()
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages.Index}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div
              className={`${inter.className} flex min-h-screen w-full flex-col items-center bg-white dark:bg-black`}
            >
              <Header labels={messages.Nav} />
              <main className="w-full flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
