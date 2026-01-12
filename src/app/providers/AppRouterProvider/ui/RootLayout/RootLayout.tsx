import { Suspense } from "react";
import { HeaderNav } from "@/widgets/HeaderNav";
import { Sidebar } from "@/widgets/Sidebar";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import styles from "./RootLayout.module.scss";
import { useResponsive } from "@/shared/hooks/useResponsive";

const { Content } = Layout;

function RootLayout() {
  const { sm } = useResponsive();

  return (
    <Layout className={styles.rooLayout}>
      {sm && <Sidebar />}
      <Layout>
        <HeaderNav />
        <Content className={styles.content}>
          <Suspense>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
}

export default RootLayout;
