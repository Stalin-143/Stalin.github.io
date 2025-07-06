import type { ReactNode } from "react"

interface CommandContext {
  setIsHackerMode?: (mode: boolean) => void
}

type CommandFunction = (args: string[], context: CommandContext) => ReactNode

export const commands: Record<string, CommandFunction> = {
  help: () => (
    <div className="text-green-400">
      <div className="text-blue-400 font-bold mb-2">Available Commands:</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <span className="text-yellow-400">help</span> - Show this help message
        </div>
        <div>
          <span className="text-yellow-400">whoami</span> - About me
        </div>
        <div>
          <span className="text-yellow-400">skills</span> - Technical skills
        </div>
        <div>
          <span className="text-yellow-400">projects</span> - My projects
        </div>
        <div>
          <span className="text-yellow-400">github</span> - GitHub profile & stats
        </div>
        <div>
          <span className="text-yellow-400">repos</span> - Browse GitHub repositories
        </div>
        <div>
          <span className="text-yellow-400">huggingface</span> - AI models on Hugging Face
        </div>
        <div>
          <span className="text-yellow-400">certs</span> - Certifications & achievements
        </div>
        <div>
          <span className="text-yellow-400">contact</span> - Get in touch
        </div>
        <div>
          <span className="text-yellow-400">clear</span> - Clear terminal
        </div>
        <div>
          <span className="text-yellow-400">exit</span> - Exit terminal
        </div>
      </div>
      <div className="mt-4 text-gray-400">
        <div>💡 Tips:</div>
        <div>• Use Tab for auto-completion</div>
        <div>• Use ↑/↓ arrows for command history</div>
        <div>• Try some easter eggs: 'hack', 'matrix', 'sudo rm -rf /'</div>
        <div>• Type 'repos' to explore all GitHub projects</div>
        <div>• Type 'huggingface' to see AI models</div>
      </div>
    </div>
  ),

  whoami: () => (
    <div className="text-green-400">
      <div className="text-blue-400 font-bold mb-2">$ whoami</div>
      <div className="mb-4">
        <div className="text-yellow-400 text-lg">👨‍💻 Stalin S - AI & Data Science Enthusiast | Ethical Hacker</div>
      </div>
      <div className="space-y-2">
        <div>🎯 Passionate about AI, Data Science, and Cybersecurity</div>
        <div>🔍 Leveraging data to drive meaningful insights and innovations</div>
        <div>💻 Hands-on experience with Kali Linux and ethical hacking tools</div>
        <div>🌍 Avid traveler drawing inspiration from diverse cultures</div>
        <div>🎓 B.Tech Student in AI & Data Science at St.Joseph's Institute Of Technology</div>
        <div>📍 Based in Chennai, Tamil Nadu, India</div>
        <div>🎂 Age: 18 (Born March 28, 2006)</div>
      </div>
      <div className="mt-4 text-gray-400">
        <div>"Empowered by curiosity and a thirst for learning, bridging technology with meaningful solutions."</div>
      </div>
    </div>
  ),

  skills: () => (
    <div className="text-green-400">
      <div className="text-blue-400 font-bold mb-2">$ cat /proc/skills</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="text-yellow-400 font-bold mb-2">🤖 AI & Data Science</div>
          <div className="space-y-1 text-sm">
            <div>
              • Machine Learning <span className="text-blue-400">[90%]</span>
            </div>
            <div>• Data Analytics & Visualization</div>
            <div>• AI Technologies & Applications</div>
            <div>• Data-driven Decision Making</div>
            <div>• Intelligent Systems Design</div>
            <div>• Statistical Analysis</div>
          </div>
        </div>
        <div>
          <div className="text-yellow-400 font-bold mb-2">🔐 Cybersecurity & Ethical Hacking</div>
          <div className="space-y-1 text-sm">
            <div>
              • Ethical Hacking <span className="text-blue-400">[90%]</span>
            </div>
            <div>• Penetration Testing</div>
            <div>• Vulnerability Assessment</div>
            <div>• Network Security Analysis</div>
            <div>• Security Audits</div>
            <div>• Kali Linux Expertise</div>
          </div>
        </div>
        <div>
          <div className="text-yellow-400 font-bold mb-2">💻 Programming Languages</div>
          <div className="space-y-1 text-sm">
            <div>
              • Python <span className="text-blue-400">[90%]</span>
            </div>
            <div>
              • Java <span className="text-blue-400">[85%]</span>
            </div>
            <div>
              • HTML <span className="text-blue-400">[80%]</span>
            </div>
            <div>
              • JavaScript <span className="text-blue-400">[75%]</span>
            </div>
            <div>
              • C/C++ <span className="text-blue-400">[50%]</span>
            </div>
            <div>
              • CSS <span className="text-blue-400">[50%]</span>
            </div>
          </div>
        </div>
        <div>
          <div className="text-yellow-400 font-bold mb-2">🛠️ Tools & Technologies</div>
          <div className="space-y-1 text-sm">
            <div>
              • Bash Scripting <span className="text-blue-400">[90%]</span>
            </div>
            <div>• Kali Linux</div>
            <div>
              • TOR <span className="text-blue-400">[80%]</span>
            </div>
            <div>• Vulnerability Scanning Tools</div>
            <div>• Network Security Tools</div>
            <div>• Data Analysis Tools</div>
          </div>
        </div>
      </div>
    </div>
  ),

  projects: (args) => {
    if (args.length === 0) {
      return (
        <div className="text-green-400">
          <div className="text-blue-400 font-bold mb-2">$ ls -la ~/projects/</div>
          <div className="space-y-3">
            <div className="border-l-2 border-orange-400 pl-4">
              <div className="text-orange-400 font-bold">🤖 AI Eye Disease Detection [FEATURED]</div>
              <div className="text-sm text-gray-300">
                Advanced AI model for detecting eye diseases using deep learning
              </div>
              <div className="text-xs text-gray-400">Tech: Python, TensorFlow, Computer Vision, AI</div>
              <div className="text-xs text-blue-400">🤗 Available on Hugging Face</div>
            </div>
            <div className="border-l-2 border-yellow-400 pl-4">
              <div className="text-yellow-400 font-bold">🔐 Password Strength Checker</div>
              <div className="text-sm text-gray-300">Advanced password security analysis tool</div>
              <div className="text-xs text-gray-400">Tech: Python, Security Algorithms</div>
            </div>
            <div className="border-l-2 border-yellow-400 pl-4">
              <div className="text-yellow-400 font-bold">🔍 Vulnerability Scanning Tool</div>
              <div className="text-sm text-gray-300">Automated vulnerability detection and assessment</div>
              <div className="text-xs text-gray-400">Tech: Python, Network Security</div>
            </div>
            <div className="border-l-2 border-yellow-400 pl-4">
              <div className="text-yellow-400 font-bold">🌐 Nex Tor IP Changer v1.0</div>
              <div className="text-sm text-gray-300">Advanced IP anonymization tool</div>
              <div className="text-xs text-gray-400">Tech: Python, TOR Network</div>
            </div>
            <div className="border-l-2 border-yellow-400 pl-4">
              <div className="text-yellow-400 font-bold">🔧 MAC Address Changer</div>
              <div className="text-sm text-gray-300">Network interface MAC address manipulation tool</div>
              <div className="text-xs text-gray-400">Tech: Python, Network Programming</div>
            </div>
            <div className="border-l-2 border-yellow-400 pl-4">
              <div className="text-yellow-400 font-bold">🛡️ Simple Python Firewall Using Scapy</div>
              <div className="text-sm text-gray-300">Custom firewall implementation for network protection</div>
              <div className="text-xs text-gray-400">Tech: Python, Scapy, Network Security</div>
            </div>
            <div className="border-l-2 border-yellow-400 pl-4">
              <div className="text-yellow-400 font-bold">🚗 Driver's Sleep Alarm System</div>
              <div className="text-sm text-gray-300">AI-powered drowsiness detection system</div>
              <div className="text-xs text-gray-400">Tech: Python, Computer Vision, AI</div>
            </div>
          </div>
          <div className="mt-4 text-gray-400">
            Use 'projects &lt;name&gt;' for details, 'repos' for GitHub, or 'huggingface' for AI models
          </div>
        </div>
      )
    } else {
      const projectName = args.join(" ").toLowerCase()
      const projects: Record<string, ReactNode> = {
        "ai eye": (
          <div className="text-green-400">
            <div className="text-orange-400 font-bold text-lg mb-2">🤖 AI Eye Disease Detection</div>
            <div className="space-y-2">
              <div>
                <span className="text-blue-400">Description:</span> Advanced AI model for detecting eye diseases using
                deep learning and computer vision
              </div>
              <div>
                <span className="text-blue-400">Features:</span>
              </div>
              <div className="ml-4 space-y-1">
                <div>• Deep learning-based disease detection</div>
                <div>• Computer vision for medical imaging</div>
                <div>• High accuracy diagnostic capabilities</div>
                <div>• Real-time analysis and results</div>
              </div>
              <div>
                <span className="text-blue-400">Tech Stack:</span> Python, TensorFlow, Computer Vision, AI
              </div>
              <div>
                <span className="text-blue-400">Status:</span> <span className="text-green-500">Production Ready</span>
              </div>
              <div>
                <span className="text-blue-400">Hugging Face:</span>{" "}
                <span className="text-orange-400">https://huggingface.co/5t4l1n/ai-eye-disease-detection</span>
              </div>
            </div>
          </div>
        ),
        password: (
          <div className="text-green-400">
            <div className="text-yellow-400 font-bold text-lg mb-2">🔐 Password Strength Checker</div>
            <div className="space-y-2">
              <div>
                <span className="text-blue-400">Description:</span> Advanced tool for analyzing password security and
                strength
              </div>
              <div>
                <span className="text-blue-400">Features:</span>
              </div>
              <div className="ml-4 space-y-1">
                <div>• Real-time password strength analysis</div>
                <div>• Dictionary attack simulation</div>
                <div>• Entropy calculation</div>
                <div>• Security recommendations</div>
              </div>
              <div>
                <span className="text-blue-400">Tech Stack:</span> Python, Security Algorithms
              </div>
              <div>
                <span className="text-blue-400">Status:</span> <span className="text-green-500">Completed</span>
              </div>
            </div>
          </div>
        ),
        vulnerability: (
          <div className="text-green-400">
            <div className="text-yellow-400 font-bold text-lg mb-2">🔍 Vulnerability Scanning Tool</div>
            <div className="space-y-2">
              <div>
                <span className="text-blue-400">Description:</span> Comprehensive vulnerability detection and assessment
                framework
              </div>
              <div>
                <span className="text-blue-400">Capabilities:</span>
              </div>
              <div className="ml-4 space-y-1">
                <div>• Port scanning and service detection</div>
                <div>• Web application vulnerability testing</div>
                <div>• Network security assessment</div>
                <div>• Automated reporting</div>
              </div>
              <div>
                <span className="text-blue-400">Tech Stack:</span> Python, Network Security, Nmap
              </div>
              <div>
                <span className="text-blue-400">Status:</span> <span className="text-green-500">Production Ready</span>
              </div>
            </div>
          </div>
        ),
        firewall: (
          <div className="text-green-400">
            <div className="text-yellow-400 font-bold text-lg mb-2">🛡️ Simple Python Firewall Using Scapy</div>
            <div className="space-y-2">
              <div>
                <span className="text-blue-400">Description:</span> Custom firewall implementation for network traffic
                filtering
              </div>
              <div>
                <span className="text-blue-400">Features:</span>
              </div>
              <div className="ml-4 space-y-1">
                <div>• Packet filtering and analysis</div>
                <div>• Custom rule configuration</div>
                <div>• Real-time traffic monitoring</div>
                <div>• Intrusion detection capabilities</div>
              </div>
              <div>
                <span className="text-blue-400">Tech Stack:</span> Python, Scapy, Network Programming
              </div>
              <div>
                <span className="text-blue-400">Status:</span> <span className="text-green-500">Completed</span>
              </div>
            </div>
          </div>
        ),
      }

      return (
        projects[projectName] || (
          <div className="text-red-400">
            Project '{args.join(" ")}' not found. Use 'projects' to see all available projects.
          </div>
        )
      )
    }
  },

  huggingface: () => (
    <div className="text-green-400">
      <div className="text-blue-400 font-bold mb-2">$ curl -s https://huggingface.co/5t4l1n</div>
      <div className="space-y-3">
        <div className="border border-orange-500 p-4 rounded">
          <div className="flex items-center space-x-3 mb-3">
            <div className="text-orange-400 text-2xl">🤗</div>
            <div>
              <div className="text-orange-400 font-bold text-lg">5t4l1n on Hugging Face</div>
              <div className="text-gray-300 text-sm">AI Models & Machine Learning Projects</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="border border-gray-600 p-3 rounded">
              <div className="text-yellow-400 font-bold">🤖 AI Eye Disease Detection</div>
              <div className="text-sm text-gray-300 mt-1">
                Advanced deep learning model for detecting various eye diseases from medical images
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs">Computer Vision</span>
                <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded text-xs">Medical AI</span>
                <span className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded text-xs">TensorFlow</span>
                <span className="px-2 py-1 bg-red-600/20 text-red-400 rounded text-xs">Healthcare</span>
              </div>
              <div className="mt-2 text-xs text-gray-400">
                🔗 https://huggingface.co/5t4l1n/ai-eye-disease-detection
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-blue-400 rounded">
            <div className="text-blue-400 font-bold mb-2">🚀 Model Capabilities:</div>
            <div className="space-y-1 text-sm">
              <div>• Multi-class eye disease classification</div>
              <div>• High accuracy diagnostic predictions</div>
              <div>• Real-time image analysis</div>
              <div>• Medical-grade precision</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-gray-400">
        Visit:{" "}
        <a
          href="https://huggingface.co/5t4l1n"
          className="text-orange-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://huggingface.co/5t4l1n
        </a>{" "}
        to explore AI models
      </div>
    </div>
  ),

  repos: () => (
    <div className="text-green-400">
      <div className="text-blue-400 font-bold mb-2">$ git clone https://github.com/Stalin-143</div>
      <div className="space-y-3">
        <div className="text-yellow-400 font-bold">📂 All GitHub Repositories (22+ total):</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-600 p-3 rounded">
            <div className="text-green-400 font-bold">🔐 Security Tools</div>
            <div className="text-sm text-gray-300 mt-1 space-y-1">
              <div>• Password Strength Checker</div>
              <div>• Vulnerability Scanner Pro</div>
              <div>• MAC Address Changer</div>
              <div>• Python Firewall (Scapy)</div>
              <div>• Nex Tor IP Changer</div>
              <div>• Web Vulnerability Scanner</div>
              <div>• Network Port Scanner</div>
              <div>• SQL Injection Tester</div>
            </div>
          </div>

          <div className="border border-gray-600 p-3 rounded">
            <div className="text-blue-400 font-bold">🤖 AI & Data Science</div>
            <div className="text-sm text-gray-300 mt-1 space-y-1">
              <div>• AI Eye Disease Detection</div>
              <div>• Driver Sleep Alarm System</div>
              <div>• Phishing Email Detector</div>
              <div>• Machine Learning Projects</div>
              <div>• Data Analysis Tools</div>
              <div>• Computer Vision Applications</div>
            </div>
          </div>

          <div className="border border-gray-600 p-3 rounded">
            <div className="text-purple-400 font-bold">🌐 Web Development</div>
            <div className="text-sm text-gray-300 mt-1 space-y-1">
              <div>• Portfolio Websites</div>
              <div>• Web Applications</div>
              <div>• JavaScript Projects</div>
              <div>• Frontend Tools</div>
              <div>• API Development</div>
            </div>
          </div>

          <div className="border border-gray-600 p-3 rounded">
            <div className="text-yellow-400 font-bold">🛠️ Utilities & Scripts</div>
            <div className="text-sm text-gray-300 mt-1 space-y-1">
              <div>• Keylogger Detection Tool</div>
              <div>• Automation Scripts</div>
              <div>• System Tools</div>
              <div>• Network Utilities</div>
              <div>• Development Helpers</div>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 border border-blue-400 rounded">
          <div className="text-blue-400 font-bold mb-2">🚀 Repository Stats:</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-green-400 font-bold">22+</div>
              <div className="text-gray-400">Total Repos</div>
            </div>
            <div>
              <div className="text-blue-400 font-bold">14</div>
              <div className="text-gray-400">Followers</div>
            </div>
            <div>
              <div className="text-purple-400 font-bold">9</div>
              <div className="text-gray-400">Following</div>
            </div>
            <div>
              <div className="text-yellow-400 font-bold">2</div>
              <div className="text-gray-400">Stars</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-gray-400">
        Visit:{" "}
        <a
          href="https://github.com/Stalin-143"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/Stalin-143
        </a>{" "}
        to explore all repositories
      </div>
    </div>
  ),

  github: () => (
    <div className="text-green-400">
      <div className="text-blue-400 font-bold mb-2">$ curl -s https://api.github.com/users/Stalin-143</div>
      <div className="space-y-3">
        <div className="border border-gray-600 p-4 rounded">
          <div className="flex items-center space-x-3 mb-3">
            <div className="text-yellow-400 text-2xl">🐙</div>
            <div>
              <div className="text-yellow-400 font-bold text-lg">Stalin-143</div>
              <div className="text-gray-300 text-sm">Ethical Hacker | Web Penetration Tester | AI Enthusiast</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="text-blue-400 font-bold text-xl">22+</div>
              <div className="text-gray-400 text-sm">Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-green-400 font-bold text-xl">14</div>
              <div className="text-gray-400 text-sm">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-purple-400 font-bold text-xl">9</div>
              <div className="text-gray-400 text-sm">Following</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 font-bold text-xl">2</div>
              <div className="text-gray-400 text-sm">Stars</div>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div>
              📍 <span className="text-gray-300">Remote</span>
            </div>
            <div>
              🏢 <span className="text-gray-300">Nexulen</span>
            </div>
            <div>
              🌐 <span className="text-blue-400">Data Scientist | Web Developer | Tech Innovator</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-yellow-400 font-bold">🎯 Current Focus:</div>
          <div className="ml-4 space-y-1 text-sm">
            <div>🤝 Looking to collaborate on Hacking Based Projects</div>
            <div>🆘 Seeking help with AI & Ethical Hacking</div>
            <div>🎓 Currently learning Hacking with AI</div>
            <div>💬 Ask me about AI & Data Science, Ethical Hacking</div>
            <div>⚡ Fun fact: Travel Enthusiast 🌍</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-yellow-400 font-bold">🏆 GitHub Achievements:</div>
          <div className="flex space-x-2">
            <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Quickdraw</span>
            <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs">YOLO</span>
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Pull Shark</span>
            <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">Galaxy Brain</span>
          </div>
        </div>

        <div className="mt-4 p-3 border border-blue-400 rounded">
          <div className="text-blue-400 font-bold mb-2">🔗 Connect with me:</div>
          <div className="space-y-1 text-sm">
            <div>• 💬 Discord: Available on profile</div>
            <div>• 📷 Instagram: @stali.nprofile</div>
            <div>• 🌐 Website: stalin-143.github.io</div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-gray-400">
        Visit:{" "}
        <a
          href="https://github.com/Stalin-143"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/Stalin-143
        </a>
      </div>
    </div>
  ),

  certs: () => (
    <div className="text-green-400">
      <div className="text-blue-400 font-bold mb-2">$ cat /etc/achievements</div>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-yellow-400 font-bold">📜 Professional Certifications</div>
          <div className="space-y-2">
            <div className="border border-green-400 p-3 rounded">
              <div className="text-green-400 font-bold">🔐 Certified AppSec Practitioner v2 (CAP)</div>
              <div className="text-sm text-gray-300">Issued by: The SecOps Group</div>
              <div className="text-xs text-gray-400">Application Security & Secure Development</div>
            </div>
            <div className="border border-blue-400 p-3 rounded">
              <div className="text-blue-400 font-bold">🕵️ Ethical Hacker</div>
              <div className="text-sm text-gray-300">Issued by: Cisco</div>
              <div className="text-xs text-gray-400">Ethical Hacking & Penetration Testing</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-yellow-400 font-bold">🎓 Education</div>
          <div className="border border-yellow-400 p-3 rounded">
            <div className="text-yellow-400 font-bold">Bachelor of Technology - AI & Data Science</div>
            <div className="text-sm text-gray-300">St.Joseph's Institute Of Technology, Chennai</div>
            <div className="text-xs text-gray-400">2023 - 2027 (Currently Pursuing)</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-yellow-400 font-bold">💼 Professional Experience</div>
          <div className="space-y-2">
            <div className="border border-red-400 p-3 rounded">
              <div className="text-red-400 font-bold">Cybersecurity Intern - The Red Users</div>
              <div className="text-sm text-gray-300">Oct-Nov 2024</div>
              <div class="text-xs text-gray-400">Penetration Testing, Vulnerability Assessment</div>
            </div>
            <div className="border border-purple-400 p-3 rounded">
              <div className="text-purple-400 font-bold">Cybersecurity Intern - Codtech IT Solutions</div>
              <div className="text-sm text-gray-300">Aug-Sep 2024</div>
              <div className="text-xs text-gray-400">Ethical Hacking, Security Audits</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  contact: () => (
    <div className="text-green-400">
      <div className="text-blue-400 font-bold mb-2">$ cat /dev/contact</div>
      <div className="space-y-3">
        <div className="text-yellow-400 font-bold">📧 Get In Touch with Stalin S</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span>📧</span>
            <a href="mailto:stalin78830@gmail.com" className="text-blue-400 hover:underline">
              stalin78830@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span>📱</span>
            <a href="tel:+919655293238" className="text-blue-400 hover:underline">
              +91 9655293238
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span>📍</span>
            <span className="text-gray-300">Chennai, Tamil Nadu, India</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>🎂</span>
            <span className="text-gray-300">March 28, 2006 (Age: 18)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>🎓</span>
            <span className="text-gray-300">St.Joseph's Institute Of Technology</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>🐙</span>
            <a
              href="https://github.com/Stalin-143"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub: Stalin-143
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span>🤗</span>
            <a
              href="https://huggingface.co/5t4l1n"
              className="text-orange-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hugging Face: 5t4l1n
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 border border-gray-600 rounded">
        <div className="text-gray-400 text-sm">
          🔐 Available for cybersecurity consulting, ethical hacking services, and AI/Data Science projects.
          <br />🌍 Open to travel and remote opportunities worldwide.
          <br />💡 Passionate about bridging technology with meaningful solutions.
        </div>
      </div>
      <div className="mt-4 text-yellow-400">
        <div className="font-bold">Services Offered:</div>
        <div className="text-sm text-gray-300 mt-1 space-y-1">
          <div>• Penetration Testing & Vulnerability Assessment</div>
          <div>• Security Audits & Risk Analysis</div>
          <div>• AI & Data Science Consulting</div>
          <div>• Custom Security Tool Development</div>
        </div>
      </div>
    </div>
  ),

  clear: () => {
    // This will be handled specially in the terminal component
    return null
  },

  exit: () => (
    <div className="text-green-400">
      <div className="text-yellow-400 mb-2">Logging out...</div>
      <div className="text-gray-400">
        Thanks for visiting my terminal portfolio! 👋
        <br />
        Connection to arch-portfolio closed.
      </div>
      <div className="mt-4 text-blue-400">Refresh the page to start a new session.</div>
    </div>
  ),

  neofetch: () => (
    <div className="text-green-400">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="text-blue-400 text-xs font-mono">
          <pre>{`                   -\`
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
 .\`                                 \`/`}</pre>
        </div>
        <div className="space-y-1 text-sm">
          <div>
            <span className="text-blue-400">User:</span> Stalin S
          </div>
          <div>
            <span className="text-blue-400">OS:</span> Arch Linux x86_64
          </div>
          <div>
            <span className="text-blue-400">Host:</span> AI & Data Science Terminal
          </div>
          <div>
            <span className="text-blue-400">Kernel:</span> 6.6.8-arch1-1
          </div>
          <div>
            <span className="text-blue-400">Age:</span> 18 years
          </div>
          <div>
            <span className="text-blue-400">Location:</span> Chennai, India
          </div>
          <div>
            <span className="text-blue-400">Shell:</span> bash 5.2.15
          </div>
          <div>
            <span className="text-blue-400">Terminal:</span> alacritty
          </div>
          <div>
            <span className="text-blue-400">Specialization:</span> AI, Data Science, Cybersecurity
          </div>
          <div>
            <span className="text-blue-400">Status:</span> Student & Ethical Hacker
          </div>
          <div>
            <span className="text-blue-400">Memory:</span> Infinite curiosity for learning
          </div>
          <div>
            <span className="text-blue-400">Uptime:</span> 24/7 exploring & innovating
          </div>
        </div>
      </div>
    </div>
  ),
}
