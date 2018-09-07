import {Cmd, CmdType} from "redux-loop"
import {router} from "./router"
const delay = <T>(t:T, ms:number):Promise<T> => new Promise(resolve => 
  setTimeout(() => resolve(t), ms)
)

type run = <T>(f: (() => T | Promise<T>), config:{success?:(t:T) => Action, fail?: (t:T) => Action}) => CmdType<Action>

const run:run = (f, {success,fail}) =>
  Cmd.run(f, {successActionCreator: success, failActionCreator: fail})

export type Page = 
  | {name: "Login", email:string, loading?:boolean} 
  | {name:"Home"} 
  | {name:"Report", id:string}
  | {name:"ReportList"}
  | {name:"CreateReport"}

export type State = {
  title:string
  page: Page
}

export const initialState:State = {
  title: "Welcome",
  page: {name: "Login", email:""}
}


export type Action = 
| {type:"@@INIT"} 
| {type:"SetTitle", title:string} 
| {type:"Navigate", page:Page}
| {type:"LoginUpdateEmail", email:string}
| {type:"Login", email:string}
| {type:"LoginSuccess"}

export const reducer = (state:State, action:Action): State | [State, CmdType<Action>] => {
  switch (action.type) {
    case "SetTitle":
      return {...state, title: action.title}
    case "Navigate":
      return {...state, page: action.page}
    case "LoginUpdateEmail":
      return state.page.name === "Login" 
        ? {...state, page: {name: "Login", email: action.email}} 
        : state
    case "Login":
      if (state.page.name !== "Login") return state
      return [{...state, page: {...state.page, loading:true}}, run(() => delay({}, 1000), {success: () => ({type:"LoginSuccess"})})]
    case "LoginSuccess":
        return [state, Cmd.run(() => router.push("/"))]
    default: 
      return state
  }
}

