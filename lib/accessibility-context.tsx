"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface AccessibilityState {
  fontSize: "normal" | "large" | "xlarge"
  highContrast: boolean
  reducedMotion: boolean
  isPanelOpen: boolean
}

interface AccessibilityContextType extends AccessibilityState {
  setFontSize: (size: "normal" | "large" | "xlarge") => void
  toggleHighContrast: () => void
  toggleReducedMotion: () => void
  toggleAccessibilityPanel: () => void
  closeAccessibilityPanel: () => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AccessibilityState>({
    fontSize: "normal",
    highContrast: false,
    reducedMotion: false,
    isPanelOpen: false,
  })

  // Load preferences from localStorage
  useEffect(() => {
    const savedPrefs = localStorage.getItem("accessibility-prefs")
    if (savedPrefs) {
      try {
        const prefs = JSON.parse(savedPrefs)
        setState((prev) => ({ ...prev, ...prefs, isPanelOpen: false }))
      } catch (e) {
        console.error("Error loading accessibility preferences:", e)
      }
    }

    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mediaQuery.matches) {
      setState((prev) => ({ ...prev, reducedMotion: true }))
    }
  }, [])

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement

    // Font size
    root.classList.remove("font-size-normal", "font-size-large", "font-size-xlarge")
    root.classList.add(`font-size-${state.fontSize}`)

    // High contrast
    if (state.highContrast) {
      root.classList.add("high-contrast")
    } else {
      root.classList.remove("high-contrast")
    }

    // Reduced motion
    if (state.reducedMotion) {
      root.classList.add("reduced-motion")
    } else {
      root.classList.remove("reduced-motion")
    }

    // Save to localStorage (excluding isPanelOpen)
    const { isPanelOpen, ...prefsToSave } = state
    localStorage.setItem("accessibility-prefs", JSON.stringify(prefsToSave))
  }, [state])

  const setFontSize = (size: "normal" | "large" | "xlarge") => {
    setState((prev) => ({ ...prev, fontSize: size }))
  }

  const toggleHighContrast = () => {
    setState((prev) => ({ ...prev, highContrast: !prev.highContrast }))
  }

  const toggleReducedMotion = () => {
    setState((prev) => ({ ...prev, reducedMotion: !prev.reducedMotion }))
  }

  const toggleAccessibilityPanel = () => {
    setState((prev) => ({ ...prev, isPanelOpen: !prev.isPanelOpen }))
  }

  const closeAccessibilityPanel = () => {
    setState((prev) => ({ ...prev, isPanelOpen: false }))
  }

  return (
    <AccessibilityContext.Provider
      value={{
        ...state,
        setFontSize,
        toggleHighContrast,
        toggleReducedMotion,
        toggleAccessibilityPanel,
        closeAccessibilityPanel,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider")
  }
  return context
}
