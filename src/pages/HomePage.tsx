import { useState } from "react"
import Navbar from "../components/Navbar"
import HomeHero from "../components/home/HomeHero"
import HomeProducts from "../components/home/HomeProducts"
import HomeCTA from "../components/home/HomeCTA"
import Footer from "../components/Footer"
import DemoModal from "../components/DemoModal"
import PageTransition from "../components/PageTransition"

export default function HomePage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [demoSource, setDemoSource] = useState("")

  const openDemo = (source: string) => {
    setDemoSource(source)
    setIsDemoOpen(true)
  }

  return (
    <PageTransition>
      <div className="min-h-screen w-full max-w-full bg-slate-50 font-sans overflow-x-hidden">
        <Navbar onOpenDemo={openDemo} />
        <HomeHero onOpenDemo={openDemo} />
        <HomeProducts />
        <HomeCTA />
        <Footer />
      </div>
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        source={demoSource}
      />
    </PageTransition>
  )
}
