import { message } from "antd";
import { MessageContext } from "../config";
import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

function MessageContextProvider({ children }: IProps) {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <MessageContext value={{ messageApi }}>
      {contextHolder}
      <>{children}</>
    </MessageContext>
  );
}

export default MessageContextProvider;
