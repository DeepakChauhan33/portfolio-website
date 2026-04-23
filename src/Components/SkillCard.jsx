import React from 'react'

// import { motion, AnimatePresence } from "framer-motion";

const SkillCard = ({ skill }) => {
    return (
        <div
            // Styling
            className='border shadow-md flex flex-col justify-center items-center transition-transform  hover:scale-106 duration-300 ease-in-out'

        //  Animation
        // layout
        // initial={{ opacity: 0, scale: 0.8 }}
        // animate={{ opacity: 1, scale: 1 }}
        // exit={{ opacity: 0, scale: 0.8 }}
        // transition={{ duration: 0.3 }}


        >
            <div className='h-20 w-20'>
                <img src={skill.image} alt={skill.name} className='h-full w-full object-contain' />
            </div>

            <div>
                <p className='text-center'>
                    {skill.name}
                </p>

            </div>
        </div>
    )
}

export default SkillCard
