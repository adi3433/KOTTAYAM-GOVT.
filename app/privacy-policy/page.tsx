"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Shield, Lock, Eye, FileText, Users, Bell } from "lucide-react"

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Last updated: January 14, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Introduction
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                The SVEEP Kottayam Voter Pledge Portal ("Website") is an official initiative of the 
                District Election Office, Kottayam, under the Election Commission of India. This 
                Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website and use our services.
              </p>
            </section>

            {/* Information Collection */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-green-600 dark:text-green-400" />
                Information We Collect
              </h2>
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p className="leading-relaxed">
                  When you take the voter pledge on our website, we collect the following information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Full Name (as per official ID)</li>
                  <li>Phone Number (10-digit mobile number)</li>
                  <li>Timestamp of pledge submission</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  We may also automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>IP address (anonymized)</li>
                  <li>Access times and dates</li>
                </ul>
              </div>
            </section>

            {/* Use of Information */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p className="leading-relaxed">
                  The information collected is used for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Generate your official voter pledge certificate</li>
                  <li>Maintain records of pledge submissions for SVEEP initiatives</li>
                  <li>Compile anonymous statistics for voter awareness programs</li>
                  <li>Send important election-related notifications (if opted in)</li>
                  <li>Improve our website and services</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                Data Security
              </h2>
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>SSL/TLS encryption for all data transmissions</li>
                  <li>Secure cloud storage with Firebase (Google Cloud Platform)</li>
                  <li>Access controls and authentication protocols</li>
                  <li>Regular security audits and updates</li>
                </ul>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                  While we strive to use commercially acceptable means to protect your personal 
                  information, no method of transmission over the Internet or method of electronic 
                  storage is 100% secure.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Bell className="w-6 h-6 text-red-600 dark:text-red-400" />
                Data Retention & Your Rights
              </h2>
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p className="leading-relaxed">
                  Your pledge data is retained for the duration of SVEEP programs and may be 
                  archived for historical record-keeping purposes by the Election Commission.
                </p>
                <p className="leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request access to your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data (subject to legal requirements)</li>
                  <li>Opt-out of non-essential communications</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:ceo@kerala.gov.in" className="text-blue-600 dark:text-blue-400 hover:underline">
                    ceo@kerala.gov.in
                  </a>
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-800 rounded-2xl p-8 border-2 border-blue-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                If you have any questions about this Privacy Policy, please contact:
              </p>
              <div className="bg-white dark:bg-slate-700 rounded-xl p-4">
                <p className="font-semibold text-slate-900 dark:text-white">
                  District Election Office, Kottayam
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                  District Collectorate, Kottayam, Kerala - 686002
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Phone: 0481-2560123 | Email: ceo@kerala.gov.in
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
