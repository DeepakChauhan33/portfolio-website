import React from 'react'


import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (

    <footer className="bg-black/90 text-gray-300 py-12 relative ">

      <div className="w-full h-[2px] absolute top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent " />


      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Deepak Chauhan</span>
          <span className="">•</span>
          <span>© 2026 All rights reserved.</span>
        </div>

        {/* Center Section - Social Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white transition-colors" size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-white transition-colors" size={22} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-white transition-colors" size={22} />
          </a>
          <a href="mailto:someone@example.com">
            <MdEmail className="hover:text-white transition-colors" size={22} />
          </a>
        </div>

        {/* Right Section */}
        <div className="text-sm text-gray-400 mt-4 md:mt-0 text-center md:text-right">
          <p>Built by Dpk</p>
          <p className="text-xs">React • Tailwind • Vercel</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
