import { ApolloServer } from "apollo-server-micro";
import typeDefs from "../../schema.graphql";
import { resolvers } from "./resolvers";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { verifyAuthToken, AuthToken } from "./helpers/jwt";
import { dataLayer } from "./dataLayer";

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
    let session: Session = {};
    if (req.headers.authorization) {
      const auth_token = req.headers.authorization.split(/\s/)[1];
      if (auth_token) {
        session.user = await verifyAuthToken(auth_token);
      }
    }
    return {
      ...dataLayer(),
      session
    };
  }
});

export const graphql = apolloServer.createHandler({ path: "/api/graphql" });
