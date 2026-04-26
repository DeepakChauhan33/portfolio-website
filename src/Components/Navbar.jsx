import React, { useContext } from 'react'


import { motion, AnimatePresence } from "framer-motion";

import { ThemeContext } from '../Context/ThemeProvider';

// ICONS
import { IoIosSunny } from "react-icons/io";
import { GoMoon } from "react-icons/go";


const Navbar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);


    return (

        <header className={`w-full  px-10  border-b border-stone-900 ${theme === "dark" ? "bg-linear-to-r from-neutral-900 to-neutral-700 text-white" : "bg-white"}`}>

            <nav className='h-18 max-w-8xl flex justify-between lg:justify-around items-center'>

                {/* Logo */}
                <div>
                    logo
                </div>


                {/* Section Links  */}
                <ul className='hidden md:flex justify-between gap-10 lg:gap-15 border border-gray-50  bg-neutral-100/25      rounded-md px-5 py-2'>
                    <li className='text-md font-semibold border-b-2 border-transparent hover:border-black hover:border-b-2 hover:text-white cursor-pointer'>Skills</li>
                    <li className='text-md font-semibold border-b-2 border-transparent hover:border-black hover:border-b-2 hover:text-white cursor-pointer'>Projects</li>
                    <li className='text-md font-semibold border-b-2 border-transparent hover:border-black hover:border-b-2 hover:text-white cursor-pointer'>About</li>
                    <li className='text-md font-semibold border-b-2 border-transparent hover:border-black hover:border-b-2 hover:text-white cursor-pointer'>Contact</li>
                </ul>



                <div className='flex gap-2 lg:gap-6 items-center'>

                    <button className='border text-md px-6 sm:px-8 lg:px-10 text-md font-normal py-1 md:py-1.5 transition-colors ease-in-out duration-300     hover:bg-neutral-200 hover:text-black '>Talk</button>


                    <button className='h-fit ' onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}>
                        {theme === "light" ? (
                            <motion.div className=''
                                key="moon"
                                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                transition={{ duration: 0.5 }}
                            >
                                <GoMoon className='transition-transform hover:scale-130 ease-in-out duration-200' />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="sun"
                                initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                transition={{ duration: 0.5 }}
                            >
                                <IoIosSunny className='text-amber-200 transition-transform hover:scale-130 ease-in-out duration-200' />
                            </motion.div>
                        )}
                    </button>

                </div>
            </nav>

        </header>
    )
}

export default Navbar
