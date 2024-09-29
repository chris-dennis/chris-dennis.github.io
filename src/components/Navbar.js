import React, {useState} from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedin, FaGithub, FaUserAlt, FaProjectDiagram, FaEnvelope} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si';
import {FiMenu, FiX} from 'react-icons/fi';
import {FaMoon, FaSun} from 'react-icons/fa';

export default function Navbar({toggleDarkMode, isDarkMode}) {
    const [activeLink, setActiveLink] = useState('#about');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (href) => {
        setActiveLink(href);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (<>
            {/* Toggle Button */}
            <button onClick={toggleMenu} aria-controls="sidebar" aria-expanded={isMenuOpen} className="fixed top-4 right-4 z-50 p-2 text-gray-500 rounded-md sm:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Toggle sidebar</span>
                {isMenuOpen ? (<FiX className="w-6 h-6 text-white"/>) : (<FiMenu className="w-6 h-6 text-gray-800"/>)}
            </button>

            {/* Overlay */}
            {isMenuOpen && (<div className="fixed inset-0 z-40 bg-black opacity-50 sm:hidden" onClick={toggleMenu} aria-hidden="true"></div>)}

            {/* Sidebar */}
                <nav id="sidebar" className={`fixed top-0 left-0 z-50 h-screen w-96 bg-gray-800 p-4 transform transition-transform duration-300 ease-in-out 
                ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } sm:translate-x-0 sm:static sm:inset-0`}
                >                <div className="text-center text-white text-xl font-semibold mb-8">
                    <h2>Christopher Dennis</h2>
                </div>

                <div className="w-32 h-32 mb-4 mx-auto">
                    <img src="/me.png" alt="Portrait" className="rounded-full object-cover w-full h-full"/>
                </div>

                <div className="absolute left-0 pt-3 w-full flex justify-center space-x-4">
                    <div className="group relative">
                        <a href="mailto:chris@cdennis.dev" target="_blank" rel="noreferrer">
                            <AiOutlineMail className="text-gray-300 hover:text-blue-600 text-2xl transition-colors duration-300"/>
                        </a>
                        <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Mail
                        </span>
                    </div>

                    <div className="group relative">
                        <a href="https://www.linkedin.com/in/c-dennis/" target="_blank" rel="noreferrer">
                            <FaLinkedin className="text-gray-300 hover:text-blue-600 text-2xl transition-colors duration-300"/>
                        </a>
                        <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            LinkedIn
                        </span>
                    </div>

                    <div className="group relative">
                        <a href="https://github.com/chris-dennis" target="_blank" rel="noreferrer">
                            <FaGithub className="text-gray-300 hover:text-blue-600 text-2xl transition-colors duration-300"/>
                        </a>
                        <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            GitHub
                        </span>
                    </div>

                    <div className="group relative">
                        <a href="https://leetcode.com/u/cdv-1/" target="_blank" rel="noreferrer">
                            <SiLeetcode className="text-gray-300 hover:text-blue-600 text-2xl transition-colors duration-300"/>
                        </a>
                        <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            LeetCode
                        </span>
                    </div>
                </div>

                {/* Page Links */}
                <ul className="flex flex-col space-y-8 pr-6 mt-[30%]">
                    <li className="flex justify-between items-center hover:bg-gray-700 p-3 rounded-md transition-colors duration-300">
                        <FaUserAlt className="text-gray-400"/>
                        <a href="#about" className={`text-right flex-grow text-gray-300 hover:text-white transition-colors duration-300 text-lg no-underline ${activeLink === '#about' ? 'font-bold' : ''}`} onClick={() => handleLinkClick('#about')}>
                            About Me
                        </a>
                    </li>
                    <li className="flex justify-between items-center hover:bg-gray-700 p-3 rounded-md transition-colors duration-300">
                        <FaProjectDiagram className="text-gray-400"/>
                        <a href="#projects" className={`text-right flex-grow text-gray-300 hover:text-white transition-colors duration-300 text-lg no-underline ${activeLink === '#projects' ? 'font-bold' : ''}`} onClick={() => handleLinkClick('#projects')}>
                            Projects
                        </a>
                    </li>
                    <li className="flex justify-between items-center hover:bg-gray-700 p-3 rounded-md transition-colors duration-300">
                        <FaEnvelope className="text-gray-400"/>
                        <a href="#contact" className={`text-right flex-grow text-gray-300 hover:text-white transition-colors duration-300 text-lg no-underline ${activeLink === '#contact' ? 'font-bold' : ''}`} onClick={() => handleLinkClick('#contact')}>
                            Contact Me
                        </a>
                    </li>
                    <li className="flex justify-between items-center hover:bg-gray-700 p-3 rounded-md transition-colors duration-300">
                        {isDarkMode ? (<FaSun className="text-gray-400"/>) : (<FaMoon className="text-gray-400"/>)}
                        <button onClick={toggleDarkMode} className="text-right flex-grow text-gray-300 hover:text-white transition-colors duration-300 text-lg no-underline">
                            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </li>
                </ul>
            </nav>
        </>);
}