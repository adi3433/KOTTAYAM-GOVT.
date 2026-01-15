"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  const { t } = useLanguage()
  
  return (
    <div
      className={`border-2 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-slate-800/50 shadow-lg"
          : "border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-slate-600 active:border-blue-400"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset touch-manipulation"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2 sm:gap-3">
          <span
            className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-bold transition-colors flex-shrink-0 ${
              isOpen
                ? "bg-blue-600 text-white"
                : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
            }`}
          >
            {index + 1}
          </span>
          <span
            className={`font-semibold text-sm sm:text-lg transition-colors ${
              isOpen ? "text-blue-900 dark:text-blue-100" : "text-slate-800 dark:text-slate-200"
            }`}
          >
            {question}
          </span>
        </span>
        <ChevronDown
          className={`w-5 h-5 sm:w-6 sm:h-6 text-slate-500 dark:text-slate-400 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 sm:pt-2">
          <div className="pl-8 sm:pl-11">
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {answer}
            </p>
            {index === 4 && (
              <div className="mt-3">
                <a 
                  href="/" 
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
                >
                  {t("faq.takePledgeNow")}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
  ]

  return (
    <section className="py-10 sm:py-16 px-3 sm:px-4 bg-white dark:bg-slate-900" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 dark:bg-purple-900/50 rounded-full mb-3 sm:mb-4">
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-xs sm:text-sm font-bold text-purple-700 dark:text-purple-300">
              {t("faq.title")}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {t("faq.title")}
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-800 rounded-2xl border-2 border-blue-200 dark:border-slate-700 text-center">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            {t("faq.stillHaveQuestionsAlt")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {t("nav.contact")}
            </a>
            <a
              href="https://eci.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-xl border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {t("nav.electionCommission")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
