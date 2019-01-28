import jwt, { SignOptions } from "jsonwebtoken";
import { reject } from "q";
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
  return new Promise((resolve) => {
    jwt.verify(token, JWT_SECRET, (err, res) =>
      err ? reject(err) : resolve(res)
    );
  });
};
