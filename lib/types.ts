import { type I18N_LANGUAGES } from '@/constants/i18n'
import type Dictionaries from '@/content/dictionaries/en.json'

declare global {
  type LocaleType = (typeof I18N_LANGUAGES)[number]['locale']

  type MessagesType = typeof Dictionaries
}
