import {projects} from "./data";
import {FaExternalLinkAlt} from 'react-icons/fa';

export default function Projects({isDarkMode}) {
    return (<section className={`py-12 w-full pb-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
            <h2 className={`text-3xl font-semibold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Projects</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.title} className={`rounded-lg shadow-md overflow-hidden flex flex-col ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                        <img src={project.thumb} alt={`${project.title} Thumbnail`} className="w-full h-48 object-cover"/>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                         <div>
                            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{project.title}</h3>
                            <p className={`mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{project.description}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div
                                className={`flex space-x-2 text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                {project.tech}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                <FaExternalLinkAlt/>
                            </a>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    </section>);
}