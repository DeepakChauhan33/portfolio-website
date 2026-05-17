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


// Form Helper Function
import { validateName } from '../Helper/FormValidation'
import { validateEmail } from '../Helper/FormValidation';




const Contact = () => {


  const { theme, toggleTheme } = useContext(ThemeContext);





  // NAME
  const [name, setName] = useState("");

  // EMAIL
  const [email, setEmail] = useState("");

  //Message
  const [msg, setMsg] = useState("");


  const [formValid, setFormValid] = useState(false);

  // ERROR MESSAGE
  const [errMsg, setErrMsg] = useState({
    emailError: " ",
    nameError: " "
  })








  const handleChange = (e) => {

    const { id, value } = e.target;

    // NAME
    if (id === "name") {

      setName(value);

      const error = validateName(value);

      setErrMsg((prev) => ({
        ...prev,
        nameError: error
      }));
    }

    // EMAIL
    if (id === "email") {

      setEmail(value);

      const error = validateEmail(value);

      setErrMsg((prev) => ({
        ...prev,
        emailError: error
      }));
    }
  }






  const handleSubmit = (e) => {

    e.preventDefault();

    console.log('click')
    // Validate
    const nameError = validateName(name);
    const emailError = validateEmail(email);

    // Set Errors
    setErrMsg({
      nameError,
      emailError
    });

    // Check Errors
    if (nameError || emailError) {
      return;
    }


    setName(" ");
    setEmail(" ");
    setMsg(" ");

    alert("Form submit successfully");


  }





  return (

    <section id='contact' className={` ${theme === "dark" ? "bg-gradient-to-b from-black via-zinc-950 to-neutral-950  text-white" : "bg-gradient-to-br from-slate-100 via-gray-200 to-slate-300"} py-10 lg:py-20 px-5`} >




      <div className='flex flex-col max-w-7xl mx-auto  '>

        <div className='flex justify-center items-center mb-10 md:mb-8'>

          <h2 className='text-2xl sm:text-3xl md:text-4xl  font-semibold'>Get In Touch</h2>

          <div className='hidden md:block border-t grow ml-4'></div>
        </div>


        <div className='flex flex-col-reverse md:flex-row justify-between  md:p-7 gap-x-6 gap-y-12 '>

          <div className='w-full lg:w-[55%]  '>

            <ul className='p-1.5 md:p-3 space-y-7'>

              {/* EMAIL */}
              <li className='group flex  px-2.5 py-2 md:py-4 rounded-lg items-center space-x-5 bg-gradient-to-r from-gray-200 via-slate-100 to-gray-200 overflow-hidden shadow-xl
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
              <li className='group flex  px-2.5 py-2 md:py-4 rounded-lg items-center space-x-5 bg-gradient-to-r from-gray-200 via-slate-100 to-gray-200 overflow-hidden shadow-xl
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
              <li className='group flex  px-2.5 py-2 md:py-4 rounded-lg items-center space-x-5 bg-gradient-to-r from-gray-200 via-slate-100 to-gray-200 overflow-hidden shadow-xl
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
              <a
                target='_blank'
                href='https://github.com/DeepakChauhan33'
                className={`p-2 rounded-full border ${theme === "dark" ? " hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} transition-all ease-in-out duration-200`}>
                <FaGithub size={32} />
              </a>


              {/* LinkedIn */}
              <a
                target='_blank'
                href='https://www.linkedin.com/in/dpk-chauhan/'
                className={` p-2 rounded-full border ${theme === "dark" ? " hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} transition-all ease-in-out duration-200`}>
                <FaLinkedinIn size={32} />
              </a>



              {/* Leetcode */}
              <a
                target='_blank'
                href='https://leetcode.com/u/Deepak_Chauhan1204/'
                className={` p-2 rounded-full border ${theme === "dark" ? " hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} transition-all ease-in-out duration-200`}>
                <SiLeetcode size={32} />

              </a>

            </div>
          </div>





          {/* FORM */}
          <form
            className='w-full lg:w-[40%] px-5 py-7 border rounded-xl space-y-4 md:space-y-7'
            onSubmit={handleSubmit}>

            <p className='text-xl font-bold'>Send a Message</p>

            <div className='flex flex-col gap-y-2'>
              <label className='text-sm md:text-lg font-semibold' htmlFor='name'>Name</label>
              <input type="text" id="name" onChange={handleChange} value={name} className='h-12 border p-2 bg-gray-400/10 focus:bg-gray-400/30 rounded-md focus:ring-2 focus:ring-green-100 ' />
              <p className='text-red-500 font-normal text-sm'>{errMsg.nameError}</p>
            </div>


            <div className='flex flex-col gap-y-2'>
              <label className='text-sm md:text-lg font-semibold' htmlFor='email'>E-mail</label>
              <input type="email" id="email" onChange={handleChange} value={email} className='h-12 border p-2 bg-gray-400/10 focus:bg-gray-400/30 rounded-md' />
              <p className='text-red-500 font-normal text-sm'>{errMsg.emailError}</p>
            </div>


            <div className='flex flex-col gap-y-2'>
              <label className='text-sm md:text-lg font-semibold'>Message</label>
              <textarea name="message" onChange={(e) => setMsg(e.target.value)} value={msg} className='h-12 border p-2 bg-gray-400/10 focus:bg-gray-400/30 rounded-md min-h-20 max-h-40'></textarea>
            </div>


            <button className='mt-3 px-10 py-2 bg-green-400/60 text-white rounded-lg transition-colors hover:bg-green-500 ease-in-out duration-300'>
              Send
            </button>


          </form>





        </div>


      </div>
    </section>
  )
}

export default Contact
