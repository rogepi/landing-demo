'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'

type QuestionAccordionsProps = {
  questions: string[][]
  className?: string
}
export function QuestionAccordions({
  questions,
  className,
}: QuestionAccordionsProps) {
  return (
    <Accordion className={className}>
      {questions.map((item, index) => (
        <AccordionItem key={index} aria-label={item[0]} title={item[0]}>
          <p>{item[1]}</p>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
