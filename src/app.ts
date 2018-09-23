import { Cmd, CmdType } from "redux-loop";
import * as Router from "@oolon/router.js";
import history from "./history";
import { Report, createReport, saveReport } from "./services/report.service";
const delay = <T>(t: T, ms: number): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(t), ms));

type run = <T>(
  f: (() => T | Promise<T>),
  config?: { success?: (t: T) => Action; fail?: (t: T) => Action }
) => CmdType<Action>;

const run: run = (f, options = {}) =>
  Cmd.run(f, {
    successActionCreator: options.success,
    failActionCreator: options.fail
  });
type User = {
  firstname: string;
  lastname: string;
  email: string;
};

export type Session = null | "Loading" | User;

export type ReportEditor = {
  report: Report;
  unsaveChanges: boolean;
};

export type State = {
  page: Page;
  session: Session;
  reports: { [id: string]: Report };
  reportEditor: ReportEditor | null;
};

export const initialState: State = {
  page: { name: "Login" },
  session: null,
  reportEditor: null,
  reports: {}
};

export type Action =
  | { type: "@@INIT" }
  | { type: "Navigate"; location: Location }
  | { type: "Login"; email: string }
  | { type: "LoginSuccess" }
  | { type: "ReportCreate" }
  | { type: "ReportSave"; report: Report }
  | { type: "ReportEditorUpdate"; reportEditor: ReportEditor };

type Update = State | [State, CmdType<Action>];

export const reducer = (state: State, action: Action): Update => {
  switch (action.type) {
    case "@@INIT":
      return state;
    case "Navigate":
      return router(state, action.location);
    case "Login":
      if (state.page.name !== "Login") return state;
      return [
        { ...state, session: "Loading" },
        run(() => delay({}, 1000), {
          success: () => ({ type: "LoginSuccess" })
        })
      ];
    case "LoginSuccess":
      return [state, Cmd.run(() => history.push("/reports"))];
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
      const reportEditor = { report: action.report, unsaveChanges: false };
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
          const reportEditor =
            report === null ? null : { report, unsaveChanges: false };
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
        handler: (): Update => [state, run(() => history.push("/reports"), {})]
      }
    ]
  ) || state;
