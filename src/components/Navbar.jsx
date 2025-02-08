import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-3 flex justify-between items-center backdrop-blur-lg bg-white/10 border border-white/20 shadow-md">
      <h1 className="text-3xl text-yellow-400 hover:text-black transition-all duration-300">
        Mansoor
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-2xl">
        {["Home", "Blog", "Github Projects", "About"].map((item, index) => (
          <li key={index}>
            <NavLink
              to={
                item === "Home"
                  ? "/"
                  : item === "Blog"
                  ? "/blogs" // ✅ Fix here
                  : `/${item.toLowerCase().replace(/\s+/g, "-")}`
              }
              className={({ isActive }) =>
                `hover:text-yellow-400 transition-all duration-300 ${
                  isActive ? "text-yellow-500 font-semibold" : "text-black"
                }`
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button (Placeholder) */}
      <button className="md:hidden text-white text-3xl">☰</button>
    </nav>
  );
};

export default Navbar;
