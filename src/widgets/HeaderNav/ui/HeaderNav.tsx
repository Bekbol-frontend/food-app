import { Flex, Layout } from "antd";
import styles from "./HeaderNav.module.scss";
import { SwitchLang } from "@/shared/ui/SwitchLang";
import { SwitchTheme } from "@/shared/ui/SwitchTheme";
import { Logo } from "@/shared/ui/Logo";

const { Header } = Layout;

function HeaderNav() {
  return (
    <Header className={styles.header}>
      <Flex flex={1} gap={10} justify="space-between" align="center">
        <Flex>
          <Logo />
        </Flex>
        <Flex gap={10} justify="space-between" align="center">
          <SwitchLang />
          <SwitchTheme />
        </Flex>
      </Flex>
    </Header>
  );
}

export default HeaderNav;
