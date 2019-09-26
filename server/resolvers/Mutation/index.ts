import { MutationResolvers } from "../../codegen/graphql";
import { signin } from "./signin"
import { createReport } from "./createReport"



export const Mutation: MutationResolvers = {
  signin,
  createReport
}