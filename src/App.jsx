import Header from './components/NavBar/index'
import Hero from './pages/Hero/index'
import About from './pages/About/index'
import StacksSetion from './pages/StacksSetion/index'
import Experience from './pages/ProfessinalExp'
import Education from './pages/Education/index'
import Footer from './components/Footer'
import { GlobalStyles } from "./styles/GlobalStyles"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <StacksSetion />
      <Experience />
      <Education />
      <Footer />
      <GlobalStyles />
    </>
  )
}

export default App
