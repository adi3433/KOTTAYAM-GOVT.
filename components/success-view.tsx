"use client"

import { Button } from "@/components/ui/button"
import { Download, Share2 } from "lucide-react"
import { useState } from "react"

interface SuccessViewProps {
  name: string
}

export default function SuccessView({ name }: SuccessViewProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const [isSharing, setIsSharing] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    // Simulate certificate generation and download
    await new Promise((resolve) => setTimeout(resolve, 1200))
    // In a real app, this would generate and download a PDF/image
    alert(`Certificate for ${name} downloaded!`)
    setIsDownloading(false)
  }

  const handleShare = async () => {
    setIsSharing(true)
    const text = `I've pledged to vote in Kottayam! 🇮🇳 Join me at Kottayam Votes - Your Vote, Your Voice.`

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Kottayam Votes",
          text: text,
        })
      } catch (err) {
        // User cancelled share
      }
    } else {
      // Fallback - copy to clipboard
      await navigator.clipboard.writeText(text)
      alert("Share text copied to clipboard!")
    }
    setIsSharing(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 px-4 sm:py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
              <div className="text-2xl font-bold text-primary-foreground">🇮🇳</div>
            </div>
          </div>
          <p className="text-xs text-primary-foreground/70 text-center">
            Initiative by Kottayam District Administration
          </p>
        </div>
      </header>

      {/* Success Content */}
      <section className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-md">
          {/* Success Message */}
          <div className="text-center mb-10">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full">
              <div className="text-4xl">✓</div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 text-balance">Congratulations!</h1>
            <p className="text-lg text-muted-foreground text-balance">{name}, you have pledged to vote.</p>
          </div>

          {/* Certificate Preview */}
          <div className="mb-10">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border-2 border-dashed border-border flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center p-6">
                <div className="text-4xl mb-3">📜</div>
                <p className="text-sm text-muted-foreground font-medium">Your Certificate</p>
                <p className="text-xs text-muted-foreground mt-1">(Certificate will be generated and displayed here)</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mb-8">
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full h-12 text-base font-semibold bg-accent hover:bg-accent/90"
              size="lg"
            >
              {isDownloading ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Generating...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-5 w-5" />
                  Download Certificate
                </>
              )}
            </Button>

            <Button
              onClick={handleShare}
              disabled={isSharing}
              variant="outline"
              className="w-full h-12 text-base font-semibold border-2 bg-transparent"
              size="lg"
            >
              {isSharing ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Sharing...
                </>
              ) : (
                <>
                  <Share2 className="mr-2 h-5 w-5" />
                  Share This
                </>
              )}
            </Button>
          </div>

          {/* Instruction Text */}
          <div className="bg-secondary/30 rounded-lg p-4 text-center">
            <p className="text-sm text-foreground font-medium text-balance">
              Save this image and post it to your Instagram Story!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-4 px-4 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">© 2025 Kottayam District Administration. Your vote matters.</p>
      </footer>
    </div>
  )
}
