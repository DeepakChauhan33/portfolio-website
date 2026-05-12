import React from 'react'

// import { motion, AnimatePresence } from "framer-motion";

const SkillCard = ({ skill }) => {
    return (
        <div
            className='border p-3 shadow-md flex flex-col justify-center items-center transition-transform  hover:scale-103 duration-300 ease-in-out'

        >
            <div className='h-10 w-10 md:h-16 md:w-16 '>
                <img src={skill.image} alt={skill.name} className='h-full w-full object-contain' />
            </div>

            <div className=''>
                <p className='text-center'>
                    {skill.name}
                </p>

            </div>
        </div>
    )
}

export default SkillCard
