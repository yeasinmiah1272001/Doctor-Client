import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Container from "./Container";
import { AuthContext } from "../provider/AuthProvider";
import { use } from "react";
import useCarts from "../hooks/useCarts";
import useAdmin from "../hooks/useAdmin";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [doctorsCart] = useCarts();
  console.log("cart", doctorsCart);
  const handleLogout = () => {
    logOut();
  };

  return (
    <div className="shadow-md bg-white sticky top-0 z-50">
      <Container className="flex items-center justify-between py-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
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
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {["/", "/alldoctors", "/about", "/contact"].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-700 border-b-2 border-indigo-500"
                  : "text-gray-700 hover:text-indigo-500"
              }
            >
              {path.toUpperCase().slice(1) || "HOME"}
            </NavLink>
          ))}
        </nav>

        {/* Admin Panel & Profile Icon */}
        <div className="flex items-center gap-4">
          {user && isAdmin && (
            <p className="border px-4 py-1 font-semibold rounded-full text-sm text-indigo-700 border-indigo-500 hover:bg-indigo-50">
              <NavLink to="/dashboard/adminHome">DashBoard</NavLink>
            </p>
          )}
          {user && !isAdmin && (
            <p className="border px-4 py-1 font-semibold rounded-full text-sm text-indigo-700 border-indigo-500 hover:bg-indigo-50">
              <NavLink to="/dashboard/userHome">
                DashBoard ({doctorsCart.length})
              </NavLink>
            </p>
          )}
          {user && (
            <p>
              <button className="border px-4 py-1 font-semibold rounded-full text-sm text-indigo-700 border-indigo-500 hover:bg-indigo-50">
                {user.email}
              </button>
            </p>
          )}
          {user ? (
            <p className="cursor-pointer" onClick={() => handleLogout()}>
              Logout
            </p>
          ) : (
            <Link to={user ? "/" : "/login"}>
              <FaUserCircle className="text-indigo-500 text-2xl cursor-pointer hover:text-indigo-700" />
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
