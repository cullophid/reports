import * as React from "react";

import * as ReactDOM from "react-dom";
import App from "./App";
import * as Storage from "./storage";
import { Session } from "./Session";
import parseUrl from "url-parse";

const getSessionFromUrl = () => {
  const url = parseUrl(window.location.href, true);

  const accessToken = url.query.accessToken;

  if (!accessToken) return null;

  const tokenData = parseJWT(accessToken);

  if (!tokenData) return null;

  const session = {
    user: tokenData.user,
    accessToken,
    expires: Date.now() + 86000
  };
  console.log("session", session);
  Storage.setItem("session", session);

  return session;
};

const parseJWT = (jwt: string) => {
  const b64Decode = (str: string) => {
    return decodeURIComponent(
      atob(str)
        .split("")
        .map(function(c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  };
  let [header, payload] = jwt.split(/\./);
  try {
    return JSON.parse(b64Decode(payload));
  } catch (e) {
    console.error(e);
    return null;
  }
};

const getSavedSession = () => {
  const savedSession = Storage.getItem<Session>("session");
  if (savedSession && savedSession.expires > Date.now()) {
    return savedSession;
  }
  return null;
};

ReactDOM.render(
  <App session={getSessionFromUrl() || getSavedSession()} />,
  document.getElementById("root") as HTMLElement
);
