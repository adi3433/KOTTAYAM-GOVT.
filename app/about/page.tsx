"use client"

import Link from "next/link"
import { ArrowLeft, Vote, Users, Target, BookOpen } from "lucide-react"

export default function AboutPage() {
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
            <h1 className="text-4xl font-bold text-blue-900 mb-2">About SVEEP</h1>
            <p className="text-lg text-slate-600">Systematic Voters' Education and Electoral Participation</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-100 animate-slide-up">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Vote className="w-8 h-8 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-3">What is SVEEP?</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>SVEEP (Systematic Voters' Education and Electoral Participation)</strong> is a flagship program of the Election Commission of India (ECI) designed to educate citizens, especially new and young voters, about the electoral process and motivate them to participate in elections.
                </p>
                <p>
                  Launched in 2009, SVEEP aims to build a sustainable model for voter education and electoral participation by reaching out to citizens through multiple platforms and innovative strategies. The program focuses on creating awareness about the value of every vote and ensuring inclusive participation in the democratic process.
                </p>
                <p>
                  SVEEP operates on the principle that an informed voter is key to a healthy democracy. The program addresses the low voter turnout and promotes ethical voting practices across diverse communities in India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-100 animate-fade-in">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <Target className="w-8 h-8 text-green-700" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Mission & Objectives</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">Primary Mission</h3>
                  <p className="text-slate-700">
                    To educate all eligible citizens to vote in a confident, comfortable, and ethical manner. SVEEP aims to create a culture of voting that is participatory, informed, and ethical.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">Core Focus</h3>
                  <p className="text-slate-700">
                    Emphasis on voter registration, ethical voting, and increasing voter turnout, particularly among marginalized and underrepresented communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Objectives */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-100 animate-scale-in">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 p-3 rounded-lg">
              <BookOpen className="w-8 h-8 text-orange-700" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Key Objectives</h2>
              <div className="grid gap-4">
                {[
                  "Disseminate information on registration process and location details of polling stations",
                  "Facilitate easy registration through various platforms",
                  "Educate voters about the electoral process and voting procedures",
                  "Motivate citizens to participate in electoral democracy",
                  "Promote ethical voting and prevent malpractices",
                  "Increase voter turnout, especially among youth, women, and marginalized groups",
                  "Create awareness about the importance of each vote",
                  "Foster inclusive and participatory democracy"
                ].map((objective, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="text-blue-700 font-bold text-lg">✓</span>
                    <p className="text-slate-700">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Target Groups */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-100">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="w-8 h-8 text-purple-700" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Target Groups</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Youth Voters", desc: "First-time voters and college students" },
                  { title: "Women", desc: "Empowering female participation" },
                  { title: "Urban Migrants", desc: "Workers living away from home" },
                  { title: "Persons with Disabilities", desc: "Ensuring accessible voting" },
                  { title: "Senior Citizens", desc: "Facilitating elderly participation" },
                  { title: "Tribal Communities", desc: "Reaching remote populations" }
                ].map((group, index) => (
                  <div key={index} className="p-5 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
                    <h3 className="font-bold text-blue-800 mb-2">{group.title}</h3>
                    <p className="text-sm text-slate-600">{group.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SVEEP Activities */}
        <section className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">SVEEP Activities & Initiatives</h2>
          <div className="space-y-4 text-slate-700">
            <p className="leading-relaxed">
              <strong>Mass Media Campaigns:</strong> Television, radio, print, and digital media campaigns to reach diverse audiences with voter awareness messages.
            </p>
            <p className="leading-relaxed">
              <strong>Educational Programs:</strong> Workshops, seminars, and interactive sessions in schools, colleges, and community centers focusing on electoral education.
            </p>
            <p className="leading-relaxed">
              <strong>Creative Outreach:</strong> Use of street plays, cultural programs, songs, and local art forms to engage communities in a culturally relevant manner.
            </p>
            <p className="leading-relaxed">
              <strong>Digital Initiatives:</strong> Social media campaigns, mobile apps, and online registration facilities to connect with tech-savvy youth.
            </p>
            <p className="leading-relaxed">
              <strong>Voter Helplines:</strong> Toll-free numbers and helpdesks for voter queries and assistance with registration and electoral information.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
          <p className="text-xl mb-6 text-blue-100">
            Every vote matters. Be a responsible citizen and participate in the democratic process.
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
          >
            Take the Voting Pledge
          </Link>
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
