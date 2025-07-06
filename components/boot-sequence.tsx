"use client"

import { useState, useEffect } from "react"
import { useTypewriter } from "@/hooks/use-typewriter"

interface BootSequenceProps {
  onComplete: () => void
}

const bootMessages = [
  "[ OK ] Started Load Kernel Modules",
  "[ OK ] Started Create System Users",
  "[ OK ] Started Update UTMP about System Runlevel Changes",
  "[ OK ] Started Network Manager",
  "[ OK ] Started OpenSSH Daemon",
  "[ OK ] Started Getty on tty1",
  "[ OK ] Reached target Multi-User System",
  "[ OK ] Reached target Graphical Interface",
  "",
  "Arch Linux 6.6.8-arch1-1 (tty1)",
  "",
  "stalin-ai-terminal login: stalin",
  "Password: ",
  "",
  "Last login: " + new Date().toLocaleString(),
  "Welcome to Stalin's AI & Cybersecurity Terminal",
  "[stalin@arch-ai ~]$ ",
]

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [currentLine, setCurrentLine] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [isComplete, setIsComplete] = useState(false)

  const displayText = useTypewriter(currentLine < bootMessages.length ? bootMessages[currentLine] : "", {
    speed: currentLine >= bootMessages.length - 3 ? 100 : 30,
    onComplete: () => {
      if (currentLine < bootMessages.length - 1) {
        setTimeout(() => setCurrentLine((prev) => prev + 1), 200)
      } else {
        setIsComplete(true)
        setTimeout(onComplete, 1000)
      }
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4 overflow-auto">
      <div className="max-w-4xl">
        {/* Boot logo */}
        <div className="mb-8 text-center">
          <pre className="text-blue-400 text-sm">
            {`                   -\`
                  .o+\`
                 \`ooo/
                \`+oooo:
               \`+oooooo:
               -+oooooo+:
             \`/:-:++oooo+:
            \`/++++/+++++++:
           \`/++++++++++++++:
          \`/+++ooooooooo+++/\`
         ./ooosssso++osssssso+\`
        .oossssso-\`\`\`\`/ossssss+\`
       -osssssso.      :ssssssso.
      :osssssss/        osssso+++.
     /ossssssss/        +ssssooo/-
   \`/ossssso+/:-        -:/+osssso+-
  \`+sso+:-\`                 \`.-/+oso:
 \`++:.                           \`-/+/
 .\`                                 \`/`}
          </pre>
          <div className="text-blue-400 text-xl font-bold mt-4">Arch Linux</div>
        </div>

        {/* Boot messages */}
        <div className="space-y-1">
          {bootMessages.slice(0, currentLine).map((message, index) => (
            <div key={index} className="text-green-400">
              {message}
            </div>
          ))}
          <div className="text-green-400">
            {displayText}
            {!isComplete && showCursor && <span className="bg-green-400 text-black">█</span>}
          </div>
        </div>
      </div>
    </div>
  )
}
