"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { HelpCircle } from "lucide-react";

const FAQS = [
  {
    question: "Is Verta Limited licensed and regulated in Germany?",
    answer:
      "Yes, we are fully licensed and strictly adhere to all German legal and regulatory requirements for lotto membership providers.",
  },
  {
    question: "How is my registration and data kept secure?",
    answer:
      "All personal information is fully protected using state-of-the-art encryption. Member details are never shared or sold.",
  },
  {
    question: "Can beginners join just as easily as experienced players?",
    answer:
      "Absolutely. Our process is designed for everyone. Our friendly team walks each member through the simple, secure process step by step.",
  },
  {
    question: "What lotto games can I access with Verta Limited membership?",
    answer:
      "Our members can participate in all major German lotto games including LOTTO 6aus49, EuroJackpot, GlücksSpirale, and regional lottery draws across all federal states.",
  },
] as const;

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.33, 1, 0.68, 1] as const },
  viewport: { once: true, amount: 0.2 },
});

export function FAQSection() {
  return (
    <section id="faqs" className="bg-muted/30 py-16 lg:py-24">
      <div className="container mx-auto max-w-4xl px-6">
        <motion.div {...fadeIn(0)} className="text-center space-y-4 mb-12">
          {/* <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-customBg/10 mb-4">
            <HelpCircle className="h-6 w-6 text-customBg" />
          </div> */}
          <h2 className="text-3xl font-bold text-customText lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our lottery membership services
          </p>
        </motion.div>

        <motion.div {...fadeIn(0.2)} className="bg-background rounded-lg shadow-lg p-6 lg:p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-card hover:bg-muted/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <div className="flex items-start gap-4 text-left">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base font-semibold text-customText">
                          {faq.question}
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
