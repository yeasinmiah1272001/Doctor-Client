import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import DashboardLayout from "../layout/DashboardLayout";
import AddDoctor from "../pages/dashboard/AddDoctor";
import AdminHome from "../pages/dashboard/AdminHome";
import Appointments from "../pages/dashboard/Appointments";
import DoctorsList from "../pages/dashboard/DoctorsList";
import AllDoctors from "../pages/home/AllDoctors";
import Contact from "../pages/home/Contact";
import About from "../pages/home/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "alldoctors",
        element: <AllDoctors />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "add-doctor",
        element: <AddDoctor />,
      },
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "appointments",
        element: <Appointments />,
      },
      {
        path: "doctorslist",
        element: <DoctorsList />,
      },
    ],
  },
]);
