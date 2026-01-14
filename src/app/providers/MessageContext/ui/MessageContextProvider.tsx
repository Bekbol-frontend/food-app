import { message, notification } from "antd";
import { MessageContext } from "../config";
import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

function MessageContextProvider({ children }: IProps) {
  const [messageApi, contextHolder] = message.useMessage();
  const [contextApi, contextHolderNotification] =
    notification.useNotification();

  return (
    <MessageContext value={{ messageApi, contextApi }}>
      {contextHolder}
      {contextHolderNotification}
      <>{children}</>
    </MessageContext>
  );
}

export default MessageContextProvider;
