import { Typography } from "antd";
import { ContentBlock } from "../../ContentBlock";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

interface IProps {
  title: string;
  desc: string;
}

function ContentError({ title, desc }: IProps) {
  const { t } = useTranslation();

  return (
    <ContentBlock>
      <Title level={4}>{t(title)}</Title>
      <Paragraph>{t(desc)}</Paragraph>
    </ContentBlock>
  );
}

export default ContentError;
