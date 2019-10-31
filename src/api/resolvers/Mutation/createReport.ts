import { MutationResolvers } from "../../../codegen/api";
import { AuthenticationError } from "apollo-server-core";
import cuid from "cuid";
import { knex } from "../../knex";
import { Report } from "../../Models";

export const createReport: MutationResolvers["createReport"] = async (
  _,
  { title },
  ctx
) => {
  if (!ctx.session.user) {
    throw new AuthenticationError("You are not logged in");
  }

  const id = cuid();
  await knex<Report>("reports").insert({
    id,
    title,
    width: 1280,
    height: 720,
    createdAt: new Date(),
    ownerId: ctx.session.user.sub
  });

  return await knex<Report>("reports")
    .where("id", id)
    .first();
};
