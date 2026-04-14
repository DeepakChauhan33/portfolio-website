import React from 'react'

const Navbar = () => {
    return (

        <header className='w-full bg-gray-400 px-10 '>

            <nav className='h-17  flex justify-around items-center'>

                {/* Logo */}
                <div>
                    logo
                </div>


                {/* Section Links  */}
                <ul className=' flex justify-between gap-15 border rounded-md px-5 py-2'>
                    <li className='text-lg font-semibold border-b-2 border-transparent hover:border-black hover:border-b-2 hover:text-white cursor-pointer'>Skills</li>
                    <li className='text-lg font-semibold border-b-2 border-transparent hover:border-black hover:border-b-2 hover:text-white cursor-pointer'>Projects</li>
                    <li className='text-lg font-semibold border-b-2 border-transparent hover:border-black hover:border-b-2 hover:text-white cursor-pointer'>About</li>
                    <li className='text-lg font-semibold border-b-2 border-transparent hover:border-black hover:border-b-2 hover:text-white cursor-pointer'>Contact</li>
                </ul>



                <div className='flex gap-6'>
                    <button className='border w-30 text-md font-semibold py-1.5 '>Talk</button>
                    <button className='border w-30 text-md font-semibold py-1.5 '>Download CV</button>
                </div>
            </nav>

        </header>
    )
}

export default Navbar
