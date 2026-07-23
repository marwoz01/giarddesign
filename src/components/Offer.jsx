import PenIcon from '../assets/icons/pen.svg?react'
import EyeIcon from '../assets/icons/eye.svg?react'
import StarsIcon from '../assets/icons/stars.svg?react'
import ArrowRight from '../assets/icons/arrow-right-sm.svg?react'

const CARDS = [
  {
    icon: PenIcon,
    title: 'Projekty',
    text: 'Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.',
    linkLabel: 'Dowiedz się więcej',
    href: '#oferta',
  },
  {
    icon: EyeIcon,
    title: 'Wizualizacje',
    text: 'Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.',
    linkLabel: 'Dowiedz się więcej',
    href: '#oferta',
  },
  {
    icon: StarsIcon,
    title: 'Realizacje',
    text: 'Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.',
    linkLabel: 'Zobacz nasze realizacje',
    href: '#realizacje',
  },
]

function Offer() {
  return (
    <section id="oferta" className="bg-cream py-20 xl:pt-30 xl:pb-40">
      <div className="page-container">
        <div className="page-grid">
          <div className="col-span-12 xl:col-span-7 xl:col-start-2">
            <p className="font-sans text-eyebrow text-brand">Oferta</p>
            <h2 className="font-heading text-h2-sm text-ink mt-4 md:text-h2">
              Działamy{' '}
              <em className="font-sans tracking-normal italic">kompleksowo</em>
            </h2>
            <p className="font-sans text-body text-ink mt-8">
              Oferujemy kompletną obsługę inwestycji terenów zielonych.
              Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne.
              Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w
              życie, a na każdym etapie posłużymy radą i wieloletnim
              doświadczeniem.
            </p>
          </div>
        </div>

        <ul className="page-grid mt-24">
          {CARDS.map(({ icon: Icon, title, text, linkLabel, href }) => (
            <li
              key={title}
              className="bg-surface rounded-card min-h-card col-span-12 flex flex-col px-10 py-12 md:col-span-6 xl:col-span-4"
            >
              <Icon className="size-10" />
              <h3 className="font-heading text-h3 text-ink mt-8">{title}</h3>
              <p className="font-sans text-body-sm text-ink mt-3">{text}</p>
              <a
                href={href}
                className="text-brand font-sans text-body mt-auto flex items-center gap-2 self-start border-b pb-2"
              >
                {linkLabel}
                <ArrowRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Offer
