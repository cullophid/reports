import { ApolloServer } from 'apollo-server-micro'
import typeDefs from "../../schema.graphql"

import { photon } from "../../server/helpers/photon"
import { resolvers } from "../../server/resolvers"
import { Photon } from '@generated/photon'
import { MicroRequest } from 'apollo-server-micro/dist/types'
import { verifyAuthToken, AuthToken } from '../../server/helpers/jwt'
import * as dotenv from "dotenv"
dotenv.config()

export type Context = {
  photon: Photon,
  session: Session
}

type Session = {
  user?: AuthToken
}

export const config = {
  api: {
    bodyParser: false
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }: { req: MicroRequest }) => {
    let session: Session = {}
    if (req.headers.authorization) {
      const auth_token = req.headers.authorization.split(/\s/)[1]
      if (auth_token) {
        session.user = await verifyAuthToken(auth_token)
      }
    }
    return {
      photon,
      session
    }
  }
});

export default apolloServer.createHandler({ path: "/api/graphql" });