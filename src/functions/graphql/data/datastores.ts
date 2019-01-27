import { collection } from "../mongo";
import { ObjectID } from "bson";
import { Resolver } from "../Types";

const run = collection("datastores");

export type Datastore = {
  _id: ObjectID;
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

export const fetchAll: Resolver<Datastore[]> = () =>
  run((datastores) => datastores.find({}).toArray());

export const fetch: Resolver<Datastore | null, { id: ObjectID }> = (
  ctx,
  { id }
) => run((datastores) => datastores.findOne({ _id: id }));

export const create: Resolver<
  Datastore,
  { datastore: DatastoreCreate }
> = async (ctx, { datastore }) => {
  let res = await run((datastores) => datastores.insertOne(datastore));
  return { ...datastore, _id: res.insertedId };
};

export const remove: Resolver<ObjectID, { id: ObjectID }> = async (
  ctx,
  { id }
) => {
  await run((datastores) => datastores.deleteOne({ _id: id }));
  return id;
};

export const update: Resolver<
  Datastore | null,
  { datastore: DatastoreUpdate }
> = async (ctx, { datastore }) => {
  await run((datastores) =>
    datastores.updateOne({ _id: datastore.id }, { $set: datastore })
  );
  return run((datastores) => datastores.findOne({ _id: datastore.id }));
};
