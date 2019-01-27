import { collection } from "../mongo";
import { ObjectID } from "bson";

const run = collection("users");

export type User = {
  _id: ObjectID;
  firstname: string;
  lastname: string;
  email: number;
  organisation: ObjectID;
};

type UserCreate = {
  firstname: string;
  lastname: string;
  email: string;
  organisation: ObjectID;
  isAdmin: boolean;
};

export const fetch = (id: ObjectID): Promise<User | null> =>
  run((users) => users.findOne({ _id: id }));

export const fetchInOrg = (organisation: ObjectID): Promise<User[]> =>
  run((users) => users.find({ organisation }).toArray());

export const create = async (user: UserCreate) => {
  let res = await run((users) => users.insertOne(user));
  return { ...user, _id: res.insertedId };
};
