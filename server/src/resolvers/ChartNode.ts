import { ChartNodeResolvers } from "../generated/graphql";
import { prop } from "./util";

export const ChartNode: ChartNodeResolvers = {
  id: prop("id"),
  x: prop("x"),
  y: prop("y"),
  width: prop("width"),
  height: prop("height"),
  query: prop("query")
};
