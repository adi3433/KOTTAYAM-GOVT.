"use client"

import Link from "next/link"
import { Vote, Users, Target, BookOpen, Award, CheckCircle2, TrendingUp, Globe, Heart, Calendar, Star, ArrowRight, Sparkles } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  const milestones = [
    { year: "2009", event: "SVEEP launched by Election Commission of India" },
    { year: "2014", event: "Expanded to all states with dedicated SVEEP cells" },
    { year: "2019", event: "Achieved historic 67.4% turnout in General Elections" },
    { year: "2024", event: "Digital-first approach with enhanced voter outreach" },
    { year: "2025", event: "National Voters' Day theme: 'Nothing Like Voting, I Vote For Sure'" }
  ]

  const achievements = [
    { number: "97 Cr+", label: "Registered Voters in India", icon: <Users className="w-6 h-6" /> },
    { number: "67.4%", label: "2024 General Election Turnout", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "10.5L+", label: "Polling Stations Nationwide", icon: <Globe className="w-6 h-6" /> },
    { number: "25th Jan", label: "National Voters' Day", icon: <Calendar className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <Navbar />
      
      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <Vote className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold text-white">Election Commission of India Initiative</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">SVEEP</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Systematic Voters' Education and Electoral Participation
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

      {/* Achievements Stats */}
      <section className="py-10 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-black text-blue-900 dark:text-white">{stat.number}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <main id="main-content" className="max-w-5xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8 border border-slate-200 dark:border-slate-700 animate-fade-in-up">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-xl shadow-lg">
              <Vote className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-3">What is SVEEP?</h2>
              <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-blue-700 dark:text-blue-400">SVEEP (Systematic Voters' Education and Electoral Participation)</strong> is a flagship program of the Election Commission of India (ECI) designed to educate citizens, especially new and young voters, about the electoral process and motivate them to participate in elections.
                </p>
                <p>
                  Launched in <span className="font-semibold">2009</span>, SVEEP aims to build a sustainable model for voter education and electoral participation by reaching out to citizens through multiple platforms and innovative strategies. The program focuses on creating awareness about the value of every vote and ensuring inclusive participation in the democratic process.
                </p>
                <p>
                  SVEEP operates on the principle that <em className="text-blue-700 dark:text-blue-400">"an informed voter is key to a healthy democracy."</em> The program addresses low voter turnout and promotes ethical voting practices across diverse communities in India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 mb-8 border border-blue-200 dark:border-slate-700 animate-fade-in-up delay-100">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-8 flex items-center gap-3">
            <Calendar className="w-7 h-7 text-blue-600" />
            SVEEP Journey & Milestones
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"></div>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start gap-6 pl-12 group">
                  <div className="absolute left-0 w-9 h-9 bg-white dark:bg-slate-800 border-4 border-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:scale-110 transition-all">
                    <Star className="w-4 h-4 text-blue-500 group-hover:text-white" />
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 flex-1 group-hover:shadow-lg transition-shadow">
                    <div className="text-xl font-black text-blue-600 dark:text-blue-400">{milestone.year}</div>
                    <div className="text-slate-700 dark:text-slate-300">{milestone.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8 border border-slate-200 dark:border-slate-700 animate-fade-in-up delay-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-xl shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Mission & Objectives</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-800 p-6 rounded-xl border border-blue-200 dark:border-slate-600 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="w-5 h-5 text-red-500" />
                    <h3 className="text-lg font-bold text-blue-800 dark:text-white">Primary Mission</h3>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    To educate all eligible citizens to vote in a confident, comfortable, and ethical manner. SVEEP aims to create a culture of voting that is participatory, informed, and ethical.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-800 p-6 rounded-xl border border-green-200 dark:border-slate-600 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    <h3 className="text-lg font-bold text-blue-800 dark:text-white">Core Focus</h3>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Emphasis on voter registration, ethical voting, and increasing voter turnout, particularly among marginalized and underrepresented communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Objectives */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8 border border-slate-200 dark:border-slate-700 animate-fade-in-up delay-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-xl shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Key Objectives</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Disseminate information on registration process and polling station locations",
                  "Facilitate easy registration through various platforms",
                  "Educate voters about the electoral process and voting procedures",
                  "Motivate citizens to participate in electoral democracy",
                  "Promote ethical voting and prevent malpractices",
                  "Increase voter turnout, especially among youth, women, and marginalized groups",
                  "Create awareness about the importance of each vote",
                  "Foster inclusive and participatory democracy"
                ].map((objective, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-transparent dark:from-slate-700 dark:to-transparent rounded-xl hover:from-blue-100 dark:hover:from-slate-600 transition-colors group">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-slate-700 dark:text-slate-300">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Target Groups */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8 border border-slate-200 dark:border-slate-700 animate-fade-in-up delay-400">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-xl shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Target Groups</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Youth Voters", desc: "First-time voters and college students", emoji: "🎓" },
                  { title: "Women", desc: "Empowering female participation", emoji: "👩" },
                  { title: "Urban Migrants", desc: "Workers living away from home", emoji: "🏙️" },
                  { title: "Persons with Disabilities", desc: "Ensuring accessible voting", emoji: "♿" },
                  { title: "Senior Citizens", desc: "Facilitating elderly participation", emoji: "👴" },
                  { title: "Tribal Communities", desc: "Reaching remote populations", emoji: "🏕️" }
                ].map((group, index) => (
                  <div key={index} className="p-5 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-600 hover:shadow-lg hover:scale-105 transition-all group">
                    <span className="text-3xl mb-2 block">{group.emoji}</span>
                    <h3 className="font-bold text-blue-800 dark:text-white mb-2">{group.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{group.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SVEEP Activities */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 mb-8 border border-orange-200 dark:border-slate-700 animate-fade-in-up delay-500">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-6 flex items-center gap-3">
            <Award className="w-7 h-7 text-orange-500" />
            SVEEP Activities & Initiatives
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            {[
              { title: "Mass Media Campaigns", desc: "Television, radio, print, and digital media campaigns to reach diverse audiences with voter awareness messages." },
              { title: "Educational Programs", desc: "Workshops, seminars, and interactive sessions in schools, colleges, and community centers focusing on electoral education." },
              { title: "Creative Outreach", desc: "Use of street plays, cultural programs, songs, and local art forms to engage communities in a culturally relevant manner." },
              { title: "Digital Initiatives", desc: "Social media campaigns, mobile apps, and online registration facilities to connect with tech-savvy youth." },
              { title: "Voter Helplines", desc: "Toll-free numbers and helpdesks for voter queries and assistance with registration and electoral information." }
            ].map((activity, index) => (
              <div key={index} className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-orange-200 dark:border-slate-600 hover:shadow-md transition-shadow">
                <strong className="text-orange-700 dark:text-orange-400">{activity.title}:</strong>
                <span className="ml-2">{activity.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-2xl shadow-xl p-10 text-white text-center">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-white/20 rounded-full animate-pulse">
                <Vote className="w-10 h-10" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-xl mx-auto">
              Every vote matters. Be a responsible citizen and participate in the democratic process.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
            >
              Take the Voting Pledge
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
