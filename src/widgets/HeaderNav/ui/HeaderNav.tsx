import { Flex, Layout } from "antd";
import styles from "./HeaderNav.module.scss";
import { SwitchLang } from "@/shared/ui/SwitchLang";
import { SwitchTheme } from "@/shared/ui/SwitchTheme";

const { Header } = Layout;

function HeaderNav() {
  return (
    <Header className={styles.header}>
      <Flex gap={10} justify="space-between" align="center">
        <Flex>logo</Flex>
        <Flex gap={10} justify="space-between" align="center">
          <SwitchLang />
          <SwitchTheme />
        </Flex>
      </Flex>
    </Header>
  );
}

export default HeaderNav;
