import Navbar from "../components/Navbar"
import HomeHero from "../components/home/HomeHero"
import HomeProducts from "../components/home/HomeProducts"
import HomeCTA from "../components/home/HomeCTA"
import Footer from "../components/Footer"
import PageTransition from "../components/PageTransition"

export default function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen w-full max-w-full bg-slate-50 font-sans overflow-x-hidden">
        <Navbar />
        <HomeHero />
        <HomeProducts />
        <HomeCTA />
        <Footer />
      </div>
    </PageTransition>
  )
}
