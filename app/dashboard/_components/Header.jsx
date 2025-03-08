"use client";

import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";

function Header() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`flex justify-between items-center p-6 border-b shadow-lg ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-all duration-300 ease-in-out`}
    >
      {/* Left Section (Logo or Placeholder) */}
      <div>
        <h1 className="text-2xl font-extrabold tracking-wide font-poppins">InterviewMate</h1>
      </div>

      {/* Right Section (Profile + Dark Mode Toggle) */}
      <div className="flex items-center gap-6">
        {/* Dark Mode Toggle */}
        <button
          className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300 hover:scale-110 shadow-md"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer p-2 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-lg">
          <span className="text-gray-300 font-semibold tracking-wide">
            Hello, User
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
