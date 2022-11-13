import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "./context";
import { Router } from "./router";
import { theme } from "./theme";

export const AppProvider = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </UserProvider>
  );
};
