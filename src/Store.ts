import {createStore, compose} from "redux"
import {install, getModel} from "redux-loop"
import {reducer, initialState, Action, State} from "./App"

declare global {
  interface Window {
     __REDUX_DEVTOOLS_EXTENSION__:any 
   }
 }
 const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 
 const store = createStore(
   reducer,
   initialState,
   compose(
     devtools,
     install()
   )
 )
 
 export const dispatch:((action:Action) => void) = store.dispatch
 
 export const subscribe = (f: ((state:State) => void)) =>
   store.subscribe(() => f(getModel(store.getState())))