
// HOOKS
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../Context/ThemeProvider';

// LIVE BACKGROUND
import Particles from '../Components/Particles'


// RESUME
import resume from '../assets/Deepak_Chauhan_Resume.pdf';





const Hero = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  
  return (
    // <section className={`  p-2 sm:p-4 md:p-7 lg:p-15 ${theme === "dark" ? "bg-linear-to-r from-zinc-900 to-neutral-800  text-white" : "bg-linear-to-b from-zinc-100 via-zinc-200 to-neutral-200"}`}>



    <>

      <div className={`relative min-h-[95vh] overflow-hidden  ${theme === "dark" ? "bg-linear-to-b from-black via-zinc-900 to-black  text-white" : "bg-gradient-to-br from-white via-emerald-50 to-green-100/10"}`}>

        {/* Particles */}
        <Particles
          className="absolute inset-0 w-full h-full pointer-events-none"
          particleColors={
            theme === "dark"
              ? ["#ffffff"]
              : ["#7DB7FF"]
          }
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />

        {/* Hero Section */}
        <section id='home' className='relative z-10 h-[80lvh] md:min-h-screen flex items-center justify-center'>

          <div className='flex flex-col justify-center items-start md:items-center gap-y-6 md:gap-y-10 px-4 '>

            <h2 className={`text-6xl xs:text-4xl sm:text-6xl lg:text-7xl ${theme === 'dark' ? "text-slate-200" : "text-zinc-800"} font-extrabold text-start md:text-center`}>
              Hi, I'm Deepak, a <br /> <strong className={`text-green-300`}> Frontend</strong> Developer
            </h2>

            <p className='w-full md:w-1/2 text-start lg:text-center text-md sm:text-md lg:text-xl font-medium text-gray-400'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus inventore dolor tempora nihil, asperiores ab mollitia aliquid reprehenderit placeat dolorum?
            </p>

            <div className='space-x-6 p-3'>

              <a href={resume} download>
                <button className='font-medium px-4 py-2 md:px-6 md:py-3 lg:px-8 bg-green-300 text-black transition-all hover:bg-green-300 hover:-translate-y-1 duration-400 ease-in-out hover:scale-104 '>
                  Download CV
                </button>
              </a>

              <a href="#contact">
                <button className='font-medium border-2 px-4 py-2 md:px-6 md:py-3 lg:px-10 transition-all hover:-translate-y-1 duration-400 ease-in-out hover:bg-gray-100/10 hover:border-2 hover:border-green-300 hover:text-green-300 hover:scale-104 '>
                  Connect
                </button>
              </a>



            </div>

          </div>

        </section >
      </div >









    </>




  )
}

export default Hero
