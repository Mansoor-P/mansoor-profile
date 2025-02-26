import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const getInitialTheme = () => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
      aria-label="Toggle Theme"
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
