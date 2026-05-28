import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ParticlesBackground from "./components/ParticlesBackground"
import Services from "./components/Services"
import About from "./components/About"
import Portfolio from "./components/Portfolio"

function App() {

  return (

    <div className="bg-black min-h-screen text-white relative">

      <ParticlesBackground />

      <Navbar />

      <Hero />

      <Services />

      <About />

      <Portfolio />

    </div>

  )
}

export default App