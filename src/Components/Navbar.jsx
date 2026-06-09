import React, { useState, useContext } from 'react'


// LOGO
import logo from '../assets/logo.png';


import { motion, AnimatePresence } from "framer-motion";

import { ThemeContext } from '../Context/ThemeProvider';

// ICONS
import { IoIosSunny } from "react-icons/io";
import { GoMoon } from "react-icons/go";



// Dialog Box
import Dialog from '../Components/DialogBox';



const Navbar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);


    const [isOpen, setIsOpen] = useState(false);



    return (

        <header className={`w-full  px-4  border-b ${theme === "dark" ? "border-transparent" : "border-gray-300"} transition-colors ease-in-out duration-300 ${theme === "dark" ? "bg-linear-to-r from-neutral-900 to-neutral-700 text-white" : "bg-linear-to-r from-slate-100 to-white "}`}>

            <nav className='h-18 max-w-8xl  flex justify-between lg:justify-around items-center'>

                {/* Logo */}
                <div className='h-12  w-16  flex items-center '>
                    <a href="#home">
                        <img src={logo} alt="logo" className='object-cover' />
                    </a>
                </div>


                {/* Section Links  */}
                <ul className={`hidden md:flex justify-between gap-6 lg:gap-8 font-semibold ring-1 ring-stone-400 hover:ring-stone-300 bg-neutral-100/25 rounded-md px-5 py-2 `}>

                    <a href="#about">
                        <li className='text-md border-b-2 border-transparent transition-all hover:text-green-400 cursor-pointer hover:bg-green-300/20 px-2.5 rounded-lg ease-in-out duration-300 '>About
                        </li>
                    </a>


                    <a href="#skill">
                        <li className='text-md border-b-2 border-transparent transition-all hover:text-green-400 cursor-pointer hover:bg-green-300/20 px-2.5 rounded-lg ease-in-out duration-300 '>Skills
                        </li>
                    </a>

                    <a href="#projects">
                        <li className='text-md border-b-2 border-transparent transition-all hover:text-green-400 cursor-pointer hover:bg-green-300/20 px-2.5 rounded-lg ease-in-out duration-300 '>Projects
                        </li>
                    </a>


                    <a href="#activity">
                        <li className='text-md border-b-2 border-transparent transition-all hover:text-green-400 cursor-pointer hover:bg-green-300/20 px-2.5 rounded-lg ease-in-out duration-300 '>Activity
                        </li>
                    </a>


                    <a href="#contact">
                        <li className='text-md border-b-2 border-transparent transition-all hover:text-green-400 cursor-pointer hover:bg-green-300/20 px-2.5 rounded-lg ease-in-out duration-300 '>Contact
                        </li>
                    </a>



                </ul>



                <div className='flex gap-4 lg:gap-6 items-center'>

                    <button
                        onClick={() => setIsOpen(true)}
                        className={`bg-white/10 backdrop-blur-md ring-1 px-4 py-2 rounded-md font-bold transition-all hover:scale-103 duration-300  cursor-pointer  ${theme === "dark" ? "text-[#7EF2B1] hover:text-gray-100 ring-[#7EF2B1]/40 " : "text-[#0c0f0d] hover:text-gray-700 ring-stone-400"}`}

                    >
                        Hire me
                    </button>

                    <Dialog
                        isOpen={isOpen}
                        closeModal={() => setIsOpen(false)}
                    />


                    <button className='h-fit ' onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}>
                        {theme === "light" ? (
                            <motion.div className=''
                                key="moon"
                                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                transition={{ duration: 0.5 }}
                            >
                                <GoMoon className='text-gray-600/70 transition-transform hover:scale-110 ease-in-out duration-200' size={20} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="sun"
                                initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                transition={{ duration: 0.5 }}
                            >
                                <IoIosSunny className='text-amber-200 transition-transform hover:scale-110 ease-in-out duration-200' size={20} />
                            </motion.div>
                        )}
                    </button>

                </div>
            </nav>

        </header>
    )
}

export default Navbar
