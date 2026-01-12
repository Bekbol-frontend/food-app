import { Layout } from "antd";
import styles from "./Sidebar.module.scss";
import { FoodMenu } from "@/widgets/FoodMenu";

const { Sider } = Layout;

function Sidebar() {
  return (
    <Sider className={styles.sidebar} width={260} collapsible>
      <div className={styles.menuWrapper}>
        <FoodMenu />
      </div>
    </Sider>
  );
}

export default Sidebar;
