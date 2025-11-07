"use client"

import { useState } from "react"
import PledgeForm from "@/components/pledge-form"
import SuccessView from "@/components/success-view"

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [pledgerName, setPledgerName] = useState("")

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {!isSubmitted ? (
        <PledgeForm
          onSuccess={(name: string) => {
            setPledgerName(name)
            setIsSubmitted(true)
          }}
        />
      ) : (
        <SuccessView name={pledgerName} />
      )}
    </main>
  )
}
