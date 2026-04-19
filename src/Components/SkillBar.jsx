import React from 'react'

const SkillBar = () => {
    return (
        <div>
            <ul className='border p-2 space-x-1.5 space-y-3'>
                <li className='border inline md:block'>All</li>
                <li className='border inline md:block'>Languages</li>
                <li className='border inline md:block'>Framework & Libraries</li>
                <li className='border inline md:block'>Tools</li>
            </ul>
        </div>
    )
}

export default SkillBar
