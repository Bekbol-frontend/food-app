import { AuthLogin } from "@/features/AuthLogin";
import styles from "./AuthLoginPage.module.scss";
import { useGetAuth } from "@/shared/hooks/useGetAuth";
import { Navigate } from "react-router-dom";
import { AppRoutePages } from "@/shared/config/routeConfig";

function AuthLoginPage() {
  const { token } = useGetAuth();

  if (token) {
    return <Navigate to={AppRoutePages.home} replace />;
  }

  return (
    <div className={styles.page}>
      <AuthLogin />
    </div>
  );
}

export default AuthLoginPage;
