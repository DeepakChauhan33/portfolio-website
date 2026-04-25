import { useState } from 'react'

import './App.css'

// COMPONENTS
import Navbar from './Components/Navbar'


// PAGES
import Home from './Pages/Home'
import BottomNavbar from './Components/BottomNavbar'
import Skill from './Sections/Skill'
import About from './Sections/About'
import Projects from './Sections/Projects'
import ThemeProvider from './Context/ThemeProvider'
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
        <div className='bolck md:hidden'>
          <BottomNavbar />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
