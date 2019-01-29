import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schema";
import * as JWT from "./jwt";
import { Context } from "./Types";
import { ObjectID } from "bson";

const { PORT = 3000 } = process.env;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  context: async ({ req }: any): Promise<Context> => {
    try {
      console.log("SET CONTEXT");
      if (!req.headers.authorization) {
        return { user: null };
      }

      let [bearer, token] = req.headers.authorization.split(" ");
      let session: any = await JWT.verify(token);

      console.log("USER SESSION", session);

      return {
        ...session,
        user: {
          ...session.user,
          organisation: new ObjectID(session.user.organisation)
        }
      };
    } catch (e) {
      console.log(e.stack);
      return { user: null };
    }
  }
});

server
  .listen({ port: PORT })
  .then(({ url }) => console.log(`🚀 Server ready at ${url}`));
