"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle, Mail, MapPin, Phone } from "lucide-react"

export default function PrivacyPage() {
  const { t } = useLanguage()

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, Email, Phone number)",
        "Demographic information (Age, Gender, Location)",
        "Electoral roll details for verification purposes",
        "Device information and IP address for security"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To register your voter pledge and participation",
        "To send notifications about electoral events and updates",
        "To improve our services and user experience",
        "To comply with legal requirements and electoral regulations"
      ]
    },
    {
      icon: Lock,
      title: "Data Protection & Security",
      content: [
        "All data is encrypted using industry-standard SSL/TLS protocols",
        "Access to personal data is restricted to authorized personnel only",
        "Regular security audits and vulnerability assessments",
        "Data stored on secure government-approved cloud infrastructure"
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Right to access your personal data upon request",
        "Right to correct inaccurate information",
        "Right to request deletion of your data (subject to legal requirements)",
        "Right to withdraw consent for non-essential communications"
      ]
    },
    {
      icon: Shield,
      title: "Data Sharing & Third Parties",
      content: [
        "We do not sell your personal information to third parties",
        "Data may be shared with Election Commission of India as required by law",
        "Analytics data is anonymized before any external processing",
        "Government agencies may access data for official electoral purposes"
      ]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M30%200v60M0%2030h60%22%20stroke%3D%22%23fff%22%20stroke-width%3D%221%22%2F%3E%3C%2Fsvg%3E')]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Your Privacy Matters
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90">
            SVEEP Kottayam - Voter Pledge Portal
          </p>
          <p className="text-sm text-white/70 mt-4">
            Last Updated: January 15, 2026
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 border-b dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Commitment to Your Privacy
                </h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  The District Election Office, Kottayam, under the Election Commission of India, 
                  is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you visit our voter pledge portal. 
                  Please read this policy carefully. If you do not agree with the terms of this privacy 
                  policy, please do not access the site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-600 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Cookie Policy */}
          <div className="mt-12 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              🍪 Cookie Policy
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              Our website uses essential cookies to ensure its proper functioning. These cookies are 
              necessary for:
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                Maintaining your session and preferences
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                Remembering your language and accessibility settings
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                Ensuring security of your connection
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                Anonymous analytics to improve our services
              </li>
            </ul>
          </div>

          {/* Data Retention */}
          <div className="mt-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              📅 Data Retention Period
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Your pledge information will be retained for the duration of the electoral cycle and 
              may be kept for historical and statistical purposes as per Election Commission guidelines. 
              Personal identifiable information will be anonymized after 5 years from the date of 
              collection unless required by law to be retained longer.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-850 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              📞 Contact Us
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your rights regarding 
              your personal data, please contact:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Address</p>
                    <p className="text-slate-800 dark:text-slate-200">
                      District Election Office, Collectorate, Kottayam, Kerala - 686001
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                    <p className="text-slate-800 dark:text-slate-200">0481-2562001</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                    <p className="text-slate-800 dark:text-slate-200">sveep.kottayam@kerala.gov.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="mt-12 text-center text-slate-600 dark:text-slate-400 text-sm">
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new policy on this page with an updated revision date.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
