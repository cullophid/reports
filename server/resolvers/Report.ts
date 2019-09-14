import { ReportResolvers } from "../codegen/graphql";

export const Report: ReportResolvers = {
  id: report => report.id,
  title: report => report.title,
  owner: (report, { }, ctx) => ctx.photon.reports.findOne({ where: { id: report.id } }).owner()
}