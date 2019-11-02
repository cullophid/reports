import { createContext } from "react";
import { ReportChartFragment } from "../../codegen/client";

export type Tool = "select" | "insert_chart";

export type ReportContextType = {
  tool: Tool;
  selection: string[];
};

export const ReportContext = createContext<
  [ReportContextType, (ctx: ReportContextType) => void]
>([
  {
    tool: "select",
    selection: []
  },
  () => {}
]);
