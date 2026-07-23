import aboutImg from '../assets/images/about.jpg'
import ArrowRight from '../assets/icons/arrow-right-sm.svg?react'

function About() {
  return (
    <section id="o-firmie" className="bg-brand relative overflow-x-clip">
      <div className="flex flex-col md:block">
        <div className="md:about-breakout-right relative h-64 sm:h-80 md:absolute md:inset-y-0 md:left-0 md:h-auto">
          <img
            src={aboutImg}
            alt="Ogród w stylu japońskim z kamienną ścieżką i drewnianą altaną"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="page-container relative z-10 flex flex-col justify-center py-12 md:h-hero-md md:py-0 xl:h-about">
          <div className="md:page-grid">
            <div className="md:col-span-6 md:col-start-7 xl:col-span-5 xl:col-start-8">
              <p className="font-sans text-eyebrow text-cream">O firmie</p>
              <h2 className="font-heading text-h2-sm text-cream mt-4 md:text-h2">
                Tworzymy <br />z{' '}
                <em className="font-sans tracking-normal italic">pasją</em>
              </h2>
              <p className="font-sans text-body text-cream mt-8">
                Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą
                wykwalifikowani projektanci oraz architekci, których zadaniem
                jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza
                specjalizacja to przestrzenie nowoczesne, które charakteryzuje
                minimalizm, geometria i elegancka prostota. Tworzymy ogrody
                małoobsługowe, dostosowane do współczesnego trybu życia.
              </p>
              <a
                href="#kontakt"
                className="border-cream text-cream font-sans text-body mt-18 inline-flex items-center gap-2 rounded-full border pt-3 pr-6 pb-3.5 pl-6"
              >
                Poznaj nas bliżej
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
