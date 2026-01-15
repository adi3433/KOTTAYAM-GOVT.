"use client"

import { Shield, Lock, Award, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function TrustIndicators() {
  const { t } = useLanguage()

  const indicators = [
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
      text: t("trust.poweredBy"),
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6" />,
      text: t("trust.secureWebsite"),
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-900/30",
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      text: t("trust.dataProtection"),
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
  ]

  return (
    <section className="py-6 sm:py-8 px-3 sm:px-4 bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border-y border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-12">
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className="flex items-center gap-2 sm:gap-3 group"
            >
              <div className={`p-1.5 sm:p-2 rounded-lg ${indicator.bgColor} transition-transform group-hover:scale-110 group-active:scale-95`}>
                <span className={indicator.color}>{indicator.icon}</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                {indicator.text}
              </span>
            </div>
          ))}
        </div>

        {/* SSL Badge */}
        <div className="flex items-center justify-center mt-4 sm:mt-6 gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
          <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
            {t("trust.sslSecured")}
          </span>
        </div>
      </div>
    </section>
  )
}
