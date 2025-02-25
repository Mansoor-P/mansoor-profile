import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import mansoorImage from "../assets/mansoor.jpg";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blogs", path: "/blogs" },
  { name: "Projects", path: "/github-projects" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-white/10 backdrop-blur-lg border-b border-gray-400 border-dotted z-50">
      {/* Logo */}
      <NavLink to="/" className="flex items-center">
        <motion.img
          src={mansoorImage}
          alt="Profile"
          className="w-14 h-14 rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
        />
        <span className="ml-2 bg-indigo-200 text-indigo-700 px-4 rounded-full cursor-pointer hover:border hover:border-indigo-700 hover:bg-white/10">
          Mansoor Pathikonda
        </span>
      </NavLink>

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center space-x-6">
        <ul className="flex space-x-6 text-2xl">
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
        {/* Theme Toggle Button (Now with Icon) */}
        <ThemeToggle />
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-3xl" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-3/4 h-screen bg-white flex flex-col items-center justify-center space-y-6 text-2xl font-semibold shadow-lg md:hidden"
          >
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={path}
                to={path}
                onClick={toggleMenu}
                className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text transition-all duration-300"
              >
                {name}
              </NavLink>
            ))}
            {/* Theme Toggle Button in Mobile Menu */}
            <ThemeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
