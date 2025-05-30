import React from "react";
import Footer from './Footer';  // Ensure this import is correct

const ProjectCard = ({ title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a
                    href={git}
                    className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />  {/* This should work now */}
        </div>
    );
};

export const project = [
    {
        title: 'TicGen',
        description: 'TicGen is a dynamic web application I crafted using React, Node JS and React. This project is a modern Ticket Support System where user can generate a ticket according to their issue and their problem will be solved from the admin side.',
        git: 'https://github.com/sarthakdubeyy12/Ticket-Support-System',
        technologies: ['Vue', 'Fast API', 'Mongo db']
    },
    {
        title: 'Mail Summariser',
        description: 'The Mail Summarizer is a tool designed to simplify email management by automatically generating concise summaries of selected emails. This project helps users quickly grasp the essential information from their inbox, making it easier to stay organized and respond efficiently without the need to read through lengthy messages',
        git: "https://github.com/sarthakdubeyy12/mail-summariser",
        technologies: ['HTML', 'CSS', 'JavaScript', 'API’s']
    },
    {
        title: 'Strong Password Generator',
        description: 'Developed a user-friendly "Strong Password Generator" that enhances security by creating complex, customizable passwords, ensuring easy and effective protection for users.',
        git: "https://github.com/sarthakdubeyy12/Strong-Password-Generator",
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Student Face Attendence System',
        description: 'Developed a "Student Face Attendance System" that streamlines attendance by allowing students to mark their presence through a simple face scan, ensuring efficient and accurate tracking.',
        git: "https://github.com/Arjun140205/STUDENT-FACE-ATTENADNCE-SYSTEM-",
        technologies: ['HTML', 'CSS', 'JavaScript', 'API’s']
    }
];

export default Projects;
