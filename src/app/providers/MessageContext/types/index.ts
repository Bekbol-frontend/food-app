import type { MessageInstance } from "antd/es/message/interface";
import type { NotificationInstance } from "antd/es/notification/interface";

export interface IMessageContext {
  messageApi: MessageInstance;
  contextApi: NotificationInstance;
}
