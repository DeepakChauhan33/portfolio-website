import React, { useContext } from 'react'

import { ThemeContext } from '../Context/ThemeProvider';

import project from '../Services/projectData'
import ProjecrCard from '../Components/ProjectCard'

const Projects = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className={`flex  flex-col p-5 sm:p-6 md:p-10 lg:p-12   ${theme === "dark" ? "bg-stone-100 " : "bg-white"} `}>


      <div className='mb-17 space-y-4'>
        <h2 className='text-5xl font-bold'>Projects</h2>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptates iure itaque!</p>
      </div>

      <div className='border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-start items-center gap-6 '>
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
