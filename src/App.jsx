import GridOverlay from './components/GridOverlay'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Offer from './components/Offer'

function App() {
  return (
    <>
      <GridOverlay />
      <Navbar />
      <main>
        <Hero />
        <Offer />
      </main>
    </>
  )
}

export default App
