import { QueryResolvers } from "../../codegen/api";
import { AuthenticationError } from "apollo-server-core";
import { knex } from "../knex";
import { Report } from "../Models";

export const Query: QueryResolvers = {
  currentUser: (_, {}, ctx) => {
    if (!ctx.session.user) {
      throw new AuthenticationError("You are not authenticated");
    }
    return ctx.data.users.id.load(ctx.session.user.sub);
  },
  reports: (_, {}, ctx) => {
    if (!ctx.session.user) {
      throw new AuthenticationError("You must be authenticated");
    }
    return ctx.data.reports.owner.load(ctx.session.user.sub);
  },
  report: async (_, { id }, ctx) => {
    const { user } = ctx.session;
    if (!user) {
      throw new AuthenticationError("You are not authenticated");
    }
    return (
      (await knex<Report>("reports")
        .where("id", id)
        .andWhere("ownerId", user.sub)
        .first()) || null
    );
  }
};
