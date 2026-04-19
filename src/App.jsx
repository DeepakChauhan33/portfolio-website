import { useState } from 'react'

import './App.css'

// COMPONENTS
import Navbar from './Components/Navbar'


// PAGES
import Home from './Pages/Home'
import BottomNavbar from './Components/BottomNavbar'

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <div className='bolck md:hidden'>
        <BottomNavbar />
      </div>
    </>
  )
}

export default App
