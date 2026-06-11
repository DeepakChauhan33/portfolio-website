import { useState } from 'react'


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
import Activity from './Sections/Activity'
import Contact from './Sections/Contact'


// Animation Components
// import Reveal from './Components/Reveal'

function App() {


  return (
    <>

      <ThemeProvider>
        <Navbar />

        <div className='relative'>

          {/* Home Section */}
          <Home />



          {/* About Section */}
          <About />



          {/* Skill Section */}
          <Skill />



          {/* Project Section */}
          <Projects />



          {/* Activity Section */}
          <Activity />



          {/* Contact Section */}
          <Contact />


          {/* <Reveal>
            <Home />
          </Reveal>


          <Reveal>
            <About />
          </Reveal>

          <Reveal>
            <Skill />
          </Reveal>

          <Reveal>
            <Projects />
          </Reveal>

          <Reveal>
            <Activity />
          </Reveal>

          <Reveal>
            <Contact />
          </Reveal> */}


        </div>

        <Footer />

        {/* Bottom Navbar */}
        <div className='bolck md:hidden'>
          <BottomNavbar />
        </div>

      </ThemeProvider >
    </>
  )
}

export default App
