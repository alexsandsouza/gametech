import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import SocialProofBar from '@/components/sections/SocialProofBar'
import HowItWorks from '@/components/sections/HowItWorks'
import Features from '@/components/sections/Features'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import LiveCounter from '@/components/ui/LiveCounter'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProofBar />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <LiveCounter />
    </>
  )
}
