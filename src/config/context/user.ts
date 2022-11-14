import { createContext, Dispatch, SetStateAction } from "react";
import { ILead } from "../mock/types";

export const defaultUser = {};

export interface IUser {
  user: ILead | unknown;
  setUser: Dispatch<SetStateAction<IUser["user"]>>;
}

export const UserContext = createContext<IUser>({
  user: defaultUser,
  setUser: () => {},
});
