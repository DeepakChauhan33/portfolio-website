import { useState } from 'react'

import './App.css'

// COMPONENTS
import Navbar from './Components/Navbar'


// PAGES
import Home from './Pages/Home'
import BottomNavbar from './Components/BottomNavbar'
import Skill from './Sections/Skill'

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Skill />
      <div className='bolck md:hidden'>
        <BottomNavbar />
      </div>
    </>
  )
}

export default App
