"use client"

import { useLanguage } from "@/lib/language-context"

export default function Loading() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-blue-200 dark:border-slate-700 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"></div>
          <div className="absolute inset-2 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center">
            <span className="text-3xl">🗳️</span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {t("common.loading")}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {t("common.pleaseWait")}
          </p>
        </div>

        {/* Loading Bar */}
        <div className="mt-6 w-48 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full animate-loading-bar"></div>
        </div>
      </div>
    </div>
  )
}
