import { collection } from "../mongo";
import { ObjectID } from "bson";
import { Resolver } from "../Types";

const run = collection("organisations");

export type Organisation = {
  _id: ObjectID;
  name: string;
};

type OrganisationCreate = {
  name: string;
};

export const fetch: Resolver<Organisation | null, { id: ObjectID }> = (
  ctx,
  { id }
) => run((orgs) => orgs.findOne({ _id: id }));

export const fetchAll: Resolver<Organisation[], {}> = () =>
  run((orgs) => orgs.find({}).toArray());

export const create: Resolver<
  Organisation,
  { organisation: OrganisationCreate }
> = async (ctx, { organisation }): Promise<Organisation> => {
  let res = await run((orgs) => orgs.insertOne(organisation));
  return { ...organisation, _id: res.insertedId };
};
