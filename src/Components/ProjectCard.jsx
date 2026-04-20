import React from 'react'



const ProjecrCard = ({ project }) => {
    return (
        <div>

            <h3>{project.name}</h3>


            <div className='h-20 border w-16'>
                <img src={project.image} alt={project.name} className='h-full w-full' />
            </div>

            <div>
                <button>Live</button>
                <button>GitHub</button>
            </div>
        </div>
    )
}

export default ProjecrCard
