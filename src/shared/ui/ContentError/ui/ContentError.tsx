import { Typography } from "antd";
import { ContentBlock } from "../../ContentBlock";
import { useTranslation } from "react-i18next";
import styles from "./ContentError.module.scss";

const { Title, Paragraph } = Typography;

interface IProps {
  title: string;
  desc: string;
}

function ContentError({ title, desc }: IProps) {
  const { t } = useTranslation();

  return (
    <ContentBlock className={styles.content}>
      <Title level={2} type="danger" className={styles.titleError}>
        {t(title)}
      </Title>
      <Paragraph type="danger">{t(desc)}</Paragraph>
    </ContentBlock>
  );
}

export default ContentError;
