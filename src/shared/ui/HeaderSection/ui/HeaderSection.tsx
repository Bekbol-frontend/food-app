import { Button, Flex, Typography } from "antd";
import { useTranslation } from "react-i18next";
import styles from "./HeaderSection.module.scss";
import { PlusOutlined } from "@ant-design/icons";
import { clsx } from "@/shared/lib/clsx";
import { useResponsive } from "@/shared/hooks/useResponsive";

const { Title } = Typography;

interface IProps {
  title: string;
  onShowModal: () => void;
  className?: string;
}

function HeaderSection(props: IProps) {
  const { title, onShowModal, className = "" } = props;

  const { t } = useTranslation();
  const { sm } = useResponsive();

  return (
    <Flex
      align="center"
      gap={10}
      justify="space-between"
      className={clsx([className])}
    >
      <Title level={sm ? 3 : 4} className={styles.title}>
        {t(title)}
      </Title>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        iconPlacement="end"
        onClick={onShowModal}
      >
        {t("Create")}
      </Button>
    </Flex>
  );
}

export default HeaderSection;
