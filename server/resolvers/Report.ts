import { ReportResolvers } from "../codegen/graphql";

export const Report: ReportResolvers = {
  id: report => report.id,
  title: report => report.title,
  width: report => report.width,
  height: report => report.height,
  owner: ({ id }, _, ctx) => ctx.photon.reports.findOne({ where: { id } }).owner(),
  slides: ({ id }, _, ctx) => ctx.photon.reports.findOne({ where: { id } }).slides()
}