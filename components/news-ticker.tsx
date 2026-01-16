"use client"

import { useState, useEffect, useRef } from "react"
import { Bell, ChevronLeft, ChevronRight, Pause, Play, ExternalLink, Calendar, Megaphone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

interface NewsItem {
  id: number
  text: {
    en: string
    hi: string
    ml: string
  }
  date: string
  type: "news" | "update" | "important" | "event"
  link?: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    text: {
      en: "🗳️ National Voters' Day is celebrated every year on January 25 - Take the pledge and be a responsible voter!",
      hi: "🗳️ राष्ट्रीय मतदाता दिवस हर साल 25 जनवरी को मनाया जाता है - प्रतिज्ञा लें और जिम्मेदार मतदाता बनें!",
      ml: "🗳️ ദേശീയ വോട്ടേഴ്സ് ദിനം എല്ലാ വർഷവും ജനുവരി 25-ന് ആഘോഷിക്കുന്നു - പ്രതിജ്ഞയെടുത്ത് ഉത്തരവാദിത്തമുള്ള വോട്ടറാകൂ!",
    },
    date: "2026-01-14",
    type: "event",
  },
  {
    id: 2,
    text: {
      en: "📋 Check your name in the Electoral Roll at nvsp.in - Ensure you are registered to vote!",
      hi: "📋 nvsp.in पर मतदाता सूची में अपना नाम जांचें - सुनिश्चित करें कि आप मतदान के लिए पंजीकृत हैं!",
      ml: "📋 nvsp.in-ൽ ഇലക്ടറൽ റോളിൽ നിങ്ങളുടെ പേര് പരിശോധിക്കുക - നിങ്ങൾ വോട്ട് ചെയ്യാൻ രജിസ്റ്റർ ചെയ്തിട്ടുണ്ടെന്ന് ഉറപ്പാക്കുക!",
    },
    date: "2026-01-14",
    type: "important",
    link: "https://nvsp.in",
  },
  {
    id: 3,
    text: {
      en: "📞 National Voter Helpline: 1950 - For all voter registration and electoral queries",
      hi: "📞 राष्ट्रीय मतदाता हेल्पलाइन: 1950 - सभी मतदाता पंजीकरण और चुनावी प्रश्नों के लिए",
      ml: "📞 ദേശീയ വോട്ടർ ഹെൽപ്പ്‌ലൈൻ: 1950 - എല്ലാ വോട്ടർ രജിസ്ട്രേഷനും തിരഞ്ഞെടുപ്പ് സംബന്ധമായ ചോദ്യങ്ങൾക്കും",
    },
    date: "2026-01-14",
    type: "news",
  },
  {
    id: 4,
    text: {
      en: "🆔 Download your e-EPIC (Digital Voter ID) from voters.eci.gov.in - Go digital!",
      hi: "🆔 voters.eci.gov.in से अपना e-EPIC (डिजिटल वोटर आईडी) डाउनलोड करें - डिजिटल बनें!",
      ml: "🆔 voters.eci.gov.in-ൽ നിന്ന് നിങ്ങളുടെ e-EPIC (ഡിജിറ്റൽ വോട്ടർ ഐഡി) ഡൗൺലോഡ് ചെയ്യുക - ഡിജിറ്റലാകൂ!",
    },
    date: "2026-01-14",
    type: "update",
    link: "https://voters.eci.gov.in",
  },
  {
    id: 5,
    text: {
      en: "✅ SVEEP - Systematic Voters' Education and Electoral Participation - Empowering every citizen to vote",
      hi: "✅ SVEEP - व्यवस्थित मतदाता शिक्षा और चुनावी भागीदारी - हर नागरिक को मतदान के लिए सशक्त बनाना",
      ml: "✅ SVEEP - വ്യവസ്ഥാപിത വോട്ടർ വിദ്യാഭ്യാസവും തിരഞ്ഞെടുപ്പ് പങ്കാളിത്തവും - ഓരോ പൗരനെയും വോട്ട് ചെയ്യാൻ ശാക്തീകരിക്കുന്നു",
    },
    date: "2026-01-14",
    type: "news",
  },
  {
    id: 6,
    text: {
      en: "🎯 Every vote counts! Register as a voter if you are 18 years or above - Visit nvsp.in",
      hi: "🎯 हर वोट मायने रखता है! यदि आपकी आयु 18 वर्ष या उससे अधिक है तो मतदाता के रूप में पंजीकरण करें - nvsp.in पर जाएं",
      ml: "🎯 ഓരോ വോട്ടും പ്രധാനമാണ്! നിങ്ങൾക്ക് 18 വയസ്സോ അതിൽ കൂടുതലോ ആണെങ്കിൽ വോട്ടറായി രജിസ്റ്റർ ചെയ്യുക - nvsp.in സന്ദർശിക്കുക",
    },
    date: "2026-01-14",
    type: "important",
    link: "https://nvsp.in",
  },
]

export default function NewsTicker() {
  const { language, t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const tickerRef = useRef<HTMLDivElement>(null)

  // Auto-advance news items
  useEffect(() => {
    if (isPaused || isHovered) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % newsItems.length)
        setIsTransitioning(false)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused, isHovered])

  const goToPrevious = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length)
      setIsTransitioning(false)
    }, 150)
  }

  const goToNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length)
      setIsTransitioning(false)
    }, 150)
  }

  const currentNews = newsItems[currentIndex]

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "important":
        return {
          bg: "bg-red-500",
          text: "text-white",
          border: "border-red-400",
          icon: "🚨",
        }
      case "event":
        return {
          bg: "bg-purple-500",
          text: "text-white",
          border: "border-purple-400",
          icon: "📅",
        }
      case "update":
        return {
          bg: "bg-green-500",
          text: "text-white",
          border: "border-green-400",
          icon: "✅",
        }
      default:
        return {
          bg: "bg-blue-500",
          text: "text-white",
          border: "border-blue-400",
          icon: "📰",
        }
    }
  }

  const typeStyle = getTypeStyles(currentNews.type)

  return (
    <div
      ref={tickerRef}
      className="relative bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-y-2 border-orange-300 dark:border-orange-500/30 shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 3000)}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h20v20H0z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22M10%200v20M0%2010h20%22%20stroke%3D%22%23000%22%20stroke-width%3D%220.5%22%2F%3E%3C%2Fsvg%3E')]"></div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden px-3 py-2.5 relative">
        {/* Top row - Label and Controls */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 px-2.5 py-1.5 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg shadow-md relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
            <Megaphone className="w-3.5 h-3.5 text-white" />
            <span className="text-[10px] font-bold text-white tracking-wide uppercase">
              {t("news.title")}
            </span>
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping"></span>
          </div>
          
          {/* Mobile Controls */}
          <div className="flex items-center gap-0.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg px-1 py-0.5 shadow-sm">
            <button
              onClick={goToPrevious}
              className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-orange-100 dark:hover:bg-slate-700 rounded-md transition-all active:scale-95 touch-manipulation"
              aria-label="Previous news"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`p-1.5 rounded-md transition-all active:scale-95 touch-manipulation ${
                isPaused
                  ? "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400"
                  : "text-slate-600 dark:text-slate-300 hover:bg-orange-100 dark:hover:bg-slate-700"
              }`}
              aria-label={isPaused ? "Play" : "Pause"}
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
            <button
              onClick={goToNext}
              className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-orange-100 dark:hover:bg-slate-700 rounded-md transition-all active:scale-95 touch-manipulation"
              aria-label="Next news"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* News Text - Full Width on Mobile */}
        <div
          className={`transition-all duration-300 ${
            isTransitioning ? "opacity-0 transform -translate-y-1" : "opacity-100 transform translate-y-0"
          }`}
        >
          {currentNews.link ? (
            <a
              href={currentNews.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] leading-snug font-semibold text-slate-800 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 flex items-start gap-1.5"
            >
              <span className="line-clamp-2">
                {currentNews.text[language as keyof typeof currentNews.text]}
              </span>
              <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 opacity-70" />
            </a>
          ) : (
            <p className="text-[13px] leading-snug font-semibold text-slate-800 dark:text-white line-clamp-2">
              {currentNews.text[language as keyof typeof currentNews.text]}
            </p>
          )}
        </div>
        
        {/* Mobile Progress Dots */}
        <div className="flex items-center justify-center gap-1 mt-2">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsTransitioning(false)
                }, 150)
              }}
              className={`h-1.5 rounded-full transition-all duration-300 touch-manipulation ${
                index === currentIndex
                  ? "w-4 bg-orange-500"
                  : "w-1.5 bg-slate-300 dark:bg-slate-600 hover:bg-orange-300"
              }`}
              aria-label={`Go to news ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:block max-w-7xl mx-auto px-4 py-4 relative">
        <div className="flex items-center gap-4">
          {/* Breaking News Label */}
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg sm:rounded-xl flex-shrink-0 shadow-lg animate-pulse-slow relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
            <Megaphone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase">
              {t("news.title")}
            </span>
            <span className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-ping"></span>
          </div>

          {/* News Content */}
          <div className="flex-1 overflow-hidden min-h-[60px] flex items-center">
            <div
              className={`flex items-center gap-4 w-full transition-all duration-300 ${
                isTransitioning ? "opacity-0 transform -translate-y-2" : "opacity-100 transform translate-y-0"
              }`}
            >
              {/* Type Badge */}
              <span
                className={`px-3 py-1.5 text-xs font-bold rounded-lg ${typeStyle.bg} ${typeStyle.text} shadow-md hidden sm:flex items-center gap-1 uppercase tracking-wide`}
              >
                <span>{typeStyle.icon}</span>
                {currentNews.type}
              </span>

              {/* Date Badge */}
              <span className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-lg">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(currentNews.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                })}
              </span>

              {/* News Text */}
              <div className="flex-1 flex items-center min-w-0">
                {currentNews.link ? (
                  <a
                    href={currentNews.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-slate-800 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 active:text-orange-700 transition-colors flex items-center gap-2 group"
                  >
                    <span className="line-clamp-2 break-words">
                      {currentNews.text[language as keyof typeof currentNews.text]}
                    </span>
                    <ExternalLink className="w-4 h-4 flex-shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-white line-clamp-2 break-words">
                    {currentNews.text[language as keyof typeof currentNews.text]}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-1 shadow-md">
            <button
              onClick={goToPrevious}
              className="p-2 sm:p-2.5 text-slate-600 dark:text-slate-300 hover:bg-orange-100 dark:hover:bg-slate-700 active:bg-orange-200 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 touch-manipulation"
              aria-label="Previous news"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`p-2 sm:p-2.5 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 touch-manipulation ${
                isPaused
                  ? "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400"
                  : "text-slate-600 dark:text-slate-300 hover:bg-orange-100 dark:hover:bg-slate-700 active:bg-orange-200"
              }`}
              aria-label={isPaused ? "Play" : "Pause"}
            >
              {isPaused ? <Play className="w-4 h-4 sm:w-5 sm:h-5" /> : <Pause className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>

            <button
              onClick={goToNext}
              className="p-2 sm:p-2.5 text-slate-600 dark:text-slate-300 hover:bg-orange-100 dark:hover:bg-slate-700 active:bg-orange-200 rounded-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 touch-manipulation"
              aria-label="Next news"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-slate-300 dark:bg-slate-600 mx-1"></div>

            {/* Progress Dots */}
            <div className="hidden sm:flex items-center gap-1.5">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true)
                    setTimeout(() => {
                      setCurrentIndex(index)
                      setIsTransitioning(false)
                    }, 150)
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-6 h-2.5 bg-gradient-to-r from-orange-500 to-red-500"
                      : "w-2.5 h-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-orange-300 dark:hover:bg-slate-500"
                  }`}
                  aria-label={`Go to news ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {/* Progress Bar removed as per request */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-700">
          <div
            className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"
            style={{ width: "100%" }}
          />
        </div> */}
      </div>
    </div>
  )
}
