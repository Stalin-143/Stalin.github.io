import type React from "react"
interface TerminalOutputProps {
  children: React.ReactNode
}

export default function TerminalOutput({ children }: TerminalOutputProps) {
  return <div className="ml-0 mb-2 whitespace-pre-wrap break-words">{children}</div>
}
