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

        <section className={`pt-0 ${theme === "dark" ? "bg-linear-to-r from-stone-800 to-neutral-800  text-white" : "bg-linear-to-b from-zinc-100 via-zinc-200 to-neutral-200"} pb-20`}>



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



                <div className='flex flex-col lg:flex-row justify-between items-start gap-10 mt-8 border'>

                    <div className='w-full lg:w-1/2 border p-3'>


                        {/* Text Div */}
                        <div className=' border text-[18px]'>
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



                        <div className=' mt-10 grid grid-cols-1 md:grid-cols-2 gap-4'>

                            <div className='p-3 rounded-md ring hover:ring-gray-300'>
                                <p>Location</p>
                                <span>Palam, Delhi</span>
                            </div>

                            <div className='p-3 rounded-md ring hover:ring-gray-300'>
                                <p>E-mail</p>
                                <span>deep651965@gmail.com</span>
                            </div>

                            <div className='p-3 rounded-md ring hover:ring-gray-300'>
                                <p>Education</p>
                                <div className='flex items-center gap-x-6'>
                                    <span>BCA · CSE/IT, 2025</span>
                                    <a href='https://drive.google.com/file/d/1O75qbOk1ErYL9JgVHC5_4I9lOb6vOXvS/view?usp=sharing' target='_blank'>
                                        <LiaExternalLinkSquareAltSolid />
                                    </a>
                                </div>

                            </div>

                            <div className='p-3 rounded-md ring hover:ring-gray-300'>
                                <p>Experience</p>

                                <div className='flex items-center gap-x-6'>
                                    <span>Frontend Intern, Sedwis Software</span>
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
