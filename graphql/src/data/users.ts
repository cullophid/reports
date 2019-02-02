import { collection } from "../mongo";
import { Resolver } from "../Types";
import * as JWT from "../jwt";
import * as Email from "../email";
import { ID } from "../Types";
import uuid = require("uuid/v4");
const TOKEN_EXPIRY = 2592000; // 30 days

const run = collection("users");

export type User = {
  _id: ID;
  createdAt: Date;
  updatedAt: Date;
  firstname: string;
  lastname: string;
  email: string;
};

export const fetch: Resolver<User | null, { id: ID }> = (
  parent,
  { id },
  { user }
) => {
  return run((users) => users.findOne({ _id: id }));
};

export const unsafeFetchByEmail: Resolver<User | null, { email: string }> = (
  parent,
  { email },
  { user }
) => {
  console.log("unsafe FETCH", email);
  return run((users) => users.findOne({ email }));
};

export const fetchInOrg: Resolver<User[], { organisation: ID }> = (
  parent,
  { organisation },
  { user }
) => {
  return run((users) => users.find({ organisation }).toArray());
};

export const authenticate: Resolver<boolean, { email: string }> = async (
  parent,
  { email },
  ctx
) => {
  let user = await unsafeFetchByEmail(parent, { email }, ctx);
  if (!user) {
    user = {
      _id: uuid(),
      createdAt: new Date(),
      updatedAt: new Date(),
      firstname: "",
      lastname: "",
      email: email
    };
    let res = await run((users) => users.insertOne(user));
    console.log("Created new user", res);
  }
  const payload = {
    user: {
      id: user._id,
      createdAt: new Date(),
      updatedAt: new Date(),
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email
    }
  };
  console.log("Payload", payload);
  const token = await JWT.sign(payload, { expiresIn: TOKEN_EXPIRY });
  console.log("token", token);

  await Email.sendAuth(email, token);
  console.log("SENT!");
  return true;
};
