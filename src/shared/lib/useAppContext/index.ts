import { useContext } from "react";
import {
  AppContext,
  type IAppContext,
} from "@/app/providers/AppContextProvider";

export function useAppContext(): IAppContext {
  return useContext(AppContext);
}
