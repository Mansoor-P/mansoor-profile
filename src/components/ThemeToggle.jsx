import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Import icons

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
    >
      {theme === "light" ? (
        <FaMoon className="text-xl text-gray-800 dark:text-white" />
      ) : (
        <FaSun className="text-xl text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
