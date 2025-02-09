import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="text-blue-500 text-6xl animate-spin" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
