import React from 'react'
import AboutImage from '../assets/AboutMe.jpg'

const About = () => {
    return (
        <div className = 'bg-black text-white py-20' id='about'>
            <div className = 'container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className = 'text-4x1 font-bold text-center mb-12'> Skills</h2>
                <div className = 'flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AboutImage}   alt=""
                        className = 'w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
                    <div className ='flex-1'>
                        <p className = 'text-lg mb-8'>
                            I am a third-year computer engineering diploma student who is actively learning advanced Java. Building on my previous experience with C, C++, Python, and Rust, I am eager to deepen my understanding of Java programming and its applications.
                        </p>
                        <div className = 'space-y-4'>
                            <div className = 'flex items-center'>
                                <label htmlFor ='htmlandcss' className = 'w-2/12'>Java</label>
                                <div className = 'grow bg-gray-800 rounded-full h-2.5'>
                                    <div className = 'bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'></div>
                                </div>
                            </div>
                            <div className = 'flex items-center'>
                                <label htmlFor ='htmlandcss' className = 'w-2/12'>CPP</label>
                                <div className = 'grow bg-gray-800 rounded-full h-2.5'>
                                    <div className = 'bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                                </div>
                            </div>
                            <div className = 'flex items-center'>
                                <label htmlFor ='htmlandcss' className = 'w-2/12'>Python</label>
                                <div className = 'grow bg-gray-800 rounded-full h-2.5'>
                                    <div className = 'bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                                </div>
                            </div>
                        </div>
                        <div className = 'mt-12 flex justify-between text-center'>
                            <div>
                                <h3 className = 'text-2x1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    3rd
                                </h3>
                                <p>Year Diploma student</p>
                            </div>
                            <div>
                                <h3 className = 'text-2x1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    5+
                                </h3>
                                <p>Projects Completed</p>
                            </div>
                            <div>
                                <h3 className = 'text-2x1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    2
                                </h3>
                                <p>Months Industrial Training</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
