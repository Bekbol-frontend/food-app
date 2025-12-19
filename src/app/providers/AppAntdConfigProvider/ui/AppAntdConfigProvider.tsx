import { type ReactNode } from "react";
import { ConfigProvider, theme } from "antd";
import { useAppContext } from "@/shared/lib/useAppContext";
import type { THEME } from "../../AppContextProvider";

function getColor(appTheme: THEME) {
  return appTheme === "dark"
    ? "var(--content-bg-dark)"
    : "var(--content-bg-light)";
}

interface IProps {
  children: ReactNode;
}

function AppAntdConfigProvider({ children }: IProps) {
  const { theme: appTheme } = useAppContext();

  return (
    <ConfigProvider
      theme={{
        algorithm:
          appTheme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,

        token: {
          fontSize: 16,
          fontFamily: "var(--font-nunito)",
          borderRadius: 4,
        },
        components: {
          Layout: {
            headerHeight: 90,
            headerBg: getColor(appTheme),
            siderBg: getColor(appTheme),
            bodyBg: getColor(appTheme),
          },
          Menu: {
            itemBg: getColor(appTheme),
          },
          Button: {
            controlHeight: 37,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AppAntdConfigProvider;
