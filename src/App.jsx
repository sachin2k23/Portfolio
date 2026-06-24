import { useState } from 'react'
import { ThemeProvider } from './hooks/useTheme'
import Loading from './components/portfolio/Loading'
import Navbar from './components/portfolio/Navbar'
import Hero from './components/portfolio/Hero'
import About from './components/portfolio/About'
import Experience from './components/portfolio/Experience'
import Skills from './components/portfolio/Skills'
import Projects from './components/portfolio/Projects'
import Contact from './components/portfolio/Contact'
import Footer from './components/portfolio/Footer'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <ThemeProvider>
      {!loaded && <Loading onDone={() => setLoaded(true)} />}
      <main>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default App