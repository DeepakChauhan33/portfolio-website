import React from 'react'
import SkillBar from '../Components/SkillBar';

import skill from '../Services/skillData'

const Skill = () => {
  return (
    <section className='p-5 sm:p-8 md:p-11 lg:p-15   gap-x-8'>

      <h2>Skills</h2>

      <div className='flex flex-col md:flex-row'>

        {/* Option */}
        <div className='w-full md:w-[20%] overflow-auto '>
          {/* Component */}
          <SkillBar />
        </div>

        {/* Skills Icon */}
        <div className='w-full md:w-[80%] grid grid-cols-4 gap-6 border p-4 overflow-x-auto'>

          {
            skill.map((data) => (
              <div>
                <p>{data.name}</p>
                <p>{data.category}</p>
              </div>
            ))
          }
        </div>


      </div>
    </section>
  )
}

export default Skill
