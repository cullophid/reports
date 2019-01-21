import { ApolloServer } from "apollo-server-lambda";
import { typeDefs, resolvers } from "../schema";
console.log("ENV", process.env);

const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});

export const handler = graphqlServer.createHandler();
