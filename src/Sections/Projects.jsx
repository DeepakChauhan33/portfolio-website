import React, { useContext } from 'react'

import { ThemeContext } from '../Context/ThemeProvider';

import project from '../Services/projectData'
import ProjecrCard from '../Components/ProjectCard'

const Projects = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className={`flex  flex-col px-4 py-10  sm:px-6 sm:py-14  md:px-8 md:py-16  lg:px-10 lg:py-20   ${theme === "dark" ? "bg-gray-900 text-white " : "bg-white"} `}>


      <div className='mb-8 sm:mb-11 lg:mb-14 space-y-3 '>

        {/* HEADING WITH LINE */}
        <div className="flex items-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gradient">
            Projects
          </h2>
          {/* <div className="flex-grow border-t ml-4"></div> */}
          <div className=" flex-grow border-t ml-4 h-[2px]  bg-gradient-to-r from-transparent via-purple-500 to-transparent " />
        </div>

        {/* CAPTION */}
        {/* <p className='text-md ml-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptates iure itaque!</p> */}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-start items-center gap-6 p-3'>
        {
          project.slice(0, 3).map((data) => (
            <ProjecrCard project={data} />
          ))
        }
      </div>



    </section>
  )
}

export default Projects
