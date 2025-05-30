import React from 'react';
import DavLogo from '../../public/assets/Dav.png'; 
import kvLogo from '../../public/assets/KVS_SVG_logo.svg.png';
import VitLogo from '../../public/assets/vit-bhopal.png';
import Footer from './Footer';
import '../App.css';

const Academics = () => {
    const pageStyle = {
        backgroundColor: '#000', // Black background for the entire page
        minHeight: '100vh', // Ensure it covers the full height of the viewport
        padding: '20px', // Padding around the container
        boxSizing: 'border-box',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column', // Allows footer to be at the bottom
    };

    const headingStyle = {
        position: 'absolute',
        top: '80px',
        left: '20px',
        color: '#fff',
        fontSize: '1em', // Adjust font size as needed
        fontWeight: '300', // Light font
        zIndex: 1, // Ensure the heading is on top of other elements
        margin: 0, // Remove default margin to avoid spacing issues
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column', // Stack containers vertically
        gap: '40px', // Add space between each container
        width: '100%', // Full width from left to right
        marginTop: '110px', // Push down to avoid overlapping with the heading
        zIndex: 0, // Ensure the containers are beneath the heading
        flex: 1, // Allow content to take up available space
    };

    const boxStyle = {
        backgroundColor: '#181c24', // Equivalent to Tailwind's bg-gray-900
        border: '1px solid #f5f5f5', // Equivalent to border-neutral-100
        borderRadius: '0.5rem', // Equivalent to rounded-lg
        padding: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Shadow similar to Tailwind's shadow
        width: '100%', // Full width inside the container
        color: '#fff', // White text for contrast
        display: 'flex', // Use flexbox to align items
        alignItems: 'center', // Center items vertically
        justifyContent: 'space-between', // Space out the content and logo
    };

    const contentStyle = {
        flex: 1, // Allow content to take available space
    };

    const logoStyle = {
        maxWidth: '150px', // Adjust logo size as needed
        height: 'auto',
        marginLeft: '80px', // Space between content and logo
    };

    const academicHeadingStyle = {
        fontSize: '1.5em',
        fontWeight: 'bold', // Make headings bold
        marginBottom: '10px',
    };

    const paragraphStyle = {
        fontSize: '1em', // Slightly smaller font size than headings
        fontWeight: 'bold', // Make subheadings bold
        margin: '9px 0',
    };

    const linkBoxStyle = {
        border: '2px solid #fff', // White border
        backgroundColor: '#38a169', // Tailwind's green-500
        borderRadius: '0.5rem',
        padding: '10px',
        display: 'inline-block', // Inline box to fit around the text
        marginTop: '10px',
        textAlign: 'center',
    };

    const linkStyle = {
        color: '#fff', // White text color
        textDecoration: 'none', // Remove underline from the link
        fontWeight: 'bold',
    };

    return (
        <div style={pageStyle}>
            <h1 style={headingStyle}>
                Education is the journey that transforms potential into achievement.
            </h1>
            <div style={containerStyle}>
                <div style={boxStyle}>
                    <div style={contentStyle}>
                        <h2 style={academicHeadingStyle}>Secondary Education (10th Grade)</h2>
                        <p style={paragraphStyle}>School: DAV ACC PUBLIC SCHOOL</p>
                        <p style={paragraphStyle}>Domain: Standard Mathematics</p>
                        <p style={paragraphStyle}>Year of Passing: 2020</p>
                        <div style={linkBoxStyle}>
                            <a href="http://davkatni.org/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                Visit DAV ACC Public School
                            </a>
                        </div>
                    </div>
                    <img src={DavLogo} alt="DAV ACC Public School Logo" style={logoStyle} />
                </div>
                <div style={boxStyle}>
                    <div style={contentStyle}>
                        <h2 style={academicHeadingStyle}>Senior Secondary Education (12th Grade)</h2>
                        <p style={paragraphStyle}>School: KENDRIYA VIDYALAYA N.K.J SCHOOL</p>
                        <p style={paragraphStyle}>Domain: PHYSICS CHEMISTRY MATHEMATICS</p>
                        <p style={paragraphStyle}>Year of Passing: 2022</p>
                        <div style={linkBoxStyle}>
                            <a href="https://no2katni.kvs.ac.in/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                Visit Kendriya Vidyalaya N.K.J School
                            </a>
                        </div>
                    </div>
                    <img src={kvLogo} alt="Kendriya Vidyalaya N.K.J School Logo" style={logoStyle} />
                </div>
                <div style={boxStyle}>
                    <div style={contentStyle}>
                        <h2 style={academicHeadingStyle}>Undergraduate Studies (B.Tech Program)</h2>
                        <p style={paragraphStyle}>University: VELLORE INSTITUTE OF TECHNOLOGY BHOPAL</p>
                        <p style={paragraphStyle}>Domain: COMPUTER SCIENCE AND ENGINEERING (Specialisation in E-Commerce)</p>
                        <p style={paragraphStyle}>Current Year: Pursuing</p>
                        <div style={linkBoxStyle}>
                            <a href="https://vitbhopal.ac.in/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                Visit VIT Bhopal
                            </a>
                        </div>
                    </div>
                    <img src={VitLogo} alt="VIT Bhopal Logo" style={logoStyle} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Academics;
