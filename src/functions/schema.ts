import { gql } from "apollo-server-lambda";
import { EmailScalar } from "./scalars";
import {
  reportResolver,
  slideChartResolver,
  fetchReports,
  createReport,
  deleteReport,
  deleteAllReports,
  updateReport,
  fetchReport
} from "./data/reports";
import {
  fetchDatastores,
  fetchDatastore,
  createDatastore,
  deleteDatastore,
  updateDatastore
} from "./data/datastores";
export const typeDefs = gql`
  type Query {
    reports: [Report!]!
    report(id: ID!): Report!
    datastores: [Datastore!]!
    datastore(id: ID!): Datastore!
  }

  type Mutation {
    createReport(title: String): Report!
    updateReport(report: ReportUpdate!): Report!
    deleteReport(id: ID!): ID!
    deleteAllReports: String!
    createDatastore(datastore: DatastoreCreate!): Datastore!
    updateDatastore(datastore: DatastoreUpdate!): Datastore!
    deleteDatastore(id: ID!): ID!
  }

  scalar Email

  enum SlideElementType {
    text
    chart
  }

  enum TextAlign {
    Left
    Right
    Center
    Justify
  }

  type SlideElement {
    id: ID!
    x: Float!
    y: Float!
    type: SlideElementType!
    width: Float!
    height: Float!
    text: SlideText
    chart: SlideChart
  }

  type SlideText {
    value: String!
    fontSize: Int!
    align: TextAlign
  }

  input SlideElementUpdate {
    id: ID!
    x: Float!
    y: Float!
    type: SlideElementType!
    width: Float!
    height: Float!
    text: SlideTextUpdate
    chart: SlideChartUpdate
  }

  input SlideTextUpdate {
    value: String!
    fontSize: Int!
    align: TextAlign
  }

  type SlideChart {
    dataStore: Datastore!
    query: String!
    xAxis: String!
    yAxis: String!
  }

  input SlideChartUpdate {
    dataStore: ID!
    query: String!
    xAxis: String!
    yAxis: String!
  }

  type Slide {
    id: ID!
    elements: [SlideElement!]!
  }

  input SlideUpdate {
    id: ID!
    elements: [SlideElementUpdate!]!
  }
  type Report {
    id: ID!
    title: String!
    slides: [Slide!]!
  }

  input ReportUpdate {
    id: ID!
    title: String!
    slides: [SlideUpdate!]!
  }

  enum DatastoreType {
    MySQL
  }

  input DatastoreCreate {
    type: DatastoreType!
    name: String!
    host: String!
    port: Int!
    user: String!
    password: String!
    database: String!
  }

  input DatastoreUpdate {
    id: ID!
    type: DatastoreType!
    name: String!
    host: String!
    port: Int!
    user: String!
    password: String
    database: String!
  }

  type Datastore {
    id: ID!
    type: DatastoreType!
    name: String!
    host: String!
    port: Int!
    user: String!
    database: String!
  }
`;

export const resolvers = {
  Email: EmailScalar,
  Report: reportResolver,
  SlideChart: slideChartResolver,
  Query: {
    reports: () => fetchReports(),
    report: (_: any, { id }: any) => fetchReport(id),
    datastores: () => fetchDatastores(),
    datastore: (_: any, { id }: any) => fetchDatastore(id)
  },
  Mutation: {
    createReport: (_: any, { title }: any) => createReport(title || "Untitled"),
    deleteReport: (_: any, { id }: any) => deleteReport(id),
    deleteAllReports: () => deleteAllReports(),
    updateReport: (_: any, { report }: any) => updateReport(report),
    createDatastore: (_: any, { datastore }: any) => createDatastore(datastore),
    deleteDatastore: (_: any, { id }: any) => deleteDatastore(id),
    updateDatastore: (_: any, { datastore }: any) => updateDatastore(datastore)
  }
};
