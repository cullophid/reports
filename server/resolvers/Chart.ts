import { ChartResolvers } from "../codegen/graphql";

export const Chart: ChartResolvers = {
  id: chart => chart.id,
  x: chart => chart.x,
  y: chart => chart.y,
  width: chart => chart.width,
  height: chart => chart.height
}