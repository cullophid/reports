import { collection } from "../mongo";
import { ObjectID } from "bson";
import { Resolver } from "../Types";
import { NotAuthenticatedError, ForbiddenError } from "../errors";

const run = collection("organisations");

export type Organisation = {
  _id: ObjectID;
  name: string;
};

type OrganisationCreate = {
  name: string;
};

export const fetch: Resolver<Organisation | null, { id: ObjectID }> = async (
  parent,
  { id },
  { user }
) => {
  if (!user) throw new NotAuthenticatedError();
  if (user.isAdmin || user.organisation === id) {
    return run((orgs) => orgs.findOne({ _id: id }));
  }
  return null;
};

export const fetchAll: Resolver<Organisation[], {}> = (
  parent,
  args,
  { user }
) => {
  if (!user) throw new NotAuthenticatedError();
  const select = user.isAdmin ? {} : { _id: user.organisation };
  return run((orgs) => orgs.find(select).toArray());
};

export const create: Resolver<
  Organisation,
  { organisation: OrganisationCreate }
> = async (arent, { organisation }, { user }): Promise<Organisation> => {
  if (!user) throw new NotAuthenticatedError();
  if (!user.isAdmin) throw new ForbiddenError();
  let res = await run((orgs) => orgs.insertOne(organisation));
  return { ...organisation, _id: res.insertedId };
};
