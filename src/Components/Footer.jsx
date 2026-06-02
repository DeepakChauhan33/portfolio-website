import React from 'react'


import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (

    <footer className="bg-black/90 text-gray-300 py-12 relative ">

      <div className="w-full h-[2px] absolute top-0 bg-linear-to-r from-transparent via-purple-500 to-transparent " />


      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between  ">

        {/* Left Section */}
        <div className="flex items-center space-x-2 ">
          <span className="font-semibold">Deepak Chauhan</span>
          <span className="">•</span>
          <span>© 2026 All rights reserved.</span>
        </div>


        <div className="flex  space-x-8 mt-4 ">

          {/* GITHUB */}
          <a href='https://github.com/DeepakChauhan33' target="_blank" >
            <FaGithub className="hover:text-white transition-colors" size={22} />
          </a>

          {/* LINKEDIN */}
          <a href='https://www.linkedin.com/in/dpk-chauhan/' target="_blank" >
            <FaLinkedin className="hover:text-white transition-colors" size={22} />
          </a>

          {/* E-MAIL */}
          <a href="mailto:deep651965@gmail.com">
            <MdEmail className="hover:text-white transition-colors" size={22} />
          </a>
        </div>


        <div className="text-sm text-gray-400 mt-4  text-center lg:text-right ">
          <p>Built by Dpk</p>
          <p className="text-xs">React • Tailwind • Vercel</p>
        </div>
      </div>

      {/* Spacer */}
      <div className='block md:hidden h-16 '>

      </div>
    </footer>
  )
}

export default Footer
