import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'

const CARD_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'

const ICON_STORYBOARD =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85'
const ICON_CRITIQUES =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85'
const ICON_IMMERSION =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85'

const EASE = [0.22, 1, 0.36, 1] as const

type CardWrapperProps = {
  index: number
  children: React.ReactNode
}

function CardWrapper({ index, children }: CardWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        delay: index * 0.15,
        duration: 0.8,
        ease: EASE,
      }}
      className="relative rounded-2xl md:rounded-3xl overflow-hidden lg:h-[480px] min-h-[420px] flex flex-col"
    >
      {children}
    </motion.div>
  )
}

type FeatureCardProps = {
  number: string
  title: string
  icon: string
  items: string[]
}

function FeatureCard({ number, title, icon, items }: FeatureCardProps) {
  return (
    <div
      className="w-full h-full p-5 sm:p-6 flex flex-col"
      style={{ background: '#212121' }}
    >
      <img
        src={icon}
        alt=""
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl object-cover mb-5 sm:mb-6"
      />
      <h3 className="text-primary text-base sm:text-lg md:text-xl font-normal mb-5 sm:mb-6">
        {title}{' '}
        <span className="text-primary/40 ml-1 text-xs sm:text-sm align-middle">
          ({number})
        </span>
      </h3>

      <ul className="flex flex-col gap-3 sm:gap-4 flex-1">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2.5">
            <Check
              size={16}
              className="text-primary flex-shrink-0 mt-0.5"
              strokeWidth={2}
            />
            <span className="text-gray-400 text-xs sm:text-sm leading-snug">
              {it}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-primary text-xs sm:text-sm hover:opacity-70 transition-opacity"
      >
        <span>Learn more</span>
        <ArrowRight
          size={14}
          style={{ transform: 'rotate(-45deg)' }}
        />
      </a>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="relative min-h-screen bg-black py-20 md:py-32 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Studio-grade workflows for visionary creators.',
                className: 'text-primary',
              },
            ]}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal block mb-1"
          />
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Built for pure vision. Powered by art.',
                className: 'text-gray-500',
              },
            ]}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal block"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {/* Card 1 — Video */}
          <CardWrapper index={0}>
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src={CARD_VIDEO}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 mt-auto p-5 sm:p-6">
              <h3
                className="text-base sm:text-lg md:text-xl font-normal"
                style={{ color: '#E1E0CC' }}
              >
                Your creative canvas.
              </h3>
            </div>
          </CardWrapper>

          {/* Card 2 */}
          <CardWrapper index={1}>
            <FeatureCard
              number="01"
              title="Project Storyboard."
              icon={ICON_STORYBOARD}
              items={[
                'Frame-by-frame planning with reference attachments',
                'Shared timeline reviewed by your full collective',
                'Version history that never collapses on edits',
                'Export to PDF, FCP and DaVinci with one click',
              ]}
            />
          </CardWrapper>

          {/* Card 3 */}
          <CardWrapper index={2}>
            <FeatureCard
              number="02"
              title="Smart Critiques."
              icon={ICON_CRITIQUES}
              items={[
                'AI analysis tuned for color, pacing and composition',
                'Layered creative notes from the Prisma director pool',
                'Tool integrations across Resolve, Premiere and Nuke',
              ]}
            />
          </CardWrapper>

          {/* Card 4 */}
          <CardWrapper index={3}>
            <FeatureCard
              number="03"
              title="Immersion Capsule."
              icon={ICON_IMMERSION}
              items={[
                'Notification silencing while you sit in deep work',
                'Ambient soundscapes tuned to scene and mood',
                'Schedule syncing across studio, calendar and crew',
              ]}
            />
          </CardWrapper>
        </div>
      </div>
    </section>
  )
}
