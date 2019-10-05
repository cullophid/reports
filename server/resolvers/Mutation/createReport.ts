import { MutationResolvers } from "../../codegen/graphql";
import { AuthenticationError } from "apollo-server-core";
import { ObjectId } from "mongodb";

export const createReport: MutationResolvers["createReport"] = async (_, { title }, ctx) => {
  if (!ctx.session.user) {
    throw new AuthenticationError("You are not logged in")
  }

  const _id = new ObjectId().toHexString()
  await ctx.collections.reports.insertOne({
    _id,
    title,
    width: 1280,
    height: 720,
    createdAt: new Date(),
    owner: ctx.session.user.sub,
    slides: []
  })


  return ctx.collections.reports.findOne({ _id })
}