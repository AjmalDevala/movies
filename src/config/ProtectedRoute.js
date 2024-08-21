import React from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isRegistered = localStorage.getItem("isRegistered");

  if (!isRegistered) {
    return navigate("/login");
  }

  return children;
};

export default ProtectedRoute;
