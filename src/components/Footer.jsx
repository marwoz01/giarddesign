import { motion } from 'motion/react'
import { EASE_OUT, VIEWPORT, fadeUp } from '../animations'
import Logo from '../assets/icons/giarddesign.svg?react'
import AdRespect from '../assets/icons/adRespect.svg?react'

const LINKS = [
  { label: 'Kontakt', href: '#kontakt' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

function Footer() {
  return (
    <footer className="bg-ink text-cream py-20">
      <div className="page-container">
        <motion.div
          className="mx-auto max-w-cta"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          transition={EASE_OUT}
        >
          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            <Logo />
            <div className="flex flex-col items-start gap-4 xl:flex-row xl:items-center xl:gap-6">
              <p className="font-sans text-body">
                Daj znać, co możemy dla Ciebie zrobić!
              </p>
              <a
                href="#kontakt"
                className="bg-brand font-sans text-body hover:brightness-95 rounded-full pt-3 pr-6 pb-3.5 pl-6 transition-[filter] duration-200"
              >
                Skontaktuj się z nami
              </a>
            </div>
          </div>

          <div className="border-cream/20 mt-10 border-t xl:mt-16" />

          <div className="mt-10 flex flex-col gap-6 xl:mt-16 xl:flex-row xl:items-center xl:justify-between">
            <ul className="flex flex-wrap gap-6 xl:gap-12">
              {LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="font-sans text-body-sm">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-6 xl:gap-12">
              <a href="tel:000000000" className="font-sans text-body-sm">
                000-000-000
              </a>
              <a
                href="mailto:giarddesign@kontakt.pl"
                className="font-sans text-body-sm"
              >
                giarddesign@kontakt.pl
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6 xl:mt-30 xl:flex-row xl:items-center xl:justify-between">
            <p className="font-sans text-body">Prawa zastrzeżone © 2022</p>
            <div className="flex items-center gap-2">
              <span className="font-sans text-body">made by</span>
              <AdRespect />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
