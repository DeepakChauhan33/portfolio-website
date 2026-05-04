import React, { useContext } from 'react'


// REACT ICONS

import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



// Context
import { ThemeContext } from '../Context/ThemeProvider';




const Contact = () => {


  const { theme, toggleTheme } = useContext(ThemeContext);

  return (

    <section className={` ${theme === "dark" ? "bg-linear-to-r from-zinc-900 to-neutral-800  text-white" : "bg-linear-to-b from-zinc-100 via-zinc-200 to-neutral-200"} py-20`} >




      <div className='flex flex-col max-w-7xl mx-auto  '>

        <div className='flex justify-center items-center mb-8'>

          <h2 className='text-3xl'>Get In Touch</h2>

          <div className='border-t grow ml-4'></div>
        </div>


        <div className='flex flex-col md:flex-row p-7 gap-x-6 gap-y-12'>


          {/* FORM */}
          <from className='w-full lg:w-1/2 p-2 border space-y-6 '>

            <div className='flex flex-col gap-y-1'>
              <label className='text-lg font-normal'>Name</label>
              <input type="text" id="name" className='h-9 border rounded-md' />
            </div>


            <div className='flex flex-col gap-y-1'>
              <label className='text-lg font-normal'>E-mail</label>
              <input type="email" id="email" className='h-9 border rounded-md' />
            </div>


            <div className='flex flex-col gap-y-1'>
              <label className='text-lg font-normal'>Message</label>
              <textarea name="message" className='h-9 border rounded-md min-h-18'></textarea>
            </div>


            <button className='px-4 py-2 bg-green-400 text-white rounded-lg transition-colors hover:bg-green-500 ease-in-out duration-300'>
              Send Message
            </button>


          </from>




          <div className='w-full lg:w-1/2 border '>

            <ul className='p-3 space-y-7'>
              <li className='flex border box-border border-transparent hover:border-green-200 p-2 py-4 rounded-lg items-center space-x-4 bg-blue-950/20'>
                <span className='rounded-full px-2 py-1 border text-xl font-bold'>
                  @
                </span>

                <div className='flex flex-col'>
                  <span className='text-lg font-semibold'>EMAIL</span>
                  <a href="" className='text-sm lg:text-lg font-normal'>deep651965@gmail.com</a>

                </div>
              </li>


              <li className='flex border box-border border-transparent hover:border-green-200 p-2 py-4 rounded-lg items-center space-x-4 bg-blue-950/20'>
                <span className='rounded-full p-1.5 border text-xl'>
                  <FaPhone />
                </span>
                <a href="" className='text-sm lg:text-lg font-semibold'>deep651965@gmail.com</a>
              </li>


              <li className='flex border box-border border-transparent hover:border-green-200 p-2 py-4 rounded-lg items-center space-x-4 bg-blue-950/20'>
                <span className='rounded-full p-1.5 border text-2xl'>
                  <IoLocationSharp />
                </span>
                <a href="" className='text-sm lg:text-lg font-semibold'>deep651965@gmail.com</a>
              </li>

            </ul>



            <div className='flex gap-x-6 text-2xl  lg:text-3xl p-3 justify-center '>

              {/* Github */}
              <span className={`p-2 rounded-full border ${theme === "dark" ? " hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} transition-all ease-in-out duration-200`}>
                <FaGithub />
              </span>

              {/* LinkedIn */}
              <span className={`p-2 rounded-full border ${theme === "dark" ? " hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} transition-all ease-in-out duration-200`}>
                <FaLinkedinIn />
              </span>


              {/* Leetcode */}
              <span className={`p-2 rounded-full border ${theme === "dark" ? " hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} transition-all ease-in-out duration-200`}>
                <SiLeetcode />

              </span>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Contact
