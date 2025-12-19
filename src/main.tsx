import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppQueryClientProvider } from "./app/providers/AppQueryClientProvider";
import { AppAntdConfigProvider } from "./app/providers/AppAntdConfigProvider";
import App from "./app/App";

// i18n
import "./shared/config/i18n";

// main-css
import "./app/styles/main.scss";
import { AppContextProvider } from "./app/providers/AppContextProvider";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppQueryClientProvider>
      <AppContextProvider>
        <AppAntdConfigProvider>
          <App />
        </AppAntdConfigProvider>
      </AppContextProvider>
    </AppQueryClientProvider>
  </BrowserRouter>
);
