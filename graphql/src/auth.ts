import jwt, { SignOptions } from "jsonwebtoken";
import { Session } from "./Types";
import { AuthenticationError, ForbiddenError } from "apollo-server";
import { createGzip } from "zlib";
const JWT_SECRET = process.env.JWT_SECRET;

export const sign = (
  payload: string | Object | Buffer,
  options: SignOptions = {}
): Promise<string> => {
  if (!JWT_SECRET) throw new Error("Env var JWT_SECRET must be set");
  return new Promise((resolve, reject) =>
    jwt.sign(payload, JWT_SECRET, options, (err, res) =>
      err ? reject(err) : resolve(res)
    )
  );
};

export const verify = (token: string) => {
  if (!JWT_SECRET) throw new Error("Env var JWT_SECRET must be set");
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, res) =>
      err ? reject(err) : resolve(res)
    );
  });
};

export const checkAuth = (ctx: Session) => {
  if (!ctx.user) {
    throw new AuthenticationError(
      "You must be logged in to access this resource"
    );
  }
};

export const checkOwner = (ctx: Session, owner: string) => {
  if (!ctx.user) {
    throw new AuthenticationError(
      "You must be logged in to access this resource"
    );
  }
  if (ctx.user.id !== owner) {
    throw new ForbiddenError("You are not allowed to access this resource");
  }
};
