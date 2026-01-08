import { AppRoutePages } from "@/shared/config/routeConfig";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const check = false;

  return check ? <Outlet /> : <Navigate to={AppRoutePages.login} replace />;
}

export default ProtectedRoute;
