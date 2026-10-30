import Header from './components/NavBar/index'
import Hero from './pages/Hero/index'
import About from './pages/About/index'
import StacksSection from './pages/StacksSection/index'
import Projects from './pages/Projects/index'
import Experience from './pages/ProfessionalExp'
import Education from './pages/Education/index'
import Footer from './components/Footer'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <About />
        <StacksSection />
        <Projects />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  )
}

export default App
