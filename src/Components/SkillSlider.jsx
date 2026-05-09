import React from 'react'


import { motion } from "framer-motion";



import skills from '../Services/skillData'
import { div } from 'framer-motion/client';
import skill from '../Services/skillData';

const SkillSlider = () => {
    return (
        <div className="overflow-hidden w-full py-10">

            <motion.div
                className="flex gap-8 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 25,
                    ease: "linear",
                }}
            >

                {
                    [...skill, ...skills].map((data) => (
                        <div className='py-2 px-4   flex items-center justify-center gap-2 rounded-lg hover:bg-gray-400/30 border border-gray-100'>

                            {/* Logo */}
                            <div className='h-6 w-6 inline-block  '>
                                <img src={data.image} alt={data.name} className='h-full w-full object-contain' />
                            </div>


                            {/* Name */}
                            <p>{data.name}</p>
                        </div>
                    ))
                }


            </motion.div>

        </div>
    )
}

export default SkillSlider
