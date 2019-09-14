import { NextApiRequest, NextApiResponse } from "next";
import { photon } from "../../server/helpers/photon"
import { createAuthToken, createRefreshToken, verifyRefreshToken } from "../../server/helpers/jwt"
import Cookies from "cookies";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const refresh_token = req.cookies.refresh_token;
  console.log({ refresh_token })
  if (!refresh_token) {
    return res.status(401).send("Missing refresh token")
  }
  getNewTokens(refresh_token)
    .then(({ auth_token, refreshToken }) => {
      res.setHeader("Set-Cookie", `refresh_token=${refreshToken}; Path=/; HttpOnly`)
      res.status(200).send({ auth_token });
    })
    .catch(err => {
      console.error(err)
      res.status(401).send(err.message)
    })
}

const getNewTokens = async (refresh_token: string) => {
  const { userId } = await verifyRefreshToken(refresh_token)
  if (!userId) {
    throw new Error("Token does not contain a userId")
  }

  let user = await photon.users.findOne({
    where: {
      id: userId
    }
  })
  if (user.refreshToken !== refresh_token) {
    throw new Error("Invalid token");
  }
  const auth_token = await createAuthToken(user)
  const refreshToken = await createRefreshToken(user)

  await photon.users.update({
    where: {
      id: user.id
    },
    data: {
      refreshToken
    }
  })

  return {
    auth_token,
    refreshToken
  }

}