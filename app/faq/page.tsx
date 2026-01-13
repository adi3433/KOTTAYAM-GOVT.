"use client"

import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FAQSection from "@/components/faq-section"
import TrustIndicators from "@/components/trust-indicators"
import { HelpCircle, MessageSquare, ArrowRight, Phone, Mail, Globe } from "lucide-react"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <Navbar />
      
      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <HelpCircle className="w-5 h-5 text-amber-300" />
            <span className="text-sm font-semibold text-white">Help Center</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Questions</span>
          </h1>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto">
            Find answers to common questions about voter registration, the pledge campaign, and electoral processes.
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

      <main id="main-content" className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <FAQSection />
          
          {/* Still Have Questions? */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-white/20 rounded-full">
                <MessageSquare className="w-10 h-10" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help you with any queries about voting and the pledge campaign.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all hover:scale-105"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="tel:1950" 
                className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call 1950
              </a>
            </div>
          </div>

          {/* Quick Help Cards */}
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <a href="https://nvsp.in" target="_blank" rel="noopener noreferrer" className="group p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all">
              <Globe className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 dark:text-white">Register Online</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Visit NVSP portal for voter registration</p>
            </a>
            <a href="mailto:ceo@kerala.gov.in" className="group p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all">
              <Mail className="w-8 h-8 text-emerald-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 dark:text-white">Email Support</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Send us your detailed queries</p>
            </a>
            <a href="tel:1950" className="group p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all">
              <Phone className="w-8 h-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 dark:text-white">24/7 Helpline</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">National Voter Helpline - 1950</p>
            </a>
          </div>
        </div>
      </main>

      <TrustIndicators />
      <Footer />
    </div>
  )
}
