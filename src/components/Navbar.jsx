import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

import mansoorImage from "../assets/mansoor.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Blog", "Github Projects"];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-white/10 backdrop-blur-lg border-b border-gray-400 border-dotted z-50">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <motion.img
            src={mansoorImage}
            alt="Profile"
            className="w-16 h-16 object-cover rounded-full shadow-lg "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
          />{" "}
          <div className="relative group inline-block">
            <span
              className="bg-indigo-200 text-indigo-700 px-4 rounded-full mx-2 
                   hover:border-dashed hover:border hover:border-indigo-700 
                   hover:bg-white/10 cursor-pointer"
            >
              Mansoor Pathikonda
            </span>

            {/* Hover Tooltip */}
            <div
              className="absolute top-4 left-55 transform -translate-x-1/2 
                 w-64 bg-indigo-300 text-indigo-800 text-sm px-3 py-1 rounded-md 
                  opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              Hey, I'm Mansoor! Thank You For Visiting My Portfolio.😍
            </div>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-2xl">
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavLink
                to={
                  item === "Home"
                    ? "/"
                    : item === "Blog"
                    ? "/blogs"
                    : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                }
                className={({ isActive }) =>
                  `transition-all duration-300 ${
                    isActive
                      ? "font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
                      : "text-black hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed top-0 left-0 w-3/4 h-screen bg-white flex flex-col items-center justify-center space-y-6 text-2xl font-semibold text-black shadow-lg md:hidden"
            >
              {navLinks.map((item, index) => (
                <NavLink
                  key={index}
                  to={
                    item === "Home"
                      ? "/"
                      : item === "Blog"
                      ? "/blogs"
                      : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className="relative text-gray-900 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 
                          hover:text-transparent hover:bg-clip-text transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
