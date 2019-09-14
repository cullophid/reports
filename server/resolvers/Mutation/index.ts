import { MutationResolvers } from "../../codegen/graphql";
import { signin } from "./signin"



export const Mutation: MutationResolvers = {
  signin
}