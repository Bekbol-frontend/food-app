import { AppRoutePages } from "@/shared/config/routeConfig";
import {
  AppstoreOutlined,
  BarChartOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

interface IProps {
  onCloseDrawer?: () => void;
}

function FoodMenu({ onCloseDrawer }: IProps) {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <Menu
      mode="inline"
      selectedKeys={[pathname]}
      onClick={() => {
        if (onCloseDrawer) {
          onCloseDrawer();
        }
      }}
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
  );
}

export default FoodMenu;
