import { createContext, Dispatch, SetStateAction } from "react";

export const defaultUser = {
  id: 0,
};

export interface IUser {
  user: {
    id: number;
  };
  setUser: Dispatch<SetStateAction<IUser["user"]>>;
}

export const UserContext = createContext<IUser>({
  user: defaultUser,
  setUser: () => {},
});
