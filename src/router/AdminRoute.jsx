import React, { useContext } from "react";

import { FaSpinner } from "react-icons/fa";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="text-blue-500 text-6xl animate-spin" />
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
