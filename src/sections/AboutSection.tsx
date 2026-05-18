import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'
import { AnimatedText } from '../components/AnimatedLetter'

const BODY_TEXT =
  'Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.'

export function AboutSection() {
  return (
    <section className="bg-black py-20 md:py-32 px-4 md:px-6">
      <div
        className="max-w-6xl mx-auto rounded-2xl md:rounded-[2rem] py-16 sm:py-20 md:py-28 px-6 sm:px-10 md:px-16 flex flex-col items-center text-center"
        style={{ background: '#101010' }}
      >
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-8 sm:mb-10">
          Visual arts
        </span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'I am Marcus Chen,', className: 'font-normal' },
            {
              text: 'a self-taught director.',
              className: 'italic font-serif',
            },
            {
              text: 'I have skills in color grading, visual effects, and narrative design.',
              className: 'font-normal',
            },
          ]}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] text-primary"
        />

        <div className="mt-12 sm:mt-16 md:mt-20 max-w-2xl">
          <AnimatedText
            text={BODY_TEXT}
            className="text-xs sm:text-sm md:text-base leading-relaxed"
            style={{ color: '#DEDBC8' }}
          />
        </div>
      </div>
    </section>
  )
}
