import {createStore, compose} from "redux"
import {install, getModel} from "redux-loop"
import {reducer, initialState, Action, State} from "./app"

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:any 
   }
 }
 const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 
 const store = createStore(
   reducer,
   initialState,
  devtools(
     install()
   )
 )
 
 export const dispatch:((action:Action) => void) = store.dispatch
 
 export const subscribe = (f: ((state:State) => void)) => {
   store.subscribe(() => f(getModel(store.getState())))
 }