import { NextApiRequest, NextApiResponse } from "next";
import {
  createRefreshToken,
  verifySigninToken
} from "../../server/helpers/jwt";
import { MongoClient, ObjectId } from "mongodb";
import { User } from "../../server/Models";

const client = new MongoClient(process.env.MONGODB_URL, {
  useNewUrlParser: true
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const connection = await client.connect();
    const userCollection = connection.db("reports").collection<User>("users");
    const { signin_token } = req.query;
    const { email } = await verifySigninToken(signin_token as string);

    let user = await userCollection.findOne({
      email
    });

    if (!user) {
      const _id = new ObjectId().toHexString();
      await userCollection.insertOne({
        _id,
        email,
        firstName: "",
        lastName: "",
        createdAt: new Date()
      });
      user = await userCollection.findOne({ _id });
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
