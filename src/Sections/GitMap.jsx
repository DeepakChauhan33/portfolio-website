import React from 'react'

import GitHubGraph from '../Components/GitHubGraph'

const GitMap = () => {
    return (
        <section
            id="github"
            className={`px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
                }`}
        >
            {/* Heading */}
            <div className="mb-8 sm:mb-11 lg:mb-14 space-y-3">
                <div className="flex items-center">
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">
                        GitHub Activity
                    </h2>
                    <div className="flex-grow border-t ml-4"></div>
                </div>
            </div>

            {/* Wrapper */}
            <div className="space-y-8">
                {/* GitHub Contribution Calendar */}
                <div
                    className={`rounded-2xl p-4 sm:p-6 overflow-x-auto shadow-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                        }`}
                >
                    <GitHubCalendar
                        username="your-github-username"
                        blockSize={14}
                        blockMargin={5}
                        fontSize={14}
                        colorScheme={theme === "dark" ? "dark" : "light"}
                    />
                </div>

                {/* GitHub Streak Card */}
                <div
                    className={`rounded-2xl p-4 sm:p-6 shadow-lg flex justify-center ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                        }`}
                >
                    <img
                        src={`https://streak-stats.vercel.app?user=your-github-username&theme=${theme === "dark" ? "dark" : "default"
                            }&hide_border=true`}
                        alt="GitHub Streak"
                        className="w-full max-w-4xl"
                    />
                </div>
            </div>
        </section>

    )
}

export default GitMap
