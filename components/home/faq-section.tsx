'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function FAQSection({faqs
}:{
  faqs :{
    title: string
    questions : {
      id: string
      question: string
      answer: string
    }[]
  }
}) {

  
  return faqs && (
    <section className="py-16 bg-gray-100">
      <div className="custom-container">
        <h2 className="text-3xl font-bold text-start mb-12 text-primary">{faqs.title}</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl me-auto">
          {faqs?.questions?.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

