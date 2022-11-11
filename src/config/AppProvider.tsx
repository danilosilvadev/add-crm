import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import { RoutesStack } from "./router/routes";

export const AppProvider = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <RoutesStack />
      </BrowserRouter>
    </UserProvider>
  );
};
