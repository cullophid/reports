import * as React from 'react';
import * as ReactDOM from 'react-dom';
import View from './View';
import registerServiceWorker from './registerServiceWorker';
import {State} from "./app"
import {subscribe} from "./store"
import * as Router from "./router"
import "./router"

const render = (state:State) =>
  ReactDOM.render(
    <View state={state} />,
    document.getElementById('root') as HTMLElement
  );

subscribe(render)
registerServiceWorker();
Router.init()

