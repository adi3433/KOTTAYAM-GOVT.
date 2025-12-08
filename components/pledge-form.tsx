"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { db } from "@/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

interface PledgeFormProps {
  onSuccess: (name: string, phone: string) => void
}

export default function PledgeForm({ onSuccess }: PledgeFormProps) {
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!fullName.trim()) newErrors.fullName = "Full name is required"
    if (!phone || !/^[0-9]{10}$/.test(phone)) newErrors.phone = "Enter a valid 10-digit phone number"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)

    try {
      // Add pledge document to Firestore
      await addDoc(collection(db, "pledges"), {
        fullName,
        phone,
        timestamp: serverTimestamp(),
      })

      // Move to success view
      onSuccess(fullName, phone)
    } catch (err) {
      console.error("Error submitting pledge:", err)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100" suppressHydrationWarning>
      {/* Top Bar - Indian Flag Colors */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
      
      {/* Header */}
      <header className="bg-white border-b-4 border-blue-800 shadow-md py-6 px-4 sm:py-8 animate-slide-up">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-4">
            {/* SVEEP Logo */}
            <a 
              href="/about"
              className="group w-32 h-16 sm:w-40 sm:h-20 bg-white rounded-lg shadow-lg border-2 border-blue-100 flex items-center justify-center overflow-hidden transition-all hover:shadow-xl hover:scale-105 hover:border-blue-300"
            >
              <img src="/sveep-logo.png" alt="SVEEP Logo" className="w-full h-full object-contain p-2" />
            </a>
            {/* EC Logo */}
            <a 
              href="https://eci.gov.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-32 h-16 sm:w-40 sm:h-20 bg-white rounded-lg shadow-lg border-2 border-blue-100 flex items-center justify-center overflow-hidden transition-all hover:shadow-xl hover:scale-105 hover:border-blue-300"
            >
              <img src="/ec-logo.png" alt="Election Commission Logo" className="w-full h-full object-contain p-2" />
            </a>
          </div>
          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-bold text-blue-900 mb-1">Systematic Voters' Education and Electoral Participation</h2>
            <p className="text-sm text-slate-600 font-medium">District Election Office, Kottayam</p>
            <p className="text-xs text-slate-500 mt-1">Government of India | Election Commission</p>
          </div>
        </div>
      </header>

      {/* Form Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-2xl">
          {/* Hero Section */}
          <div className="text-center mb-10 sm:mb-14 px-4 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-orange-100 to-green-100 rounded-full border-2 border-blue-200">
              <p className="text-sm font-bold text-blue-900">🗳️ Every Vote Counts | हर वोट मायने रखता है</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 mb-4 leading-tight">
              Take the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600">Voter Pledge</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 px-2 max-w-xl mx-auto font-medium">
              Join IIIT Kottayam students in strengthening democracy. Pledge to vote and receive your official certificate.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-blue-100 p-6 sm:p-10 animate-scale-in hover:shadow-3xl transition-all">
            <div className="mb-6 pb-4 border-b-2 border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 text-center">Voter Registration Pledge</h2>
              <p className="text-sm text-slate-600 text-center mt-2">All fields are mandatory | सभी फील्ड अनिवार्य हैं</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-3 group">
                <Label htmlFor="fullName" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  👤 Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value)
                    if (errors.fullName) setErrors({ ...errors, fullName: "" })
                  }}
                  placeholder="Enter your full name as per ID"
                  className="h-12 text-base border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg transition-all hover:border-blue-300 hover:shadow-md"
                />
                {errors.fullName && <p className="text-sm text-red-600 font-medium animate-fade-in">⚠️ {errors.fullName}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-3 group">
                <Label htmlFor="phone" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  📱 Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                    if (errors.phone) setErrors({ ...errors, phone: "" })
                  }}
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                  className="h-12 text-base border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg transition-all hover:border-blue-300 hover:shadow-md"
                />
                {errors.phone && <p className="text-sm text-red-600 font-medium animate-fade-in">⚠️ {errors.phone}</p>}
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                <p className="text-sm text-blue-900 font-medium">🔒 Your information is secure and will be used only for certificate generation.</p>
              </div>

              {/* Submit */}
              <Button 
                type="submit" 
                disabled={isLoading} 
                className="w-full h-14 text-lg font-bold mt-8 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all rounded-xl"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-6 w-6 animate-spin" /> Processing Your Pledge...
                  </>
                ) : (
                  <>
                    <span className="mr-2">✓</span> I Pledge to Vote for Democracy
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-6 px-4 border-t-4 border-orange-500 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="flex items-center justify-center gap-6 text-sm font-medium flex-wrap">
            <a href="/about" className="hover:text-orange-300 transition-colors cursor-pointer">About SVEEP</a>
            <span className="text-blue-300">|</span>
            <a href="https://eci.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300 transition-colors cursor-pointer">Election Commission</a>
            <span className="text-blue-300">|</span>
            <a href="/contact" className="hover:text-orange-300 transition-colors cursor-pointer">Contact</a>
          </div>
          <p className="text-sm text-blue-200">© 2025 SVEEP Kottayam District | Election Commission of India</p>
          <p className="text-xs text-blue-300">Empowering Democracy, One Vote at a Time</p>
        </div>
      </footer>
    </div>
  )
}
