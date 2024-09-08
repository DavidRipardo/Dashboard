import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

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
  return element;
};

export default PrivateRoute;
