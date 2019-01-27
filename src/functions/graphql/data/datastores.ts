import { collection } from "../mongo";
import { ObjectID } from "bson";

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

export const fetchAll = () =>
  run((datastores) => datastores.find({}).toArray());

export const fetch = (_id: ObjectID) =>
  run((datastores) => datastores.findOne({ _id }));

export const create = async (datastore: DatastoreCreate) => {
  let res = await run((datastores) => datastores.insertOne(datastore));
  return { ...datastore, _id: res.insertedId };
};

export const remove = async (_id: ObjectID) => {
  await run((datastores) => datastores.deleteOne({ _id }));
  return _id;
};

export const update = async (datastore: DatastoreUpdate) => {
  await run((datastores) =>
    datastores.updateOne({ _id: datastore.id }, { $set: datastore })
  );
  return datastore;
};
