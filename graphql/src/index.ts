import { ApolloServer } from "apollo-server";
import * as resolvers from "./resolvers";
import * as JWT from "./auth";
import fs from "fs";
import Path from "path";
import { gql } from "apollo-server";
import { Session } from "./Types";

const { PORT = 3000 } = process.env;

const server = new ApolloServer({
  typeDefs: gql`
    ${fs.readFileSync(Path.join(__dirname, "schema.graphql"))}
  `,
  resolvers,
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
      return { host };
    }
  }
});

server
  .listen({ port: PORT })
  .then(({ url }) => console.log(`🚀 Server ready at ${url}`));
