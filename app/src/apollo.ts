import ApolloClient, { gql } from "apollo-boost";

const typeDefs = gql`
  type Query {
    message: String
  }
  type Mutation {
    setMessage(message: String!): String
  }
`;
const defaults = {
  message: "hello"
};

const resolvers = {
  Mutation: {
    setMessage: (_: any, { message }: any, { cache }: any) => {
      cache.writeData({ data: { message } });
      return message;
    }
  }
};
export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  clientState: {
    defaults,
    typeDefs,
    resolvers
  }
});
