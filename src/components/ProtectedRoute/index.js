import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, reqUser }) => {
  const user_type = Cookies.get("user_type");
  const jwt_token = Cookies.get("jwt_token");

  if (!jwt_token) {
    return <Navigate to="/login" />;
  }

  if (!user_type) {
    return <Navigate to="/" />; // Redirect to landing page or an appropriate fallback.
  }

  if (user_type === reqUser) {
    return <Component />;
  } else {
    switch (user_type) {
      case "USER":
        return <Navigate to="/user" />;
      case "WORKER":
        return <Navigate to="/worker" />;
      case "ADMIN":
        return <Navigate to="/admin" />;
      default:
        return <Navigate to="/" />;
    }
  }
};

export default ProtectedRoute;
