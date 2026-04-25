import { useState } from 'react'

import './App.css'

// COMPONENTS
import Navbar from './Components/Navbar'
import BottomNavbar from './Components/BottomNavbar'
import Footer from './Components/Footer'


// CONTEXT
import ThemeProvider from './Context/ThemeProvider'



// SECTIONS
import Home from './Pages/Home'
import Skill from './Sections/Skill'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'

function App() {


  return (
    <>

      <ThemeProvider>
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Projects />
        <Contact />
        <Footer />
        <div className='bolck md:hidden'>
          <BottomNavbar />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
