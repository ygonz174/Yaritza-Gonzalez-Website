import './components/Section.css'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Awards from './components/Awards'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Awards />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
