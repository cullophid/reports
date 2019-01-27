import { gql } from "apollo-server-lambda";
import { EmailScalar, ObjectIDScalar } from "./scalars";
import * as Reports from "./data/reports";
import * as Datastores from "./data/datastores";
import * as Users from "./data/users";
import * as Organisations from "./data/organisations";

export const typeDefs = gql`
  type Query {
    organisations: [Organisation]
    organisation(id: ID!): Organisation
    reports: [Report]
    report(id: ObjectID!): Report
    datastores: [Datastore]
    datastore(id: ObjectID!): Datastore
  }

  type Mutation {
    createReport(title: String): Report
    updateReport(report: ReportUpdate!): Report
    deleteReport(id: ObjectID!): ObjectID
    deleteAllReports: String

    createDatastore(datastore: DatastoreCreate!): Datastore
    updateDatastore(datastore: DatastoreUpdate!): Datastore
    deleteDatastore(id: ObjectID!): ObjectID

    createOrganisation(organisation: OrganisationCreate!): Organisation
    updateOrganisation(organisation: OrganisationUpdate!): Organisation
    deleteOrganisation(id: ObjectID!): ObjectID

    createUser(user: UserCreate!): User
  }

  type Organisation {
    id: ObjectID!
    name: String!
    users: [User]!
  }

  input OrganisationCreate {
    name: String!
  }

  input OrganisationUpdate {
    id: ObjectID!
    name: String
  }

  type User {
    id: ObjectID!
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
    id: ObjectID!
    type: DatastoreType
    name: String
    host: String
    port: Int
    user: String
    password: String
    database: String
  }

  type Datastore {
    id: ObjectID!
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
    id: ObjectID!
    title: String!
    slides: [Slide!]!
  }

  input ReportUpdate {
    id: ObjectID!
    title: String!
    slides: [SlideUpdate!]!
  }

  type Slide {
    id: ObjectID!
    elements: [SlideElement!]!
  }
  input SlideUpdate {
    id: ObjectID!
    elements: [SlideElementUpdate!]!
  }

  type SlideElement {
    id: ObjectID!
    x: Float!
    y: Float!
    type: SlideElementType!
    width: Float!
    height: Float!
    text: SlideText
    chart: SlideChart
  }

  input SlideElementUpdate {
    id: ObjectID!
    x: Float!
    y: Float!
    type: SlideElementType!
    width: Float!
    height: Float!
    text: SlideTextUpdate
    chart: SlideChartUpdate
  }

  enum SlideElementType {
    text
    chart
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
    dataStore: ObjectID!
    query: String!
    xAxis: String!
    yAxis: String!
  }

  scalar Email
  scalar ObjectID
`;
export const resolvers = {
  Email: EmailScalar,
  Report: {
    id: ({ _id }: Reports.Report) => _id
  },
  Datastore: {
    id: ({ _id }: Datastores.Datastore) => _id
  },
  User: {
    id: ({ _id }: Users.User) => _id
  },
  Organisation: {
    id: ({ _id }: Reports.Report) => _id,
    users: ({ _id }: Organisations.Organisation) => Users.fetchInOrg(_id)
  },
  SlideChart: {
    dataStore: ({ dataStore }: Reports.SlideChart) =>
      Datastores.fetch(dataStore)
  },

  Query: {
    reports: () => Reports.fetchAll(),
    report: (_: any, { id }: any) => Reports.fetch(id),
    datastores: () => Datastores.fetchAll(),
    datastore: (_: any, { id }: any) => Datastores.fetch(id)
  },
  Mutation: {
    createReport: (_: any, { title }: any) =>
      Reports.create(title || "Untitled"),
    deleteReport: (_: any, { id }: any) => Reports.remove(id),
    deleteAllReports: () => Reports.removeAll(),
    updateReport: (_: any, { report }: any) => Reports.update(report),

    createDatastore: (_: any, { datastore }: any) =>
      Datastores.create(datastore),
    deleteDatastore: (_: any, { id }: any) => Datastores.remove(id),
    updateDatastore: (_: any, { datastore }: any) =>
      Datastores.update(datastore),

    createUser: (_: any, { user }: any) => Users.create(user)
  }
};
