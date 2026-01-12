import { Spin } from "antd";
import styles from "./LoadingPage.module.scss";
import { useResponsive } from "@/shared/hooks/useResponsive";

function LoadingPage() {
  const { sm } = useResponsive();

  return (
    <div className={styles.loadingPage}>
      <Spin size={sm ? "large" : "default"} />
    </div>
  );
}

export default LoadingPage;
