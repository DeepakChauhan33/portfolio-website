import React, { useContext } from 'react'

// React Icons
import { motion } from 'framer-motion'
import { FaArrowRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



import { ThemeContext } from '../Context/ThemeProvider';
import { text } from 'framer-motion/client';

const ProjectCard = ({ project }) => {

    const { theme, toggleTheme } = useContext(ThemeContext);


    return (

        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className='group relative w-full sm:max-w-[390px] rounded-3xl overflow-hidden 
            border border-white/10 bg-white/[0.03] backdrop-blur-xl 
            shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500'
        >


            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500'>
                <div className='absolute -top-20 -right-20 w-40 h-40 bg-emerald-400/10 blur-3xl rounded-full'></div>
            </div>


            {/* Image */}
            <div className='relative overflow-hidden rounded-b-3xl p-2'>

                <img
                    src={project.image}
                    alt={project.name}
                    className='w-full h-[240px] rounded-lg object-cover transition-transform duration-700 group-hover:scale-105'
                />

                {/* <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent'></div> */}

            </div>


            {/* Content */}
            <div className='p-5 space-y-5 relative z-10'>

                {/* Title */}
                <div className='space-y-2'>
                    <h2 className={`text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        {project.name}
                    </h2>

                    <p className={`text-sm leading-6  ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {project.desc}
                    </p>
                </div>



                {/* Tech Stack */}
                <div className='flex flex-wrap gap-2'>

                    {
                        project.techStack.map((tech, index) => (

                            <span
                                key={index}
                                className={`px-3 py-1 text-xs rounded-full border 
                                hover:border-emerald-400/40 
                                hover:text-emerald-300
                                ${theme === "dark" ? 'bg-white/5 text-gray-300 hover:bg-emerald-400/10 border-white/10' : 'bg-gray-200/60 border-gray-400'}
                                transition-all duration-300`}
                            >
                                {tech.name}
                            </span>
                        ))
                    }

                </div>



                {/* Buttons */}
                <div className='flex items-center justify-between pt-2'>

                    {/* GitHub */}
                    <a
                        href={project.gitRepo}
                        target='_blank'
                        className='flex items-center gap-2 px-5 py-2 rounded-xl 
                        border border-white/10 bg-white/5 
                        hover:bg-white/10 transition-all duration-300'
                    >
                        <FaGithub />
                        <span className='text-sm'>Code</span>
                    </a>



                    {/* Live */}
                    <a
                        href={project.link}
                        target='_blank'
                        className='flex items-center gap-2 px-5 py-2 rounded-xl 
                        bg-emerald-400 text-black font-medium
                        hover:gap-3 transition-all duration-300'
                    >
                        Live
                        <FaArrowRight className='text-sm' />
                    </a>

                </div>

            </div>

        </motion.div>
    )
}

export default ProjectCard