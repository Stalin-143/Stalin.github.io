"use client"

import { useState, useEffect } from "react"
import BootSequence from "@/components/boot-sequence"
import Terminal from "@/components/terminal"

export default function TerminalPortfolio() {
  const [isBooted, setIsBooted] = useState(false)
  const [showTerminal, setShowTerminal] = useState(false)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    // Animation entrance effect
    setTimeout(() => setIsAnimating(false), 500)

    // Skip boot sequence in development for faster testing
    const skipBoot = process.env.NODE_ENV === "development" && localStorage.getItem("skipBoot")
    if (skipBoot) {
      setIsBooted(true)
      setShowTerminal(true)
    }
  }, [])

  const handleBootComplete = () => {
    setIsBooted(true)
    setTimeout(() => setShowTerminal(true), 500)
  }

  return (
    <div
      className={`min-h-screen bg-black text-green-400 font-mono overflow-hidden transition-all duration-500 ${
        isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
      }`}
    >
      {!isBooted && <BootSequence onComplete={handleBootComplete} />}
      {showTerminal && <Terminal />}
    </div>
  )
}
