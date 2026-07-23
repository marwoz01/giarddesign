import { useState } from 'react'
import Masonry from 'react-masonry-css'
import ArrowBottom from '../assets/icons/arrow-bottom.svg?react'
import photo1 from '../assets/images/projects/project-1.jpg'
import photo2 from '../assets/images/projects/project-2.jpg'
import photo3 from '../assets/images/projects/project-3.jpg'
import photo4 from '../assets/images/projects/project-4.jpg'
import photo5 from '../assets/images/projects/project-5.jpg'
import photo6 from '../assets/images/projects/project-6.jpg'
import photo7 from '../assets/images/projects/project-7.jpg'
import photo8 from '../assets/images/projects/project-8.jpg'
import photo9 from '../assets/images/projects/project-9.jpg'
import photo10 from '../assets/images/projects/project-10.jpg'
import photo11 from '../assets/images/projects/project-11.jpg'
import photo12 from '../assets/images/projects/project-12.jpg'

const PHOTOS = [
  { src: photo8, alt: 'Schody z balustradą i trawnik wśród tropikalnej zieleni' },
  { src: photo7, alt: 'Nowoczesny dom z basenem i drewnianą pergolą nad tarasem' },
  { src: photo6, alt: 'Pergola porośnięta czerwonymi różami nad ogrodową alejką' },
  { src: photo5, alt: 'Zadaszony taras z drewnianymi ławkami i pergolą' },
  { src: photo4, alt: 'Oczko wodne z karpiami koi i liliami wodnymi' },
  { src: photo3, alt: 'Żwirowa ścieżka wijąca się wśród tropikalnej zieleni' },
  { src: photo1, alt: 'Drewniana konstrukcja pergoli na tle nieba' },
  { src: photo9, alt: 'Drewniana pergola z przezroczystym zadaszeniem nad tarasem' },
  { src: photo2, alt: 'Betonowe schody z balustradą wśród zieleni' },
  { src: photo10, alt: 'Zieleń w donicach wzdłuż kamiennego dziedzińca' },
  { src: photo11, alt: 'Okrągły dziedziniec z kamiennym murkiem i strzyżonym żywopłotem' },
  { src: photo12, alt: 'Ceglana alejka wśród kwitnących rabat i żywopłotu' },
]

const INITIAL_COUNT = 9

const BREAKPOINTS = {
  default: 3,
  767: 2,
  479: 1,
}

function Realizations() {
  const [expanded, setExpanded] = useState(false)
  const visiblePhotos = expanded ? PHOTOS : PHOTOS.slice(0, INITIAL_COUNT)

  return (
    <section id="realizacje" className="bg-beige py-20 xl:pt-30 xl:pb-40">
      <div className="page-container">
        <p className="font-sans text-eyebrow text-brand">Realizacje</p>
        <h2 className="font-heading text-h2-sm text-ink mt-4 md:text-h2">
          Nasze <em className="font-sans tracking-normal italic">projekty</em>
        </h2>
      </div>

      <div className="relative mt-24">
        <Masonry
          breakpointCols={BREAKPOINTS}
          className="masonry-grid"
          columnClassName="masonry-column"
        >
          {visiblePhotos.map(({ src, alt }) => (
            <img key={src} src={src} alt={alt} className="w-full" />
          ))}
        </Masonry>

        <div className="from-beige pointer-events-none absolute inset-x-0 bottom-0 flex h-3/4 items-end justify-center bg-linear-to-t to-transparent">
          <button
            type="button"
            className="border-ink text-ink font-sans text-body pointer-events-auto flex items-center gap-2 rounded-full border pt-3 pr-6 pb-3.5 pl-6"
            aria-expanded={expanded}
            onClick={() => setExpanded((open) => !open)}
          >
            {expanded ? 'Zwiń' : 'Rozwiń'}
            <ArrowBottom
              className={`size-4 transition-transform duration-200 ${
                expanded ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Realizations
