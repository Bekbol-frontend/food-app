import { Typography } from "antd";
import { ContentBlock } from "../../ContentBlock";
import { useTranslation } from "react-i18next";
import styles from "./ContentError.module.scss";
import { useResponsive } from "@/shared/hooks/useResponsive";

const { Title, Paragraph } = Typography;

interface IProps {
  title: string;
  desc: string;
}

function ContentError({ title, desc }: IProps) {
  const { t } = useTranslation();
  const { sm } = useResponsive();

  return (
    <ContentBlock className={styles.content}>
      <Title level={sm ? 2 : 4} type="danger" className={styles.titleError}>
        {t(title)}
      </Title>
      <Paragraph type="danger">{t(desc)}</Paragraph>
    </ContentBlock>
  );
}

export default ContentError;
