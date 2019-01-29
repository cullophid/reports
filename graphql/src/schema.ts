import { gql } from "apollo-server";
import { EmailScalar, ObjectIDScalar } from "./scalars";
import * as Reports from "./data/reports";
import * as Datastores from "./data/datastores";
import * as Users from "./data/users";
import * as Organisations from "./data/organisations";
import { ObjectID } from "bson";
import { Context } from "./Types";

export const typeDefs = gql`
  type Query {
    organisations: [Organisation]
    organisation(id: ID!): Organisation
    reports: [Report]
    report(id: ID!): Report
    datastores: [Datastore]
    datastore(id: ID!): Datastore
  }

  type Mutation {
    createReport(title: String): Report
    updateReport(report: ReportUpdate!): Report
    deleteReport(id: ID!): ID
    deleteAllReports: Int

    createDatastore(datastore: DatastoreCreate!): Datastore
    updateDatastore(datastore: DatastoreUpdate!): Datastore
    deleteDatastore(id: ID!): ID

    createOrganisation(organisation: OrganisationCreate!): Organisation
    updateOrganisation(organisation: OrganisationUpdate!): Organisation
    deleteOrganisation(id: ID!): ID

    createUser(user: UserCreate!): User

    authenticate(email: Email): Boolean
  }

  type Organisation {
    id: ID!
    name: String!
    users: [User]!
  }

  input OrganisationCreate {
    name: String!
  }

  input OrganisationUpdate {
    id: ID!
    name: String
  }

  type User {
    id: ID!
    firstname: String!
    lastname: String!
    email: String!
    organisation: Organisation!
    isAdmin: Boolean!
  }

  input UserCreate {
    firstname: String!
    lastname: String!
    email: String!
    organisation: ID!
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
    type: DatastoreType!
    name: String!
    host: String!
    port: Int!
    user: String!
    database: String!
    organisation: Organisation!
  }

  enum DatastoreType {
    MySQL
  }

  type Report {
    id: ID!
    title: String!
    slides: [Slide!]!
    organisation: Organisation!
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
  scalar ID
`;
const convertId = ({ _id }: { _id: ObjectID }) => _id;

export const resolvers: any = {
  Email: EmailScalar,
  ID: ObjectIDScalar,
  Report: {
    id: convertId,
    organisation: ({ organisation }: Reports.Report, {}, ctx: Context) =>
      Organisations.fetch({}, { id: organisation }, ctx)
  },
  Slide: {
    id: convertId
  },
  SlideElement: {
    id: convertId
  },
  Datastore: {
    id: convertId
  },
  User: {
    id: convertId
  },
  Organisation: {
    id: convertId,
    users: (org: Organisations.Organisation, _: {}, ctx: Context) =>
      Users.fetchInOrg(org, { organisation: org._id }, ctx)
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
    organisations: Organisations.fetchAll
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
    createUser: Users.create,
    authenticate: Users.authenticate,

    // organistations
    createOrganisation: Organisations.create
  }
};
