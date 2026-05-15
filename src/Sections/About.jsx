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

        <section id='about' className={` pt-0 ${theme === "dark" ? " bg-[linear-gradient(to_right_top,#000000,#0a0206,#10050f,#130816,#120d1d,#0f1120,#0a1423,#051725,#071923,#0d1b20,#131c1e,#191d1d)]  text-white" : "bg-[linear-gradient(to_right_top,#fefefe,#fcfcfc,#fafbfa,#f9f9f9,#f7f7f7,#f6f6f6,#f5f5f5,#f4f4f4,#f4f4f4,#f3f3f3,#f3f3f3,#f2f2f2)]"} pb-20`}>



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



                <div className='flex flex-col lg:flex-row justify-between items-center gap-14 mt-8 '>

                    <div className='w-full lg:w-1/2  p-3'>


                        {/* Text Div */}
                        <div className='  text-[17px]'>
                            <p>
                                I am a Full Stack MERN Developer with hands-on experience in building scalable and responsive web applications. I have completed a 6-month internship at Orbiqe Technology Pvt. Ltd. as an AI & DevOps Trainee, where I worked on REST APIs, backend logic, and modern UI development.
                            </p>

                            <p className='mt-8'>
                                Along with my internship, I have worked as a freelance frontend developer, building 10+ real-world responsive websites, and currently leading development at WebNirmit, where I focus on AI-powered and full-stack solutions. I have built multiple production-ready applications and consistently contribute on GitHub with 500+ commits.
                            </p>

                            <p className='mt-8'>
                                My core expertise includes React.js, Node.js, Express, and MongoDB, along with strong knowledge of REST API development and modern UI frameworks like Tailwind CSS. I also leverage AI tools like ChatGPT and Copilot to improve development speed and efficiency.
                            </p>

                        </div>



                        <div className=' mt-16 grid grid-cols-1 md:grid-cols-2 gap-4'>

                            <div className={`p-3 rounded-md ring transition-all duration-200 ease-in-out ${theme === 'dark' ? " bg-gray-950 " : "bg-linear-to-r from-zinc-50 to-stone-200"}  hover:ring-gray-300`}>
                                <p className='text-purple-600 font-bold mb-3' >Location</p>
                                <span className="font-normal">Palam, Delhi</span>
                            </div>

                            <div className={`p-3 rounded-md ring transition-all duration-200 ease-in-out ${theme === 'dark' ? " " : " "}  hover:ring-gray-300`}>
                                <p className='text-purple-600 font-bold mb-3' >E-mail</p>
                                <span className="font-normal">deep651965@gmail.com</span>
                            </div>

                            <div className={`p-3 rounded-md ring transition-all duration-200 ease-in-out ${theme === 'dark' ? " " : " "}  hover:ring-gray-300`}>
                                <p className='text-purple-600 font-bold mb-3' >Education</p>
                                <div className='flex items-center justify-between gap-x-6'>
                                    <span className="font-normal">BCA · CSE/IT, 2025</span>
                                    <a href='https://drive.google.com/file/d/1O75qbOk1ErYL9JgVHC5_4I9lOb6vOXvS/view?usp=sharing' target='_blank'>
                                        <LiaExternalLinkSquareAltSolid />
                                    </a>
                                </div>

                            </div>

                            <div className={`p-3 rounded-md ring transition-all duration-200 ease-in-out ${theme === 'dark' ? " " : " "}  hover:ring-gray-300`}>
                                <p className='text-purple-600 font-bold mb-3' >Experience</p>

                                <div className='flex items-center justify-between gap-x-6'>
                                    <span className="font-normal">Frontend Intern, Sedwis Software</span>
                                    <a href='https://drive.google.com/file/d/1IBkwNTUmOHW_VrAa_BBpbHTugVlB9FyX/view?usp=sharing' target='_blank'>
                                        <LiaExternalLinkSquareAltSolid />
                                    </a>
                                </div>

                            </div>
                        </div>


                    </div>



                    {/* Code Type Writer */}
                    <div className=' w-full lg:w-1/2 p-0 md:p-4  '>

                        <CodeTypewriter />

                    </div>



                </div>

            </div>

        </section>
    )
}

export default About
