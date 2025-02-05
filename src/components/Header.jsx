import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="bg-indigo-500 text-white p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6V3m0 0a9 9 0 100 18v-3m9-9h-3M3 12H0m18-9h3M6 6l12 12"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-indigo-700">Prescripto</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-700 border-b-2 border-indigo-500"
              : "text-gray-700"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-700 border-b-2 border-indigo-500"
              : "text-gray-700"
          }
        >
          ALL DOCTORS
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-700 border-b-2 border-indigo-500"
              : "text-gray-700"
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-700 border-b-2 border-indigo-500"
              : "text-gray-700"
          }
        >
          CONTACT
        </NavLink>
      </nav>

      {/* Admin Panel & Profile Icon */}
      <div className="flex items-center gap-4">
        <button className="border px-4 py-1  font-semibold rounded-full text-sm text-indigo-700 border-indigo-500">
          Admin Panel
        </button>
        <FaUserCircle className="text-indigo-500 text-2xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
