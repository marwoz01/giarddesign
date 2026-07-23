import { motion } from 'motion/react'
import { reveal } from '../animations'
import Button from './Button'

function ContactCTA() {
  return (
    <section id="kontakt" className="bg-cream py-20 xl:py-24">
      <div className="page-container">
        <motion.div
          {...reveal}
          className="bg-brand mx-auto flex max-w-cta flex-col gap-8 px-8 py-12 xl:flex-row xl:items-center xl:justify-between xl:gap-16 xl:px-30 xl:py-27.5"
        >
          <h2 className="heading-cta text-cream">
            Zostańmy w kontakcie!{' '}
            <br className="hidden xl:inline" />
            Znajdziesz nas na{' '}
            <em className="accent font-medium xl:tracking-[1px]">Instagramie</em>
            .
          </h2>

          <div className="flex flex-col items-start gap-6">
            <p className="text-body text-cream">
              Śledź nasze
              <br />
              najnowsze realizacje!
            </p>
            <Button
              href="https://instagram.com"
              variant="filledLight"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA
