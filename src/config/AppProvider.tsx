import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context";
import { Router } from "./router";

export const AppProvider = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserProvider>
  );
};
