import { MutationResolvers } from "../../codegen/graphql";
import { signin } from "./signin"
import { createReport } from "./createReport"
import { updateReport } from "./updateReport"



export const Mutation: MutationResolvers = {
  signin,
  createReport,
  updateReport
}