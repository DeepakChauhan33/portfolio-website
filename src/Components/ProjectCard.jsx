import { span } from 'framer-motion/client'
import React from 'react'



const ProjecrCard = ({ project }) => {
    return (
        <div className="group w-full sm:max-w-[390px]  border rounded-sm p-1 overflow-hidden shadow-xl transition-all  hover:border hover:border-gray-50 hover:-translate-y-1">

            <div className='rounded-sm overflow-hidden' >
                <a href="https://storefront0.netlify.app/" target='_blank'>
                    <img
                        src={project.image}
                        alt="card"
                        className="w-full   h-[250px] object-contain  md:object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                </a>
            </div>


            <div className='p-3 space-y-3'>

                <div className=''>
                    <h2 className="text-xl font-semibold">{project.name}</h2>
                    <p className="text-sm">{project.desc}</p>
                </div>

                {/* Description */}
                <div className="flex mt-3">
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum hic, neque incidunt inventore commodi sint?</p>
                </div>

                {/* Tech Stack */}
                <div className='space-x-3 border-y py-3  overflow-auto scroll-auto  '>
                    {
                        project.techStack.map((tech) => (
                            <span id={tech.id} className='p-2 border rounded-full px-2 py-1 text-sm'>
                                {tech.name}
                            </span>
                        ))
                    }

                </div>



                {/* Button */}
                <div className='flex justify-between '>

                    {/* GitHub Repo Link */}
                    <button className='text-md w-24 text-center border p-0.5 rounded-md'>
                        Git
                    </button>

                    {/* Live Link */}
                    <button className='text-md w-24 text-center border p-0.5 rounded-md'>
                        Live
                    </button>


                </div>

            </div>

        </div>
    )
}

export default ProjecrCard
