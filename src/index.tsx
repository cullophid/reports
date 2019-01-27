import * as React from "react";

import * as ReactDOM from "react-dom";
import * as Auth0 from "./auth0";
import App from "./App";
import * as Storage from "./storage";
import { Auth0UserProfile } from "auth0-js";
import { Session } from "./Session";

const getSession = async (): Promise<Session | null> => {
  let storedSession = Storage.getItem<Session>("session");
  if (storedSession && storedSession.expires > Date.now()) return storedSession;

  console.log("no session localStorage, parseing urlhash");

  console.log(window.location.hash);
  const decodedHash = await Auth0.parseHash(window.location.hash);
  console.log(decodedHash);
  if (!decodedHash || !decodedHash.accessToken || !decodedHash.idToken) {
    console.log("could not retrieve data from decoded hash", decodedHash);
    return null;
  }

  let user = await Auth0.userInfo(decodedHash.accessToken);
  console.log(user);
  if (!user) return null;

  const session = {
    user,
    accessToken: decodedHash.accessToken,
    idToken: decodedHash.idToken || "",
    expires: Date.now() + (decodedHash.expiresIn || 0) * 1000
  };
  Storage.setItem("session", session);
  return session;
};

const bootstrap = async () => {
  const session = await getSession();
  ReactDOM.render(<App session={session} />, document.getElementById(
    "root"
  ) as HTMLElement);
};
bootstrap();
