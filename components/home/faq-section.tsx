'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection({
  faqs,
}: {
  faqs: {
    title: string
    questions: {
      id: string
      question: string
      answer: string
    }[]
  }
}) {
  return (
    faqs && (
      <section className="py-16 bg-gray-50">
        <div className="custom-container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-start mb-12 text-[#1e5144]">{faqs.title}</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs?.questions?.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-t border-gray-200 py-5">
                <AccordionTrigger className="flex justify-between items-center w-full text-left text-[#1e5144] text-xl font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  )
}
