import { BASE_URL } from "@/shared/api/baseUrl";
import { AppRoutes } from "./providers/AppRouterProvider";

function App() {
  console.log(BASE_URL);

  return <AppRoutes />;
}

export default App;
