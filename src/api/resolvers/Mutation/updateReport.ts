import { MutationResolvers } from "../../../codegen/api";
import { knex } from "../../knex";
import { Report } from "../../Models";

export const updateReport: MutationResolvers["updateReport"] = async (
  _,
  { report },
  ctx
) => {
  if (!ctx.session.user) {
    throw new Error("You must be authenticated");
  }
  const reports = knex<Report>("reports");

  const { id, ...data } = report;
  const current = await reports
    .where("id", id)
    .andWhere("ownerId", ctx.session.user.sub)
    .first();

  if (!current) {
    throw new Error("Report does not exist");
  }

  await reports.where("id", id).update(data);
  return await reports.where("id", id).first();
};
