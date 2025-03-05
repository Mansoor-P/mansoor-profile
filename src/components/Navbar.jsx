import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import mansoorImage from "../assets/mansoor.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blogs", path: "/blogs" },
  { name: "Projects", path: "/github-projects" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const closeMenu = (e) =>
      !menuRef.current.contains(e.target) && setIsOpen(false);
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-white/10 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-400 dark:border-gray-700 z-50">
      {/* Logo */}
      <NavLink to="/" className="logo_name flex items-center space-x-2">
        <span className="text-4xl  text-indigo-700 ">Mansoor</span>
      </NavLink>

      {/* Desktop Menu */}
      <ul className="nav_titles hidden md:flex space-x-6 text-lg font-medium">
        {navLinks.map(({ name, path }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "font-semibold text-blue-500" : "hover:text-blue-500"
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className="nav_titles md:hidden text-3xl text-gray-800 dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-3/4 h-screen bg-white dark:bg-gray-900 shadow-lg flex flex-col items-center justify-center space-y-6 text-xl font-semibold md:hidden"
          >
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-500"
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
