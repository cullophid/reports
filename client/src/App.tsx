import * as React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import TestPage from "./pages/TestPage";
import { ReportsList } from "./pages/ReportsList";
import { Datasources } from "./pages/Datasources";
import { ReportEditorPage } from "./pages/ReportEditor";
import history from "./history";
import { createGlobalStyle, css } from "styled-components";
import { SessionContext, Session } from "./models/session";
import { CheckYourEmail } from "./pages/CheckYourEmail";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    color:#333;
    background: #f5f5f5;
  }
  h1, h2, h3, h4 {
    font-family: 'Raleway', sans-serif;
    color:#333;
    margin:0;
  }
  li {
    list-style-type:none;
    display: block;
    margin:0;
  }
  p {margin:0;}

  * {
    box-sizing: border-box;
  }
  a {
    color:inherit;
    text-decoration:none;
  }
`;

type Props = {
  session: Session | null;
};
const App = ({ session }: Props) => {
  return (
    <SessionContext.Provider value={session}>
      <GlobalStyles />
      <Router history={history}>
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/check-your-email" exact component={CheckYourEmail} />

          {!session && <Redirect to="/login" />}

          <Redirect exact from="/" to="/reports" />
          <Route path="/test" exact component={TestPage} />
          <Route path="/datasources" exact component={Datasources} />
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
        </Switch>
      </Router>
    </SessionContext.Provider>
  );
};

export default App;
