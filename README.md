# giarddesign

Strona wizytówkowa firmy ogrodniczej — zadanie rekrutacyjne adRespect, odwzorowanie projektu z Figmy.

## Stack

- Vite + React
- Tailwind CSS v4
- Motion (animacje)
- react-masonry-css (galeria realizacji)
- yet-another-react-lightbox (podgląd zdjęć)

React zamiast czystego JS — sporo stanu i interaktywności do ogarnięcia (slider, dropdown nawigacji, wyszukiwarka, masonry + lightbox, przycisk "Rozwiń"), komponentowa struktura ułatwia to bardziej niż ręczne zarządzanie DOM-em.

## Podejście do pracy

Mobile-first, komponent po komponencie: najpierw statyczny layout na najmniejszym breakpoincie, potem tablet, potem desktop, dopiero na końcu interakcje i animacje.

## Kluczowe decyzje

- **Elementy wychodzące poza siatkę** (zdjęcia w Hero i sekcji O firmie) liczone jako pozycja względem kolumn gridu, nie na sztywno w pikselach — układ przelicza się sam przy zmianie marginesu czy guttera.
- **Galeria realizacji** — `react-masonry-css` zamiast czystego CSS (`column-count`), bo ten drugi układa elementy z góry na dół w kolumnach, przez co kolejność czytania nie odpowiada kolejności wizualnej.
- **Dostępność bez dodatkowego narzutu:** zdjęcia w galerii to `<button>`, nie `<img onClick>`. Animacje respektują `prefers-reduced-motion`. Wspólny komponent `Button` sam dobiera znacznik (`<a>` dla linków, `<button>` dla akcji), żeby nie psuć zachowania linków ani czytnika ekranu.
- **Wyszukiwarka** — strona jednostronicowa nie ma czego przeszukiwać, więc zrobiłem sam interfejs bez podpiętej logiki, zamiast udawać działającą funkcję.
- **Animacje:** mikrointerakcje (dropdown, panel mobilny, crossfade slidera) na czystym CSS, `motion` tylko tam, gdzie CSS nie wystarcza (scroll-reveal, kaskadowe wejście kart, animacja nowych zdjęć po "Rozwiń").
- **Wydajność:** obrazy z Figmy ważyły łącznie 19 MB — `vite-plugin-image-optimizer` (mozjpeg, jakość 75) zredukował to o ok. 80% bez widocznej utraty jakości, automatycznie przy buildzie.

## Uruchomienie

npm install
npm run dev # serwer deweloperski


### Pozostałe skrypty

npm run build # build produkcyjny
npm run preview # podgląd builda
npm run lint # ESLint


## Struktura

Każda sekcja strony to osobny komponent w `src/components/` (Navbar, Hero, Offer, About, Realizations, ContactCTA, Footer). Design tokeny (kolory, typografia, siatka) są zebrane w `src/index.css`.
