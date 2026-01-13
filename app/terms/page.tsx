"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Scale, Shield, FileText, AlertTriangle, CheckCircle, Users, Globe, Lock, BookOpen } from "lucide-react"

export default function TermsPage() {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: `By accessing and using the SVEEP Kottayam Voter Pledge Portal ("Website"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use this Website.

This Website is operated by the District Election Office, Kottayam, under the authority of the Election Commission of India. Your continued use of the Website constitutes your acceptance of any amendments to these terms.`
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Eligibility",
      content: `This Website and its services are intended for:
• Indian citizens who are 18 years of age or older
• Individuals who are eligible to vote in Indian elections
• Residents of Kottayam District, Kerala, or students/staff of institutions within the district

By using this Website, you represent and warrant that you meet these eligibility requirements. The pledge certificate is a symbolic commitment and does not constitute official voter registration.`
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "User Responsibilities",
      content: `When using this Website, you agree to:
• Provide accurate and truthful information
• Not impersonate any person or entity
• Not submit false or misleading information
• Use the Website only for lawful purposes
• Not attempt to gain unauthorized access to any part of the Website
• Not interfere with or disrupt the Website's functionality
• Respect the intellectual property rights of the Election Commission of India`
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Collection & Privacy",
      content: `We collect the following information when you submit a pledge:
• Full Name (as per official identification)
• Mobile Phone Number

This information is used solely for:
• Generating your pledge certificate
• Statistical analysis of voter awareness campaigns
• Communication regarding electoral activities (with consent)

Your data is protected under the Information Technology Act, 2000 and relevant data protection regulations. For complete details, please refer to our Privacy Policy.`
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Certificate Generation",
      content: `Upon successful submission of your pledge:
• A digital certificate will be automatically generated
• The certificate is for commemorative purposes only
• It does not serve as an official voter ID or registration document
• The certificate can be downloaded and shared on social media
• We reserve the right to modify the certificate design

The pledge certificate acknowledges your commitment to participate in the democratic process and is part of the SVEEP (Systematic Voters' Education and Electoral Participation) initiative.`
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Intellectual Property",
      content: `All content on this Website, including but not limited to:
• Logos of Election Commission of India and SVEEP
• Text, graphics, images, and software
• Certificate designs and templates
• Website design and layout

are the property of the Election Commission of India or its licensors and are protected by Indian copyright and trademark laws. You may not reproduce, distribute, or create derivative works without prior written permission.`
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Disclaimer of Warranties",
      content: `This Website is provided "as is" without warranties of any kind. The Election Commission of India and SVEEP Kottayam:
• Do not guarantee uninterrupted or error-free service
• Do not warrant the accuracy or completeness of information
• Are not responsible for any technical issues or data loss
• Reserve the right to modify or discontinue services without notice

The pledge certificate does not guarantee any electoral benefits or privileges.`
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Limitation of Liability",
      content: `To the maximum extent permitted by law, the Election Commission of India, SVEEP Kottayam, and their affiliates shall not be liable for:
• Any indirect, incidental, or consequential damages
• Loss of data or unauthorized access to your information
• Any damages arising from your use of this Website
• Actions taken based on information provided on this Website

Your use of this Website is at your own risk.`
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Governing Law",
      content: `These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising from or related to these terms or your use of this Website shall be subject to the exclusive jurisdiction of the courts in Kottayam, Kerala.

The Election Commission of India reserves the right to take appropriate legal action against any misuse of this Website or violation of these terms.`
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Modifications to Terms",
      content: `We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting on this Website. Your continued use of the Website after any modifications constitutes your acceptance of the revised terms.

We encourage you to review these terms periodically for any updates.

Last Updated: January 14, 2026`
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-16 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <Scale className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-semibold text-white">Legal Agreement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-fade-in">
            Terms of Use
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Please read these terms carefully before using the SVEEP Kottayam Voter Pledge Portal
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent"></div>
      </header>

      <main id="main-content" className="max-w-5xl mx-auto px-4 py-12">
        {/* Quick Summary Card */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 mb-10 border-2 border-amber-200 dark:border-amber-700/50 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-500 rounded-xl text-white">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-2">Important Notice</h2>
              <p className="text-amber-800 dark:text-amber-200">
                By using this website and submitting a voter pledge, you acknowledge that this is a symbolic commitment to participate in elections. 
                The pledge certificate is not a substitute for official voter registration. To register as a voter or verify your registration, 
                please visit <a href="https://nvsp.in" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-amber-600">nvsp.in</a> or 
                contact your local Electoral Registration Officer.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <section 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl text-blue-700 dark:text-blue-300 group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {section.title}
                    </h2>
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            If you have any questions or concerns about these Terms of Use, please contact the District Election Office, Kottayam.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="mailto:ceo@kerala.gov.in"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-all hover:scale-105 border-2 border-blue-500"
            >
              Email: ceo@kerala.gov.in
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
