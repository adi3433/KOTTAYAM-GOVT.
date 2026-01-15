"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Scale, Shield, FileText, AlertTriangle, CheckCircle, Users, Globe, Lock, BookOpen } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function TermsPage() {
  const { t } = useLanguage()
  
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: t("terms.section1Title"),
      content: t("terms.section1Content")
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("terms.section2Title"),
      content: t("terms.section2Content")
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("terms.section3Title"),
      content: t("terms.section3Content")
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: t("terms.section4Title"),
      content: t("terms.section4Content")
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: t("terms.section5Title"),
      content: t("terms.section5Content")
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("terms.section6Title"),
      content: t("terms.section6Content")
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: t("terms.section7Title"),
      content: t("terms.section7Content")
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: t("terms.section8Title"),
      content: t("terms.section8Content")
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: t("terms.section9Title"),
      content: t("terms.section9Content")
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: t("terms.section10Title"),
      content: t("terms.section10Content")
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-16 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <Scale className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-semibold text-white">Legal Agreement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-fade-in">
            {t("terms.heroTitle")}
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            {t("terms.heroSubtitle")}
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent"></div>
      </header>

      <main id="main-content" className="max-w-5xl mx-auto px-4 py-12">
        {/* Quick Summary Card */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 mb-10 border-2 border-amber-200 dark:border-amber-700/50 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-500 rounded-xl text-white">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-2">{t("terms.noticeTitle")}</h2>
              <p className="text-amber-800 dark:text-amber-200">
                {t("terms.noticeText")}{" "}
                <a href="https://nvsp.in" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-amber-600">nvsp.in</a>{" "}
                {t("terms.noticeContact")}
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <section 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl text-blue-700 dark:text-blue-300 group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {section.title}
                    </h2>
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-4">{t("terms.questionsTitle")}</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            {t("terms.questionsText")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
            >
              {t("terms.contactUs")}
            </a>
            <a
              href="mailto:ceo@kerala.gov.in"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-all hover:scale-105 border-2 border-blue-500"
            >
              Email: ceo@kerala.gov.in
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
