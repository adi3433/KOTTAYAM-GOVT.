"use client"

import { useState } from "react"
import PledgeForm from "@/components/pledge-form"
import SuccessView from "@/components/success-view"

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [pledgerName, setPledgerName] = useState("")
  const [pledgerPhone, setPledgerPhone] = useState("")

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {!isSubmitted ? (
        <PledgeForm
          onSuccess={(name: string, phone: string) => {
            setPledgerName(name)
            setPledgerPhone(phone)
            setIsSubmitted(true)
          }}
        />
      ) : (
        <SuccessView name={pledgerName} phone={pledgerPhone} />
      )}
    </main>
  )
}
  