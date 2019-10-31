import { UserResolvers } from "../../codegen/api";

export const User: UserResolvers = {
  id: user => user.id,
  firstName: user => user.firstName,
  lastName: user => user.lastName,
  email: user => user.email,
  createdAt: user => user.createdAt,
  reports: async ({ id }, _, ctx) => ctx.data.reports.owner.load(id)
};
