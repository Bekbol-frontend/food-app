import { Suspense } from "react";
import { HeaderNav } from "@/widgets/HeaderNav";
import { Sidebar } from "@/widgets/Sidebar";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import styles from "./RootLayout.module.scss";

const { Content } = Layout;

function RootLayout() {
  return (
    <Layout className={styles.rooLayout}>
      <Sidebar />
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
