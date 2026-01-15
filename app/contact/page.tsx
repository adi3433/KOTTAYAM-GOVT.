"use client"

import { MapPin, Phone, Mail, Clock, Building2, Globe, ExternalLink, MessageSquare, Users, Shield, AlertTriangle, ArrowRight, Send, CheckCircle2 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to a backend
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <Navbar />
      
      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <MessageSquare className="w-5 h-5 text-emerald-300" />
            <span className="text-sm font-semibold text-white">{t("contact.getInTouch")}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in">
            {t("contact.title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400">{t("contact.us")}</span>
          </h1>
          <p className="text-xl text-emerald-200 max-w-2xl mx-auto">
            {t("contact.heroSubtitle")}
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

      {/* Quick Contact Cards */}
      <section className="max-w-6xl mx-auto px-4 -mt-10 relative z-20">
        <div className="grid md:grid-cols-3 gap-4">
          <a href="tel:1950" className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl text-white group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{t("contact.nationalHelpline")}</p>
                <p className="text-2xl font-black text-slate-900 dark:text-white">1950</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400">{t("contact.available247")}</p>
              </div>
            </div>
          </a>
          <a href="mailto:ceo@kerala.gov.in" className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl text-white group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{t("contact.emailUs")}</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">ceo@kerala.gov.in</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400">{t("contact.quickResponse")}</p>
              </div>
            </div>
          </a>
          <a href="https://nvsp.in" target="_blank" rel="noopener noreferrer" className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl text-white group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{t("contact.onlineServices")}</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">{t("contact.nvspPortal")}</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400">{t("contact.registerOnline")}</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Content */}
      <main id="main-content" className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Information - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            {/* Main Office Card */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t("contact.districtElectionOffice")}</h2>
                  <p className="text-slate-600 dark:text-slate-400">{t("contact.kottayamKerala")}</p>
                </div>
              </div>

              {/* District Election Officer */}
              <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-800 rounded-xl border border-blue-200 dark:border-slate-600 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    CM
                  </div>
                  <div>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wide">{t("contact.districtElectionOfficer")}</p>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Chetan Kumar Meena IAS</h3>
                    <p className="text-slate-600 dark:text-slate-400">{t("contact.districtCollector")}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Address */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white mb-1">{t("contact.officeAddress")}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {t("contact.addressLine1")}<br />
                      Kottayam District<br />
                      Kerala - 686002, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white mb-1">{t("contact.contactNumbers")}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Office: <a href="tel:+914812560123" className="text-blue-600 dark:text-blue-400 hover:underline">0481-2560123</a><br />
                      Helpline: <a href="tel:1950" className="text-blue-600 dark:text-blue-400 hover:underline font-bold">1950</a><br />
                      Toll-Free: <a href="tel:18001801950" className="text-blue-600 dark:text-blue-400 hover:underline">1800-180-1950</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white mb-1">{t("contact.email")}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      <a href="mailto:ceo@kerala.gov.in" className="text-blue-600 dark:text-blue-400 hover:underline">ceo@kerala.gov.in</a><br />
                      <a href="mailto:collectorkottayam@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">collectorkottayam@gmail.com</a>
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg text-white">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white mb-1">{t("contact.officeHours")}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {t("contact.mondayFriday")}: {t("contact.timing")}<br />
                      Saturday: 10:00 AM - 1:00 PM<br />
                      <span className="text-red-500">{t("contact.closedWeekends")}</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Links */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 animate-fade-in-up delay-100">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-blue-600" />
                {t("contact.importantLinks")}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { href: "https://eci.gov.in", title: t("contact.eciTitle"), desc: t("contact.eciDesc"), color: "blue" },
                  { href: "https://voters.eci.gov.in", title: t("contact.voterPortalTitle"), desc: t("contact.voterPortalDesc"), color: "green" },
                  { href: "https://nvsp.in", title: t("contact.nvspTitle"), desc: t("contact.nvspDesc"), color: "orange" },
                  { href: "https://ceo.kerala.gov.in", title: t("contact.keralaCeoTitle"), desc: t("contact.keralaCeoDesc"), color: "purple" }
                ].map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-4 bg-gradient-to-r from-${link.color}-50 to-${link.color}-100 dark:from-slate-700 dark:to-slate-800 rounded-xl border border-${link.color}-200 dark:border-slate-600 hover:shadow-lg hover:scale-[1.02] transition-all`}
                  >
                    <div className={`p-2 bg-${link.color}-100 dark:bg-${link.color}-900/30 rounded-lg group-hover:bg-${link.color}-600 transition-colors`}>
                      <ExternalLink className={`w-5 h-5 text-${link.color}-600 dark:text-${link.color}-400 group-hover:text-white`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white">{link.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{link.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Contact Form & Services */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Form */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 animate-fade-in-up delay-200">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Send className="w-6 h-6 text-emerald-600" />
                {t("contact.sendUsMessage")}
              </h3>
              
              {formSubmitted ? (
                <div className="p-6 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl border border-emerald-200 dark:border-emerald-700 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-bold text-emerald-800 dark:text-emerald-300 text-lg">{t("contact.messageSent")}</h4>
                  <p className="text-emerald-700 dark:text-emerald-400 text-sm">{t("contact.getBackSoon")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{t("contact.yourName")}</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={t("contact.enterName")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{t("contact.emailAddress")}</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={t("contact.enterEmail")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{t("contact.subject")}</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option>{t("contact.generalInquiry")}</option>
                      <option>{t("contact.voterRegistration")}</option>
                      <option>{t("contact.epicCardIssue")}</option>
                      <option>{t("contact.pollingStationInfo")}</option>
                      <option>{t("contact.complaint")}</option>
                      <option>{t("contact.other")}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{t("contact.message")}</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder={t("contact.howCanWeHelp")}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {t("contact.sendMessage")}
                  </button>
                </form>
              )}
            </section>

            {/* Services Box */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-6 text-white animate-fade-in-up delay-300">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6" />
                {t("contact.availableServices")}
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  t("contact.newVoterReg"),
                  t("contact.epicCorrection"),
                  t("contact.electoralRollSearch"),
                  t("contact.pollingStationInformation"),
                  t("contact.voterGrievance"),
                  t("contact.electoralLiteracy")
                ].map((service, index) => (
                  <li key={index} className="flex items-center gap-3 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Emergency Contact */}
            <section className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-xl p-6 text-white animate-fade-in-up delay-400">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6" />
                <h3 className="text-xl font-bold">{t("contact.emergencyComplaints")}</h3>
              </div>
              <p className="text-red-100 mb-4 text-sm">
                {t("contact.emergencyNote")}
              </p>
              <div className="flex flex-col gap-3">
                <a href="tel:1950" className="flex items-center justify-center gap-2 bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition-all hover:scale-105">
                  <Phone className="w-5 h-5" />
                  {t("contact.call1950247")}
                </a>
                <a href="https://www.ceo.kerala.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all hover:scale-105">
                  <ExternalLink className="w-5 h-5" />
                  {t("contact.fileOnlineComplaint")}
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
