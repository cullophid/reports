import { ReportResolvers } from "../generated/graphql";
import { prop } from "./util";

export const Report: ReportResolvers = {
  id: prop("id"),
  title: prop("title"),
  owner: prop("owner"),
  width: prop("width"),
  height: prop("height"),
  slides: async (parent, {}, { prisma }) => {
    const report = await parent;
    return prisma
      .report({
        id: report.id
      })
      .slides();
  }
};
