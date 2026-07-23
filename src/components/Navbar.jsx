import { useEffect, useState } from 'react'
import Logo from '../assets/icons/logo.svg?react'
import Search from '../assets/icons/lupa.svg?react'
import Chevron from '../assets/icons/chevron.svg?react'
import MenuIcon from './icons/MenuIcon'
import CloseIcon from './icons/CloseIcon'

const OFFER_ITEMS = [
  { label: 'Projekty', href: '#oferta' },
  { label: 'Wizualizacje', href: '#oferta' },
  { label: 'Realizacje', href: '#oferta' },
]

const MENU_ITEMS = [
  { label: 'Oferta', href: '#oferta', children: OFFER_ITEMS },
  { label: 'O firmie', href: '#o-firmie' },
  { label: 'Realizacje', href: '#realizacje' },
  { label: 'Kontakt', href: '#kontakt' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileOfferOpen, setMobileOfferOpen] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)')

    function handleChange(event) {
      if (event.matches) setMenuOpen(false)
    }

    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="bg-surface text-ink relative z-30">
      <div className="page-container flex h-18 items-center justify-between">
        <a href="#" aria-label="giarddesign — strona główna">
          <Logo />
        </a>

        <nav className="hidden self-stretch md:block">
          <ul className="flex h-full items-center gap-12">
            {MENU_ITEMS.map(({ label, href, children }) => (
              <li key={label} className="group relative flex h-full items-center">
                <a
                  href={href}
                  className="font-sans text-nav flex items-center gap-1"
                >
                  {label}
                  {children && (
                    <Chevron className="size-3 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </a>

                {children && (
                  <ul className="bg-surface pointer-events-none absolute top-full left-0 flex min-w-40 -translate-y-1 flex-col py-2 opacity-0 shadow-lg transition-all duration-200 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    {children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="font-sans text-nav hover:bg-cream block px-5 py-2"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <button type="button" className="flex" aria-label="Szukaj">
                <Search className="size-6" />
              </button>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="flex md:hidden"
          aria-label="Otwórz menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon className="size-6" />
        </button>
      </div>

      <div
        className={`bg-ink/40 fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`bg-surface fixed inset-y-0 right-0 z-50 flex w-80 max-w-[85%] flex-col transition-transform duration-300 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-18 items-center justify-end px-5">
          <button
            type="button"
            className="flex"
            aria-label="Zamknij menu"
            onClick={() => setMenuOpen(false)}
          >
            <CloseIcon className="size-6" />
          </button>
        </div>

        <nav>
          <ul className="flex flex-col">
            {MENU_ITEMS.map(({ label, href, children }) => (
              <li key={label}>
                {children ? (
                  <>
                    <button
                      type="button"
                      className="font-sans text-nav flex w-full items-center gap-1 px-5 py-4"
                      aria-expanded={mobileOfferOpen}
                      onClick={() => setMobileOfferOpen((open) => !open)}
                    >
                      {label}
                      <Chevron
                        className={`size-3 transition-transform duration-200 ${mobileOfferOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <ul
                      className={`flex flex-col overflow-hidden transition-all duration-200 ${
                        mobileOfferOpen ? 'max-h-40' : 'max-h-0'
                      }`}
                    >
                      {children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="font-sans text-nav block px-8 py-3"
                            onClick={() => setMenuOpen(false)}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={href}
                    className="font-sans text-nav flex items-center gap-1 px-5 py-4"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
