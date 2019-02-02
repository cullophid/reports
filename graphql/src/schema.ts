import { gql } from "apollo-server";
import { EmailScalar } from "./scalars";
import * as Reports from "./data/reports";
import * as Datastores from "./data/datastores";
import * as Users from "./data/users";
import { Session, ID } from "./Types";

export const typeDefs = gql`
  directive @isAuthenticated on FIELD_DEFINITION
  type Query {
    reports: [Report] @isAuthenticated
    report(id: ID!): Report @isAuthenticated
    datastores: [Datastore] @isAuthenticated
    datastore(id: ID!): Datastore @isAuthenticated
    session: Session @isAuthenticated
  }

  type Mutation {
    createReport(title: String): Report @isAuthenticated
    updateReport(report: ReportUpdate!): Report @isAuthenticated
    deleteReport(id: ID!): ID @isAuthenticated
    deleteAllReports: Int @isAuthenticated

    createDatastore(datastore: DatastoreCreate!): Datastore @isAuthenticated
    updateDatastore(datastore: DatastoreUpdate!): Datastore @isAuthenticated
    deleteDatastore(id: ID!): ID @isAuthenticated

    authenticate(email: Email): Boolean
  }
  type Session {
    user: User!
  }

  type User {
    id: ID!
    firstname: String!
    lastname: String!
    email: String!
    isAdmin: Boolean!
  }

  input UserUpdate {
    firstname: String
    lastname: String
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
    type: DatastoreType
    name: String
    host: String
    port: Int
    user: String
    password: String
    database: String
  }

  type Datastore {
    id: ID!
    owner: User!
    type: DatastoreType!
    name: String!
    host: String!
    port: Int!
    user: String!
    database: String!
  }

  enum DatastoreType {
    MySQL
  }

  type Report {
    id: ID!
    title: String!
    slides: [Slide!]!
    owner: User!
  }

  input ReportUpdate {
    id: ID!
    title: String!
    slides: [SlideUpdate!]!
  }

  type Slide {
    id: ID!
    elements: [SlideElement!]!
  }
  input SlideUpdate {
    id: ID!
    elements: [SlideElementUpdate!]!
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

  enum SlideElementType {
    TEXT
    CHART
  }

  type SlideText {
    value: String!
    fontSize: Int!
    align: TextAlign
  }

  input SlideTextUpdate {
    value: String!
    fontSize: Int!
    align: TextAlign
  }

  enum TextAlign {
    Left
    Right
    Center
    Justify
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

  scalar Email
`;
const convertId = ({ _id }: { _id: ID }) => _id;

export const resolvers: any = {
  Email: EmailScalar,
  Report: {
    id: convertId,
    owner: ({ owner }: Reports.Report, {}, ctx: Session) =>
      Users.fetch({}, { id: owner }, ctx)
  },
  Slide: {
    id: convertId
  },
  SlideElement: {
    id: convertId
  },
  Datastore: {
    id: convertId,
    owner: ({ owner }: Reports.Report, {}, ctx: Session) =>
      Users.fetch({}, { id: owner }, ctx)
  },
  User: {
    id: convertId
  },
  SlideChart: {
    dataStore: (chart: Reports.SlideChart, _: {}, ctx: any) =>
      Datastores.fetch(chart, { id: chart.dataStore }, ctx)
  },
  Query: {
    datastores: Datastores.fetchAll,
    datastore: Datastores.fetch,
    reports: Reports.fetchAll,
    report: Reports.fetch,
    session: (parent: any, args: {}, { user }: Session) => ({ user })
  },
  Mutation: {
    createReport: Reports.create,
    deleteReport: Reports.remove,
    deleteAllReports: Reports.removeAll,
    updateReport: Reports.update,

    createDatastore: Datastores.create,
    deleteDatastore: Datastores.remove,
    updateDatastore: Datastores.update,
    // users
    authenticate: Users.authenticate

    // organistations
  }
};
