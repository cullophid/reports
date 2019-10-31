import { NextApiRequest, NextApiResponse } from "next";
import { createRefreshToken, verifySigninToken } from "./helpers/jwt";
import { User } from "./Models";
import cuid from "cuid";
import { knex } from "./knex";

export const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { signin_token } = req.query;
    const { email } = await verifySigninToken(signin_token as string);

    let user = await knex<User>("users")
      .first()
      .where("email", email);

    if (!user) {
      const id = cuid();
      await knex<User>("users").insert({
        id,
        email,
        firstName: "",
        lastName: ""
      });
      user = await knex<User>("users")
        .where("id", id)
        .first();
    }

    const refreshToken = await createRefreshToken(user);
    res.setHeader(
      "Set-Cookie",
      `refresh_token=${refreshToken}; Path=/; HttpOnly`
    );
    res.status(302).setHeader("Location", "/");
    res.send("");
  } catch (e) {
    console.log({ e });
    res.status(500).send(JSON.stringify(e));
  }
};
