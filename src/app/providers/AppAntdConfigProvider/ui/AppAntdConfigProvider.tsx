import { type ReactNode } from "react";
import { ConfigProvider, theme } from "antd";
import { useAppContext } from "@/shared/lib/useAppContext";
import type { THEME } from "../../AppContextProvider";
import { useResponsive } from "@/shared/hooks/useResponsive";

function getColor(appTheme: THEME, content: string) {
  return appTheme === "dark" ? `var(${content}-dark)` : `var(${content}-light)`;
}

interface IProps {
  children: ReactNode;
}

function AppAntdConfigProvider({ children }: IProps) {
  const { theme: appTheme } = useAppContext();

  const { sm } = useResponsive();

  return (
    <ConfigProvider
      theme={{
        algorithm:
          appTheme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,

        token: {
          fontSize: sm ? 16 : 15,
          fontFamily: "var(--font-nunito)",
          borderRadius: 4,
        },
        components: {
          Layout: {
            headerHeight: 90,
            headerPadding: 0,
            headerBg: getColor(appTheme, "--content-bg"),
            siderBg: getColor(appTheme, "--content-bg"),
            bodyBg: getColor(appTheme, "--content-bg"),
          },
          Menu: {
            itemBg: sm
              ? getColor(appTheme, "--content-bg")
              : getColor(appTheme, "--menu-drawer"),
          },
          Button: {
            controlHeight: 37,
          },
          Input: {
            controlHeight: 37,
          },
          InputNumber: {
            controlHeight: 37,
          },
          Select: {
            controlHeight: 37,
          },
          Drawer: {
            colorBgElevated: getColor(appTheme, "--menu-drawer"),
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AppAntdConfigProvider;
