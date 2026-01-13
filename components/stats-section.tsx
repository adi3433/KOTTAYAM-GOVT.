"use client"

import { useState, useEffect, useRef } from "react"
import { Users, Vote, TrendingUp, Award } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { db } from "@/firebase"
import { collection, onSnapshot } from "firebase/firestore"

interface StatItemProps {
  icon: React.ReactNode
  value: number
  suffix?: string
  label: string
  color: string
  delay: number
}

function StatItem({ icon, value, suffix = "", label, color, delay }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const timeout = setTimeout(() => {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, delay)

    return () => clearTimeout(timeout)
  }, [isVisible, value, delay])

  const formatNumber = (num: number): string => {
    if (num >= 100000) {
      return (num / 100000).toFixed(1) + "L"
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toLocaleString("en-IN")
  }

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg sm:shadow-xl border-2 border-slate-100 dark:border-slate-700 hover:shadow-xl sm:hover:shadow-2xl active:scale-[0.98] sm:hover:scale-105 transition-all duration-300 group touch-manipulation ${
        isVisible ? "animate-scale-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background decoration */}
      <div
        className={`absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity ${color}`}
      />

      <div className="relative z-10">
        <div className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl mb-3 sm:mb-4 ${color} bg-opacity-20`}>
          {icon}
        </div>

        <div className="space-y-0.5 sm:space-y-1">
          <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tabular-nums">
            {formatNumber(displayValue)}
            <span className="text-lg sm:text-2xl text-slate-500 dark:text-slate-400">{suffix}</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
            {label}
          </p>
        </div>
      </div>

      {/* Animated bottom border */}
      <div
        className={`absolute bottom-0 left-0 h-1 ${color} transition-all duration-1000 ${
          isVisible ? "w-full" : "w-0"
        }`}
        style={{ transitionDelay: `${delay + 500}ms` }}
      />
    </div>
  )
}

export default function StatsSection() {
  const { t } = useLanguage()
  const [pledgeCount, setPledgeCount] = useState(0)

  // Listen to real-time pledge count from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "pledges"), (snapshot) => {
      setPledgeCount(snapshot.size)
    })

    return () => unsubscribe()
  }, [])

  const stats = [
    {
      icon: <Vote className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400" />,
      value: pledgeCount,
      label: t("stats.totalPledges"),
      color: "bg-blue-500",
      delay: 0,
    },
    {
      icon: <Users className="w-5 h-5 sm:w-7 sm:h-7 text-green-600 dark:text-green-400" />,
      value: 1247856,
      label: t("stats.registeredVoters"),
      color: "bg-green-500",
      delay: 150,
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-7 sm:h-7 text-orange-600 dark:text-orange-400" />,
      value: 78,
      suffix: "%",
      label: t("stats.youthParticipation"),
      color: "bg-orange-500",
      delay: 300,
    },
  ]

  return (
    <section className="py-10 sm:py-16 px-3 sm:px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-3 sm:mb-4">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-300">
              {t("stats.title")}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
