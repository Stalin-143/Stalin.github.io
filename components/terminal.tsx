"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useTypewriter } from "@/hooks/use-typewriter"
import { commands } from "@/lib/commands"
import TerminalOutput from "@/components/terminal-output"

interface HistoryItem {
  command: string
  output: React.ReactNode
  timestamp: Date
}

export default function Terminal() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [showCursor, setShowCursor] = useState(true)
  const [isHackerMode, setIsHackerMode] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const welcomeText = useTypewriter(
    `╔══════════════════════════════════════════════════════════════╗
║          Welcome to Stalin's AI & Cybersecurity Terminal      ║
║                                                                ║
║  🤖 AI & Data Science Enthusiast | 🔐 Ethical Hacker         ║
║  🎓 B.Tech Student at St.Joseph's Institute Of Technology     ║
║  📍 Chennai, Tamil Nadu, India                                ║
║                                                                ║
║  Type 'help' to explore my portfolio and skills!              ║
╚══════════════════════════════════════════════════════════════╝`,
    { speed: 30 },
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    if (!trimmedCmd) return

    // Add to command history
    setCommandHistory((prev) => [...prev, cmd])
    setHistoryIndex(-1)

    // Easter eggs
    if (trimmedCmd === "sudo rm -rf /") {
      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: (
            <div className="text-red-500 animate-pulse">
              <div>rm: cannot remove '/': Permission denied</div>
              <div>Just kidding! Nice try though 😄</div>
              <div className="text-green-400 mt-2">Your system is safe... for now.</div>
            </div>
          ),
          timestamp: new Date(),
        },
      ])
      return
    }

    if (trimmedCmd === "hack" || trimmedCmd === "matrix") {
      setIsHackerMode(!isHackerMode)
      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: (
            <div className={isHackerMode ? "text-green-400" : "text-green-500"}>
              {isHackerMode ? "Exiting hacker mode..." : "Entering hacker mode... 🕶️"}
            </div>
          ),
          timestamp: new Date(),
        },
      ])
      return
    }

    // Process command
    const [baseCmd, ...args] = trimmedCmd.split(" ")
    const commandFunc = commands[baseCmd]

    if (commandFunc) {
      const output = commandFunc(args, { setIsHackerMode })
      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output,
          timestamp: new Date(),
        },
      ])
    } else {
      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: (
            <div className="text-red-400">
              bash: {baseCmd}: command not found
              <div className="text-gray-400 mt-1">Type 'help' to see available commands</div>
            </div>
          ),
          timestamp: new Date(),
        },
      ])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input)
      setInput("")
      setShowSuggestions(false)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setInput("")
        } else {
          setHistoryIndex(newIndex)
          setInput(commandHistory[newIndex])
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      const availableCommands = Object.keys(commands)
      const matches = availableCommands.filter((cmd) => cmd.startsWith(input.toLowerCase()))

      if (matches.length === 1) {
        setInput(matches[0])
        setShowSuggestions(false)
      } else if (matches.length > 1) {
        setSuggestions(matches)
        setShowSuggestions(true)
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    setShowSuggestions(false)
  }

  const prompt = "[stalin@arch-ai ~]$ "

  return (
    <div
      className={`min-h-screen p-4 font-mono text-sm transition-colors duration-500 ${
        isHackerMode ? "bg-black text-green-500" : "bg-gray-900 text-green-400"
      }`}
      onClick={() => inputRef.current?.focus()}
    >
      <div ref={terminalRef} className="max-w-full overflow-auto">
        {/* Welcome message */}
        <div className="mb-4 whitespace-pre-line">{welcomeText}</div>

        {/* Command history */}
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            <div className="flex">
              <span className="text-blue-400">{prompt}</span>
              <span>{item.command}</span>
            </div>
            <TerminalOutput>{item.output}</TerminalOutput>
          </div>
        ))}

        {/* Auto-completion suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="mb-2 text-gray-400">{suggestions.join("  ")}</div>
        )}

        {/* Current input line */}
        <div className="flex items-center">
          <span className="text-blue-400">{prompt}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-green-400 font-mono"
            autoComplete="off"
            spellCheck="false"
          />
          {showCursor && <span className="bg-green-400 text-black ml-1">█</span>}
        </div>
      </div>
    </div>
  )
}
