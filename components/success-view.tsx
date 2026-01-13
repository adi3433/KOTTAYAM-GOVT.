"use client"

import { Button } from "@/components/ui/button"
import { Download, Share2, Sparkles, Award, CheckCircle, Star, PartyPopper } from "lucide-react"
import { useState, useEffect } from "react"
import { db } from "@/firebase"
import { collection, query, where, getDocs } from "firebase/firestore"

interface SuccessViewProps {
  name: string
  phone: string
}

export default function SuccessView({ name, phone }: SuccessViewProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const [isSharing, setIsSharing] = useState(false)
  const [certificateUrl, setCertificateUrl] = useState<string | null>(null)
  const [pledgeId, setPledgeId] = useState<string | null>(null)
  const [certificateLoaded, setCertificateLoaded] = useState(false)

  // Fetch certificate from Firestore with polling
  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const q = query(
          collection(db, "pledges"),
          where("fullName", "==", name),
          where("phone", "==", phone)
        )
        const snapshot = await getDocs(q)
        if (!snapshot.empty) {
          const doc = snapshot.docs[0]
          const data = doc.data()
          console.log("Pledge document data:", data)
          
          setPledgeId(doc.id)
          
          if (data.certificateUrl) {
            console.log("Certificate URL found:", data.certificateUrl)
            setCertificateUrl(data.certificateUrl)
          } else {
            console.log("Certificate URL not yet available")
          }
        } else {
          console.log("No pledge document found")
        }
      } catch (err) {
        console.error("Error fetching certificate:", err)
      }
    }

    fetchCertificate()
    const pollInterval = setInterval(fetchCertificate, 3000)
    const timeout = setTimeout(() => clearInterval(pollInterval), 30000)

    return () => {
      clearInterval(pollInterval)
      clearTimeout(timeout)
    }
  }, [name, phone])

  // Download handler
  const handleDownload = async () => {
    if (!pledgeId) {
      alert("Certificate not ready yet!")
      return
    }

    setIsDownloading(true)

    try {
      const functionUrl = `https://us-central1-kottayam-official.cloudfunctions.net/downloadCertificate?id=${pledgeId}`
      console.log("📥 Downloading from Cloud Function:", functionUrl)

      const response = await fetch(functionUrl)
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      const blob = await response.blob()
      const blobUrl = URL.createObjectURL(blob)
      const anchor = document.createElement("a")
      anchor.style.display = "none"
      anchor.href = blobUrl
      anchor.download = `${name}-certificate.png`
      document.body.appendChild(anchor)
      anchor.click()
      document.body.removeChild(anchor)
      URL.revokeObjectURL(blobUrl)
      console.log("✅ Certificate downloaded successfully")
    } catch (error) {
      console.error("❌ Download failed:", error)
      alert("Failed to download certificate. Please try again.")
    } finally {
      setIsDownloading(false)
    }
  }

  // Share handler
  const handleShare = async () => {
    if (!pledgeId) return alert("Certificate not ready yet!")
    setIsSharing(true)
    
    const shareTitle = "Kottayam Voting Pledge"
    const shareText = `I've pledged to vote in Kottayam! 🇮🇳\n\nJoin me in making democracy stronger.\n\nKottayam Votes - Your Vote, Your Voice.`
    const functionUrl = `https://us-central1-kottayam-votes-2025.cloudfunctions.net/downloadCertificate?id=${pledgeId}`

    try {
      try {
        const response = await fetch(functionUrl)
        const blob = await response.blob()
        const fileName = `${name.replace(/\s+/g, '_')}_Certificate.png`
        const file = new File([blob], fileName, { type: "image/png" })
        
        if (navigator.share && navigator.canShare) {
          const shareData = { title: shareTitle, text: shareText, files: [file] }
          if (navigator.canShare(shareData)) {
            await navigator.share(shareData)
            console.log("✅ Certificate image shared successfully")
            setIsSharing(false)
            return
          }
        }
      } catch (fetchError) {
        console.log("Could not fetch image for sharing:", fetchError)
      }
      
      if (navigator.share) {
        await navigator.share({ title: shareTitle, text: shareText + `\n\n${certificateUrl}` })
        console.log("✅ Shared URL")
      } else {
        const textToCopy = `${shareText}\n\nView my certificate: ${certificateUrl}`
        await navigator.clipboard.writeText(textToCopy)
        alert("✅ Certificate link copied to clipboard!\n\nYou can now paste it to share on social media.")
        console.log("✅ Copied to clipboard")
      }
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log("Share cancelled by user")
      } else {
        console.error("Share error:", error)
        try {
          const textToCopy = `${shareText}\n\n${certificateUrl}`
          await navigator.clipboard.writeText(textToCopy)
          alert("✅ Certificate link copied to clipboard!")
        } catch (clipboardError) {
          alert("Please manually copy this link:\n\n" + certificateUrl)
        }
      }
    }
    
    setIsSharing(false)
  }

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 -z-10">
        {/* Subtle glowing orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gradient-to-r from-emerald-800/80 via-teal-800/80 to-cyan-800/80 backdrop-blur-md text-white py-6 px-4 sm:py-8 text-center border-b border-white/10">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <div className="w-40 h-20 sm:w-48 sm:h-24 bg-white/95 rounded-xl flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-lg shadow-emerald-500/20 animate-bounce-in">
            <img src="/sveep-logo.png" alt="SVEEP Logo" className="w-full h-full object-cover" />
          </div>
          <p className="text-xs text-emerald-200 flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3 animate-pulse" />
            Initiated by SVEEP Kottayam District
            <Sparkles className="w-3 h-3 animate-pulse" />
          </p>
        </div>
      </header>

      {/* Main Section */}
      <section className="relative z-10 flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-4xl">
          {/* Success Badge */}
          <div className="text-center mb-6 sm:mb-8 animate-fade-in-up">
            {/* Animated checkmark with pulsing rings */}
            <div className="relative inline-flex items-center justify-center mb-4 sm:mb-6">
              {/* Outer pulsing rings - reduced size */}
              <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-400/25 animate-ping"></div>
              <div className="absolute w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-emerald-400/30 animate-pulse"></div>
              
              {/* Main circle with checkmark */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/50 animate-bounce-in">
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-md" />
              </div>
              
              {/* Sparkle decorations */}
              <Star className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-pulse fill-yellow-300" />
              <Sparkles className="absolute -bottom-1 -left-3 w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 animate-pulse" />
            </div>

            {/* Congratulations text with shimmer */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 animate-fade-in-up">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-white bg-[length:200%_100%] animate-shimmer-slow">
                🎉 Congratulations! 🎉
              </span>
            </h1>
            
            {/* Name */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-pulse" />
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-md">
                {name}
              </p>
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-pulse" />
            </div>
            
            <p className="text-white/90 text-sm sm:text-base md:text-lg drop-shadow-sm">
              You have successfully taken the pledge to vote!
            </p>
          </div>

          {/* Certificate Container */}
          <div className="mb-8 max-w-3xl mx-auto animate-fade-in-up delay-300">
            {certificateUrl ? (
              <div 
                className={`relative group rounded-2xl overflow-hidden transition-all duration-500 ${certificateLoaded ? 'animate-scale-in' : ''}`}
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity animate-gradient-flow"></div>
                
                {/* Certificate image */}
                <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/30">
                  <img 
                    src={certificateUrl} 
                    alt="Voting Pledge Certificate" 
                    className="w-full h-auto object-contain"
                    onLoad={() => setCertificateLoaded(true)}
                  />
                  
                  {/* Shimmer overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-yellow-400/60 rounded-tl-lg"></div>
                <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-yellow-400/60 rounded-tr-lg"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-yellow-400/60 rounded-bl-lg"></div>
                <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-yellow-400/60 rounded-br-lg"></div>
              </div>
            ) : (
              /* Loading state with fancy animation */
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 rounded-2xl opacity-50 blur-sm animate-pulse"></div>
                <div className="relative aspect-[3/2] bg-gradient-to-br from-emerald-800/50 to-cyan-800/50 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    {/* Animated loading icon */}
                    <div className="relative inline-flex items-center justify-center mb-4">
                      <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-400 rounded-full animate-spin"></div>
                      <div className="absolute text-3xl">📜</div>
                    </div>
                    <p className="text-white font-semibold mb-1">Generating Your Certificate</p>
                    <p className="text-emerald-300/80 text-sm">This won&apos;t take long...</p>
                    
                    {/* Progress dots */}
                    <div className="flex justify-center gap-1 mt-3">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mb-6 max-w-md mx-auto px-2 animate-fade-in-up delay-500">
            {/* Download Button */}
            <Button
              onClick={handleDownload}
              disabled={isDownloading || !certificateUrl}
              className="relative w-full h-12 sm:h-14 text-sm sm:text-base font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white rounded-xl shadow-lg shadow-emerald-500/30 transition-all duration-200 active:scale-[0.98] overflow-hidden group"
              size="lg"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              
              {isDownloading ? (
                <span className="relative flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Downloading...
                </span>
              ) : (
                <span className="relative flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Certificate
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </span>
              )}
            </Button>

            {/* Share Button */}
            <Button
              onClick={handleShare}
              disabled={isSharing || !certificateUrl}
              variant="outline"
              className="relative w-full h-12 sm:h-14 text-sm sm:text-base font-bold bg-white/15 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/25 rounded-xl transition-all duration-200 active:scale-[0.98] overflow-hidden group"
              size="lg"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              
              {isSharing ? (
                <span className="relative flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sharing...
                </span>
              ) : (
                <span className="relative flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share Certificate
                </span>
              )}
            </Button>
          </div>

          {/* Social Media Tip with rainbow gradient */}
          <div className="max-w-md mx-auto px-2">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl opacity-60 blur-sm group-hover:opacity-80 transition-opacity animate-gradient-flow"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <p className="text-white font-medium text-sm sm:text-base">
                  📸 Save and share your certificate on social media!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-emerald-900/90 backdrop-blur-md py-4 px-4 text-center border-t border-white/10">
        <p className="text-white/80 text-sm">
          © 2025 SVEEP Kottayam District
        </p>
      </footer>
    </div>
  )
}
