import React from 'react'

const Hero = () => {
  return (
    <section className='h-[90vh] bg-blue-100 p-2 sm:p-4 md:p-7 lg:p-15 '>


      <div className=' flex flex-col justify-center items-center gap-8 h-full bg-green-100'>


        <h2 className='text-3xl xs:text-4xl sm:text-6xl lg:text-7xl text-center'>
          Hi, I'm Deepak, a <br />
          <strong className='text-green-300'> Frontend</strong> Developer
        </h2>


        <p className='w-full md:w-1/2 text-center text-sm sm:text-md lg:text-lg font-normal'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus inventore dolor tempora nihil, asperiores ab mollitia aliquid reprehenderit placeat dolorum?
        </p>


        <div className='space-x-6 p-3'>
          <button className='border px-4 py-2 md:px-6 md:py-3 lg:px-8 '>Download CV</button>
          <button className='border px-4 py-2 md:px-6 md:py-3 lg:px-8 '>Connect</button>
        </div>


      </div>

    </section>
  )
}

export default Hero
