import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { FeaturesSection } from './sections/FeaturesSection'

export default function App() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
    </main>
  )
}
