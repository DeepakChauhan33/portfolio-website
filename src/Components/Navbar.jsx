import React, { useContext } from 'react'


import { motion, AnimatePresence } from "framer-motion";

import { ThemeContext } from '../Context/ThemeProvider';

// ICONS
import { IoIosSunny } from "react-icons/io";
import { GoMoon } from "react-icons/go";


const Navbar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);


    return (

        <header className={`w-full  px-10  border-b border-stone-900 transition-colors ease-in-out duration-300 ${theme === "dark" ? "bg-linear-to-r from-neutral-900 to-neutral-700 text-white" : "bg-white"}`}>

            <nav className='h-18 max-w-8xl flex justify-between lg:justify-around items-center'>

                {/* Logo */}
                <div>
                    <a href="#home">
                        logo
                    </a>
                </div>


                {/* Section Links  */}
                <ul className='hidden md:flex justify-between gap-6 lg:gap-8 ring-1 ring-gray-100 hover:ring-stone-300 bg-neutral-100/25 rounded-md px-5 py-2'>

                    <a href="#about">
                        <li className='text-md font-normal border-b-2 border-transparent transition-all hover:text-green-400 cursor-pointer hover:bg-green-300/20 px-2.5 rounded-lg ease-in-out duration-300 '>About
                        </li>
                    </a>


                    <a href="#skill">
                        <li className='text-md font-normal border-b-2 border-transparent transition-all hover:text-green-400 cursor-pointer hover:bg-green-300/20 px-2.5 rounded-lg ease-in-out duration-300 '>Skills
                        </li>
                    </a>

                    <a href="#projects">
                        <li className='text-md font-normal border-b-2 border-transparent transition-all hover:text-green-400 cursor-pointer hover:bg-green-300/20 px-2.5 rounded-lg ease-in-out duration-300 '>Projects
                        </li>
                    </a>


                    <a href="#activity">
                        <li className='text-md font-normal border-b-2 border-transparent transition-all hover:text-green-400 cursor-pointer hover:bg-green-300/20 px-2.5 rounded-lg ease-in-out duration-300 '>Activity
                        </li>
                    </a>


                    <a href="#contact">
                        <li className='text-md font-normal border-b-2 border-transparent transition-all hover:text-green-400 cursor-pointer hover:bg-green-300/20 px-2.5 rounded-lg ease-in-out duration-300 '>Contact
                        </li>
                    </a>



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
