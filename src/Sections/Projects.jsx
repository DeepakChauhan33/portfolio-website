import React from 'react'

import project from '../Services/projectData'
import ProjecrCard from '../Components/ProjectCard'

const Projects = () => {
  return (
    <section className='py-25'>

      <h2>Projects</h2>

      <div>
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
