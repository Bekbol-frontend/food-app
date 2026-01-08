import { Route, Routes } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import { AppRoutePages } from "@/shared/config/routeConfig";
import { HomePageAsync } from "@/pages/HomePage";
import { MenuPageAsync } from "@/pages/MenuPage";
import { CategoriesPageAsync } from "@/pages/CategoriesPage";
import { ProductsPageAsync } from "@/pages/ProductsPage";
import { OrdersPageAsync } from "@/pages/OrdersPage";
import { ClientsPageAsync } from "@/pages/ClientsPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { AuthLoginPageLazy } from "@/pages/AuthLoginPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route element={<RootLayout />}>
          <Route path={AppRoutePages.home} element={<HomePageAsync />} />
          <Route path={AppRoutePages.menu} element={<MenuPageAsync />} />
          <Route
            path={AppRoutePages.categories}
            element={<CategoriesPageAsync />}
          />
          <Route
            path={AppRoutePages.products}
            element={<ProductsPageAsync />}
          />
          <Route path={AppRoutePages.orders} element={<OrdersPageAsync />} />
          <Route path={AppRoutePages.clients} element={<ClientsPageAsync />} />
        </Route>
      </Route>

      <Route path={AppRoutePages.login} element={<AuthLoginPageLazy />} />
    </Routes>
  );
}

export default AppRoutes;
