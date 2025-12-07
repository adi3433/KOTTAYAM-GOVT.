"use client"

import { Button } from "@/components/ui/button"
import { Download, Share2 } from "lucide-react"
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
          
          // Store the pledge ID
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

    // Initial fetch
    fetchCertificate()

    // Poll every 3 seconds for up to 30 seconds
    const pollInterval = setInterval(fetchCertificate, 3000)
    const timeout = setTimeout(() => {
      clearInterval(pollInterval)
    }, 30000)

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
      // Use the Cloud Function URL with CORS enabled
      const functionUrl = `https://us-central1-kottayam-votes-2025.cloudfunctions.net/downloadCertificate?id=${pledgeId}`
      
      console.log("📥 Downloading from Cloud Function:", functionUrl)

      const response = await fetch(functionUrl)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const blob = await response.blob()

      // Create an object URL from the Blob
      const blobUrl = URL.createObjectURL(blob)

      // Create an invisible anchor element
      const anchor = document.createElement("a")
      anchor.style.display = "none"
      anchor.href = blobUrl
      anchor.download = `${name}-certificate.png`

      // Append to body, trigger click, then remove
      document.body.appendChild(anchor)
      anchor.click()
      document.body.removeChild(anchor)

      // Revoke the object URL to free up memory
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
      // Try to fetch and share the image
      try {
        const response = await fetch(functionUrl)
        const blob = await response.blob()
        const fileName = `${name.replace(/\s+/g, '_')}_Certificate.png`
        const file = new File([blob], fileName, { type: "image/png" })
        
        // Check if Web Share API with files is supported
        if (navigator.share && navigator.canShare) {
          const shareData = {
            title: shareTitle,
            text: shareText,
            files: [file]
          }
          
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
      
      // Fallback: Share URL
      if (navigator.share) {
        await navigator.share({
          title: shareTitle,
          text: shareText + `\n\n${certificateUrl}`
        })
        console.log("✅ Shared URL")
      } else {
        // Copy to clipboard
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
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 px-4 sm:py-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-40 h-20 sm:w-48 sm:h-24 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 overflow-hidden">
            <img src="/sveep-logo.png" alt="SVEEP Logo" className="w-full h-full object-cover" />
          </div>
          <p className="text-xs text-primary-foreground/70">Initiated by SVEEP Kottayam District</p>
        </div>
      </header>

      {/* Main Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-4xl">
          {/* Message */}
          <div className="text-center mb-8 sm:mb-10 px-2">
            <div className="mb-4 sm:mb-6 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-accent/20 rounded-full">
              <div className="text-3xl sm:text-4xl">✓</div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Congratulations!</h1>
            <p className="text-base sm:text-lg text-muted-foreground px-2">{name}, you have pledged to vote.</p>
          </div>

          {/* Certificate */}
          <div className="mb-10 max-w-3xl mx-auto">
            {certificateUrl ? (
              <div className="w-full rounded-lg overflow-hidden border shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={certificateUrl} 
                  alt="Voting Pledge Certificate" 
                  className="w-full h-auto object-contain"
                />
              </div>
            ) : (
              <div className="aspect-[3/2] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border-2 border-dashed border-border flex items-center justify-center shadow-sm">
                <div className="text-center p-6">
                  <div className="text-4xl mb-3 animate-pulse">📜</div>
                  <p className="text-sm text-muted-foreground font-medium">Your Certificate</p>
                  <p className="text-xs text-muted-foreground mt-1">(Generating... please wait)</p>
                </div>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="space-y-3 mb-6 sm:mb-8 max-w-md mx-auto px-2">
            <Button
              onClick={handleDownload}
              disabled={isDownloading || !certificateUrl}
              className="w-full h-11 sm:h-12 text-sm sm:text-base font-semibold bg-accent hover:bg-accent/90"
              size="lg"
            >
              {isDownloading ? (
                <>
                  <span className="animate-spin mr-2">⏳</span> Generating...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-5 w-5" /> Download Certificate
                </>
              )}
            </Button>

            <Button
              onClick={handleShare}
              disabled={isSharing}
              variant="outline"
              className="w-full h-11 sm:h-12 text-sm sm:text-base font-semibold border-2 bg-transparent"
              size="lg"
            >
              {isSharing ? (
                <>
                  <span className="animate-spin mr-2">⏳</span> Sharing...
                </>
              ) : (
                <>
                  <Share2 className="mr-2 h-5 w-5" /> Share This
                </>
              )}
            </Button>
          </div>

          <div className="bg-secondary/30 rounded-lg p-3 sm:p-4 text-center mx-2">
            <p className="text-xs sm:text-sm font-medium text-foreground">
              Save this image and post it to your Instagram Story!
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-muted py-4 px-4 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">© 2025 SVEEP Kottayam District.</p>
      </footer>
    </div>
  )
}
