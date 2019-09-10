import Photon from "@generated/photon"
import { NextApiRequest, NextApiResponse } from "next-server/dist/lib/utils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const photon = new Photon();

  photon.connect();

  const users = await photon.users.findMany()
  res.send(users);

}