import React, { useContext, useState } from 'react'

import { ThemeContext } from '../Context/ThemeProvider';

import SkillCategory from '../Components/SkillCategory';

import skills from '../Services/skillData.js'
import SkillCard from '../Components/SkillCard.jsx';

const Skill = () => {


  const { theme, toggleTheme } = useContext(ThemeContext);


  const [category, setCategory] = useState("all");

  const filterSkills = category === "all" ? skills : skills.filter(skill => skill.category === category)

  return (
    <section id='skill' className={`min-h-120 p-5 px-4 py-10  sm:px-6 sm:py-14  md:px-8 md:py-16  lg:px-10 lg:py-20 border-amber-500 gap-x-8 ${theme === "dark" ? "bg-gradient-to-br from-black via-slate-900 to-zinc-800 text-white" : "bg-white"}`}>


      <div className='mb-8 sm:mb-11 lg:mb-14 space-y-3 '>

        {/* HEADING WITH LINE */}
        <div className="flex items-center">

          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gradient">
            Tech Stack
          </h2>

          <div className="flex-grow  h-[2px]  bg-linear-to-r from-transparent via-purple-500 to-transparent " />

          {/* <div className="border-t ml-4"></div> */}
        </div>

        {/* CAPTION */}
        {/* <p className='text-md ml-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptates iure itaque!</p> */}
      </div>

      <div className='flex flex-col justify-around lg:flex-row gap-y-6 gap-x-8'>

        {/* Option */}
        <div className='w-auto lg:w-[16%]    '>

          {/* Component */}
          <SkillCategory setCategory={setCategory} />
        </div>



        {/* Skills Icon */}
        <div className='w-full lg:w-[75%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 p-4 overflow-x-auto'>

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
