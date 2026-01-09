import { AppRoutePages } from "@/shared/config/routeConfig";
import { useGetAuth } from "@/shared/hooks/useGetAuth";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { token } = useGetAuth();

  return token ? <Outlet /> : <Navigate to={AppRoutePages.login} replace />;
}

export default ProtectedRoute;
