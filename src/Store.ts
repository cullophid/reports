import { createStore, compose } from "redux";
import { install, getModel } from "redux-loop";
import { reducer, initialState, Action, State } from "./app";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getInitialState = () => {
  let reports = localStorage.getItem("reports");
  if (reports === null) {
    return initialState;
  } else {
    return { ...initialState, reports: JSON.parse(reports) };
  }
};
const store = createStore(reducer, getInitialState(), devtools(install()));

export const dispatch: ((action: Action) => void) = store.dispatch;

export const subscribe = (f: ((state: State) => void)) => {
  store.subscribe(() => f(getModel(store.getState())));
};
