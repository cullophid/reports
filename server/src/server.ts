import { ApolloServer, gql } from "apollo-server";
import fs from "fs";
import Path from "path";
import { Resolvers } from "./generated/graphql";
import { prisma } from "./generated/prisma-client";
import { Query } from "./resolvers/Query";
import { Mutation } from "./resolvers/Mutation";
import { Report } from "./resolvers/Report";
import { Slide } from "./resolvers/Slide";
import { TextNode } from "./resolvers/TextNode";
import { ChartNode } from "./resolvers/ChartNode";

const typeDefs = gql`
  ${fs
    .readFileSync(Path.join(__dirname, "../schema.graphql"))
    .toString("utf-8")}
`;

const resolvers: Resolvers = {
  Query,
  Mutation,
  Report,
  Slide,
  TextNode,
  ChartNode
};
const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  rootValue: {},
  context: () => {
    return {
      prisma
    };
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
