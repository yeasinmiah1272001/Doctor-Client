import { Link, NavLink, Outlet } from "react-router-dom";
import { HiHome, HiCalendar, HiUserAdd, HiUsers } from "react-icons/hi";
import React from "react";
import Container from "../components/Container";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b z-10">
        <Container
          to={"/"}
          className="flex items-center justify-between px-4 py-3"
        >
          <Link to={"/"} className="flex items-center gap-2">
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
            <span className="text-xl font-semibold text-gray-800">
              Prescripto
            </span>
            <span className="ml-2 px-2 py-1 text-sm bg-gray-100 rounded-md text-black">
              Admin
            </span>
          </Link>
          <button className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors">
            Logout
          </button>
        </Container>
      </header>

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-white border-r pt-16">
        <nav className="p-4 space-y-2">
          <NavLink
            to="/dashboard/adminHome"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-gray-700 ${
                isActive ? "bg-gray-300" : ""
              } rounded-lg transition-colors`
            }
          >
            <HiHome className="text-xl" />
            <span>Admin Home</span>
          </NavLink>
          <NavLink
            to="/dashboard/appointments"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-gray-700 ${
                isActive ? "bg-gray-300" : ""
              } rounded-lg transition-colors`
            }
          >
            <HiCalendar className="text-xl" />
            <span>Appointments</span>
          </NavLink>
          <NavLink
            to="/dashboard/add-doctor"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-gray-700 ${
                isActive ? "bg-gray-300" : ""
              } rounded-lg transition-colors`
            }
          >
            <HiUserAdd className="text-xl" />
            <span>Add Doctor</span>
          </NavLink>
          <NavLink
            to="/dashboard/doctorslist"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-gray-700 ${
                isActive ? "bg-gray-300" : ""
              } rounded-lg transition-colors`
            }
          >
            <HiUsers className="text-xl" />
            <span>Doctors List</span>
          </NavLink>
        </nav>
        {/* divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t-2 border-gray-300" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="flex-grow border-t-2 border-gray-300" />
        </div>
        {/*  */}
        {/* home related  */}

        <nav className="p-4 space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-gray-700 ${
                isActive ? "bg-gray-300" : ""
              } rounded-lg transition-colors`
            }
          >
            <HiHome className="text-xl" />
            <span> Home</span>
          </NavLink>
          <NavLink
            to="/allDoctors"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-gray-700 ${
                isActive ? "bg-gray-300" : ""
              } rounded-lg transition-colors`
            }
          >
            <HiCalendar className="text-xl" />
            <span>All Doctor</span>
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 pt-16 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
