import React from 'react'

const projects = [
    {
        id: 1,
        name: "ytdl-web",
        discription: "A Frontend made by using ytdl library for downloading online videos. Made in Python.",
    },
    {
        id: 2,
        name: "Calculator",
        discription: "A User-Friendly Calculator made in Java using Panels, Buttons and TextFields.",
    },
    {
        id: 3,
        name: "TROS",
        discription: "A graphical algorithm guessing game made using DSU in C."
    }
];

const Projects = () => {
    return (
        <div className = 'bg-black text-white py-20' id='about'>
            <div className = 'container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className = 'text-4x1 font-bold text-center mb-12'>Projects</h2>
                <div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map(project => (
                        <div key={project.id} className = 'bg-gray-800 p-6 rounded-lg hover:shawdow-lg transform trasition-transform duration-300 hover:scale-105'>
                            <h3 className = 'text-2x1 font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500'>{project.name}</h3>
                            <p className = 'text-gray-400 mb-4'>{project.discription}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
