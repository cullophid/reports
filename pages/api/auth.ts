import { NextApiRequest, NextApiResponse } from "next";
import { photon } from "../../server/helpers/photon"
import { createRefreshToken, verifySigninToken } from "../../server/helpers/jwt"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { signin_token } = req.query
    const { email } = await verifySigninToken(signin_token as string);

    let [user] = await photon.users.findMany({
      where: {
        email
      }
    })
    const refreshToken = await createRefreshToken(user);

    if (!user) {
      user = await photon.users.create({
        data: {
          email,
          firstName: "",
          lastName: "",
          refreshToken
        }
      })
    }

    await photon.users.update({
      where: {
        id: user.id
      },
      data: {
        refreshToken
      }
    })
    res.setHeader("Set-Cookie", `refresh_token=${refreshToken}; Path=/; HttpOnly`)
    res.status(302).setHeader("Location", "/")
    res.send("");

  } catch (e) {
    console.log({ e })
    res.status(500).send(JSON.stringify(e))
  }
}