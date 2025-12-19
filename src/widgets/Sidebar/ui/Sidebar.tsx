import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import styles from "./Sidebar.module.scss";
import { AppRoutePages } from "@/shared/config/routeConfig";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

function Sidebar() {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <Sider className={styles.sidebar} width={260}>
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        items={[
          {
            key: AppRoutePages.home,
            icon: <BarChartOutlined />,
            label: <Link to={AppRoutePages.home}>{t("Statistics")}</Link>,
          },
          {
            key: AppRoutePages.menu,
            icon: <MenuOutlined />,
            label: <Link to={AppRoutePages.menu}>{t("Menu")}</Link>,
          },
          {
            key: AppRoutePages.categories,
            icon: <AppstoreOutlined />,
            label: <Link to={AppRoutePages.categories}>{t("Categories")}</Link>,
          },
          {
            key: AppRoutePages.products,
            icon: <ShoppingOutlined />,
            label: <Link to={AppRoutePages.products}>{t("Products")}</Link>,
          },
          {
            key: AppRoutePages.orders,
            icon: <ShoppingCartOutlined />,
            label: <Link to={AppRoutePages.orders}>{t("Orders")} </Link>,
          },
          {
            key: AppRoutePages.clients,
            icon: <TeamOutlined />,
            label: <Link to={AppRoutePages.clients}>{t("Clients")} </Link>,
          },
        ]}
      />
    </Sider>
  );
}

export default Sidebar;
