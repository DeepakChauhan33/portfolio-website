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






  const handleSubmit = async (e) => {

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


    const formData = {
      access_Key: "6a17fdbb-b129-4399-9954-4fc8f8ecf88a",
      name,
      email,
      message: msg
    };


    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");

        setName("");
        setEmail("");
        setMsg("");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");


    }
  }





  return (

    <section
      id='contact'
      className={`
          ${theme === "dark"
          ? "bg-gradient-to-b from-black via-zinc-950 to-neutral-950 text-white"
          : "bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e2e8f0] text-gray-900"
        } py-10 lg:py-20 px-5`}
    >

      <div className='flex flex-col max-w-7xl mx-auto'>

        {/* HEADING */}
        <div className='flex justify-center items-center mb-10 md:mb-8'>

          <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>
            Get In Touch
          </h2>

          <div className="flex-grow h-[3px] ml-4 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </div>



        <div className='flex flex-col-reverse md:flex-row justify-between md:p-7 gap-x-6 gap-y-12'>

          {/* LEFT SIDE */}
          <div className='w-full lg:w-[55%]'>

            <ul className='p-1.5 md:p-3 space-y-7'>

              {/* EMAIL */}
              <li className={`group flex px-4 py-4 rounded-lg items-center space-x-5 overflow-hidden
                  transition-all duration-300

                  ${theme === "dark"
                  ? "bg-blue-950/30 border border-white/10 hover:border-gray-500"
                  : "bg-white/70 border border-gray-200 shadow-lg backdrop-blur-md hover:shadow-xl"
                }`}>

                <span className={`rounded-xl p-3 text-2xl font-bold
                      transition-transform duration-300 ease-in-out
                      group-hover:scale-105

                      ${theme === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-teal-700 text-white"
                  }`}>
                  <CiMail />
                </span>

                <div className='flex flex-col'>

                  <span className={`text-md md:text-lg font-semibold
                        ${theme === "dark"
                      ? "text-green-400"
                      : "text-teal-600"
                    }`}>
                    EMAIL
                  </span>

                  <a href="" className='text-sm md:text-md font-normal'>
                    deep651965@gmail.com
                  </a>

                </div>
              </li>



              {/* PHONE */}
              <li className={`group flex px-4 py-4 rounded-lg items-center space-x-5 overflow-hidden
          transition-all duration-300

          ${theme === "dark"
                  ? "bg-blue-950/30 border border-white/10 hover:border-gray-500"
                  : "bg-white/70 border border-gray-200 shadow-lg backdrop-blur-md hover:shadow-xl"
                }`}>

                <span className={`rounded-xl p-3 text-2xl font-bold
            transition-transform duration-300 ease-in-out
            group-hover:scale-105

            ${theme === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-teal-700 text-white"
                  }`}>
                  <FaPhone />
                </span>

                <div className='flex flex-col'>

                  <span className={`text-md md:text-lg font-semibold
              ${theme === "dark"
                      ? "text-green-400"
                      : "text-teal-600"
                    }`}>
                    PHONE
                  </span>

                  <a href="" className='text-sm md:text-md font-normal'>
                    +91-7982294460
                  </a>

                </div>
              </li>



              {/* LOCATION */}
              <li className={`group flex px-4 py-4 rounded-lg items-center space-x-5 overflow-hidden
          transition-all duration-300

                  ${theme === "dark"
                  ? "bg-blue-950/30 border border-white/10 hover:border-gray-500"
                  : "bg-white/70 border border-gray-200 shadow-lg backdrop-blur-md hover:shadow-xl"
                }`}>

                <span className={`rounded-xl p-3 text-2xl font-bold
            transition-transform duration-300 ease-in-out
            group-hover:scale-105

                    ${theme === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-teal-700 text-white"
                  }`}>
                  <IoLocationSharp />
                </span>

                <div className='flex flex-col'>

                  <span className={`text-md md:text-lg font-semibold
                      ${theme === "dark"
                      ? "text-green-400"
                      : "text-teal-600"
                    }`}>
                    LOCATION
                  </span>

                  <a href="" className='text-sm md:text-md font-normal'>
                    Delhi
                  </a>

                </div>
              </li>

            </ul>



            {/* SOCIAL LINKS */}


            <div className='flex gap-x-6 text-2xl lg:text-3xl p-3 justify-center mt-3'>

              {/* GITHUB */}
              <a
                target='_blank'
                href='https://github.com/DeepakChauhan33'
                className={`p-3 rounded-full border transition-all duration-300

                    ${theme === "dark"
                    ? "border-white/20 hover:bg-white hover:text-black"
                    : "border-gray-300 bg-white hover:bg-black hover:text-white shadow-md"
                  }`}>
                <FaGithub size={30} />
              </a>


              {/* LINKEDIN */}
              <a
                target='_blank'
                href='https://www.linkedin.com/in/dpk-chauhan/'
                className={`p-3 rounded-full border transition-all duration-300

                  ${theme === "dark"
                    ? "border-white/20 hover:bg-white hover:text-black"
                    : "border-gray-300 bg-white hover:bg-black hover:text-white shadow-md"
                  }`}>
                <FaLinkedinIn size={30} />
              </a>


              {/* LEETCODE */}
              <a
                target='_blank'
                href='https://leetcode.com/u/Deepak_Chauhan1204/'
                className={`p-3 rounded-full border transition-all duration-300

                  ${theme === "dark"
                    ? "border-white/20 hover:bg-white hover:text-black"
                    : "border-gray-300 bg-white hover:bg-black hover:text-white shadow-md"
                  }`}>
                <SiLeetcode size={30} />
              </a>

            </div>

          </div>



          {/* FORM */}
          <form
            className={`w-full lg:w-[40%] px-5 py-7 rounded-2xl space-y-4 md:space-y-7

              ${theme === "dark"
                ? "bg-black/20 border border-white/40"
                : "bg-white/60 border border-gray-300 shadow-xl backdrop-blur-md"
              }`}
            onSubmit={handleSubmit}
          >

            <p className='text-xl font-bold'>Send a Message</p>



            {/* NAME */}
            <div className='flex flex-col gap-y-2'>

              <label
                className='text-sm md:text-lg font-semibold'
                htmlFor='name'>
                Name
              </label>

              <input
                type="text"
                id="name"
                onChange={handleChange}
                value={name}
                className={`h-12 border p-2 rounded-md transition-all duration-300

            ${theme === "dark"
                    ? "bg-gray-400/10 focus:bg-gray-400/30 border-white/10 text-white"
                    : "bg-gray-50 border-gray-300 text-gray-800 focus:bg-white"
                  }`}
              />

              <p className='text-red-500 text-sm'>
                {errMsg.nameError}
              </p>

            </div>



            {/* EMAIL */}
            <div className='flex flex-col gap-y-2'>

              <label
                className='text-sm md:text-lg font-semibold'
                htmlFor='email'>
                E-mail
              </label>

              <input
                type="email"
                id="email"
                onChange={handleChange}
                value={email}
                className={`h-12 border p-2 rounded-md transition-all duration-300

            ${theme === "dark"
                    ? "bg-gray-400/10 focus:bg-gray-400/30 border-white/10 text-white"
                    : "bg-gray-50 border-gray-300 text-gray-800 focus:bg-white"
                  }`}
              />

              <p className='text-red-500 text-sm'>
                {errMsg.emailError}
              </p>

            </div>



            {/* MESSAGE */}
            <div className='flex flex-col gap-y-2'>

              <label className='text-sm md:text-lg font-semibold'>
                Message
              </label>

              <textarea
                name="message"
                onChange={(e) => setMsg(e.target.value)}
                value={msg}
                className={`border p-2 rounded-md min-h-24 max-h-40 transition-all duration-300

            ${theme === "dark"
                    ? "bg-gray-400/10 focus:bg-gray-400/30 border-white/10 text-white"
                    : "bg-gray-50 border-gray-300 text-gray-800 focus:bg-white"
                  }`}
              ></textarea>

            </div>



            {/* BUTTON */}
            <button
              className={`mt-3 px-10 py-3 text-white rounded-xl
              transition-all duration-300 hover:shadow-lg
          
              ${theme === "dark"
                  ? "bg-green-400/70 hover:bg-green-400 cursor-pointer "
                  : "bg-teal-700 text-white"
                }
            `}>
              Send
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact
