import { MutationResolvers } from "../../../codegen/api";
import { AuthenticationError } from "apollo-server-core";
import cuid from "cuid";
import { knex } from "../../knex";
import { Report, Slide } from "../../Models";

export const createReport: MutationResolvers["createReport"] = async (
  _,
  { title },
  ctx
) => {
  const { user } = ctx.session;
  if (!user) {
    throw new AuthenticationError("You are not logged in");
  }

  const reportId = cuid();
  return knex.transaction(async trx => {
    await trx<Report>("reports").insert({
      id: reportId,
      title,
      width: 1280,
      height: 720,
      createdAt: new Date(),
      ownerId: user.sub
    });
    await trx<Slide>("slides").insert({
      id: cuid(),
      reportId
    });

    return (await trx<Report>("reports")
      .where("id", reportId)
      .first())!;
  });
};
