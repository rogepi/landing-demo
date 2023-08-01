'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'

type QuestionAccordionProps = {
  questions: string[][]
  className?: string
}
export function QuestionAccordion({
  questions,
  className,
}: QuestionAccordionProps) {
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
