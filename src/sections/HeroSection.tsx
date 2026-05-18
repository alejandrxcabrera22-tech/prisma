import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { WordsPullUp } from '../components/WordsPullUp'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4'

const NAV_LINKS = ['Our story', 'Collective', 'Workshops', 'Programs', 'Inquiries']

const EASE = [0.16, 1, 0.3, 1] as const

export function HeroSection() {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={HERO_VIDEO}
        />

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Navbar */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
          <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[10px] sm:text-xs md:text-sm transition-colors duration-200"
                  style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = '#E1E0CC')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      'rgba(225, 224, 204, 0.8)')
                  }
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-12 gap-4 md:gap-8 items-end px-6 md:px-10 pb-6 md:pb-10">
          <div className="col-span-12 lg:col-span-8 overflow-hidden">
            <WordsPullUp
              text="Prisma"
              showAsterisk
              className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]"
              style={{ color: '#E1E0CC' }}
            />
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 lg:items-start lg:pb-4">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.9, ease: EASE }}
              className="text-primary/70 text-xs sm:text-sm md:text-base"
              style={{ lineHeight: 1.2 }}
            >
              Prisma is a worldwide network of visual artists, filmmakers and
              storytellers bound not by place, status or labels but by passion
              and hunger to unlock potential through our unique perspectives.
            </motion.p>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.9, ease: EASE }}
              className="group bg-primary rounded-full pl-5 pr-1 py-1 flex items-center gap-2 hover:gap-3 transition-all duration-300 text-black font-medium text-sm sm:text-base"
            >
              <span>Join the lab</span>
              <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ArrowRight size={16} style={{ color: '#E1E0CC' }} />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
