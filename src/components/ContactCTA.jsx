function ContactCTA() {
  return (
    <section id="kontakt" className="bg-cream py-20 xl:py-24">
      <div className="page-container">
        <div className="bg-brand mx-auto flex max-w-cta flex-col gap-8 px-8 py-12 xl:flex-row xl:items-center xl:justify-between xl:gap-16 xl:px-30 xl:py-27.5">
          <h2 className="font-heading text-cream text-[28px] leading-[1.2] font-normal md:text-[32px] xl:text-[40px] xl:tracking-[-2px]">
            Zostańmy w kontakcie!{' '}
            <br className="hidden xl:inline" />
            Znajdziesz nas na{' '}
            <em className="font-sans font-medium italic xl:tracking-[1px]">
              Instagramie
            </em>
            .
          </h2>

          <div className="flex flex-col items-start gap-6">
            <p className="font-sans text-body text-cream">
              Śledź nasze
              <br />
              najnowsze realizacje!
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="bg-cream text-brand rounded-full pt-2.5 pr-6 pb-3 pl-6 font-sans text-base leading-normal tracking-normal"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
