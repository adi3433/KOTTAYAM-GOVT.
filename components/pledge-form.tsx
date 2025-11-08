"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import { db } from "@/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const colleges = [
  "St. Thomas College, Kottayam",
  "Christava Sahitya Akademi College",
  "Union Christian College, Aluva",
  "Alphonsa College, Kottayam",
  "Kristu Jyoti College, Bangalore",
  "Other",
]

interface PledgeFormProps {
  onSuccess: (name: string, phone: string) => void
}

export default function PledgeForm({ onSuccess }: PledgeFormProps) {
  const [fullName, setFullName] = useState("")
  const [college, setCollege] = useState("")
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!fullName.trim()) newErrors.fullName = "Full name is required"
    if (!college) newErrors.college = "Please select your college"
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
        college,
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
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 px-4 sm:py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
              <div className="text-2xl font-bold">🇮🇳</div>
            </div>
          </div>
          <p className="text-xs text-primary-foreground/70">Initiative by Kottayam District Administration</p>
        </div>
      </header>

      {/* Form Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
              Your Vote, Your Voice.
            </h1>
            <p className="text-lg text-muted-foreground">
              Pledge today and be part of Kottayam's democratic journey. Join thousands of students making their voices heard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value)
                  if (errors.fullName) setErrors({ ...errors, fullName: "" })
                }}
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
            </div>

            {/* College */}
            <div className="space-y-2">
              <Label>Select Your College</Label>
              <Select
                value={college}
                onValueChange={(value) => {
                  setCollege(value)
                  if (errors.college) setErrors({ ...errors, college: "" })
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose your college" />
                </SelectTrigger>
                <SelectContent>
                  {colleges.map((col) => (
                    <SelectItem key={col} value={col}>
                      {col}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.college && <p className="text-sm text-destructive">{errors.college}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                  if (errors.phone) setErrors({ ...errors, phone: "" })
                }}
                placeholder="10-digit phone number"
                maxLength={10}
              />
              {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
            </div>

            {/* Submit */}
            <Button type="submit" disabled={isLoading} className="w-full h-12 text-lg font-semibold mt-6">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Pledging...
                </>
              ) : (
                "I Pledge to Vote"
              )}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-4 px-4 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">© 2025 Kottayam District Administration. Your vote matters.</p>
      </footer>
    </div>
  )
}
