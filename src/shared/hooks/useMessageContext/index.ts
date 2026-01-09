import {
  MessageContext,
  type IMessageContext,
} from "@/app/providers/MessageContext";
import { useContext } from "react";

export function useMessageContext(): IMessageContext {
  return useContext(MessageContext);
}
