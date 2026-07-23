import { useState } from 'react'
import { motion } from 'motion/react'
import { EASE_OUT, fadeUp, staggerParent } from '../animations'
import heroImg1 from '../assets/images/hero-1.jpg'
import heroImg2 from '../assets/images/hero-2.jpg'
import heroImg3 from '../assets/images/hero-3.jpg'
import ArrowLeft from '../assets/icons/arrow-left.svg?react'
import ArrowRight from '../assets/icons/arrow-right.svg?react'
import ArrowBottom from '../assets/icons/arrow-bottom.svg?react'

const SLIDES = [
  {
    image: heroImg1,
    alt: 'Nowoczesny ogród z geometryczną aranżacją zieleni',
  },
  {
    image: heroImg2,
    alt: 'Nowoczesny taras z minimalistycznymi meblami wśród zieleni',
  },
  {
    image: heroImg3,
    alt: 'Widok z lotu ptaka na zaaranżowany ogród na dachu',
  },
]

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  function showPrevious() {
    setActiveSlide((current) => (current - 1 + SLIDES.length) % SLIDES.length)
  }

  function showNext() {
    setActiveSlide((current) => (current + 1) % SLIDES.length)
  }

  return (
    <section className="bg-beige relative overflow-x-clip">
      <div className="flex flex-col md:block">
        <div className="page-container relative z-10 flex flex-col justify-center py-12 md:h-hero-md md:py-0 xl:h-hero">
          <motion.div
            className="md:page-grid"
            variants={staggerParent}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="font-heading text-h1-sm text-ink md:text-h1-md md:col-span-6 xl:text-h1"
              variants={fadeUp}
              transition={EASE_OUT}
            >
              Nowoczesna <br className="hidden xl:inline" />
              aranżacja <br className="hidden xl:inline" />
              Twojego ogrodu
            </motion.h1>
            <motion.div
              className="mt-11 md:col-span-6 md:col-start-1 xl:col-span-5 xl:col-start-1"
              variants={fadeUp}
              transition={EASE_OUT}
            >
              <p className="font-sans text-body text-ink">
                Marka GiardDesign to wieloletnie doświadczenie i wysoka
                estetyka realizacji. Oferujemy kompleksowy zakres usług z
                indywidualnym podejściem do każdego projektu.
              </p>
              <div className="mt-18 flex flex-wrap gap-9 xl:flex-nowrap">
                <a
                  href="#kontakt"
                  className="bg-brand text-cream font-sans text-body rounded-full pt-3 pr-6 pb-3.5 pl-6 whitespace-nowrap"
                >
                  Skontaktuj się z nami
                </a>
                <a
                  href="#realizacje"
                  className="border-brand text-brand font-sans text-body flex items-center gap-2 rounded-full border pt-3 pr-6 pb-3.5 pl-6 whitespace-nowrap"
                >
                  Zobacz nasze realizacje
                  <ArrowBottom className="size-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="md:hero-breakout-left relative h-64 sm:h-80 md:absolute md:inset-y-0 md:right-0 md:h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT.ease }}
        >
          {SLIDES.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt={index === activeSlide ? slide.alt : ''}
              aria-hidden={index === activeSlide ? undefined : true}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                index === activeSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 mx-auto max-w-(--grid-max-width)">
        <div className="flex justify-end">
          <div className="bg-cream text-ink pointer-events-auto flex gap-8 px-8 py-6">
            <button
              type="button"
              className="flex"
              aria-label="Poprzedni slajd"
              onClick={showPrevious}
            >
              <ArrowLeft className="size-12" />
            </button>
            <button
              type="button"
              className="flex"
              aria-label="Następny slajd"
              onClick={showNext}
            >
              <ArrowRight className="size-12" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
