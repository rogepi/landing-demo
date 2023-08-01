import { getMessages } from '@/lib/i18n/server'

import { QuestionAccordion } from './queestion-accordion'

export default async function QuestionsPage({
  params: { locale },
}: {
  params: { locale: LocaleType }
}) {
  const messages = await getMessages(locale)
  return (
    <>
      <h1 className="mt-8 text-center text-4xl font-semibold">
        {messages.Nav.question}
      </h1>
      <QuestionAccordion className="inner-width mt-10" questions={messages['Q&A']} />
    </>
  )
}
