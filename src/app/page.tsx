import Header from '../components/NavBar'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import About from '../sections/About'
import StacksSection from '../sections/StacksSection'
import Projects from '../sections/Projects'
import Experience from '../sections/ProfessionalExp'
import Education from '../sections/Education'

export default function Home() {
  return (
    <>
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
