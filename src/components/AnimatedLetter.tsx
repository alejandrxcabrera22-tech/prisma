import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

type LetterProps = {
  char: string
  progress: MotionValue<number>
  charProgress: number
}

function Letter({ char, progress, charProgress }: LetterProps) {
  const opacity = useTransform(
    progress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1],
  )
  return (
    <motion.span style={{ opacity, display: 'inline' }}>{char}</motion.span>
  )
}

type AnimatedTextProps = {
  text: string
  className?: string
  style?: React.CSSProperties
}

export function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')
  const total = chars.length

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((c, i) => (
        <Letter
          key={i}
          char={c}
          progress={scrollYProgress}
          charProgress={i / total}
        />
      ))}
    </p>
  )
}
