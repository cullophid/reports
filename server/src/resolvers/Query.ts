import { QueryResolvers } from "../generated/graphql";

export const Query: QueryResolvers = {
  reports: async ({}, {}, ctx) => {
    return ctx.prisma.reports();
  }
};
