import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"
import DemoModal from "./components/DemoModal"

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [demoSource, setDemoSource] = useState("")

  const openDemo = (source: string) => {
    setDemoSource(source)
    setIsDemoOpen(true)
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar onOpenDemo={openDemo} />
      <Hero onOpenDemo={openDemo} />
      <Features />
      <HowItWorks />
      <Pricing onOpenDemo={openDemo} />
      <Footer />
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        source={demoSource}
      />
    </div>
  )
}
