import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import DashboardLayout from "../layout/DashboardLayout";
import AllDoctors from "../pages/AllDoctors";
import Contact from "../pages/Contact";
import About from "../pages/About";
import AddDoctor from "../pages/dashboard/AddDoctor";
import AdminHome from "../pages/dashboard/AdminHome";
import Appointments from "../pages/dashboard/Appointments";
import DoctorsList from "../pages/dashboard/DoctorsList";
import DoctorsDetails from "../pages/DoctorsDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserCarts from "../pages/dashboard/UserCarts";
import AllUserList from "../pages/dashboard/AllUserList";
import PrivateRoutes from "../router/PrivateRoutes";
import UserHome from "../pages/dashboard/UserHome";
import AdminRoute from "./AdminRoute";
import UserProfile from "../pages/dashboard/UserProfile";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/appointmentDetails/:id",
        element: <DoctorsDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/doctors/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "add-doctor",
        element: <AddDoctor />,
      },
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "appointments",
        element: <Appointments />,
      },
      {
        path: "doctorslist",
        element: (
          <AdminRoute>
            {" "}
            <DoctorsList />
          </AdminRoute>
        ),
      },
      {
        path: "userCarts",
        element: <UserCarts />,
      },
      {
        path: "userList",
        element: <AllUserList />,
      },
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "userProfile",
        element: <UserProfile />,
      },
    ],
  },
]);
