import React, { useContext } from 'react'

import { GitHubCalendar } from "react-github-calendar";



// Context
import { ThemeContext } from '../Context/ThemeProvider';

const GitHubMap = () => {


    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <section
            id="github"
            className={` px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-18 ${theme === "dark" ? "bg-linear-to-r from-zinc-600 via-zinc-700 to-zinc-900 text-white" : "bg-white text-black"
                }`}
        >
            {/* Heading */}
            <div className="mb-8 sm:mb-11 lg:mb-14">
                <div className="flex items-center">
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-medium">
                        GitHub Activity
                    </h2>
                    <div className="flex-grow border-t ml-4"></div>
                </div>
            </div>

            {/* GitHub Contribution Map */}
            <div
                className={`w-full flex justify-center items-center px-5 border mt-15 rounded-2xl  sm:p-6 overflow-x-auto shadow-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                    }`}
            >
                <GitHubCalendar
                    className='w-full    '
                    username="DeepakChauhan33"
                    blockSize={16}
                    blockMargin={6}
                    fontSize={16}
                    colorScheme={theme === "dark" ? "dark" : "light"}
                />
            </div>
        </section>
    )
}

export default GitHubMap
