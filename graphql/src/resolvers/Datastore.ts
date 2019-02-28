import { Resolver } from "../Types";
import * as Datastores from "../data/Datastores";
import * as Users from "../data/Users";

const owner: Resolver<Datastores.Datastore, {}, Users.User | undefined> = (
  datastore,
  {},
  ctx
) => Users.get(datastore.owner);

export const Datastore = {
  owner
};
