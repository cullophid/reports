import { MutationResolvers } from "../../codegen/graphql";

export const updateReport: MutationResolvers["updateReport"] = async (_, { report }, ctx) => {
  if (!ctx.session.user) {
    throw new Error("You must be authenticated")
  }

  const { id: _id, ...data } = report;

  const current = await ctx.collections.reports.findOne({
    _id,
    owner: ctx.session.user.sub
  })

  if (!current) {
    throw new Error("Report does not exist")
  }
  await ctx.collections.reports.update({
    _id
  }, {
    $set: data
  })
  return ctx.collections.reports.findOne({ _id })
}