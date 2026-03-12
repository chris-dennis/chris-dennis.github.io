import './App.css';
import About from "./components/About";

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-[#00001f] text-white selection:bg-blue-500 selection:text-white">
            <main className="flex-1 flex items-center justify-center p-4 md:p-8">
                <About />
            </main>
        </div>
    );
}

export default App;
