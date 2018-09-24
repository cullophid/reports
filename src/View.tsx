import * as React from "react";
import { State } from "./app";
import LoginPage from "./components/Login";
import ReportListPage from "./components/ReportList";
import ReportEditor from "./components/ReportEditor";
import { values } from "./util";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const renderPage = (state: State) => {
  switch (state.page.name) {
    case "Login":
      return <LoginPage session={state.session} />;
    case "Reports":
      return <ReportListPage reports={values(state.reports)} />;
    case "Report":
      return <ReportEditor reportEditor={state.reportEditor} />;
    case "NotFound":
      return <h1> Not Found </h1>;
  }
};

type Props = {
  state: State;
};
export default ({ state }: Props): React.ReactElement<Props> =>
  renderPage(state);
