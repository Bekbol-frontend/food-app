import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppQueryClientProvider } from "./app/providers/AppQueryClientProvider";
import { AppAntdConfigProvider } from "./app/providers/AppAntdConfigProvider";
import { AppContextProvider } from "./app/providers/AppContextProvider";
import { AppStoreProvider } from "./app/providers/AppStoreProvider";
import App from "./app/App";

// i18n
import "./shared/config/i18n";

// main-css
import "./app/styles/main.scss";
import { MessageContextProvider } from "./app/providers/MessageContext";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppQueryClientProvider>
      <AppContextProvider>
        <AppAntdConfigProvider>
          <AppStoreProvider>
            <MessageContextProvider>
              <App />
            </MessageContextProvider>
          </AppStoreProvider>
        </AppAntdConfigProvider>
      </AppContextProvider>
    </AppQueryClientProvider>
  </BrowserRouter>
);
