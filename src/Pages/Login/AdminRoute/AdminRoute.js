import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate } from "react-router";
import { useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children }) => {
  let { user, isLoading, admin } = useAuth();
  let location = useLocation();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (user.email && admin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
