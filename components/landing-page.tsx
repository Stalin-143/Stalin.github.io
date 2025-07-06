"use client"

import { useState, useEffect, useRef } from "react"
import {
  Terminal,
  Github,
  Mail,
  Phone,
  MapPin,
  Code,
  Shield,
  Brain,
  ExternalLink,
  Database,
  Search,
  Eye,
  Cpu,
  Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface LandingPageProps {
  onTerminalClick: () => void
}

export default function LandingPage({ onTerminalClick }: LandingPageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [matrixChars, setMatrixChars] = useState<string[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particleCanvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    setIsVisible(true)

    // Generate matrix characters
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    setMatrixChars(chars.split(""))
  }, [])

  // 3D Matrix Rain Effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const columns = Math.floor(canvas.width / 20)
    const drops: number[] = Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#00ff41"
      ctx.font = "15px monospace"

      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)]
        ctx.fillText(text, i * 20, drops[i] * 20)

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)
    return () => clearInterval(interval)
  }, [matrixChars])

  // Advanced Particle System
  useEffect(() => {
    const canvas = particleCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
      color: string
      size: number
    }> = []

    const colors = ["#00ff41", "#00ffff", "#0080ff", "#8000ff", "#ff0080"]

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        life: 0,
        maxLife: 120 + Math.random() * 120,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 1 + Math.random() * 2,
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add new particles
      if (particles.length < 100 && Math.random() < 0.1) {
        particles.push(createParticle())
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life++

        const alpha = 1 - p.life / p.maxLife
        const size = p.size * alpha

        // Create glow effect
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 3)
        gradient.addColorStop(
          0,
          p.color +
            Math.floor(alpha * 255)
              .toString(16)
              .padStart(2, "0"),
        )
        gradient.addColorStop(1, p.color + "00")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2)
        ctx.fill()

        // Draw core
        ctx.fillStyle =
          p.color +
          Math.floor(alpha * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fill()

        if (p.life >= p.maxLife) {
          particles.splice(i, 1)
        }
      }

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  const skills = [
    // Programming Languages
    { name: "Python", level: 90, icon: Code, color: "from-yellow-400 to-yellow-600", category: "Programming" },
    { name: "Java", level: 85, icon: Code, color: "from-red-400 to-red-600", category: "Programming" },
    { name: "C", level: 75, icon: Code, color: "from-blue-400 to-blue-600", category: "Programming" },
    { name: "Assembly Basics", level: 60, icon: Cpu, color: "from-gray-400 to-gray-600", category: "Programming" },
    { name: "Bash Scripting", level: 90, icon: Terminal, color: "from-cyan-400 to-cyan-600", category: "Programming" },

    // Database & Systems
    { name: "MySQL", level: 80, icon: Database, color: "from-orange-400 to-orange-600", category: "Database" },

    // Cybersecurity & Ethical Hacking
    {
      name: "Penetration Testing",
      level: 90,
      icon: Shield,
      color: "from-green-400 to-green-600",
      category: "Security",
    },
    {
      name: "Vulnerability Assessment",
      level: 88,
      icon: Search,
      color: "from-purple-400 to-purple-600",
      category: "Security",
    },
    { name: "Reverse Engineering", level: 75, icon: Eye, color: "from-indigo-400 to-indigo-600", category: "Security" },
    { name: "DFIR", level: 80, icon: Lock, color: "from-red-400 to-pink-600", category: "Security" },
    { name: "Social Engineering", level: 85, icon: Brain, color: "from-pink-400 to-rose-600", category: "Security" },

    // AI & Data Science
    { name: "AI & Data Science", level: 90, icon: Brain, color: "from-purple-400 to-purple-600", category: "AI/ML" },
  ]

  const projects = [
    {
      title: "AI Eye Disease Detection",
      description: "Advanced AI model for detecting eye diseases using deep learning and computer vision techniques",
      tech: ["Python", "TensorFlow", "Computer Vision", "AI"],
      github: "https://github.com/Stalin-143/",
      huggingface: "https://huggingface.co/5t4l1n/ai-eye-disease-detection",
      featured: true,
      status: "ACTIVE",
    },
    {
      title: "ZeroxZerox Vulnerability Scanner",
      description:
        "Open-source vulnerability scanner detecting XSS, SQLi, SSRF, and IDOR vulnerabilities with endpoint discovery using Wayback Machine and web crawling",
      tech: ["Python", "Web Security", "OWASP", "Vulnerability Assessment"],
      github: "https://github.com/Stalin-143/",
      featured: true,
      status: "ACTIVE",
    },
    {
      title: "BlazeTrail - Facial Movement Recognition",
      description:
        "Advanced AI model for facial movement recognition and tracking using computer vision and machine learning algorithms",
      tech: ["Python", "OpenCV", "AI", "Computer Vision", "Machine Learning"],
      github: "https://github.com/Stalin-143/BlazeTrail",
      status: "ACTIVE",
    },
    {
      title: "AIBreachalert",
      description:
        "Intelligent breach detection and alert system using AI to identify and respond to security threats in real-time",
      tech: ["Python", "AI", "Security", "Threat Detection"],
      github: "https://github.com/Stalin-143/",
      status: "ACTIVE",
    },
    {
      title: "SecurechatETH",
      description:
        "Secure blockchain-based chat application built on Ethereum with end-to-end encryption and decentralized messaging",
      tech: ["Ethereum", "Blockchain", "Solidity", "Web3", "Cryptography"],
      github: "https://github.com/Stalin-143/",
      status: "BETA",
    },
    {
      title: "Advanced Keylogger",
      description:
        "Educational keylogger tool for cybersecurity research and penetration testing with stealth capabilities and data analysis",
      tech: ["Python", "System Security", "Penetration Testing", "Forensics"],
      github: "https://github.com/Stalin-143/",
      status: "STABLE",
    },
    {
      title: "Password Strength Checker",
      description:
        "Advanced password security analysis tool with real-time strength evaluation and security recommendations",
      tech: ["Python", "Security", "Cryptography"],
      github: "https://github.com/Stalin-143/",
      status: "STABLE",
    },
    {
      title: "Vulnerability Scanner Pro",
      description: "Comprehensive vulnerability detection and assessment framework for network security analysis",
      tech: ["Python", "Network Security", "Nmap"],
      github: "https://github.com/Stalin-143/",
      status: "ACTIVE",
    },
    {
      title: "Nex Tor IP Changer v1.0",
      description: "Advanced IP anonymization tool for privacy protection with TOR network integration",
      tech: ["Python", "TOR", "Networking"],
      github: "https://github.com/Stalin-143/",
      status: "STABLE",
    },
  ]

  const CyberLogo = () => (
    <div className="relative w-64 h-64 mx-auto mb-12 flex items-center justify-center">
      {/* Animated Background Rings */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute inset-8 border border-cyan-400/30 rounded-full"></div>
        <div className="absolute inset-16 border border-green-400/40 rounded-full animate-pulse"></div>
        <div className="absolute inset-24 border border-blue-400/20 rounded-full"></div>
      </div>

      {/* Central Hexagon */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-400/50 transform rotate-45 animate-float"></div>
        <div className="absolute inset-2 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-cyan-400/30 transform -rotate-45"></div>

        {/* Logo Text */}
        <span className="relative z-10 text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 animate-glow drop-shadow-2xl">
          S
        </span>
      </div>

      {/* Orbiting Data Points */}
      <div className="absolute inset-0 animate-orbit">
        <div className="absolute top-4 left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2 animate-pulse shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute bottom-4 left-1/2 w-3 h-3 bg-green-400 rounded-full transform -translate-x-1/2 animate-pulse shadow-lg shadow-green-400/50"></div>
        <div className="absolute left-4 top-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-y-1/2 animate-pulse shadow-lg shadow-blue-400/50"></div>
        <div className="absolute right-4 top-1/2 w-3 h-3 bg-purple-400 rounded-full transform -translate-y-1/2 animate-pulse shadow-lg shadow-purple-400/50"></div>
      </div>

      {/* Energy Lines */}
      <div className="absolute inset-0 animate-pulse">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
        <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-green-400/60 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent transform rotate-45 origin-center"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/60 to-transparent transform -rotate-45 origin-center"></div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Matrix Rain Background */}
      <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-20" />

      {/* Particle System */}
      <canvas ref={particleCanvasRef} className="fixed inset-0 z-0 opacity-40" />

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg) scale(1); }
          50% { transform: translateY(-15px) rotate(45deg) scale(1.05); }
        }
        
        @keyframes glow {
          0%, 100% { 
            text-shadow: 0 0 20px #00ff41, 0 0 30px #00ff41, 0 0 40px #00ff41;
            filter: brightness(1);
          }
          50% { 
            text-shadow: 0 0 30px #00ffff, 0 0 40px #00ffff, 0 0 50px #00ffff;
            filter: brightness(1.2);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-orbit { animation: orbit 15s linear infinite; }
        .animate-wave { animation: wave 2s ease-in-out infinite; }
      `}</style>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative">
          <div className="max-w-6xl mx-auto text-center">
            <div
              className={`transition-all duration-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            >
              {/* Cyber Logo */}
              <CyberLogo />

              {/* Main Title */}
              <div className="mb-12">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 animate-wave">
                  Stalin S
                </h1>
                <div className="text-2xl md:text-3xl text-green-300 mb-4 font-light">
                  Ethical Hacker • AI Enthusiast • Data Science Student
                </div>
                <div className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Passionate student exploring cybersecurity and artificial intelligence, building innovative solutions
                  while mastering cutting-edge technologies
                </div>
              </div>

              {/* Status Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center space-x-2 bg-gray-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-mono">ONLINE</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-400/30">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 text-sm">Chennai, India</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30">
                  <Code className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 text-sm">Available for Projects</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/25"
                  onClick={() => window.open("https://github.com/Stalin-143", "_blank")}
                >
                  <Github className="w-5 h-5 mr-2" />
                  Explore GitHub
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("mailto:stalin78830@gmail.com")}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black bg-transparent px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://huggingface.co/5t4l1n", "_blank")}
                >
                  <Brain className="w-5 h-5 mr-2" />
                  AI Models
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-4">
                Technical Expertise
              </h2>
              <p className="text-gray-400 text-lg">
                Growing expertise across programming, cybersecurity, and AI through hands-on learning
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-green-400/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="w-5 h-5 text-green-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 mb-2 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-2000 shadow-lg`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-400">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24 px-4 bg-gray-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-400 text-lg">Innovative solutions in cybersecurity and artificial intelligence</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`group bg-gray-900/40 backdrop-blur-sm border-2 transition-all duration-500 hover:scale-105 ${
                    project.featured
                      ? "border-orange-400/50 shadow-lg shadow-orange-400/10"
                      : "border-gray-700/50 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-400/10"
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      {project.featured && (
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                          FEATURED
                        </span>
                      )}
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          project.status === "ACTIVE"
                            ? "bg-green-500/20 text-green-400 border border-green-400/30"
                            : project.status === "BETA"
                              ? "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30"
                              : "bg-blue-500/20 text-blue-400 border border-blue-400/30"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs border border-gray-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-green-400/50 text-green-400 hover:bg-green-400 hover:text-black bg-transparent transition-all duration-300"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      {project.huggingface && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-orange-400/50 text-orange-400 hover:bg-orange-400 hover:text-black bg-transparent transition-all duration-300"
                          onClick={() => window.open(project.huggingface, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">
                Let's Connect
              </h2>
              <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
                Eager to collaborate and learn through real-world cybersecurity and AI projects. Let's build something
                amazing together while I continue my journey!
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <a
                  href="mailto:stalin78830@gmail.com"
                  className="group flex items-center space-x-4 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-3 bg-cyan-400/20 rounded-xl group-hover:bg-cyan-400/30 transition-colors">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-gray-400 text-sm">Email</div>
                    <div className="text-white font-semibold">stalin78830@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+919655293238"
                  className="group flex items-center space-x-4 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-3 bg-green-400/20 rounded-xl group-hover:bg-green-400/30 transition-colors">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-gray-400 text-sm">Phone</div>
                    <div className="text-white font-semibold">+91 9655293238</div>
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://github.com/Stalin-143", "_blank")}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-400/50 text-orange-400 hover:bg-orange-400 hover:text-white bg-transparent px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://huggingface.co/5t4l1n", "_blank")}
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Hugging Face
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Terminal Access Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={onTerminalClick}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 shadow-2xl hover:shadow-green-400/25 transition-all duration-300 hover:scale-110 group"
          size="lg"
        >
          <Terminal className="w-8 h-8 text-black group-hover:animate-pulse" />
        </Button>
      </div>
    </div>
  )
}
