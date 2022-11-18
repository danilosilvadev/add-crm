import { MemoryRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { UserContext } from "../context";
import { defaultUser, IUser } from "../context/user";
import { theme } from "../theme";

export const TestProvider = ({
  children,
  initialState,
}: {
  children: any;
  initialState?: IUser["user"];
}) => (
  <UserContext.Provider
    value={{ user: initialState || defaultUser, setUser: () => {} }}
  >
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="*" element={children} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  </UserContext.Provider>
);
