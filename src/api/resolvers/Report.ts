import { ReportResolvers } from "../../codegen/api";

export const Report: ReportResolvers = {
  id: report => report.id,
  title: report => report.title,
  width: report => report.width,
  height: report => report.height,
  owner: async ({ ownerId }, _, ctx) => ctx.data.users.id.load(ownerId),
  slides: (report, _, ctx) => ctx.data.slides.report.load(report.id)
};
