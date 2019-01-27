import {
  WebAuth,
  Auth0Error,
  Auth0DecodedHash,
  Auth0UserProfile
} from "auth0-js";
import * as Result from "./Result";

const webAuth = new WebAuth({
  domain: "gmfy.eu.auth0.com",
  clientID: "h2fcWKygJkauE6ULIH2s55a78V5DSN87",
  redirectUri: "http://localhost:1234",
  responseType: "token id_token"
});

export const passwordLess = (email: string): Promise<any | null> =>
  new Promise((resolve) => {
    webAuth.passwordlessStart(
      {
        connection: "email",
        send: "link",
        email: email
      },
      (err, res) => {
        console.log("Auth0 Error", err);
        console.log("Auth0 Res", res);
        err ? resolve(Result.error(err)) : resolve(Result.ok(res));
      }
    );
  });

export const parseHash = (hash: string): Promise<Auth0DecodedHash | null> =>
  new Promise((resolve) => {
    webAuth.parseHash({ hash }, (err, authResult) => {
      if (err) {
        console.error(err);
        return resolve(null);
      } else {
        return resolve(authResult as Auth0DecodedHash);
      }
    });
  });

export const userInfo = (
  accessToken: string
): Promise<Auth0UserProfile | null> =>
  new Promise((resolve) => {
    webAuth.client.userInfo(accessToken, function(err, user) {
      if (err) {
        console.error(err);
        return resolve(null);
      }
      return resolve(user);
    });
  });
