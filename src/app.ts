import * as Loop from "redux-loop";
import * as Router from "@oolon/router.js";
import history from "./history";
import { Report, createReport, saveReport } from "./reports";

type Cmd = Loop.CmdType<Msg>;
namespace Cmd {
  export const run = <T>(
    f: () => T | Promise<T>,
    { success, error }: { success?: (t: T) => Msg; error?: (t: T) => Msg }
  ) =>
    Loop.Cmd.run(f, {
      successActionCreator: success,
      failActionCreator: error
    });
  export const action = (action: Msg) => Loop.Cmd.action(action);
  export const list = (cmds: Cmd[]) => Loop.Cmd.list(cmds);
}

type User = {
  firstname: string;
  lastname: string;
  email: string;
};

export type Session = null | "Loading" | User;

export type ReportEditor = {
  report: Report;
  selectedPage: "FrontPage" | number;
  unsavedChanges: boolean;
  showNewSlideModal: boolean;
};

export type State = {
  page: Page;
  session: Session;
  reports: { [id: string]: Report };
  reportEditor: ReportEditor | null;
};
const defaultState: State = {
  page: { name: "Login" },
  session: null,
  reportEditor: null,
  reports: {}
};
export const initialState = () => {
  let reports = localStorage.getItem("reports");
  if (reports === null) {
    return defaultState;
  } else {
    return { ...defaultState, reports: JSON.parse(reports) };
  }
};

export type Msg =
  | { type: "@@INIT" }
  | { type: "@@Navigate"; location: Location }
  | { type: "Login"; email: string }
  | { type: "LoginSuccess" }
  | { type: "ReportCreate" }
  | { type: "ReportSave"; report: Report }
  | { type: "ReportEditorUpdate"; reportEditor: ReportEditor };

type Update = State | [State, Cmd];

export const update = (state: State, action: Msg): Update => {
  switch (action.type) {
    case "@@INIT":
      return state;
    case "@@Navigate":
      return router(state, action.location);
    case "Login":
      if (state.page.name !== "Login") return state;
      return [
        { ...state, session: "Loading" },
        Cmd.run(() => Promise.resolve(), {
          success: () => ({ type: "LoginSuccess" })
        })
      ];
    case "LoginSuccess":
      return [state, Cmd.run(() => history.push("/reports"), {})];
    case "ReportCreate":
      const report = createReport();
      return [
        {
          ...state,
          reports: { ...state.reports, [report.id]: report }
        },
        Cmd.run(() => {
          saveReport(report);
          history.push(`/reports/${report.id}`);
        }, {})
      ];
    case "ReportEditorUpdate":
      return { ...state, reportEditor: action.reportEditor };
    case "ReportSave":
      if (state.reportEditor === null) return state;
      const reportEditor = {
        ...state.reportEditor,
        report: action.report,
        unsaveChanges: false
      };
      return [
        {
          ...state,
          reportEditor,
          reports: { ...state.reports, [action.report.id]: action.report }
        },
        Cmd.run(() => saveReport(action.report), {})
      ];
  }
};

export type Page =
  | { name: "Login" }
  | { name: "Reports" }
  | { name: "Report"; id: string }
  | { name: "NotFound" };

const router = (state: State, location: Location): Update =>
  Router.match(
    location,
    [
      {
        route: "/login",
        handler: (): Update => ({
          ...state,
          page: { name: "Login" },
          session: null
        })
      },
      {
        route: "/reports/:id",
        handler: (params: Router.Params): Update => {
          const report = state.reports[params.id];
          const reportEditor: ReportEditor | null =
            report === null
              ? null
              : {
                  showNewSlideModal: false,
                  report,
                  unsavedChanges: false,
                  selectedPage: 0
                };
          return {
            ...state,
            page: { name: "Report", id: params.id },
            reportEditor
          };
        }
      },
      {
        route: "/reports",
        handler: (): Update => ({ ...state, page: { name: "Reports" } })
      },
      {
        route: "*",
        handler: (): Update => [
          state,
          Cmd.run(() => history.push("/reports"), {})
        ]
      }
    ]
  ) || state;
