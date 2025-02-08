import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/reducers";

interface PrivateRouteProps {
  roles: string[];
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ roles, children }) => {
  const { isAuthenticated, role } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    // Redirige al login si no está autenticado
    return <Navigate to="/unauthorized" replace />;
  }

  if (!roles.includes(role || "")) {
    // Redirige a no autorizado si el rol no coincide
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
