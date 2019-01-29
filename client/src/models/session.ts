import { createContext } from "react";

export const SessionContext = createContext<Session | null>(null);

export type Session = {
  user: any;
  accessToken: string;
  expires: number;
};
