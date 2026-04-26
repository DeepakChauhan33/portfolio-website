import React from 'react'

const SkillBar = ({ setCategory }) => {
    return (
        <div className='flex flex-row lg:flex-col border gap-x-4 gap-y-3 p-2.5 overflow-auto'>
            <button className='border text-start px-4 py-0.5 rounded-sm shadow-md' onClick={() => setCategory("all")}>All</button>
            <button className='border text-start px-4 py-0.5 rounded-sm shadow-md' onClick={() => setCategory("library")}>Libraries</button>
            <button className='border text-start px-4 py-0.5 rounded-sm shadow-md' onClick={() => setCategory("language")}>Languages</button>
            <button className='border text-start px-4 py-0.5 rounded-sm shadow-md' onClick={() => setCategory("tool")}>Tools</button>
        </div>
    )
}

export default SkillBar
