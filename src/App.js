import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import { useState } from 'react';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className="flex">
            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            <div className="flex-1 h-screen overflow-y-auto">
                <section id="about" className={`p-4 md:p-6 relative flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                    <About isDarkMode={isDarkMode} />
                </section>

                <section id="projects" className={`flex justify-center items-start ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    <Projects isDarkMode={isDarkMode} />
                </section>
                <section id="contact" className="">
                    <Contact />
                </section>
            </div>
        </div>
    );
}

export default App;