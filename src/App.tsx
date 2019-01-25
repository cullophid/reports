import * as React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import TestPage from "./pages/TestPage";
import { ReportsList } from "./pages/ReportsList";
import { Datasources } from "./pages/Datasources";
import { ReportEditorPage } from "./pages/ReportEditor";
import history from "./history";
import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
  a {
    color:inherit;
    text-decoration:none;
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
        <Route path="/datasources" exact render={() => <Datasources />} />
        <Route path="/reports" exact render={() => <ReportsList />} />
        <Route
          path="/reports/:reportId"
          exact
          render={({ match, location }) => (
            <ReportEditorPage
              reportId={match.params.reportId}
              slideId={location.hash.substring(1)}
            />
          )}
        />
      </>
    </Router>
  );
};

export default App;
