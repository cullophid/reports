import { collection } from "../mongo";
import { ObjectID } from "bson";

const run = collection("organisations");

export type Organisation = {
  _id: ObjectID;
  name: string;
};

type OrganisationCreate = {
  name: string;
};

export const fetch = (id: ObjectID): Promise<Organisation | null> =>
  run((orgs) => orgs.findOne({ _id: id }));

export const create = async (org: OrganisationCreate) => {
  let res = await run((orgs) => orgs.insertOne(org));
  return { ...org, _id: res.insertedId };
};
