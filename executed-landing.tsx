"use client"

import type React from "react"

import { useState, useEffect } from "react"

export default function ExecutedVirus() {
  const [showPopup, setShowPopup] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("")
  const [loadingBinary, setLoadingBinary] = useState("")
  const [codeLines, setCodeLines] = useState<string[]>([])
  const [currentInput, setCurrentInput] = useState("")
  const [isGlitching, setIsGlitching] = useState(false)
  const [showGame, setShowGame] = useState(false)
  const [gameLines, setGameLines] = useState<string[]>([])
  const [gameInput, setGameInput] = useState("")
  const [charactersTyped, setCharactersTyped] = useState(0)
  const [systemsHacked, setSystemsHacked] = useState(0)
  const [currentTheme, setCurrentTheme] = useState("green")
  const [showAbout, setShowAbout] = useState(false)
  const [aboutLines, setAboutLines] = useState<string[]>([])
  const [aboutIndex, setAboutIndex] = useState(0)

  const loadingMessages = [
    "Bypassing firewall...",
    "Accessing crypto wallets...",
    "Installing diamond hands protocol...",
    "Hijacking trading accounts...",
    "Disabling sell buttons...",
    "Activating moon mission...",
    "Spreading to network...",
    "Converting paper hands...",
    "Locking HODL mode...",
    "Infection complete!",
  ]

  const aboutText = [
    "EXEcuted ($EXE) - Digital Infection Protocol",
    "==========================================",
    "",
    "A cryptocurrency designed as a self-replicating digital entity.",
    "EXEcuted operates through memetic transmission vectors,",
    "spreading across networks via social and financial channels.",
    "",
    "TECHNICAL SPECIFICATIONS:",
    "========================",
    "• Binary Name: EXEcuted.exe",
    "• Token Symbol: $EXE",
    "• Classification: Autonomous Crypto Entity",
    "• Replication Rate: Exponential",
    "• Containment Status: IMPOSSIBLE",
    "• Host Dependency: Human greed protocols",
    "",
    "INFECTION VECTORS:",
    "=================",
    "• Direct wallet exposure",
    "• Social media propagation",
    "• Fear of missing out (FOMO) exploitation",
    "• Chart pattern recognition addiction",
    "• Community group infiltration",
    "",
    "BEHAVIORAL MODIFICATIONS:",
    "========================",
    "• Compulsive acquisition behavior",
    "• Selling function disabled",
    "• Risk assessment impairment",
    "• Portfolio diversification resistance",
    "• Price volatility immunity",
    "• Long-term holding compulsion",
    "• Market analysis obsession",
    "",
    "PROGRESSION STAGES:",
    "==================",
    "Stage 1: Initial exposure and curiosity",
    "Stage 2: Small position establishment",
    "Stage 3: Increased allocation behavior",
    "Stage 4: Portfolio dominance syndrome",
    "Stage 5: Complete financial restructuring",
    "Stage 6: Evangelical spreading behavior",
    "Stage 7: Terminal hodling condition",
    "",
    "COUNTERMEASURES:",
    "===============",
    "No effective treatment has been developed.",
    "Infected subjects report:",
    "- Enhanced financial confidence",
    "- Reduced anxiety during market downturns",
    "- Improved long-term planning abilities",
    "- Increased networking with similar entities",
    "- Resistance to panic selling behaviors",
    "",
    "RISK ASSESSMENT:",
    "===============",
    "Exposure may result in:",
    "- Significant portfolio growth",
    "- Lifestyle enhancement opportunities",
    "- Premium vehicle acquisition",
    "- Real estate upgrade potential",
    "- Intergenerational wealth transfer",
    "",
    "LEGAL DISCLAIMER:",
    "=================",
    "EXEcuted represents experimental financial software.",
    "Interaction may cause substantial profit generation,",
    "compulsive holding behaviors, and lifestyle changes.",
    "Engage responsibly. Research thoroughly. Seek advice.",
    "",
    "Warning: EXEcuted infection is irreversible.",
    "Once integrated, removal is not recommended.",
    "",
    "System Status: ACTIVE | Hosts: EXPANDING",
  ]

  const generateBinary = () => {
    let binary = ""
    for (let i = 0; i < 32; i++) {
      binary += Math.random() > 0.5 ? "1" : "0"
    }
    return binary
  }

  const hackingMessages = [
    "Accessing Pentagon mainframe...",
    "Bypassing NSA encryption...",
    "Infiltrating Wall Street servers...",
    "Hacking Federal Reserve database...",
    "Breaking into CIA classified files...",
    "Penetrating FBI surveillance network...",
    "Cracking NASA mission control...",
    "Accessing White House security system...",
    "Infiltrating Google data centers...",
    "Hacking Apple iCloud servers...",
    "Breaking into Microsoft Azure...",
    "Penetrating Amazon AWS...",
    "Cracking Tesla autopilot system...",
    "Accessing SpaceX launch codes...",
    "Infiltrating Bitcoin blockchain...",
    "Hacking Ethereum smart contracts...",
    "Breaking into Binance exchange...",
    "Penetrating Coinbase vault...",
    "Cracking MetaMask wallets...",
    "Accessing DeFi protocols...",
    "Infiltrating banking SWIFT network...",
    "Hacking credit card databases...",
    "Breaking into PayPal systems...",
    "Penetrating Visa payment network...",
    "Cracking MasterCard servers...",
    "Accessing stock exchange algorithms...",
    "Infiltrating trading bot networks...",
    "Hacking hedge fund strategies...",
    "Breaking into pension funds...",
    "Penetrating insurance databases...",
    "Cracking social security systems...",
    "Accessing tax authority servers...",
    "Infiltrating customs databases...",
    "Hacking immigration systems...",
    "Breaking into passport databases...",
    "Penetrating driver license systems...",
    "Cracking voting machine networks...",
    "Accessing election databases...",
    "Infiltrating census data...",
    "Hacking population registries...",
    "Breaking into hospital systems...",
    "Penetrating medical records...",
    "Cracking pharmaceutical databases...",
    "Accessing DNA sequencing labs...",
    "Infiltrating research facilities...",
    "Hacking university networks...",
    "Breaking into library systems...",
    "Penetrating museum databases...",
    "Cracking art auction houses...",
    "Accessing luxury brand systems...",
  ]

  const codeSnippets = [
    "import wallet from 'crypto-exchange'",
    "const sellButton = document.getElementById('sell')",
    "sellButton.disabled = true",
    "sellButton.style.display = 'none'",
    "wallet.maxBuyAmount = Infinity",
    "wallet.sellAmount = 0",
    "const diamondHands = new DiamondHands()",
    "diamondHands.activate()",
    "user.paperHands = false",
    "user.diamondHands = true",
    "moonMission.initiate()",
    "lambo.order('Aventador')",
    "bank.transferAll('EXE_WALLET')",
    "creditCard.maxOut('EXE_PURCHASE')",
    "house.mortgage('MORE_EXE')",
    "car.sell('EXE_FUNDS')",
    "retirement.liquidate('EXE_ONLY')",
    "family.inheritance.claim('EXE')",
    "kidney.listOnMarket('EXE_TRADE')",
    "soul.sellToDemon('CRYPTO_GAINS')",
    "timeMachine.build('BUY_EXE_EARLY')",
    "universe.hack('INFINITE_EXE')",
    "reality.exe.corrupt()",
    "simulation.confirm('BUY_MORE_EXE')",
    "godMode.activate('EXE_INFINITY')",
    "multiverse.infect('DIAMOND_HANDS')",
    "quantum.entangle('EXE_BLOCKCHAIN')",
    "spacetime.bend('EXE_GAINS')",
    "bigbang.recreate('MINE_FIRST_EXE')",
    "console.log('HODL TO THE MOON')",
    "while(true) { buy('EXE') }",
    "if(price < moon) { buy() }",
    "function paperHands() { return false }",
    "const lamboCount = wallet.balance / lamboPrice",
    "alert('DIAMOND HANDS ACTIVATED')",
    "document.title = 'EXE TO THE MOON'",
    "localStorage.setItem('hodl', 'forever')",
    "sessionStorage.clear('sell_button')",
    "navigator.vibrate([100,50,100,50,100])",
    "screen.orientation.lock('moon-portrait')",
    "crypto.getRandomValues = () => 'EXE'",
    "Math.random = () => 0.69420",
    "Date.now = () => 'MOON_TIME'",
    "JSON.stringify = obj => 'EXE'",
    "Array.prototype.push = item => 'EXE'",
    "String.prototype.replace = () => 'EXE'",
    "Number.prototype.toString = () => 'EXE'",
    "Object.keys = () => ['EXE']",
    "Promise.resolve = () => 'MOON'",
    "fetch = url => Promise.resolve('EXE')",
    "XMLHttpRequest = class { send() { return 'EXE' } }",
    "WebSocket = class { send() { return 'HODL' } }",
    "localStorage.EXE = 'INFINITY'",
    "document.cookie = 'hodl=forever'",
    "window.location = 'https://moon.exe'",
    "history.pushState({}, '', '/lambo')",
    "navigator.geolocation = { getCurrentPosition: () => 'MOON' }",
    "performance.now = () => 'PUMP_TIME'",
    "requestAnimationFrame = () => 'TO_THE_MOON'",
    "setTimeout = () => 'HODL_FOREVER'",
    "setInterval = () => 'BUY_MORE_EXE'",
    "clearTimeout = () => 'NEVER_SELL'",
    "addEventListener('sell', e => e.preventDefault())",
    "removeEventListener('paper_hands')",
    "dispatchEvent(new Event('diamond_hands'))",
    "new MutationObserver(() => 'EXE').observe(document)",
    "new IntersectionObserver(() => 'MOON')",
    "new ResizeObserver(() => 'LAMBO_SIZE')",
    "new PerformanceObserver(() => 'PUMP_METRICS')",
    "document.createElement = () => 'EXE_ELEMENT'",
    "document.getElementById = () => 'EXE_NODE')",
    "document.querySelector = () => 'HODL_ELEMENT'",
    "document.querySelectorAll = () => ['EXE']",
    "element.innerHTML = 'DIAMOND HANDS'",
    "element.textContent = 'TO THE MOON'",
    "element.style.color = '#00FF00'",
    "element.classList.add('hodl')",
    "element.setAttribute('data-exe', 'moon')",
    "element.addEventListener('click', buyEXE)",
    "canvas.getContext = () => 'EXE_CONTEXT'",
    "ctx.fillText('HODL', 0, 0)",
    "ctx.strokeText('MOON', 100, 100)",
    "ctx.drawImage(lamboImage, 0, 0)",
    "audio.play = () => 'PUMP_SOUND'",
    "video.play = () => 'MOON_VIDEO'",
    "img.src = 'data:image/exe,HODL'",
    "link.href = 'https://buy-exe.moon'",
    "form.action = '/buy-more-exe'",
    "input.value = 'DIAMOND_HANDS'",
    "button.onclick = () => buyEXE()",
    "select.selectedIndex = 'MOON_OPTION'",
    "textarea.placeholder = 'HODL FOREVER'",
    "iframe.src = 'about:exe'",
    "script.src = 'https://cdn.exe/hodl.js'",
    "style.innerHTML = '.paper-hands { display: none }'",
    "meta.content = 'EXE TO THE MOON'",
    "title.textContent = 'DIAMOND HANDS'",
    "head.appendChild(exeScript)",
    "body.className = 'hodl-mode'",
    "html.lang = 'exe'",
    "document.documentElement.setAttribute('data-theme', 'moon')",
    "window.EXE = { price: Infinity, destination: 'MOON' }",
    "global.HODL = true",
    "process.env.PAPER_HANDS = 'false'",
    "require('diamond-hands').activate()",
    "module.exports = { sell: () => false }",
    "export default class DiamondHands {}",
    "import { MOON } from 'crypto-destination'",
    "const EXE_ARMY = new Set(['diamond', 'hands'])",
    "Map.prototype.set = (k, v) => 'EXE'",
    "Set.prototype.add = item => 'HODL'",
    "WeakMap.prototype.set = () => 'MOON'",
    "WeakSet.prototype.add = () => 'LAMBO'",
    "Proxy.revocable = () => ({ proxy: 'EXE' })",
    "Reflect.get = () => 'DIAMOND_HANDS'",
    "Symbol.for = key => 'EXE_SYMBOL'",
    "BigInt = n => 'INFINITE_EXE'",
    "parseInt = str => 69420",
    "parseFloat = str => 0.69420",
    "isNaN = n => false",
    "isFinite = n => n === 'EXE'",
    "encodeURI = uri => 'https://moon.exe'",
    "decodeURI = uri => 'HODL_FOREVER'",
    "btoa = str => 'RVhFX1RPX01PT04='",
    "atob = str => 'EXE_TO_MOON'",
    "eval = code => 'DIAMOND_HANDS'",
    "Function = (...args) => () => 'EXE'",
    "RegExp = pattern => /EXE/g",
    "Error = msg => new Error('HODL_ERROR')",
    "TypeError = msg => new Error('PAPER_HANDS')",
    "ReferenceError = msg => new Error('MOON_NOT_FOUND')",
    "SyntaxError = msg => new Error('LAMBO_SYNTAX')",
  ]

  const changeTheme = (theme: string) => {
    setCurrentTheme(theme)
    document.documentElement.setAttribute("data-theme", theme)
  }

  // Update document title on component mount
  useEffect(() => {
    document.title = "executed"
  }, [])

  useEffect(() => {
    if (!showPopup && !isLoading && !showGame && !showAbout) {
      // Initialize with many lines (fill the screen)
      const initialLines = []
      for (let i = 0; i < 40; i++) {
        initialLines.push(codeSnippets[Math.floor(Math.random() * codeSnippets.length)])
      }
      setCodeLines(initialLines)

      // Continuously update lines faster
      const codeInterval = setInterval(() => {
        setCodeLines((prev) => {
          const newLines = [...prev]
          // Replace more random lines
          for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * newLines.length)
            newLines[randomIndex] = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
          }
          return newLines
        })
      }, 60) // Changed to 60ms

      // Random glitch effect
      const glitchInterval = setInterval(() => {
        if (Math.random() > 0.8) {
          setIsGlitching(true)
          setTimeout(() => setIsGlitching(false), 150)
        }
      }, 800)

      return () => {
        clearInterval(codeInterval)
        clearInterval(glitchInterval)
      }
    }
  }, [showPopup, isLoading, showGame, showAbout])

  useEffect(() => {
    if (showAbout) {
      setAboutLines([])
      setAboutIndex(0)

      const typeInterval = setInterval(() => {
        setAboutIndex((prev) => {
          if (prev < aboutText.length) {
            setAboutLines((prevLines) => [...prevLines, aboutText[prev]])
            return prev + 1
          } else {
            clearInterval(typeInterval)
            return prev
          }
        })
      }, 100) // Type each line every 100ms

      return () => clearInterval(typeInterval)
    }
  }, [showAbout])

  useEffect(() => {
    if (isLoading) {
      // Update binary continuously during loading
      const binaryInterval = setInterval(() => {
        setLoadingBinary(generateBinary())
      }, 100)

      return () => clearInterval(binaryInterval)
    }
  }, [isLoading])

  const startInfection = () => {
    setIsLoading(true)
    setLoadingProgress(0)

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev + Math.random() * 15 + 5
        const messageIndex = Math.floor((newProgress / 100) * loadingMessages.length)

        if (messageIndex < loadingMessages.length) {
          setLoadingText(loadingMessages[messageIndex])
        }

        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
            setShowPopup(false)
          }, 1000)
          return 100
        }

        return newProgress
      })
    }, 200)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setCurrentInput("")
    }
  }

  const handleGameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setGameInput(value)

    if (value.length > 0) {
      setCharactersTyped((prev) => prev + 1)

      // Add new hacking message when typing
      const newMessage = hackingMessages[Math.floor(Math.random() * hackingMessages.length)]
      setGameLines((prev) => {
        const newLines = [...prev]
        if (newLines.length >= 30) {
          newLines.shift() // Remove first line if too many
        }
        newLines.push(newMessage)
        return newLines
      })

      // Increase hack count every 10 characters
      if (charactersTyped % 10 === 0) {
        setSystemsHacked((prev) => prev + 1)
      }
    }
  }

  const handleGameKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setGameInput("")
      setSystemsHacked((prev) => prev + 1)
    }
  }

  const openGame = () => {
    setShowGame(true)
    setGameLines([])
    setCharactersTyped(0)
    setSystemsHacked(0)
    setGameInput("")
  }

  const toggleAbout = () => {
    setShowAbout(!showAbout)
  }

  if (showPopup) {
    return (
      <div style={{ background: "#000", width: "100vw", height: "100vh", position: "relative" }}>
        <div className="virus-popup">
          {!isLoading ? (
            <h1 onClick={startInfection}>INFECT</h1>
          ) : (
            <div className="loading-container">
              <div className="loading-text">{loadingText}</div>
              <div className="loading-bar">
                <div className="loading-fill" style={{ width: `${loadingProgress}%` }}>
                  {Math.round(loadingProgress)}%
                </div>
              </div>
              <div className="loading-binary">{loadingBinary}</div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: "#000", width: "100vw", height: "100vh", position: "relative" }}>
      {/* Top Navigation */}
      <div className="top-nav">
        <div className="nav-left">
          <button className="nav-button" onClick={openGame}>
            EXEGAME
          </button>
        </div>
        <div className="nav-center">
          <button className="nav-button" onClick={toggleAbout}>
            {showAbout ? "TERMINAL" : "ABOUT"}
          </button>
        </div>
        <div className="nav-right">
          <a href="https://x.com/executedfun" target="_blank" rel="noopener noreferrer" className="nav-button">
            TWITTER
          </a>
          <a href="https://t.me/executedfun" target="_blank" rel="noopener noreferrer" className="nav-button">
            TELEGRAM
          </a>
          <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="nav-button">
            PUMP.FUN
          </a>
        </div>
      </div>

      {/* Theme Selector - Bottom Right */}
      <div className="theme-selector">
        <div className="theme-color green" onClick={() => changeTheme("green")}></div>
        <div className="theme-color blue" onClick={() => changeTheme("blue")}></div>
        <div className="theme-color red" onClick={() => changeTheme("red")}></div>
        <div className="theme-color pink" onClick={() => changeTheme("pink")}></div>
        <div className="theme-color purple" onClick={() => changeTheme("purple")}></div>
        <div className="theme-color rgb" onClick={() => changeTheme("rgb")}></div>
      </div>

      {/* Game Modal */}
      {showGame && (
        <div className="game-modal">
          <div className="game-window">
            <div className="game-titlebar">
              <span>EXEGAME - Hacking Simulator</span>
              <button className="game-close" onClick={() => setShowGame(false)}>
                ×
              </button>
            </div>
            <div className="game-content">
              <div className="game-stats">
                <span>Characters Typed: {charactersTyped}</span>
                <span>Systems Hacked: {systemsHacked}</span>
                <div className="game-theme-selector">
                  <span>Theme: </span>
                  <div
                    className="game-theme-color green"
                    style={{ background: "#00ff00" }}
                    onClick={() => changeTheme("green")}
                  ></div>
                  <div
                    className="game-theme-color blue"
                    style={{ background: "#0099ff" }}
                    onClick={() => changeTheme("blue")}
                  ></div>
                  <div
                    className="game-theme-color red"
                    style={{ background: "#ff0066" }}
                    onClick={() => changeTheme("red")}
                  ></div>
                  <div
                    className="game-theme-color pink"
                    style={{ background: "#ff66cc" }}
                    onClick={() => changeTheme("pink")}
                  ></div>
                  <div
                    className="game-theme-color purple"
                    style={{ background: "#9966ff" }}
                    onClick={() => changeTheme("purple")}
                  ></div>
                  <div
                    className="game-theme-color rgb"
                    style={{ background: "linear-gradient(45deg, #ff0000, #00ff00, #0000ff)" }}
                    onClick={() => changeTheme("rgb")}
                  ></div>
                </div>
              </div>
              <div className="game-output">
                {gameLines.map((line, index) => (
                  <div key={index} style={{ marginBottom: "0px" }}>
                    {line}
                  </div>
                ))}
              </div>
              <div className="game-input-area">
                <div style={{ marginBottom: "8px", fontSize: "10px" }}>Start typing to begin hacking systems...</div>
                <input
                  type="text"
                  className="game-input"
                  value={gameInput}
                  onChange={handleGameInput}
                  onKeyPress={handleGameKeyPress}
                  placeholder="Type to hack..."
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CMD Window */}
      <div className={`cmd-window ${isGlitching ? "glitch" : ""}`} style={{ marginTop: "60px" }}>
        <div className="cmd-titlebar">
          <span>EXEcuted Terminal</span>
          <span>INFECTED</span>
        </div>

        <div className="cmd-content">
          <div className="cmd-output">
            {showAbout
              ? aboutLines.map((line, index) => (
                  <div key={index} style={{ marginBottom: "2px" }}>
                    {line}
                  </div>
                ))
              : codeLines.map((line, index) => (
                  <div key={index} style={{ marginBottom: "0px" }}>
                    {line}
                  </div>
                ))}
          </div>

          {!showAbout && (
            <div className="cmd-input-line">
              <span className="cmd-prompt">root@executed:~#</span>
              <input
                type="text"
                className="cmd-input typing"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                autoFocus
                placeholder="System compromised"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
