import React from 'react'

const SkillBar = ({ setCategory }) => {
    return (
        <div className='flex flex-row : md:flex-col border gap-y-4 p-3 '>
            <button className='border text-start px-4 py-0.5 rounded-sm' onClick={() => setCategory("all")}>All</button>
            <button className='border text-start px-4 py-0.5 rounded-sm' onClick={() => setCategory("library")}>Libraries</button>
            <button className='border text-start px-4 py-0.5 rounded-sm' onClick={() => setCategory("language")}>Languages</button>
            <button className='border text-start px-4 py-0.5 rounded-sm' onClick={() => setCategory("tool")}>Tools</button>
        </div>
    )
}

export default SkillBar
