import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import mansoorImage from "../assets/mansoor.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blogs", path: "/blogs" },
  { name: "Projects", path: "/github-projects" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-toggle")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-white/10 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-400 dark:border-gray-700 border-dotted z-50">
      <NavLink to="/" className="flex items-center space-x-2">
        <motion.img
          src={mansoorImage}
          alt="Profile"
          className="w-12 h-12 rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
        />
        <span className="text-lg font-semibold bg-indigo-200 dark:bg-indigo-700 text-indigo-700 dark:text-white px-4 py-1 rounded-full transition-all duration-300 hover:bg-white/10 hover:border hover:border-indigo-700">
          Mansoor Pathikonda
        </span>
      </NavLink>
      <div className="hidden md:flex items-center space-x-8">
        <ul className="flex space-x-6 text-lg font-medium">
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `transition-all duration-300 ${
                    isActive
                      ? "font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
                      : "hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text"
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="md:hidden text-3xl text-gray-800 dark:text-white menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-3/4 h-screen bg-white dark:bg-gray-900 shadow-lg flex flex-col items-center justify-center space-y-6 text-xl font-semibold md:hidden mobile-menu"
          >
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text transition-all duration-300"
              >
                {name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
