import { Flex } from "antd";
import styles from "./Logo.module.scss";

function Logo() {
  return (
    <Flex align="center" justify="center" className={styles.logoWrapper}>
      <img src="/logo.png" alt="logo-food" />
    </Flex>
  );
}

export default Logo;
