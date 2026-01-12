import { useResponsive } from "@/shared/hooks/useResponsive";
import { FoodMenu } from "@/widgets/FoodMenu";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

function DrawerMenu() {
  const [open, setOpen] = useState(false);

  const { sm } = useResponsive();
  const { t } = useTranslation();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  if (sm) return null;

  return (
    <>
      <Button type="primary" icon={<MenuOutlined />} onClick={showDrawer} />

      <Drawer title={t("Food menu")} onClose={onClose} open={open}>
        <FoodMenu />
      </Drawer>
    </>
  );
}

export default DrawerMenu;
