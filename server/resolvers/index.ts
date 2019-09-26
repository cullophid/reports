import { Resolvers } from "../codegen/graphql";
import { Query } from "./Query"
import { Mutation } from "./Mutation"
import { User } from "./User"
import { Report } from "./Report"
import { Slide } from "./Slide"
import { GraphQLScalarType, Kind } from "graphql";

export const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
  Report,
  Slide,
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value) // ast value is always in string format
      }
      return null;
    },
  }),
}