import { collection } from "../mongo";
import { Resolver, ID } from "../Types";
import uuid from "uuid/v4";
import { AuthenticationError } from "apollo-server";
import Dataloader from "dataloader";
import { keyBy, groupBy } from "lodash";

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
  owner: ID;
};

type DatastoreUpdate = {
  id: string;
  name?: string;
  host?: string;
  port?: number;
  user?: string;
  password?: string;
  database?: string;
  owner: string;
};

const ownerLoader = new Dataloader<string, Datastore[]>(async (ids) => {
  const datastores = await run<Datastore[]>((datastores) =>
    datastores
      .find({
        owner: {
          $in: ids
        }
      })
      .toArray()
  );
  const indexed = groupBy(datastores, (datastore) => datastore.owner);
  return ids.map((id) => indexed[id] || []);
});

export const listByOwner = ownerLoader.load;

const idLoader = new Dataloader<string, Datastore | undefined>(async (ids) => {
  const datastores = await run<Datastore[]>((datastores) =>
    datastores
      .find({
        _id: {
          $in: ids
        }
      })
      .toArray()
  );
  const indexed = keyBy(datastores, (datastore) => datastore._id);
  return ids.map((id) => indexed[id] || []);
});

export const get = idLoader.load;

export const create = async (datastore: DatastoreCreate) => {
  const newDatastore: Datastore = {
    ...datastore,
    _id: uuid(),
    createdAt: new Date(),
    updatedAt: new Date()
  };
  let res = await run((datastores) => datastores.insertOne(newDatastore));
  console.log("Created new datastore", res);
  return newDatastore;
};

export const remove = async (id: string) => {
  await run((datastores) => datastores.deleteOne({ _id: id }));
  return id;
};

export const update = async (datastore: DatastoreUpdate) => {
  const { id, ...rest } = datastore;
  const $set = {
    ...rest,
    updatedAt: new Date()
  };
  await run((datastores) =>
    datastores.updateOne(
      { _id: datastore.id, owner: datastore.owner },
      { $set }
    )
  );
  return run<Datastore | null>((datastores) =>
    datastores.findOne({ _id: datastore.id, owner: datastore.owner })
  );
};
