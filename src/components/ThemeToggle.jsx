import React from "react";
import { useTheme } from "../hooks/useTheme";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className=" z-50 p-3 rounded-lg  dark:text-white transition-colors duration-300"
    >
      {isDarkMode ? (
        <FiSun className="w-6 h-6 text-yellow-400 transition-transform duration-300 hover:scale-110" />
      ) : (
        <FiMoon className="w-6 h-6 text-blue-500 transition-transform duration-300 hover:scale-110" />
      )}
    </button>
  );
};

export default ThemeToggle;
