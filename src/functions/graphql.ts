import { ApolloServer } from "apollo-server-lambda";
import { typeDefs, resolvers } from "./graphql/schema";
import * as JWT from "./graphql/jwt";
import { Context } from "./graphql/Types";
import { ObjectID } from "bson";

const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  context: async (ctx: any): Promise<Context> => {
    try {
      console.log("AUTH", ctx.event.headers.authorization);
      const authHeader = ctx.event.headers.authorization;
      if (!authHeader) return { user: null };
      let [bearer, token] = authHeader.split(" ");
      let session: any = await JWT.verify(token);

      return {
        ...session,
        user: {
          ...session.user,
          organisation: new ObjectID(session.user.organisation)
        }
      };
    } catch (e) {
      console.log("Error caught");
      console.log(e.stack);
      return { user: null };
    }
  }
});

export const handler = graphqlServer.createHandler();
