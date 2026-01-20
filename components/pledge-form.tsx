"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { db } from "@/firebase"
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore"
import { useLanguage } from "@/lib/language-context"

interface PledgeFormProps {
  onSuccess: (name: string, phone: string) => void
}

export default function PledgeForm({ onSuccess }: PledgeFormProps) {
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { t } = useLanguage()

  // Validate Indian phone number (must start with 6, 7, 8, or 9)
  const isValidIndianPhone = (phoneNumber: string): boolean => {
    return /^[6-9][0-9]{9}$/.test(phoneNumber)
  }

  // Check if phone number already exists in database
  const checkDuplicatePhone = async (phoneNumber: string): Promise<boolean> => {
    try {
      const q = query(
        collection(db, "pledges"),
        where("phone", "==", phoneNumber)
      )
      const snapshot = await getDocs(q)
      return !snapshot.empty
    } catch (error) {
      console.error("Error checking duplicate:", error)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    // Validate name
    if (!fullName.trim()) {
      newErrors.fullName = t("form.errorFullName")
    }

    // Validate Indian phone number
    if (!phone || !isValidIndianPhone(phone)) {
      newErrors.phone = t("form.errorPhoneInvalid") || "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)

    try {
      // Check for duplicate phone number
      const isDuplicate = await checkDuplicatePhone(phone)
      if (isDuplicate) {
        setErrors({ phone: t("form.errorPhoneDuplicate") || "This phone number has already been used for a pledge" })
        setIsLoading(false)
        return
      }

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
      alert(t("common.error"))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-10 sm:py-12 md:py-16 px-3 sm:px-4">
      <div className="max-w-2xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-14 px-2 sm:px-4 animate-fade-in">
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-orange-100 to-green-100 dark:from-orange-900/30 dark:to-green-900/30 rounded-full border-2 border-blue-200 dark:border-blue-700">
            <p className="text-xs sm:text-sm font-bold text-blue-900 dark:text-blue-100">
              {t("hero.badge")}
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 dark:text-white mb-3 sm:mb-4 leading-tight">
            {t("hero.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600">
              {t("hero.titleHighlight")}
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 px-1 sm:px-2 max-w-xl mx-auto font-medium">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-2 border-blue-100 dark:border-slate-700 p-4 sm:p-6 md:p-10 animate-scale-in hover:shadow-3xl transition-all">
          <div className="mb-5 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-blue-100 dark:border-slate-700">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-white text-center">
              {t("form.title")}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center mt-1.5 sm:mt-2">
              {t("form.subtitle")}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-3 group">
              <Label htmlFor="fullName" className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                👤 {t("form.fullName")} <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value)
                  if (errors.fullName) setErrors({ ...errors, fullName: "" })
                }}
                placeholder={t("form.fullNamePlaceholder")}
                className="h-12 text-base border-2 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 rounded-lg transition-all hover:border-blue-300 dark:hover:border-slate-500 hover:shadow-md bg-white dark:bg-slate-900"
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                aria-invalid={errors.fullName ? "true" : "false"}
              />
              {errors.fullName && (
                <p id="fullName-error" className="text-sm text-red-600 dark:text-red-400 font-medium animate-fade-in" role="alert">
                  ⚠️ {errors.fullName}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-3 group">
              <Label htmlFor="phone" className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                📱 {t("form.phone")} <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                  if (errors.phone) setErrors({ ...errors, phone: "" })
                }}
                placeholder={t("form.phonePlaceholder")}
                maxLength={10}
                inputMode="numeric"
                className="h-12 text-base border-2 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 rounded-lg transition-all hover:border-blue-300 dark:hover:border-slate-500 hover:shadow-md bg-white dark:bg-slate-900"
                aria-describedby={errors.phone ? "phone-error" : undefined}
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone && (
                <p id="phone-error" className="text-sm text-red-600 dark:text-red-400 font-medium animate-fade-in" role="alert">
                  ⚠️ {errors.phone}
                </p>
              )}
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-lg">
              <p className="text-sm text-blue-900 dark:text-blue-100 font-medium">
                {t("form.securityNotice")}
              </p>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full min-h-[48px] sm:min-h-[56px] h-auto py-3 sm:py-4 px-4 text-sm sm:text-base md:text-lg font-bold mt-6 sm:mt-8 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 dark:from-blue-600 dark:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-900 shadow-lg hover:shadow-xl active:scale-[0.98] transition-all rounded-lg sm:rounded-xl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 touch-manipulation whitespace-normal text-center leading-snug text-white"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-5 w-5 sm:h-6 sm:w-6 animate-spin flex-shrink-0" />
                  <span>{t("form.processing")}</span>
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <span className="flex-shrink-0">✓</span>
                  <span>{t("form.submitButton")}</span>
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
