import { MutationResolvers } from "../../codegen/graphql";
import { AuthenticationError } from "apollo-server-core";

export const createReport: MutationResolvers["createReport"] = async (_, { title }, ctx) => {
  if (!ctx.session.user) {
    throw new AuthenticationError("You are not logged in")
  }
  return ctx.photon.reports.create({
    data: {
      title,
      width: 1280,
      height: 720,
      owner: {
        connect: {
          id: ctx.session.user.sub
        }
      }
    }
  })
}