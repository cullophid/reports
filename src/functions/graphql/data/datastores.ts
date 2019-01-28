import { collection } from "../mongo";
import { ObjectID } from "bson";
import { Resolver } from "../Types";
import { NotAuthenticatedError } from "../errors";

const run = collection("datastores");

export type Datastore = {
  _id: ObjectID;
  organisation: ObjectID;
  name: string;
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
};

type DatastoreCreate = {
  name: string;
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
};

type DatastoreUpdate = {
  id: string;
  name: string;
  host: string;
  port: number;
  user: string;
  password?: string;
  database: string;
};

export const Datastore = {
  id: (datastore: Datastore) => datastore._id.toHexString()
};

export const fetchAll: Resolver<Datastore[]> = (parent, args, { user }) => {
  if (!user) throw new NotAuthenticatedError();
  return run((datastores) =>
    datastores.find({ organisation: user.organisation }).toArray()
  );
};

export const fetch: Resolver<Datastore | null, { id: ObjectID }> = (
  parent,
  { id },
  { user }
) => {
  if (!user) throw new NotAuthenticatedError();
  return run((datastores) =>
    datastores.findOne({ _id: id, organisation: user.organisation })
  );
};

export const create: Resolver<
  Datastore,
  { datastore: DatastoreCreate }
> = async (parent, { datastore }, { user }) => {
  if (!user) throw new NotAuthenticatedError();
  let res = await run((datastores) =>
    datastores.insertOne({
      ...datastore,
      organisation: user.organisation
    })
  );

  return {
    ...datastore,
    _id: res.insertedId,
    organisation: user.organisation
  };
};

export const remove: Resolver<ObjectID, { id: ObjectID }> = async (
  parent,
  { id },
  { user }
) => {
  if (!user) throw new NotAuthenticatedError();
  await run((datastores) =>
    datastores.deleteOne({ _id: id, organisation: user.organisation })
  );
  return id;
};

export const update: Resolver<
  Datastore | null,
  { datastore: DatastoreUpdate }
> = async (parent, { datastore }, { user }) => {
  if (!user) throw new NotAuthenticatedError();
  await run((datastores) =>
    datastores.updateOne(
      { _id: datastore.id, organisation: user.organisation },
      { $set: datastore }
    )
  );
  return run((datastores) =>
    datastores.findOne({ _id: datastore.id, organisation: user.organisation })
  );
};
