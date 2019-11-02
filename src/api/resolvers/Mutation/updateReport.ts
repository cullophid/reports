import { MutationResolvers } from "../../../codegen/api";
import { knex } from "../../knex";
import { Report, Slide, Chart } from "../../Models";

export const updateReport: MutationResolvers["updateReport"] = async (
  _,
  { report },
  ctx
) => {
  if (!ctx.session.user) {
    throw new Error("You must be authenticated");
  }
  const reports = knex<Report>("reports");

  const { id: reportId, slides, ...reportUpdate } = report;

  const current = await reports
    .where("id", reportId)
    .andWhere("ownerId", ctx.session.user.sub)
    .first();

  if (!current) {
    throw new Error("Report does not exist");
  }

  await knex.transaction(async trx => {
    await trx<Report>("reports")
      .where("id", reportId)
      .update(reportUpdate);
    await trx<Slide>("slides")
      .whereNotIn("id", slides.map(s => s.id))
      .delete();
    await Promise.all(
      slides.map(({ id }) =>
        trx.raw("INSERT IGNORE INTO slides (id, reportId) VALUES (?) ", [
          [id, reportId]
        ])
      )
    );
    await Promise.all(
      slides.flatMap(({ id: slideId, charts }) =>
        charts.map(({ id, ...update }) =>
          trx.raw(
            `${knex("charts")
              .insert({ id, slideId, ...update })
              .toString()} ON DUPLICATE KEY ${knex
              .queryBuilder()
              .update({ slideId, ...update })
              .toString()
              .replace("update  set", "UPDATE")}`
          )
        )
      )
    );
    await Promise.all(
      slides.flatMap(slide =>
        slide.charts.map(({ id, ...chartUpdate }) =>
          trx<Chart>("charts")
            .where("id", id)
            .update(chartUpdate)
        )
      )
    );
    await trx<Chart>("charts")
      .whereNotIn("id", slides.flatMap(s => s.charts.map(c => c.id)))
      .delete();
  });

  return (await reports.where("id", reportId).first())!;
};
