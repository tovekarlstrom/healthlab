import { createContext } from "react";

interface LoggedInContextValue {
  loggedIn: string;
  setLoggedIn: ((newValue: string) => void) | undefined;
}
export const LoggedInContext = createContext<LoggedInContextValue | null>(null);
