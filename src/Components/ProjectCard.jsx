import React from 'react'



const ProjecrCard = ({ project }) => {
    return (
        <div className="w-[300px] rounded-2xl overflow-hidden shadow-xl relative group">

            {/* Background Image */}
            <img
                src={project.image}
                alt="card"
                className="w-full h-[400px] object-fill"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-4 text-white">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="text-sm opacity-80 mt-1">{project.desc}</p>

                {/* Tags */}
                <div className="flex gap-2 mt-3">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
                        ⭐ 4.5
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
                        3 Night Stay
                    </span>
                </div>

                {/* Button */}
                <button className="mt-4 w-full bg-white text-black py-2 rounded-full font-medium hover:bg-gray-200 transition">
                    Reserve now
                </button>
            </div>
        </div>
    )
}

export default ProjecrCard
