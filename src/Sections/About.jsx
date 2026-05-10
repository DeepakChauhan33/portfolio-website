import React, { useContext } from 'react'

// import skills from '../Services/skillData'


import { ThemeContext } from '../Context/ThemeProvider';




import SkillSlider from '../Components/SkillSlider'
import CodeTypewriter from '../Components/CodeTypewriter';

const About = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (

        <section className={`pt-0 ${theme === "dark" ? "bg-linear-to-r from-stone-800 to-neutral-800  text-white" : "bg-linear-to-b from-zinc-100 via-zinc-200 to-neutral-200"} pb-20`}>



            {/* FULL WIDTH MARQUEE */}
            <div className="w-full overflow-hidden">
                <SkillSlider />
            </div>


            {/* CONTENT CONTAINER */}
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



                <div className='flex flex-col lg:flex-row justify-between items-start gap-y-5 mt-8 border'>

                    {/* Text Div */}
                    <div className='w-full lg:w-1/2  '>
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



                    {/* Code Type Writer */}
                    <div className='w-full lg:w-1/2 p-0 md:p-4 lg:p-6 border'>

                        <CodeTypewriter />

                    </div>



                </div>

            </div>

        </section>
    )
}

export default About
