import * as React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TestPage from "./pages/TestPage";
import ReportsPage from "./pages/ReportsPage";
import DatastoresPage from "./pages/DatastoresPage";
import ReportEditorPage from "./pages/ReportEditorPage";
import history from "./history";
import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

const App = () => {
  return (
    <Router history={history}>
      <>
        <GlobalStyles />
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
      </>
    </Router>
  );
};

export default App;
