import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Skills from './Components/Skills'

const App = () => {
  return (
    <div className='w-full py-16 text-white'>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Contact/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
