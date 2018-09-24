import { createStore, compose } from "redux";
import * as Loop from "redux-loop";
import { CmdType } from "redux-loop";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store: any;
export let dispatch = <Msg>(action: Msg): void => {
  throw new Error("You must call init before you can call dispatch");
};

export const init = ({ update, initialState, render }: any) => {
  store = createStore(update, initialState(), devtools(Loop.install()));
  dispatch = store.dispatch;
  store.subscribe(() => render(store.getState()));
};
