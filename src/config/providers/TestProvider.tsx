import { MemoryRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { UserContext } from "../context";
import { routes } from "../router";
import { theme } from "../theme";

const LeadValidation = routes[0].Component;
const LeadStatus = routes[1].Component;

export const TestProvider = ({ children }: { children: any }) => (
  <UserContext.Provider value={{ user: {}, setUser: () => {} }}>
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path={routes[0].path} element={<LeadValidation />} />
          <Route path={routes[1].path} element={<LeadStatus />} />
          <Route path="*" element={children} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  </UserContext.Provider>
);
