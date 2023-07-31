'use client'

import { Disclosure, Transition } from '@headlessui/react'

import { IconArrowDown } from '@/components/icons'
import { cn } from '@/lib/utils'

function QuestionsItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-zinc-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75 dark:bg-blue-800 dark:text-white dark:hover:bg-blue-700 md:py-4">
            <span>{question}</span>
            <IconArrowDown
              className={`${
                open ? 'rotate-180' : ''
              } h-5 w-5 text-blue-500 dark:text-white`}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-zinc-500 dark:text-white">
              {answer}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

type QuestionsFlowProps = {
  questions: string[][]
  className?: string
}
export function QuestionsFlow({ questions, className }: QuestionsFlowProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-3xl space-y-3 rounded-2xl p-2',
        className
      )}
    >
      {questions.map((item, index) => (
        <QuestionsItem question={item[0]} answer={item[1]} key={index} />
      ))}
    </div>
  )
}
