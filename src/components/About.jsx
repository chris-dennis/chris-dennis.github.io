import {skills} from "./data";
import {FaDownload, FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
import {motion} from 'framer-motion';

export default function About() {
    const headingVariants = {
        hidden: {opacity: 0, y: -20}, 
        visible: {
            scale: 1, opacity: 1, y: 0, transition: {duration: 0.8, ease: 'easeOut'},
        },
    };

    return (
        <section className="relative flex items-center justify-center w-full max-w-5xl mx-auto z-10 p-4">
            {/* Main Content Card */}
            <div className="p-8 md:p-12 rounded-3xl w-full flex flex-col gap-10 justify-center items-center text-center bg-gray-900/70 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-gray-700 relative z-10 overflow-hidden">
                
                <motion.div variants={headingVariants} initial="hidden" animate="visible" className="flex flex-col md:flex-row items-center gap-8 w-full justify-center relative z-10">
                    {/* Profile Picture */}
                    <div className="relative">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl">
                            <img src="/me.png" alt="Chris Dennis" className="rounded-full object-cover w-full h-full border-4 border-gray-900" />
                        </div>
                    </div>

                    {/* Header Info */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-md">
                            Chris Dennis
                        </h1>
                        <h2 className="text-xl md:text-2xl text-blue-400 font-semibold mb-2">
                            Software Engineer
                        </h2>
                        <h3 className="text-md md:text-lg text-gray-300 font-medium mb-4">
                            Pomona College 2024 &middot; B.A. Computer Science
                        </h3>
                        
                        <a href="Resume CD.pdf" download className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/30 text-sm font-semibold tracking-wide">
                            <FaDownload className="mr-2"/> Download Resume
                        </a>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <div className="w-full mt-4 relative z-10">
                    <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-center">
                        {Object.entries(skills).map(([category, skillsArray]) => (
                            <div key={category} className="flex flex-col items-center">
                                <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">{category}</h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {skillsArray.map((skill) => (
                                        <div key={skill.name} 
                                             className={`flex items-center gap-2 px-3 py-2 rounded-xl shadow-md border border-gray-700/50 backdrop-blur-sm transition-all hover:-translate-y-1 ${
                                                 category === 'Languages' ? 'bg-green-900/30 hover:bg-green-900/50 hover:border-green-500/50 text-green-100' : 
                                                 category === 'Frameworks' ? 'bg-purple-900/30 hover:bg-purple-900/50 hover:border-purple-500/50 text-purple-100' : 
                                                 'bg-blue-900/30 hover:bg-blue-900/50 hover:border-blue-500/50 text-blue-100'
                                             }`} 
                                             title={skill.name}>
                                            <span className={`text-xl ${
                                                 category === 'Languages' ? 'text-green-400' : 
                                                 category === 'Frameworks' ? 'text-purple-400' : 
                                                 'text-blue-400'
                                             }`}>{skill.icon}</span>
                                            <span className="text-sm font-medium">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Links Section */}
                <div className="mt-6 pt-8 border-t border-gray-700/50 w-full max-w-lg relative z-10">
                    <div className="flex justify-center space-x-8">
                        <a href="mailto:chrisdennis117@gmail.com" className="text-gray-400 hover:text-white transition-all text-2xl hover:scale-110 hover:-translate-y-1 duration-300" title="Email">
                            <FaEnvelope/>
                        </a>
                        <a href="https://linkedin.com/in/c-dennis/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-all text-2xl hover:scale-110 hover:-translate-y-1 duration-300" title="LinkedIn">
                            <FaLinkedin/>
                        </a>
                        <a href="https://github.com/chris-dennis" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all text-2xl hover:scale-110 hover:-translate-y-1 duration-300" title="GitHub">
                            <FaGithub/>
                        </a>
                        <a href="https://leetcode.com/u/cdv-1/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-500 transition-all text-2xl hover:scale-110 hover:-translate-y-1 duration-300" title="LeetCode">
                            <SiLeetcode/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
