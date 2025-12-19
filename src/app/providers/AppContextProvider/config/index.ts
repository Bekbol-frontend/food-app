import { createContext } from "react";
import type { IAppContext } from "../types";

export const AppContext = createContext<IAppContext>(null!);
