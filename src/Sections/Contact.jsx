import React, { useContext, useState } from 'react'


// REACT ICONS

import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



// Context
import { ThemeContext } from '../Context/ThemeProvider';




const Contact = () => {


  const { theme, toggleTheme } = useContext(ThemeContext);





  // NAME
  const [name, setName] = useState("");

  // EMAIL
  const [email, setEmail] = useState("");

  //Message
  const [msg, setMeg] = useState("");


  // ERROR MESSAGE
  const [errMsg, setErrMsg] = useState({
    emailError: " ",
    nameError: " "
  })


  const [formValid, setFormValid] = useState(false);



  return (

    <section className={` ${theme === "dark" ? "bg-linear-to-r from-zinc-900 to-neutral-800  text-white" : "bg-linear-to-b from-zinc-100 via-zinc-200 to-neutral-200"} py-10 lg:py-20 px-5`} >




      <div className='flex flex-col max-w-7xl mx-auto  '>

        <div className='flex justify-center items-center mb-10 md:mb-8'>

          <h2 className='text-2xl sm:text-3xl md:text-4xl  font-semibold'>Get In Touch</h2>

          <div className='hidden md:block border-t grow ml-4'></div>
        </div>


        <div className='flex flex-col-reverse md:flex-row justify-between  md:p-7 gap-x-6 gap-y-12 '>

          <div className='w-full lg:w-[55%]  '>

            <ul className='p-1.5 md:p-3 space-y-7'>

              {/* EMAIL */}
              <li className='group flex  px-2.5 py-2 md:py-4 rounded-lg items-center space-x-5 bg-blue-950/20 overflow-hidden shadow-xl
              ring-1 ring-transparent hover:ring-gray-300/50 transition-all duration-300'>
                <span className='rounded-sm p-1.5 bg-gray-700  text-2xl font-bold transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl'>
                  <CiMail />
                </span>

                <div className='flex flex-col'>
                  <span className='text-md md:text-lg font-semibold text-green-400'>EMAIL</span>
                  <a href="" className='text-sm md:text-md font-normal'>deep651965@gmail.com</a>
                </div>
              </li>


              {/* NUMBER */}
              <li className='group flex  px-2.5 py-2 md:py-4 rounded-lg items-center space-x-5 bg-blue-950/20 overflow-hidden shadow-xl
              ring-1 ring-transparent hover:ring-gray-300/50 transition-all duration-300'>
                <span className='rounded-sm p-1.5 bg-gray-700  text-2xl font-bold transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl'>
                  <FaPhone />
                </span>

                <div className='flex flex-col'>
                  <span className='text-md md:text-lg font-semibold text-green-400'>PHONE</span>
                  <a href="" className='text-sm md:text-md font-normal'> +91-7982294460</a>
                </div>
              </li>


              {/* LOCATION */}
              <li className='group flex  px-2.5 py-2 md:py-4 rounded-lg items-center space-x-5 bg-blue-950/20 overflow-hidden shadow-xl
              ring-1 ring-transparent hover:ring-gray-300/50 transition-all duration-300'>
                <span className='rounded-sm p-1.5 bg-gray-700  text-2xl font-bold transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl'>
                  <IoLocationSharp />
                </span>

                <div className='flex flex-col'>
                  <span className='text-md md:text-lg font-semibold text-green-400'>LOCATION</span>
                  <a href="" className='text-sm md:text-md font-normal'>Delhi</a>
                </div>
              </li>

            </ul>



            <div className='flex gap-x-6 text-2xl  lg:text-3xl p-3 justify-center mt-3'>

              {/* Github */}
              <span className={`p-2 rounded-full border ${theme === "dark" ? " hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} transition-all ease-in-out duration-200`}>
                <FaGithub size={32} />
              </span>

              {/* LinkedIn */}
              <span className={` p-2 rounded-full border ${theme === "dark" ? " hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} transition-all ease-in-out duration-200`}>
                <FaLinkedinIn size={32} />
              </span>


              {/* Leetcode */}
              <span className={` p-2 rounded-full border ${theme === "dark" ? " hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} transition-all ease-in-out duration-200`}>
                <SiLeetcode size={32} />

              </span>
            </div>
          </div>





          {/* FORM */}
          <from className='w-full lg:w-[40%] px-5 py-7 border rounded-xl space-y-4 md:space-y-7 '>

            <p className='text-xl font-bold'>Send a Message</p>

            <div className='flex flex-col gap-y-2'>
              <label className='text-sm md:text-lg font-semibold'>Name</label>
              <input type="text" id="name" className='h-12 border p-2 bg-gray-400/10 focus:bg-gray-400/30 rounded-md focus:ring-2 focus:ring-green-100 ' />
            </div>


            <div className='flex flex-col gap-y-2'>
              <label className='text-sm md:text-lg font-semibold'>E-mail</label>
              <input type="email" id="email" className='h-12 border p-2 bg-gray-400/10 focus:bg-gray-400/30 rounded-md' />
            </div>


            <div className='flex flex-col gap-y-2'>
              <label className='text-sm md:text-lg font-semibold'>Message</label>
              <textarea name="message" className='h-12 border p-2 bg-gray-400/10 focus:bg-gray-400/30 rounded-md min-h-20 max-h-40'></textarea>
            </div>


            <button className='mt-3 px-10 py-2 bg-green-400/60 text-white rounded-lg transition-colors hover:bg-green-500 ease-in-out duration-300'>
              Send
            </button>


          </from>





        </div>


      </div>
    </section>
  )
}

export default Contact
