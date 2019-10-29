import { UserResolvers } from "../../codegen/api";

export const User: UserResolvers = {
  id: user => user._id,
  firstName: user => user.firstName,
  lastName: user => user.lastName,
  email: user => user.email,
  createdAt: user => user.createdAt,
  reports: async ({ _id }, _, ctx) => ctx.dataLoaders.reports.owner.load(_id)
};
