"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Shield, Lock, Eye, FileText, Users, Bell } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function PrivacyPolicyPage() {
  const { t } = useLanguage()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <Navbar />
      
      <main id="main-content" className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-4">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-bold text-blue-700 dark:text-blue-300">
                {t("privacyPolicy.badge")}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t("privacyPolicy.title")}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t("privacyPolicy.lastUpdated")}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                {t("privacyPolicy.introTitle")}
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {t("privacyPolicy.introText")}
              </p>
            </section>

            {/* Information Collection */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-green-600 dark:text-green-400" />
                {t("privacyPolicy.collectTitle")}
              </h2>
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p className="leading-relaxed">
                  {t("privacyPolicy.collectIntro")}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t("privacyPolicy.collectItem1")}</li>
                  <li>{t("privacyPolicy.collectItem2")}</li>
                  <li>{t("privacyPolicy.collectItem3")}</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  {t("privacyPolicy.collectAuto")}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t("privacyPolicy.collectAuto1")}</li>
                  <li>{t("privacyPolicy.collectAuto2")}</li>
                  <li>{t("privacyPolicy.collectAuto3")}</li>
                  <li>{t("privacyPolicy.collectAuto4")}</li>
                </ul>
              </div>
            </section>

            {/* Use of Information */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                {t("privacyPolicy.useTitle")}
              </h2>
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p className="leading-relaxed">
                  {t("privacyPolicy.useIntro")}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t("privacyPolicy.useItem1")}</li>
                  <li>{t("privacyPolicy.useItem2")}</li>
                  <li>{t("privacyPolicy.useItem3")}</li>
                  <li>{t("privacyPolicy.useItem4")}</li>
                  <li>{t("privacyPolicy.useItem5")}</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                {t("privacyPolicy.securityTitle")}
              </h2>
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p className="leading-relaxed">
                  {t("privacyPolicy.securityIntro")}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t("privacyPolicy.securityItem1")}</li>
                  <li>{t("privacyPolicy.securityItem2")}</li>
                  <li>{t("privacyPolicy.securityItem3")}</li>
                  <li>{t("privacyPolicy.securityItem4")}</li>
                </ul>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                  {t("privacyPolicy.securityDisclaimer")}
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Bell className="w-6 h-6 text-red-600 dark:text-red-400" />
                {t("privacyPolicy.retentionTitle")}
              </h2>
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p className="leading-relaxed">
                  {t("privacyPolicy.retentionText")}
                </p>
                <p className="leading-relaxed">
                  {t("privacyPolicy.rightsIntro")}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t("privacyPolicy.rightsItem1")}</li>
                  <li>{t("privacyPolicy.rightsItem2")}</li>
                  <li>{t("privacyPolicy.rightsItem3")}</li>
                  <li>{t("privacyPolicy.rightsItem4")}</li>
                </ul>
                <p className="mt-4">
                  {t("privacyPolicy.rightsExercise")}{" "}
                  <a href="mailto:ceo@kerala.gov.in" className="text-blue-600 dark:text-blue-400 hover:underline">
                    ceo@kerala.gov.in
                  </a>
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-800 rounded-2xl p-8 border-2 border-blue-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {t("privacyPolicy.contactTitle")}
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                {t("privacyPolicy.contactText")}
              </p>
              <div className="bg-white dark:bg-slate-700 rounded-xl p-4">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {t("privacyPolicy.officeName")}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                  {t("privacyPolicy.officeAddress")}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {t("privacyPolicy.officeContact")}
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
