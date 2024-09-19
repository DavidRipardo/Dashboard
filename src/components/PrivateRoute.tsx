import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { MainLayout } from "../layout";

interface PrivateRouteProps {
  element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAutenticado } = useContext(AuthContext);
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (!isAutenticado && !token) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <MainLayout>{element}</MainLayout>;
};

export default PrivateRoute;
