import React, { useContext, useState } from 'react'

import { ThemeContext } from '../Context/ThemeProvider';

import SkillBar from '../Components/SkillBar';

import skills from '../Services/skillData'
import SkillCard from '../Components/skillCard';

const Skill = () => {


  const { theme, toggleTheme } = useContext(ThemeContext);


  const [category, setCategory] = useState("all");

  const filterSkills = category === "all" ? skills : skills.filter(skill => skill.category === category)

  return (
    <section className={`min-h-120 p-5 px-4 py-10  sm:px-6 sm:py-14  md:px-8 md:py-16  lg:px-10 lg:py-20 border-amber-500 gap-x-8 ${theme === "dark" ? "bg-gray-950 text-white" : "bg-white"}`}>


      {/* Header */}
      <div className=' text-sm md:text-lg lg:text-xl text-start lg:text-center p-2 space-y-2 lg:space-y-4 mb-7'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-black'>Skills</h2>

        <p className='text-gray-300'>
          A curated set of technologies I use to build scalable, performant web applications.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row gap-y-6 gap-x-8'>

        {/* Option */}
        <div className='w-auto lg:w-[16%]    '>

          {/* Component */}
          <SkillBar setCategory={setCategory} />
        </div>

        {/* Skills Icon */}
        <div className='w-full lg:w-[80%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 border p-4 overflow-x-auto'>

          {
            filterSkills.map((data) => (
              <SkillCard skill={data} />
            ))
          }
        </div>


      </div>
    </section>
  )
}

export default Skill
