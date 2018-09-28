import * as React from "react";
import { Report } from "./reports";
import { Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./components/Login";
import ReportListPage from "./components/ReportList";
import ReportEditor from "./components/ReportEditor";
import history from "./history";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const typeDefs = `

type Query {
  reports: [Report]!
  report($id: String!): Report
}

type Report {
  id:ID!
  title: String!
  slides: [Slide]!
}

type Slide {
  template: SlideTemplate!
  title: String!
  subtitle:String
  primaryText: String
  secondaryText: String
}

enum SlideTemplate {
  TitleSlide
  TwoColumn
}
`;

const cache = {
  reports: [
    {
      id: 1,
      __typename: "Report",
      title: "My Report",
      slides: [
        {
          id: 1,
          __typename: "Slide",
          template: "TitleSlide",
          title: "My Report",
          subtitle: "Its amazing",
          primaryText: null,
          secondaryText: null
        }
      ]
    }
  ]
};

const resolvers = {
  Query: {
    reports: () => {
      console.log("CACHE REPORTS", cache.reports);
      return cache.reports;
    },
    report: ({}, args: any) => {
      console.log("ARGS", args);
      let id = Number(args.id);
      return cache.reports.find((report) => report.id === id);
    }
  }
};

const client = new ApolloClient({
  clientState: {
    typeDefs,
    resolvers
  }
});

type State = {
  reports: Report[];
};

export default class App extends React.Component<{}, State> {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router history={history}>
          <React.Fragment>
            <Route path="/" exact render={() => <Redirect to="/reports" />} />
            <Route path="/login" exact render={() => <LoginPage />} />
            <Route path="/reports" exact render={() => <ReportListPage />} />
            <Route
              path="/reports/:reportId"
              exact
              render={({ match }: any) => (
                <ReportEditor reportId={match.params.reportId} />
              )}
            />
          </React.Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}
