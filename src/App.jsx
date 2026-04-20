import { useState } from 'react'

import './App.css'

// COMPONENTS
import Navbar from './Components/Navbar'


// PAGES
import Home from './Pages/Home'
import BottomNavbar from './Components/BottomNavbar'
import Skill from './Sections/Skill'
import About from './Sections/About'

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <div className='bolck md:hidden'>
        <BottomNavbar />
      </div>
    </>
  )
}

export default App
