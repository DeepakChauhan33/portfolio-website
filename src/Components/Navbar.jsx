import React, { useContext } from 'react'


import { ThemeContext } from '../Context/ThemeProvider';

// ICONS
import { IoIosSunny } from "react-icons/io";


const Navbar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    console.log(theme);


    return (

        <header className='w-full bg-transparent px-10  border-b '>

            <nav className='h-17  flex justify-between lg:justify-around items-center'>

                {/* Logo */}
                <div>
                    logo
                </div>


                {/* Section Links  */}
                <ul className='hidden md:flex justify-between gap-10 lg:gap-15 border rounded-md px-5 py-2'>
                    <li className='text-lg font-semibold border-b-2 border-transparent hover:border-black hover:border-b-2 hover:text-white cursor-pointer'>Skills</li>
                    <li className='text-lg font-semibold border-b-2 border-transparent hover:border-black hover:border-b-2 hover:text-white cursor-pointer'>Projects</li>
                    <li className='text-lg font-semibold border-b-2 border-transparent hover:border-black hover:border-b-2 hover:text-white cursor-pointer'>About</li>
                    <li className='text-lg font-semibold border-b-2 border-transparent hover:border-black hover:border-b-2 hover:text-white cursor-pointer'>Contact</li>
                </ul>



                <div className='flex gap-2 lg:gap-6'>
                    <button className='border px-4 lg:w-30 text-md font-semibold py-1.5 '>Talk</button>
                    <button onClick={() => toggleTheme("light")}>
                        <IoIosSunny />
                    </button>
                </div>
            </nav>

        </header>
    )
}

export default Navbar
