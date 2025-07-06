"use client"

import { useState } from "react"
import LandingPage from "@/components/landing-page"
import TerminalPortfolio from "@/components/terminal-portfolio"

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false)

  return (
    <main className="min-h-screen">
      {!showTerminal ? <LandingPage onTerminalClick={() => setShowTerminal(true)} /> : <TerminalPortfolio />}
    </main>
  )
}
