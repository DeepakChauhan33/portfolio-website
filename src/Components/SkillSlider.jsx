import React from 'react'


import { motion } from "framer-motion";


const SkillSlider = ({ skills }) => {
    return (
        <div className="overflow-hidden w-full py-10">

            <motion.div
                className="flex gap-6 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                }}
            >

               
            </motion.div>

        </div>
    )
}

export default SkillSlider
