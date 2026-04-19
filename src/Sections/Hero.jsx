import React from 'react'

const Hero = () => {
  return (
    <main className='h-screen pt-19  lg:pt-25  bg-blue-100 p-2 sm:p-4 md:p-7 lg:p-10'>


      <section className=' flex flex-col justify-center items-center gap-8 h-full bg-green-100'>


        <h2 className='text-3xl xs:text-4xl sm:text-6xl lg:text-7xl text-center'>
          Hi, I'm Deepak, a <br />
          <strong className='text-green-300'> Frontend</strong> Developer
        </h2>


        <p className='w-full md:w-1/2 text-center text-sm sm:text-md lg:text-lg font-normal'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus inventore dolor tempora nihil, asperiores ab mollitia aliquid reprehenderit placeat dolorum?
        </p>


        <div className='border p-3'>
          <button className='border px-4 py-2 md:px-5 md:py-3 lg:py-4'>Download CV</button>
          <button className='border px-4 py-2 md:px-5 md:py-3 lg:py-4'>Connect</button>
        </div>


      </section>

    </main>
  )
}

export default Hero
