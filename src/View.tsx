import * as React from 'react';
import {State} from "./app"
import LoginPage from "./pages/Login"
import ReportListPage from "./pages/ReportList"

type Props = {
  state: State
}
export default ({state}:Props) => {
  switch (state.page.name) {
    case "Login":
      return <LoginPage email={state.page.email} loading={state.page.loading} />
    case "Home":
      return <ReportListPage />
    default:
      return <h1>NOT FOUND</h1>
  }
}

