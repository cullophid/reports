import * as React from "react";
import { State } from "./app";
import LoginPage from "./pages/Login";
import ReportListPage from "./pages/ReportList";
import ReportEditor from "./pages/ReportEditor";
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
      return <ReportEditor report={state.reports[state.page.id]} />;
    case "NotFound":
      return <h1> Not Found </h1>;
  }
};
