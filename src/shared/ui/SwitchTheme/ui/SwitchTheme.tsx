import { useAppContext } from "@/shared/lib/useAppContext";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button } from "antd";

function SwitchTheme() {
  const { theme, toggleTheme } = useAppContext();

  return (
    <Button
      type="primary"
      onClick={toggleTheme}
      icon={theme === "light" ? <MoonOutlined /> : <SunOutlined />}
    />
  );
}

export default SwitchTheme;
