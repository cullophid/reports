import * as React from 'react';
import * as ReactDOM from 'react-dom';
import View from './View';
import registerServiceWorker from './registerServiceWorker';
import {initialState, State} from "./App"
import {subscribe} from "./Store"
import "./router"

const render = (state:State) =>
  ReactDOM.render(
    <View state={state} />,
    document.getElementById('root') as HTMLElement
  );

subscribe(render)
render(initialState)
registerServiceWorker();

