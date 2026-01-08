import { type ReactNode } from "react";
import { ConfigProvider, theme } from "antd";
import { useAppContext } from "@/shared/lib/useAppContext";
import type { THEME } from "../../AppContextProvider";

function getColor(appTheme: THEME, content: string) {
  return appTheme === "dark" ? `var(${content}-dark)` : `var(${content}-light)`;
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
            headerBg: getColor(appTheme, "--content-bg"),
            siderBg: getColor(appTheme, "--content-bg"),
            bodyBg: getColor(appTheme, "--content-bg"),
          },
          Menu: {
            itemBg: getColor(appTheme, "--content-bg"),
          },
          Button: {
            controlHeight: 37,
          },
          Input: {
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
