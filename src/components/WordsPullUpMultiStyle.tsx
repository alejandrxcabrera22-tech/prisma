import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Segment = {
  text: string
  className?: string
}

type WordsPullUpMultiStyleProps = {
  segments: Segment[]
  className?: string
  style?: React.CSSProperties
  staggerDelay?: number
}

export function WordsPullUpMultiStyle({
  segments,
  className,
  style,
  staggerDelay = 0.08,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  const allWords: { word: string; className?: string }[] = []
  segments.forEach((segment) => {
    const words = segment.text.split(' ').filter((w) => w.length > 0)
    words.forEach((word) => {
      allWords.push({ word, className: segment.className })
    })
  })

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className ?? ''}`}
      style={style}
    >
      {allWords.map((item, i) => (
        <motion.span
          key={`${item.word}-${i}`}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            delay: i * staggerDelay,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block ${item.className ?? ''}`}
          style={{ marginRight: '0.25em' }}
        >
          {item.word}
        </motion.span>
      ))}
    </div>
  )
}
