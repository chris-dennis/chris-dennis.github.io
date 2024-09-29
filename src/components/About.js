import {courses, skills} from "./data";
import {FaDownload, FaInfoCircle} from "react-icons/fa";
import {useState, useRef, useEffect} from "react";
import {motion} from 'framer-motion';

export default function About({isDarkMode}) {
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipRef = useRef(null);
    const iconRef = useRef(null);

    // Toggle tooltip visibility on icon click
    const toggleTooltip = () => {
        console.log(window.innerWidth);
        setShowTooltip((prev) => !prev);
    };

    // Hide tooltip when clicking outside or on scroll
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target) && iconRef.current && !iconRef.current.contains(event.target)) {
                setShowTooltip(false);
            }
        };

        const handleScroll = () => {
            setShowTooltip(false);
        };

        if (showTooltip) {
            document.addEventListener("mousedown", handleClickOutside);
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [showTooltip]);

    const headingVariants = {
        hidden: {opacity: 0, y: -50}, visible: {
            scale: 1, opacity: 1, y: 0, transition: {duration: 1, ease: 'easeOut'},
        },
    };


    return (<section className={`p-4 md:p-6 relative flex items-center justify-center overflow-hidden ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {/* Arcs */}
            <div className="arcs-container">
                <div className="arc arc1"></div>
                <div className="arc arc2"></div>
                <div className="arc arc3"></div>
                <div className="arc arc4"></div>
                <div className="arc arc5"></div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col mx-auto md:flex-row md:justify-between w-full max-w-5xl h-fit z-10 relative">
                <div className={`p-4 md:p-6 rounded-md w-full flex flex-col gap-4 justify-evenly`}>
                    <motion.h1 className="text-3xl" variants={headingVariants} initial="hidden" whileInView="visible" viewport={{once: false, amount: 0.5}}>
                        Welcome, I'm Chris!
                    </motion.h1>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
                        Full Stack Developer
                    </h2>
                    <div className="relative">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium">
                            <a href="https://www.pomona.edu/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                                Pomona College
                            </a>{" "}
                            Computer Science 2024
                            {/* Info icon to toggle tooltip */}
                            <span
                                onClick={toggleTooltip}
                                ref={iconRef}
                                className="inline-flex items-center ml-2 text-gray-500 cursor-pointer"
                            >
                                <FaInfoCircle/>
                            </span>
                        </h3>
                        {/* Tooltip */}
                        {showTooltip && (
                            <div ref={tooltipRef} className={`absolute z-20 mt-2 p-3 w-48 text-left text-sm rounded-md shadow-lg transition-opacity duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-800 text-white'}`}
                                style={{left: "50%", transform: "translateX(-50%)",}} role="tooltip">
                                <ul className="list-disc list-inside">
                                    {courses.map((course, index) => (<li className="p-0.5" key={index}>
                                            {course}
                                        </li>))}
                                </ul>
                            </div>)}
                    </div>
                    <h4 className="text-base md:text-lg lg:text-xl">
                        <a href="https://www.questbridge.org/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                            QuestBridge
                        </a>{" "}
                        College Match Scholarship Recipient
                    </h4>
                    <h4 className="text-base md:text-lg lg:text-xl">
                        <a href="https://www.seic.com/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                            SEI Investments
                        </a>{" "}
                        Summer 2023 Intern
                    </h4>
                    <h4 className="flex flex-row gap-1 text-base md:text-lg lg:text-xl">
                        Download Resume
                        <a href="Resume CD.pdf" download className="flex items-center text-blue-600 underline">
                            .pdf <FaDownload className="ml-1"/>
                        </a>
                    </h4>

                    {/* Skills Section */}
                    <div className="mt-4 md:mt-6 flex flex-col md:flex-row text-center md:divide-x divide-gray-300">
                        {Object.entries(skills).map(([category, skillsArray], index) => (
                            <div key={category} className="mb-4 md:mb-0 flex flex-col items-center px-2 md:px-4">
                                {/* Category Title */}
                                <h2 className="text-xl md:text-2xl mb-3">
                                    {category}
                                </h2>

                                {/* Skills List */}
                                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                                    {skillsArray.map((skill) => (
                                        <div key={skill.name} className={`flex items-center p-2 md:p-3 rounded-md shadow-sm hover:bg-gray-50 transition-colors dark:text-gray-900 ${category === 'Languages' ? 'bg-green-200' : category === 'Frameworks' ? 'bg-purple-200' : 'bg-blue-200'}`}>
                                            <div className="mr-1 md:mr-2 text-xl md:text-2xl text-gray-900 dark:text-gray-900">
                                                {skill.icon}
                                            </div>
                                            <div className="font-medium text-sm md:text-base">
                                                {skill.name}
                                            </div>
                                        </div>))}
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>

            {/* Arcs Styling */}
            <style jsx>{`
                .arcs-container {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 300px;
                    height: 300px;
                    transform: translate(-50%, -50%);
                    pointer-events: none;
                }

                .arc {
                    position: absolute;
                    top: 0;
                    left: 0;
                    border: 2px solid transparent;
                    border-top-color: #4f46e5;
                    border-radius: 50%;
                    opacity: 0.5;
                    animation: rotate 20s linear infinite;
                    transform-origin: center center;
                }

                /* Individual Arc Styles */
                .arc1 {
                    width: 500px;
                    height: 500px;
                    border-top-color: #4f46e5;
                    animation-duration: 30s;
                    animation-direction: normal;
                }

                .arc2 {
                    width: 250px;
                    height: 250px;
                    border-top-color: #10b981;
                    animation-duration: 25s;
                    animation-direction: reverse;
                }

                .arc3 {
                    width: 300px;
                    height: 300px;
                    border-top-color: #f59e0b;
                    animation-duration: 20s;
                    animation-direction: normal;
                }

                .arc4 {
                    width: 150px;
                    height: 150px;
                    border-top-color: #ef4444;
                    animation-duration: 15s;
                    animation-direction: reverse;
                }

                .arc5 {
                    width: 100px;
                    height: 100px;
                    border-top-color: #3b82f6;
                    animation-duration: 10s;
                    animation-direction: normal;
                }

                /* Keyframes for Rotation */
                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                /* Responsive Adjustments */
                @media (min-width: 1024px) {
                    .arcs-container {
                        width: 500px;
                        height: 500px;
                    }
                }

                @media (min-width: 768px) and (max-width: 1023px) {
                    .arcs-container {
                        width: 400px;
                        height: 400px;
                    }
                }

                @media (min-width: 480px) and (max-width: 767px) {
                    .arcs-container {
                        width: 300px;
                        height: 300px;
                    }
                }

                @media (max-width: 479px) {
                    .arcs-container {
                        display: none;
                    }
                }
            `}</style>
        </section>);
}
