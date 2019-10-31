import { NextApiRequest, NextApiResponse } from "next";
import {
  createAuthToken,
  createRefreshToken,
  verifyRefreshToken
} from "./helpers/jwt";
import { User } from "./Models";
import { knex } from "./knex";

export const refresh_token = (req: NextApiRequest, res: NextApiResponse) => {
  const refresh_token = req.cookies.refresh_token;
  if (!refresh_token) {
    return res.status(401).send("Missing refresh token");
  }
  getNewTokens(refresh_token)
    .then(({ auth_token, refreshToken }) => {
      res.setHeader(
        "Set-Cookie",
        `refresh_token=${refreshToken}; Path=/; HttpOnly`
      );
      res.status(200).send({ auth_token });
    })
    .catch(err => {
      console.error(err);
      res.status(401).send(err.message);
    });
};

const getNewTokens = async (refresh_token: string) => {
  const { userId } = await verifyRefreshToken(refresh_token);
  if (!userId) {
    throw new Error("Token does not contain a userId");
  }
  const user = await knex<User>("users")
    .where("id", userId)
    .first();
  if (!user) {
    throw new Error("User does not exist");
  }
  const auth_token = await createAuthToken(user);
  const refreshToken = await createRefreshToken(user);

  return {
    auth_token,
    refreshToken
  };
};
