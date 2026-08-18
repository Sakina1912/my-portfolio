import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-teal-900/70 backdrop-blur-xl border-b border-teal-500/20 z-[100]">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
          <h1
            id="home"
            className="text-xl font-bold cursor-pointer text-teal-100 hover:text-white transition-colors duration-300"
          >
            Sakina Vora
          </h1>

          <ul className="gap-6 hidden md:flex">
            <li className="transition-all duration-300 hover:scale-105">
              <a
                href="#About"
                onClick={closeMenu}
                className="text-sm flex-auto cursor-pointer text-teal-100 hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>

            <li className="transition-all duration-300 hover:scale-105">
              <a
                href="#Experience"
                onClick={closeMenu}
                className="text-sm flex-auto cursor-pointer text-teal-100 hover:text-white transition-colors duration-300"
              >
                Experience
              </a>
            </li>
            <li className="transition-all duration-300 hover:scale-105">
              <a
                href="#Skills"
                onClick={closeMenu}
                className="text-sm flex-auto cursor-pointer text-teal-100 hover:text-white transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li className="transition-all duration-300 hover:scale-105">
              <a
                href="#Projects"
                onClick={closeMenu}
                className="text-sm flex-auto cursor-pointer text-teal-100 hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li className="transition-all duration-300 hover:scale-105">
              <a
                href="#Contact"
                className="text-sm flex-auto cursor-pointer text-teal-100 hover:text-white px-4 py-2 rounded-lg bg-accent-600/20 hover:bg-accent-600/30 border border-accent-600/30 hover:border-accent-600/50 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-teal-900/95 backdrop-blur-lg shadow-lg z-40 border-b border-teal-500/20">
          <ul className="flex flex-col items-center gap-4 py-6 text-teal-100">
            <li className="transition-all duration-300 hover:scale-110">
              <a
                href="#About"
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="hover:text-white transition-colors"
              >
                About
              </a>
            </li>
            <li className="transition-all duration-300 hover:scale-110">
              <a
                href="#Experience"
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="hover:text-white transition-colors"
              >
                Experience
              </a>
            </li>
            <li className="transition-all duration-300 hover:scale-110">
              <a
                href="#Skills"
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="hover:text-white transition-colors"
              >
                Skills
              </a>
            </li>
            <li className="transition-all duration-300 hover:scale-110">
              <a
                href="#Projects"
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="hover:text-white transition-colors"
              >
                Projects
              </a>
            </li>
            <li className="transition-all duration-300 hover:scale-110">
              <a
                href="#Contact"
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="px-4 py-2 rounded-lg bg-accent-600/30 hover:bg-accent-600/40 border border-accent-600/30 text-white transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
