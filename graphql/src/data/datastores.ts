import { collection } from "../mongo";
import { Resolver, ID } from "../Types";
import uuid from "uuid/v4";
import { AuthenticationError } from "apollo-server";

const run = collection("datastores");

export type Datastore = {
  _id: ID;
  createdAt: Date;
  updatedAt: Date;
  owner: ID;
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

export const fetchAll: Resolver<Datastore[]> = (parent, args, { user }) => {
  return run((datastores) => datastores.find({ owner: user!.id }).toArray());
};

export const fetch: Resolver<Datastore | null, { id: ID }> = (
  parent,
  { id },
  { user }
) => {
  if (!user) throw new AuthenticationError("You are not authenticated");
  return run((datastores) => datastores.findOne({ _id: id, owner: user.id }));
};

export const create: Resolver<
  Datastore,
  { datastore: DatastoreCreate }
> = async (parent, { datastore }, { user }) => {
  const newDatastore: Datastore = {
    ...datastore,
    _id: uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
    owner: user!.id
  };
  let res = await run((datastores) => datastores.insertOne(newDatastore));
  console.log("Created new datastore", res);
  return newDatastore;
};

export const remove: Resolver<ID, { id: ID }> = async (
  parent,
  { id },
  { user }
) => {
  await run((datastores) => datastores.deleteOne({ _id: id, owner: user!.id }));
  return id;
};

export const update: Resolver<
  Datastore | null,
  { datastore: DatastoreUpdate }
> = async (parent, { datastore }, { user }) => {
  const { id, ...rest } = datastore;
  const $set = {
    ...rest,
    updatedAt: new Date()
  };
  await run((datastores) =>
    datastores.updateOne({ _id: datastore.id, owner: user!.id }, { $set })
  );
  return run((datastores) =>
    datastores.findOne({ _id: datastore.id, owner: user!.id })
  );
};
