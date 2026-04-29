import React from 'react'

const SkillBar = ({ setCategory }) => {
    return (
        <div className='flex flex-row lg:flex-col gap-x-4 gap-y-3 p-2.5 overflow-auto'>
            <button className='border border-transparent text-start px-4 py-0.5 rounded-sm shadow-md hover:bg-green-300/30 hover:text-green-300 cursor-pointer' onClick={() => setCategory("all")}>All</button>
            <button className='border border-transparent text-start px-4 py-0.5 rounded-sm shadow-md hover:bg-green-300/30 hover:text-green-300 cursor-pointer' onClick={() => setCategory("library")}>Libraries</button>
            <button className='border border-transparent text-start px-4 py-0.5 rounded-sm shadow-md hover:bg-green-300/30 hover:text-green-300 cursor-pointer' onClick={() => setCategory("language")}>Languages</button>
            <button className='border border-transparent text-start px-4 py-0.5 rounded-sm shadow-md hover:bg-green-300/30 hover:text-green-300 cursor-pointer' onClick={() => setCategory("tool")}>Tools</button>
        </div>
    )
}

export default SkillBar
