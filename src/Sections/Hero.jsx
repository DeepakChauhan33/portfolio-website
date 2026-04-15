import React from 'react'

const Hero = () => {
  return (
    <main className='h-[117vh] pt-25  bg-blue-100 p-10'>

      <section className='border p-3'>


        {/* LEFT DIV */}
        <div className='w-[40%] border p-2 flex- flex-col space-y-6 '>

          {/* HEADING */}
          <h1 className='text-4xl'>
            Lorem ipsum dolor sit amet.
          </h1>


          {/* DESCRIPTION */}
          <div>
            <p className='text-xl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio atque quos quaerat deserunt vero totam facilis exercitationem ipsum odio reprehenderit eligendi, perferendis autem molestiae? Ratione excepturi qui cumque beatae eligendi.
            </p>
          </div>


          {/* ABOUT ME BUTTON */}
          <div>
            <button className='px-6 py-1.5 border bg-green-100'>
              ABout me
            </button>
          </div>


          {/* SOCIAL LINKS */}
          <div className='border py-5'>

          </div>
        </div>
      </section>

    </main>
  )
}

export default Hero
