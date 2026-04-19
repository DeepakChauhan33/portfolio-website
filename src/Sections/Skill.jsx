import React from 'react'
import SkillBar from '../Components/SkillBar'

const Skill = () => {
  return (
    <section className='p-5 sm:p-8 md:p-11 lg:p-15  flex flex-col md:flex-row gap-x-8'>

      <h2>Skills</h2>

      {/* Option */}
      <div className='w-full md:w-[20%] '>
        {/* Component */}
        <SkillBar />
      </div>

      {/* Skills Icon */}
      <div className='w-full md:w-[80%] grid grid-cols-4 gap-6 border p-4'>

        <div className='border h-22 w-22'>
          ICON
        </div>

        <div className='border h-22 w-22'>
          ICON
        </div>

        <div className='border h-22 w-22'>
          ICON
        </div>

        <div className='border h-22 w-22'>
          ICON
        </div>

        <div className='border h-22 w-22'>
          ICON
        </div>

        <div className='border h-22 w-22'>
          ICON
        </div>

        <div className='border h-22 w-22'>
          ICON
        </div>

        <div className='border h-22 w-22'>
          ICON
        </div>

        <div className='border h-22 w-22'>
          ICON
        </div>

        <div className='border h-22 w-22'>
          ICON
        </div>
      </div>
    </section>
  )
}

export default Skill
