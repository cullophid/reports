import { collection } from "../mongo";
import { ObjectId, ObjectID } from "bson";

const run = collection("datastores");

type Datastore = {
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

export const fetchDatastores = () =>
  run((datastores) => datastores.find({}).toArray());

export const fetchDatastore = (id: string) =>
  run((datastores) => datastores.findOne({ _id: new ObjectId(id) }));

export const createDatastore = async (datastore: DatastoreCreate) => {
  let res = await run((datastores) => datastores.insertOne(datastore));
  return { ...datastore, _id: res.insertedId };
};

export const deleteDatastore = async (id: string) => {
  await run((datastores) => datastores.deleteOne({ _id: new ObjectId(id) }));
  return id;
};

export const updateDatastore = async (datastore: DatastoreUpdate) => {
  await run((datastores) =>
    datastores.updateOne(
      { _id: new ObjectId(datastore.id) },
      { $set: datastore }
    )
  );
  return datastore;
};
