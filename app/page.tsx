"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import NewsTicker from "@/components/news-ticker"
import PledgeForm from "@/components/pledge-form"
import SuccessView from "@/components/success-view"
import StatsSection from "@/components/stats-section"
import FAQSection from "@/components/faq-section"
import TrustIndicators from "@/components/trust-indicators"
import Footer from "@/components/footer"
import { ChevronDown, Sparkles, Vote, Users, Award, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [pledgerName, setPledgerName] = useState("")
  const [pledgerPhone, setPledgerPhone] = useState("")
  const [scrollY, setScrollY] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToForm = () => {
    document.getElementById("pledge-form")?.scrollIntoView({ behavior: "smooth" })
  }

  // When certificate is shown, render only the SuccessView without navbar/footer/ticker
  if (isSubmitted) {
    return <SuccessView name={pledgerName} phone={pledgerPhone} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <Navbar />
      <NewsTicker />

      <main id="main-content">
        {/* Hero Section with Parallax */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 py-16 sm:py-20 md:py-32">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 opacity-30"
              style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            >
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[
                { left: 10, top: 15, delay: 0, duration: 6 },
                { left: 25, top: 45, delay: 1.2, duration: 7 },
                { left: 40, top: 80, delay: 2.5, duration: 8 },
                { left: 55, top: 25, delay: 0.8, duration: 6.5 },
                { left: 70, top: 60, delay: 3, duration: 7.5 },
                { left: 85, top: 35, delay: 1.5, duration: 9 },
                { left: 15, top: 70, delay: 4, duration: 6 },
                { left: 30, top: 90, delay: 2, duration: 8 },
                { left: 45, top: 10, delay: 3.5, duration: 7 },
                { left: 60, top: 50, delay: 0.5, duration: 9 },
                { left: 75, top: 85, delay: 2.8, duration: 6.5 },
                { left: 90, top: 20, delay: 1, duration: 8.5 },
                { left: 5, top: 55, delay: 4.5, duration: 7 },
                { left: 20, top: 30, delay: 3.2, duration: 6 },
                { left: 35, top: 75, delay: 1.8, duration: 9 },
                { left: 50, top: 5, delay: 2.2, duration: 7.5 },
                { left: 65, top: 40, delay: 0.3, duration: 8 },
                { left: 80, top: 95, delay: 4.2, duration: 6.5 },
                { left: 95, top: 65, delay: 1.6, duration: 7 },
                { left: 12, top: 88, delay: 3.8, duration: 8.5 },
              ].map((particle, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    animationDelay: `${particle.delay}s`,
                    animationDuration: `${particle.duration}s`
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 sm:mb-8 border border-white/20 animate-fade-in">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-white">{t("home.sveepBadge")}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 animate-fade-in leading-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white animate-shimmer-slow">
                {t("home.beResponsible")}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400">
                {t("home.indianCitizen")}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-in-up leading-relaxed px-2">
              {t("home.heroSubtitle")}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 animate-fade-in-up delay-200 px-2">
              {[
                { icon: <Vote className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, text: t("home.quickEasy") },
                { icon: <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, text: t("home.officialCertificate") },
                { icon: <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, text: t("home.joinCitizens") },
                { icon: <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, text: t("home.govVerified") }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-yellow-400">{item.icon}</span>
                  <span className="text-xs sm:text-sm font-medium text-white">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToForm}
              className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden touch-manipulation"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center gap-2 sm:gap-3">
                {t("home.takePledgeNow")}
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
              </span>
            </button>

            {/* Trust indicator */}
            <p className="mt-4 sm:mt-6 text-blue-300 text-xs sm:text-sm animate-fade-in-up delay-300 px-4">
              {t("home.secureInfo")}
            </p>
          </div>

          {/* Decorative Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                className="fill-slate-50 dark:fill-slate-900" />
            </svg>
          </div>
        </section>

        <div id="pledge-form">
          <PledgeForm
            onSuccess={(name: string, phone: string) => {
              setPledgerName(name)
              setPledgerPhone(phone)
              setIsSubmitted(true)
            }}
          />
        </div>
        <StatsSection />
        <FAQSection />
        <TrustIndicators />
      </main>

      <Footer />
    </div>
  )
}
