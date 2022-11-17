import { createContext, Dispatch, SetStateAction } from "react";
import { ILead } from "../mock/types";

interface IUserData extends ILead {
  success?: boolean;
  error?: string;
}

export const defaultUser = {
  name: "",
  email: "",
  nationalId: 0,
  score: 0,
  success: false,
  error: "",
};

export interface IUser {
  user: IUserData;
  setUser: Dispatch<SetStateAction<IUser["user"]>>;
}

export const UserContext = createContext<IUser>({
  user: defaultUser,
  setUser: () => {},
});
