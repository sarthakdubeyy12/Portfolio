import React, { useState } from 'react';
import Footer from './Footer';
import '../App.css';

const Skills = () => {
    const [showLanguages, setShowLanguages] = useState(false);
    const [showTechnologies, setShowTechnologies] = useState(false);
    const [showConcepts, setShowConcepts] = useState(false);
    const [showCoursework, setShowCoursework] = useState(false);
    const [showSoftSkills, setShowSoftSkills] = useState(false);

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <section id='skills' className='skills-section bg-black py-10 text-white flex-grow'>
                    <p className='top-30 left-4 font-light p-10 mb-30'>
                        "Skills are the building blocks of a brighter future—here's what I've built so far."
                    </p>

                    {/* Skills Section Container */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center mx-auto max-w-4xl'>

                        {/* Languages Section */}
                        <div
                            className="bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8"
                            onMouseEnter={() => setShowLanguages(true)}
                            onMouseLeave={() => setShowLanguages(false)}
                        >
                            <div className='flex flex-col items-center p-4'>
                                <h3 className='text-3xl font-semibold mb-4'>Languages</h3>
                                <div className='mt-4 grid grid-cols-2 gap-6'>
                                    {showLanguages && (
                                        <>
                                            <div className='skill-item flex flex-col items-center'>
                                                <p className='text-xl font-light text-white mt-2'>HTML</p>
                                            </div>
                                            <div className='skill-item flex flex-col items-center'>
                                                <p className='text-xl font-light text-white mt-2'>CSS</p>
                                            </div>
                                            <div className='skill-item flex flex-col items-center'>
                                                <p className='text-xl font-light text-white mt-2'>JavaScript</p>
                                            </div>
                                            <div className='skill-item flex flex-col items-center'>
                                                <p className='text-xl font-light text-white mt-2'>Python</p>
                                            </div>
                                            <div className='skill-item flex flex-col items-center'>
                                                <p className='text-xl font-light text-white mt-2'>C++</p>
                                            </div>
                                            <div className='skill-item flex flex-col items-center'>
                                                <p className='text-xl font-light text-white mt-2'>C</p>
                                            </div>
                                            <div className='skill-item flex flex-col items-center'>
                                                <p className='text-xl font-light text-white mt-2'>SQL</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Technologies Section */}
                        <div
                            className="bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8"
                            onMouseEnter={() => setShowTechnologies(true)}
                            onMouseLeave={() => setShowTechnologies(false)}
                        >
                            <div className='flex flex-col items-center p-4'>
                                <h3 className='text-3xl font-semibold mb-4'>Technologies</h3>
                                <div className='mt-4 grid grid-cols-2 gap-6'>
                                    {showTechnologies && (
                                        <>
                                            <div className='skill-item flex flex-col items-center'>
                                                <p className='text-xl font-light text-white mt-2'>React JS</p>
                                            </div>
                                            <div className='skill-item flex flex-col items-center'>
                                                <p className='text-xl font-light text-white mt-2'>MongoDB</p>
                                            </div>
                                            <div className='skill-item flex flex-col items-center'>
                                                <p className='text-xl font-light text-white mt-2'>Express JS</p>
                                            </div>
                                            <div className='skill-item flex flex-col items-center'>
                                                <p className='text-xl font-light text-white mt-2'>Tailwind</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Concepts Section */}
                        <div
                            className="bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8"
                            onMouseEnter={() => setShowConcepts(true)}
                            onMouseLeave={() => setShowConcepts(false)}
                        >
                            <div className='flex flex-col items-center p-4'>
                                <h3 className='text-3xl font-semibold mb-4'>Concepts</h3>
                                <div className='mt-4 grid grid-cols-1 gap-6'>
                                    {showConcepts && (
                                        <>
                                            <div className='skill-item flex flex-col items-center'>
                                                <p className='text-xl font-light text-white mt-2'>Cloud Computing</p>
                                            </div>
                                            <div className='skill-item flex flex-col items-center'>
                                                <p className='text-xl font-light text-white mt-2'>Encryption and Decryption</p>
                                            </div>
                                            <div className='skill-item flex flex-col items-center'>
                                                <p className='text-xl font-light text-white mt-2'>Artificial Intelligence (AI) and Neural Networks</p>
                                            </div>
                                            <div className='skill-item flex flex-col items-center'>
                                                <p className='text-xl font-light text-white mt-2'>APIs</p>
                                            </div>
                                            <div className='skill-item flex flex-col items-center'>
                                                <p className='text-xl font-light text-white mt-2'>Agile Methodology</p>
                                            </div>
                                            <div className='skill-item flex flex-col items-center'>
                                                <p className='text-xl font-light text-white mt-2'>Operating Systems</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Relevant Coursework Section */}
                        <div
                            className="bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8"
                            onMouseEnter={() => setShowCoursework(true)}
                            onMouseLeave={() => setShowCoursework(false)}
                        >
                            <div className='flex flex-col items-center p-4'>
                                <h3 className='text-3xl font-semibold mb-4'>Relevant Coursework</h3>
                                <div className='mt-4 grid grid-cols-1 gap-6'>
                                    {showCoursework && (
                                        <>
                                            <div className='course-item text-center'>
                                                <p className='text-xl font-light text-white mt-2'>Data Structures and Algorithms (C++)</p>
                                            </div>
                                            <div className='course-item text-center'>
                                                <p className='text-xl font-light text-white mt-2'>Prob Stat in CS (Python)</p>
                                            </div>
                                            <div className='course-item text-center'>
                                                <p className='text-xl font-light text-white mt-2'>Intro to CS II (C++)</p>
                                            </div>
                                            <div className='course-item text-center'>
                                                <p className='text-xl font-light text-white mt-2'>Linear Algebra w/Computational Applications (Python)</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Soft Skills Section */}
                        <div
                            className="bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8"
                            onMouseEnter={() => setShowSoftSkills(true)}
                            onMouseLeave={() => setShowSoftSkills(false)}
                        >
                            <div className='flex flex-col items-center p-4'>
                                <h3 className='text-3xl font-semibold mb-4'>Soft Skills</h3>
                                <div className='mt-4 grid grid-cols-1 gap-6'>
                                    {showSoftSkills && (
                                        <>
                                            <div className='softskill-item text-center'>
                                                <p className='text-xl font-light text-white mt-2'>Creativity</p>
                                            </div>
                                            <div className='softskill-item text-center'>
                                                <p className='text-xl font-light text-white mt-2'>Leadership</p>
                                            </div>
                                            <div className='softskill-item text-center'>
                                                <p className='text-xl font-light text-white mt-2'>Commitment</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Add Footer at the bottom */}
                <Footer />
            </div>
        </>
    );
};

export default Skills;
