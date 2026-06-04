import React from 'react'

const SkillCategory = ({ setCategory }) => {


    return (
        <div className='flex flex-row lg:flex-col gap-x-4 gap-y-3 p-2.5 overflow-auto '>

            <button className='border text-start px-4 py-0.5 rounded-sm shadow-md text-gray-400 border-white transition-all hover:backdrop:backdrop-blur-2xl hover:border-blue-800 hover:text-white cursor-pointer ease-in-out duration-400 ' onClick={() => setCategory("all")}>All</button>
            <button className='border text-start px-4 py-0.5 rounded-sm shadow-md text-gray-400 border-white font-medium transition-all hover:backdrop:backdrop-blur-2xl hover:border-blue-800 hover:text-white cursor-pointer ease-in-out duration-400' onClick={() => setCategory("library")}>Libraries</button>
            <button className='border text-start px-4 py-0.5 rounded-sm shadow-md text-gray-400 border-white font-medium transition-all hover:backdrop:backdrop-blur-2xl hover:border-blue-800 hover:text-white cursor-pointer ease-in-out duration-400' onClick={() => setCategory("language")}>Languages</button>
            <button className='border text-start px-4 py-0.5 rounded-sm shadow-md text-gray-400 border-white font-medium transition-all hover:backdrop:backdrop-blur-2xl hover:border-blue-800 hover:text-white cursor-pointer ease-in-out duration-400' onClick={() => setCategory("tool")}>Tools</button>
        </div>
    )
}

export default SkillCategory











// import React from "react";

// const categories = [
//     { label: "All", value: "all" },
//     { label: "Libraries", value: "library" },
//     { label: "Languages", value: "language" },
//     { label: "Tools", value: "tool" },
// ];

// const SkillCategory = ({ category, setCategory }) => {
//     const buttonStyle = (value) =>
//         `border px-4 py-0.5 rounded-sm shadow-md cursor-pointer transition text-start
//     ${category === value
//             ? "border-green-300 bg-green-300/30 text-green-300"
//             : "border-transparent hover:bg-green-300/30 hover:text-green-300"
//         }`;

//     return (
//         <div className="flex flex-row lg:flex-col gap-x-4 gap-y-3 p-2.5 overflow-auto">
//             {categories.map(({ label, value }) => (
//                 <button
//                     key={value}
//                     onClick={() => setCategory(value)}
//                     className={buttonStyle(value)}
//                 >
//                     {label}
//                 </button>
//             ))}
//         </div>
//     );
// };

// export default SkillCategory;