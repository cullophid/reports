import { collection } from "../mongo";
import { ObjectID } from "bson";
import { Resolver } from "../Types";
import * as JWT from "../jwt";
import * as Email from "../email";
import { NotAuthenticatedError } from "../errors";
const TOKEN_EXPIRY = 2592000; // 30 days

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

export const fetch: Resolver<User | null, { id: ObjectID }> = (
  parent,
  { id },
  { user }
) => {
  if (!user) throw new NotAuthenticatedError();
  return run((users) =>
    users.findOne({ _id: id, organisation: user.organisation })
  );
};

export const unsafeFetchByEmail: Resolver<User | null, { email: string }> = (
  parent,
  { email },
  { user }
) => {
  return run((users) => users.findOne({ email }));
};

export const fetchInOrg: Resolver<User[], { organisation: ObjectID }> = (
  parent,
  { organisation },
  { user }
) => {
  if (!user) throw new NotAuthenticatedError();
  return run((users) => users.find({ organisation }).toArray());
};

export const create: Resolver<User | null, { user: UserCreate }> = async (
  parent,
  { user: newUser },
  { user }
) => {
  if (!user) throw new NotAuthenticatedError();
  let res = await run((users) =>
    users.insertOne({ ...newUser, organisation: user.organisation })
  );
  return { ...newUser, _id: res.insertedId, organisation: user.organisation };
};

export const authenticate: Resolver<boolean, { email: string }> = async (
  parent,
  { email },
  ctx
) => {
  console.log("AUTHENTICATE");
  let user = await unsafeFetchByEmail(parent, { email }, ctx);
  if (!user) return true;
  const payload = {
    user: {
      id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      organisation: user.organisation,
      isAdmin: true
    }
  };
  const token = await JWT.sign(payload, { expiresIn: TOKEN_EXPIRY });

  await Email.sendAuth(email, token);
  return true;
};
