import { AuthLogin } from "@/features/AuthLogin";
import styles from "./AuthLoginPage.module.scss";

function AuthLoginPage() {
  return (
    <div className={styles.page}>
      <AuthLogin />
    </div>
  );
}

export default AuthLoginPage;
