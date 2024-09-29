import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
import React from "react";

export default function Contact() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
                <p className="mb-6">Feel free to reach out to me via email or connect with me on the platforms below.</p>
                <a href="mailto:chris@cdennis.dev" className="inline-flex items-center mb-6 text-blue-400 hover:text-blue-600">
                    <FaEnvelope className="mr-2"/> chris@cdennis.dev
                </a>
                <div className="flex justify-center space-x-6 mb-6">
                    <div className="group relative">
                        <a href="https://linkedin.com/in/c-dennis/" target="_blank" rel="noopener noreferrer"
                           className="text-gray-400 hover:text-white text-2xl">
                            <FaLinkedin/>
                        </a>
                        <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            LinkedIn
                        </span>
                    </div>

                    <div className="group relative">
                        <a href="https://github.com/chris-dennis" target="_blank" rel="noopener noreferrer"
                           className="text-gray-400 hover:text-white text-2xl">
                            <FaGithub/>
                        </a>
                        <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            GitHub
                        </span>
                    </div>

                    <div className="group relative">
                        <a href="https://leetcode.com/u/cdv-1/" target="_blank" rel="noreferrer"
                           className="text-gray-400 hover:text-white text-2xl">
                            <SiLeetcode/>
                        </a>
                        <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            LeetCode
                        </span>
                    </div>
                </div>
                <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Christopher Dennis. All rights reserved.</p>
            </div>
    </footer>)
}