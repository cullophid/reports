import { ApolloServer } from "apollo-server-lambda";
import { typeDefs, resolvers } from "../schema";

const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});

console.log("ENV", process.env);
export const handler = graphqlServer.createHandler();
