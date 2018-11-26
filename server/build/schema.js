"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const scalars_1 = require("./scalars");
const reports_1 = require("./data/reports");
const datastores_1 = require("./data/datastores");
exports.typeDefs = apollo_server_express_1.gql `
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
exports.resolvers = {
    Email: scalars_1.EmailScalar,
    Report: reports_1.reportResolver,
    SlideChart: reports_1.slideChartResolver,
    Query: {
        reports: () => reports_1.fetchReports(),
        report: (_, { id }) => reports_1.fetchReport(id),
        datastores: () => datastores_1.fetchDatastores(),
        datastore: (_, { id }) => datastores_1.fetchDatastore(id)
    },
    Mutation: {
        createReport: (_, { title }) => reports_1.createReport(title || "Untitled"),
        deleteReport: (_, { id }) => reports_1.deleteReport(id),
        deleteAllReports: () => reports_1.deleteAllReports(),
        updateReport: (_, { report }) => reports_1.updateReport(report),
        createDatastore: (_, { datastore }) => datastores_1.createDatastore(datastore),
        deleteDatastore: (_, { id }) => datastores_1.deleteDatastore(id),
        updateDatastore: (_, { datastore }) => datastores_1.updateDatastore(datastore)
    }
};
