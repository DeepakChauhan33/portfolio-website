import React, { useContext } from 'react'


// React Icons
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCodeBranch } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";




import { ThemeContext } from '../Context/ThemeProvider';


const BottomNavbar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);


    return (
        <nav className='fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 rounded-full p-0.5 border border-gray-500/50'>

            <ul className={`flex gap-6 px-6 py-2 rounded-full  ${theme === "dark" ? "bg-linear-to-r from-[#0f172a]/95 via-[#1e1b4b]/95 to-[#172554]/95" : "bg-linear-to-r from-[#0f172a]/95 via-[#1e1b4b]/95 to-[#172554]/95"} backdrop-blur-md border border-white/20 shadow-lg text-white`}>


                <a href="#home">
                    <li className='flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300 ease-in-out'>
                        <MdOutlineVerticalAlignTop className='text-lg sm:text-xl' />
                        <span className='text-xs sm:text-sm'>Home</span>
                    </li>
                </a>

                <a href="#skill">
                    <li className='flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300 ease-in-out'>
                        <FaCode className='text-lg sm:text-xl' />
                        <span className='text-xs sm:text-sm'>Skills</span>
                    </li>
                </a>

                <a href="#projects">
                    <li className='flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300 ease-in-out'>
                        <AiOutlineFundProjectionScreen className='text-lg sm:text-xl' />
                        <span className='text-xs sm:text-sm'>Projects</span>
                    </li>
                </a>


                <a href="#activity">
                    <li className='flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300 ease-in-out'>
                        <FaCodeBranch className='text-lg sm:text-xl' />
                        <span className='text-xs sm:text-sm'>Activity</span>
                    </li>
                </a>



                <a href="#contact">
                    <li className='flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300 ease-in-out'>
                        <MdOutlineContactPage className='text-lg sm:text-xl' />
                        <span className='text-xs sm:text-sm'>Contact</span>
                    </li>
                </a>


            </ul>

        </nav >
    )
}

export default BottomNavbar
