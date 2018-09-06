import * as Loop from "redux-loop"

type Cmd = Loop.CmdType<Action>
namespace Cmd {
  export const run = (f:(() => Promise<Action> | Action)):Cmd => 
    Loop.Cmd.run(f, { successActionCreator: a => a })
  export const list:((commands:Cmd[]) => Cmd) = Loop.Cmd.list

  export const none: Cmd = Loop.Cmd.none
}

export type Page = {name: "Home"} | {name:"ReportList"} | {name:"Report", id:string}

export type State = {
  title:string
  page: Page
}

export const initialState:State = {
  title: "Welcome",
  page: {name: "Home"}
}


export type Action = 
{type:"SetTitle", title:string} 
| {type:"Navigate", page:Page}

export const reducer = (state:State, action:Action): State | [State, Cmd] => {
  switch (action.type) {
    case "SetTitle":
      return {...state, title: action.title}
    case "Navigate":
      return {...state, page: action.page}
    default: 
      return state
  }
}

