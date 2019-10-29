import jwt, { SignOptions } from "jsonwebtoken";
import { User } from "../Models";

const JWT_SECRET = process.env.JWT_SECRET;

const sign = (payload: any, options: SignOptions): Promise<string> =>
  new Promise((resolve, reject) => {
    if (!JWT_SECRET) {
      throw new Error("MISSING JWT SECRET");
    }
    jwt.sign(payload, JWT_SECRET, options, (err, token) =>
      err ? reject(err) : resolve(token)
    );
  });

const verify = (token: string) => {
  if (!JWT_SECRET) {
    throw new Error("MISSING JWT SECRET");
  }
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, res) =>
      err ? reject(err) : resolve(res)
    );
  });
};

export type AuthToken = {
  sub: string;
  email: string;
  iat: number;
};

export const createAuthToken = (user: User) =>
  sign(
    {
      sub: user._id,
      email: user.email,
      iat: Date.now() / 1000
    },
    { expiresIn: "15m" }
  );
export const verifyAuthToken = (token: string) =>
  verify(token) as Promise<AuthToken>;

export const createRefreshToken = (user: User) =>
  sign({ userId: user._id }, { expiresIn: "30d" });
export const verifyRefreshToken = (token: string) =>
  verify(token) as Promise<{ userId: string }>;

export const createSigninToken = (email: string) =>
  sign({ email }, { expiresIn: "5m" });
export const verifySigninToken = (token: string) =>
  verify(token) as Promise<{ email: string }>;
