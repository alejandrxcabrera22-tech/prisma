import { HeroSection } from './sections/HeroSection'
import { ServicesSection } from './sections/ServicesSection'
import { GallerySection } from './sections/GallerySection'
import { TrajectorySection } from './sections/TrajectorySection'
import { TeamSection } from './sections/TeamSection'
import { LocationSection } from './sections/LocationSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { FooterSection } from './sections/FooterSection'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-body overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TrajectorySection />
      <TeamSection />
      <LocationSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  )
}
