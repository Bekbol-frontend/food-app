import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../config";

interface IProps {
  children: ReactNode;
}

function AppStoreProvider({ children }: IProps) {
  return <Provider store={store}>{children}</Provider>;
}

export default AppStoreProvider;
