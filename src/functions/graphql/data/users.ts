import { collection } from "../mongo";
import { ObjectID } from "bson";
import { Resolver } from "../Types";
import { EmailScalar } from "../scalars";

const run = collection("users");

export type User = {
  _id: ObjectID;
  firstname: string;
  lastname: string;
  email: string;
  organisation: ObjectID;
};

type UserCreate = {
  firstname: string;
  lastname: string;
  email: string;
  organisation: ObjectID;
  isAdmin: boolean;
};

export const fetch: Resolver<User | null, { id: ObjectID }> = (ctx, { id }) =>
  run((users) => users.findOne({ _id: id }));

export const fetchByEmail: Resolver<User | null, { email: string }> = (
  ctx,
  { email }
) => run((users) => users.findOne({ email }));

export const fetchInOrg: Resolver<User[], { organisation: ObjectID }> = (
  ctx,
  { organisation }
) => run((users) => users.find({ organisation }).toArray());

export const create: Resolver<User | null, { user: UserCreate }> = async (
  ctx,
  { user }
) => {
  let res = await run((users) => users.insertOne(user));
  return { ...user, _id: res.insertedId };
};

export const authenticate: Resolver<boolean, { email: string }> = async (
  ctx,
  { email }
) => {
  let user = await fetchByEmail(ctx, { email });
  if (!user) return true;
  // Emails.sendAuth(email);
  return true;
};
