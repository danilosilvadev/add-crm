import { useState } from "react";
import { defaultUser, IUser, UserContext } from "./user";

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser["user"]>(defaultUser);
  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
