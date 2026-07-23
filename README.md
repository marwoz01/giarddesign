# giarddesign

Strona wizytówkowa firmy ogrodniczej — zadanie rekrutacyjne adRespect, odwzorowanie projektu z Figmy.

## Stack

- Vite + React
- Tailwind CSS v4
- Motion (animacje)
- react-masonry-css (galeria realizacji)
- yet-another-react-lightbox (podgląd zdjęć)

## Uruchomienie

```bash
npm install
npm run dev      # serwer deweloperski
```

## Pozostałe skrypty

```bash
npm run build    # build produkcyjny
npm run preview  # podgląd builda
npm run lint     # ESLint
```

## Struktura

Każda sekcja strony to osobny komponent w `src/components/` (Navbar, Hero, Offer, About, Realizations, ContactCTA, Footer). Design tokeny (kolory, typografia, siatka) są zebrane w `src/index.css`.
