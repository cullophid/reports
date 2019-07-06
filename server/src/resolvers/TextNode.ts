import { TextNodeResolvers } from "../generated/graphql";
import { prop } from "./util";

export const TextNode: TextNodeResolvers = {
  id: prop("id"),
  value: prop("value"),
  x: prop("x"),
  y: prop("y"),
  width: prop("width"),
  height: prop("height"),
  fontSize: prop("fontSize"),
  textAlign: prop("textAlign"),
  color: prop("color")
};
