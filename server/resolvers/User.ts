import { UserResolvers } from "../codegen/graphql";

export const User: UserResolvers = {
  id: user => user.id,
  firstName: user => user.firstName,
  lastName: user => user.lastName,
  email: user => user.email,
  createdAt: user => user.createdAt,
  reports: (user, _, ctx) => ctx.photon.users.findOne({ where: { id: user.id } }).reports()
}