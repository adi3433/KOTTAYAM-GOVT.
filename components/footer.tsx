"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white no-print">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <img
                src="/sveep-logo.png"
                alt={t("nav.sveepLogo")}
                className="h-12 sm:h-16 w-auto bg-white rounded-lg p-1.5 sm:p-2"
              />
              <img
                src="/ec-logo.png"
                alt={t("nav.ecLogo")}
                className="h-12 sm:h-16 w-auto bg-white rounded-lg p-1.5 sm:p-2"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2">{t("nav.sveepKottayam")}</h3>
            <p className="text-blue-200 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              {t("nav.electionCommission")}
            </p>
            <p className="text-blue-300 text-xs sm:text-sm">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">{t("footer.quickLinksHeader")}</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-blue-200 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-blue-200 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-blue-200 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  {t("nav.faq")}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-blue-200 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-blue-200 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  {t("nav.privacy")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">{t("footer.contactHeader")}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-blue-200">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-400" />
                <span>{t("contact.addressLine1")}, {t("contact.addressLine2")}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-blue-200">
                <Phone className="w-4 h-4 flex-shrink-0 text-orange-400" />
                <a href="tel:1950" className="hover:text-white transition-colors">
                  1950 ({t("faq.nationalHelpline").split(" - ")[0]})
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-blue-200">
                <Mail className="w-4 h-4 flex-shrink-0 text-orange-400" />
                <a href="mailto:ceo@kerala.gov.in" className="hover:text-white transition-colors">
                  ceo@kerala.gov.in
                </a>
              </li>
            </ul>

            {/* External Links */}
            <div className="mt-6 space-y-2">
              <a
                href="https://eci.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-200 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                {t("nav.electionCommission")}
                <ExternalLink className="w-3 h-3" />
              </a>
              <br />
              <a
                href="https://nvsp.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-200 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                {t("footer.nvsp")}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm">
            <p className="text-blue-300 text-center md:text-left">
              {t("footer.copyright")}
            </p>
            <div className="flex items-center gap-3 sm:gap-4 text-blue-300 flex-wrap justify-center">
              <Link href="/privacy-policy" className="hover:text-white active:text-white transition-colors">
                {t("footer.privacyPolicy")}
              </Link>
              <span className="text-blue-500">|</span>
              <Link href="/terms" className="hover:text-white active:text-white transition-colors">
                {t("footer.termsOfUse")}
              </Link>
              <span className="text-blue-500">|</span>
              <Link href="/sitemap" className="hover:text-white active:text-white transition-colors">
                {t("footer.sitemap")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Indian Flag Colors Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
    </footer>
  )
}
