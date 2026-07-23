import { motion } from 'motion/react'
import { EASE_OUT, VIEWPORT, reveal } from '../animations'
import aboutImg from '../assets/images/about.jpg'
import ArrowRight from '../assets/icons/arrow-right-sm.svg?react'
import HoverSlideIcon from './HoverSlideIcon'
import Button from './Button'

function About() {
  return (
    <section id="o-firmie" className="bg-brand relative overflow-x-clip">
      <div className="flex flex-col md:block">
        <motion.div
          className="md:about-breakout-right relative h-64 overflow-hidden sm:h-80 md:absolute md:inset-y-0 md:left-0 md:h-auto"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE_OUT.ease }}
        >
          <img
            src={aboutImg}
            alt="Ogród w stylu japońskim z kamienną ścieżką i drewnianą altaną"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="page-container relative z-10 flex flex-col justify-center py-12 md:h-hero-md md:py-0 xl:h-about">
          <div className="md:page-grid">
            <motion.div
              {...reveal}
              className="md:col-span-6 md:col-start-7 xl:col-span-5 xl:col-start-8"
            >
              <p className="text-eyebrow text-cream">O firmie</p>
              <h2 className="heading-2 text-cream mt-4">
                Tworzymy <br />z <em className="accent">pasją</em>
              </h2>
              <p className="text-body text-cream mt-8">
                Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą
                wykwalifikowani projektanci oraz architekci, których zadaniem
                jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza
                specjalizacja to przestrzenie nowoczesne, które charakteryzuje
                minimalizm, geometria i elegancka prostota. Tworzymy ogrody
                małoobsługowe, dostosowane do współczesnego trybu życia.
              </p>
              <Button
                href="#kontakt"
                variant="outlineLight"
                className="group mt-18"
              >
                Poznaj nas bliżej
                <HoverSlideIcon icon={ArrowRight} axis="x" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
