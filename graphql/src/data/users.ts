import { collection } from "../mongo";
import { Resolver } from "../Types";

import { ID } from "../Types";
import uuid = require("uuid/v4");
import Dataloader from "dataloader";
import { keyBy } from "lodash";

const run = collection("users");

export type User = {
  _id: ID;
  createdAt: Date;
  updatedAt: Date;
  firstname: string;
  lastname: string;
  email: string;
};

const idLoader = new Dataloader<string, User | undefined>(async (ids) => {
  const users = await run<User[]>((users) =>
    users.find({ id: { $in: ids } }).toArray()
  );
  const indexed = keyBy(users, (user) => user._id);
  return ids.map((id) => indexed[id]);
});

export const get = idLoader.load;

const emailLoader = new Dataloader<string, User | null>(async (emails) => {
  console.log("emailLoader");
  const users = await run<User[]>((users) =>
    users.find({ email: { $in: emails } }).toArray()
  );
  console.log("emailloaderusers", users);
  const indexed = keyBy(users, (user) => user.email);
  return emails.map((email) => indexed[email]);
});

export const getByEmail = (email: string) => {
  console.log("getByEmail");
  return emailLoader.load(email);
};

export const create = async (email: string) => {
  const now = new Date();
  const user = {
    _id: uuid(),
    createdAt: now,
    updatedAt: now,
    firstname: "",
    lastname: "",
    email: email
  };
  let res = await run((users) => users.insertOne(user));
  console.log("User created", res);
  return user;
};
