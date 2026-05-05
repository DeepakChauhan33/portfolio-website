import React, { useContext } from 'react'

import { ThemeContext } from '../Context/ThemeProvider';


const Hero = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className={`cursor- h-[90vh] p-2 sm:p-4 md:p-7 lg:p-15 ${theme === "dark" ? "bg-linear-to-r from-zinc-900 to-neutral-800  text-white" : "bg-linear-to-b from-zinc-100 via-zinc-200 to-neutral-200"}`}>


      <div className=' flex flex-col justify-center items-center gap-y-10 h-full '>


        <h2 className='text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-extrabold text-center'>
          Hi, I'm Deepak, a <br />
          <strong className={` text-green-300 `}> Frontend</strong> Developer
        </h2>


        <p className='w-full md:w-1/2 text-center text-sm sm:text-md lg:text-xl font-medium text-gray-400'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus inventore dolor tempora nihil, asperiores ab mollitia aliquid reprehenderit placeat dolorum?
        </p>


        <div className='space-x-6 p-3'>
          <button className='font-medium px-4 py-2 md:px-6 md:py-3 lg:px-8  bg-green-300  text-black transition-all hover:bg-green-300  hover:-translate-y-1 duration-400 ease-in-out hover:scale-104 '>Download CV</button>
          <button className='font-medium border-2 px-4 py-2 md:px-6 md:py-3 lg:px-10 transition-all hover:-translate-y-1 duration-400 ease-in-out  hover:text-greenbg-green-300  hover:border-2 hover:border-green-300 hover:text-green-300 hover:scale-104  '>Connect</button>
        </div>

      </div>

    </section>
  )
}

export default Hero
