import GridOverlay from './components/GridOverlay'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Offer from './components/Offer'
import About from './components/About'
import Realizations from './components/Realizations'
import ContactCTA from './components/ContactCTA'

function App() {
  return (
    <>
      <GridOverlay />
      <Navbar />
      <main>
        <Hero />
        <Offer />
        <About />
        <Realizations />
        <ContactCTA />
      </main>
    </>
  )
}

export default App
