import { createContext } from "react";
import type { IMessageContext } from "../types";

export const MessageContext = createContext<IMessageContext>(null!);
