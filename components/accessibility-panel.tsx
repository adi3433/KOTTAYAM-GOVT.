"use client"

import { X, Type, Contrast, Eye, RotateCcw } from "lucide-react"
import { useAccessibility } from "@/lib/accessibility-context"
import { useLanguage } from "@/lib/language-context"

export default function AccessibilityPanel() {
  const {
    fontSize,
    highContrast,
    reducedMotion,
    isPanelOpen,
    setFontSize,
    toggleHighContrast,
    toggleReducedMotion,
    closeAccessibilityPanel,
  } = useAccessibility()
  const { t } = useLanguage()

  if (!isPanelOpen) return null

  const resetAll = () => {
    setFontSize("normal")
    if (highContrast) toggleHighContrast()
    if (reducedMotion) toggleReducedMotion()
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[60] animate-fade-in"
        onClick={closeAccessibilityPanel}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-white dark:bg-slate-900 shadow-2xl z-[70] animate-slide-left overflow-y-auto overscroll-contain"
        role="dialog"
        aria-modal="true"
        aria-labelledby="accessibility-panel-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-blue-900 dark:bg-blue-950 text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <h2 id="accessibility-panel-title" className="text-lg sm:text-xl font-bold flex items-center gap-2">
            <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
            {t("accessibility.title")}
          </h2>
          <button
            onClick={closeAccessibilityPanel}
            className="p-2 sm:p-2 hover:bg-white/20 active:bg-white/30 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white touch-manipulation"
            aria-label={t("accessibility.close")}
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-6 sm:space-y-8 pb-safe">
          {/* Font Size Section */}
          <section>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Type className="w-5 h-5 text-blue-700 dark:text-blue-400" />
              {t("accessibility.fontSize")}
            </h3>
            <div className="flex gap-2">
              {[
                { size: "normal" as const, label: "A", ariaLabel: t("accessibility.fontNormal") },
                { size: "large" as const, label: "A", ariaLabel: t("accessibility.fontLarge"), className: "text-lg" },
                { size: "xlarge" as const, label: "A", ariaLabel: t("accessibility.fontXLarge"), className: "text-xl" },
              ].map((option) => (
                <button
                  key={option.size}
                  onClick={() => setFontSize(option.size)}
                  className={`flex-1 py-4 px-4 rounded-xl border-2 font-bold transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${fontSize === option.size
                      ? "border-blue-600 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                      : "border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800"
                    } ${option.className || ""}`}
                  aria-pressed={fontSize === option.size}
                  aria-label={option.ariaLabel}
                >
                  {option.label}
                  {option.size === "normal" && <span className="text-xs ml-1">-</span>}
                  {option.size === "xlarge" && <span className="text-xs ml-1">+</span>}
                </button>
              ))}
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              {t("accessibility.fontSizeHint")}
            </p>
          </section>

          {/* High Contrast Section */}
          <section>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Contrast className="w-5 h-5 text-blue-700 dark:text-blue-400" />
              {t("accessibility.highContrast")}
            </h3>
            <button
              onClick={toggleHighContrast}
              className={`w-full py-4 px-6 rounded-xl border-2 font-semibold transition-all flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${highContrast
                  ? "border-blue-600 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                  : "border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800"
                }`}
              aria-pressed={highContrast}
            >
              <span>{highContrast ? t("accessibility.enabled") : t("accessibility.disabled")}</span>
              <div
                className={`w-12 h-7 rounded-full transition-colors relative ${highContrast ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-600"
                  }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform ${highContrast ? "translate-x-6" : "translate-x-1"
                    }`}
                />
              </div>
            </button>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              {t("accessibility.highContrastHint")}
            </p>
          </section>

          {/* Reduced Motion Section */}
          <section>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-700 dark:text-blue-400" />
              {t("accessibility.reducedMotion")}
            </h3>
            <button
              onClick={toggleReducedMotion}
              className={`w-full py-4 px-6 rounded-xl border-2 font-semibold transition-all flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${reducedMotion
                  ? "border-blue-600 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                  : "border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800"
                }`}
              aria-pressed={reducedMotion}
            >
              <span>{reducedMotion ? t("accessibility.enabled") : t("accessibility.disabled")}</span>
              <div
                className={`w-12 h-7 rounded-full transition-colors relative ${reducedMotion ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-600"
                  }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform ${reducedMotion ? "translate-x-6" : "translate-x-1"
                    }`}
                />
              </div>
            </button>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              {t("accessibility.reducedMotionHint")}
            </p>
          </section>

          {/* Reset Button */}
          <button
            onClick={resetAll}
            className="w-full py-4 px-6 rounded-xl border-2 border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <RotateCcw className="w-5 h-5" />
            {t("accessibility.resetAll")}
          </button>

          {/* Info Section */}
          <div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-4 border border-blue-200 dark:border-slate-700">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>{t("accessibility.keyboardNav")}:</strong> {t("accessibility.keyboardNavHint")}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
