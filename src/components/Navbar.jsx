import { useEffect, useState } from 'react'
import Logo from '../assets/icons/logo.svg?react'
import Search from '../assets/icons/lupa.svg?react'
import Chevron from '../assets/icons/chevron.svg?react'
import MenuIcon from './icons/MenuIcon'
import CloseIcon from './icons/CloseIcon'

const MENU_ITEMS = [
  { label: 'Oferta', href: '#oferta', hasDropdown: true },
  { label: 'O firmie', href: '#o-firmie' },
  { label: 'Realizacje', href: '#realizacje' },
  { label: 'Kontakt', href: '#kontakt' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

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
    <header className="bg-surface text-ink">
      <div className="page-container flex h-18 items-center justify-between">
        <a href="#" aria-label="giarddesign — strona główna">
          <Logo />
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-12">
            {MENU_ITEMS.map(({ label, href, hasDropdown }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-sans text-nav flex items-center gap-1"
                >
                  {label}
                  {hasDropdown && <Chevron className="size-3" />}
                </a>
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
        className={`fixed inset-0 z-40 bg-ink/40 transition-opacity duration-300 md:hidden ${
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
            {MENU_ITEMS.map(({ label, href, hasDropdown }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-sans text-nav flex items-center gap-1 px-5 py-4"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                  {hasDropdown && <Chevron className="size-3" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
