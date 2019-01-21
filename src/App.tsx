import * as React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TestPage from "./pages/TestPage";
import ReportsPage from "./pages/ReportsPage";
import DatastoresPage from "./pages/DatastoresPage";
import ReportEditorPage from "./pages/ReportEditorPage";
import history from "./history";
import { report } from "./models/reports";
import { client } from "./apollo";

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <Route path="/" exact render={() => <Redirect to="/reports" />} />
          <Route path="/login" exact render={() => <LoginPage />} />
          <Route path="/test" exact render={() => <TestPage />} />
          <Route path="/datastores" exact render={() => <DatastoresPage />} />
          <Route path="/reports" exact render={() => <ReportsPage />} />
          <Route
            path="/reports/:reportId"
            exact
            render={({ match, location }) => {
              const slideId = location.hash.substring(1);
              return (
                <ReportEditorPage
                  reportId={match.params.reportId}
                  slideId={slideId}
                />
              );
            }}
          />
        </React.Fragment>
      </Router>
    );
  }
}
