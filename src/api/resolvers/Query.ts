import { QueryResolvers } from "../../codegen/api";
import { AuthenticationError } from "apollo-server-core";

export const Query: QueryResolvers = {
  currentUser: (_, {}, ctx) => {
    if (!ctx.session.user) {
      throw new AuthenticationError("You are not authenticated");
    }
    return ctx.dataLoaders.users.id.load(ctx.session.user.sub);
  },
  reports: (_, {}, ctx) => {
    if (!ctx.session.user) {
      throw new AuthenticationError("You must be authenticated");
    }
    return ctx.dataLoaders.reports.owner.load(ctx.session.user.sub);
  },
  report: async (_, { id }, ctx) => {
    const { user } = ctx.session;
    if (!user) {
      throw new AuthenticationError("You are not authenticated");
    }
    return ctx.collections.reports.findOne({
      _id: id,
      owner: ctx.session.user.sub
    });
  }
};
