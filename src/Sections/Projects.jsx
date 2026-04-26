import React, { useContext } from 'react'

import { ThemeContext } from '../Context/ThemeProvider';

import project from '../Services/projectData'
import ProjecrCard from '../Components/ProjectCard'

const Projects = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className={`flex  flex-col px-4 py-10  sm:px-6 sm:py-14  md:px-8 md:py-16  lg:px-10 lg:py-20   ${theme === "dark" ? "bg-stone-100 " : "bg-white"} `}>


      <div className='mb-8 sm:mb-11 lg:mb-14 space-y-3'>

        {/* HEADING */}
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Projects</h2>

        {/* CAPTION */}
        <p className='text-md'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptates iure itaque!</p>
      </div>

      <div className='border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-start items-center gap-6 p-3'>
        {
          project.map((data) => (
            <ProjecrCard project={data} />
          ))
        }
      </div>



    </section>
  )
}

export default Projects
