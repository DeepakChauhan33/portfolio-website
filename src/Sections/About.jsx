import React, { useContext } from 'react'

import { ThemeContext } from '../Context/ThemeProvider';

// React Icons
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";



import SkillSlider from '../Components/SkillSlider'
import CodeTypewriter from '../Components/CodeTypewriter';

const About = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (

        //  backgroundColor: '#0f0f1a',

        <section id='about' className={` pt-0 ${theme === "dark" ? " bg-[linear-gradient(to_right_top,#000000,#0a0206,#10050f,#130816,#120d1d,#0f1120,#0a1423,#051725,#071923,#0d1b20,#131c1e,#191d1d)]  text-white" : "bg-gradient-to-br from-white via-gray-50 to-zinc-100"} pb-20`}>



            {/* FULL WIDTH MARQUEE */}
            <div className="w-full overflow-hidden">
                <SkillSlider />
            </div>


            {/* CONTENT  */}
            <div className="max-w-7xl mx-auto px-4  ">

                {/* HEADER */}
                <div className="space-y-3">

                    <div className="flex items-center">
                        <h2 className="text-2xl font-medium">
                            About Me
                        </h2>

                        <div className="flex-grow h-[3px] ml-4 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                    </div>

                </div>



                <div className='flex flex-col lg:flex-row justify-between items-start gap-14 mt-8 '>

                    <div className='w-full lg:w-1/2  p-3'>


                        {/* Text Div */}
                        <div className='  text-[17px]'>
                            <p>
                                I’m a passionate Full Stack Developer currently pursuing full-stack development, with hands-on experience in building responsive and modern web applications. My primary expertise lies in React.js, JavaScript, Tailwind CSS, Next.js, SQL, and MongoDB, along with a strong understanding of frontend development principles and scalable UI design.
                            </p>

                            <p className='mt-8'>
                                I enjoy creating clean, user-friendly interfaces and transforming ideas into functional web applications. Alongside frontend development, I am continuously improving my backend and database skills to build complete full-stack solutions.
                            </p>

                            <p className='mt-8'>
                                Currently, I am focused on expanding my expertise in full-stack technologies, building production-ready applications, and learning industry best practices to grow as a professional software developer.
                            </p>

                        </div>



                        <div className=' mt-16 grid grid-cols-1 md:grid-cols-2 gap-4'>



                            <div className={`p-3 rounded-md  transition-all duration-200 ease-in-out ${theme === 'dark' ? " bg-gray-950" : " bg-linear-to-r from-neutral-100 via-gray-200 to-neutral-300/40 border border-gray-200 hover:bg-white hover:shadow-md "} `}>
                                <p className='text-purple-600 font-bold mb-3' >Location</p>
                                <span className="font-normal">Palam, Delhi</span>
                            </div>

                            <div className={`p-3 rounded-md  transition-all duration-200 ease-in-out ${theme === 'dark' ? " bg-gray-950" : " bg-linear-to-r from-neutral-100 via-gray-200 to-neutral-300/40 border border-gray-200 hover:bg-white hover:shadow-md "}`}>
                                <p className='text-purple-600 font-bold mb-3' >E-mail</p>
                                <span className="font-normal">deep651965@gmail.com</span>
                            </div>

                            <div className={`group p-3 rounded-md  transition-all duration-200 ease-in-out ${theme === 'dark' ? " bg-gray-950" : " bg-linear-to-r from-neutral-100 via-gray-200 to-neutral-300/40 border border-gray-200 hover:bg-white hover:shadow-md "}`}>
                                <p className='text-purple-600 font-bold mb-3' >Education</p>
                                <div className='flex items-center justify-between gap-x-6'>
                                    <span className="font-normal">BCA · CSE/IT, 2025</span>
                                    <a href='https://drive.google.com/file/d/1O75qbOk1ErYL9JgVHC5_4I9lOb6vOXvS/view?usp=sharing' target='_blank'>
                                        <LiaExternalLinkSquareAltSolid className={`text-xl text-gray-500 transition-all hover:scale-107 ${theme === 'dark' ? "group-hover:text-white" : " group-hover:text-gray-800 "}  `} />
                                    </a>
                                </div>

                            </div>

                            <div className={`group p-3 rounded-md  transition-all duration-200 ease-in-out ${theme === 'dark' ? " bg-gray-950" : " bg-linear-to-r from-neutral-100 via-gray-200 to-neutral-300/40 border border-gray-200 hover:bg-white hover:shadow-md "}`}>
                                <p className='text-purple-600 font-bold mb-3' >Experience</p>

                                <div className='flex items-center justify-between gap-x-6'>
                                    <span className="font-normal">Frontend Intern, Sedwis Software</span>
                                    <a href='https://drive.google.com/file/d/1IBkwNTUmOHW_VrAa_BBpbHTugVlB9FyX/view?usp=sharing' target='_blank'>
                                        <LiaExternalLinkSquareAltSolid className={`text-xl text-gray-500 transition-all hover:scale-107 ${theme === 'dark' ? "group-hover:text-white" : " group-hover:text-gray-800 "}  `} />
                                    </a>
                                </div>

                            </div>
                        </div>


                    </div>



                    {/* Code Type Writer */}
                    <div className=' w-full lg:w-1/2 h-95 p-0 md:p-4  '>

                        <CodeTypewriter />

                    </div>



                </div>

            </div>

        </section>
    )
}

export default About
