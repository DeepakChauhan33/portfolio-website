import React from 'react'


// React Icons
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";


const BottomNavbar = () => {
    return (
        <nav className='fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 rounded-full p-0.5 border border-gray-500/50'>

            <ul className='flex gap-7 px-6 py-2 rounded-full bg-blue-800/50 backdrop-blur-md border border-white/20 shadow-lg text-white'>


                <li className='flex flex-col items-center justify-center'>
                    <MdOutlineVerticalAlignTop className='text-lg sm:text-xl' />
                    <span className='text-xs sm:text-sm'>Home</span>
                </li>

                <li className='flex flex-col items-center justify-center'>
                    <FaCode className='text-lg sm:text-xl' />
                    <span className='text-xs sm:text-sm'>Skills</span>
                </li>

                <li className='flex flex-col items-center justify-center'>
                    <AiOutlineFundProjectionScreen className='text-lg sm:text-xl' />
                    <span className='text-xs sm:text-sm'>Projects</span>
                </li>

                <li className='flex flex-col items-center justify-center'>
                    <MdOutlineContactPage className='text-lg sm:text-xl' />
                    <span className='text-xs sm:text-sm'>Contact</span>
                </li>


            </ul>

        </nav >
    )
}

export default BottomNavbar
