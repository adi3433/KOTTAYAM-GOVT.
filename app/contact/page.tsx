"use client"

import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Mail, Clock, Building2, Globe } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Top Bar - Indian Flag Colors */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
      
      {/* Header */}
      <header className="bg-white border-b-4 border-blue-800 shadow-md py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="text-center mt-4">
            <h1 className="text-4xl font-bold text-blue-900 mb-2">Contact Us</h1>
            <p className="text-lg text-slate-600">District Election Office, Kottayam</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Main Contact Card */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-100 animate-slide-up">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Building2 className="w-8 h-8 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">District Election Office</h2>
                  <p className="text-slate-600">Kottayam, Kerala</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* District Election Officer */}
                <div className="p-5 bg-blue-50 rounded-xl border-2 border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-2">District Election Officer</h3>
                  <p className="text-slate-700 font-semibold">Chetan Kumar Meena IAS</p>
                  <p className="text-sm text-slate-600">District Collector, Kottayam</p>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <MapPin className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Office Address</h3>
                    <p className="text-slate-600">
                      District Collectorate<br />
                      Kottayam District<br />
                      Kerala - 686002<br />
                      India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg mt-1">
                    <Phone className="w-5 h-5 text-orange-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Contact Numbers</h3>
                    <p className="text-slate-600">
                      Office: <a href="tel:+914812560123" className="text-blue-700 hover:underline">0481-2560123</a><br />
                      Helpline: <a href="tel:1950" className="text-blue-700 hover:underline font-semibold">1950</a> (National Voter Helpline)<br />
                      Toll-Free: <a href="tel:18001801950" className="text-blue-700 hover:underline">1800-180-1950</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg mt-1">
                    <Mail className="w-5 h-5 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Email</h3>
                    <p className="text-slate-600">
                      <a href="mailto:ceo@kerala.gov.in" className="text-blue-700 hover:underline">ceo@kerala.gov.in</a><br />
                      <a href="mailto:collectorkottayam@gmail.com" className="text-blue-700 hover:underline">collectorkottayam@gmail.com</a>
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Clock className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Office Hours</h3>
                    <p className="text-slate-600">
                      Monday - Friday: 10:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 1:00 PM<br />
                      Sunday & Public Holidays: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Links & Resources */}
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Important Links & Resources</h3>
              
              <div className="space-y-3">
                <a 
                  href="https://eci.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-blue-700" />
                    <div>
                      <h4 className="font-bold text-blue-800">Election Commission of India</h4>
                      <p className="text-sm text-slate-600">Official ECI Website</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://voters.eci.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-2 border-green-200 hover:shadow-lg transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-green-700" />
                    <div>
                      <h4 className="font-bold text-green-800">Voter Portal</h4>
                      <p className="text-sm text-slate-600">Check your voter registration</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://nvsp.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border-2 border-orange-200 hover:shadow-lg transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-orange-700" />
                    <div>
                      <h4 className="font-bold text-orange-800">National Voter Service Portal</h4>
                      <p className="text-sm text-slate-600">Online voter registration & services</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://ceo.kerala.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-purple-700" />
                    <div>
                      <h4 className="font-bold text-purple-800">Kerala CEO Office</h4>
                      <p className="text-sm text-slate-600">Chief Electoral Officer, Kerala</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Services Box */}
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-4">Available Services</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-300">✓</span>
                    <span>Voter Registration & Correction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-300">✓</span>
                    <span>EPIC Card Application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-300">✓</span>
                    <span>Electoral Roll Search</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-300">✓</span>
                    <span>Polling Station Information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-300">✓</span>
                    <span>Voter Grievance Redressal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-300">✓</span>
                    <span>Electoral Literacy Programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl shadow-xl p-6 border-2 border-red-200">
          <h3 className="text-xl font-bold text-red-800 mb-3">Emergency & Complaints</h3>
          <p className="text-slate-700 mb-4">
            For election-related complaints, violations, or emergencies during elections:
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:1950" className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-all hover:scale-105">
              <Phone className="w-5 h-5" />
              Call 1950
            </a>
            <a href="https://www.ceo.kerala.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all hover:scale-105">
              <Globe className="w-5 h-5" />
              File Online Complaint
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-6 px-4 border-t-4 border-orange-500 mt-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-blue-200">© 2025 SVEEP Kottayam District | Election Commission of India</p>
        </div>
      </footer>
    </div>
  )
}
