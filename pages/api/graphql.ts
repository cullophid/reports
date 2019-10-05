
import { ApolloServer } from 'apollo-server-micro'
import typeDefs from "../../schema.graphql"
import { resolvers } from "../../server/resolvers"
import { MicroRequest } from 'apollo-server-micro/dist/types'
import { verifyAuthToken, AuthToken } from '../../server/helpers/jwt'
import { MongoClient } from 'mongodb'
import { dataLayer } from '../../server/dataLayer'

const client = new MongoClient(process.env.MONGODB_URL, { useNewUrlParser: true });

export type Context = {
  session: Session
} & ReturnType<typeof dataLayer>

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
    const connection = await client.connect()
    const db = connection.db("reports")

    return {
      ...dataLayer(db),
      session
    }
  }
});

export default apolloServer.createHandler({ path: "/api/graphql" });