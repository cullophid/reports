import { ApolloServer } from "apollo-server-micro";
import typeDefs from "../../schema.graphql";
import { resolvers } from "./resolvers";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { verifyAuthToken, AuthToken } from "./helpers/jwt";
import { MongoClient } from "mongodb";
import { dataLayer } from "./dataLayer";

const client = new MongoClient(process.env.MONGODB_URL, {
  useNewUrlParser: true
});

export type Context = {
  session: Session;
} & ReturnType<typeof dataLayer>;

type Session = {
  user?: AuthToken;
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }: { req: MicroRequest }) => {
    console.log("CONTEXT");
    let session: Session = {};
    if (req.headers.authorization) {
      console.log("HEADER", req.headers.authorization);
      const auth_token = req.headers.authorization.split(/\s/)[1];
      console.log({ auth_token });
      if (auth_token) {
        session.user = await verifyAuthToken(auth_token);
      }
    }
    console.log("HEADER");
    const connection = await client.connect();
    console.log("CONNECTED");
    const db = connection.db("reports");
    console.log("DB");
    return {
      ...dataLayer(db),
      session
    };
  }
});

export const graphql = apolloServer.createHandler({ path: "/api/graphql" });
