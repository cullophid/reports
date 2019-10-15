import { ReportResolvers } from "../../codegen/api";

export const Report: ReportResolvers = {
  id: report => report._id,
  title: report => report.title,
  width: report => report.width,
  height: report => report.height,
  owner: async ({ owner }, _, ctx) => ctx.dataLoaders.users.id.load(owner),
  slides: report => report.slides
};
