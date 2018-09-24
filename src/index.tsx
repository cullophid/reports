import * as React from "react";
import * as ReactDOM from "react-dom";
import View from "./View";
import registerServiceWorker from "./registerServiceWorker";
import { State, update, initialState } from "./app";
import * as Store from "./store";
import history from "./history";

const render = (state: State) =>
  ReactDOM.render(<View state={state} />, document.getElementById(
    "root"
  ) as HTMLElement);

Store.init({ update, initialState, render });
registerServiceWorker();
history.listen(() =>
  Store.dispatch({ type: "@@Navigate", location: window.location })
);
Store.dispatch({ type: "@@Navigate", location: window.location });
