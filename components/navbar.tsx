"use client"

import { useState, useEffect, useTransition, useCallback } from "react"
import Link from "next/link"
import { Menu, X, Accessibility, Sun, Moon, Phone, Shield, Minus, Plus } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "@/components/theme-provider"
import { useAccessibility } from "@/lib/accessibility-context"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isPending, startTransition] = useTransition()
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()
  const { fontSize, setFontSize, toggleAccessibilityPanel } = useAccessibility()

  // Fix hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Optimized language change handler
  const handleLanguageChange = useCallback((langCode: "en" | "hi" | "ml") => {
    startTransition(() => {
      setLanguage(langCode)
    })
  }, [setLanguage])

  // Font size handlers
  const decreaseFontSize = useCallback(() => {
    if (fontSize === "xlarge") setFontSize("large")
    else if (fontSize === "large") setFontSize("normal")
  }, [fontSize, setFontSize])

  const increaseFontSize = useCallback(() => {
    if (fontSize === "normal") setFontSize("large")
    else if (fontSize === "large") setFontSize("xlarge")
  }, [fontSize, setFontSize])

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
    { href: "/faq", label: t("nav.faq") },
    { href: "/privacy-policy", label: t("nav.privacy") },
  ]

  const languages = [
    { code: "en", label: "EN" },
    { code: "hi", label: "हि" },
    { code: "ml", label: "മ" },
  ]

  return (
    <>
      {/* Skip to Content Link - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-900 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        {t("accessibility.skipToContent")}
      </a>

      {/* Top Government Banner - Enhanced with Font Size & Language Controls */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white text-xs py-2 px-4 hidden sm:block relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] animate-shimmer-slow pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          {/* Left side - Official info */}
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-2">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping opacity-75"></span>
                <span className="relative w-2 h-2 bg-emerald-400 rounded-full"></span>
              </div>
              <span className="font-medium tracking-wide whitespace-nowrap">{t("nav.officialWebsite")}</span>
            </div>
            <span className="hidden md:block h-4 w-px bg-blue-700/50"></span>
            <div className="hidden md:flex items-center gap-2 text-blue-200">
              <Shield className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">{t("nav.governmentOfIndia")}</span>
            </div>
          </div>

          {/* Right side - Controls */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Helpline */}
            <div className="hidden lg:flex items-center gap-1.5 text-blue-200">
              <Phone className="w-3.5 h-3.5" />
              <span className="font-medium">1950</span>
            </div>
            
            <span className="hidden lg:block h-4 w-px bg-blue-700/50"></span>

            {/* Language Switcher - Inline */}
            <div className="flex items-center">
              {languages.map((lang, index) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code as "en" | "hi" | "ml")}
                  className={`px-2 py-0.5 text-xs font-semibold transition-all focus:outline-none focus:ring-1 focus:ring-yellow-400 rounded ${
                    language === lang.code
                      ? "bg-white text-blue-900"
                      : "text-blue-200 hover:text-white hover:bg-blue-800/50"
                  } ${isPending ? 'opacity-70' : ''}`}
                  aria-label={`Switch to ${lang.code === 'en' ? 'English' : lang.code === 'hi' ? 'Hindi' : 'Malayalam'}`}
                  aria-pressed={language === lang.code}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <span className="h-4 w-px bg-blue-700/50"></span>

            {/* Font Size Controls - A- A A+ */}
            <div className="flex items-center gap-0.5">
              <button
                onClick={decreaseFontSize}
                disabled={fontSize === "normal"}
                className={`px-1.5 py-0.5 text-xs font-bold rounded transition-all focus:outline-none focus:ring-1 focus:ring-yellow-400 ${
                  fontSize === "normal"
                    ? "text-blue-400 cursor-not-allowed"
                    : "text-blue-200 hover:text-white hover:bg-blue-800/50"
                }`}
                aria-label="Decrease font size"
              >
                A<Minus className="w-2 h-2 inline ml-0.5" />
              </button>
              <span
                className={`px-2 py-0.5 text-xs font-bold rounded ${
                  fontSize === "normal" ? "bg-white/20" : fontSize === "large" ? "bg-yellow-500/30" : "bg-yellow-500/50"
                }`}
              >
                A
              </span>
              <button
                onClick={increaseFontSize}
                disabled={fontSize === "xlarge"}
                className={`px-1.5 py-0.5 text-xs font-bold rounded transition-all focus:outline-none focus:ring-1 focus:ring-yellow-400 ${
                  fontSize === "xlarge"
                    ? "text-blue-400 cursor-not-allowed"
                    : "text-blue-200 hover:text-white hover:bg-blue-800/50"
                }`}
                aria-label="Increase font size"
              >
                A<Plus className="w-2 h-2 inline ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg"
            : "bg-white dark:bg-slate-900"
        } border-b-4 border-blue-800 dark:border-blue-600`}
        role="navigation"
        aria-label={t("nav.mainNavigation")}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="flex items-center gap-2">
                  <div className="bg-white dark:bg-white/95 rounded-lg p-1.5 transition-transform group-hover:scale-105">
                    <img
                      src="/sveep-logo.png"
                      alt="SVEEP Logo"
                      className="h-10 w-auto object-contain"
                      loading="eager"
                    />
                  </div>
                  <div className="hidden md:block h-10 w-px bg-slate-300 dark:bg-slate-500"></div>
                  <div className="bg-white dark:bg-white/95 rounded-lg p-1.5 transition-transform group-hover:scale-105">
                    <img
                      src="/ec-logo.png"
                      alt="Election Commission Logo"
                      className="h-10 w-auto object-contain"
                      loading="eager"
                    />
                  </div>
                </div>
              </Link>
              <div className="hidden lg:block ml-2">
                <p className="text-sm font-bold text-blue-900 dark:text-blue-100 leading-tight whitespace-nowrap">
                  {t("nav.sveepKottayam")}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 whitespace-nowrap">
                  {t("nav.electionCommission")}
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-2">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle theme"
                suppressHydrationWarning
              >
                {mounted ? (
                  theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
                ) : (
                  <div className="w-5 h-5" />
                )}
              </button>

              {/* Accessibility Button */}
              <button
                onClick={toggleAccessibilityPanel}
                className="p-2.5 text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={t("accessibility.openPanel")}
              >
                <Accessibility className="w-5 h-5" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 animate-slide-up">
            <div className="px-4 py-4 space-y-2">
              {/* Mobile Language & Font Controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-800 rounded-lg mb-4">
                {/* Language Switcher */}
                <div className="flex items-center gap-1">
                  <span className="text-xs text-slate-500 dark:text-slate-400 mr-2">Lang:</span>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code as "en" | "hi" | "ml")}
                      className={`px-2.5 py-1 text-sm font-semibold rounded transition-all ${
                        language === lang.code
                          ? "bg-blue-600 text-white"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
                {/* Font Size */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={decreaseFontSize}
                    disabled={fontSize === "normal"}
                    className={`px-2 py-1 text-sm font-bold rounded ${
                      fontSize === "normal" ? "text-slate-300 dark:text-slate-600" : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    A-
                  </button>
                  <span className="px-2 py-1 text-sm font-bold bg-slate-200 dark:bg-slate-700 rounded">A</span>
                  <button
                    onClick={increaseFontSize}
                    disabled={fontSize === "xlarge"}
                    className={`px-2 py-1 text-sm font-bold rounded ${
                      fontSize === "xlarge" ? "text-slate-300 dark:text-slate-600" : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    A+
                  </button>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Indian Flag Colors Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
    </>
  )
}
