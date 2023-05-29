import { createContext, Dispatch, SetStateAction } from "react";

interface User {
  id: string;
  full_name: string;
  email: string;
  img: string;
}

interface LoggedInContextValue {
  loggedIn: User;
  setLoggedIn: Dispatch<SetStateAction<User>> | undefined;
}

export const LoggedInContext = createContext<LoggedInContextValue | null>(null);
