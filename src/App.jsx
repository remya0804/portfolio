import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import SocialMedia from './components/SocialMedia'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full'>
      
      <Navbar />

      <Home />

      <SocialMedia /> 

      <About />

      <Projects />

      <Skills />

      <Contact />

      <Footer />

    </div>
  )
}

export default App