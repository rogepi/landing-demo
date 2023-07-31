import { getMessages } from '@/lib/i18n/server'

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: LocaleType }
}) {
  const messages = await getMessages(locale)

  return (
    <div>
      <h1 className="mt-8 text-center text-4xl font-semibold">
        {messages.Nav.about}
      </h1>
    </div>
  )
}
