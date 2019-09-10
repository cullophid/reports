import { ApolloServer } from 'apollo-server-micro'
import typeDefs from "../../schema.graphql"
import { Resolvers } from "@generated/graphql"
import Photon from '@generated/photon'

export type Context = {
  photon: Photon
}

export const config = {
  api: {
    bodyParser: false
  }
};

const resolvers: Resolvers = {
  Query: {
    users: (_, { }, { photon }) => photon.users.findMany()
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    const photon = new Photon()
    photon.connect();
    return {
      photon
    }
  }
});

export default apolloServer.createHandler({ path: "/api/graphql" });