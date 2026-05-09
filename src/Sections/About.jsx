import React from 'react'

// import skills from '../Services/skillData'



import SkillSlider from '../Components/SkillSlider'

const About = () => {
    return (
        <section className='py-14 md:py-18 lg:py-24 bg-sky-200'>




            <div className='max-w-7xl border mx-auto px-2 md:px-4 lg:px-6'>


                {/* HEADER */}
                <div className='mb-8 sm:mb-11 lg:mb-14 space-y-3 '>
                    {/* HEADING & LINE */}
                    <div className="flex items-center">
                        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gradient">
                            Projects
                        </h2>

                        <div className="w-full flex-grow border-t ml-4 h-[3px]  bg-gradient-to-r from-transparent via-purple-500 to-transparent " />
                    </div>
                </div>








            </div>
        </section>
    )
}

export default About
