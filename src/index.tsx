import * as React from "react";
import * as ReactDOM from "react-dom";
import View from "./View";
import registerServiceWorker from "./registerServiceWorker";
import { State } from "./app";
import { subscribe, dispatch } from "./store";
import history from "./history";

const render = (state: State) =>
  ReactDOM.render(<View state={state} />, document.getElementById(
    "root"
  ) as HTMLElement);

subscribe(render);
registerServiceWorker();
history.listen(() => dispatch({ type: "Navigate", location: window.location }));
dispatch({ type: "Navigate", location: window.location });
