import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle.jsx'

const TopNav = () => {
  return (
    
    <nav className="bg-white dark:bg-gray-800 shadow-sm p-4 rounded-lg flex items-center justify-between mb-6">
      {/* Search bar */}
      <div className="relative flex items-center w-1/3">
        <FontAwesomeIcon icon={faSearch} className="absolute left-3 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7c81d5] dark:focus:ring-orange-500"
        />
      </div>

      {/* Right-hand side: Notifications and User Profile */}
      <div className="flex items-center space-x-6">
        {/* Notification icon */}
        <button className="relative text-gray-600 dark:text-gray-300 hover:text-[#7c81d5] dark:hover:text-orange-400 transition-colors duration-200">
          <FontAwesomeIcon icon={faBell} className="h-6 w-6" />
          {/* Example notification badge */}
          <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </button>

        {/* User profile section */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <FontAwesomeIcon icon={faUserCircle} className="h-8 w-8 text-gray-600 dark:text-gray-300" />
          <span className="font-medium text-gray-800 dark:text-gray-200 hidden md:block">Emmanuel Famakinde</span>
        </div> 
        <ThemeToggle />
      </div>

     
    </nav>
  );
};

export default TopNav;
