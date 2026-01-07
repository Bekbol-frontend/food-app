import { Flex, Spin } from "antd";
import { ContentBlock } from "../../ContentBlock";

function ContentLoading() {
  return (
    <ContentBlock>
      <Flex align="center" justify="center">
        <Spin />
      </Flex>
    </ContentBlock>
  );
}

export default ContentLoading;
