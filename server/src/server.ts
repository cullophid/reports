import { ApolloServer, gql } from "apollo-server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES,
  ssl: true
});

const typeDefs = gql`
  type Query {
    reports: [Report]!
  }

  type Mutation {
    createReport(report: ReportCreate): Report
  }

  type Report {
    id: ID!
  }

  input ReportCreate {
    title: String!
  }
`;

const resolvers = {
  Query: {
    reports: async ({}, {}, ctx: any) => {
      const res = await ctx.db.query("SELECT * FROM reports");
      return res.rows;
    }
  },
  Mutation: {
    createReport: async ({}, { report }: any, ctx: any) => {
      const keys = Object.keys(report);
      const res = await ctx.db.query("INSERT into reports  ");
      return res.rows;
    }
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  rootValue: {},
  context: () => {
    return {
      db: pool
    };
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
