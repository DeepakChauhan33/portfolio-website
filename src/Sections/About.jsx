import React, { useContext } from 'react'

// import skills from '../Services/skillData'


import { ThemeContext } from '../Context/ThemeProvider';




import SkillSlider from '../Components/SkillSlider'

const About = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (

        <section className={`pt-10 mx-auto ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white"}`}>

            <div className='max-w-7xl border mx-auto px-2 md:px-4 lg:px-6 overflow-hidden'>

                {/* HEADER */}
                <div className='max-w-7xl space-y-3'>

                    <div className="flex items-center">
                        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gradient">
                            Projects
                        </h2>

                        <div className="w-full grow border-t ml-4 h-[3px] bg-linear-to-r from-transparent via-purple-500 to-transparent" />
                    </div>

                </div>

                <div className="overflow-hidden">
                    <SkillSlider />
                </div>

            </div>

        </section>
    )
}

export default About
