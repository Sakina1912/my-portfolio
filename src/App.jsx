// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Project";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-teal-950 via-teal-900 to-teal-950">
        {/* Background overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-teal-800/20 via-transparent to-teal-800/10" />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />

          <main className="flex flex-1 items-center justify-center px-4 py-8">
            <LandingSection />
          </main>
        </div>
      </div>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 bg-gradient-to-b from-white via-teal-50 to-white py-20">
        <section id="About">
          <AboutMe />
        </section>
        <section id="Experience">
          <Experience />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Projects">
          <Project />
        </section>
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}

export default App;
