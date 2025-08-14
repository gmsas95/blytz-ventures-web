import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { VenturesPortfolio } from "@/components/ventures-portfolio"
import { ApproachSection } from "@/components/approach-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <VenturesPortfolio />
      <ApproachSection />
      <CTASection />
    </>
  )
}
