import { createContext } from "react";
import { Auth0UserProfile } from "auth0-js";

export const SessionContext = createContext<Session | null>(null);

export type Session = {
  user: Auth0UserProfile;
  accessToken: string;
  idToken: string;
  expires: number;
};
