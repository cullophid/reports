import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schema";
import * as JWT from "./jwt";
import { Session } from "./Types";
import { AuthenticatedDirective } from "./directives";

const { PORT = 3000 } = process.env;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    isAuthenticated: AuthenticatedDirective
  },
  playground: true,
  introspection: true,
  context: async ({ req }: any): Promise<Session> => {
    const host = `${req.protocol}://${req.hostname}:${process.env.PORT}`;
    try {
      if (!req.headers.authorization) throw new Error("Missing auth header");

      let [bearer, token] = req.headers.authorization.split(" ");
      if (!token) throw new Error("Missing auth token");
      let session: any = await JWT.verify(token);

      return {
        ...session,
        host
      };
    } catch (e) {
      console.log(e.stack);
      return { host };
    }
  }
});

server
  .listen({ port: PORT })
  .then(({ url }) => console.log(`🚀 Server ready at ${url}`));
