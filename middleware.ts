import createMiddleware from 'next-intl/middleware'

import { i18n } from './lib/i18n'

export default createMiddleware({
  // A list of all locales that are supported
  locales: i18n.locales,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: i18n.defaultLocale,
  localeDetection: false,
})

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
