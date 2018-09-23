import * as React from "react";
import { State } from "./app";
import LoginPage from "./components/Login";
import ReportListPage from "./components/ReportList";
import ReportEditor from "./components/ReportEditor/Editor";
import { values } from "./util";

type Props = {
  state: State;
};
export default ({ state }: Props): React.ReactElement<Props> => {
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
