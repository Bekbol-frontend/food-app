import { useResponsive } from "@/shared/hooks/useResponsive";
import { SwitchTheme } from "@/shared/ui/SwitchTheme";
import { FoodMenu } from "@/widgets/FoodMenu";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Flex, Typography } from "antd";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./DrawerMenu.module.scss";

const { Paragraph } = Typography;

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

      <Drawer
        title={
          <Flex align="center" gap={10} justify="space-between">
            <Paragraph className={styles.desc}>{t("Food menu")}</Paragraph>
            <SwitchTheme />
          </Flex>
        }
        onClose={onClose}
        open={open}
      >
        <FoodMenu onCloseDrawer={onClose} />
      </Drawer>
    </>
  );
}

export default DrawerMenu;
