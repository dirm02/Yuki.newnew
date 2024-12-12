import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ShopSection } from '@/components/shop-section'
import { VetSection } from '@/components/vet-section'
import { AboutSection } from '@/components/about-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ShopSection />
        <VetSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

