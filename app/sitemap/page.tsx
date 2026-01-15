"use client"

import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { 
  Home, 
  Info, 
  HelpCircle, 
  Phone, 
  Shield, 
  Scale, 
  Map, 
  ExternalLink,
  Vote,
  Users,
  FileText,
  Globe,
  Building2,
  BookOpen,
  Award
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface SitemapItem {
  href: string
  labelKey: string
  descKey: string
  icon: React.ReactNode
  isExternal?: boolean
}

interface SitemapSection {
  titleKey: string
  descKey: string
  items: SitemapItem[]
  color: string
}

export default function SitemapPage() {
  const { t } = useLanguage()
  
  const sitemapSections: SitemapSection[] = [
    {
      titleKey: "sitemap.mainPagesTitle",
      descKey: "sitemap.mainPagesDesc",
      color: "blue",
      items: [
        {
          href: "/",
          labelKey: "sitemap.homeLabel",
          descKey: "sitemap.homeDesc",
          icon: <Home className="w-5 h-5" />
        },
        {
          href: "/about",
          labelKey: "sitemap.aboutLabel",
          descKey: "sitemap.aboutDesc",
          icon: <Info className="w-5 h-5" />
        },
        {
          href: "/faq",
          labelKey: "sitemap.faqLabel",
          descKey: "sitemap.faqDesc",
          icon: <HelpCircle className="w-5 h-5" />
        },
        {
          href: "/contact",
          labelKey: "sitemap.contactLabel",
          descKey: "sitemap.contactDesc",
          icon: <Phone className="w-5 h-5" />
        }
      ]
    },
    {
      titleKey: "sitemap.legalTitle",
      descKey: "sitemap.legalDesc",
      color: "purple",
      items: [
        {
          href: "/privacy-policy",
          labelKey: "sitemap.privacyLabel",
          descKey: "sitemap.privacyDesc",
          icon: <Shield className="w-5 h-5" />
        },
        {
          href: "/terms",
          labelKey: "sitemap.termsLabel",
          descKey: "sitemap.termsDesc",
          icon: <Scale className="w-5 h-5" />
        },
        {
          href: "/sitemap",
          labelKey: "sitemap.sitemapLabel",
          descKey: "sitemap.sitemapDesc",
          icon: <Map className="w-5 h-5" />
        }
      ]
    },
    {
      titleKey: "sitemap.officialTitle",
      descKey: "sitemap.officialDesc",
      color: "green",
      items: [
        {
          href: "https://eci.gov.in",
          labelKey: "sitemap.eciLabel",
          descKey: "sitemap.eciDesc",
          icon: <Building2 className="w-5 h-5" />,
          isExternal: true
        },
        {
          href: "https://nvsp.in",
          labelKey: "sitemap.nvspLabel",
          descKey: "sitemap.nvspDesc",
          icon: <Vote className="w-5 h-5" />,
          isExternal: true
        },
        {
          href: "https://voterportal.eci.gov.in",
          labelKey: "sitemap.voterPortalLabel",
          descKey: "sitemap.voterPortalDesc",
          icon: <Users className="w-5 h-5" />,
          isExternal: true
        },
        {
          href: "https://www.ceo.kerala.gov.in",
          labelKey: "sitemap.ceoKeralaLabel",
          descKey: "sitemap.ceoKeralaDesc",
          icon: <Globe className="w-5 h-5" />,
          isExternal: true
        },
        {
          href: "https://ecisveep.eci.gov.in",
          labelKey: "sitemap.sveepNationalLabel",
          descKey: "sitemap.sveepNationalDesc",
          icon: <Award className="w-5 h-5" />,
          isExternal: true
        }
      ]
    },
    {
      titleKey: "sitemap.voterResourcesTitle",
      descKey: "sitemap.voterResourcesDesc",
      color: "orange",
      items: [
        {
          href: "https://voters.eci.gov.in/download-epic-erevin",
          labelKey: "sitemap.downloadEpicLabel",
          descKey: "sitemap.downloadEpicDesc",
          icon: <FileText className="w-5 h-5" />,
          isExternal: true
        },
        {
          href: "https://nvsp.in/Forms/Forms/form6",
          labelKey: "sitemap.form6Label",
          descKey: "sitemap.form6Desc",
          icon: <FileText className="w-5 h-5" />,
          isExternal: true
        },
        {
          href: "https://electoralsearch.eci.gov.in",
          labelKey: "sitemap.electoralSearchLabel",
          descKey: "sitemap.electoralSearchDesc",
          icon: <BookOpen className="w-5 h-5" />,
          isExternal: true
        },
        {
          href: "https://nvsp.in/Forms/Forms/form8",
          labelKey: "sitemap.form8Label",
          descKey: "sitemap.form8Desc",
          icon: <FileText className="w-5 h-5" />,
          isExternal: true
        }
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; hoverBg: string }> = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        text: "text-blue-700 dark:text-blue-300",
        border: "border-blue-200 dark:border-blue-700",
        hoverBg: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900/30",
        text: "text-purple-700 dark:text-purple-300",
        border: "border-purple-200 dark:border-purple-700",
        hoverBg: "hover:bg-purple-50 dark:hover:bg-purple-900/20"
      },
      green: {
        bg: "bg-green-100 dark:bg-green-900/30",
        text: "text-green-700 dark:text-green-300",
        border: "border-green-200 dark:border-green-700",
        hoverBg: "hover:bg-green-50 dark:hover:bg-green-900/20"
      },
      orange: {
        bg: "bg-orange-100 dark:bg-orange-900/30",
        text: "text-orange-700 dark:text-orange-300",
        border: "border-orange-200 dark:border-orange-700",
        hoverBg: "hover:bg-orange-50 dark:hover:bg-orange-900/20"
      }
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 py-16 px-4">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <Map className="w-5 h-5 text-purple-300" />
            <span className="text-sm font-semibold text-white">Website Navigation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-fade-in">
            {t("sitemap.heroTitle")}
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            {t("sitemap.heroSubtitle")}
          </p>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
                  className="fill-slate-50 dark:fill-slate-900"/>
          </svg>
        </div>
      </header>

      <main id="main-content" className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { labelKey: "sitemap.statInternalPages", value: "7", icon: <FileText className="w-5 h-5" /> },
            { labelKey: "sitemap.statExternalLinks", value: "9", icon: <ExternalLink className="w-5 h-5" /> },
            { labelKey: "sitemap.statResources", value: "16+", icon: <BookOpen className="w-5 h-5" /> },
            { labelKey: "sitemap.statLanguages", value: "3", icon: <Globe className="w-5 h-5" /> }
          ].map((stat, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform">
              <div className="flex justify-center mb-2 text-blue-600 dark:text-blue-400">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>

        {/* Sitemap Sections */}
        <div className="space-y-10">
          {sitemapSections.map((section, sectionIndex) => {
            const colorClasses = getColorClasses(section.color)
            return (
              <section key={sectionIndex} className="animate-fade-in" style={{ animationDelay: `${sectionIndex * 100}ms` }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl ${colorClasses.bg} ${colorClasses.text}`}>
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t(section.titleKey)}</h2>
                    <p className="text-slate-600 dark:text-slate-400">{t(section.descKey)}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {section.items.map((item, itemIndex) => (
                    item.isExternal ? (
                      <a
                        key={itemIndex}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-start gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border-2 ${colorClasses.border} ${colorClasses.hoverBg} transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
                      >
                        <div className={`p-2 rounded-lg ${colorClasses.bg} ${colorClasses.text} group-hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                              {t(item.labelKey)}
                            </h3>
                            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t(item.descKey)}</p>
                        </div>
                      </a>
                    ) : (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className={`group flex items-start gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border-2 ${colorClasses.border} ${colorClasses.hoverBg} transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
                      >
                        <div className={`p-2 rounded-lg ${colorClasses.bg} ${colorClasses.text} group-hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                            {t(item.labelKey)}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t(item.descKey)}</p>
                        </div>
                      </Link>
                    )
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        {/* XML Sitemap Notice */}
        <div className="mt-12 bg-slate-100 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">{t("sitemap.xmlNoticeTitle")}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            {t("sitemap.xmlNoticeText")}{" "}
            <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-blue-600 dark:text-blue-400">
              /sitemap.xml
            </code>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
