import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type WordsPullUpProps = {
  text: string
  className?: string
  style?: React.CSSProperties
  showAsterisk?: boolean
  staggerDelay?: number
}

export function WordsPullUp({
  text,
  className,
  style,
  showAsterisk = false,
  staggerDelay = 0.08,
}: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  const words = text.split(' ')

  return (
    <div ref={ref} className={className} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        return (
          <motion.span
            key={`${word}-${i}`}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              delay: i * staggerDelay,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
            style={{ position: 'relative' }}
          >
            {word}
            {showAsterisk && isLast && (
              <span
                className="absolute"
                style={{
                  top: '0.65em',
                  right: '-0.3em',
                  fontSize: '0.31em',
                }}
              >
                *
              </span>
            )}
            {i < words.length - 1 && ' '}
          </motion.span>
        )
      })}
    </div>
  )
}
