import { I18N_LANGUAGES } from '@/constants/i18n'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const baseLanguage = I18N_LANGUAGES.find((l) => l.isDefault)

export const i18n = {
  ids: I18N_LANGUAGES.map((l) => l.id),
  locales: I18N_LANGUAGES.map((l) => l.locale),
  defaultId: baseLanguage.id,
  defaultLocale: baseLanguage.locale,
  languages: I18N_LANGUAGES,
}
